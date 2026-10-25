"""SQLite DATA repository tests: no network, no simulated field values presented as reality."""
import copy
from contextlib import closing
import json
import sys
import tempfile
from pathlib import Path
import sqlite3
import unittest
sys.path.insert(0,str(Path(__file__).resolve().parents[1]/"desktop"))
from data_store import DataStore,DataError,RevisionConflict


def example():
    return {"experiment_id":"TEST-001","title":"Dữ liệu thử nghiệm phần mềm",
            "crop_name":"Cây kiểm thử","site_province":"Huế",
            "dataset_role":"raw_observations",
            "observations":[
                {"datetime":"2026-10-10T08:00","treatment":"NT1","replicate":"1",
                 "variable":"ec","value":"","unit":"dS/m","method":"","qc":"missing"}
            ],
            "literature_sources":[{"kind":"bibliography","doi":"10.1234/test",
                                   "source":"unit-test","verification":"not scientific data"}]}


class DataStoreTests(unittest.TestCase):
    def setUp(self):
        self.tmp=tempfile.TemporaryDirectory()
        self.store=DataStore(Path(self.tmp.name))
    def tearDown(self):
        self.tmp.cleanup()

    def test_save_list_restore_missing_not_zero(self):
        v=self.store.save_experiment(example(),0)
        self.assertEqual(v["revision"],1)
        item=self.store.get_experiment("TEST-001")
        self.assertEqual(item["payload"]["observations"][0]["value"],"")
        self.assertEqual(self.store.counts()["observations"],1)
        self.assertEqual(self.store.counts()["sources"],1)
        self.assertEqual(self.store.list_experiments()[0]["id"],"TEST-001")

    def test_revision_conflict_and_history(self):
        original=example()
        self.store.save_experiment(original,0)
        update=copy.deepcopy(original)
        update["title"]="Kiểm thử sửa nội dung"
        v=self.store.save_experiment(update,1)
        self.assertEqual(v["revision"],2)
        with self.assertRaises(RevisionConflict):
            self.store.save_experiment(original,1)
        self.assertEqual(self.store.get_revision("TEST-001",1)["payload"]["title"],
                         original["title"])
        self.assertEqual(self.store.get_experiment("TEST-001")["revision"],2)

    def test_idempotent(self):
        self.store.save_experiment(example(),0)
        self.assertTrue(self.store.save_experiment(example(),1)["unchanged"])
        self.assertEqual(len(self.store.list_revisions("TEST-001")),1)

    def test_invalid_does_not_change_db(self):
        with self.assertRaises(DataError):
            self.store.save_experiment({"experiment_id":"../bad","observations":[]},0)
        with self.assertRaises(DataError):
            self.store.save_experiment({"experiment_id":"okay","observations":"incorrect"},0)
        self.assertEqual(self.store.counts()["experiments"],0)

    def test_sqlite_backup_reopens(self):
        self.store.save_experiment(example(),0)
        backup=self.store.backup()
        self.assertTrue(backup.is_file())
        with closing(sqlite3.connect(backup)) as conn:
            self.assertEqual(conn.execute("select count(*) from experiments").fetchone()[0],1)
            self.assertEqual(conn.execute("pragma integrity_check").fetchone()[0],"ok")

    def test_remains_outside_app_bundle(self):
        self.assertTrue(str(self.store.db_path).startswith(self.tmp.name))


if __name__=="__main__":unittest.main()
