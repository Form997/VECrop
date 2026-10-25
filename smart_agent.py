from __future__ import annotations

import argparse
import json
import re
from collections import Counter
from dataclasses import dataclass, field
from html import unescape
from pathlib import Path
from typing import Any, Dict, Iterable, List, Tuple


class ContentExtractor:
    """Trích xuất nội dung từ HTML hoặc văn bản thuần."""

    @staticmethod
    def strip_tags(text: str) -> str:
        text = re.sub(r"<script.*?</script>", " ", text, flags=re.I|re.S)
        text = re.sub(r"<style.*?</style>", " ", text, flags=re.I|re.S)
        text = re.sub(r"<[^>]+>", " ", text, flags=re.S)
        text = unescape(text)
        text = re.sub(r"\s+", " ", text)
        return text.strip()

    @staticmethod
    def normalize(text: str) -> str:
        text = text.lower()
        text = re.sub(r"[^a-z0-9\sàáạảãâầấậẩẫăằắặẳẵèéẹẻẽêềếệểễìíịỉĩòóọỏõôồốộổỗơờớợởỡùúụủũưừứựửữỳýỵỷỹđ]+", " ", text)
        text = re.sub(r"\s+", " ", text).strip()
        return text


@dataclass
class Document:
    path: Path
    title: str = ""
    text: str = ""
    tokens: List[str] = field(default_factory=list)

    @classmethod
    def from_path(cls, path: Path) -> "Document":
        html = path.read_text(encoding="utf-8", errors="ignore")
        title_match = re.search(r"<title>(.*?)</title>", html, flags=re.I|re.S)
        title = ContentExtractor.strip_tags(title_match.group(1)) if title_match else path.stem.replace("-", " ").title()
        text = ContentExtractor.strip_tags(html)
        tokens = ContentExtractor.normalize(text).split()
        return cls(path=path, title=title, text=text, tokens=tokens)


class KnowledgeBase:
    """Tạo kho tri thức từ nội dung website."""

    def __init__(self, root: Path):
        self.root = root
        self.documents: List[Document] = []
        self.index: Dict[str, List[Tuple[Path, float]]] = {}
        self.topic_keywords = {
            "dinh_dưỡng": ["dinh dưỡng", "nutrition", "vitamin", "nitơ", "phospho", "kali", "đạm", "cây"],
            "moi_truong": ["môi trường", "environment", "nước", "đất", "ánh sáng", "nhiệt độ", "độ ẩm", "khí hậu"],
            "cay_trong": ["cây trồng", "crop", "trồng", "nông nghiệp", "ruộng", "vườn", "giống cây"],
            "quan_ly": ["quản lý", "manage", "bảo vệ", "phân bón", "giám sát", "theo dõi"],
        }
        self.load()

    def load(self) -> None:
        candidates = [self.root / "index.html"]
        candidates.extend(sorted(self.root.glob("**/*.html")))
        candidates.extend(sorted(self.root.glob("**/*.htm")))

        seen: set[Path] = set()
        for path in candidates:
            if path.is_file() and path not in seen:
                seen.add(path)
                try:
                    doc = Document.from_path(path)
                    if doc.text:
                        self.documents.append(doc)
                except Exception:
                    continue

        self.build_index()

    def build_index(self) -> None:
        for doc in self.documents:
            for token in set(doc.tokens):
                self.index.setdefault(token, []).append((doc.path, 1.0))

    def search(self, query: str, top_k: int = 5) -> List[Tuple[Document, float]]:
        q_tokens = ContentExtractor.normalize(query).split()
        if not q_tokens:
            return []

        scored: Dict[Path, float] = {}
        for doc in self.documents:
            doc_text = ContentExtractor.normalize(doc.text)
            token_count = Counter(doc.tokens)
            score = 0.0
            for q in q_tokens:
                if q in doc_text:
                    score += 2.0
                score += token_count.get(q, 0) * 0.5

            for topic_name, keywords in self.topic_keywords.items():
                if any(k in query.lower() for k in keywords):
                    for kw in keywords:
                        if kw.lower() in doc_text:
                            score += 2.5

            if score > 0:
                scored[doc.path] = score

        ranked = sorted(scored.items(), key=lambda item: item[1], reverse=True)
        results: List[Tuple[Document, float]] = []
        for path, score in ranked[:top_k]:
            doc = next((d for d in self.documents if d.path == path), None)
            if doc:
                results.append((doc, score))
        return results


class AIAgent:
    """Agent AI mức cao, chạy theo nguyên tắc: hiểu ngữ cảnh → tìm tri thức → trả lời theo cấu trúc."""

    def __init__(self, root: Path):
        self.root = root
        self.kb = KnowledgeBase(root)
        self.memory: List[str] = []

    def _extract_topics(self, question: str) -> List[str]:
        q = question.lower()
        topics = []
        if any(k in q for k in ["dinh dưỡng", "nutrition", "vitamin", "đạm", "kali", "phospho"]):
            topics.append("dinh_dưỡng")
        if any(k in q for k in ["môi trường", "environment", "nước", "đất", "ánh sáng", "nhiệt độ", "độ ẩm"]):
            topics.append("moi_truong")
        if any(k in q for k in ["cây trồng", "crop", "trồng", "nông nghiệp", "ruộng", "vườn"]):
            topics.append("cay_trong")
        if any(k in q for k in ["quản lý", "manage", "bảo vệ", "phân bón", "giám sát", "theo dõi"]):
            topics.append("quan_ly")
        return topics or ["cay_trong"]

    def summarize(self) -> str:
        if not self.kb.documents:
            return "Không tìm thấy nội dung nào trong repo để tóm tắt."

        combined = []
        for doc in self.kb.documents[:5]:
            snippet = doc.text[:500].strip()
            combined.append(f"- {doc.title}: {snippet}")

        return "\n".join(combined)

    def answer_question(self, question: str) -> str:
        self.memory.append(question)
        q = question.strip()
        if not q:
            return "Bạn chưa nhập câu hỏi. Hãy hỏi về nội dung, chủ đề, hoặc tóm tắt website."

        lower_q = q.lower()
        if any(k in lower_q for k in ["tóm tắt", "summary", "nói về gì", "overview", "thông tin"]):
            return self._build_summary_answer()

        results = self.kb.search(q, top_k=3)
        if not results:
            return self._fallback_response(q)

        best_doc, best_score = results[0]
        facts = self._extract_evidence(best_doc, q)
        topic_tags = self._extract_topics(q)

        answer = [
            f"Dựa trên nội dung trong '{best_doc.title}', tôi đánh giá chủ đề chính là: {', '.join(topic_tags)}.",
            "",
            f"Trả lời gợi ý: {facts[0] if facts else 'Nội dung website tập trung vào quản lý và phát triển cây trồng bền vững.'}",
            "",
            "Điểm nổi bật:",
        ]

        for fact in facts[:3]:
            answer.append(f"- {fact}")

        if results and len(results) > 1:
            related = ", ".join(doc.title for doc, _ in results[1:3])
            answer.append(f"\nCác nội dung liên quan: {related}")

        return "\n".join(answer)

    def _build_summary_answer(self) -> str:
        docs = self.kb.documents
        if not docs:
            return "Không có tài liệu để tóm tắt."

        highlights = []
        for doc in docs[:3]:
            text = ContentExtractor.normalize(doc.text)
            if "dinh dưỡng" in text or "nutrition" in text:
                highlights.append("tập trung vào dinh dưỡng và chất lượng đất cho cây trồng")
            if "môi trường" in text or "environment" in text:
                highlights.append("lưu ý điều kiện môi trường và môi trường sống của cây")
            if "cây trồng" in text or "crop" in text:
                highlights.append("giải quyết vấn đề phát triển và chăm sóc cây trồng")

        if not highlights:
            highlights.append("website tập trung về các yếu tố nông nghiệp và phát triển cây trồng")

        return (
            "Tóm tắt tổng quát: "
            + "; ".join(dict.fromkeys(highlights))
            + ".\n\n"
            + "Nội dung chủ đạo là hướng dẫn, theo dõi và tối ưu hóa môi trường, dinh dưỡng, và chăm sóc cây trồng để đạt hiệu quả bền vững."
        )

    def _extract_evidence(self, doc: Document, question: str) -> List[str]:
        q_tokens = ContentExtractor.normalize(question).split()
        text = ContentExtractor.normalize(doc.text)
        evidence = []
        for token in q_tokens:
            if len(token) < 3:
                continue
            if token in text:
                evidence.append(f"Khớp từ khóa '{token}' trong nội dung của {doc.title}.")
        if not evidence:
            evidence = [
                f"Trang '{doc.title}' chứa các chủ đề về cây trồng, môi trường và dinh dưỡng.",
                "Nội dung phù hợp với các mục tiêu quản lý thực vật và tối ưu môi trường canh tác.",
            ]
        return evidence

    def _fallback_response(self, question: str) -> str:
        q = question.lower()
        if "dinh dưỡng" in q:
            return "Theo quan điểm của website, dinh dưỡng là yếu tố then chốt để cây trồng phát triển khỏe mạnh. Cần cân bằng nitơ, phospho, kali và các chất hữu ích khác."
        if "môi trường" in q:
            return "Môi trường bao gồm ánh sáng, đất, nước, nhiệt độ, độ ẩm, khí hậu. Đây là các biến số ảnh hưởng trực tiếp đến sức khỏe và năng suất cây trồng."
        if "cây trồng" in q or "crop" in q:
            return "Website này tập trung vào cây trồng, bao gồm chăm sóc, dinh dưỡng, môi trường và phương pháp quản lý bền vững."
        return "Tôi có thể hỗ trợ tóm tắt, tìm chủ đề, hoặc trả lời câu hỏi dựa trên nội dung website. Ví dụ: 'tóm tắt website', 'nói về dinh dưỡng', 'môi trường ảnh hưởng như thế nào?'."


def parse_args() -> argparse.Namespace:
    parser = argparse.ArgumentParser(description="AI Agent nâng cao cho VECrop")
    parser.add_argument("--root", type=str, default=".", help="Thư mục repo hoặc website cần đọc")
    parser.add_argument("--question", type=str, default="", help="Câu hỏi để agent trả lời")
    return parser.parse_args()


def main() -> None:
    args = parse_args()
    repo_root = Path(args.root).resolve()
    agent = AIAgent(repo_root)

    if args.question:
        answer = agent.answer_question(args.question)
        print(answer)
        return

    print("========================================")
    print("AI Agent VECrop - Chế độ tương tác")
    print("Gõ 'exit' để thoát")
    print("========================================")
    while True:
        user_input = input("Bạn hỏi > ").strip()
        if not user_input or user_input.lower() in {"exit", "quit", "thoát"}:
            print("Tạm biệt!")
            break
        print(agent.answer_question(user_input))
        print("\n")


if __name__ == "__main__":
    main()
