window.__ModuleLoader__.load({
  id: 'dsh-fakemood',
  factory: function thinkingAffectFactory(require) {
    const React = require('react');
    const h = React.createElement;

    /** Dictionary namespace for this bundle. */
    const NS = 'thinkingAffect';

    /** English copy. */
    const en = {
      title: 'dsh-fakemood',
      collapse: 'Hide analysis',
      expand: 'Show analysis',
      inference: 'Inference',
      subjectiveInference: 'Subjective inference',
      factsLine: '{chars} chars · {cues} affect cues',
      excluded: 'Excluded {count} cue(s) aimed at others or quotes',
      objectiveNote: 'Cues aimed at others are excluded; technical nouns and factual descriptions are not treated as emotion on their own.',
      confidence: 'Confidence',
      confidenceLow: 'Low',
      confidenceMedium: 'Medium',
      confidenceHigh: 'High',
      valence: 'Valence',
      valenceLow: 'Negative',
      valenceHigh: 'Positive',
      certainty: 'Certainty',
      arousal: 'Arousal',
      strain: 'Cognitive strain',
      sparkline: 'Inferred trace',
      trendUp: 'Trending positive',
      trendDown: 'Trending negative',
      trendFlat: 'Steady',
      cues: 'Text cues',
      noCues: 'No strong wording cues',
      mix: 'Inferred secondary',
      strength: 'Strength',
      otherDirected: 'Ignored {count} cue(s) aimed at others or quoted',
      meta: '{chars} chars · {cues} cues',
      live: 'Analyzing live',
      disclaimer: 'Character counts and cue matches are text statistics. The emotion label, dimensions, and trace are heuristic inferences — not the model’s actual feeling.',
      windowTitle: 'dsh-fakemood · state',
      collapseWindow: 'Collapse window',
      expandWindow: 'Open state window',
      dragWindow: 'Drag the buoy up or down',
      enableForChat: 'Enable in this chat',
      disabled: 'Off',
      defaultOffNote: 'Off by default. Turn it on to let completed reasoning slightly shape the next reply; you can switch it off anytime.',
      modeLabel: 'Mode',
      modeCompanion: 'Companion',
      modeAssist: 'Task',
      modeCompanionHint: 'Keep the model state as coloring; an explicit user need leads.',
      modeAssistHint: 'Do not inject the model state; follow the current user need only.',
  assistStatsNote: 'Task mode: the state below is shown for reference only; it is not injected into the next reply.',
      modeGlobalOff: 'Injection is globally off (THINKING_AFFECT_OFF).',
      factsLabel: 'Text facts',
      stateCombined: 'Combined',
      stateObserved: 'This turn',
      stateObserving: 'Not enough cues to form a stable state yet.',
      turnLabel: 'Turn {turn}',
      turnsLabel: '{count} turns blended',
      noReasoning: 'No analyzable reasoning this turn; keeping the previous state.',
      staleState: 'Using turn {turn}',
      dimensions: 'Emotion dimensions',
      stateMix: 'State mix',
      answerTone: 'Suggested answer tone',
      nextDirection: 'Suggested next direction',
      suggestionLabel: 'Suggestion',
      stateTrendLabel: 'vs previous',
      stateTrendCalmer: 'Calmer',
      stateTrendTenser: 'More tense',
      stateTrendMoreConfident: 'More confident',
      stateTrendMoreUncertain: 'More uncertain',
      stateTrendStable: 'Stable',
      toneCalmPrecise: 'Calm and precise',
      toneCalmPreciseDesc: 'Keep the answer even and specific; avoid emotional coloring.',
      toneWarmEngaged: 'Warm and engaged',
      toneWarmEngagedDesc: 'Show genuine interest without overclaiming feelings.',
      toneCarefulTentative: 'Careful and tentative',
      toneCarefulTentativeDesc: 'Name uncertainty explicitly and avoid false confidence.',
      toneDirectFirm: 'Direct and firm',
      toneDirectFirmDesc: 'State the conclusion first, then one necessary caveat.',
      toneGroundedConcise: 'Grounded and concise',
      toneGroundedConciseDesc: 'Lower the emotional temperature and keep it short.',
      toneGentleHonest: 'Gentle and honest',
      toneGentleHonestDesc: 'Acknowledge the loss or regret without dramatizing it.',
      toneNeutralDeescalate: 'Neutral and de-escalating',
      toneNeutralDeescalateDesc: 'Stay neutral and avoid arguing or self-justifying.',
      directionVerifyAssumption: 'Verify the weakest assumption',
      directionVerifyAssumptionDesc: 'Test the one assumption that would change the answer.',
      directionAskClarifying: 'Ask one clarifying question',
      directionAskClarifyingDesc: 'Ask a single question that unblocks the next step.',
      directionNarrowScope: 'Narrow the scope',
      directionNarrowScopeDesc: 'Cut the problem to the smallest closed loop.',
      directionConsolidate: 'Consolidate and stop',
      directionConsolidateDesc: 'Stop exploring once the answer is stable.',
      directionFollowThread: 'Follow the promising thread',
      directionFollowThreadDesc: 'Continue the most informative line of investigation.',
      directionPauseReassess: 'Pause and reassess',
      directionPauseReassessDesc: 'Restate the goal before doing more work.',
      directionAcknowledgeNext: 'Acknowledge, then next step',
      directionAcknowledgeNextDesc: 'Name what was lost, then choose one concrete next action.',
      windowDisclaimer: 'Computed on the Host from completed reasoning. The switch controls whether this state is injected; Task mode ignores your own affect, Companion mode keeps it as coloring. It is a heuristic, not the model’s actual feeling.',
      emotionCalm: 'Calm',
      emotionConfident: 'Confident',
      emotionCurious: 'Curious',
      emotionCautious: 'Cautious',
      emotionConflicted: 'Torn',
      emotionFrustrated: 'Frustrated',
      emotionAnxious: 'Anxious',
      emotionFear: 'Fearful',
      emotionSorrowful: 'Sorrowful',
      emotionAgitated: 'Agitated',
      emotionExcited: 'Excited',
      emotionRelieved: 'Relieved',
      emotionHappy: 'Joyful',
      emotionAngry: 'Angry',
      emotionRegretful: 'Regretful',
      emotionSad: 'Sad',
      emotionSurprised: 'Surprised',
      emotionDisgusted: 'Disgusted',
      emotionResigned: 'Resigned',
      emotionUnknown: 'Low signal',
      emotionEmpty: 'Awaiting reasoning',
      emotionObscure: 'Low signal',
      summaryCalm: 'The reasoning trace carries few affect cues and reads even-keeled.',
      summaryConfident: 'Decisive, certain language dominates the reasoning trace.',
      summaryCurious: 'Exploration and questioning dominate, suggesting an inquisitive stance.',
      summaryCautious: 'Uncertainty is repeatedly flagged, so the reasoning reads as careful.',
      summaryConflicted: 'Repeated weighing and self-correction suggest a torn, hesitant stance.',
      summaryFrustrated: 'Failure, retry, and negative wording point to frustration.',
      summaryAnxious: 'Pressure and uncertainty co-occur, giving the trace a tense tone.',
      summaryFear: 'Threat, danger, or fear wording appears in the trace.',
      summarySorrowful: 'Low-arousal worry, melancholy, or a heavy mood colors the trace.',
      summaryAgitated: 'Restless, stirred-up, or impatient wording appears in the trace.',
      summaryExcited: 'Positive, high-energy wording suggests an excited, engaged stance.',
      summaryRelieved: 'Early strain gives way to a positive close, reading as relief.',
      summaryHappy: 'Explicitly positive wording points to joy or satisfaction.',
      summaryAngry: 'Anger, irritation, or strong rejection wording appears in the trace.',
      summaryRegretful: 'Counterfactual wording such as “should have” or “if only” points to regret.',
      summarySad: 'Wording of loss, disappointment, or low mood points to sadness.',
      summarySurprised: 'Unexpected or startling wording points to surprise.',
      summaryDisgusted: 'Strong aversion or revulsion wording appears in the trace.',
      summaryResigned: 'Helpless or giving-up wording points to resignation.',
      summaryUnknown: 'The wording is too weak to support a reliable read.',
      summaryEmpty: 'There is no reasoning text to analyze yet.',
      summaryObscure: 'The reasoning is mostly code or symbols, so no readable wording cues were found.',
      copy: 'Copy',
      copied: 'Copied',
      codeTitle: 'Code block',
      wrap: 'Wrap lines',
      unwrap: 'Unwrap lines',
      footnotes: 'Footnotes',
    };

    /** Chinese copy. */
    const zh = {
      title: 'dsh-fakemood',
      collapse: '收起分析',
      expand: '展开分析',
      inference: '推断',
      subjectiveInference: '主观推断',
      factsLine: '{chars} 字 · {cues} 个情绪线索',
      excluded: '已排除 {count} 处指向他人或引述的线索',
      objectiveNote: '指向他人的内容已排除；技术名词与事实描述不单独作为情绪依据。',
      confidence: '置信度',
      confidenceLow: '低',
      confidenceMedium: '中',
      confidenceHigh: '高',
      valence: '效价',
      valenceLow: '消极',
      valenceHigh: '积极',
      certainty: '确定感',
      arousal: '唤醒度',
      strain: '认知压力',
      sparkline: '推断走势',
      trendUp: '趋于积极',
      trendDown: '趋于消极',
      trendFlat: '基调稳定',
      cues: '原文线索',
      noCues: '未发现明显措辞线索',
      mix: '推断的次要情绪',
      strength: '强度',
      otherDirected: '已忽略 {count} 处指向他人或引述的线索',
      meta: '{chars} 字 · {cues} 个线索',
      live: '实时分析中',
      disclaimer: '字数与线索匹配是原文统计；情绪标签、维度与走势是启发式推断，不代表模型的真实感受。',
      windowTitle: 'dsh-fakemood · 状态',
      collapseWindow: '收起窗口',
      expandWindow: '展开状态窗口',
      dragWindow: '拖动浮标上下移动',
      enableForChat: '本对话启用',
      disabled: '已关闭',
      defaultOffNote: '默认关闭。打开后才会根据已结束的思考轻微调整下一轮语气；可随时关闭。',
      modeLabel: '模式',
      modeCompanion: '陪伴',
      modeAssist: '任务',
      modeCompanionHint: '保留模型情绪作为底色；用户需求明确时优先修正。',
      modeAssistHint: '不注入模型情绪，只按当前用户需求调整。',
  assistStatsNote: '任务模式：下面这组状态只用于显示，不会注入下一轮回答。',
      modeGlobalOff: '注入已被全局关闭（THINKING_AFFECT_OFF）。',
      factsLabel: '原文统计',
      stateCombined: '综合',
      stateObserved: '本轮',
      stateObserving: '线索不足，暂未形成稳定状态。',
      turnLabel: '第 {turn} 轮',
      turnsLabel: '{count} 轮计入状态',
      noReasoning: '本轮没有可分析的思考文本，沿用上一轮状态。',
      staleState: '沿用第 {turn} 轮状态',
      dimensions: '情绪维度',
      stateMix: '状态构成',
      answerTone: '建议回答语气',
      nextDirection: '建议下一轮方向',
      suggestionLabel: '建议',
      stateTrendLabel: '较上一轮',
      stateTrendCalmer: '更平静',
      stateTrendTenser: '更紧绷',
      stateTrendMoreConfident: '更确定',
      stateTrendMoreUncertain: '更不确定',
      stateTrendStable: '基本稳定',
      toneCalmPrecise: '平静、精确',
      toneCalmPreciseDesc: '语气平稳、具体，不额外渲染情绪。',
      toneWarmEngaged: '温和、投入',
      toneWarmEngagedDesc: '表现出真实的兴趣，但不夸大成强烈情绪。',
      toneCarefulTentative: '谨慎、保留',
      toneCarefulTentativeDesc: '明确说出不确定之处，不假装确定。',
      toneDirectFirm: '直接、明确',
      toneDirectFirmDesc: '先给结论，再补一个必要的限定。',
      toneGroundedConcise: '克制、简短',
      toneGroundedConciseDesc: '降低情绪温度，尽量简短。',
      toneGentleHonest: '温和、诚实',
      toneGentleHonestDesc: '承认遗憾或失落，但不戏剧化。',
      toneNeutralDeescalate: '中性、降温',
      toneNeutralDeescalateDesc: '保持中性，不争辩、不自我辩护。',
      directionVerifyAssumption: '先验证最弱的假设',
      directionVerifyAssumptionDesc: '检查那个一旦不成立就会改变结论的假设。',
      directionAskClarifying: '只问一个澄清问题',
      directionAskClarifyingDesc: '只问一个能解锁下一步的问题。',
      directionNarrowScope: '缩小范围',
      directionNarrowScopeDesc: '把问题缩到最小可闭环范围。',
      directionConsolidate: '收束结论并停止扩展',
      directionConsolidateDesc: '结论稳定后停止继续发散。',
      directionFollowThread: '跟进最有希望的线索',
      directionFollowThreadDesc: '沿着信息量最大的线索继续。',
      directionPauseReassess: '暂停并重新评估目标',
      directionPauseReassessDesc: '先重述目标，再决定是否继续。',
      directionAcknowledgeNext: '先承认，再给下一步',
      directionAcknowledgeNextDesc: '先点明损失，再选一个具体的下一步。',
      windowDisclaimer: '由 Host 从已结束的思考计算；开关控制是否注入，任务模式忽略自身情绪，陪伴模式把情绪作为底色。它是启发式状态，不代表模型真实感受。',
      emotionCalm: '平静',
      emotionConfident: '笃定',
      emotionCurious: '好奇',
      emotionCautious: '审慎',
      emotionConflicted: '纠结',
      emotionFrustrated: '挫败',
      emotionAnxious: '焦虑',
      emotionFear: '恐惧',
      emotionSorrowful: '忧愁',
      emotionAgitated: '激动',
      emotionExcited: '兴奋',
      emotionRelieved: '释然',
      emotionHappy: '快乐',
      emotionAngry: '生气',
      emotionRegretful: '遗憾',
      emotionSad: '悲伤',
      emotionSurprised: '惊讶',
      emotionDisgusted: '厌恶',
      emotionResigned: '无奈',
      emotionUnknown: '线索不足',
      emotionEmpty: '等待思考',
      emotionObscure: '线索不足',
      summaryCalm: '思考过程的情绪线索很少，整体基调平稳。',
      summaryConfident: '思考过程以明确判断为主，呈现出较强的确定感。',
      summaryCurious: '思考过程充满探索与提问，呈现出好奇、求证的倾向。',
      summaryCautious: '思考过程多处保留不确定性，整体偏向审慎。',
      summaryConflicted: '思考过程反复权衡、自我修正，呈现出纠结与犹豫。',
      summaryFrustrated: '思考过程出现失败、重试或负面评价，带有挫败感。',
      summaryAnxious: '思考过程同时出现压力与不确定线索，情绪偏紧张。',
      summaryFear: '思考过程出现威胁、危险或害怕的措辞，情绪偏恐惧。',
      summarySorrowful: '思考过程出现低唤醒的忧虑、惆怅或沉重感，情绪偏忧愁。',
      summaryAgitated: '思考过程出现焦躁、坐立不安或按捺不住的措辞，情绪偏激动。',
      summaryExcited: '思考过程积极且活跃，呈现出兴奋、投入的倾向。',
      summaryRelieved: '先前的压力线索之后出现积极收束，呈现出如释重负的倾向。',
      summaryHappy: '思考过程出现明确的积极情绪词，整体呈现出快乐、满意的倾向。',
      summaryAngry: '思考过程出现愤怒、恼火或强烈反感的措辞。',
      summaryRegretful: '思考过程出现遗憾、后悔或「本该」之类的反事实线索。',
      summarySad: '思考过程出现失落、难过或沮丧的措辞。',
      summarySurprised: '思考过程出现意外、震惊或「没想到」的措辞。',
      summaryDisgusted: '思考过程出现明显的厌恶或反感措辞。',
      summaryResigned: '思考过程出现无奈、放弃或「只能这样」的措辞。',
      summaryUnknown: '措辞线索不足，暂不足以形成可靠判断。',
      summaryEmpty: '还没有可分析的思考内容。',
      summaryObscure: '思考内容以代码或符号为主，未发现可读的措辞线索。',
      copy: '复制',
      copied: '已复制',
      codeTitle: '代码块',
      wrap: '自动换行',
      unwrap: '不换行',
      footnotes: '脚注',
    };

    /* ---------------------------------------------------------------------
     * Affect analyzer
     * ------------------------------------------------------------------- */

    /** Chinese and English negation markers for discrete-emotion cues. */
    const NEG_ZH = [
      '不', '没', '未', '无', '没有', '并不', '毫不', '从不',
      '不太', '不太算', '不算', '算不上', '谈不上', '说不上',
    ];
    const NEG_EN = ['not', 'never', 'no', "n't"];

    /** Weighted wording groups used by the heuristic analyzer. */
    const CUE_GROUPS = [
      {
        key: 'positive',
        phrases: [
          'good', 'great', 'nice', 'works', 'worked', 'success', 'successful',
          'solved', 'fixed', 'clean', 'clear', 'perfect', 'excellent', 'solid',
          'promising', 'love', 'better', 'best', 'okay', 'not bad',
          '还行', '还可以',
          '很好', '太好了', '不错', '顺利', '成功', '搞定', '清晰', '完美',
          '优秀', '可行', '有效', '喜欢', '满意', '没问题', '赞', '棒', '对了',
        ],
      },
      {
        key: 'negative',
        phrases: [
          { text: 'bad', notBefore: NEG_EN },
          { text: 'wrong', notBefore: NEG_EN },
          'broken', 'fail', 'failed', 'fails', 'failure',
          'stuck', 'crash', 'crashed', 'worse', 'worst', 'messy',
          'confusing', 'annoying', 'painful', 'ugly', 'unfortunately',
          '失败', '糟糕', '不行', '不好',
          '崩溃', '卡住', '麻烦', '混乱', '难看', '困惑', '头疼', '难受',
          '可惜', '遗憾', '不幸',
        ],
      },
      {
        key: 'uncertainty',
        phrases: [
          'maybe', 'perhaps', 'probably', 'possibly', 'might', 'unsure',
          'uncertain', 'unclear', 'seems', 'seem', 'apparently', 'guess',
          'assume', 'whether', 'ambiguous', 'not sure', 'not certain',
          'depends',
          '可能', '也许', '或许', '大概', '似乎', '好像', '不确定',
          '不清楚', '待确认', '存疑', '是否', '疑问', '拿不准', '说不准',
          '怀疑', '不一定',
        ],
      },
      {
        key: 'certainty',
        phrases: [
          'definitely', 'certainly', 'clearly', 'obviously', 'exactly',
          'indeed', 'confident', 'without doubt', 'for sure', 'of course',
          { text: '确定', notBefore: ['不', '未', '难', '无法', '难以', '没'], notAfter: ['不了', '吗'] },
          { text: '肯定', notBefore: ['不', '未'] },
          '显然',
          { text: '明确', notBefore: ['不', '未'] },
          { text: '一定', notBefore: ['不'] },
          { text: '确实', notBefore: ['不'] },
          '必然', '无疑', '毫无疑问', '自信',
          { text: '清楚', notBefore: ['不', '未', '难'] },
        ],
      },
      {
        key: 'strain',
        phrases: [
          'again', 'retry', 'retrying', 'retried', 'still', 'hmm', 'hmmm',
          'frustrating', 'annoying', 'complicated', 'tricky', 'difficult',
          'try again', 'one more', 'ugh', 'argh', "doesn't work",
          "didn't work", 'not working', 'why is', 'why does', 'stuck', 'messy',
          '又', '还是', '仍然', '重试', '等等', '等一下', '麻烦', '复杂',
          '难搞', '折腾', '头疼', '纠结', '算了', '不对', '重新', '再试',
          '为什么', '怎么还', '居然', '卡住',
        ],
      },
      {
        key: 'curiosity',
        phrases: [
          'interesting', 'curious', 'wonder', 'explore', 'investigate',
          'what if', 'how about', 'look into', 'figure out',
          '好奇', '有趣', '探索', '研究', '试试', '看看',
          '弄清', '为什么', '怎么', '如何',
        ],
      },
      {
        key: 'arousal',
        phrases: [
          'very', 'really', 'extremely', 'amazing', 'incredible', 'huge',
          'massive', 'critical', 'urgent', 'immediately', 'right now', 'wow',
          'hurry',
          '非常', { text: '太', notBefore: ['不', '没', '别', '不要', '别太'], notAfter: ['多', '少'] },
          '极其', '特别', '十分', '竟然', '居然', '哇',
          '紧急', '立即', '马上', '赶紧',
        ],
      },
    ];

    /** Self-correction markers, treated as extra cognitive strain. */
    const CORRECTION_PHRASES = [
      'actually', 'wait', 'on second thought', 'instead', '重新', '其实',
      '换个角度', '纠正', '再想想', '反过来',
    ];

    /** Discrete-emotion wording, counted separately from the affect dimensions. */
    const EMOTION_CUES = [
      {
        key: 'happy',
        phrases: [
          { text: 'happy', notBefore: NEG_EN },
          { text: 'glad', notBefore: NEG_EN },
          'delighted', 'pleased', 'joyful', 'joy', 'thrilled', 'wonderful',
          'fantastic', 'great news', 'celebrate', 'yay', 'haha', 'cheerful',
          { text: '高兴', notBefore: NEG_ZH },
          { text: '开心', notBefore: NEG_ZH },
          { text: '愉快', notBefore: NEG_ZH },
          '喜悦', '欣喜', '太好了', '好消息', '欣慰', '满意', '幸运', '哈哈',
          '笑死', '庆祝', '棒极了', '太棒了', '好耶', '爽',
        ],
      },
      {
        key: 'angry',
        phrases: [
          { text: 'angry', notBefore: NEG_EN },
          { text: 'anger', notBefore: NEG_EN },
          { text: 'furious', notBefore: NEG_EN },
          { text: 'mad', notBefore: NEG_EN },
          'annoyed', 'annoying', 'annoy', 'annoys', 'irritating', 'irritates',
          'infuriating', 'hate', 'damn',
          'ridiculous', 'outrageous', 'pissed', 'fed up', 'unacceptable',
          { text: '生气', notBefore: NEG_ZH },
          { text: '愤怒', notBefore: NEG_ZH },
          { text: '恼火', notBefore: NEG_ZH },
          '火大', '气愤', '可恶', '讨厌', '烦人', '烦死', '忍不了', '气死',
          '该死', '混账', '凭什么', '岂有此理', '发火',
        ],
      },
      {
        key: 'regretful',
        phrases: [
          'regret', 'regretful', 'unfortunately', 'unfortunate', 'pity',
          'shame', 'alas', 'if only', 'should have', 'could have', 'wish i',
          'missed',
          '遗憾', '可惜', '后悔', '惋惜', '本该', '本来应该', '早知道', '早知',
          '不应该', '错过', '可惜了', '唉',
        ],
      },
      {
        key: 'sad',
        phrases: [
          { text: 'sad', notBefore: NEG_EN },
          { text: 'sadness', notBefore: NEG_EN },
          { text: 'unhappy', notBefore: NEG_EN },
          { text: 'depressed', notBefore: NEG_EN },
          'depressing', 'disappointed', 'disappointing', 'heartbroken',
          'crying', 'tears', 'lonely', 'miserable', 'hopeless', 'let down',
          'sorrow',
          'not happy', 'not glad',
          { text: '难过', notBefore: NEG_ZH },
          { text: '伤心', notBefore: NEG_ZH },
          { text: '悲伤', notBefore: NEG_ZH },
          { text: '失落', notBefore: NEG_ZH },
          { text: '沮丧', notBefore: NEG_ZH },
          '不高兴', '不开心',
          '低落', '心痛', '想哭', '哭', '失望', '绝望', '孤独', '委屈',
          '心酸', '沉痛',
        ],
      },
      {
        key: 'surprised',
        phrases: [
          'surprised', 'surprising', 'shocked', 'shocking',
          'unbelievable', 'astonishing', 'whoa', 'wow', "didn't expect",
          '惊讶', '感到意外', '觉得意外', '很意外', '真意外', '有点意外',
          '令人意外', '没想到', '竟然', '居然', '震惊', '吃惊', '天哪',
          '哎呀', '哇塞',
        ],
      },
      {
        key: 'disgusted',
        phrases: [
          'disgusting', 'gross', 'revolting', 'repulsive', 'sickening',
          'nauseating', 'appalling',
          '恶心', '厌恶', '反感', '嫌弃', '受不了', '令人作呕', '恶臭',
        ],
      },
      {
        key: 'resigned',
        phrases: [
          'helpless', 'resigned', 'resignation', 'powerless', 'give up',
          'gave up', 'no choice', 'nothing i can do', 'whatever',
          '无奈', '没办法', '只能', '算了', '罢了', '随它', '认了', '无力',
          '束手无策', '由它去',
        ],
      },
      {
        key: 'relieved',
        phrases: [
          'relieved', 'relief', 'finally', 'thank goodness', 'at last',
          'phew', 'what a relief',
          '松了一口气', '松了口气', '终于', '好在', '还好', '如释重负',
          '放心', '虚惊一场', '得救了',
        ],
      },
    ];

    /**
     * Multi-dimensional cue weights. A wording cue may load several emotion
     * dimensions at once with different strength (e.g. 紧张 -> anxiety + fear),
     * instead of belonging to a single direction. Base EMOTION_CUES below are
     * merged in with weight 1, so adding a cue here only overrides its profile.
     */
    const cueGroup = (key, phrases) => phrases.map((text) => ({
      text,
      weights: { [key]: 1 },
    }));

    const EXPLICIT_EMOTION_CUES = [
      // Fear: threat-focused, distinct from diffuse anxiety.
      { text: '害怕', notBefore: NEG_ZH, weights: { fear: 1, anxious: 0.35 } },
      { text: '恐惧', notBefore: NEG_ZH, weights: { fear: 1, anxious: 0.4 } },
      { text: '惊恐', weights: { fear: 1, surprised: 0.3 } },
      { text: '恐慌', weights: { fear: 0.9, anxious: 0.5 } },
      { text: '吓人', weights: { fear: 0.8, surprised: 0.2 } },
      { text: '可怕', weights: { fear: 0.8, anxious: 0.3 } },
      { text: '畏惧', weights: { fear: 1, anxious: 0.3 } },
      { text: '胆怯', weights: { fear: 0.9, anxious: 0.4 } },
      { text: '毛骨悚然', weights: { fear: 1, disgusted: 0.2 } },
      { text: '危机感', weights: { fear: 0.7, anxious: 0.5 } },
      ...cueGroup('fear', [
        'fear', 'afraid', 'scared', 'frightened', 'terrified', 'fearful',
        'panic', 'dread', 'scary', 'alarmed', 'threatened',
      ]),

      // Anxiety: diffuse worry and pressure.
      { text: '担心', notBefore: NEG_ZH, weights: { anxious: 0.9, fear: 0.25 } },
      { text: '担忧', weights: { anxious: 0.9, fear: 0.25 } },
      { text: '不安', notBefore: NEG_ZH, weights: { anxious: 0.8, fear: 0.2 } },
      { text: '焦虑', weights: { anxious: 1, fear: 0.3 } },
      { text: '紧张', notBefore: NEG_ZH, weights: { anxious: 0.8, fear: 0.35 } },
      { text: '心慌', weights: { anxious: 0.8, fear: 0.3 } },
      { text: '忐忑', weights: { anxious: 0.8, fear: 0.2 } },
      ...cueGroup('anxious', [
        'anxious', 'worried', 'nervous', 'uneasy', 'tense', 'stressed',
        'apprehensive',
      ]),

      // Sorrow: low-arousal worry and melancholy, distinct from acute sadness.
      { text: '忧愁', weights: { sorrowful: 1, sad: 0.3 } },
      { text: '发愁', weights: { sorrowful: 0.9, anxious: 0.4 } },
      { text: '忧虑', weights: { sorrowful: 0.8, anxious: 0.5 } },
      { text: '忧心', weights: { sorrowful: 0.8, anxious: 0.5 } },
      { text: '惆怅', weights: { sorrowful: 1, sad: 0.3 } },
      { text: '苦闷', weights: { sorrowful: 0.9, sad: 0.4 } },
      { text: '烦闷', weights: { sorrowful: 0.8, frustrated: 0.4 } },
      { text: '心事重重', weights: { sorrowful: 1, anxious: 0.3 } },
      { text: '哀愁', weights: { sorrowful: 1, sad: 0.4 } },
      { text: '伤感', weights: { sorrowful: 0.8, sad: 0.5 } },
      { text: '郁闷', weights: { sorrowful: 0.7, sad: 0.3, frustrated: 0.3 } },
      ...cueGroup('sorrowful', [
        'sorrowful', 'melancholy', 'gloomy', 'dismayed', 'troubled',
        'downhearted', 'heavy-hearted',
      ]),

      // Agitation: high-arousal, mixed valence; can be positive or negative.
      { text: '激动', notBefore: NEG_ZH, weights: { agitated: 0.65, excited: 0.55 } },
      { text: '心潮澎湃', weights: { agitated: 0.8, excited: 0.5 } },
      { text: '坐立不安', weights: { agitated: 0.9, anxious: 0.4 } },
      { text: '心神不宁', weights: { agitated: 0.8, anxious: 0.5 } },
      { text: '按捺不住', weights: { agitated: 0.8, excited: 0.3 } },
      { text: '急躁', weights: { agitated: 0.8, frustrated: 0.4 } },
      { text: '烦躁', weights: { agitated: 0.7, frustrated: 0.5, angry: 0.2 } },
      { text: '冲动', weights: { agitated: 0.7, excited: 0.2 } },
      ...cueGroup('agitated', [
        'agitated', 'restless', 'worked up', 'on edge', 'jittery',
        'flustered', 'impatient', 'irritable', 'keyed up',
      ]),

      // Excitement: high-arousal positive engagement.
      { text: '兴奋', notBefore: NEG_ZH, weights: { excited: 1, happy: 0.4 } },
      { text: '振奋', weights: { excited: 1, happy: 0.3 } },
      { text: '热血', weights: { excited: 0.8, agitated: 0.2 } },
      { text: '雀跃', weights: { excited: 0.9, happy: 0.5 } },
      { text: '跃跃欲试', weights: { excited: 0.8, curious: 0.3 } },
      { text: '迫不及待', weights: { excited: 0.8, agitated: 0.2 } },
      { text: '精神一振', weights: { excited: 0.8, relieved: 0.2 } },
      { text: '来劲', weights: { excited: 0.7, happy: 0.3 } },
      ...cueGroup('excited', [
        'excited', 'thrilled', 'pumped', 'energized', 'energised', 'eager',
        'exhilarated', 'fired up', "can't wait",
      ]),

      // Joy: positive, lower-arousal satisfaction.
      { text: '高兴', notBefore: NEG_ZH, weights: { happy: 1, excited: 0.25 } },
      { text: '开心', notBefore: NEG_ZH, weights: { happy: 1, excited: 0.2 } },
      { text: '快乐', notBefore: NEG_ZH, weights: { happy: 1, excited: 0.2 } },
      { text: '愉快', notBefore: NEG_ZH, weights: { happy: 1 } },
      { text: '喜悦', weights: { happy: 1, excited: 0.3 } },
      { text: '欣喜', weights: { happy: 1, excited: 0.3 } },
      { text: '太好了', weights: { happy: 1, relieved: 0.35, excited: 0.3 } },
      { text: '好消息', weights: { happy: 0.9, relieved: 0.2 } },
      { text: '欣慰', weights: { happy: 0.9, relieved: 0.3 } },
      { text: '满意', weights: { happy: 0.8, confident: 0.2 } },
      { text: '幸运', weights: { happy: 0.8, relieved: 0.3 } },
      { text: '哈哈', weights: { happy: 0.8, excited: 0.2 } },
      { text: '笑死', weights: { happy: 0.8, excited: 0.2 } },
      { text: '庆祝', weights: { happy: 0.8, excited: 0.3 } },
      { text: '棒极了', weights: { happy: 1, excited: 0.3 } },
      { text: '太棒了', weights: { happy: 1, excited: 0.3 } },
      { text: '好耶', weights: { happy: 1, excited: 0.4 } },
      { text: '爽', weights: { happy: 0.8, relieved: 0.2 } },
      ...cueGroup('happy', [
        'happy', 'glad', 'delighted', 'pleased', 'joyful', 'joy', 'thrilled',
        'wonderful', 'fantastic', 'great news', 'celebrate', 'yay', 'haha',
        'cheerful',
      ]),

      // Confidence, curiosity, caution, conflict and calm are also discrete
      // cues, so they can enter the state mix and tone vector.
      { text: '确定', notBefore: ['不', '未', '难', '无法', '难以', '没'], notAfter: ['不了', '吗'], weights: { confident: 0.8 } },
      { text: '肯定', notBefore: ['不', '未'], weights: { confident: 0.8 } },
      { text: '显然', weights: { confident: 0.7 } },
      { text: '明确', notBefore: ['不', '未'], weights: { confident: 0.7 } },
      { text: '自信', weights: { confident: 1 } },
      { text: '没问题', weights: { confident: 0.8, happy: 0.2 } },
      ...cueGroup('confident', [
        'definitely', 'certainly', 'clearly', 'obviously', 'exactly', 'confident',
        'for sure', 'of course',
      ]),
      { text: '好奇', weights: { curious: 1, excited: 0.2 } },
      { text: '有趣', weights: { curious: 0.9, happy: 0.2 } },
      { text: '探索', weights: { curious: 0.8 } },
      { text: '研究', weights: { curious: 0.7 } },
      { text: '试试', weights: { curious: 0.7 } },
      { text: '看看', weights: { curious: 0.6 } },
      { text: '如何', weights: { curious: 0.5 } },
      ...cueGroup('curious', [
        'curious', 'interesting', 'wonder', 'explore', 'investigate', 'what if',
      ]),
      { text: '谨慎', weights: { cautious: 1, anxious: 0.2 } },
      { text: '小心', weights: { cautious: 0.9, anxious: 0.2 } },
      { text: '仔细', weights: { cautious: 0.8 } },
      { text: '确认', weights: { cautious: 0.7, confident: 0.2 } },
      { text: '保守', weights: { cautious: 0.8 } },
      { text: '稳妥', weights: { cautious: 0.8 } },
      { text: '风险', weights: { cautious: 0.6, anxious: 0.2 } },
      ...cueGroup('cautious', [
        'careful', 'cautious', 'verify', 'double-check', 'risk', 'uncertain',
      ]),
      { text: '纠结', weights: { conflicted: 1, anxious: 0.3 } },
      { text: '矛盾', weights: { conflicted: 0.9 } },
      { text: '犹豫', weights: { conflicted: 0.9, cautious: 0.3 } },
      { text: '反复', weights: { conflicted: 0.7 } },
      { text: '拿不准', weights: { conflicted: 0.8, anxious: 0.2 } },
      { text: '左右为难', weights: { conflicted: 1 } },
      ...cueGroup('conflicted', [
        'torn', 'conflicted', 'indecisive', 'hesitate', 'back and forth',
      ]),
      { text: '平静', notBefore: NEG_ZH, weights: { calm: 1, relieved: 0.2 } },
      { text: '冷静', weights: { calm: 1 } },
      { text: '淡定', weights: { calm: 1 } },
      { text: '从容', weights: { calm: 0.8, confident: 0.2 } },
      { text: '平稳', weights: { calm: 0.8 } },
      ...cueGroup('calm', [
        'calm', 'steady', 'composed', 'relaxed',
      ]),

      // Frustration, sadness, regret, relief, surprise and anger get
      // multi-dimensional profiles on important words.
      { text: '挫败', weights: { frustrated: 1, sad: 0.2 } },
      { text: '受挫', weights: { frustrated: 0.9, sad: 0.2 } },
      { text: '失败', weights: { frustrated: 0.6, sad: 0.3 } },
      { text: '卡住', weights: { frustrated: 0.7 } },
      ...cueGroup('frustrated', [
        'frustrated', 'frustrating', 'stuck', 'fed up', 'blocked', 'futile',
      ]),
      { text: '难过', notBefore: NEG_ZH, weights: { sad: 1, sorrowful: 0.3 } },
      { text: '伤心', notBefore: NEG_ZH, weights: { sad: 1 } },
      { text: '失望', weights: { sad: 0.8, frustrated: 0.3 } },
      { text: '低落', weights: { sad: 0.8, sorrowful: 0.3 } },
      { text: '遗憾', weights: { regretful: 1, sad: 0.3 } },
      { text: '可惜', weights: { regretful: 1, sad: 0.2 } },
      { text: '后悔', weights: { regretful: 1, sad: 0.2 } },
      { text: '松了一口气', weights: { relieved: 1, happy: 0.3, excited: 0.2 } },
      { text: '松了口气', weights: { relieved: 1, happy: 0.3 } },
      { text: '如释重负', weights: { relieved: 1, happy: 0.3 } },
      { text: '还好', weights: { relieved: 0.7, happy: 0.2 } },
      { text: '没想到', weights: { surprised: 0.9, curious: 0.2 } },
      { text: '震惊', weights: { surprised: 1, fear: 0.2 } },
      { text: '生气', notBefore: NEG_ZH, weights: { angry: 1, frustrated: 0.4 } },
      { text: '愤怒', notBefore: NEG_ZH, weights: { angry: 1, frustrated: 0.3 } },
      { text: '恼火', notBefore: NEG_ZH, weights: { angry: 0.8, frustrated: 0.5 } },
      { text: '恶心', weights: { disgusted: 1, angry: 0.2 } },
      { text: '无奈', weights: { resigned: 1, sad: 0.3 } },
      { text: '算了', weights: { resigned: 0.8, frustrated: 0.2 } },
    ];

    /** Keys owned by the discrete-emotion vocabulary. */
    const EMOTION_KEYS = new Set(EMOTION_CUES.map((group) => group.key));
    for (const cue of EXPLICIT_EMOTION_CUES) {
      for (const key of Object.keys(cue.weights || {})) EMOTION_KEYS.add(key);
    }

    /** Order used to rank evidence chips. */
    const CUE_RANK = {
      angry: 0,
      disgusted: 0,
      fear: 1,
      agitated: 1,
      regretful: 1,
      sad: 1,
      sorrowful: 2,
      anxious: 2,
      frustrated: 2,
      strain: 2,
      negative: 2,
      uncertainty: 3,
      resigned: 3,
      excited: 3,
      happy: 3,
      relieved: 3,
      positive: 4,
      curiosity: 5,
      certainty: 6,
      surprised: 6,
      arousal: 7,
    };

    /** Accent token per emotion label. */
    const ACCENTS = {
      calm: 'var(--dsw-alias-brand-primary)',
      confident: 'var(--dsw-alias-state-success-primary)',
      curious: 'var(--dsw-alias-brand-primary)',
      cautious: 'var(--dsw-alias-state-warn-primary)',
      conflicted: 'var(--dsw-alias-state-warn-primary)',
      frustrated: 'var(--dsw-alias-state-error-primary)',
      anxious: 'var(--dsw-alias-state-error-primary)',
      fear: 'var(--dsw-alias-state-error-primary)',
      sorrowful: 'var(--dsw-alias-label-secondary)',
      agitated: 'var(--dsw-alias-state-warn-primary)',
      excited: 'var(--dsw-alias-state-success-primary)',
      relieved: 'var(--dsw-alias-state-success-primary)',
      happy: 'var(--dsw-alias-state-success-primary)',
      angry: 'var(--dsw-alias-state-error-primary)',
      regretful: 'var(--dsw-alias-state-warn-primary)',
      sad: 'var(--dsw-alias-label-secondary)',
      surprised: 'var(--dsw-alias-brand-primary)',
      disgusted: 'var(--dsw-alias-state-error-primary)',
      resigned: 'var(--dsw-alias-label-secondary)',
      unknown: 'var(--dsw-alias-state-idle-primary)',
      empty: 'var(--dsw-alias-state-idle-primary)',
      obscure: 'var(--dsw-alias-state-idle-primary)',
    };

    /** Glyph per emotion label. */
    const EMOJI = {
      calm: '🧘',
      confident: '🎯',
      curious: '🔍',
      cautious: '⚖️',
      conflicted: '🔄',
      frustrated: '😤',
      anxious: '😰',
      fear: '😨',
      sorrowful: '😟',
      agitated: '😖',
      excited: '✨',
      relieved: '😌',
      happy: '😊',
      angry: '😠',
      regretful: '😔',
      sad: '😢',
      surprised: '😮',
      disgusted: '🤢',
      resigned: '😮‍💨',
      unknown: '❔',
      empty: '…',
      obscure: '❔',
    };

    function clamp(value, min, max) {
      return Math.min(max, Math.max(min, value));
    }

    function clamp01(value) {
      return clamp(value, 0, 1);
    }

    function sat(value) {
      return value <= 0 ? 0 : value / (value + 1.25);
    }

    function textOf(phrase) {
      return typeof phrase === 'string' ? phrase : phrase.text;
    }

    /**
     * Merge base emotion groups with the explicit multi-weight table once.
     * A cue found in both keeps its explicit weights; the base group only adds
     * its own dimension if that dimension is missing.
     */
    let EMOTION_WEIGHTED_CACHE = null;
    function emotionWeightedCues() {
      if (EMOTION_WEIGHTED_CACHE !== null) return EMOTION_WEIGHTED_CACHE;
      const map = new Map();
      const mergeWeights = (target, weights) => {
        for (const [key, weight] of Object.entries(weights || {})) {
          if (typeof weight !== 'number' || !Number.isFinite(weight) || weight <= 0) continue;
          target[key] = Math.max(target[key] || 0, weight);
        }
      };
      const mergeNegation = (target, source) => {
        if (target.notBefore === undefined && source.notBefore !== undefined) {
          target.notBefore = source.notBefore;
        }
        if (target.notAfter === undefined && source.notAfter !== undefined) {
          target.notAfter = source.notAfter;
        }
      };
      for (const raw of EXPLICIT_EMOTION_CUES) {
        const text = textOf(raw);
        if (typeof text !== 'string' || text.length === 0) continue;
        const cue = map.get(text) || { text, weights: {} };
        if (typeof raw !== 'string') {
          mergeWeights(cue.weights, raw.weights);
          mergeNegation(cue, raw);
        }
        map.set(text, cue);
      }
      for (const group of EMOTION_CUES) {
        for (const raw of group.phrases) {
          const text = textOf(raw);
          if (typeof text !== 'string' || text.length === 0) continue;
          const cue = map.get(text) || { text, weights: {} };
          mergeWeights(cue.weights, { [group.key]: 1 });
          if (typeof raw !== 'string') mergeNegation(cue, raw);
          map.set(text, cue);
        }
      }
      EMOTION_WEIGHTED_CACHE = [...map.values()];
      return EMOTION_WEIGHTED_CACHE;
    }

    function escapeRegExp(value) {
      return value.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
    }

    const WORD_REGEX_CACHE = new Map();

    function wordRegex(value) {
      let pattern = WORD_REGEX_CACHE.get(value);
      if (pattern === undefined) {
        pattern = new RegExp('\\b' + escapeRegExp(value) + '\\b', 'gi');
        WORD_REGEX_CACHE.set(value, pattern);
      }
      pattern.lastIndex = 0;
      return pattern;
    }

    function countLatin(haystack, phrase, notBefore) {
      const pattern = wordRegex(phrase);
      let count = 0;
      let match;
      while ((match = pattern.exec(haystack)) !== null) {
        if (notBefore !== undefined) {
          const before = haystack.slice(Math.max(0, match.index - 24), match.index);
          const blocked = notBefore.some((prefix) => {
            if (prefix === "n't") return /n't\s*$/i.test(before);
            return new RegExp('(?:^|[^a-z])' + escapeRegExp(prefix) + '\\s*$', 'i').test(before);
          });
          if (blocked) {
            if (pattern.lastIndex === match.index) pattern.lastIndex += 1;
            continue;
          }
        }
        count += 1;
        if (pattern.lastIndex === match.index) pattern.lastIndex += 1;
      }
      return count;
    }

    function countCjk(haystack, phrase, notBefore, notAfter) {
      let count = 0;
      let from = 0;
      while (from <= haystack.length - phrase.length) {
        const index = haystack.indexOf(phrase, from);
        if (index < 0) break;
        const before = haystack.slice(Math.max(0, index - 3), index);
        const after = haystack.slice(index + phrase.length, index + phrase.length + 3);
        const blockedBefore = notBefore !== undefined
          && notBefore.some((prefix) => before.endsWith(prefix));
        const blockedAfter = notAfter !== undefined
          && notAfter.some((suffix) => after.startsWith(suffix));
        if (!blockedBefore && !blockedAfter && !isANotA(haystack, index, phrase)) {
          count += 1;
        }
        from = index + phrase.length;
      }
      return count;
    }

    /** Skip the “A不A / A不AB” question form, which is not an emotion claim. */
    function isANotA(text, index, value) {
      if (value.charAt(0) !== '不') return false;
      const rest = value.slice(1);
      if (rest.length === 0) return false;
      return index > 0 && text.charAt(index - 1) === rest.charAt(0);
    }

    function countPhrase(haystack, phrase) {
      const value = textOf(phrase);
      if (/[\u4e00-\u9fff]/.test(value)) {
        return countCjk(haystack, value, phrase.notBefore, phrase.notAfter);
      }
      return countLatin(haystack, value, phrase.notBefore);
    }

    /**
     * Return every accepted occurrence of one phrase, so the caller can ask who
     * the wording is about before counting it as the model's own emotion.
     */
    function collectPhrase(haystack, phrase) {
      const value = textOf(phrase);
      const positions = [];
      if (/[\u4e00-\u9fff]/.test(value)) {
        let from = 0;
        while (from <= haystack.length - value.length) {
          const index = haystack.indexOf(value, from);
          if (index < 0) break;
          const before = haystack.slice(Math.max(0, index - 3), index);
          const after = haystack.slice(index + value.length, index + value.length + 3);
          const blockedBefore = phrase.notBefore !== undefined
            && phrase.notBefore.some((prefix) => before.endsWith(prefix));
          const blockedAfter = phrase.notAfter !== undefined
            && phrase.notAfter.some((suffix) => after.startsWith(suffix));
          if (!blockedBefore && !blockedAfter && !isANotA(haystack, index, value)) {
            positions.push(index);
          }
          from = index + value.length;
        }
        return positions;
      }

      const pattern = wordRegex(value);
      let match;
      while ((match = pattern.exec(haystack)) !== null) {
        let blocked = false;
        if (phrase.notBefore !== undefined) {
          const before = haystack.slice(Math.max(0, match.index - 24), match.index);
          blocked = phrase.notBefore.some((prefix) => {
            if (prefix === "n't") return /n't\s*$/i.test(before);
            return new RegExp('(?:^|[^a-z])' + escapeRegExp(prefix) + '\\s*$', 'i').test(before);
          });
        }
        if (!blocked) positions.push(match.index);
        if (pattern.lastIndex === match.index) pattern.lastIndex += 1;
      }
      return positions;
    }

    /** English emotion verbs whose experiencer can follow the verb. */
    const POST_VERB_CUES = new Set([
      'annoy', 'annoys', 'annoyed', 'frustrate', 'frustrates', 'frustrated',
      'worry', 'worries', 'worried', 'bother', 'bothers', 'bothered',
      'upset', 'upsets', 'please', 'pleases', 'pleased', 'delight',
      'delights', 'delighted', 'anger', 'angers', 'angered',
    ]);

    /** Pronouns and nouns used to decide who an emotion belongs to. */
    const SUBJECT_GROUPS = [
      {
        kind: 'self',
        zh: ['我', '我们', '咱们', '咱', '自己', '本人', '让我', '令我', '使我'],
        en: ['i', 'we', 'me', 'my', 'mine', 'our', 'ours', 'us', 'myself', 'ourselves'],
      },
      {
        kind: 'other',
        zh: [
          '用户', '你', '您', '他', '她', '他们', '她们', '对方', '提问者',
          '同事', '队友', '作者', '开发者', '客户', '读者',
        ],
        en: [
          'you', 'your', 'yours', 'he', 'him', 'his', 'she', 'her', 'hers',
          'they', 'them', 'their', 'theirs', 'themselves', 'user',
          'users', 'author', 'developer', 'reader', 'client', 'colleague',
        ],
      },
      {
        kind: 'object',
        zh: [
          '这个', '那个', '这些', '那些', '它', '方案', '代码', '错误', '结果',
          '问题', '文件', '测试', '配置', '功能', '页面', '接口',
        ],
        en: [
          'this', 'that', 'these', 'those', 'it', 'the code', 'the result',
          'the error', 'the test', 'the config', 'the feature', 'the page',
          'the api',
        ],
      },
    ];

    function subjectPositions(text) {
      const positions = { self: -1, other: -1, object: -1 };
      for (const group of SUBJECT_GROUPS) {
        for (const marker of group.zh) {
          let from = 0;
          while (true) {
            const index = text.indexOf(marker, from);
            if (index < 0) break;
            if (marker === '他' && index > 0 && text[index - 1] === '其') {
              from = index + 1;
              continue;
            }
            if (index > positions[group.kind]) positions[group.kind] = index;
            from = index + marker.length;
          }
        }
        for (const marker of group.en) {
          const pattern = wordRegex(marker);
          let match;
          while ((match = pattern.exec(text)) !== null) {
            if (match.index > positions[group.kind]) positions[group.kind] = match.index;
            if (pattern.lastIndex === match.index) pattern.lastIndex += 1;
          }
        }
      }
      return positions;
    }

    /** Verbs that report someone else's state, including quoted speech. */
    const REPORTING_VERBS = {
      zh: ['认为', '以为', '觉得', '感觉', '表示', '声称', '写道', '指出', '说'],
      en: [
        'think', 'thinks', 'thought', 'believe', 'believes', 'believed',
        'feel', 'feels', 'felt', 'say', 'says', 'said', 'claim', 'claims',
        'claimed', 'mention', 'mentions', 'mentioned', 'worry', 'worries',
        'worried', 'hope', 'hopes', 'hoped',
      ],
    };

    function lastMarkerIn(text, zh, en) {
      let best = { pos: -1, marker: null };
      for (const marker of zh) {
        let from = 0;
        while (true) {
          const index = text.indexOf(marker, from);
          if (index < 0) break;
          if (marker === '说') {
            const previous = index > 0 ? text[index - 1] : '';
            const next = text[index + 1] || '';
            if (previous === '听' || previous === '小' || next === '明'
              || next === '服' || next === '法') {
              from = index + 1;
              continue;
            }
          }
          if (index > best.pos) best = { pos: index, marker };
          from = index + marker.length;
        }
      }
      for (const marker of en) {
        const pattern = wordRegex(marker);
        let match;
        while ((match = pattern.exec(text)) !== null) {
          if (match.index > best.pos) best = { pos: match.index, marker };
          if (pattern.lastIndex === match.index) pattern.lastIndex += 1;
        }
      }
      return best;
    }

    function nearestKind(positions) {
      const nearest = Math.max(positions.self, positions.other, positions.object);
      if (nearest < 0) return 'unknown';
      if (positions.self === nearest) return 'self';
      if (positions.other === nearest) return 'other';
      return 'object';
    }

    /**
     * Detect reported speech inside quotation marks, so a quoted “I am angry”
     * is not read as the model's own state.
     */
    function isQuoted(haystack, index) {
      const before = haystack.slice(0, index);
      for (const [open, close] of [['“', '”'], ['「', '」'], ['『', '』']]) {
        const opens = before.split(open).length - 1;
        const closes = before.split(close).length - 1;
        if (opens > closes) return true;
      }
      return (before.split('"').length - 1) % 2 === 1;
    }

    /**
     * Attribute one cue to the model, to someone else, or to an evaluated object.
     * An object stays with the model unless another person is nearer than the
     * model in the same sentence (for example “用户对这个错误很生气”).
     */
    function subjectOf(haystack, index, phrase) {
      const value = phrase === undefined ? '' : textOf(phrase);
      if (POST_VERB_CUES.has(value)) {
        const ahead = haystack.slice(
          index + value.length,
          index + value.length + 28,
        );
        const direct = ahead.match(
          /^\s*(?:so|very|really|quite|too)?\s*(me|us|you|him|her|them|the user|the users)\b/,
        );
        if (direct !== null) {
          return direct[1] === 'me' || direct[1] === 'us' ? 'self' : 'other';
        }
      }
      const before = haystack.slice(Math.max(0, index - 90), index);
      let boundary = -1;
      for (const marker of ['。', '！', '？', '；', '\n', '. ', '! ', '? ']) {
        boundary = Math.max(boundary, before.lastIndexOf(marker));
      }
      const clause = boundary >= 0 ? before.slice(boundary + 1) : before;
      let sentence = clause;
      const comma = Math.max(
        sentence.lastIndexOf('，'),
        sentence.lastIndexOf(','),
        sentence.lastIndexOf('、'),
      );
      if (comma >= 0) {
        const beforeComma = sentence.slice(0, comma).trimEnd();
        const afterComma = sentence.slice(comma + 1);
        const commaVerb = lastMarkerIn(beforeComma, REPORTING_VERBS.zh, REPORTING_VERBS.en);
        const endsWithVerb = commaVerb.pos >= 0
          && beforeComma.endsWith(commaVerb.marker);
        const strippedAfter = afterComma
          .trimStart()
          .replace(/^(?:但|但是|不过|而|所以|因此|然后|however|but|and|so)\s*/i, '');
        const leadingVerb = lastMarkerIn(
          strippedAfter.slice(0, 12),
          REPORTING_VERBS.zh,
          REPORTING_VERBS.en,
        );
        const startsWithVerb = leadingVerb.pos === 0;
        const afterPositions = subjectPositions(afterComma);
        const afterHasSubject = afterPositions.self >= 0
          || afterPositions.other >= 0
          || afterPositions.object >= 0;
        if (!endsWithVerb && !startsWithVerb && afterHasSubject) sentence = afterComma;
      }
      const verb = lastMarkerIn(sentence, REPORTING_VERBS.zh, REPORTING_VERBS.en);
      if (verb.pos >= 0) {
        const speaker = nearestKind(subjectPositions(sentence.slice(0, verb.pos)));
        const embedded = nearestKind(
          subjectPositions(sentence.slice(verb.pos + verb.marker.length)),
        );
        if (speaker === 'other') return 'other';
        if (speaker === 'self') {
          if (embedded === 'other') return 'other';
          return 'self';
        }
      }
      const positions = subjectPositions(sentence);
      const nearest = Math.max(positions.self, positions.other, positions.object);
      if (nearest < 0) return 'unknown';
      if (positions.self === nearest) return 'self';
      if (positions.other === nearest) return 'other';
      if (positions.object === nearest && positions.other > positions.self) return 'other';
      return 'object';
    }

    function countMatches(text, pattern) {
      const matches = text.match(pattern);
      return matches === null ? 0 : matches.length;
    }

    function stripCode(text) {
      return text
        .replace(/```[\s\S]*?```/g, ' ')
        .replace(/~~~[\s\S]*?~~~/g, ' ')
        .replace(/`[^`\n]*`/g, ' ')
        .replace(/https?:\/\/\S+/g, ' ');
    }

    function localValence(part) {
      const haystack = part.toLowerCase();
      const unit = Math.max(1, part.length / 600);
      const count = (group) => {
        let total = 0;
        for (const phrase of group.phrases) {
          for (const index of collectPhrase(haystack, phrase)) {
            if (isQuoted(haystack, index)) continue;
            if (subjectOf(haystack, index, phrase) === 'other') continue;
            total += 1;
          }
        }
        return total;
      };
      const positive = count(CUE_GROUPS[0]) / unit;
      const negative = count(CUE_GROUPS[1]) / unit;
      const p = sat(positive);
      const n = sat(negative);
      return (p - n) / (p + n + 0.55);
    }

    function splitSegments(text) {
      const matched = text.match(/[^。！？!?；;\n.]+[。！？!?；;.!?]?/g) || [];
      const parts = matched.map((part) => part.trim()).filter((part) => part.length > 0);
      if (parts.length <= 28) return parts;
      const size = Math.ceil(parts.length / 28);
      const merged = [];
      for (let index = 0; index < parts.length; index += size) {
        merged.push(parts.slice(index, index + size).join(' '));
      }
      return merged;
    }

    function emptyReport(chars) {
      return {
        label: 'empty',
        valence: 0,
        certainty: 0.5,
        arousal: 0,
        strain: 0,
        curiosity: 0,
        trend: 'flat',
        segments: [],
        topCues: [],
        emotions: [],
        cueCount: 0,
        otherCueCount: 0,
        otherEmotionCueCount: 0,
        chars,
        weak: true,
        confidence: 'low',
        confidenceScore: 0,
      };
    }

    const STATE_LABELS = [
      'calm', 'confident', 'curious', 'cautious', 'conflicted', 'frustrated',
      'anxious', 'fear', 'sorrowful', 'agitated', 'excited', 'relieved',
      'happy', 'angry', 'regretful', 'sad', 'surprised', 'disgusted', 'resigned',
    ];

    /**
     * Estimate an affect profile from a reasoning trace.
     * @param {string} text - model-provided reasoning text.
     * @returns {object} label, dimensions, trend, sparkline segments, and evidence.
     */
    function analyzeAffect(text) {
      const raw = typeof text === 'string' ? text : '';
      const cleaned = stripCode(raw)
        .replace(/[ \t]+/g, ' ')
        .replace(/\n{2,}/g, '\n')
        .trim();
      if (raw.trim().length === 0) return emptyReport(raw.length);
      if (cleaned.length === 0) {
        return {
          ...emptyReport(raw.length),
          label: 'obscure',
          weak: true,
        };
      }

      const haystack = cleaned.toLowerCase();
      const unit = Math.max(1, cleaned.length / 600);
      const counts = {};
      const hits = [];
      let otherCueCount = 0;
      let otherEmotionCueCount = 0;

      const countIncluded = (phrase) => {
        const positions = collectPhrase(haystack, phrase);
        let included = 0;
        let excluded = 0;
        for (const index of positions) {
          if (isQuoted(haystack, index) || subjectOf(haystack, index, phrase) === 'other') {
            excluded += 1;
          } else {
            included += 1;
          }
        }
        return { included, excluded };
      };

      for (const group of CUE_GROUPS) {
        let total = 0;
        for (const phrase of group.phrases) {
          const { included, excluded } = countIncluded(phrase);
          otherCueCount += excluded;
          if (included > 0) {
            total += included;
            hits.push({ text: textOf(phrase), count: included, key: group.key });
          }
        }
        counts[group.key] = total;
      }

      const emotionCounts = {};
      for (const key of EMOTION_KEYS) emotionCounts[key] = 0;
      let emotionCueCount = 0;
      for (const cue of emotionWeightedCues()) {
        const { included, excluded } = countIncluded(cue);
        otherCueCount += excluded;
        otherEmotionCueCount += excluded;
        if (included === 0) continue;
        emotionCueCount += included;
        let primary = null;
        let primaryWeight = -Infinity;
        for (const [key, weight] of Object.entries(cue.weights)) {
          if (emotionCounts[key] === undefined) continue;
          emotionCounts[key] += included * weight;
          if (weight > primaryWeight) {
            primary = key;
            primaryWeight = weight;
          }
        }
        if (primary !== null) {
          hits.push({ text: cue.text, count: included, key: primary });
        }
      }

      const questions = countMatches(cleaned, /[?？]/g);
      const exclamations = countMatches(cleaned, /[!！]/g);
      const ellipses = countMatches(cleaned, /…|\.{3,}/g);
      let corrections = 0;
      for (const phrase of CORRECTION_PHRASES) {
        corrections += countPhrase(haystack, phrase);
      }

      const density = (key) => sat((counts[key] || 0) / unit);
      const positive = density('positive');
      const negative = density('negative');
      const uncertaintyBase = density('uncertainty');
      const certaintyBase = density('certainty');
      const strainBase = density('strain');
      const curiosityBase = density('curiosity');
      const arousalBase = density('arousal');

      const emotionDensity = (key) => sat((emotionCounts[key] || 0) / unit);
      const happyCue = emotionDensity('happy');
      const angryCue = emotionDensity('angry');
      const regretCue = emotionDensity('regretful');
      const sadCue = emotionDensity('sad');
      const surpriseCue = emotionDensity('surprised');
      const disgustCue = emotionDensity('disgusted');
      const resignedCue = emotionDensity('resigned');
      const reliefCue = emotionDensity('relieved');
      const fearCue = emotionDensity('fear');
      const anxietyCue = emotionDensity('anxious');
      const sorrowCue = emotionDensity('sorrowful');
      const agitationCue = emotionDensity('agitated');
      const excitementCue = emotionDensity('excited');
      const frustrationCue = emotionDensity('frustrated');

      const positiveAdjusted = clamp01(
        positive
          + 0.55 * happyCue
          + 0.25 * excitementCue
          + 0.35 * reliefCue,
      );
      const negativeAdjusted = clamp01(
        negative
          + 0.55 * angryCue
          + 0.45 * sadCue
          + 0.35 * regretCue
          + 0.45 * disgustCue
          + 0.4 * fearCue
          + 0.4 * anxietyCue
          + 0.35 * sorrowCue
          + 0.3 * agitationCue
          + 0.25 * frustrationCue,
      );

      const uncertainty = clamp01(
        uncertaintyBase
          + 0.22 * sat(questions / unit)
          + 0.12 * sat(ellipses / unit),
      );
      const valence = clamp(
        (positiveAdjusted - negativeAdjusted)
          / (positiveAdjusted + negativeAdjusted + 0.55),
        -1,
        1,
      );
      const certainty = clamp(
        0.5 + 0.5 * certaintyBase - 0.45 * uncertainty,
        0.05,
        0.98,
      );
      const strain = clamp01(
        0.62 * strainBase
          + 0.38 * negativeAdjusted
          + 0.18 * sat(corrections / unit)
          + 0.12 * angryCue
          + 0.08 * sadCue
          + 0.15 * anxietyCue
          + 0.12 * fearCue
          + 0.1 * agitationCue
          + 0.08 * frustrationCue
          + 0.08 * sorrowCue,
      );
      const curiosity = clamp01(
        0.75 * curiosityBase
          + 0.25 * uncertainty
          + 0.1 * sat(questions / unit),
      );
      const arousal = clamp01(
        0.5 * arousalBase
          + 0.2 * strain
          + 0.15 * negativeAdjusted
          + 0.15 * Math.max(0, valence)
          + 0.1 * sat(exclamations / unit)
          + 0.15 * angryCue
          + 0.1 * happyCue
          + 0.1 * surpriseCue
          + 0.15 * fearCue
          + 0.15 * agitationCue
          + 0.12 * excitementCue
          + 0.1 * anxietyCue
          + 0.08 * frustrationCue,
      );

      const cueCount = hits.reduce((total, hit) => total + hit.count, 0);

      const segments = splitSegments(cleaned).map(localValence);
      let trend = 'flat';
      if (segments.length >= 4) {
        const third = Math.max(1, Math.floor(segments.length / 3));
        const average = (values) => values.reduce((sum, value) => sum + value, 0) / values.length;
        const delta = average(segments.slice(-third)) - average(segments.slice(0, third));
        const ending = average(segments.slice(-third));
        if (delta > 0.16 && ending > 0.05) trend = 'up';
        else if (delta < -0.16 && ending < -0.05) trend = 'down';
      }

      const discrete = [
        {
          key: 'angry',
          value: angryCue,
          enabled: angryCue >= 0.42 && (valence < 0.2 || angryCue >= 0.65),
        },
        {
          key: 'fear',
          value: fearCue,
          enabled: fearCue >= 0.42 && (valence < 0.15 || fearCue >= 0.65),
        },
        { key: 'disgusted', value: disgustCue, enabled: disgustCue >= 0.42 },
        {
          key: 'sad',
          value: sadCue,
          enabled: sadCue >= 0.42 && (arousal < 0.55 || sadCue >= 0.65),
        },
        {
          key: 'sorrowful',
          value: sorrowCue,
          enabled: sorrowCue >= 0.42 && arousal < 0.55,
        },
        { key: 'regretful', value: regretCue, enabled: regretCue >= 0.42 },
        {
          key: 'frustrated',
          value: frustrationCue,
          enabled: frustrationCue >= 0.42 && valence < 0.2,
        },
        {
          key: 'anxious',
          value: anxietyCue,
          enabled: anxietyCue >= 0.42 && valence < 0.2,
        },
        {
          key: 'agitated',
          value: agitationCue,
          enabled: agitationCue >= 0.3 && (valence < 0.05 || agitationCue >= 0.7),
        },
        {
          key: 'excited',
          value: excitementCue,
          enabled: excitementCue >= 0.4 && valence > 0,
        },
        {
          key: 'happy',
          value: happyCue,
          enabled: happyCue >= 0.42 && valence > 0.05,
        },
        { key: 'surprised', value: surpriseCue, enabled: surpriseCue >= 0.42 },
        { key: 'resigned', value: resignedCue, enabled: resignedCue >= 0.42 },
        {
          key: 'relieved',
          value: reliefCue,
          enabled: reliefCue >= 0.4
            && valence > -0.05
            && (strain < 0.45 || trend === 'up'),
        },
      ]
        .filter((emotion) => emotion.enabled)
        .sort((left, right) => right.value - left.value);

      const dominant = discrete.length > 0 ? discrete[0] : null;

      let label;
      if (cueCount === 0 && cleaned.length < 20 && emotionCueCount === 0) {
        label = 'unknown';
      } else if (dominant !== null) {
        label = dominant.key;
      } else if (cueCount <= 1 && emotionCueCount === 0) {
        // One weak cue in a long thought is not enough to claim a distinct
        // stance. "Calm" would assert something we did not observe; expose the
        // missing evidence instead, and do not blend it into the session state.
        label = 'unknown';
      } else {
        const failurePressure = 0.6 * strainBase + 0.4 * negativeAdjusted;
        const frustration = 0.65 * failurePressure + 0.35 * Math.max(0, -valence);
        const anxiety = 0.45 * strain + 0.35 * uncertainty + 0.2 * arousal;
        const fearPressure = 0.6 * fearCue + 0.4 * anxietyCue;
        const sorrowPressure = 0.65 * sorrowCue + 0.35 * sadCue + 0.15 * regretCue;
        const agitationPressure = 0.7 * agitationCue + 0.3 * frustrationCue;
        if (corrections >= 2 && uncertainty >= 0.45 && strain >= 0.3) {
          label = 'conflicted';
        } else if (fearPressure >= 0.38 && valence < 0.1) {
          label = 'fear';
        } else if (sorrowPressure >= 0.4 && arousal < 0.6) {
          label = 'sorrowful';
        } else if (agitationPressure >= 0.42 && valence < 0.1) {
          label = 'agitated';
        } else if (valence <= -0.35 && negativeAdjusted >= 0.4 && uncertainty < 0.35) {
          label = 'frustrated';
        } else if (frustration >= 0.55) {
          label = 'frustrated';
        } else if (anxiety >= 0.5 && arousal >= 0.3 && valence < 0.12) {
          label = 'anxious';
        } else if (trend === 'down' && strain >= 0.4 && negativeAdjusted >= 0.35) {
          label = 'frustrated';
        } else if (strain >= 0.45 && valence >= -0.05 && trend === 'up') {
          label = 'relieved';
        } else if (valence >= 0.28 && arousal >= 0.38) {
          label = 'excited';
        } else if (uncertainty >= 0.55 && strain < 0.45) {
          label = 'cautious';
        } else if (curiosity >= 0.4 && valence >= -0.25) {
          label = 'curious';
        } else if (uncertainty >= 0.32) {
          label = 'cautious';
        } else if (certainty >= 0.62) {
          label = 'confident';
        } else {
          label = 'calm';
        }
      }

      const emotions = STATE_LABELS
        .map((key) => ({ key, value: emotionDensity(key) }))
        .filter((emotion) => emotion.value >= 0.2)
        .sort((left, right) => right.value - left.value);

      const evidenceRatio = cueCount / Math.max(1, cueCount + otherCueCount);
      const confidenceScore = cueCount < 2
        ? Math.min(0.44, 0.1 + 0.12 * cueCount + 0.35 * evidenceRatio)
        : clamp01(
          0.1 + 0.12 * cueCount + 0.35 * evidenceRatio,
        );
      const confidence = confidenceScore >= 0.75
        ? 'high'
        : confidenceScore >= 0.45
          ? 'medium'
          : 'low';

      hits.sort((left, right) => (
        (EMOTION_KEYS.has(left.key) ? 0 : 1) - (EMOTION_KEYS.has(right.key) ? 0 : 1)
        || right.count - left.count
        || (CUE_RANK[left.key] || 9) - (CUE_RANK[right.key] || 9)
      ));
      const seen = new Set();
      const topCues = [];
      for (const hit of hits) {
        if (seen.has(hit.text)) continue;
        seen.add(hit.text);
        topCues.push(hit);
        if (topCues.length >= 5) break;
      }

      return {
        label,
        valence,
        certainty,
        arousal,
        strain,
        curiosity,
        trend,
        segments,
        topCues,
        emotions,
        cueCount,
        otherCueCount,
        otherEmotionCueCount,
        chars: raw.length,
        weak: cueCount < 2,
        confidence,
        confidenceScore,
      };
    }

    /* ---------------------------------------------------------------------
     * Turn-end affect state (Markov-style inertia)
     * ------------------------------------------------------------------- */

    const SESSION_STATES = new Map();

    function normalizeDist(input) {
      const dist = {};
      let sum = 0;
      for (const label of STATE_LABELS) {
        const value = typeof input[label] === 'number' && Number.isFinite(input[label])
          ? Math.max(0, input[label])
          : 0;
        dist[label] = value;
        sum += value;
      }
      if (sum <= 0) {
        dist.calm = 1;
        return dist;
      }
      for (const label of STATE_LABELS) dist[label] /= sum;
      return dist;
    }

    function argmaxLabel(dist) {
      let best = 'calm';
      let bestValue = -1;
      for (const label of STATE_LABELS) {
        const value = dist[label] || 0;
        if (value > bestValue) {
          best = label;
          bestValue = value;
        }
      }
      return best;
    }

    function stateLabelOf(label) {
      return STATE_LABELS.includes(label) ? label : null;
    }

    function observationDist(report) {
      const dist = {};
      for (const label of STATE_LABELS) dist[label] = 0;
      for (const emotion of Array.isArray(report.emotions) ? report.emotions : []) {
        if (dist[emotion.key] !== undefined) {
          dist[emotion.key] = Math.max(dist[emotion.key], emotion.value);
        }
      }
      const primary = stateLabelOf(report.label);
      if (primary !== null) dist[primary] = Math.max(dist[primary], 0.5);
      return normalizeDist(dist);
    }

    function clampDims(input) {
      return {
        valence: clamp(Number(input.valence) || 0, -1, 1),
        certainty: clamp01(Number(input.certainty) || 0),
        arousal: clamp01(Number(input.arousal) || 0),
        strain: clamp01(Number(input.strain) || 0),
        curiosity: clamp01(Number(input.curiosity) || 0),
      };
    }

    function makeHistoryEntry(turn, dominant, dims) {
      return {
        turn,
        dominant,
        valence: dims.valence,
        certainty: dims.certainty,
        arousal: dims.arousal,
        strain: dims.strain,
        curiosity: dims.curiosity,
      };
    }

    /**
     * Blend one turn's observation into the session state. The previous state
     * keeps its inertia, so a single noisy turn does not flip the whole mood;
     * repeated evidence moves the dominant label and dimensions.
     */
    function updateAffectState(previous, report, turn, key) {
      const observed = clampDims(report);
      const observedDist = observationDist(report);
      if (report.label === 'unknown') {
        // A weak observation must not overwrite a mood built from stronger
        // evidence. Keep the previous state and label the turn as observing.
        if (previous === null || previous === undefined) {
          return {
            turns: 0,
            dims: observed,
            dist: observedDist,
            dominant: 'unknown',
            history: [makeHistoryEntry(turn, 'unknown', observed)],
            lastTurn: turn,
            lastKey: key,
            reliability: 'low',
            observing: true,
          };
        }
        return {
          ...previous,
          lastTurn: turn,
          lastKey: key,
          reliability: previous.reliability || 'low',
          observing: true,
        };
      }
      if (previous === null || previous === undefined) {
        const dominant = stateLabelOf(report.label) || argmaxLabel(observedDist);
        return {
          turns: 1,
          dims: observed,
          dist: observedDist,
          dominant,
          history: [makeHistoryEntry(turn, dominant, observed)],
          lastTurn: turn,
          lastKey: key,
          reliability: report.confidence || 'low',
        };
      }

      const weight = clamp(
        0.25 + 0.55 * (Number(report.confidenceScore) || 0),
        0.25,
        0.8,
      );
      const dims = {};
      for (const name of ['valence', 'certainty', 'arousal', 'strain', 'curiosity']) {
        const previousValue = Number(previous.dims?.[name]);
        const base = Number.isFinite(previousValue)
          ? previousValue
          : name === 'valence' ? 0 : 0.5;
        const blended = base * (1 - weight) + observed[name] * weight;
        dims[name] = name === 'valence'
          ? clamp(blended, -1, 1)
          : clamp01(blended);
      }

      const mixed = {};
      for (const label of STATE_LABELS) {
        mixed[label] = (previous.dist?.[label] || 0) * (1 - weight)
          + observedDist[label] * weight;
      }
      const dist = normalizeDist(mixed);
      let dominant = argmaxLabel(dist);
      if ((dist[previous.dominant] || 0) >= (dist[dominant] || 0) - 0.08) {
        dominant = previous.dominant;
      }

      const history = [
        ...(Array.isArray(previous.history) ? previous.history : []),
        makeHistoryEntry(turn, dominant, dims),
      ].slice(-12);

      return {
        turns: (Number(previous.turns) || 0) + 1,
        dims,
        dist,
        dominant,
        history,
        lastTurn: turn,
        lastKey: key,
        reliability: report.confidence || 'low',
      };
    }

    function stateTrend(history) {
      if (!Array.isArray(history) || history.length < 2) return 'stable';
      const previous = history[history.length - 2];
      const current = history[history.length - 1];
      const strainDelta = (Number(current.strain) || 0) - (Number(previous.strain) || 0);
      const certaintyDelta = (Number(current.certainty) || 0) - (Number(previous.certainty) || 0);
      if (strainDelta > 0.12) return 'tenser';
      if (strainDelta < -0.12) return 'calmer';
      if (certaintyDelta > 0.12) return 'moreConfident';
      if (certaintyDelta < -0.12) return 'moreUncertain';
      return 'stable';
    }

    /**
     * Turn the blended state into a tone and a next direction. Unlike a single
     * rule branch, every candidate is scored from the dimensions together with
     * the emotion distribution, so several weak signals can outweigh one strong
     * one without any single dimension deciding the answer.
     */
    function deriveGuidance(dims, dominant, dist) {
      const valence = Number(dims.valence) || 0;
      const certainty = Number(dims.certainty) || 0;
      const arousal = Number(dims.arousal) || 0;
      const strain = Number(dims.strain) || 0;
      const curiosity = Number(dims.curiosity) || 0;
      const emotion = { ...(dist || {}) };
      const hasDistribution = Object.values(emotion)
        .some((value) => Number(value) > 0);
      if (!hasDistribution && dominant) emotion[dominant] = 0.5;
      const e = (key) => Math.max(0, Number(emotion[key]) || 0);
      const joy = e('happy') + 0.7 * e('excited') + 0.5 * e('relieved');
      const sadness = e('sad') + e('sorrowful')
        + 0.7 * e('regretful') + 0.5 * e('resigned');
      const anger = e('angry') + 0.7 * e('frustrated') + 0.35 * e('disgusted');
      const fear = e('fear') + 0.6 * e('anxious');
      const agitation = e('agitated') + 0.35 * e('anxious');
      const positive = Math.max(0, valence);
      const negative = Math.max(0, -valence);

      const toneScores = {
        calmPrecise:
          0.1
          + 0.2 * (1 - arousal)
          + 0.18 * (1 - Math.abs(valence))
          + 0.12 * (1 - strain)
          + 0.12 * (1 - Math.abs(certainty - 0.5) * 2),
        warmEngaged:
          0.1
          + 1.5 * curiosity
          + 0.75 * joy
          + 0.18 * positive
          - 0.25 * fear
          - 0.2 * sadness,
        carefulTentative:
          0.15
          + 0.75 * (1 - certainty)
          + 0.35 * fear
          + 0.2 * sadness
          + 0.1 * curiosity,
        directFirm:
          0.18
          + 0.65 * certainty
          + 0.18 * positive
          - 0.35 * agitation
          - 0.2 * fear
          - 0.15 * sadness,
        groundedConcise:
          0.12
          + 0.65 * strain
          + 0.45 * anger
          + 0.4 * fear
          + 0.35 * agitation
          - 0.15 * joy,
        gentleHonest:
          0.1
          + 0.9 * sadness
          + 0.25 * (1 - arousal)
          + 0.12 * negative
          - 0.2 * anger,
        neutralDeescalate:
          0.1
          + 0.7 * strain
          + 0.55 * anger
          + 0.45 * agitation
          + 0.25 * fear
          - 0.15 * joy,
      };

      const directionScores = {
        verifyAssumption:
          0.15
          + 0.75 * (1 - certainty)
          + 0.25 * fear
          + 0.15 * curiosity
          + 0.2 * strain,
        askClarifying:
          0.05
          + 0.85 * (1 - certainty)
          + 0.3 * fear
          - 0.2 * curiosity,
        narrowScope:
          0.1
          + 0.65 * strain
          + 0.4 * anger
          + 0.3 * agitation,
        consolidate:
          0.15
          + 0.6 * certainty
          + 0.55 * joy
          - 0.25 * strain,
        followThread:
          0.1
          + 1.0 * curiosity
          + 0.2 * joy
          - 0.2 * strain,
        pauseReassess:
          0.05
          + 0.65 * strain
          + 0.35 * fear
          + 0.3 * agitation
          + 0.15 * negative,
        acknowledgeNext:
          0.05
          + 0.9 * sadness
          + 0.2 * (1 - arousal)
          + 0.1 * negative,
      };

      const pick = (scores, fallback) => {
        let best = fallback;
        let bestValue = -Infinity;
        for (const [key, value] of Object.entries(scores)) {
          if (value > bestValue) {
            best = key;
            bestValue = value;
          }
        }
        return best;
      };

      return {
        tone: pick(toneScores, 'calmPrecise'),
        direction: pick(directionScores, 'verifyAssumption'),
      };
    }

    /** Pick the last reasoning block of one completed Turn. */
    function findTurnReasoning(nodes, turn) {
      if (!Array.isArray(nodes)) return null;
      for (let index = nodes.length - 1; index >= 0; index -= 1) {
        const node = nodes[index];
        if (node === null || typeof node !== 'object') continue;
        if (node.kind !== 'assistant' || Number(node.turn) !== Number(turn)) continue;
        const blocks = Array.isArray(node.blocks) ? node.blocks : [];
        const text = blocks
          .filter((block) => block !== null
            && typeof block === 'object'
            && block.kind === 'reasoning'
            && typeof block.text === 'string')
          .map((block) => block.text)
          .join('\n')
          .trim();
        if (text.length > 0) {
          return {
            key: String(node.messageId ?? node.seq ?? ''),
            text,
          };
        }
      }
      return null;
    }

    function reportMeta(report) {
      return {
        label: report.label,
        confidence: report.confidence,
        confidenceScore: report.confidenceScore,
        chars: report.chars,
        cueCount: report.cueCount,
        otherCueCount: report.otherCueCount,
        emotions: Array.isArray(report.emotions) ? report.emotions.slice(0, 4) : [],
      };
    }

    function makeWindowSnapshot(sessionId, turn, noReasoning, state, report) {
      return {
        sessionId,
        turn,
        noReasoning,
        state,
        report,
        guidance: deriveGuidance(state.dims, state.dominant, state.dist),
        trend: stateTrend(state.history),
      };
    }

    function getSessionEntry(sessionId) {
      const existing = SESSION_STATES.get(sessionId);
      return existing === undefined ? null : existing;
    }

    const BACKFILL_TURNS = 3;

    /**
     * Seed a fresh session from the last few completed Turns, so opening an
     * existing conversation does not start from a single turn. This runs once
     * per session and never rescans the whole history.
     */
    function seedWindowSnapshot(sessionId, nodes, turnEnds, latestTurn) {
      const turns = [...turnEnds.keys()]
        .map((turn) => Number(turn))
        .filter((turn) => Number.isFinite(turn))
        .sort((left, right) => left - right)
        .slice(-BACKFILL_TURNS);

      let state = null;
      let lastReport = null;
      let latestReport = null;
      let latestKey = '';
      let lastKey = '';

      for (const turn of turns) {
        const reasoning = findTurnReasoning(nodes, turn);
        if (reasoning === null) continue;
        const report = analyzeAffect(reasoning.text);
        const key = sessionId + ':' + turn + ':' + reasoning.key;
        state = updateAffectState(state, report, turn, key);
        lastReport = report;
        lastKey = key;
        if (turn === latestTurn) {
          latestReport = report;
          latestKey = key;
        }
      }

      if (state === null || lastReport === null) return null;

      const entry = {
        lastKey: latestReport !== null ? latestKey : lastKey,
        state,
        report: reportMeta(latestReport || lastReport),
        snapshot: null,
      };
      const snapshot = makeWindowSnapshot(
        sessionId,
        latestTurn,
        latestReport === null,
        state,
        entry.report,
      );
      entry.snapshot = snapshot;
      SESSION_STATES.set(sessionId, entry);
      return snapshot;
    }

    /**
     * Build one window snapshot from the latest completed Turn. It analyses at
     * most once per finalized Turn, then stores the blended state in memory so
     * later renders do not re-run the analyzer. The Host owns durable state.
     */
    function buildWindowSnapshot(sessionId, nodes, turnEnds) {
      if (typeof sessionId !== 'string' || !Array.isArray(nodes)) return null;
      if (!(turnEnds instanceof Map)) return null;

      let latestTurn = -1;
      for (const turn of turnEnds.keys()) {
        const numeric = Number(turn);
        if (Number.isFinite(numeric) && numeric > latestTurn) latestTurn = numeric;
      }
      if (latestTurn < 0) return null;

      const entry = getSessionEntry(sessionId);
      if (entry === null) {
        return seedWindowSnapshot(sessionId, nodes, turnEnds, latestTurn);
      }

      const reasoning = findTurnReasoning(nodes, latestTurn);

      if (reasoning === null) {
        if (entry.state === null || entry.report === null) return null;
        if (entry.snapshot !== null
          && entry.snapshot.noReasoning === true
          && entry.snapshot.turn === latestTurn) {
          return entry.snapshot;
        }
        const snapshot = makeWindowSnapshot(
          sessionId,
          latestTurn,
          true,
          entry.state,
          entry.report,
        );
        entry.snapshot = snapshot;
        return snapshot;
      }

      const key = sessionId + ':' + latestTurn + ':' + reasoning.key;
      if (entry.lastKey === key) {
        if (entry.report === null) entry.report = reportMeta(analyzeAffect(reasoning.text));
        if (entry.snapshot === null) {
          entry.snapshot = makeWindowSnapshot(
            sessionId,
            latestTurn,
            false,
            entry.state,
            entry.report,
          );
        }
        return entry.snapshot;
      }

      const report = analyzeAffect(reasoning.text);
      const state = updateAffectState(entry.state, report, latestTurn, key);
      const nextEntry = {
        lastKey: key,
        state,
        report: reportMeta(report),
        snapshot: null,
      };
      nextEntry.snapshot = makeWindowSnapshot(
        sessionId,
        latestTurn,
        false,
        state,
        nextEntry.report,
      );
      SESSION_STATES.set(sessionId, nextEntry);
      return nextEntry.snapshot;
    }

    /** Tiny external store shared by the source slot and the overlay window. */
    const WINDOW_STORE = (() => {
      let current = null;
      const listeners = new Set();
      return {
        getSnapshot: () => current,
        subscribe: (listener) => {
          listeners.add(listener);
          return () => {
            listeners.delete(listener);
          };
        },
        publish: (next) => {
          if (next === current) return;
          current = next;
          for (const listener of listeners) listener();
        },
      };
    })();

    const EMPTY_NODES = [];
    const EMPTY_TURN_ENDS = new Map();
    let WINDOW_BOTTOM = null;
    const SELECT_LEGACY_NODES = (snapshot) => (
      snapshot.legacy === undefined ? EMPTY_NODES : snapshot.legacy.nodes
    );
    const SELECT_TURN_ENDS = (snapshot) => (
      snapshot.legacy === undefined ? EMPTY_TURN_ENDS : snapshot.legacy.turnEnds
    );



    const CSS = `
.ta-root { display: flex; flex-direction: column; gap: 10px; }
.ta-card {
  --ta-accent: var(--dsw-alias-brand-primary);
  border: 1px solid var(--dsw-alias-border-l1);
  border-inline-start: 3px solid var(--ta-accent);
  border-radius: 8px;
  background: var(--dsw-alias-bg-layer-1);
  color: var(--dsw-alias-label-primary);
  padding: 9px 11px 10px;
  font-size: 12px;
  line-height: 1.5;
  font-family: inherit;
}
.ta-head { display: flex; align-items: center; gap: 7px; flex-wrap: wrap; }
.ta-aura { flex: none; color: var(--dsw-alias-brand-primary); }
.ta-title { font-size: 12px; font-weight: 600; letter-spacing: 0.01em; }
.ta-badge {
  display: inline-flex; align-items: center; gap: 4px;
  border: 1px solid var(--dsw-alias-border-l1);
  border-radius: 999px;
  color: var(--ta-accent);
  background: var(--dsw-alias-bg-layer-2);
  padding: 0 7px;
  font-size: 11px;
  font-weight: 600;
  line-height: 19px;
}
.ta-emoji { font-size: 11px; line-height: 1; }
.ta-badge-kind {
  font-weight: 500;
  opacity: 0.65;
  padding-inline-end: 5px;
  margin-inline-end: 1px;
  border-inline-end: 1px solid var(--dsw-alias-border-l1);
}
.ta-live {
  width: 6px; height: 6px; border-radius: 50%;
  background: var(--dsw-alias-brand-primary);
  animation: ta-pulse 1.4s ease-in-out infinite;
}
.ta-meta { color: var(--dsw-alias-label-secondary); font-size: 11px; }
.ta-toggle {
  margin-inline-start: auto;
  border: 0; background: transparent;
  color: var(--dsw-alias-label-secondary);
  font: inherit; font-size: 11px;
  padding: 2px 5px; border-radius: 4px; cursor: pointer;
}
.ta-toggle:hover { color: var(--dsw-alias-label-primary); background: var(--dsw-alias-bg-layer-2); }
.ta-toggle:focus-visible { outline: 2px solid var(--dsw-alias-brand-primary); outline-offset: 1px; }
.ta-summary { margin: 6px 0 0; color: var(--dsw-alias-label-secondary); font-size: 12px; }
.ta-summary-kind { font-weight: 600; color: var(--dsw-alias-label-primary); }
.ta-facts { margin: 3px 0 0; color: var(--dsw-alias-label-secondary); font-size: 10px; }
.ta-objective-note { opacity: 0.75; }
.ta-note { margin: 4px 0 0; color: var(--dsw-alias-label-secondary); font-size: 10px; }
.ta-section { margin-top: 9px; }
.ta-row { display: flex; align-items: center; gap: 8px; }
.ta-row + .ta-row { margin-top: 7px; }
.ta-row-label { flex: none; color: var(--dsw-alias-label-secondary); font-size: 11px; }
.ta-valence {
  position: relative; flex: 1; height: 8px; border-radius: 999px;
  background: linear-gradient(
    90deg,
    var(--dsw-alias-state-error-primary),
    var(--dsw-alias-state-warn-primary) 50%,
    var(--dsw-alias-state-success-primary)
  );
  opacity: 0.9;
}
.ta-marker {
  position: absolute; top: 50%; width: 12px; height: 12px;
  border-radius: 50%;
  background: var(--dsw-alias-bg-base);
  border: 2px solid var(--dsw-alias-label-primary);
  box-shadow: 0 0 0 2px var(--dsw-alias-bg-layer-1);
  transform: translate(-50%, -50%);
}
.ta-meters {
  margin-top: 9px;
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 10px;
}
.ta-meter-label { display: flex; justify-content: space-between; gap: 6px; color: var(--dsw-alias-label-secondary); font-size: 11px; }
.ta-meter-value { color: var(--dsw-alias-label-primary); font-variant-numeric: tabular-nums; }
.ta-track {
  position: relative; height: 5px; margin-top: 3px;
  border-radius: 999px; overflow: hidden;
  background: var(--dsw-alias-bg-layer-2);
}
.ta-fill { position: absolute; inset: 0 auto 0 0; border-radius: 999px; }
.ta-fill-certainty { background: var(--dsw-alias-brand-primary); }
.ta-fill-arousal { background: var(--dsw-alias-state-warn-primary); }
.ta-fill-strain { background: var(--dsw-alias-state-error-primary); }
.ta-section-label {
  display: flex; align-items: baseline; justify-content: space-between; gap: 8px;
  color: var(--dsw-alias-label-secondary); font-size: 11px; margin-bottom: 4px;
}
.ta-trend { color: var(--ta-accent); }
.ta-mix { display: flex; flex-direction: column; gap: 5px; }
.ta-mix-row {
  display: grid;
  grid-template-columns: 92px minmax(0, 1fr) 34px;
  align-items: center;
  gap: 8px;
}
.ta-mix-name {
  color: var(--dsw-alias-label-secondary);
  font-size: 11px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
.ta-mix-track { margin-top: 0; }
.ta-mix-value {
  color: var(--dsw-alias-label-secondary);
  font-size: 10px;
  text-align: end;
  font-variant-numeric: tabular-nums;
}
.ta-sparkline { display: flex; align-items: center; gap: 2px; height: 22px; }
.ta-bar { flex: 1 1 0; min-width: 2px; border-radius: 2px; }
.ta-cues { display: flex; flex-wrap: wrap; align-items: center; gap: 4px; }
.ta-chip {
  display: inline-flex; align-items: center; gap: 4px;
  border: 1px solid var(--dsw-alias-border-l1);
  border-radius: 6px;
  background: var(--dsw-alias-bg-base);
  color: var(--dsw-alias-label-secondary);
  padding: 0 6px; font-size: 11px; line-height: 19px;
}
.ta-chip-dot { width: 5px; height: 5px; border-radius: 50%; flex: none; }
.ta-none { color: var(--dsw-alias-label-secondary); font-size: 11px; }
.ta-disclaimer {
  margin: 9px 0 0; padding-top: 7px;
  border-top: 1px solid var(--dsw-alias-border-l1);
  color: var(--dsw-alias-label-secondary);
  font-size: 10px; line-height: 1.45;
}
.ta-fallback {
  margin: 0; white-space: pre-wrap; word-break: break-word;
  font: inherit; color: var(--dsw-alias-label-primary);
}
.ta-window {
  position: fixed;
  right: 18px;
  bottom: 172px;
  z-index: 60;
  width: 332px;
  max-height: min(70vh, 560px);
  overflow-y: auto;
  pointer-events: auto;
  border: 1px solid var(--dsw-alias-border-l2);
  border-radius: 12px;
  background: var(--dsw-alias-bg-overlay);
  color: var(--dsw-alias-label-primary);
  padding: 12px;
  font-size: 12px;
  line-height: 1.5;
  font-family: inherit;
}
.ta-window-head { display: flex; align-items: center; gap: 8px; flex-wrap: wrap; }
.ta-window-grip {
  flex: none;
  color: var(--dsw-alias-label-secondary);
  font-size: 13px;
  line-height: 1;
  padding: 2px 1px;
  cursor: grab;
  touch-action: none;
  user-select: none;
}
.ta-window-grip:active { cursor: grabbing; }
.ta-window-grip-icon { display: block; }
.ta-window.is-off { opacity: 0.78; }
.ta-pill.is-off { opacity: 0.72; }
.ta-window-toggle-row {
  display: flex; align-items: center; justify-content: space-between;
  gap: 8px;
}
.ta-window-toggle-label { color: var(--dsw-alias-label-secondary); font-size: 10px; }
.ta-window-mode-row {
  display: flex; align-items: center; justify-content: space-between;
  gap: 8px; margin-top: 6px;
}
.ta-window-mode-label { color: var(--dsw-alias-label-secondary); font-size: 10px; }
.ta-mode-switch {
  display: inline-flex; align-items: center; gap: 1px;
  padding: 1px; border: 1px solid var(--dsw-alias-border-l1);
  border-radius: 999px; background: var(--dsw-alias-bg-layer-2);
}
.ta-mode-btn {
  border: 0; border-radius: 999px; background: transparent;
  color: var(--dsw-alias-label-secondary);
  font: inherit; font-size: 10px; line-height: 1.4;
  padding: 2px 7px; cursor: pointer;
}
.ta-mode-btn.is-active {
  background: var(--dsw-alias-brand-primary);
  color: var(--dsw-alias-label-on-brand, #fff);
}
.ta-mode-btn:disabled { opacity: 0.45; cursor: default; }
.ta-mode-btn:focus-visible { outline: 2px solid var(--dsw-alias-brand-primary); outline-offset: 1px; }
.ta-window-mode-hint { margin: 4px 0 0; color: var(--dsw-alias-label-secondary); font-size: 10px; line-height: 1.45; }
.ta-window-mode-note { margin: -2px 0 7px; color: var(--dsw-alias-label-secondary); opacity: 0.8; font-size: 10px; line-height: 1.45; }
.ta-window-off-note { margin: 4px 0 0; color: var(--dsw-alias-label-secondary); font-size: 10px; }
.ta-switch {
  position: relative;
  width: 30px; height: 16px;
  border: 1px solid var(--dsw-alias-border-l1);
  border-radius: 999px;
  background: var(--dsw-alias-bg-layer-2);
  padding: 0; cursor: pointer;
  flex: none;
}
.ta-switch.is-on {
  background: var(--dsw-alias-brand-primary);
  border-color: var(--dsw-alias-brand-primary);
}
.ta-switch-knob {
  position: absolute; top: 2px; left: 2px;
  width: 10px; height: 10px;
  border-radius: 50%;
  background: var(--dsw-alias-bg-base);
  transition: left 0.15s ease;
}
.ta-switch.is-on .ta-switch-knob { left: 16px; }
.ta-switch:focus-visible { outline: 2px solid var(--dsw-alias-brand-primary); outline-offset: 1px; }
@media (prefers-reduced-motion: reduce) {
  .ta-switch-knob { transition: none; }
}
.ta-window-title { font-size: 12px; font-weight: 600; }
.ta-window-turn { color: var(--dsw-alias-label-secondary); font-size: 10px; }
.ta-window-collapse {
  margin-inline-start: auto;
  border: 0; background: transparent;
  color: var(--dsw-alias-label-secondary);
  font: inherit; font-size: 10px;
  padding: 2px 5px; border-radius: 4px; cursor: pointer;
}
.ta-window-collapse:hover {
  color: var(--dsw-alias-label-primary);
  background: var(--dsw-alias-bg-layer-2);
}
.ta-window-collapse:focus-visible { outline: 2px solid var(--dsw-alias-brand-primary); outline-offset: 1px; }
.ta-window-badge {
  display: flex; align-items: center; gap: 5px;
  margin-top: 8px; font-size: 13px; font-weight: 600;
}
.ta-window-confidence {
  margin-inline-start: auto;
  color: var(--dsw-alias-label-secondary);
  font-size: 10px; font-weight: 500;
}
.ta-window-observed { margin: 4px 0 0; color: var(--dsw-alias-label-secondary); font-size: 10px; }
.ta-window-trend { margin: 2px 0 0; color: var(--dsw-alias-label-secondary); font-size: 10px; }
.ta-window-section {
  margin-top: 10px; padding-top: 9px;
  border-top: 1px solid var(--dsw-alias-border-l1);
}
.ta-window-label {
  display: flex; justify-content: space-between;
  color: var(--dsw-alias-label-secondary);
  font-size: 10px; margin-bottom: 5px;
}
.ta-dim-row {
  display: grid;
  grid-template-columns: 64px minmax(0, 1fr) 40px;
  align-items: center;
  gap: 7px;
}
.ta-dim-row + .ta-dim-row { margin-top: 5px; }
.ta-dim-label { color: var(--dsw-alias-label-secondary); font-size: 10px; }
.ta-dim-track {
  position: relative; height: 5px;
  border-radius: 999px;
  background: var(--dsw-alias-bg-layer-2);
  overflow: hidden;
}
.ta-dim-fill {
  position: absolute; inset: 0 auto 0 0;
  border-radius: 999px;
  background: var(--dsw-alias-brand-primary);
}
.ta-dim-fill-certainty { background: var(--dsw-alias-brand-primary); }
.ta-dim-fill-arousal { background: var(--dsw-alias-state-warn-primary); }
.ta-dim-fill-strain { background: var(--dsw-alias-state-error-primary); }
.ta-dim-fill-curiosity { background: var(--dsw-alias-brand-primary); }
.ta-dim-track-bipolar {
  overflow: visible;
  background: linear-gradient(
    90deg,
    var(--dsw-alias-state-error-primary),
    var(--dsw-alias-state-warn-primary) 50%,
    var(--dsw-alias-state-success-primary)
  );
}
.ta-dim-marker {
  position: absolute; top: 50%; width: 10px; height: 10px;
  border-radius: 50%;
  background: var(--dsw-alias-bg-base);
  border: 2px solid var(--dsw-alias-label-primary);
  transform: translate(-50%, -50%);
}
.ta-dim-value {
  color: var(--dsw-alias-label-secondary);
  font-size: 10px; text-align: end;
  font-variant-numeric: tabular-nums;
}
.ta-window-mix-row {
  display: grid;
  grid-template-columns: 82px minmax(0, 1fr) 32px;
  align-items: center;
  gap: 7px;
}
.ta-window-mix-row + .ta-window-mix-row { margin-top: 4px; }
.ta-window-mix-name {
  color: var(--dsw-alias-label-secondary);
  font-size: 10px;
  white-space: nowrap; overflow: hidden; text-overflow: ellipsis;
}
.ta-window-mix-track { height: 4px; }
.ta-guide { margin-top: 9px; }
.ta-guide-label { color: var(--dsw-alias-label-secondary); font-size: 10px; }
.ta-guide-value { margin-top: 1px; font-size: 12px; font-weight: 600; }
.ta-guide-desc { margin: 2px 0 0; color: var(--dsw-alias-label-secondary); font-size: 10px; line-height: 1.45; }
.ta-window-facts { margin: 6px 0 0; color: var(--dsw-alias-label-secondary); font-size: 10px; }
.ta-window-disclaimer {
  margin: 9px 0 0; padding-top: 7px;
  border-top: 1px solid var(--dsw-alias-border-l1);
  color: var(--dsw-alias-label-secondary);
  font-size: 9px; line-height: 1.45;
}
.ta-pill {
  position: fixed; right: 18px; bottom: 172px; z-index: 60;
  pointer-events: auto;
  display: inline-flex; align-items: center; gap: 5px;
  border: 1px solid var(--dsw-alias-border-l2);
  border-radius: 999px;
  background: var(--dsw-alias-bg-overlay);
  color: var(--dsw-alias-label-primary);
  padding: 6px 10px; font: inherit; font-size: 11px; cursor: pointer;
}
.ta-pill:hover { background: var(--dsw-alias-bg-layer-2); }
.ta-pill-turn { color: var(--dsw-alias-label-secondary); }
@media (max-width: 520px) {
  .ta-window { left: 12px; right: 12px; width: auto; bottom: 152px; max-height: 60vh; }
  .ta-pill { right: 12px; bottom: 152px; }
}
@keyframes ta-pulse {
  0%, 100% { opacity: 0.35; }
  50% { opacity: 1; }
}
@media (max-width: 460px) {
  .ta-meters { grid-template-columns: repeat(2, minmax(0, 1fr)); }
}
@media (prefers-reduced-motion: reduce) {
  .ta-live { animation: none; opacity: 0.8; }
}
`;

    /* ---------------------------------------------------------------------
     * Rendering
     * ------------------------------------------------------------------- */

    function cap(value) {
      return value.charAt(0).toUpperCase() + value.slice(1);
    }

    function emotionText(t, label) {
      return t('emotion' + cap(label));
    }

    function summaryText(t, label) {
      return t('summary' + cap(label));
    }

    class CardBoundary extends React.Component {
      constructor(props) {
        super(props);
        this.state = { failed: false };
      }

      static getDerivedStateFromError() {
        return { failed: true };
      }

      componentDidCatch(error) {
        try {
          console.warn('[thinking-affect] analysis failed to render', error);
        } catch (_ignored) {
          // Logging must never break the reasoning body.
        }
      }

      render() {
        return this.state.failed ? (this.props.fallback || null) : this.props.children;
      }
    }

    function Meter(props) {
      const { label, value, tone } = props;
      const percent = Math.round(value * 100);
      return h('div', { className: 'ta-meter' },
        h('div', { className: 'ta-meter-label' },
          h('span', null, label),
          h('span', { className: 'ta-meter-value' }, percent + '%'),
        ),
        h('div', {
          className: 'ta-track',
          role: 'meter',
          'aria-label': label,
          'aria-valuemin': 0,
          'aria-valuemax': 100,
          'aria-valuenow': percent,
        }, h('span', {
          className: 'ta-fill ta-fill-' + tone,
          style: { width: percent + '%' },
        })),
      );
    }

    function AffectCard(props) {
      const { text, running, t } = props;
      const [expanded, setExpanded] = React.useState(true);
      const [liveText, setLiveText] = React.useState(text);
      const lastUpdate = React.useRef(0);

      React.useEffect(() => {
        if (!running) return undefined;
        const now = Date.now();
        const delay = Math.max(0, 350 - (now - lastUpdate.current));
        const timer = setTimeout(() => {
          lastUpdate.current = Date.now();
          setLiveText(text);
        }, delay);
        return () => clearTimeout(timer);
      }, [text, running]);

      const source = running ? liveText : text;
      const report = React.useMemo(() => analyzeAffect(source), [source]);

      const weak = report.weak
        || report.label === 'empty'
        || report.label === 'unknown'
        || report.label === 'obscure';
      const accent = ACCENTS[report.label] || ACCENTS.calm;
      const emotion = emotionText(t, report.label);
      const summary = summaryText(t, report.label);
      const meta = t('factsLine', { chars: report.chars, cues: report.cueCount });
      const trend = t('trend' + cap(report.trend));
      const confidence = t('confidence' + cap(report.confidence));
      const mix = report.emotions
        .filter((item) => item.key !== report.label)
        .slice(0, 3);
      const excludedNote = report.otherCueCount > 0
        ? t('excluded', { count: report.otherCueCount })
        : null;

      const meterRows = [
        h(Meter, { key: 'certainty', label: t('certainty'), value: report.certainty, tone: 'certainty' }),
        h(Meter, { key: 'arousal', label: t('arousal'), value: report.arousal, tone: 'arousal' }),
        h(Meter, { key: 'strain', label: t('strain'), value: report.strain, tone: 'strain' }),
      ];

      const cueColor = (key) => {
        if (key === 'negative' || key === 'strain' || key === 'angry' || key === 'disgusted') {
          return 'var(--dsw-alias-state-error-primary)';
        }
        if (key === 'positive' || key === 'happy' || key === 'relieved') {
          return 'var(--dsw-alias-state-success-primary)';
        }
        if (key === 'uncertainty' || key === 'certainty' || key === 'regretful') {
          return 'var(--dsw-alias-state-warn-primary)';
        }
        if (key === 'sad' || key === 'resigned') {
          return 'var(--dsw-alias-state-idle-primary)';
        }
        return 'var(--dsw-alias-brand-primary)';
      };

      return h('section', {
        className: 'ta-card',
        'data-affect': report.label,
        'aria-label': t('title'),
        style: { '--ta-accent': accent },
      },
        h('div', { className: 'ta-head' },
          h('svg', {
            className: 'ta-aura',
            viewBox: '0 0 16 16',
            width: 14,
            height: 14,
            'aria-hidden': true,
          },
            h('path', {
              d: 'M1.8 9.2c2-4.2 3.7-4.2 5.8 0s3.8 4.2 5.8 0',
              fill: 'none',
              stroke: 'currentColor',
              strokeWidth: 1.4,
              strokeLinecap: 'round',
            }),
            h('circle', { cx: 8, cy: 3.9, r: 1.5, fill: 'currentColor' }),
          ),
          h('span', { className: 'ta-title' }, t('title')),
          h('span', { className: 'ta-badge' },
            h('span', { className: 'ta-badge-kind' }, t('inference')),
            h('span', { className: 'ta-emoji', 'aria-hidden': true }, EMOJI[report.label] || EMOJI.calm),
            h('span', null, emotion),
          ),
          running ? h('span', { className: 'ta-live', role: 'status', 'aria-label': t('live') }) : null,
          h('button', {
            className: 'ta-toggle',
            type: 'button',
            'aria-expanded': expanded,
            onClick: () => setExpanded((value) => !value),
          }, expanded ? t('collapse') : t('expand')),
        ),
        h('p', { className: 'ta-summary' },
          h('span', { className: 'ta-summary-kind' }, t('inference') + ': '),
          summary,
        ),
        h('p', { className: 'ta-facts' }, meta),
        excludedNote !== null ? h('p', { className: 'ta-facts' }, excludedNote) : null,
        h('p', { className: 'ta-facts ta-objective-note' }, t('objectiveNote')),
        expanded && !weak ? h('div', { className: 'ta-section' },
          h('div', { className: 'ta-section-label' },
            h('span', null, t('subjectiveInference')),
            h('span', { className: 'ta-trend' }, t('confidence') + ': ' + confidence),
          ),
          h('div', { className: 'ta-row' },
            h('span', { className: 'ta-row-label' }, t('valenceLow')),
            h('div', {
              className: 'ta-valence',
              role: 'meter',
              'aria-label': t('valence'),
              'aria-valuemin': -1,
              'aria-valuemax': 1,
              'aria-valuenow': Number(report.valence.toFixed(2)),
            }, h('span', {
              className: 'ta-marker',
              style: { left: ((report.valence + 1) * 50) + '%' },
            })),
            h('span', { className: 'ta-row-label' }, t('valenceHigh')),
          ),
          h('div', { className: 'ta-meters' }, meterRows),
        ) : null,
        expanded && !weak && report.segments.length >= 3 ? h('div', { className: 'ta-section' },
          h('div', { className: 'ta-section-label' },
            h('span', null, t('sparkline')),
            h('span', { className: 'ta-trend' }, trend),
          ),
          h('div', {
            className: 'ta-sparkline',
            role: 'img',
            'aria-label': t('sparkline') + ': ' + trend,
          }, report.segments.map((value, index) => {
            const magnitude = Math.abs(value);
            const color = value > 0.04
              ? 'var(--dsw-alias-state-success-primary)'
              : value < -0.04
                ? 'var(--dsw-alias-state-error-primary)'
                : 'var(--dsw-alias-state-idle-primary)';
            return h('span', {
              key: index,
              className: 'ta-bar',
              'aria-hidden': true,
              style: {
                height: Math.max(2, Math.round(magnitude * 20)) + 'px',
                backgroundColor: color,
                opacity: 0.4 + Math.min(0.6, magnitude),
              },
            });
          })),
        ) : null,
        expanded && !weak && mix.length > 0 ? h('div', { className: 'ta-section' },
          h('div', { className: 'ta-section-label' },
            h('span', null, t('mix')),
            h('span', null, t('strength')),
          ),
          h('div', { className: 'ta-mix' }, mix.map((item) => {
            const percent = Math.round(item.value * 100);
            return h('div', { className: 'ta-mix-row', key: item.key },
              h('span', { className: 'ta-mix-name' },
                h('span', { 'aria-hidden': true }, (EMOJI[item.key] || '') + ' '),
                t('emotion' + cap(item.key)),
              ),
              h('div', { className: 'ta-track ta-mix-track' },
                h('span', {
                  className: 'ta-fill',
                  style: {
                    width: percent + '%',
                    backgroundColor: ACCENTS[item.key] || ACCENTS.calm,
                  },
                }),
              ),
              h('span', { className: 'ta-mix-value' }, percent + '%'),
            );
          })),
        ) : null,
        expanded && !weak ? h('div', { className: 'ta-section' },
          h('div', { className: 'ta-section-label' },
            h('span', null, t('cues')),
          ),
          h('div', { className: 'ta-cues' },
            report.topCues.length === 0
              ? h('span', { className: 'ta-none' }, t('noCues'))
              : report.topCues.map((hit) => h('span', {
                key: hit.key + ':' + hit.text,
                className: 'ta-chip',
              },
                h('span', {
                  className: 'ta-chip-dot',
                  style: { backgroundColor: cueColor(hit.key) },
                }),
                h('span', null, hit.count > 1 ? hit.text + ' ×' + hit.count : hit.text),
              )),
          ),
        ) : null,
        expanded ? h('p', { className: 'ta-disclaimer' }, t('disclaimer')) : null,
      );
    }

    function ThinkingAffectBody(props) {
      const { text, running, renderFactorySlot, t } = props;
      const translate = React.useMemo(
        () => (typeof t === 'function' ? t : (key) => key),
        [t],
      );

      const labels = React.useMemo(() => ({
        code: {
          copyLabel: translate('copy'),
          copiedLabel: translate('copied'),
          toolbarLabels: {
            codeLabel: translate('codeTitle'),
            wrapLabel: translate('wrap'),
            unwrapLabel: translate('unwrap'),
          },
        },
        footnotes: translate('footnotes'),
      }), [translate]);

      let content;
      if (typeof renderFactorySlot === 'function') {
        try {
          content = renderFactorySlot('conversation.chat.reasoning.content', {
            text,
            running,
            labels,
          });
        } catch (_error) {
          content = h('pre', { className: 'ta-fallback' }, text);
        }
      } else {
        content = h('pre', { className: 'ta-fallback' }, text);
      }

      return h('div', { className: 'ta-root', 'data-thinking-affect': 'true' },
        h(CardBoundary, { fallback: null },
          h(AffectCard, { text, running, t: translate }),
        ),
        content,
      );
    }

    function WindowDim(props) {
      const { label, value, bipolar, tone } = props;
      const numeric = Number(value) || 0;
      const normalized = bipolar ? (numeric + 1) / 2 : numeric;
      const percent = Math.round(clamp01(normalized) * 100);
      return h('div', { className: 'ta-dim-row' },
        h('span', { className: 'ta-dim-label' }, label),
        h('div', {
          className: 'ta-dim-track' + (bipolar ? ' ta-dim-track-bipolar' : ''),
          role: 'meter',
          'aria-label': label,
          'aria-valuemin': bipolar ? -1 : 0,
          'aria-valuemax': 1,
          'aria-valuenow': Number(numeric.toFixed(2)),
        }, bipolar
          ? h('span', { className: 'ta-dim-marker', style: { left: percent + '%' } })
          : h('span', {
            className: 'ta-dim-fill ta-dim-fill-' + tone,
            style: { width: percent + '%' },
          })),
        h('span', { className: 'ta-dim-value' },
          bipolar
            ? ((numeric > 0 ? '+' : '') + Math.round(numeric * 100))
            : percent + '%'),
      );
    }

    function BuoyGrip() {
      return h('svg', {
        className: 'ta-window-grip-icon',
        viewBox: '0 0 16 20',
        width: 14,
        height: 18,
        'aria-hidden': true,
        focusable: 'false',
      },
        h('path', {
          d: 'M8 1.5v3M5.4 4.1 8 1.5l2.6 2.6',
          fill: 'none',
          stroke: 'currentColor',
          strokeWidth: 1.3,
          strokeLinecap: 'round',
          strokeLinejoin: 'round',
        }),
        h('rect', {
          x: 4.6,
          y: 6.1,
          width: 6.8,
          height: 7.8,
          rx: 3.4,
          fill: 'none',
          stroke: 'currentColor',
          strokeWidth: 1.3,
        }),
        h('path', {
          d: 'M3.3 10h9.4',
          fill: 'none',
          stroke: 'currentColor',
          strokeWidth: 1,
          strokeLinecap: 'round',
          opacity: 0.7,
        }),
        h('path', {
          d: 'M8 18.5v-3M5.4 15.9 8 18.5l2.6-2.6',
          fill: 'none',
          stroke: 'currentColor',
          strokeWidth: 1.3,
          strokeLinecap: 'round',
          strokeLinejoin: 'round',
        }),
      );
    }

    function AffectWindowContent(props) {
      const { t } = props;
      const translate = React.useMemo(
        () => (typeof t === 'function' ? t : (key) => key),
        [t],
      );
      const snapshot = React.useSyncExternalStore(
        WINDOW_STORE.subscribe,
        WINDOW_STORE.getSnapshot,
        WINDOW_STORE.getSnapshot,
      );
      const [collapsed, setCollapsed] = React.useState(false);
      const [windowBottom, setWindowBottom] = React.useState(WINDOW_BOTTOM);
      const dragRef = React.useRef(null);

      if (snapshot === null || snapshot === undefined) return null;

      const state = snapshot.state;
      const report = snapshot.report || { label: state.dominant, confidence: 'low' };
      const dominant = state.dominant;
      const emotion = translate('emotion' + cap(dominant));
      const stateConfidence = translate('confidence' + cap(state.reliability || 'low'));
      const turnConfidence = translate('confidence' + cap(report.confidence || 'low'));
      const trend = translate('stateTrend' + cap(snapshot.trend || 'stable'));
      const turnText = translate('turnLabel', { turn: snapshot.turn });
      const dims = state.dims || {
        valence: 0, certainty: 0.5, arousal: 0, strain: 0, curiosity: 0,
      };
      const mix = Object.entries(state.dist || {})
        .map(([key, value]) => ({ key, value }))
        .filter((item) => item.key !== dominant && item.value >= 0.06)
        .sort((left, right) => right.value - left.value)
        .slice(0, 3);
      const enabled = snapshot.enabled === true;
      const mode = snapshot.mode === 'companion' ? 'companion' : 'assist';
      const globalOff = snapshot.globalOff === true;
      const bottomStyle = windowBottom === null ? undefined : { bottom: windowBottom + 'px' };

      const onDragStart = (event) => {
        if (event.pointerType === 'mouse' && event.button !== 0) return;
        const viewport = typeof window === 'undefined' ? 800 : window.innerHeight;
        const element = typeof event.currentTarget.closest === 'function'
          ? event.currentTarget.closest('.ta-window')
          : null;
        const rect = element === null ? null : element.getBoundingClientRect();
        const startBottom = windowBottom === null && rect !== null
          ? Math.max(8, viewport - rect.bottom)
          : (windowBottom === null
            ? Math.min(172, Math.max(8, viewport - 160))
            : windowBottom);
        dragRef.current = {
          pointerId: event.pointerId,
          startY: event.clientY,
          startBottom,
        };
        event.currentTarget.setPointerCapture?.(event.pointerId);
        event.preventDefault();
      };

      const onDragMove = (event) => {
        const drag = dragRef.current;
        if (drag === null || drag.pointerId !== event.pointerId) return;
        const viewport = typeof window === 'undefined' ? 800 : window.innerHeight;
        const element = typeof event.currentTarget.closest === 'function'
          ? event.currentTarget.closest('.ta-window')
          : null;
        const height = element === null ? 400 : element.getBoundingClientRect().height;
        const maxBottom = Math.max(8, viewport - height - 8);
        const delta = drag.startY - event.clientY;
        const nextBottom = Math.min(maxBottom, Math.max(8, drag.startBottom + delta));
        WINDOW_BOTTOM = nextBottom;
        setWindowBottom(nextBottom);
      };

      const onDragEnd = (event) => {
        const drag = dragRef.current;
        if (drag === null || drag.pointerId !== event.pointerId) return;
        dragRef.current = null;
        event.currentTarget.releasePointerCapture?.(event.pointerId);
      };

      if (collapsed) {
        return h('button', {
          className: 'ta-pill' + (enabled ? '' : ' is-off'),
          type: 'button',
          style: bottomStyle,
          'aria-expanded': false,
          'aria-label': translate('expandWindow'),
          onClick: () => setCollapsed(false),
        },
          h('span', { 'aria-hidden': true }, (EMOJI[dominant] || '') + ' '),
          h('span', null, emotion),
          h('span', { className: 'ta-pill-turn' }, turnText),
        );
      }

      return h('section', {
        className: 'ta-window' + (enabled ? '' : ' is-off'),
        role: 'region',
        'aria-label': translate('windowTitle'),
        'data-affect-window': 'true',
        style: bottomStyle,
      },
        h('div', { className: 'ta-window-head' },
          h('span', {
            className: 'ta-window-grip',
            role: 'separator',
            'aria-label': translate('dragWindow'),
            onPointerDown: onDragStart,
            onPointerMove: onDragMove,
            onPointerUp: onDragEnd,
            onPointerCancel: onDragEnd,
          }, h(BuoyGrip)),
          h('span', { className: 'ta-window-title' }, translate('windowTitle')),
          h('span', { className: 'ta-window-turn' }, turnText),
          h('button', {
            className: 'ta-window-collapse',
            type: 'button',
            'aria-expanded': true,
            onClick: () => setCollapsed(true),
          }, translate('collapseWindow')),
        ),
        h('div', { className: 'ta-window-badge' },
          h('span', { className: 'ta-badge-kind' }, translate('stateCombined')),
          h('span', { 'aria-hidden': true }, EMOJI[dominant] || ''),
          h('span', null, emotion),
          h('span', { className: 'ta-window-confidence' },
            translate('confidence') + ' ' + stateConfidence),
        ),
        snapshot.noReasoning
          ? h('p', { className: 'ta-window-observed' }, translate('noReasoning'))
          : h('p', { className: 'ta-window-observed' },
            translate('stateObserved') + ': '
              + translate('emotion' + cap(report.label || dominant))
              + ' · ' + translate('confidence') + ' ' + turnConfidence,
          ),
        h('p', { className: 'ta-window-trend' },
          translate('stateTrendLabel') + ': ' + trend
            + ' · ' + translate('turnsLabel', { count: state.turns }),
        ),
        h('div', { className: 'ta-window-section' },
          h('div', { className: 'ta-window-toggle-row' },
            h('span', { className: 'ta-window-toggle-label' }, translate('enableForChat')),
            h('button', {
              className: 'ta-switch' + (enabled ? ' is-on' : ''),
              type: 'button',
              role: 'switch',
              'aria-checked': enabled,
              'aria-label': translate('enableForChat'),
              onClick: () => setHostEnabled(snapshot.sessionId, !enabled),
            }, h('span', { className: 'ta-switch-knob' })),
          ),
          enabled ? h('div', { className: 'ta-window-mode-row' },
            h('span', { className: 'ta-window-mode-label' }, translate('modeLabel')),
            h('div', {
              className: 'ta-mode-switch',
              role: 'group',
              'aria-label': translate('modeLabel'),
            },
              ...[['assist', 'modeAssist'], ['companion', 'modeCompanion']].map(([value, label]) =>
                h('button', {
                  key: value,
                  className: 'ta-mode-btn' + (mode === value ? ' is-active' : ''),
                  type: 'button',
                  'aria-pressed': mode === value,
                  disabled: globalOff,
                  title: translate(value === 'assist' ? 'modeAssistHint' : 'modeCompanionHint'),
                  onClick: () => setHostMode(snapshot.sessionId, value),
                }, translate(label))),
            ),
          ) : null,
          enabled ? h('p', { className: 'ta-window-mode-hint' },
            translate(mode === 'assist' ? 'modeAssistHint' : 'modeCompanionHint'),
          ) : null,
          enabled ? null : h('p', { className: 'ta-window-off-note' }, translate('defaultOffNote')),
          globalOff ? h('p', { className: 'ta-window-off-note' }, translate('modeGlobalOff')) : null,
        ),
        state.turns > 0 ? h('div', { className: 'ta-window-section' },
          h('div', { className: 'ta-window-label' }, translate('dimensions')),
          enabled && mode === 'assist'
            ? h('p', { className: 'ta-window-mode-note' }, translate('assistStatsNote'))
            : null,
          h(WindowDim, {
            label: translate('valence'),
            value: dims.valence,
            bipolar: true,
            tone: 'valence',
          }),
          h(WindowDim, {
            label: translate('certainty'),
            value: dims.certainty,
            tone: 'certainty',
          }),
          h(WindowDim, {
            label: translate('arousal'),
            value: dims.arousal,
            tone: 'arousal',
          }),
          h(WindowDim, {
            label: translate('strain'),
            value: dims.strain,
            tone: 'strain',
          }),
          h(WindowDim, {
            label: translate('curiosity'),
            value: dims.curiosity,
            tone: 'curiosity',
          }),
        ) : h('p', { className: 'ta-window-mode-note' }, translate('stateObserving')),
        mix.length > 0 ? h('div', { className: 'ta-window-section' },
          h('div', { className: 'ta-window-label' }, translate('stateMix')),
          mix.map((item) => {
            const percent = Math.round(item.value * 100);
            return h('div', { className: 'ta-window-mix-row', key: item.key },
              h('span', { className: 'ta-window-mix-name' },
                h('span', { 'aria-hidden': true }, (EMOJI[item.key] || '') + ' '),
                translate('emotion' + cap(item.key)),
              ),
              h('div', { className: 'ta-dim-track ta-window-mix-track' },
                h('span', {
                  className: 'ta-dim-fill',
                  style: {
                    width: percent + '%',
                    backgroundColor: ACCENTS[item.key] || ACCENTS.calm,
                  },
                }),
              ),
              h('span', { className: 'ta-dim-value' }, percent + '%'),
            );
          }),
        ) : null,
        h('p', { className: 'ta-window-disclaimer' }, translate('windowDisclaimer')),
      );
    }
    function AffectWindow(props) {
      return h(CardBoundary, { fallback: null }, h(AffectWindowContent, props));
    }

    function AffectSource(props) {
      if (typeof props.useChat !== 'function') return null;
      return h(AffectSourceInner, props);
    }

    function latestTurnOf(turnEnds) {
      let latest = -1;
      if (turnEnds instanceof Map) {
        for (const turn of turnEnds.keys()) {
          const numeric = Number(turn);
          if (Number.isFinite(numeric) && numeric > latest) latest = numeric;
        }
      }
      return latest;
    }

    async function postToggle(sessionId, patch) {
      const response = await fetch('/plugins/thinking-affect/toggle', {
        method: 'POST',
        headers: { 'content-type': 'application/json' },
        body: JSON.stringify({ sessionId, ...patch }),
      });
      if (!response.ok) throw new Error('toggle-request-failed');
      return response.json();
    }

    async function setHostEnabled(sessionId, enabled) {
      const current = WINDOW_STORE.getSnapshot();
      const previous = current !== null && current.sessionId === sessionId
        ? current.enabled === true
        : false;
      if (current !== null && current.sessionId === sessionId) {
        WINDOW_STORE.publish({ ...current, enabled });
      }
      try {
        const data = await postToggle(sessionId, { enabled });
        const latest = WINDOW_STORE.getSnapshot();
        if (latest !== null && latest.sessionId === sessionId) {
          WINDOW_STORE.publish({
            ...latest,
            enabled: typeof data.enabled === 'boolean' ? data.enabled : enabled,
            mode: data.mode === 'companion' ? 'companion' : (data.mode || latest.mode || 'assist'),
          });
        }
      } catch (_error) {
        const latest = WINDOW_STORE.getSnapshot();
        if (latest !== null && latest.sessionId === sessionId) {
          WINDOW_STORE.publish({ ...latest, enabled: previous });
        }
      }
    }

    async function setHostMode(sessionId, mode) {
      const current = WINDOW_STORE.getSnapshot();
      const previous = current !== null && current.sessionId === sessionId && current.mode === 'companion'
        ? 'companion'
        : 'assist';
      if (current !== null && current.sessionId === sessionId) {
        WINDOW_STORE.publish({ ...current, mode });
      }
      try {
        const data = await postToggle(sessionId, { mode });
        const latest = WINDOW_STORE.getSnapshot();
        if (latest !== null && latest.sessionId === sessionId) {
          WINDOW_STORE.publish({
            ...latest,
            mode: data.mode === 'companion' ? 'companion' : (data.mode || mode),
            enabled: typeof data.enabled === 'boolean' ? data.enabled : latest.enabled,
          });
        }
      } catch (_error) {
        const latest = WINDOW_STORE.getSnapshot();
        if (latest !== null && latest.sessionId === sessionId) {
          WINDOW_STORE.publish({ ...latest, mode: previous });
        }
      }
    }

    function AffectSourceInner(props) {
      const { useChat, sessionId } = props;
      const turnEnds = useChat(SELECT_TURN_ENDS);
      const latestTurn = React.useMemo(() => latestTurnOf(turnEnds), [turnEnds]);

      React.useEffect(() => {
        if (typeof sessionId !== 'string') {
          WINDOW_STORE.publish(null);
          return undefined;
        }
        let cancelled = false;
        let attempts = 0;
        const load = async () => {
          if (cancelled) return;
          if (typeof fetch !== 'function') {
            WINDOW_STORE.publish(null);
            return;
          }
          try {
            const response = await fetch(
              '/plugins/thinking-affect/state?sessionId=' + encodeURIComponent(sessionId),
              { headers: { accept: 'application/json' } },
            );
            if (!response.ok) throw new Error('state-request-failed');
            const data = await response.json();
            if (cancelled) return;
            if ((data === null || data.state === null || data.state === undefined)
              && latestTurn >= 0 && attempts < 6) {
              attempts += 1;
              setTimeout(load, 300);
              return;
            }
            if (data === null || data.state === null || data.state === undefined) {
              WINDOW_STORE.publish(null);
              return;
            }
            if (Number(data.turn) < latestTurn && attempts < 6) {
              attempts += 1;
              setTimeout(load, 300);
              return;
            }
            WINDOW_STORE.publish({ ...data, sessionId });
          } catch (_error) {
            if (!cancelled) WINDOW_STORE.publish(null);
          }
        };
        load();
        return () => {
          cancelled = true;
        };
      }, [sessionId, latestTurn]);

      React.useEffect(() => () => {
        WINDOW_STORE.publish(null);
      }, []);

      return null;
    }



    function apply(ctx) {
      ctx.effect(() => {
        // Earlier versions cached analyzer state in localStorage. The Host owns
        // state now, so remove that legacy residue and keep uninstall clean.
        try {
          if (typeof localStorage !== 'undefined') {
            for (let index = localStorage.length - 1; index >= 0; index -= 1) {
              const key = localStorage.key(index);
              if (typeof key === 'string' && key.startsWith('thinking-affect:v1:')) {
                localStorage.removeItem(key);
              }
            }
          }
        } catch (_error) {
          // Storage cleanup is best-effort.
        }
      }, 'thinking-affect: clear legacy storage');

      ctx.effect(() => {
        const existing = document.querySelector('style[data-plugin="dsh-fakemood"]');
        if (existing !== null) existing.remove();
        const style = document.createElement('style');
        style.dataset.plugin = 'dsh-fakemood';
        style.textContent = CSS;
        document.head.appendChild(style);
        return () => style.remove();
      }, 'thinking-affect: styles');

      ctx.effect(
        () => ctx.locale.register(NS, { en, zh }),
        'thinking-affect: locale',
      );

      ctx.slots.inject('conversation.composer.dock', () => ctx.slots.register({
        name: 'conversation.composer.dock',
        id: 'thinking-affect-source',
        order: 90,
      }, AffectSource));

      ctx.slots.inject('shell.overlay', () => ctx.slots.register({
        name: 'shell.overlay',
        id: 'thinking-affect-window',
        order: 20,
        locale: NS,
      }, AffectWindow));
    }

    /* Exposed for the local analyzer and state test harness; the loader ignores it. */
    thinkingAffectFactory.analyzeAffect = analyzeAffect;
    thinkingAffectFactory.CUE_GROUPS = CUE_GROUPS;
    thinkingAffectFactory.updateAffectState = updateAffectState;
    thinkingAffectFactory.deriveGuidance = deriveGuidance;
    thinkingAffectFactory.findTurnReasoning = findTurnReasoning;
    thinkingAffectFactory.stateTrend = stateTrend;
    thinkingAffectFactory.buildWindowSnapshot = buildWindowSnapshot;
    thinkingAffectFactory.STATE_LABELS = STATE_LABELS;

    return { inject: ['slots', 'locale'], apply };
  },
});
