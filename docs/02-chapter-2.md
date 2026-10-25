# Chương 2. Môi trường vùng rễ và điều kiện biên của VECrop

> **Mục tiêu:** Chương 2 mô tả các biến vật lý, hóa học và sinh học của vùng rễ tạo nên điều kiện biên cho hấp thu nước, ion, hô hấp rễ và trao đổi chất. Các đại lượng môi trường được giữ riêng theo cơ chế; chỉ số tổng hợp chỉ dùng trong mô hình rút gọn.

---

## 2.1. Khái niệm vùng rễ trong VECrop

Vùng rễ không chỉ là “đất quanh rễ”. Trong VECrop, vùng rễ gồm:

- đất hoặc giá thể;
- dung dịch đất/dung dịch dinh dưỡng;
- rhizosphere;
- bề mặt rễ;
- khí trong lỗ rỗng;
- vi sinh vật liên quan;
- nguồn nước và phân bón đi vào hệ.

Vector trạng thái:

$$
\mathbf X_{env}
=
[EC,pH,\theta,pF,\Psi_{soil},T_{root},O_2,Eh,OM,N,P,K,Ca,Mg,S,Na,Cl,\ldots]^T
$$

---

## 2.2. Điều kiện biên và trạng thái

Cần phân biệt:

- **state variable**: giá trị bên trong hệ tại một thời điểm;
- **boundary condition**: tác động từ bên ngoài hệ;
- **forcing variable**: đầu vào thay đổi theo thời gian.

Ví dụ:

$$
Irrigation(t)
$$

là forcing, còn:

$$
\theta(z,t)
$$

là state variable.

---

## 2.3. Không gian và chiều sâu đất

Vùng rễ nên được mô tả theo chiều sâu:

$$
z\in[0,Z_r]
$$

Trong đó \(Z_r\) là chiều sâu vùng rễ hiệu dụng.

Một profile có thể viết:

$$
X(z,t)
$$

với \(X\) là nước, nhiệt độ, nồng độ ion hoặc O₂.

---

## 2.4. Hàm lượng nước thể tích

Hàm lượng nước thể tích:

$$
\theta
=
\frac{V_w}{V_{soil}}
$$

đơn vị thường:

$$
m^3m^{-3}
$$

Không nên trộn \(\theta\) với phần trăm khối lượng nước nếu chưa chuyển đổi theo bulk density.

---

## 2.5. Bão hòa và độ rỗng

Porosity:

$$
\phi
=
1-\frac{\rho_b}{\rho_s}
$$

Trong điều kiện bão hòa:

$$
\theta_s\approx\phi
$$

nhưng thực tế có thể sai khác do trapped air và cấu trúc đất.

---

## 2.6. Thế nước đất

$$
\Psi_{soil}
=
\Psi_m+\Psi_s+\Psi_g+\Psi_p
$$

Trong đất không bão hòa, \(\Psi_m\) thường quan trọng.

Trong dung dịch thủy canh không có ma trận đất, \(\Psi_m\) gần như không còn ý nghĩa tương tự đất khoáng.

---

## 2.7. pF

$$
pF=\log_{10}|h|
$$

với \(h\) là pressure head theo cm nước.

pF là cách biểu diễn trạng thái giữ nước của đất và không phải humidity của không khí.

---

## 2.8. Quan hệ giữa pressure head và water potential

Một gần đúng:

$$
\Psi
=
\rho_wgh
$$

Khi dùng MPa:

$$
\Psi\approx 9.81\times10^{-6}h
$$

nếu \(h\) tính bằng m và \(\Psi\) bằng MPa.

Cần thống nhất dấu theo quy ước sử dụng.

---

## 2.9. Đường cong giữ nước van Genuchten

$$
S_e
=
\frac{\theta-\theta_r}
{\theta_s-\theta_r}
$$

và:

$$
S_e
=
\left[
1+(\alpha|h|)^n
\right]^{-m}
$$

thường:

$$
m=1-\frac1n
$$

Trong đó:
- \(\theta_r\): residual water content;
- \(\theta_s\): saturated water content;
- \(\alpha\): tham số scale;
- \(n,m\): tham số shape.

---

## 2.10. Độ dẫn thủy lực đất

Độ dẫn thủy lực phụ thuộc water content:

$$
K=K(\theta)
$$

Một dạng van Genuchten–Mualem:

$$
K(S_e)
=
K_s
S_e^l
\left[
1-
(1-S_e^{1/m})^m
\right]^2
$$

Trong đó \(K_s\) là saturated hydraulic conductivity.

---

## 2.11. Darcy–Buckingham

Dòng nước:

$$
\mathbf q
=
-K(\theta)
\nabla
(\Psi_m+\Psi_g)
$$

Dấu âm thể hiện dòng theo gradient potential.

---

## 2.12. Richards equation

Một dạng tổng quát:

$$
\frac{\partial\theta}{\partial t}
=
\nabla\cdot
[
K(\theta)\nabla(\Psi_m+\Psi_g)
]
-
S_{root}
$$

Trong đó \(S_{root}\) là sink do cây hút nước.

---

## 2.13. Root water uptake sink

Một mô hình đơn giản:

$$
S_{root}(z,t)
=
\beta(z)
T_p(t)
F_{\Psi}(z,t)
$$

trong đó:
- \(\beta(z)\): phân bố rễ;
- \(T_p\): transpiration potential;
- \(F_{\Psi}\): stress response.

Đây là reduced formulation.

---

## 2.14. Root length density

$$
RLD(z)
=
\frac{L_{root}(z)}
{V_{soil}(z)}
$$

Một dạng profile thực nghiệm:

$$
RLD(z)=RLD_0e^{-k_zz}
$$

không phải quy luật phổ quát; cần fit theo crop và đất.

---

## 2.15. Dòng khối dinh dưỡng

$$
J_{mass,i}
=
q_wC_i
$$

Mass flow phụ thuộc:
- water flux;
- concentration;
- root water uptake;
- transpiration.

---

## 2.16. Khuếch tán dinh dưỡng

Fick:

$$
J_{diff,i}
=
-D_{eff,i}\nabla C_i
$$

Với đất:

$$
D_{eff,i}
=
D_{0,i}
f(\theta,\tau,sorption)
$$

trong đó \(\tau\) biểu thị tortuosity.

---

## 2.17. Tổng dòng ion tới rễ

$$
J_i^{soil}
=
q_wC_i
-
D_{eff,i}\nabla C_i
$$

Ở mức nâng cao có thể thêm:
- reaction;
- sorption;
- mineralization;
- root exudation.

---

## 2.18. Depletion zone

Hấp thu rễ tạo gradient:

$$
\frac{\partial C_i}{\partial t}
=
D_{eff,i}\nabla^2C_i
-
R_{uptake,i}
+
R_{source,i}
$$

Nồng độ bulk soil không nhất thiết bằng nồng độ ngay tại root surface.

---

## 2.19. Buffer capacity của đất

Một dạng linear buffer:

$$
S_i=K_{d,i}C_i
$$

Tổng lượng:

$$
M_i
=
\theta C_i+\rho_bS_i
$$

Với P và một số micronutrient, sorption có thể làm diffusion tới rễ trở thành giới hạn chính.

---

## 2.20. Sorption phi tuyến

Freundlich:

$$
S_i=K_FC_i^n
$$

Langmuir:

$$
S_i=
\frac{Q_{max}K_LC_i}
{1+K_LC_i}
$$

Chọn mô hình theo dữ liệu; không dùng một mô hình sorption cho mọi ion.

---

## 2.21. EC

EC là độ dẫn điện của dung dịch.

EC tăng khi tổng lượng ion hòa tan tăng, nhưng:

$$
EC\neq C_N
$$

$$
EC\neq C_P
$$

$$
EC\neq C_K
$$

Vì các ion có mobility và charge khác nhau.

---

## 2.22. EC và nhiệt độ

EC phụ thuộc nhiệt độ đo.

Do đó cần:
- ghi nhiệt độ;
- dùng temperature compensation nếu thiết bị hỗ trợ;
- không so EC từ hai nhiệt độ khác nhau mà không hiệu chỉnh.

---

## 2.23. EC và osmotic stress

Một mô hình thẩm thấu tổng quát:

$$
\Psi_s
\approx
-RT\sum_i\phi_iC_i
$$

EC có thể dùng như proxy của salinity nhưng không thay thế thành phần ion khi cần mô hình Na+, Cl−, K+ hay Ca2+.

---

## 2.24. pH và speciation

pH điều khiển dạng hóa học của nhiều chất.

Ví dụ phosphate tồn tại theo tỷ lệ giữa:

$$
H_2PO_4^-
$$

và:

$$
HPO_4^{2-}
$$

tùy pH.

Điều này ảnh hưởng:
- uptake;
- sorption;
- precipitation.

---

## 2.25. pH và micronutrient

Khả dụng của Fe, Mn, Zn, Cu thường thay đổi mạnh theo pH.

Do đó không được dùng một “pH optimum” chung cho mọi nutrient.

---

## 2.26. pH vùng rễ do cây điều chỉnh

Root proton balance có thể làm thay đổi rhizosphere pH.

Ví dụ uptake cation và anion không cân bằng có thể làm thay đổi H+ flux.

Một biểu diễn:

$$
J_H
=
f(
J_{cation},
J_{anion},
N\ form
)
$$

---

## 2.27. Nitrate và ammonium

Hai dạng N chính:

$$
NO_3^-
$$

và:

$$
NH_4^+
$$

có:
- transporter khác nhau;
- yêu cầu assimilation khác nhau;
- tác động khác lên rhizosphere pH;
- ưu thế khác nhau theo redox và crop.

---

## 2.28. Mineralization của N

Một reduced first-order model:

$$
\frac{dN_{org}}{dt}
=
-k_{min}N_{org}
$$

$$
R_{min,N}
=
k_{min}N_{org}
f(T,\theta,pH,O_2)
$$

Đây là mô hình rút gọn; soil organic matter dynamics thực tế phức tạp hơn.

---

## 2.29. Nitrification

Sơ đồ:

$$
NH_4^+
\rightarrow
NO_2^-
\rightarrow
NO_3^-
$$

Quá trình phụ thuộc mạnh O₂, temperature, pH và microbial activity.

---

## 2.30. Denitrification

Trong điều kiện thiếu O₂:

$$
NO_3^-
\rightarrow
NO_2^-
\rightarrow
NO
\rightarrow
N_2O
\rightarrow
N_2
$$

Không dùng Eh đơn lẻ như proxy tuyệt đối cho tốc độ denitrification.

---

## 2.31. O₂ vùng rễ

O₂ gas trong đất và dissolved oxygen trong dung dịch ảnh hưởng respiration rễ.

Một saturation function:

$$
R_{O_2}
=
R_{O_2,\max}
\frac{C_{O_2}}
{K_{O_2}+C_{O_2}}
$$

---

## 2.32. Diffusion O₂

$$
J_{O_2}
=
-D_{O_2,eff}\nabla C_{O_2}
$$

Trong đất ngập, gas diffusion giảm mạnh so với đất thoáng khí.

---

## 2.33. Eh

Redox potential:

$$
E_h
=
E^0
+
\frac{RT}{nF}
\ln\frac{a_{Ox}}{a_{Red}}
$$

Eh là một chỉ báo trạng thái oxy hóa–khử nhưng không đồng nhất với:

$$
C_{O_2}
$$

---

## 2.34. Chuỗi khử trong đất ngập

Khi O₂ cạn, electron acceptor có thể chuyển dần qua:

$$
O_2
\rightarrow
NO_3^-
\rightarrow
Mn(IV)
\rightarrow
Fe(III)
\rightarrow
SO_4^{2-}
\rightarrow
CO_2
$$

Thứ tự là nguyên lý tổng quát; threshold Eh cụ thể phụ thuộc hệ đất.

---

## 2.35. Fe và Mn trong đất ngập

Reduction có thể làm tăng tính hòa tan của Fe và Mn.

Điều này đặc biệt quan trọng trong mô hình lúa vì:
- toxicity;
- nutrient interaction;
- root oxidation;
- iron plaque.

---

## 2.36. Radial oxygen loss

Với cây có aerenchyma:

$$
J_{ROL}
=
P_{ROL}
(C_{O_2,root}-C_{O_2,soil})
$$

ROL làm thay đổi chemistry sát bề mặt rễ.

---

## 2.37. Aerenchyma

Aerenchyma fraction:

$$
\phi_{aer}
=
\frac{A_{gas}}{A_{root}}
$$

Đây là trait quan trọng của lúa trong đất ngập.

---

## 2.38. Nhiệt độ vùng rễ

Root-zone temperature khác air temperature.

Nó ảnh hưởng:
- hydraulic conductivity;
- respiration;
- nutrient uptake;
- root growth;
- enzyme kinetics;
- microbial activity.

---

## 2.39. Arrhenius response

$$
k(T)
=
k_{ref}
\exp
\left[
-\frac{E_a}{R}
\left(
\frac1T-\frac1{T_{ref}}
\right)
\right]
$$

Dạng này phù hợp trong miền nhiệt độ không gây damage mạnh.

---

## 2.40. Q10

Một empirical response:

$$
R(T)
=
R_{ref}
Q_{10}^{(T-T_{ref})/10}
$$

Không mặc định:

$$
Q_{10}=2
$$

cho mọi process.

---

## 2.41. Chất hữu cơ

Một pool đơn giản:

$$
\frac{dOM_{labile}}{dt}
=
Input
-
k_{dec}OM_{labile}
$$

Decomposition phụ thuộc:
- T;
- water;
- O₂;
- substrate quality;
- microbial activity.

---

## 2.42. C:N:P stoichiometry đất

Không nên mô hình mineralization mà bỏ qua tỷ lệ C:N:P.

Một khung microbial demand:

$$
Demand_N
=
\frac{C_{assimilated}}
{CN_{microbe}}
$$

Nếu substrate N thấp hơn demand, immobilization có thể tăng.

---

## 2.43. Root exudation

Rễ giải phóng:
- sugars;
- amino acids;
- organic acids;
- mucilage;
- secondary metabolites.

Một flux:

$$
J_{exu}
=
f(
C_{status},
P_{status},
root\ age,
stress
)
$$

Exudation có chi phí carbon.

---

## 2.44. Rhizosphere pH

Root exudates và proton flux có thể làm:

$$
pH_{rhizo}\neq pH_{bulk}
$$

Do đó sampling bulk soil có thể bỏ sót trạng thái thực sát rễ.

---

## 2.45. Rhizosphere redox

Tương tự:

$$
Eh_{rhizo}\neq Eh_{bulk}
$$

đặc biệt quanh rễ lúa có ROL.

---

## 2.46. Microbiome

Ở mức cơ chế, microbiome có thể ảnh hưởng:
- mineralization;
- immobilization;
- N fixation;
- P mobilization;
- pathogen suppression;
- hormone-like signaling.

Một reduced microbial pool:

$$
\frac{dM_{mic}}{dt}
=
Growth_{mic}
-
Death_{mic}
$$

---

## 2.47. Mycorrhiza

Phosphate uptake có thể tách:

$$
U_P
=
U_{P,root}
+
U_{P,myc}
$$

Nhưng cần accounting carbon cost:

$$
C_{cost,myc}
=
f(U_{P,myc},colonization)
$$

---

## 2.48. Tương tác K–Na

Competition có thể mô tả bằng một interaction factor:

$$
U_K^{eff}
=
U_KF_{K,Na}
$$

với:

$$
0\le F_{K,Na}\le1
$$

nếu dữ liệu hỗ trợ.

Không dùng một threshold K/Na phổ quát.

---

## 2.49. Tương tác Ca–Na

Na cao có thể ảnh hưởng:
- membrane integrity;
- Ca signaling;
- cell wall;
- selectivity.

VECrop nên tách osmotic stress khỏi ion-specific toxicity.

---

## 2.50. Phosphate precipitation

P có thể bị cố định qua:
- Ca compounds ở pH cao;
- Fe/Al interactions ở pH thấp;
- sorption bề mặt khoáng.

Do đó total P không bằng solution Pi.

---

## 2.51. Salinity: hai cơ chế chính

Phải tách:

$$
osmotic\ stress
$$

và:

$$
ion\ toxicity/imbalance
$$

Không dùng một scalar EC duy nhất nếu mục tiêu là mechanistic salinity module.

---

## 2.52. Na và Cl

Các ion salinity chính thường gồm:

$$
Na^+,\ Cl^-
$$

nhưng phản ứng cây phụ thuộc:
- exclusion;
- sequestration;
- tissue tolerance;
- K retention;
- Ca status.

---

## 2.53. Bicarbonate và alkalinity

Trong thủy canh và irrigation water, bicarbonate ảnh hưởng:
- pH stability;
- nutrient availability;
- acid requirement.

Không nên dùng EC để đại diện alkalinity.

---

## 2.54. Dung dịch dinh dưỡng

Một nutrient solution phải được mô tả bằng vector ion:

$$
\mathbf C_{sol}
=
[C_{NO_3},C_{NH_4},C_{K},C_{Ca},C_{Mg},C_{P},C_{S},\ldots]^T
$$

EC chỉ là một observation tổng hợp.

---

## 2.55. Cân bằng tank thủy canh

Với ion \(i\):

$$
\frac{dM_{i,tank}}{dt}
=
F_{i,in}
-
U_i
-
F_{i,drain}
+
F_{i,return}
$$

Nếu volume thay đổi:

$$
C_i=\frac{M_i}{V}
$$

phải cập nhật đồng thời.

---

## 2.56. Dissolved oxygen trong hydroponics

DO phụ thuộc:
- temperature;
- aeration;
- root respiration;
- microbial demand;
- water movement.

Root-zone hypoxia vẫn có thể xảy ra trong hệ giàu nước.

---

## 2.57. Root-zone temperature trong hydroponics

Nhiệt độ dung dịch ảnh hưởng:
- DO saturation;
- respiration;
- uptake;
- root disease risk.

Do đó cần đo riêng với air temperature.

---

## 2.58. Lúa

Trong lúa:
- flooded soil;
- low redox;
- NH4+ thường có vai trò lớn;
- aerenchyma và ROL quan trọng;
- Fe/Mn chemistry cần theo dõi;
- AWD tạo dao động redox.

---

## 2.59. Ngô

Trong ngô:
- root depth lớn hơn;
- soil drying quan trọng;
- nitrate transport thường đáng kể;
- coupling soil water–VPD mạnh;
- hypoxia do waterlogging gây stress rõ.

---

## 2.60. Xà lách

Trong xà lách:
- hệ rễ nông;
- root-zone temperature rất quan trọng;
- hydroponic EC/pH/DO có thể là input chính;
- Ca delivery liên quan mạnh tới transpiration và tipburn.

---

## 2.61. Dữ liệu tối thiểu cho đất

Nên có:
- texture;
- bulk density;
- water retention curve;
- saturated hydraulic conductivity;
- EC;
- pH;
- soil water;
- temperature;
- available N/P/K;
- irrigation/fertilization history.

---

## 2.62. Dữ liệu tối thiểu cho hydroponics

Nên có:
- volume tank;
- EC;
- pH;
- DO;
- root-zone temperature;
- ion composition nếu có;
- irrigation/flow rate;
- drainage;
- nutrient addition history.

---

## 2.63. Sensor QC

Mỗi sensor cần:
- calibration date;
- range check;
- drift check;
- missing-data flag;
- timestamp;
- spatial location/depth.

---

## 2.64. Mô hình sai số cảm biến

Một observation model:

$$
y_{obs}=y_{true}+\epsilon
$$

Nếu giả định Gaussian phù hợp:

$$
\epsilon\sim\mathcal N(0,\sigma_{sensor}^2)
$$

Không mặc định Gaussian nếu dữ liệu có outlier hoặc bias.

---

## 2.65. Spatial variability

Với đất không đồng nhất:

$$
X=X(x,y,z,t)
$$

Không nên dùng một cảm biến duy nhất đại diện cả ruộng nếu spatial variability lớn.

---

## 2.66. Temporal resolution

Sampling interval phải phù hợp process.

Ví dụ:
- soil water: phút–giờ;
- EC/pH hydroponic: phút–giờ;
- tissue nutrient: ngày–tuần;
- biomass: destructive interval.

---

## 2.67. Missing data

Không tự động nội suy dài nếu process thay đổi nhanh.

Có thể dùng:
- linear interpolation cho gap ngắn;
- state-space filtering;
- model-based imputation.

Phải giữ flag dữ liệu gốc và dữ liệu suy ra.

---

## 2.68. Data assimilation

Một dạng state-space:

$$
x_{t+1}
=
f(x_t,u_t,\theta)
+
\omega_t
$$

$$
y_t
=
h(x_t)
+
\nu_t
$$

Có thể dùng Kalman/EnKF/particle filter tùy cấu trúc mô hình.

---

## 2.69. Boundary conditions cho VECrop

Đầu ra Chương 2 nên chuyển thành:

$$
\{\Psi_{soil},C_i,T_{root},O_2,Eh\}
$$

để cấp cho:
- root hydraulics;
- nutrient uptake;
- respiration;
- ion homeostasis;
- redox.

---

## 2.70. H_env chỉ là reduced diagnostic

Nếu cần một index môi trường:

$$
H_{env}
=
G_{critical}
\left(
\prod_{j=1}^{m}R_j
\right)^{1/m}
$$

với:

$$
R_j\in[0,1]
$$

Đây là **VECrop proposed reduced formulation**.

Không dùng \(H_{env}\) để thay thế các module cơ chế khi đã có dữ liệu đủ.

---

## 2.71. Không double counting

Nếu salinity đã tác động qua:

$$
\Psi_s
$$

và ion-specific toxicity đã tác động qua:

$$
Na^+,\ Cl^-,K^+
$$

thì không nên nhân thêm một \(F_{EC}\) tổng quát ở cuối.

Tương tự với:
- pH;
- temperature;
- O₂;
- water stress.

---

## 2.72. Kiểm tra dimensional consistency

Ví dụ:

$$
J_i^{soil}
=
q_wC_i
-
D_{eff,i}\nabla C_i
$$

Hai vế phải có cùng đơn vị flux.

Nếu:
- \(q_w\): m s−1;
- \(C_i\): mol m−3;

thì:

$$
q_wC_i
$$

có đơn vị:

$$
mol\ m^{-2}\ s^{-1}
$$

---

## 2.73. Kiểm tra mass balance vùng rễ

Nước:

$$
Input_{water}
-
Output_{water}
-
Uptake_{water}
-
\Delta Storage
\approx0
$$

Ion:

$$
Input_i
-
Drain_i
-
Uptake_i
-
Loss_i
-
\Delta Storage_i
\approx0
$$

---

## 2.74. Calibration của soil/root-zone module

Ưu tiên hiệu chỉnh:
1. water retention;
2. hydraulic conductivity;
3. root distribution;
4. nutrient diffusion/sorption;
5. mineralization;
6. gas/redox parameters.

Không fit tất cả cùng lúc chỉ bằng yield.

---

## 2.75. Validation

Nên dùng dữ liệu độc lập về:
- soil water profile;
- EC;
- pH;
- nutrient concentration;
- root-zone temperature;
- DO/O₂;
- drainage;
- uptake.

---

## 2.76. Sensitivity analysis

Một local sensitivity:

$$
S_i
=
\frac{\partial Y}
{\partial\theta_i}
$$

Global analysis có thể dùng Morris hoặc Sobol khi cần.

---

## 2.77. Phân biệt kiến thức nền và VECrop đề xuất

### Kiến thức nền
- van Genuchten;
- Darcy–Buckingham;
- Richards equation;
- Fick diffusion;
- sorption;
- Nernst/redox;
- mineralization;
- nitrification/denitrification;
- root-zone oxygen processes.

### VECrop đề xuất
- cách chuẩn hóa \(H_{env}\);
- cách coupling root-zone states với HSY;
- lựa chọn response factors;
- cách đơn giản hóa module theo dữ liệu.

---

## 2.78. Các lỗi cần tránh

Không:
- dùng EC như nồng độ NPK;
- dùng RH thay pF;
- dùng một pH optimum cho mọi nutrient;
- dùng một Eh threshold cho mọi đất;
- lấy root-zone temperature bằng air temperature;
- dùng total nutrient như available nutrient;
- bỏ qua unit conversion;
- double count salinity/water/pH stress.

---

## 2.79. Kết luận Chương 2

Chuỗi điều kiện biên:

<div class="flow-chain">
<strong>Nước đất / dung dịch</strong> → <strong>EC – pH – nhiệt độ – O₂ – Eh – ion</strong> → <strong>Rhizosphere</strong> → <strong>Bề mặt rễ</strong> → <strong>Điều kiện cho uptake và hydraulics</strong>
</div>

Đầu ra chính của Chương 2:

$$
\boxed{
\mathbf B_{root}
=
[\Psi_{soil},C_i,T_{root},O_2,Eh,pH]^T
}
$$

được dùng làm điều kiện biên cho mô hình rễ và mạch dẫn ở các chương tiếp theo.

---

# Tài liệu nền tảng

1. Rengel Z., Cakmak I., White P.J. (eds.). **Marschner's Mineral Nutrition of Plants. 4th ed.** Academic Press, 2023.
2. van Genuchten M.Th. (1980). **A Closed-form Equation for Predicting the Hydraulic Conductivity of Unsaturated Soils.** *Soil Science Society of America Journal* 44.
3. Mualem Y. (1976). **A new model for predicting the hydraulic conductivity of unsaturated porous media.** *Water Resources Research* 12.
4. Hillel D. **Introduction to Environmental Soil Physics.** Academic Press.
5. Jury W.A., Horton R. **Soil Physics.** Wiley.
6. Marschner P., Rengel Z. **Nutrient availability in soils.** In *Marschner's Mineral Nutrition of Plants*.
7. Colmer T.D., Greenway H. Reviews on plant responses to waterlogging and root aeration.
8. Hinsinger P. Reviews on rhizosphere processes and nutrient acquisition.

> **Quy tắc VECrop:** mọi tham số vùng rễ phải có provenance theo loại đất/giá thể, crop, cultivar, depth, temperature, treatment, measurement method và unit; các giá trị chưa kiểm định phải được đánh dấu là *study-specific* hoặc *calibration parameter*.
