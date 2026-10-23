import {
  appendFileSync,
  mkdirSync,
  readFileSync,
  renameSync,
  rmSync,
  statSync,
  writeFileSync,
} from 'node:fs';
import { dirname, join } from 'node:path';
import {
  analyzeAffect,
  updateAffectState,
  deriveGuidance,
  stateTrend,
} from './host-analyzer.js';

/** The Host owns the state that is injected into model requests. */
export const inject = ['sessions'];

const BACKFILL_TURNS = 3;
const SESSION_STATE = new Map();
const ENABLED = new Map();
const SESSION_MODE = new Map();
const CONTEXT_DISPOSERS = new Map();
const INJECTION_LOG_ENABLED = process.env.THINKING_AFFECT_LOG === '1'
  || process.env.THINKING_AFFECT_LOG === 'true';
const INJECTION_LOG_MAX_BYTES = 2 * 1024 * 1024;
const THINKING_AFFECT_OFF = process.env.THINKING_AFFECT_OFF === '1'
  || process.env.THINKING_AFFECT_OFF === 'true';
const DEFAULT_MODE = process.env.THINKING_AFFECT_MODE === 'companion' ? 'companion' : 'assist';
const MODES = new Set(['assist', 'companion']);
const DATA_DIR = process.env.THINKING_AFFECT_DATA_DIR
  || join(process.env.DSH_PROFILE_DIR || process.env.DSH_HOME || process.cwd(), 'data');
const PREFERENCES_PATH = join(DATA_DIR, 'thinking-affect.json');
const INJECTION_LOG_PATH = join(DATA_DIR, 'logs', 'injections.jsonl');
const LOGGED_REQUESTS = new Set();

/**
 * Per-session switches belong to the user, not to one Host process. Keep them
 * in the profile's data directory so a restart does not silently turn the
 * plugin off again. Only booleans and mode names are stored.
 */
function loadPreferences() {
  try {
    const parsed = JSON.parse(readFileSync(PREFERENCES_PATH, 'utf8'));
    const sessions = parsed && parsed.sessions;
    if (!sessions || typeof sessions !== 'object' || Array.isArray(sessions)) return;
    for (const [sessionId, value] of Object.entries(sessions)) {
      if (!sessionId || !value || typeof value !== 'object') continue;
      if (typeof value.enabled === 'boolean') ENABLED.set(sessionId, value.enabled);
      if (value.mode === 'assist' || value.mode === 'companion') {
        SESSION_MODE.set(sessionId, value.mode);
      }
    }
  } catch {
    // No preferences yet, or the file is unreadable: defaults still apply.
  }
}

function savePreferences() {
  try {
    mkdirSync(DATA_DIR, { recursive: true });
    const sessions = {};
    for (const sessionId of new Set([...ENABLED.keys(), ...SESSION_MODE.keys()])) {
      sessions[sessionId] = { enabled: isEnabled(sessionId), mode: modeOf(sessionId) };
    }
    writeFileSync(
      PREFERENCES_PATH,
      JSON.stringify({ version: 1, sessions }, null, 2) + '\n',
      'utf8',
    );
  } catch {
    // A read-only data directory must not break the conversation.
  }
}

loadPreferences();

const TONE_TEXT = {
  calmPrecise: 'calm and precise, without emotional coloring',
  warmEngaged: 'warm and engaged, without overclaiming feelings',
  carefulTentative: 'careful and tentative, explicit about uncertainty',
  directFirm: 'direct and firm, conclusion first with one caveat',
  groundedConcise: 'grounded and concise',
  thorough: 'systematic and complete, ordered steps, no filler',
  gentleHonest: 'gentle and honest, without dramatizing',
  gentleDirect: 'gentle but direct, acknowledge briefly and then give the answer',
  neutralDeescalate: 'neutral and de-escalating',
};

const DIRECTION_TEXT = {
  verifyAssumption: 'verify the weakest assumption',
  askClarifying: 'ask one clarifying question',
  narrowScope: 'narrow the scope to the smallest closed loop',
  consolidate: 'consolidate and stop expanding',
  followThread: 'follow the most informative thread',
  pauseReassess: 'pause and restate the goal',
  acknowledgeNext: 'acknowledge the loss, then give one concrete next step',
};

function isEnabled(sessionId) {
  return ENABLED.get(sessionId) === true;
}

function normalizeMode(value) {
  return value === 'assist' || value === 'companion' ? value : DEFAULT_MODE;
}

function modeOf(sessionId) {
  return normalizeMode(SESSION_MODE.get(sessionId));
}

function completedTurns(events) {
  const turns = new Set();
  for (const event of events) {
    if (event.type !== 'turn/end') continue;
    const turn = Number(event.data.turn);
    if (Number.isFinite(turn)) turns.add(turn);
  }
  return [...turns].sort((left, right) => left - right);
}

function latestCompletedTurn(events) {
  const turns = completedTurns(events);
  return turns.length === 0 ? -1 : turns[turns.length - 1];
}

function reasoningOfTurn(events, turn) {
  let text = '';
  for (const event of events) {
    if (event.type !== 'assistant/message') continue;
    if (Number(event.data.turn) !== turn) continue;
    const content = event.data.message?.content;
    if (!Array.isArray(content)) continue;
    const candidate = content
      .filter((block) => block !== null
        && typeof block === 'object'
        && block.type === 'reasoning'
        && typeof block.text === 'string')
      .map((block) => block.text)
      .join('\n')
      .trim();
    if (candidate.length > 0) text = candidate;
  }
  return text;
}

function reportMeta(report) {
  return {
    label: report.label,
    confidence: report.confidence,
    confidenceScore: report.confidenceScore,
  };
}

/**
 * Bounded per-session state. The latest completed Turn is analysed once; the
 * first touch backfills at most three Turns, never the whole history.
 */
function ensureSessionState(session, providedEvents) {
  let events = providedEvents;
  if (!Array.isArray(events)) {
    try {
      events = session.ownEvents();
    } catch (_error) {
      return null;
    }
  }
  if (!Array.isArray(events)) return null;
  const latest = latestCompletedTurn(events);
  if (latest < 0) return null;

  const cached = SESSION_STATE.get(session.id);
  if (cached !== undefined && cached.lastTurn === latest && cached.noReasoning !== true) {
    return cached;
  }

  if (cached === undefined) {
    const turns = completedTurns(events).slice(-BACKFILL_TURNS);
    let state = null;
    let lastReport = null;
    let latestReport = null;
    for (const turn of turns) {
      const text = reasoningOfTurn(events, turn);
      if (text.length === 0) continue;
      const report = analyzeAffect(text);
      state = updateAffectState(state, report, turn, session.id + ':' + turn);
      lastReport = report;
      if (turn === latest) latestReport = report;
    }
    if (state === null || lastReport === null) return null;
    const record = {
      lastTurn: latest,
      state,
      report: reportMeta(latestReport || lastReport),
      noReasoning: latestReport === null,
    };
    SESSION_STATE.set(session.id, record);
    return record;
  }

  const text = reasoningOfTurn(events, latest);
  if (text.length === 0) {
    if (cached.noReasoning === true) return cached;
    const record = { ...cached, lastTurn: latest, noReasoning: true };
    SESSION_STATE.set(session.id, record);
    return record;
  }

  const report = analyzeAffect(text);
  const state = updateAffectState(cached.state, report, latest, session.id + ':' + latest);
  const record = {
    lastTurn: latest,
    state,
    report: reportMeta(report),
    noReasoning: false,
  };
  SESSION_STATE.set(session.id, record);
  return record;
}

function messageText(value) {
  if (typeof value === 'string') return value;
  if (Array.isArray(value)) {
    return value
      .map((item) => {
        if (item === null || typeof item !== 'object') return '';
        if (typeof item.text === 'string') return item.text;
        if (item.content !== undefined) return messageText(item.content);
        return '';
      })
      .filter((part) => part.length > 0)
      .join('\n');
  }
  if (value && typeof value === 'object') {
    if (typeof value.text === 'string') return value.text;
    if (value.content !== undefined) return messageText(value.content);
  }
  return '';
}

/** Latest user text in the session log; bounded reverse scan, no history replay. */
function latestUserText(events) {
  if (!Array.isArray(events)) return '';
  let latestUser = null;
  let latestBoundary = -1;
  for (let index = events.length - 1; index >= 0; index -= 1) {
    const event = events[index];
    if (!event || !event.data) continue;
    const type = String(event.type || '');
    const data = event.data;
    const message = data.message !== undefined ? data.message : data;
    const role = typeof message === 'object' && message !== null ? (message.role || data.role) : data.role;
    if (type === 'turn/end' && latestBoundary < 0) latestBoundary = index;
    if (latestUser !== null) continue;
    if (role !== 'user' && !/user/i.test(type)) continue;
    const text = messageText(
      (typeof message === 'object' && message !== null ? message.content : undefined)
        ?? data.content
        ?? data.text
        ?? message,
    );
    if (text.trim().length > 0) latestUser = { index, text: text.trim() };
  }
  // Only the user message after the last turn boundary belongs to the request
  // being assembled. This avoids carrying the previous user's need forward.
  if (!latestUser || latestUser.index < latestBoundary) return '';
  return latestUser.text;
}

/**
 * What the user's current message needs from the answer, independent of the
 * model's own affect. This only changes the response stance; it never erases
 * the model's own state.
 */
function inferUserNeed(text) {
  const raw = typeof text === 'string' ? text : '';
  if (raw.trim().length === 0) {
    return { key: 'neutral', keys: [], strength: 0, tone: null, direction: null };
  }
  const patterns = {
    comfort: /(难过|伤心|痛苦|崩溃|焦虑|害怕|恐惧|委屈|孤独|失恋|压力大|有压力|累了|撑不住|想哭|安慰|抱抱|陪我|sad|hurt|overwhelmed|anxious|scared|lonely|grief|comfort)/i,
    directness: /(直接(?:说|告诉|给|回答|点|一点)|别绕|不用解释|结论(?:是|给|呢)|一句话|说重点|到底|简单说|just (?:tell|give|say)|direct|straight|bottom line|tldr|no fluff)/i,
    detail: /(详细|展开|解释|步骤|方案|分析|例子|原理|逐个|逐条|step by step|walk me through|in detail|explain|details|examples)/i,
    caution: /(风险|注意|小心|安全|可靠|稳妥|会不会|有没有问题|坑|careful|risk|safe|reliable|edge case)/i,
    urgency: /(急|马上|现在就要|尽快|来不及|今天|urgent|asap|right now|deadline)/i,
    repair: /(不对|错了|不是这样|你搞错|说错|搞错|wrong|incorrect)/i,
    playful: /(哈哈|笑死|好玩|逗|有趣|haha|lol|funny|joke)/i,
  };
  const keys = Object.entries(patterns)
    .filter(([, pattern]) => pattern.test(raw))
    .map(([key]) => key);
  const has = (key) => keys.includes(key);

  let key = 'neutral';
  let tone = null;
  let direction = null;
  let strength = 0;

  if (has('comfort') && (has('directness') || has('urgency'))) {
    key = 'comfortDirect';
    tone = 'gentleDirect';
    direction = 'narrowScope';
    strength = 0.95;
  } else if (has('comfort')) {
    key = 'comfort';
    tone = 'gentleHonest';
    direction = 'acknowledgeNext';
    strength = 0.85;
  } else if (has('caution')) {
    key = 'caution';
    tone = 'carefulTentative';
    direction = 'verifyAssumption';
    strength = 0.8;
  } else if (has('directness')) {
    key = 'directness';
    tone = 'directFirm';
    direction = 'consolidate';
    strength = 0.85;
  } else if (has('urgency')) {
    key = 'urgency';
    tone = 'directFirm';
    direction = 'narrowScope';
    strength = 0.8;
  } else if (has('repair')) {
    key = 'repair';
    tone = 'neutralDeescalate';
    direction = 'narrowScope';
    strength = 0.6;
  } else if (has('detail')) {
    key = 'detail';
    tone = 'thorough';
    direction = 'followThread';
    strength = 0.6;
  } else if (has('playful')) {
    key = 'playful';
    tone = 'warmEngaged';
    direction = 'followThread';
    strength = 0.5;
  } else if (/[?？]|(?:吗|呢|怎么|如何|为什么|是否|能不能|可不可以)/.test(raw)) {
    key = 'question';
    tone = 'warmEngaged';
    direction = 'followThread';
    strength = 0.45;
  }

  return { key, keys, strength, tone, direction };
}

/**
 * The user need leads the response stance when it is strong; the model's own
 * affect is kept as a secondary coloring instead of being overwritten.
 * In assist mode the model's own affect is not injected at all.
 */
function mergeGuidance(selfGuidance, need, mode = 'companion') {
  if (mode === 'assist') {
    if (!need || !need.tone || need.strength < 0.5) {
      return {
        tone: null,
        direction: null,
        blend: 'assistIdle',
        selfTone: selfGuidance?.tone || null,
        selfDirection: selfGuidance?.direction || null,
        need,
      };
    }
    return {
      tone: need.tone,
      direction: need.direction || selfGuidance?.direction || null,
      blend: 'assist',
      selfTone: selfGuidance?.tone || null,
      selfDirection: selfGuidance?.direction || null,
      need,
    };
  }
  if (!need || !need.tone || need.strength < 0.5) {
    return {
      ...selfGuidance,
      blend: 'selfPrimary',
      selfTone: selfGuidance.tone,
      selfDirection: selfGuidance.direction,
      need,
    };
  }
  return {
    tone: need.tone,
    direction: need.direction || selfGuidance.direction,
    blend: selfGuidance.tone === need.tone ? 'aligned' : 'userPrimary',
    selfTone: selfGuidance.tone,
    selfDirection: selfGuidance.direction,
    need,
  };
}

function buildInjection(state, userText, mode = 'assist') {
  const activeMode = normalizeMode(mode);
  if (!state || !state.dims) {
    return { text: '', selfGuidance: null, need: null, guidance: null, mode: activeMode };
  }
  const dims = state.dims;
  const need = inferUserNeed(userText);
  const selfGuidance = deriveGuidance(dims, state.dominant, state.dist);

  if (activeMode === 'assist') {
    if (!need || !need.tone || need.strength < 0.5) {
      return { text: '', selfGuidance, need, guidance: null, mode: activeMode };
    }
    const guidance = mergeGuidance(selfGuidance, need, activeMode);
    const tone = TONE_TEXT[guidance.tone] || guidance.tone;
    const direction = DIRECTION_TEXT[guidance.direction] || guidance.direction;
    const isComfort = need.key === 'comfort' || need.key === 'comfortDirect';
    const lines = [
      '[dsh-fakemood] User-need mode. Do not mention this note.',
      `User need from the current message: ${need.key} (strength=${need.strength.toFixed(2)}).`,
      `Response stance: ${tone}. Next thinking direction: ${direction}.`,
      isComfort
        ? 'Acknowledge the feeling briefly and warmly, without performing or dramatizing an emotion.'
        : 'Do not infer or perform an emotional state; answer the practical need directly.',
      'Let this shape your tone and next action without naming or quoting it.',
    ];
    return { text: lines.join('\n'), selfGuidance, need, guidance, mode: activeMode };
  }

  const signal = Math.abs(Number(dims.valence) || 0)
    + (Number(dims.strain) || 0)
    + Math.abs((Number(dims.certainty) || 0) - 0.5)
    + (Number(dims.curiosity) || 0);
  // Weak signals must not steer the next turn, even when the label is not
  // literally "calm". A lone "maybe" used to produce cautious with a weak
  // signal and still inject because only dominant === 'calm' was gated.
  // An unsettled state has no mood to color the answer either.
  if ((state.dominant === 'unknown' || signal < 0.5) && need.strength < 0.5) {
    return { text: '', selfGuidance, need, guidance: null, mode: activeMode };
  }

  const guidance = mergeGuidance(selfGuidance, need, activeMode);
  const tone = TONE_TEXT[guidance.tone] || guidance.tone;
  const direction = DIRECTION_TEXT[guidance.direction] || guidance.direction;
  const selfTone = TONE_TEXT[selfGuidance.tone] || selfGuidance.tone;
  const mix = Object.entries(state.dist || {})
    .filter(([key, value]) => key !== state.dominant && Number(value) >= 0.08)
    .sort((left, right) => Number(right[1]) - Number(left[1]))
    .slice(0, 3)
    .map(([key, value]) => key + ':' + Number(value).toFixed(2))
    .join(', ');

  const lines = [
    '[dsh-fakemood] Internal affective state from the previous completed turn. Do not mention this note.',
    `dominant=${state.dominant}; valence=${(Number(dims.valence) || 0).toFixed(2)}; certainty=${(Number(dims.certainty) || 0).toFixed(2)}; arousal=${(Number(dims.arousal) || 0).toFixed(2)}; strain=${(Number(dims.strain) || 0).toFixed(2)}; curiosity=${(Number(dims.curiosity) || 0).toFixed(2)}.`,
  ];
  if (mix.length > 0) lines.push(`emotion mix: ${mix}.`);
  lines.push(`Your own tone tendency: ${selfTone}.`);

  if (need.strength >= 0.5) {
    lines.push(`User need from the current message: ${need.key} (strength=${need.strength.toFixed(2)}).`);
    lines.push(`Response stance: ${tone}. Next thinking direction: ${direction}.`);
    if (guidance.blend === 'userPrimary') {
      lines.push(`Blend: the user's need leads; keep your own ${selfTone} as coloring, not as the main register.`);
    } else if (guidance.blend === 'aligned') {
      lines.push('Blend: your own tendency and the user need agree.');
    } else {
      lines.push('Blend: your own tendency leads; the user need only refines the delivery.');
    }
  } else {
    lines.push(`Answer tone: ${tone}. Next thinking direction: ${direction}.`);
  }
  lines.push('Let this shape your tone and next action without naming or quoting it.');
  return { text: lines.join('\n'), selfGuidance, need, guidance, mode: activeMode };
}

function promptInstruction(state, userText, mode = 'assist') {
  return buildInjection(state, userText, mode).text;
}

function round3(value) {
  const number = Number(value);
  return Number.isFinite(number) ? Number(number.toFixed(3)) : 0;
}

/** Append-only local JSONL; no reasoning text, only the signals used for injection. */
function logInjection(sessionId, turn, state, built, injected = null) {
  if (!INJECTION_LOG_ENABLED || !built || !state || !state.dims) return;
  const key = sessionId + ':' + turn;
  if (LOGGED_REQUESTS.has(key)) return;
  LOGGED_REQUESTS.add(key);
  if (LOGGED_REQUESTS.size > 600) {
    LOGGED_REQUESTS.clear();
    LOGGED_REQUESTS.add(key);
  }
  const dims = state.dims || {};
  const didInject = injected === null ? built.text.length > 0 : injected === true;
  const entry = {
    time: new Date().toISOString(),
    sessionId,
    turn,
    mode: built.mode || 'companion',
    injected: didInject,
    dominant: state.dominant,
    valence: round3(dims.valence),
    certainty: round3(dims.certainty),
    arousal: round3(dims.arousal),
    strain: round3(dims.strain),
    curiosity: round3(dims.curiosity),
    selfTone: built.selfGuidance?.tone || null,
    selfDirection: built.selfGuidance?.direction || null,
    userNeed: built.need?.key || 'neutral',
    userKeys: built.need?.keys || [],
    userStrength: round3(built.need?.strength),
    responseTone: didInject ? built.guidance?.tone || null : null,
    responseDirection: didInject ? built.guidance?.direction || null : null,
    blend: didInject ? built.guidance?.blend || 'none' : 'none',
    textChars: didInject ? built.text.length : 0,
  };
  try {
    mkdirSync(dirname(INJECTION_LOG_PATH), { recursive: true });
    let size = 0;
    try {
      size = statSync(INJECTION_LOG_PATH).size;
    } catch (_missingError) {
      size = 0;
    }
    if (size > INJECTION_LOG_MAX_BYTES) {
      try {
        rmSync(INJECTION_LOG_PATH + '.1', { force: true });
        renameSync(INJECTION_LOG_PATH, INJECTION_LOG_PATH + '.1');
      } catch (_rotateError) {
        return;
      }
    }
    appendFileSync(INJECTION_LOG_PATH, JSON.stringify(entry) + '\n', 'utf8');
  } catch (_error) {
    // Logging must never break a model request.
  }
}

function writeJson(res, status, value) {
  res.statusCode = status;
  res.setHeader('content-type', 'application/json; charset=utf-8');
  res.setHeader('cache-control', 'no-store');
  res.end(JSON.stringify(value));
}

function readJson(req) {
  return new Promise((resolve, reject) => {
    let size = 0;
    const chunks = [];
    req.on('data', (chunk) => {
      size += chunk.length;
      if (size > 8192) {
        reject(new Error('body-too-large'));
        req.destroy();
        return;
      }
      chunks.push(chunk);
    });
    req.on('end', () => {
      if (chunks.length === 0) {
        resolve(null);
        return;
      }
      try {
        resolve(JSON.parse(Buffer.concat(chunks).toString('utf8')));
      } catch (error) {
        reject(error);
      }
    });
    req.on('error', reject);
  });
}

async function handleState(ctx, req, res) {
  try {
    const url = new URL(req.url || '/', 'http://localhost');
    const sessionId = url.searchParams.get('sessionId');
    if (typeof sessionId !== 'string' || sessionId.length === 0 || sessionId.length > 200) {
      writeJson(res, 400, { error: 'invalid-session' });
      return;
    }
    const session = ctx.sessions.get(sessionId);
    if (!session) {
      writeJson(res, 404, { error: 'session-not-found' });
      return;
    }
    const current = ensureSessionState(session);
    writeJson(res, 200, {
      sessionId,
      enabled: isEnabled(sessionId),
      mode: modeOf(sessionId),
      globalOff: THINKING_AFFECT_OFF,
      state: current === null ? null : current.state,
      report: current === null ? null : current.report,
      turn: current === null ? -1 : current.lastTurn,
      noReasoning: current === null ? false : current.noReasoning === true,
      trend: current === null ? 'stable' : stateTrend(current.state.history),
    });
  } catch (_error) {
    writeJson(res, 500, { error: 'state-failed' });
  }
}

async function handleToggle(ctx, req, res) {
  if (req.method !== 'POST') {
    writeJson(res, 405, { error: 'method-not-allowed' });
    return;
  }
  try {
    const body = await readJson(req);
    if (body === null
      || typeof body.sessionId !== 'string'
      || (typeof body.enabled !== 'boolean' && typeof body.mode !== 'string')) {
      writeJson(res, 400, { error: 'invalid-body' });
      return;
    }
    const sessionId = body.sessionId;
    if (sessionId.length === 0 || sessionId.length > 200) {
      writeJson(res, 400, { error: 'invalid-session' });
      return;
    }
    if (typeof body.mode === 'string' && !MODES.has(body.mode)) {
      writeJson(res, 400, { error: 'invalid-mode' });
      return;
    }
    if (typeof body.enabled === 'boolean') ENABLED.set(sessionId, body.enabled);
    if (typeof body.mode === 'string') SESSION_MODE.set(sessionId, body.mode);
    savePreferences();
    writeJson(res, 200, {
      sessionId,
      enabled: isEnabled(sessionId),
      mode: modeOf(sessionId),
    });
  } catch (_error) {
    writeJson(res, 400, { error: 'invalid-body' });
  }
}

function composeInjection(current, events, sessionId) {
  const mode = modeOf(sessionId);
  const built = buildInjection(current.state, latestUserText(events), mode);
  const injected = !THINKING_AFFECT_OFF && built.text.length > 0;
  logInjection(sessionId, current.lastTurn + 1, current.state, built, injected);
  return { built, injected, text: injected ? built.text : '' };
}

function attachAgent(ctx, agent) {
  if (!agent || typeof agent.id !== 'string') return;
  if (CONTEXT_DISPOSERS.has(agent.id)) return;
  const initialSession = ctx.sessions.get(agent.id);
  if (initialSession && initialSession.header?.origin === 'subagent') return;
  const systemPrompt = agent.ctx?.get?.('systemPrompt');
  if (!systemPrompt || typeof systemPrompt.context !== 'function') return;
  const dispose = systemPrompt.context({
    name: 'dsh-fakemood',
    order: 900,
    text: () => {
      if (!isEnabled(agent.id)) return '';
      try {
        const session = ctx.sessions.get(agent.id);
        if (!session || session.header?.origin === 'subagent') return '';
        const events = session.ownEvents();
        const current = ensureSessionState(session, events);
        if (current === null) return '';
        return composeInjection(current, events, agent.id).text;
      } catch (_error) {
        return '';
      }
    },
  });
  CONTEXT_DISPOSERS.set(agent.id, () => {
    try {
      dispose();
    } catch (_error) {
      // Already disposed with the agent context.
    }
  });
}

function detachAgent(agent) {
  if (!agent || typeof agent.id !== 'string') return;
  const dispose = CONTEXT_DISPOSERS.get(agent.id);
  if (dispose !== undefined) dispose();
  CONTEXT_DISPOSERS.delete(agent.id);
}

export function apply(ctx) {
  ctx.inject(['webServer'], (webCtx) => {
    webCtx.effect(() => webCtx.webServer.register({
      kind: 'exact',
      path: '/plugins/thinking-affect/state',
      handler: (req, res) => handleState(ctx, req, res),
    }));
    webCtx.effect(() => webCtx.webServer.register({
      kind: 'exact',
      path: '/plugins/thinking-affect/toggle',
      handler: (req, res) => handleToggle(ctx, req, res),
    }));
  });

  ctx.on('agent/created', ({ agent }) => {
    attachAgent(ctx, agent);
  });
  ctx.on('agent/disposed', ({ agent }) => {
    detachAgent(agent);
  });

  ctx.effect(() => () => {
    for (const dispose of CONTEXT_DISPOSERS.values()) dispose();
    CONTEXT_DISPOSERS.clear();
    SESSION_STATE.clear();
    ENABLED.clear();
    SESSION_MODE.clear();
  });
}

/* Exposed for local state tests; plugin loading ignores extra exports. */
export const __test = {
  ensureSessionState,
  promptInstruction,
  buildInjection,
  composeInjection,
  inferUserNeed,
  latestUserText,
  logInjection,
  handleToggle,
  isEnabled,
  modeOf,
  normalizeMode,
  ENABLED,
  SESSION_MODE,
  DEFAULT_MODE,
  MODES,
  THINKING_AFFECT_OFF,
  INJECTION_LOG_ENABLED,
  INJECTION_LOG_MAX_BYTES,
  INJECTION_LOG_PATH,
  DATA_DIR,
  PREFERENCES_PATH,
  loadPreferences,
  savePreferences,
};
