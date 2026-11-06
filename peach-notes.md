# Peach 改造勘察笔记（2026-11-06 Asia/Shanghai）

## 仓库

- 路径（用户机）：`C:\Users\sktnt\agent-tools\peach`
- 远程：https://github.com/peach-mitao/peach（branch `master`）
- 检出提交：`a4e66751`（Merge branch 'agent/codex/feedback-r0-r2' #451）
- 版本：`0.56.0`（`src/peach/__init__.py`）
- 许可：AGPL-3.0-or-later
- 技术栈：Python **3.14+**（uv 管理）、FastAPI 后端、React/BoardUI 前端、Windows 托盘 PyInstaller

## 本机环境（machineId `3cb9652f-…`）

| 工具 | 状态 |
| --- | --- |
| Git | 有（`D:\Tools\exe_tools\Git\cmd\git.exe`） |
| Python | `C:\Python314\python.exe`（3.14.3） |
| uv | 已装 **0.13.7** 到 `%USERPROFILE%\.local\bin\uv.exe`（原先 PATH 里 0.11.x 过旧；项目要求 `>=0.12.13`） |
| Node/npm | 有（`C:\Program Files\nodejs` / `H:\tools\node-v24.22.2`）；部分 shell 需手动补 PATH |
| 依赖 | `.venv` 已用 `uv sync --frozen --python 3.14 --extra build` 装好（`--locked` 在本机报 lock 需更新，故用 `--frozen`） |

## 构建方式

### A. 源码运行（日常开发）

```powershell
cd C:\Users\sktnt\agent-tools\peach
$env:Path = "$env:USERPROFILE\.local\bin;" + $env:Path
uv sync --frozen --python 3.14
.\.venv\Scripts\peach-tray.exe
```

CLI：`.\.venv\Scripts\peach.exe --help`（已验证）。

文档：`docs/OPERATIONS.md`「从源码运行」。

### B. 本机托盘 exe（已成功）

```powershell
# 需 Node 在 PATH；venv 需含 pyinstaller（--extra build）
.\scripts\build_windows.ps1
```

产物：

- **`C:\Users\sktnt\agent-tools\peach\dist\Peach\Peach.exe`**（约 94 MB，2026-11-06 16:26 Asia/Shanghai）
- 这是**托盘入口**，不是可拷走的完整绿色版：服务进程仍依赖项目 `.venv\Scripts\peach.exe`（见 OPERATIONS「桌面入口与发布」）。

### C. 完整独立包 / 安装包（本阶段未做）

```powershell
.\scripts\build_windows.ps1 -Standalone   # 完整 onedir + 工具
.\scripts\build_windows.ps1 -Installer    # 再编 Inno Setup
```

阻塞项：

1. 需已校验的 **FFmpeg** 工具树（`scripts/build_ffmpeg_windows.sh` 或 `-FFmpegPath` / `PEACH_FFMPEG_BUILD`）
2. 需已校验的 **untrunc**（同理）
3. 人脸模型下载（`scripts/fetch_face_models.py`）
4. Standalone 还会拉 **cloudflared**、amane runtime 等
5. Installer 还需本机 **Inno Setup 6**（`ISCC`）

现成发行包：Releases 上有 `Peach-0.50.0-windows-x64-setup.exe` / ZIP（上游版本号可能落后于 master 0.56.0）。

### D. `--locked` 问题

本机 `uv lock --check` 报 lockfile 需更新。先用 `--frozen` 按现有 `uv.lock` 安装成功。改造提交前不要随便 `uv lock` 改锁文件，除非刻意 bump 依赖。

---

## 番号 / 整理相关源码（改规则时优先看这些）

### 番号识别（从文件名提取 code）

| 文件 | 作用 |
| --- | --- |
| `src/peach/catalog_rules.py` | 核心：`is_jav_code`、`normalise_code_key`、`release_code_from_filename`、`release_code_from_text`、`compile_code_patterns`、**`code_letter_stem`**（`SSNI-001` → `ssni`，接近用户「前缀」） |
| `src/peach/web_settings.py` | `normalise_code_patterns`：用户自定义番号正则 |
| `src/peach/library_processing.py` | 处理时用 `code_patterns` + 内置规则写 `code` |
| `src/peach/scan.py` | 扫描；改名后可按番号接回旧行（ADR-0131） |
| `src/peach/resource_identification.py` | 无番号片联网识别 |

### 物理整理（改名 / 移动）

| 文件 | 作用 |
| --- | --- |
| `src/peach/organize.py` | **主入口**：`build_plan` / `apply_plan` / `rollback_batch`；`PRESETS`；`placeholder_values` |
| `src/peach/organize_templates.py` | 模板语法、`PLACEHOLDERS`、`render` / `validate_template`、文件名噪声清理 |
| `src/peach/organize_clouddrive.py` | 云盘侧整理 |
| `src/peach/web_organize.py` | HTTP：`/api/organize` 预览、执行、回滚 |
| `frontend/src/react/data-cleanup/organize.ts` | 前端 API 契约 |
| `frontend/src/react/data-cleanup/organize-card.tsx` | 「数据管理 → 整理」UI |
| `scripts/organize_media.py` | CLI 同一套整理 |
| `scripts/organize_library_dirs.py` | 馆藏按分类目录归集（创作者/日本/FC2 等，**不是**「前缀>2」规则） |
| `docs/adr/0039-media-stays-put-until-organize-is-asked-for.md` | 设计：默认不动盘；整理显式、可预览、可回滚 |

### 现成模板占位符

`{code}` `{title}` `{studio}` `{series}` `{year}` `{actors}` `{cd}` `{mosaic}` `{definition}`

预设示例：仅番号、番号+标题、按厂牌/系列/出演者/发行年建文件夹。

已增加 `{prefix}`（见改造进度）；前缀频次门槛见下方「功能设计」。

---

## 对照用户规则：缺口

用户规则摘要：

1. **dvd-back**：番号进 `guaxiao1\前缀\完整番号\`；杂项目录不动  
2. **guaxiao**：仅库内；前缀出现 **>2** 才归集到 `前缀\番号\`  
3. **同番号重复**加 `-1`/`-2`  
4. 查重 / 扁平化可后做  

与 Peach 现状冲突 / 需加的能力：

| 需求 | Peach 现状 | 改造方向（下一阶段） |
| --- | --- | --- |
| `前缀\完整番号\` 目录 | 有 `{studio}`（刮削厂牌）和 `code_letter_stem`，但整理模板**无前缀占位符**；目录模板也不强制「番号一层」 | 在 `PLACEHOLDERS` + `placeholder_values` 增加 `{prefix}`（基于 `code_letter_stem` 大写）；预设 `dir={prefix}/{code}`、`file={code}` 或保留原名 |
| 杂项目录不动 | 整理按来源范围；无「杂项」白名单 | 对 dvd-back：路径过滤 / 跳过名单（可配置目录名）；或只处理已识别 `code` 的行（缺字段已 skip） |
| 前缀计数 >2 才归集 | **完全没有**库内频次门槛 | 在 `build_plan` 前先统计本库/本源 `code_letter_stem` 频次；≤2 的 prefix 整行 skip 或原地 |
| 撞名 `-1`/`-2` | ADR-0039 **明确否决**撞名自动序号：「目标已存在就整行失败」 | 需改 `apply_plan` / 计划生成策略，并写清 ADR 例外或新 ADR；与上游哲学冲突，改本地 fork |
| guaxiao1 根 | 模板相对**来源根** | dvd-back 来源根指向含 `guaxiao1` 的盘，或 dir 模板写成 `guaxiao1/{prefix}/{code}` |
| 查重 | 应用内有 duplicates 页；物理查重不是 organize 核心 | 可后接；也可继续用现有 `javorg` |

建议改造策略：

1. **Fork 本地改**，不急着向上游 PR（规则很个人化，且撞名策略与 ADR-0039 冲突）。  
2. 优先改：`catalog_rules`（复用 stem）→ `organize_templates`/`organize.py`（`{prefix}` + 频次门槛 + 可选序号）→ 前端预设文案 → 测试 `tests/test_organize.py`。  
3. 可加「模式」开关：`javorg-compat`（dvd-back / guaxiao）以免破坏 Peach 默认行为。  
4. 日常验证先用源码/`peach-tray`；完整绿色包等工具树齐了再 `-Standalone`。

---

## 本阶段结论

| 项 | 结果 |
| --- | --- |
| 克隆 | 成功 → `C:\Users\sktnt\agent-tools\peach` |
| 构建方式 | 摸清：uv + `build_windows.ps1`；文档 OPERATIONS / TESTING_DESKTOP |
| 相关源码 | 已定位（见上表） |
| 本机编 exe | **可以**：已产出 `dist\Peach\Peach.exe`（托盘，依赖 `.venv`） |
| 完整独立 exe | 未做；缺 FFmpeg/untrunc 等工具构建 |
| 规则改造 | **已改为可配置参数**（预设仅填表；见功能设计与可配置落地） |

## 快捷路径

- 源码托盘：`C:\Users\sktnt\agent-tools\peach\.venv\Scripts\peach-tray.exe`
- 打包托盘：`C:\Users\sktnt\agent-tools\peach\dist\Peach\Peach.exe`
- 笔记（box）：`/workspace/peach-notes.md`


---

## 改造进度（2026-11-06 16:40 Asia/Shanghai）— javorg 兼容模式

### 已实现

本地 fork 增加整理模式 `javorg_mode`：`""`（默认模板，上游行为不变）| `dvd-back` | `guaxiao`。

| 模式 | 行为 |
| --- | --- |
| 默认 | 原 ADR-0039 模板整理；撞名整行跳过 |
| **dvd-back** | 番号 → `guaxiao1\前缀\完整番号\完整番号.ext`；顶层杂项树（guaxiao / JAV_output / gc / 001…，对齐 javorg `SKIP_ENTIRE`）跳过 |
| **guaxiao** | 仅库内；同一前缀出现次数 **>2** 才归到 `前缀\番号\`；碰 guaxiao1 跳过 |
| 两模式撞名 | 文件名加 `-1`/`-2`（不剥番号自身的 `-001`） |

仍保持：**先预览、确认后再执行**；可回滚上一批。

### 改动文件

- **新增** `src/peach/organize_javorg.py`
- `src/peach/organize.py` — `build_plan(..., javorg_mode=)`；`{prefix}` 取值；javorg 预设；执行时 `allow_suffix` 重试
- `src/peach/organize_templates.py` — 占位符 `{prefix}`
- `src/peach/web_organize.py` — API 传 `javorg_mode`；状态返回 `javorg_modes`
- `frontend/src/react/data-cleanup/organize.ts` / `organize-card.tsx` — 模式下拉 + 预设联动
- **新增** `tests/test_organize_javorg.py`
- `tests/test_organize.py` — VALUES 补 `prefix`

### 怎么选模式

1. 打开 Peach → **数据管理 → 整理**
2. 「模式」选 **javorg·dvd-back** 或 **javorg·guaxiao**（或点套用模板同名按钮）
3. 选来源 / 可选路径 → **预览** → 确认 → **执行整理**
4. 默认「默认模板」仍是原来的文件名/目录模板整理

API：`POST /api/organize/preview|apply` 多一个字段 `javorg_mode`。

### 验证

- `unittest tests.test_organize_javorg` + 原 `PlanTests` / `EndpointTests` / `TemplateRenderTests`：**OK**
- 已重编：`C:\Users\sktnt\agent-tools\peach\dist\Peach\Peach.exe`（托盘，依赖 `.venv`）

### 使用注意

- 整理基于账本里已登记的视频；先扫描入库再整理。
- 番号优先用账本 `code`，否则从文件名提取。
- 杂项「整夹不搬」在 Peach 侧体现为不碰 `SKIP_ENTIRE` 树下的资产；`LEAVE_FOLDER` 内的**可识别番号文件**仍可被 dvd-back 搬出（与 javorg 一致）。

---

## 功能设计（2026-11-06 17:55 Asia/Shanghai）— 整理参数可自定

上一轮把 dvd-back / guaxiao 写成死模式，用户反馈「输出目录、刮削文件夹、刮削规则都可以自定」。本轮改为**可编辑参数表**；两种 javorg 只作为「套用预设」填表，之后仍可改每个字段。

### 与刮削设置的分工

| 能力 | 在哪改 | 本轮是否动 |
| --- | --- | --- |
| 扫描来源 / 库根路径 | 设置 → 媒体来源 | 不动 |
| 整理范围（只动某文件夹） | 整理页「整理路径」 | 已可自由选/输入；保持 |
| 番号识别正则 | 设置 → `codePatterns` | 不动；整理页加一句提示 |
| 文件名/目录模板、输出根、跳过/白名单、前缀门槛、撞名 | **整理页参数表** | 本轮改造重点 |

### 可自定字段（API / UI 共用）

| 字段 | 类型 | 默认 | 含义 |
| --- | --- | --- | --- |
| `file_template` | str | （沿用来源已存 / 空） | 文件名模板，可用 `{code}` `{prefix}` 等 |
| `dir_template` | str | 同上 | 目录模板（相对「输出基点」） |
| `output_root` | str | `""` | 输出根。空=相对来源根（或整理路径）；相对路径挂到来源根/整理路径下；也可绝对路径 |
| `skip_dirs` | list[str] | `[]` | 跳过的**顶层**文件夹名（整棵树不碰）。可清空 |
| `only_dirs` | list[str] | `[]` | 仅处理这些顶层文件夹；空=不限 |
| `prefix_min_count` | int | `0` | 前缀出现次数 **> N** 才归集；`0`=不设门槛 |
| `collision` | `"skip"` \| `"suffix"` | `"skip"` | 撞名：跳过（上游）/ 加 `-1` `-2`（javorg） |
| `javorg_mode` | str | `""` | **兼容快捷**：仅当其它规则字段未显式传入时，可展开为下表预设；真正逻辑只读上表字段 |

目标路径计算：

1. 基点 = `output_root`（绝对则直接用；相对则 `join(整理路径或来源根, output_root)`；空则=整理路径或来源根）
2. `target_dir = join(基点, render(dir_template))`；`target = join(target_dir, render(file_template)+ext)`
3. 过滤：`skip_dirs` / `only_dirs` 相对**来源根**顶层；`prefix_min_count` 对本次计划内可识别番号的前缀计数

默认（全默认值）与上游 ADR-0039 一致：无强制输出根、无跳过/白名单、无门槛、撞名跳过。

### 预设填表内容

| 预设 | output_root | file | dir | skip_dirs | only_dirs | prefix_min_count | collision |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 默认模板 | `""` | （不强制改模板） | （不强制） | `[]` | `[]` | `0` | `skip` |
| javorg·dvd-back | `guaxiao1` | `{code}` | `{prefix}/{code}` | javorg `SKIP_ENTIRE` 那套（guaxiao、guaxiao1、JAV_output、gc…） | `[]` | `0` | `suffix` |
| javorg·guaxiao | `""` | `{code}` | `{prefix}/{code}` | `["guaxiao1"]` | `[]`（范围用「整理路径」指到 guaxiao） | `2` | `suffix` |

UI：去掉「模式」死锁；模板框始终可改；增加输出根 / 跳过列表 / 仅处理列表 / 前缀门槛 / 撞名策略编辑区；「套用模板」按钮仍含上述三个预设（只填表）。

### 实现落点

- `organize_javorg.py` → 规则解析 + `build_rules_plan`（由可配置字段驱动；预设常量）
- `organize.py` `build_plan` 读规则字段；`javorg_mode` 仅作缺省展开
- `web_organize.py` 透传字段；状态返回 `organize_rule_defaults` + 预设
- 前端 `organize.ts` / `organize-card.tsx` 可编辑表单
- `tests/test_organize_javorg.py` 扩覆盖自定义字段

**本轮不编 exe**，等确认后再 `build_windows.ps1`。

---

## 实现进度（可配置参数已落地，尚未编译）

已实现：`OrganizeRules`（output_root / skip_dirs / only_dirs / prefix_min_count / collision）+ 前端可编辑表单；javorg 预设只填表。

测试：`tests.test_organize_javorg` 11 OK；原 `PlanTests` / `TemplateRenderTests` / `EndpointTests` OK。

**尚未编译** `build_windows.ps1` / `dist\Peach\Peach.exe` — 等确认后再编。
