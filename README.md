# VECrop

**VECrop** là khung mô hình sinh lý–toán học cây trồng theo hướng cơ chế, tích hợp môi trường vùng rễ, thủy lực cây, hấp thu và vận chuyển dinh dưỡng, quang hợp, source–sink, cân bằng C–N–P–K, năng lượng, redox và tín hiệu hormone.

> Trạng thái khoa học: **mô hình/khung lý thuyết đề xuất**, chưa được xem là định luật hay lý thuyết đã được xác nhận. Mọi tham số thực nghiệm phải gắn nguồn và điều kiện đo; không dùng một giá trị phổ quát cho mọi loài/giống/môi trường.

## Phạm vi hiện tại
- Chương 1 — Cơ sở sinh lý và toán học của hấp thu dinh dưỡng
- Chương 2 — Môi trường vùng rễ
- Chương 3 — HSY cấp tế bào/phân tử
- Chương 4 — Thủy lực, mạch dẫn và tích hợp toàn cây (4.1–4.12)
- Ứng dụng ban đầu: lúa, ngô, xà lách

## Cấu trúc
- `docs/` — nội dung học thuật theo chương
- `models/` — phương trình lõi, ký hiệu, biến và giả thuyết
- `crops/` — tham số hóa theo cây trồng
- `src/` — mã mô phỏng
- `tests/` — kiểm thử cân bằng vật chất, đơn vị và giới hạn sinh học
- `references/` — tài liệu tham khảo và bằng chứng
- `data/` — dữ liệu mẫu/hiệu chỉnh

## Nguyên tắc
1. Không bịa nguồn hoặc tham số.
2. Phân biệt rõ phương trình đã có trong tài liệu và giả thuyết VECrop đề xuất.
3. Không trộn đại lượng khác đơn vị.
4. Không nhân lặp các hệ số stress nếu cơ chế đã được mô hình hóa phía trong.
5. Năng suất mô hình đầy đủ suy ra từ cân bằng vật chất và tăng trưởng; HSY dùng chủ yếu như chỉ số trạng thái/chẩn đoán.
