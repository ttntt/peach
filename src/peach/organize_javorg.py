"""整理附加规则：输出根、跳过/白名单、前缀门槛、撞名策略（本地 fork）。

默认全空时与上游 ADR-0039 一致。javorg·dvd-back / guaxiao 只是「套用预设」填这些字段，
真正逻辑只读可配置字段，不靠死模式分支。
"""
from __future__ import annotations

import ntpath
import re
from collections import Counter
from dataclasses import dataclass
from pathlib import PureWindowsPath

from .catalog_rules import (
    code_letter_stem, is_jav_code, normalise_code_key, release_code_from_filename,
)
#: 与 javorg organize.c SKIP_ENTIRE 对齐：dvd-back 预设默认填入 skip_dirs。
SKIP_ENTIRE_TOP: tuple[str, ...] = (
    "guaxiao", "guaxiao1", "JAV_output", "gc", "by-code", "euo",
    "TangBo_Hu-Collection", "yuan720", "yuand1080",
)

#: 顶层杂项大目录名（javorg LEAVE_FOLDER）。Peach 只动视频文件，不会整夹搬走。
LEAVE_FOLDER_TOP: tuple[str, ...] = (
    "001", "002", "259LUXU", "FC2", "new", "newback",
    "坂井千晴", "新建文件夹", "新建文件夹 (2)", "新建文件夹 (4)", "新建文件夹11",
    "新建文件夹720P", "欧美机构《啄木鸟》", "迅雷下载", "迅雷下载1",
)

COLLISION_SKIP = "skip"
COLLISION_SUFFIX = "suffix"
COLLISIONS = frozenset({COLLISION_SKIP, COLLISION_SUFFIX})

SKIP_MISC_TREE = "杂项目录跳过"
SKIP_ONLY_DIRS = "不在仅处理目录内"
SKIP_PREFIX_RARE = "前缀出现次数未达门槛"
SKIP_NO_CODE = "无法识别番号"

_SUFFIX_TAIL = re.compile(r"-\d+$")


@dataclass(frozen=True)
class OrganizeRules:
    """整理附加规则。全部默认时行为与上游模板整理一致。"""
    output_root: str = ""
    skip_dirs: tuple[str, ...] = ()
    only_dirs: tuple[str, ...] = ()
    prefix_min_count: int = 0
    collision: str = COLLISION_SKIP

    @property
    def active(self) -> bool:
        return bool(
            self.output_root
            or self.skip_dirs
            or self.only_dirs
            or self.prefix_min_count > 0
            or self.collision == COLLISION_SUFFIX
        )

    def as_dict(self) -> dict:
        return {
            "output_root": self.output_root,
            "skip_dirs": list(self.skip_dirs),
            "only_dirs": list(self.only_dirs),
            "prefix_min_count": self.prefix_min_count,
            "collision": self.collision,
        }


#: 预设：只填表，不锁死逻辑。
PRESET_RULES: dict[str, OrganizeRules] = {
    "dvd-back": OrganizeRules(
        output_root="guaxiao1",
        skip_dirs=SKIP_ENTIRE_TOP,
        only_dirs=(),
        prefix_min_count=0,
        collision=COLLISION_SUFFIX,
    ),
    "guaxiao": OrganizeRules(
        output_root="",
        skip_dirs=("guaxiao1",),
        only_dirs=(),
        prefix_min_count=2,
        collision=COLLISION_SUFFIX,
    ),
}

PRESET_TEMPLATES: dict[str, dict[str, str]] = {
    "dvd-back": {"file": "{code}", "dir": "{prefix}/{code}",
                 "example": "ABC/ABC-123/ABC-123.mp4"},
    "guaxiao": {"file": "{code}", "dir": "{prefix}/{code}",
                "example": "ABC/ABC-123/ABC-123.mp4"},
}


def _as_name_tuple(raw) -> tuple[str, ...]:
    if raw is None or raw == "":
        return ()
    if isinstance(raw, str):
        parts = re.split(r"[,，;\n\r]+", raw)
        return tuple(part.strip() for part in parts if part.strip())
    if isinstance(raw, (list, tuple, set)):
        return tuple(str(item).strip() for item in raw if str(item).strip())
    raise ValueError(f"目录名单须是字符串或列表，收到：{type(raw).__name__}")


def normalize_collision(raw) -> str:
    text = str(raw or COLLISION_SKIP).strip().lower()
    if text in {"", "skip", "fail", "default"}:
        return COLLISION_SKIP
    if text in {"suffix", "number", "javorg", "-1", "disambiguate"}:
        return COLLISION_SUFFIX
    if text not in COLLISIONS:
        raise ValueError(f"不认识的撞名策略：{raw}")
    return text


def normalize_mode(raw) -> str:
    """兼容旧 javorg_mode 快捷名。"""
    text = str(raw or "").strip().lower()
    if not text or text in {"default", "template", "none"}:
        return ""
    if text in {"dvd", "dvd_back", "dvdback"}:
        return "dvd-back"
    if text in {"guaxiao", "gx"}:
        return "guaxiao"
    if text not in PRESET_RULES:
        raise ValueError(f"不认识的 javorg 整理预设：{raw}")
    return text


def parse_rules(raw=None, *, javorg_mode: str = "") -> OrganizeRules:
    """从请求体/字典解析规则；未给字段时可用 javorg_mode 展开预设。"""
    payload = dict(raw or {})
    mode = normalize_mode(javorg_mode or payload.get("javorg_mode") or "")
    base = PRESET_RULES[mode] if mode else OrganizeRules()

    def has(key: str) -> bool:
        return key in payload and payload[key] is not None

    output_root = str(payload["output_root"]).strip() if has("output_root") else base.output_root
    skip_dirs = _as_name_tuple(payload["skip_dirs"]) if has("skip_dirs") else base.skip_dirs
    only_dirs = _as_name_tuple(payload["only_dirs"]) if has("only_dirs") else base.only_dirs
    if has("prefix_min_count"):
        try:
            prefix_min_count = int(payload["prefix_min_count"])
        except (TypeError, ValueError) as exc:
            raise ValueError(f"前缀门槛须是整数：{payload['prefix_min_count']}") from exc
        if prefix_min_count < 0:
            raise ValueError("前缀门槛不能为负")
    else:
        prefix_min_count = base.prefix_min_count
    collision = (normalize_collision(payload["collision"]) if has("collision")
                 else base.collision)
    return OrganizeRules(
        output_root=output_root,
        skip_dirs=skip_dirs,
        only_dirs=only_dirs,
        prefix_min_count=prefix_min_count,
        collision=collision,
    )


def code_prefix(code: str) -> str:
    """目录用的前缀：SSNI-001 → SSNI；FC2 → FC2。"""
    value = normalise_code_key(code) if is_jav_code(code) else str(code or "").strip().upper()
    if not value:
        return ""
    if value.upper().startswith("FC2"):
        return "FC2"
    stem = code_letter_stem(value)
    return stem.upper() if stem else ""


def resolve_code(row) -> str:
    """优先账本已确认番号，否则从文件名提取。"""
    raw = str(row["code"] or "").strip()
    if is_jav_code(raw):
        return normalise_code_key(raw)
    name = str(row["name"] or ntpath.basename(str(row["path"] or "")))
    found = release_code_from_filename(name) or ""
    return normalise_code_key(found) if is_jav_code(found) else ""


def _parts_under(root: str, path: str) -> tuple[str, ...] | None:
    try:
        rel = PureWindowsPath(path).relative_to(PureWindowsPath(root))
    except ValueError:
        return None
    return rel.parts


def _name_set(names: tuple[str, ...]) -> set[str]:
    return {name.casefold() for name in names}


def under_named_tops(root: str, path: str, names: tuple[str, ...]) -> bool:
    if not names:
        return False
    parts = _parts_under(root, path)
    return bool(parts) and parts[0].casefold() in _name_set(names)


def top_allowed(root: str, path: str, only_dirs: tuple[str, ...]) -> bool:
    """only_dirs 为空则不限；非空时要求相对来源根的顶层名在名单内（根下直接文件也允许）。"""
    if not only_dirs:
        return True
    parts = _parts_under(root, path)
    if parts is None:
        return False
    if not parts:
        return True
    if len(parts) == 1:
        # 来源根下的直接文件：不算「顶层文件夹」，白名单模式下仍处理。
        return True
    return parts[0].casefold() in _name_set(only_dirs)


def resolve_output_base(root: str, selected_path: str, output_root: str) -> str:
    """输出基点：空=整理路径或来源根；相对挂到该基点；绝对则直接用。"""
    anchor = selected_path or root
    text = str(output_root or "").strip()
    if not text:
        return anchor
    # 绝对路径（含盘符或 UNC）
    if ntpath.isabs(text) or text.startswith("\\\\") or PureWindowsPath(text).drive:
        return str(PureWindowsPath(text))
    return ntpath.join(anchor, *PureWindowsPath(text.replace("/", "\\")).parts)


def already_at_dest(path: str, dest_dir: str) -> bool:
    current = PureWindowsPath(path)
    dest = PureWindowsPath(dest_dir)
    if str(current).casefold() == str(dest).casefold():
        return True
    try:
        rel = current.relative_to(dest)
    except ValueError:
        return False
    return len(rel.parts) == 1


def _disambiguate_base(stem: str) -> str:
    """只剥我们加过的 -N 后缀，不剥番号本身的 -001。"""
    if stem.count("-") >= 2 and _SUFFIX_TAIL.search(stem):
        return _SUFFIX_TAIL.sub("", stem)
    return stem


def unique_path(desired: str, claimed: dict[str, int], asset_id: int) -> str:
    """目标撞名时加 -1/-2…。"""
    key = desired.casefold()
    owner = claimed.get(key)
    if owner is None or owner == asset_id:
        return desired
    directory = ntpath.dirname(desired)
    stem, ext = ntpath.splitext(ntpath.basename(desired))
    base = _disambiguate_base(stem)
    for index in range(1, 100000):
        candidate = ntpath.join(directory, f"{base}-{index}{ext}")
        other = claimed.get(candidate.casefold())
        if other is None or other == asset_id:
            return candidate
    return desired


def next_suffix_path(path: str) -> str:
    directory = ntpath.dirname(path)
    stem, ext = ntpath.splitext(ntpath.basename(path))
    base = _disambiguate_base(stem)
    match = _SUFFIX_TAIL.search(stem) if stem.count("-") >= 2 else None
    start = int(match.group(0)[1:]) + 1 if match else 1
    return ntpath.join(directory, f"{base}-{start}{ext}")


def enrich_values(values: dict[str, str], row) -> dict[str, str]:
    """规则激活时：账本无番号则尝试从文件名补 code/prefix。"""
    if values.get("code"):
        return values
    code = resolve_code(row)
    if not code:
        return values
    out = dict(values)
    out["code"] = code
    out["prefix"] = code_prefix(code)
    return out


def prefix_counts_for(rows) -> Counter[str]:
    counts: Counter[str] = Counter()
    for row in rows:
        code = resolve_code(row)
        prefix = code_prefix(code) if code else ""
        if prefix:
            counts[prefix.casefold()] += 1
    return counts


def rules_public_meta() -> dict:
    """给前端：默认值、撞名选项、预设规则、dvd-back 默认跳过名单。"""
    return {
        "defaults": OrganizeRules().as_dict(),
        "collisions": [
            {"id": COLLISION_SKIP, "label": "跳过（目标已存在）"},
            {"id": COLLISION_SUFFIX, "label": "加 -1/-2 消歧"},
        ],
        "preset_rules": {key: rules.as_dict() for key, rules in PRESET_RULES.items()},
        "skip_dirs_dvd_back": list(SKIP_ENTIRE_TOP),
    }


# 兼容旧名
JAVORG_MODES = frozenset(PRESET_RULES)
SKIP_ENTIRE_TOP_SET = frozenset(SKIP_ENTIRE_TOP)
LEAVE_FOLDER_TOP_SET = frozenset(LEAVE_FOLDER_TOP)


def under_skip_entire(root: str, path: str) -> bool:
    return under_named_tops(root, path, SKIP_ENTIRE_TOP)


def build_javorg_plan(*_a, **_k):
    raise RuntimeError("build_javorg_plan 已弃用：请走 organize.build_plan 的 rules 字段")


__all__ = [
    "COLLISIONS", "COLLISION_SKIP", "COLLISION_SUFFIX", "JAVORG_MODES",
    "LEAVE_FOLDER_TOP", "OrganizeRules", "PRESET_RULES", "PRESET_TEMPLATES",
    "SKIP_ENTIRE_TOP", "SKIP_MISC_TREE", "SKIP_NO_CODE", "SKIP_ONLY_DIRS",
    "SKIP_PREFIX_RARE", "already_at_dest", "code_prefix", "enrich_values",
    "next_suffix_path", "normalize_collision", "normalize_mode", "parse_rules",
    "prefix_counts_for", "resolve_code", "resolve_output_base", "rules_public_meta",
    "top_allowed", "under_named_tops", "under_skip_entire", "unique_path",
]