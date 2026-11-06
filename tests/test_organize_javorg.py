"""Configurable organize rules (javorg presets are just form fillers)."""
from __future__ import annotations

import sqlite3
import tempfile
import unittest
from contextlib import closing
from pathlib import Path

from peach import organize, organize_javorg
from support.ledger import fresh_ledger

ROOT = r"R:\DVD-back"
DECLARED = {"local": (ROOT,)}


def _seed(db_path: Path, rows: list[dict]) -> None:
    with closing(sqlite3.connect(db_path)) as connection:
        for row in rows:
            connection.execute(
                "INSERT INTO asset(id,location,path,name,medium,code,catalog_title,"
                "studio,series,release_date,width,height) "
                "VALUES(:id,'local',:path,:name,'video',:code,NULL,NULL,NULL,NULL,NULL,NULL)",
                {"code": None, **row})
        connection.commit()


def _plan(db_path: Path, **kwargs) -> dict:
    with closing(sqlite3.connect(db_path)) as connection:
        return organize.build_plan(connection, location="local", roots=DECLARED,
                                   online=True, **kwargs)


class RulesParseTests(unittest.TestCase):
    def test_preset_expand_and_override(self):
        base = organize_javorg.parse_rules(javorg_mode="dvd-back")
        self.assertEqual(base.output_root, "guaxiao1")
        self.assertEqual(base.collision, "suffix")
        self.assertIn("guaxiao", base.skip_dirs)
        custom = organize_javorg.parse_rules(
            {"output_root": "my-out", "prefix_min_count": 5, "skip_dirs": "a, b",
             "collision": "skip"},
            javorg_mode="dvd-back")
        self.assertEqual(custom.output_root, "my-out")
        self.assertEqual(custom.prefix_min_count, 5)
        self.assertEqual(custom.skip_dirs, ("a", "b"))
        self.assertEqual(custom.collision, "skip")

    def test_default_inactive(self):
        self.assertFalse(organize_javorg.OrganizeRules().active)
        self.assertTrue(organize_javorg.parse_rules(javorg_mode="guaxiao").active)


class JavorgPlanTests(unittest.TestCase):
    def setUp(self):
        self.holder = Path(tempfile.mkdtemp(prefix="peach-javorg-")).resolve()
        self.addCleanup(lambda: __import__("shutil").rmtree(self.holder, ignore_errors=True))
        self.db_path = fresh_ledger(self.holder)

    def test_prefix_helper(self):
        self.assertEqual(organize_javorg.code_prefix("SSNI-001"), "SSNI")
        self.assertEqual(organize_javorg.code_prefix("FC2-PPV-1234567"), "FC2")

    def test_dvd_back_preset_via_mode(self):
        _seed(self.db_path, [
            dict(id=1, path=ROOT + r"\loose\SSNI-001.mp4", name="SSNI-001.mp4", code="SSNI-001"),
            dict(id=2, path=ROOT + r"\guaxiao\keep\ABC-1.mp4", name="ABC-1.mp4", code="ABC-001"),
            dict(id=3, path=ROOT + r"\guaxiao1\SSNI\SSNI-002\SSNI-002.mp4",
                 name="SSNI-002.mp4", code="SSNI-002"),
        ])
        plan = _plan(self.db_path, file_template="{code}", dir_template="{prefix}/{code}",
                     javorg_mode="dvd-back")
        changes = [row for row in plan["rows"] if row["action"] != "skip"]
        self.assertEqual(len(changes), 1)
        self.assertEqual(changes[0]["target_path"],
                         ROOT + r"\guaxiao1\SSNI\SSNI-001\SSNI-001.mp4")
        skipped = {row["asset_id"]: row["reason"] for row in plan["rows"] if row["action"] == "skip"}
        self.assertEqual(skipped[2], organize.SKIP_MISC_TREE)
        self.assertEqual(plan["counts"]["unchanged"], 1)

    def test_custom_output_root(self):
        _seed(self.db_path, [
            dict(id=1, path=ROOT + r"\loose\SSNI-001.mp4", name="SSNI-001.mp4", code="SSNI-001"),
        ])
        rules = organize_javorg.OrganizeRules(output_root="sorted", collision="suffix")
        plan = _plan(self.db_path, file_template="{code}", dir_template="{prefix}/{code}",
                     rules=rules)
        changes = [row for row in plan["rows"] if row["action"] != "skip"]
        self.assertEqual(len(changes), 1)
        self.assertEqual(changes[0]["target_path"],
                         ROOT + r"\sorted\SSNI\SSNI-001\SSNI-001.mp4")

    def test_custom_skip_dirs(self):
        _seed(self.db_path, [
            dict(id=1, path=ROOT + r"\keep\SSNI-001.mp4", name="SSNI-001.mp4", code="SSNI-001"),
            dict(id=2, path=ROOT + r"\trash\ABC-001.mp4", name="ABC-001.mp4", code="ABC-001"),
        ])
        rules = organize_javorg.OrganizeRules(
            output_root="out", skip_dirs=("trash",), collision="suffix")
        plan = _plan(self.db_path, file_template="{code}", dir_template="{code}", rules=rules)
        changes = [row for row in plan["rows"] if row["action"] != "skip"]
        self.assertEqual(len(changes), 1)
        self.assertEqual(changes[0]["asset_id"], 1)
        skipped = [row for row in plan["rows"] if row["action"] == "skip"]
        self.assertEqual(skipped[0]["reason"], organize.SKIP_MISC_TREE)

    def test_only_dirs_whitelist(self):
        _seed(self.db_path, [
            dict(id=1, path=ROOT + r"\guaxiao\SSNI-001.mp4", name="SSNI-001.mp4", code="SSNI-001"),
            dict(id=2, path=ROOT + r"\other\ABC-001.mp4", name="ABC-001.mp4", code="ABC-001"),
        ])
        rules = organize_javorg.OrganizeRules(only_dirs=("guaxiao",), collision="suffix")
        plan = _plan(self.db_path, file_template="{code}", dir_template="{prefix}/{code}",
                     rules=rules)
        changes = [row for row in plan["rows"] if row["action"] != "skip"]
        self.assertEqual(len(changes), 1)
        self.assertIn("\\SSNI\\", changes[0]["target_path"])
        skipped = [row for row in plan["rows"] if row["action"] == "skip"]
        self.assertEqual(skipped[0]["reason"], organize.SKIP_ONLY_DIRS)

    def test_prefix_min_count_custom(self):
        gx = r"R:\guaxiao"
        declared = {"local": (gx,)}
        _seed(self.db_path, [
            dict(id=1, path=gx + r"\x\SSNI-001.mp4", name="SSNI-001.mp4", code="SSNI-001"),
            dict(id=2, path=gx + r"\x\SSNI-002.mp4", name="SSNI-002.mp4", code="SSNI-002"),
            dict(id=3, path=gx + r"\y\ABC-001.mp4", name="ABC-001.mp4", code="ABC-001"),
            dict(id=4, path=gx + r"\y\ABC-002.mp4", name="ABC-002.mp4", code="ABC-002"),
            dict(id=5, path=gx + r"\y\ABC-003.mp4", name="ABC-003.mp4", code="ABC-003"),
        ])
        rules = organize_javorg.OrganizeRules(prefix_min_count=2, collision="suffix")
        with closing(sqlite3.connect(self.db_path)) as connection:
            plan = organize.build_plan(
                connection, location="local", roots=declared, online=True,
                file_template="{code}", dir_template="{prefix}/{code}", rules=rules)
        changes = [row for row in plan["rows"] if row["action"] != "skip"]
        self.assertEqual(len(changes), 3)
        for row in changes:
            self.assertIn("\\ABC\\", row["target_path"])
        rare = [row for row in plan["rows"] if row.get("reason") == organize.SKIP_PREFIX_RARE]
        self.assertEqual(len(rare), 2)

    def test_collision_suffix_and_skip(self):
        _seed(self.db_path, [
            dict(id=1, path=ROOT + r"\a\SSNI-001.mp4", name="SSNI-001.mp4", code="SSNI-001"),
            dict(id=2, path=ROOT + r"\b\SSNI-001-copy.mp4", name="SSNI-001-copy.mp4", code="SSNI-001"),
        ])
        suffix = _plan(self.db_path, file_template="{code}", dir_template="{prefix}/{code}",
                       rules=organize_javorg.OrganizeRules(
                           output_root="guaxiao1", collision="suffix"))
        targets = sorted(row["target_path"] for row in suffix["rows"] if row["action"] != "skip")
        self.assertEqual(targets, [
            ROOT + r"\guaxiao1\SSNI\SSNI-001\SSNI-001-1.mp4",
            ROOT + r"\guaxiao1\SSNI\SSNI-001\SSNI-001.mp4",
        ])
        _seed(self.db_path, [
            dict(id=3, path=ROOT + r"\same\one.mp4", name="one.mp4", code="ABC-001"),
            dict(id=4, path=ROOT + r"\same\two.mp4", name="two.mp4", code="ABC-001"),
        ])
        skipped_plan = _plan(self.db_path, file_template="{code}", dir_template="",
                             asset_ids=(3, 4),
                             rules=organize_javorg.OrganizeRules())
        skipped = [row for row in skipped_plan["rows"] if row["action"] == "skip"]
        self.assertTrue(any(row["reason"] == organize.SKIP_TARGET_EXISTS for row in skipped))

    def test_guaxiao_preset_via_mode(self):
        gx = r"R:\guaxiao"
        declared = {"local": (gx,)}
        _seed(self.db_path, [
            dict(id=1, path=gx + r"\x\SSNI-001.mp4", name="SSNI-001.mp4", code="SSNI-001"),
            dict(id=2, path=gx + r"\x\SSNI-002.mp4", name="SSNI-002.mp4", code="SSNI-002"),
            dict(id=3, path=gx + r"\y\ABC-001.mp4", name="ABC-001.mp4", code="ABC-001"),
            dict(id=4, path=gx + r"\y\ABC-002.mp4", name="ABC-002.mp4", code="ABC-002"),
            dict(id=5, path=gx + r"\y\ABC-003.mp4", name="ABC-003.mp4", code="ABC-003"),
            dict(id=6, path=gx + r"\guaxiao1\ZZZ\ZZZ-001\ZZZ-001.mp4",
                 name="ZZZ-001.mp4", code="ZZZ-001"),
        ])
        with closing(sqlite3.connect(self.db_path)) as connection:
            plan = organize.build_plan(
                connection, location="local", roots=declared, online=True,
                file_template="{code}", dir_template="{prefix}/{code}",
                javorg_mode="guaxiao")
        changes = [row for row in plan["rows"] if row["action"] != "skip"]
        self.assertEqual(len(changes), 3)
        misc = [row for row in plan["rows"] if row.get("reason") == organize.SKIP_MISC_TREE]
        self.assertEqual(len(misc), 1)

    def test_default_mode_unchanged_collision_policy(self):
        _seed(self.db_path, [
            dict(id=1, path=ROOT + r"\same\one.mp4", name="one.mp4", code="SSNI-001"),
            dict(id=2, path=ROOT + r"\same\two.mp4", name="two.mp4", code="SSNI-001"),
        ])
        plan = _plan(self.db_path, file_template="{code}", dir_template="")
        skipped = [row for row in plan["rows"] if row["action"] == "skip"]
        self.assertTrue(any(row["reason"] == organize.SKIP_TARGET_EXISTS for row in skipped))


if __name__ == "__main__":
    unittest.main()
