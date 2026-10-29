"""V3 stage separation tests; no user data touched."""
from pathlib import Path
import sys
import unittest

sys.path.insert(0, str(Path(__file__).resolve().parents[1] / "desktop"))
from launcher import data_root_for_mode, port_for_mode


class TestStaging(unittest.TestCase):
    def test_distinct_ports(self):
        self.assertEqual(port_for_mode(False), 47852)
        self.assertEqual(port_for_mode(True), 47853)
        self.assertNotEqual(port_for_mode(True), port_for_mode(False))

    def test_distinct_home_and_sqlite(self):
        home = Path("C:/Users/TEST/AppData/Local/VECropDesktop")
        staging = data_root_for_mode(home, True)
        prod = data_root_for_mode(home, False)
        self.assertNotEqual(staging, prod)
        self.assertEqual(staging.name, "VECropDesktop-Staging")
        self.assertEqual(prod.name, "VECropDesktop")
        self.assertNotEqual(staging / "data" / "vecrop.sqlite3",
                            prod / "data" / "vecrop.sqlite3")

    def test_staging_profile_is_separate(self):
        root = Path("/tmp/VECropDesktop")
        self.assertNotEqual(data_root_for_mode(root,True)/"webview-profile",
                            data_root_for_mode(root,False)/"webview-profile")


if __name__ == "__main__":
    unittest.main()
