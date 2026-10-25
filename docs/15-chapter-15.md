# Chương 15. Quy trình hiệu chỉnh và kiểm định cho lúa – ngô – xà lách

## 15.1. Nguyên tắc

Không hiệu chỉnh toàn bộ tham số cùng lúc bằng năng suất cuối vụ.

## 15.2. Calibration hierarchy

Thứ tự đề xuất:
1. environment/soil;
2. phenology;
3. root/hydraulics;
4. photosynthesis;
5. nutrient uptake;
6. respiration;
7. allocation/source–sink;
8. yield.

## 15.3. Lúa

Tối thiểu cần:
- phenology;
- tiller dynamics;
- LAI;
- flooded/AWD water status;
- root-zone Eh/O2;
- N uptake;
- panicle/grain biomass;
- final yield.

## 15.4. Ngô

Tối thiểu:
- thermal/photothermal development;
- leaf number/LAI;
- C4 gas exchange hoặc canopy biomass;
- soil water/root depth;
- anthesis–silking interval;
- kernel number;
- grain filling.

## 15.5. Xà lách

Tối thiểu:
- leaf number;
- leaf area;
- fresh/dry biomass;
- root biomass;
- EC/pH/DO;
- root-zone temperature;
- tissue Ca/N/K;
- tipburn incidence.

## 15.6. Hold-out validation

$$
D=D_{cal}\cup D_{val},\qquad
D_{cal}\cap D_{val}=\varnothing
$$

## 15.7. External validation

Ưu tiên dữ liệu khác:
- mùa vụ;
- địa điểm;
- cultivar;
- management.

## 15.8. Metrics

$$
RMSE=
\sqrt{
\frac1n
\sum_i
(y_i-\hat y_i)^2
}
$$

$$
MAE=
\frac1n
\sum_i
|y_i-\hat y_i|
$$

Bias:

$$
MBE=
\frac1n
\sum_i
(\hat y_i-y_i)
$$

## 15.9. Residual diagnostics

Không chỉ nhìn \(R^2\). Cần kiểm:
- heteroscedasticity;
- temporal autocorrelation;
- stage-specific bias;
- treatment-specific bias.

## 15.10. Benchmark

So sánh:
- empirical baseline;
- simple thermal/biomass model;
- VECrop reduced;
- VECrop mechanistic.

## 15.11. Ablation

Tắt từng module:

$$
\Delta E_k
=
Error_{without\ k}
-
Error_{full}
$$

để biết module có thật sự cải thiện dự báo hay không.
