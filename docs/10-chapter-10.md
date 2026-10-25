# Chương 10. Genotype × Environment × Management, hiệu chỉnh và bất định

## 10.1. G×E×M
\[
Y=f(G,E,M,G\times E,G\times M,E\times M)
\]

Không chuyển tham số giữa giống nếu chưa kiểm định.

## 10.2. Calibration
\[
\hat{\theta}
=
\arg\min_{\theta}
\sum_t w_t[y_{obs}(t)-y_{sim}(t;\theta)]^2
\]

## 10.3. Identifiability
Phân biệt:
- structural identifiability;
- practical identifiability;
- parameter correlation.

## 10.4. Sensitivity analysis
Local:
\[
S_i=\frac{\partial Y}{\partial \theta_i}
\]

Global: Morris, Sobol hoặc phương pháp tương đương khi mô hình phức tạp.

## 10.5. Validation
Tách dữ liệu:
- calibration;
- validation;
- external validation.

Không đánh giá trên cùng bộ dữ liệu dùng để fit.

## 10.6. Metrics
\[
RMSE=\sqrt{\frac1n\sum(y-\hat y)^2}
\]

\[
MAE=\frac1n\sum|y-\hat y|
\]

Có thể bổ sung bias, \(R^2\), NSE hoặc likelihood tùy bài toán.

## 10.7. Uncertainty
\[
p(\theta|y)\propto p(y|\theta)p(\theta)
\]

Bayesian inference hữu ích khi cần posterior uncertainty.

## 10.8. Data assimilation
State-space:
\[
x_{t+1}=f(x_t,u_t,\theta)+\omega_t
\]

\[
y_t=h(x_t)+\nu_t
\]

Có thể dùng Kalman/EnKF/particle filter tùy phi tuyến và dữ liệu.

## 10.9. Sensor integration
Nguồn:
- soil moisture;
- EC/pH;
- weather;
- leaf temperature;
- sap flow;
- gas exchange;
- canopy imagery;
- remote sensing.

Mỗi nguồn phải có uncertainty model và QC.
