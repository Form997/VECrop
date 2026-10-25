# Chương 12. Thiết kế thí nghiệm, tối ưu quản lý và triển khai VECrop

## 12.1. Thiết kế thí nghiệm
Cần xác định:
- hypothesis;
- treatment;
- replication;
- blocking;
- randomization;
- measurement frequency;
- destructive/non-destructive sampling.

## 12.2. Thí nghiệm nhận dạng tham số
Không phải thí nghiệm năng suất nào cũng nhận dạng được \(K_m,V_{max},K_h,V_{cmax}\). Phải thiết kế thí nghiệm theo tham số cần ước lượng.

## 12.3. Multi-objective management
\[
\max_{\mathbf u}
\left[
Y,\ Profit,\ WUE,\ NUE
\right]
\]

đồng thời:
\[
\min_{\mathbf u}
\left[
WaterUse,\ NLoss,\ Energy,\ Risk
\right]
\]

## 12.4. Profit
\[
\Pi=P_YY-C_{fert}-C_{water}-C_{energy}-C_{labor}-C_{other}
\]

## 12.5. Constraints
\[
u_{min}\le u_t\le u_{max}
\]

và các ràng buộc sinh học/môi trường.

## 12.6. Model predictive management
Ở mức nâng cao:
\[
u_t^*
=
\arg\max_{u_{t:t+H}}
J(x_t,u,\hat W)
\]

với forecast thời tiết và trạng thái cây cập nhật theo sensor.

## 12.7. Reproducibility
Mỗi mô phỏng cần lưu:
- code version;
- parameter set;
- data version;
- random seed;
- configuration;
- output;
- provenance.

## 12.8. Benchmark
So sánh VECrop với:
- empirical baseline;
- reduced crop model;
- mechanistic module baseline;
- ablation model.

## 12.9. Điều kiện đưa vào khuyến cáo sản xuất
Không dùng VECrop cho quyết định thực địa nếu:
- chưa external validate;
- parameter uncertainty quá lớn;
- dữ liệu input ngoài miền calibration;
- balance checks thất bại.

## 12.10. Lộ trình
1. khóa cấu trúc phương trình;
2. xây unit tests;
3. nhập dữ liệu chuẩn;
4. calibration từng module;
5. coupling;
6. validation từng cây;
7. uncertainty;
8. deployment.
