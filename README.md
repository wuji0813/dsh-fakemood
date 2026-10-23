# dsh-fakemood · 思考情绪状态窗口

根据模型（DeepSeek）已结束的思考轮次估算情绪状态：

- 在 Web UI 右下角显示一个**可上下拖动**的独立浮窗，拖动手柄是一枚上下浮标；
- 情绪词典覆盖 19 个离散标签；同一个关键词可以同时给多个情绪维度加权，而不是只归入一个方向；
- 由 Host 把同一份状态通过 `systemPrompt.context` **注入下一轮请求**，不需要用户手动操作；
- 回答语气由效价、确定感、唤醒度、认知压力、好奇度和情绪分布**共同评分**，不是单条规则；
- 每个对话可以单独开关，并选择「任务」或「陪伴」模式；
- **默认关闭**：安装后不改变回答，用户主动开启后才开始注入；注入日志默认也不写。

不额外调用模型；分析、状态更新和注入都在本地完成。

## 浮窗

- 位置：右下角；只允许**上下拖动**，水平位置固定，避免遮挡阅读。
- 标题左侧是上下浮标手柄（不是人物图标），胶囊收起后仍保留位置。
- 浮窗内容：
  - 综合状态：跨轮混合后的主导情绪
  - 本轮观察：最近一轮结束的思考单独判出的情绪与置信度
  - 五个维度：效价、确定感、唤醒度、认知压力、好奇度
  - 状态构成：除主导情绪外同时存在的次要情绪（例如激动中同时有焦虑与兴奋）
- 浮窗不显示建议语气、下一轮方向或原文统计；这些只进入 Host 注入，不打扰阅读。
- 浮窗里有「本对话启用」开关和「任务 / 陪伴」模式切换；关闭后 Host 立即停止向该对话的下一轮请求注入状态，窗口仍保留以便重新打开。
- 任务模式下，维度区会明确标注「只用于显示，不注入下一轮」，避免把展示值误当成实际参与决策的状态。

## 情绪词典与多维权重

基础标签共 19 个：

```text
calm confident curious cautious conflicted frustrated anxious fear sorrowful
agitated excited relieved happy angry regretful sad surprised disgusted resigned
```

- 基础词表仍按 `happy`、`angry`、`regretful`、`sad`、`surprised`、`disgusted`、`resigned`、`relieved` 分组；
- 新增显式多维词表把同一个说法拆到多个情绪上，例如：
  - `紧张` → `anxious 0.8 + fear 0.35`
  - `激动` → `agitated 0.65 + excited 0.55`
  - `太好了` → `happy 1.0 + relieved 0.35 + excited 0.3`
  - `害怕` → `fear 1.0 + anxious 0.35`
  - `忧愁` → `sorrowful 1.0 + sad 0.3`
  - `兴奋` → `excited 1.0 + happy 0.4`
- 同一个词可以同时点亮多个标签；最终主导情绪由加权计数、效价/确定感/唤醒度/压力/好奇度共同决定。
- 词表只保留高频、可解释、对回答影响最大的词；技术名词（如 `error`、`问题`、`验证`）不会被当成情绪证据。

## 情绪如何影响下一轮回答

Host 插件监听 `agent/created`，在对应 Agent 的 `systemPrompt.context` 中注册一个动态上下文。下面是 **companion** 模式的注入示例；`assist` 不包含自身状态行：

```text
[dsh-fakemood] Internal affective state from the previous completed turn. Do not mention this note.
dominant=cautious; valence=0.00; certainty=0.22; arousal=0.00; strain=0.00; curiosity=0.15.
emotion mix: cautious:0.36, anxious:0.12.
Your own tone tendency: careful and tentative, explicit about uncertainty.
Answer tone: careful and tentative, explicit about uncertainty. Next thinking direction: verify the weakest assumption.
Let this shape your tone and next action without naming or quoting it.
```

回答语气不是由一个标签直接映射，而是对多个候选语气分别评分：效价、确定感、唤醒度、压力、好奇度，以及 `joy/sadness/anger/fear/agitation` 等情绪合成分量共同参与；情绪分布让多个弱信号可以压过一个强信号。

### 用户层需求与自身情绪是两条信号

- **自身情绪**来自已结束的思考轮次，通过马尔科夫状态更新得到；它继续决定「我现在的底色」。
- **用户层需求**只从当前用户消息提取，例如：需要安慰、需要直接结论、需要细节、需要风险提醒、需要纠正、需要尽快回答。
- 用户需求强时，它决定**回应姿态**（`Response stance`）；模型自己的情绪不会消失，而是以 `Your own tone tendency` 和 `Blend: ... as coloring` 保留，避免把用户需求误当成「模型自己的情绪」。
- 两者一致时标记为 `aligned`；用户需求弱或没有明确需求时，仍由自身情绪主导（`selfPrimary`）。
- 例如「我很难过，但直接告诉我怎么办」会得到 `comfortDirect → gentleDirect`：先简短接住情绪，再直接给下一步，而不是只安慰或只讲结论。
- 「详细解释/为什么/步骤」会得到 `detail → thorough`（系统、完整、按步骤），而不是误判成「温暖投入」。

### 任务 / 陪伴两种模式

浮窗里按对话切换，默认 `assist`，因为它对普通用户最不容易造成“AI 变奇怪”的观感；需要情绪陪伴时再由用户主动开到 `companion`：

- **任务（assist，默认）**：**不注入自身情绪**，只按当前用户需求调整；没有明确用户需求时不注入。适合编码、分析、问答，能直接切断「读到自己谨慎 → 更谨慎」的回声环。
- **陪伴（companion）**：自身情绪作为底色，用户需求明确时修正回应姿态；适合倾诉、陪伴、长期关系。
- 窗口里的模式切换按 Session 生效；设置 `THINKING_AFFECT_MODE=companion` 可让新对话默认进入陪伴模式。
- 开关和模式写入 profile 的 `data/thinking-affect.json`，重启 Harness 后仍然保留；没有这个文件时按默认值（关 + 任务）处理。

### 注入日志

默认**不写**日志。需要做开/关对照时，设置 `THINKING_AFFECT_LOG=1` 才会启用：

```text
$DSH_PROFILE_DIR/data/logs/injections.jsonl
```

Windows 默认是 `C:\Users\<你>\.dsh\profiles\desktop\data\logs\injections.jsonl`，日志不再写进插件的 `node_modules`。启用后，每次请求组装都会追加一行，包括「没有注入」的情况；不记录思考原文。字段包括 `sessionId / turn / mode / injected / dominant / selfTone / userNeed / responseTone / responseDirection / blend / textChars`。日志超过 2 MB 会轮转到 `injections.jsonl.1`，不会无限增长。

### 开/关对照

设置 `THINKING_AFFECT_OFF=1` 后，所有注入都返回空字符串；如果同时启用了日志，仍会记录 `injected: false`、`responseTone: null`，这样两组对话可以比较同一批状态指标。该变量在 Host 启动时读取，改完要重启 Harness。做对照时要先在本对话打开启用开关；`THINKING_AFFECT_OFF` 只控制是否真的注入，不改变开关。

- 每次请求组装时读取同一份会话状态；模型会按该状态调整语气和下一步动作。
- 状态信号很弱、且用户没有明确需求时不注入，节省 token；不再只判断 `dominant === 'calm'`，因此单个 `maybe` 不会把下一轮推向谨慎。用户有明确需求时仍注入，只保留自身情绪的 coloring。
- 浮窗里的「本对话启用」开关写回 Host；关闭后该上下文返回空字符串，下一轮不再受影响。
- **默认关闭**；用户主动打开后才开始注入。开关和模式都按 Session 区分。

### 隐私与关闭

- 只请求本地 `/plugins/thinking-affect/state` 和 `/toggle`，没有外部网络请求。
- 日志默认不写；启用后限制在 2 MB，并轮转到 `injections.jsonl.1`。
- 关闭开关后不注入；Host 的分析状态只保存在内存，重启即清空；开关和模式保存在 profile 的 `data/thinking-affect.json`，重启后保留。
- 客户端会清理旧版本留下的 `thinking-affect:v1:*` localStorage 键。
- 许可证：MIT，见 [LICENSE](LICENSE)。
- 它是启发式估计，不是读心；窗口底部的说明会提醒这一点。

## 按轮结束更新，不逐字复算

- 只在该轮 **Turn 结束**（`turn/end`）后分析该轮已完成的思考文本。
- 流式 token 不触发分析。
- 一轮最多分析一次；同一轮重复请求直接读取缓存。
- 首次打开一个已有对话时，只回填**最近 3 轮**作为初始状态，不回扫全部历史。
- 每轮只做一次 O(19) 的马尔科夫式状态更新，不重新扫描历史，不调用模型。
- Host 状态按 Session 保存在内存；浮窗通过本地 HTTP 接口读取同一份状态，因此窗口和注入不会各算一套。

## 状态更新

```text
新维度 = 旧维度 × (1 - w) + 本轮维度 × w
新标签分布 = normalize(旧分布 × (1 - w) + 本轮分布 × w)
```

- `w` 由本轮置信度决定；线索弱时更依赖前文。
- 只有一条弱线索时显示「线索不足」，不形成独立标签，也不会更新综合状态；首次出现时显示「暂未形成稳定状态」，已有状态则沿用前文，避免一个 `maybe` 把心情改写。
- 主导标签有切换阈值（hysteresis），单轮噪声不会让情绪来回跳。
- 历史最多保留 12 轮摘要，用于「较上一轮：更平静 / 更紧绷 / 更确定 / 更不确定 / 基本稳定」。

## 接口

Host 端：

- `GET /plugins/thinking-affect/state?sessionId=...`：返回该对话的当前状态、开关、模式、全局关闭标记和趋势。
- `POST /plugins/thinking-affect/toggle`：`{ "sessionId": "...", "enabled": false }`，或 `{ "sessionId": "...", "mode": "assist" }`；两个字段可以只传一个。
- `systemPrompt.context`：每轮请求自动注入状态；`assist` 模式不注入自身情绪。

客户端浮窗只读上述接口；不再自己计算一套状态。

## 安装状态

当前本地开发安装（profile bundle link）：

```text
dsh-fakemood
```

安装目录：`C:\Users\wuji\Documents\deepseek-harness\default-workspace\thinking-affect`

发布到市场时使用正式包名 `dsh-fakemood`，`cordis.patch.yml` 里的 `name` 已同步；不能只改 `package.json`，否则现有 profile link 会断。`private` 已设为 `false`，`license` 为 `MIT`。

Host 或客户端 bundle 改动需要重启 Harness 才会完整加载；若本地 `dev:web` 监听正在运行，客户端改动可以刷新页面生效，否则刷新可能仍拿旧 bundle。

## 验证

- `node --check`：`client.js`、`index.js`、`host-analyzer.js` 均通过。
- 分析器回归：`fear`、`sorrowful`、`agitated`、`excited`、`happy`、`anxious`、`frustrated`、`sad`、`curious`、`relieved` 样例均得到预期标签；`激动` 同时出现 `agitated/anxious/excited`，验证多维权重生效。
- 语气回归：低确定感+恐惧 → `carefulTentative`；高压力+愤怒 → `neutralDeescalate / narrowScope`；高确定感+喜悦 → `warmEngaged / consolidate`；忧愁 → `gentleHonest / acknowledgeNext`；好奇 → 以 `followThread` 为优先方向。
- Host 状态：最近 3 轮回填、按轮缓存、无思考轮次沿用旧状态、提示词注入与关闭后返回空字符串，均已用 Node 模拟验证。
- Host 路由与 Agent 上下文注册：`/state`、`/toggle`、`systemPrompt.context` 均已用假 Context 验证。
- 浮窗：上下拖动、按对话开关、删除语气/方向/原文统计、浮标手柄与图标已改；浏览器内最终视觉未截图验证。
- 设置持久化：`handleToggle` 写入 `data/thinking-affect.json`，重启进程后能恢复开关和模式；日志路径改为 profile 数据目录，并验证了 2 MB 轮转。
- 任务模式浮窗：维度区会显示「只显示、不注入」提示；`assist` 下「我很难过」会输出温和接住情绪的指令，而不是与之冲突的「不要表现情绪」。
