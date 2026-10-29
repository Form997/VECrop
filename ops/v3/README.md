# VECrop — V3.0 có kiểm soát (chưa nghiệm thu)

Áp dụng đúng 12 nội dung PowerPoint *V3.0 – Từ bản thử đến dự án dùng thật* của chủ dự án. V3.0 là triển khai, giám sát và phục hồi, **không phải chỉ đổi số phiên bản**.

| Mục sổ tay | Công việc VECrop | Bằng chứng / điều kiện |
|---|---|---|
| 1. V1 → V2 → V3 | Đánh giá bản Windows `desktop-r11` và website | Bản cũ là mốc đối chứng; chưa phải v3.0.0 |
| 2. Chuẩn bị | Sản phẩm, DATA, test, vận hành | [ACCEPTANCE](ACCEPTANCE.md); chưa có thử người dùng |
| 3. GitHub | Kho Form997/VECrop | README và lịch sử commit |
| 4. Cấu trúc | docs/, tests/, desktop/, ops/v3/ | Không đưa dữ liệu cá nhân thật lên repo công khai |
| 5. Test | Unit, JS lint, Windows staging build và kiểm tra tình huống lỗi | Workflow `v3-staging.yml`, [STAGING](STAGING.md) |
| 6. Staging | PR từ nhánh staging và `--staging` riêng với DATA thật | AppData riêng, cổng 47853 |
| 7. Phát hành | PR → review → nghiệm thu → tag `v3.0.0` | **Không phát hành nếu thiếu bằng chứng** |
| 8. Giám sát | Theo dõi Actions, sự cố, backup | [OPERATIONS](OPERATIONS.md) |
| 9. Khôi phục | Giữ EXE ổn định, SQLite backup, rollback | Phải diễn tập khôi phục |
| 10. Theo lĩnh vực | Đối chứng nông học, provenance, tách hiệu chuẩn/kiểm định | [DATA](DATA-GOVERNANCE.md) |
| 11. Nghiệm thu | 7 mục bằng chứng, có người kiểm tra và ngày | [evidence.json](evidence.json) |
| 12. Bài thực hành | Repo, 5+ test, người dùng thử, biên bản phát hành | Chưa được tự đánh dấu đạt |

**Nguyên tắc:** Không có bằng chứng = chưa đạt; CI thành công ≠ khoa học chính xác; không tự công bố chuẩn an ninh/pháp lý. Nhánh staging và DATA riêng không được làm hỏng `main`.

Thử cổng nghiệm thu: `python ops/v3/assess.py --evidence ops/v3/evidence.json`; dùng `--strict` để trả mã lỗi khi còn thiếu tiêu chí.
