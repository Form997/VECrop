"""VECrop experiment input QC regression tests (stdlib-only)."""
import sys
import unittest
from pathlib import Path

sys.path.insert(0, str(Path(__file__).resolve().parents[1] / "python"))
from experiment_validator import validate


def sample():
    return {
        "experiment_id": "DEMO-001",
        "title": "Kiểm tra cấu trúc dữ liệu",
        "start_date": "2026-10-01",
        "site": "test site",
        "production_system": "field",
        "crop_name": "Lúa",
        "cultivar": "Demo",
        "design": "RCBD",
        "treatment_count": "2",
        "replicate_count": "3",
        "treatments": "T1, T2",
        "soil_or_substrate": "soil",
        "weather_source": "weather_logger.csv",
        "observations": [
            {"datetime": "2026-10-05T09:00", "treatment": "T1", "replicate": "1",
             "variable": "soil_ph", "value": "6.2", "unit": "pH", "method": "meter"},
        ],
    }


class TestExperimentQC(unittest.TestCase):
    def test_valid_structure(self):
        r = validate(sample())
        self.assertTrue(r["valid"])
        self.assertEqual(r["observation_count"], 1)
        self.assertNotEqual(r["status"], "scientifically_validated")

    def test_duplicate_observation(self):
        d = sample()
        d["observations"].append(dict(d["observations"][0]))
        self.assertIn("observation_2_duplicate", validate(d)["errors"])

    def test_bad_pH(self):
        d = sample()
        d["observations"][0]["value"] = "18"
        self.assertIn("observation_1_ph_out_of_range", validate(d)["errors"])

    def test_non_numeric(self):
        d = sample()
        d["observations"][0]["value"] = "ABC"
        self.assertIn("observation_1_nonnumeric", validate(d)["errors"])

    def test_empty_placeholder_not_a_measurement(self):
        d = sample()
        d["observations"] = [{}]
        r = validate(d)
        self.assertTrue(r["valid"])
        self.assertEqual(r["observation_count"], 0)
        self.assertIn("no_observations", r["warnings"])

    def test_date_outside_experiment(self):
        d = sample()
        d["observations"][0]["datetime"] = "2026-09-01T09:00"
        self.assertIn("observation_1_before_start", validate(d)["warnings"])


if __name__ == "__main__":
    unittest.main()
