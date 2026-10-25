from pathlib import Path
import re


SITE_FILE = Path(__file__).with_name("index.html")


def summarize_site(html_path: str | Path = SITE_FILE) -> dict:
    """Đọc file HTML của trang web và trả về thông tin ngắn gọn."""
    path = Path(html_path)
    if not path.exists():
        raise FileNotFoundError(f"Không tìm thấy file: {path}")

    content = path.read_text(encoding="utf-8")
    title_match = re.search(r"<title>(.*?)</title>", content, re.IGNORECASE | re.DOTALL)
    title = title_match.group(1).strip() if title_match else "VECrop"

    plain_text = re.sub(r"<[^>]+>", " ", content, flags=re.DOTALL)
    plain_text = re.sub(r"\s+", " ", plain_text).strip()
    word_count = len(plain_text.split())

    lower_content = content.lower()
    checks = {
        "nutrition": "dinh dưỡng" in lower_content or "nutrition" in lower_content,
        "environment": "môi trường" in lower_content or "environment" in lower_content,
        "crop": "cây trồng" in lower_content or "crop" in lower_content,
    }

    return {
        "title": title,
        "file": str(path),
        "word_count": word_count,
        "sections_detected": checks,
    }


if __name__ == "__main__":
    result = summarize_site()
    print("=== VECrop Site Summary ===")
    for key, value in result.items():
        if isinstance(value, dict):
            print(f"{key}:")
            for sub_key, sub_value in value.items():
                print(f"  - {sub_key}: {sub_value}")
        else:
            print(f"{key}: {value}")
