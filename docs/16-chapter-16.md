# Chương 16. Triển khai số, phần mềm, kiểm thử và provenance

## 16.1. State vector

$$
\mathbf x(t)
=
[\theta,\Psi,C_i,B_o,M_i,H_h,ROS,ATP,\ldots]^T
$$

## 16.2. Dynamic model

$$
\frac{d\mathbf x}{dt}
=
\mathbf f(\mathbf x,\mathbf u,\boldsymbol\theta,t)
$$

## 16.3. Algebraic constraints

Ví dụ:

$$
\sum_i z_iC_i+C_{fixed}\approx0
$$

và các mass-balance constraints.

## 16.4. Solver

Tùy stiffness:
- explicit RK;
- adaptive RK;
- BDF/implicit solver.

Không chọn timestep chỉ vì “chạy được”.

## 16.5. Positivity

Các state vật chất phải thỏa:

$$
M_i\ge0,\qquad B_o\ge0
$$

Nếu solver tạo giá trị âm, phải xử lý nguyên nhân số học/mô hình.

## 16.6. Unit system

Mọi biến phải ghi:
- symbol;
- SI unit;
- internal unit;
- conversion.

Không trộn mmol/L với mol/m3 mà không chuyển đổi.

## 16.7. Unit tests

Bắt buộc:
- mass conservation;
- dimensional consistency;
- non-negative pools;
- normalized indices in [0,1];
- crop-specific parameter isolation;
- no duplicate stress penalty.

## 16.8. Regression tests

Mỗi release lưu một bộ scenario chuẩn để phát hiện thay đổi ngoài ý muốn.

## 16.9. Parameter provenance

Mỗi tham số:

| field | nội dung |
|---|---|
| symbol | ký hiệu |
| species | loài |
| cultivar | giống |
| organ | cơ quan |
| stage | giai đoạn |
| value | giá trị |
| unit | đơn vị |
| source | DOI/URL |
| role | calibration/validation/context |
| uncertainty | SD/SE/CI |

## 16.10. Configuration

Không hard-code crop parameters trong source code. Dùng config riêng cho:
- rice;
- maize;
- lettuce.

## 16.11. Reproducibility

Mỗi run lưu:
- git commit;
- config hash;
- input data version;
- random seed;
- solver version;
- output metadata.

## 16.12. Scientific release

Một release khoa học cần:
- equations version;
- parameter version;
- dataset version;
- tests;
- validation report;
- changelog.
