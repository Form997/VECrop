# Chương 5. Cảm nhận carbon – đường – năng lượng và điều khiển sinh trưởng

## 5.1. Vai trò của sugar sensing
Sucrose, glucose và trehalose-6-phosphate (T6P) không chỉ là chất chuyển hóa mà còn là tín hiệu trạng thái carbon.

## 5.2. Trục SnRK1–TOR
Ở trạng thái thiếu carbon/năng lượng, SnRK1 ưu tiên bảo toàn và huy động dự trữ; TOR thúc đẩy sinh tổng hợp và tăng trưởng khi carbon, dinh dưỡng và năng lượng đủ.

Khung trạng thái đề xuất:
\[
S_C=\frac{C_{sugar}}{K_C+C_{sugar}},\qquad
S_E=\frac{ATP}{K_E+ATP}
\]

Một biểu diễn giảm lược:
\[
A_{TOR}=\sigma(\beta_0+\beta_CS_C+\beta_NS_N+\beta_ES_E-\beta_SS_{stress})
\]

\[
A_{SnRK1}=\sigma(\gamma_0-\gamma_CS_C-\gamma_ES_E+\gamma_SS_{stress})
\]

Hai phương trình trên là **mô hình VECrop đề xuất**, không phải hằng số sinh học phổ quát.

## 5.3. Ghép với source–sink
\[
SS_o^{eff}=SS_o\,F_{sugar,o}\,F_{energy,o}\,F_{stage,o}
\]

Trong đó sink strength không chỉ phụ thuộc kích thước sink mà còn phụ thuộc khả năng sử dụng carbon.

## 5.4. T6P và sucrose
T6P thường phản ánh trạng thái sucrose và có vai trò điều phối tăng trưởng, phân bổ carbon và phát triển. VECrop nên giữ T6P như biến tín hiệu, không đồng nhất với lượng carbon dự trữ.

## 5.5. Điểm tích hợp
\[
Carbon\ status \rightarrow T6P/SnRK1/TOR \rightarrow gene\ expression \rightarrow growth\ capacity
\]

## 5.6. Nguyên tắc mô hình hóa
- Không nhân thêm “stress carbon” nếu carbon balance đã được giải cơ chế.
- Tách pool sucrose, starch và structural carbon khi dữ liệu cho phép.
- Tách tín hiệu đường khỏi flux carbon thực.
