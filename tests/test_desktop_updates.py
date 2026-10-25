"""Tests for desktop scientific-content updater, no network required."""
from pathlib import Path
import sys
import tempfile
import unittest
from unittest.mock import patch
sys.path.insert(0, str(Path(__file__).resolve().parents[1] / "desktop"))
from updates import Updater, git_blob_sha, is_public_content, validate_tree


class TestUpdates(unittest.TestCase):
    def test_allowlist(self):
        self.assertTrue(is_public_content("docs/04-chapter-4.md"))
        self.assertTrue(is_public_content("docs/data/crops.csv"))
        self.assertFalse(is_public_content("docs/../../secrets.md"))
        self.assertFalse(is_public_content("js/experiment.js"))
        self.assertFalse(is_public_content("docs/.env"))
        self.assertFalse(is_public_content("config/script.py"))

    def test_git_hash(self):
        self.assertEqual(git_blob_sha(b"test content"), "08cf6101416f0ce0dda3c80e627f333854c4085c")

    def test_manifest_requires_textbook(self):
        with self.assertRaises(ValueError):
            validate_tree({"tree": [{"path": "config/data.json", "type": "blob", "size": 1,
                                    "sha": "a" * 40}]})

    def test_revision_switch_only_after_hash_verified(self):
        a = b"chapter first";b = b'{"source": "test"}'
        commitsha="a"*40;tree_sha="b"*40
        src={"docs/01-chapter-1.md": a, "config/data.json":b}
        tree={"tree": [
            {"path":p,"type":"blob","size":len(d),"sha":git_blob_sha(d)}
            for p,d in src.items()
        ]}
        def fetch(url,timeout=12):
            if url.endswith("/commits/main"):
                return {"sha":commitsha,"commit":{"tree":{"sha":tree_sha}}}
            return tree
        with tempfile.TemporaryDirectory() as temp:
            obj=Updater(Path(temp),Path(temp)/"app")
            with patch("updates.get_json",side_effect=fetch),patch("updates.fetch_blob",side_effect=lambda _,p:src[p]):
                sha,n=obj.sync()
            self.assertEqual((sha,n),(commitsha,2))
            self.assertEqual(obj.path_for("config/data.json").read_bytes(), b)
            self.assertIsNone(obj.path_for("js/app-router.js"))
            self.assertEqual(obj.sync.__name__,"sync")
            self.assertEqual(obj._manifest()["revision"],commitsha)

    def test_hash_failure_does_not_switch(self):
        sha="c"*40;tree_sha="d"*40
        tree={"tree":[{"path":"docs/01-chapter-1.md","type":"blob",
                       "sha":git_blob_sha(b"correct"),"size":7}]}
        def fetch(url,timeout=12):
            if url.endswith("/commits/main"):return {"sha":sha,"commit":{"tree":{"sha":tree_sha}}}
            return tree
        with tempfile.TemporaryDirectory() as temp:
            obj=Updater(Path(temp),Path(temp)/"app")
            with patch("updates.get_json",side_effect=fetch),patch("updates.fetch_blob",return_value=b"corrupt"):
                with self.assertRaises(ValueError):
                    obj.sync()
            self.assertEqual(obj._manifest(), {})


if __name__ == "__main__":
    unittest.main()
