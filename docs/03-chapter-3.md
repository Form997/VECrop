# Chương 3. HSY cấp tế bào – cấu trúc, chuyển hóa, tín hiệu và điều hòa

> **Mục tiêu:** Chương 3 xây dựng lớp tích hợp cấp tế bào–mô–cơ quan cho VECrop. HSY được dùng như một **khung chẩn đoán trạng thái**, không phải lực, năng lượng hay định luật sinh học mới. Những cơ chế sinh học nền như H+-ATPase, aquaporin, Ca2+, ROS, MAPK và hormone được mô tả theo kiến thức đã thiết lập; các hàm chuẩn hóa và tích hợp HSY được ghi rõ là **VECrop proposed formulations**.

---

## 3.1. Vì sao cần một lớp tích hợp cấp tế bào

Các quá trình môi trường từ Chương 2 chỉ mô tả điều kiện biên.

Để giải thích phản ứng của cây, cần một lớp nối:

<div class="flow-chain">
<strong>Môi trường</strong> → <strong>Màng tế bào</strong> → <strong>Protein vận chuyển</strong> → <strong>Enzyme và năng lượng</strong> → <strong>Tín hiệu</strong> → <strong>Gene expression</strong> → <strong>Phản ứng cơ quan</strong>
</div>

---

## 3.2. HSY là gì

HSY trong VECrop là một **framework tích hợp**.

Nó không phải:
- lực;
- năng lượng;
- áp suất;
- thông lượng;
- định luật sinh học phổ quát.

HSY chỉ nên dùng khi:
- các biến đã được chuẩn hóa;
- không trộn đơn vị;
- không double count;
- có dữ liệu calibration/validation.

---

## 3.3. Ba trụ cột của HSY

VECrop tách ba nhóm cơ chế:

$$
\Phi_1
=
\text{Structure / vascular integrity}
$$

$$
\Phi_2
=
\text{Gene–protein–enzyme–transport–energy}
$$

$$
\Phi_3
=
\text{Hormone–Ca^{2+}–ROS–MAPK–development}
$$

---

## 3.4. Chỉ số tổng hợp cấp tế bào

Một dạng đề xuất:

$$
H_{cell}
=
w_1\Phi_1+w_2\Phi_2+w_3\Phi_3
$$

với:

$$
w_i\ge0
$$

$$
\sum_iw_i=1
$$

và:

$$
0\le\Phi_i\le1
$$

Các trọng số phải được hiệu chỉnh.

---

## 3.5. Nguyên tắc chuẩn hóa

Không được cộng trực tiếp:

$$
gene\ expression
+
ATP
+
ABA
+
K_x
$$

vì các đại lượng khác đơn vị và khác ý nghĩa.

Cần chuyển về response dimensionless trước.

---

## 3.6. Min–max normalization

$$
x^*
=
\frac{x-x_{min}}
{x_{max}-x_{min}}
$$

Chỉ phù hợp khi:
- miền hợp lý đã biết;
- dữ liệu không có outlier cực lớn;
- response gần đơn điệu.

---

## 3.7. Logistic normalization

$$
x^*
=
\frac{1}
{1+\exp[-k(x-x_{50})]}
$$

Phù hợp khi response có dạng threshold/saturation.

---

## 3.8. Gaussian optimum

$$
R(x)
=
\exp
\left[
-\frac{(x-\mu)^2}
{2\sigma^2}
\right]
$$

Phù hợp khi có vùng tối ưu và stress ở cả hai phía.

Không dùng Gaussian chỉ vì tiện tính.

---

## 3.9. Hàm bất đối xứng

Nhiều stress có response không đối xứng.

Một dạng piecewise:

$$
R(x)=
\begin{cases}
\exp[-((x-\mu)/\sigma_L)^2],&x<\mu\\
\exp[-((x-\mu)/\sigma_R)^2],&x\ge\mu
\end{cases}
$$

với:

$$
\sigma_L\neq\sigma_R
$$

---

## 3.10. Clipping

Khi một score cần nằm trong [0,1]:

$$
\operatorname{clip}(x,0,1)
=
\min(1,\max(0,x))
$$

Clipping chỉ là thao tác số học, không phải cơ chế sinh lý.

---

## 3.11. Phi_1: cấu trúc

\(\Phi_1\) có thể bao gồm:
- cell-wall integrity;
- cellulose;
- hemicellulose;
- lignin;
- membrane integrity;
- vascular anatomy;
- pit structure;
- active root area.

Một dạng:

$$
\Phi_1
=
\sum_k
w_{1k}S_k^*
$$

---

## 3.12. Thành tế bào

Thành tế bào ảnh hưởng:
- strength;
- extensibility;
- hydraulic properties;
- xylem resistance;
- growth capacity.

Không được xem lignin cao luôn tốt.

Lignification quá mức có thể giảm extensibility của mô tăng trưởng.

---

## 3.13. Cell-wall extensibility

Một khung Lockhart-type:

$$
\frac{dV}{dt}
=
\phi
(P-Y)
$$

khi:

$$
P>Y
$$

Trong đó:
- \(\phi\): wall extensibility;
- \(P\): turgor;
- \(Y\): yield threshold.

---

## 3.14. Turgor

Turgor liên hệ với thế nước:

$$
\Psi_w
=
\Psi_p+\Psi_s
$$

ở mức tế bào giản lược.

Tăng trưởng giãn tế bào cần:
- water uptake;
- turgor;
- wall extensibility.

---

## 3.15. Membrane integrity

Membrane damage có thể ảnh hưởng:
- ion selectivity;
- proton gradient;
- signaling;
- leakage.

Một diagnostic index:

$$
H_{mem}
=
e^{-\lambda_LD_L-\lambda_PD_P}
$$

trong đó \(D_L,D_P\) là damage variables.

Đây là VECrop reduced formulation.

---

## 3.16. Aquaporin

Aquaporin điều chỉnh water permeability của màng.

Một dạng:

$$
L_{pr,eff}
=
L_{pr,0}
F_{AQP}
F_{anat}
F_{env}
$$

Trong đó \(F_{AQP}\) có thể liên hệ với:
- abundance;
- phosphorylation;
- gating;
- pH;
- Ca2+;
- ROS.

---

## 3.17. Aquaporin không phải “máy bơm nước”

Aquaporin không tạo năng lượng.

Dòng nước vẫn phụ thuộc gradient:

$$
J_w
=
L_p\Delta\Psi
$$

Aquaporin chủ yếu điều chỉnh conductance.

---

## 3.18. Phi_2: gene–protein–enzyme–transport–energy

Một dạng khung đề xuất:

$$
\Phi_{2,i}
=
\operatorname{clip}
\left[
s_i(Q)
(S_{4,i}^*+S_{5,i}^*-S_{6,i}^*),
0,1
\right]
$$

Trong đó:
- \(S_4\): gene/protein activation;
- \(S_5\): transporter/enzyme capacity;
- \(S_6\): inhibition/damage.

---

## 3.19. Regulatory function s_i

$$
s_i(Q)
=
\frac1
{1+\exp[-(\beta_{0i}+\sum_j\beta_{ji}Q_j^*)]}
$$

Đây là một **statistical/regulatory mapping**, không phải phương trình phân tử cơ bản.

---

## 3.20. Gene expression

Một mô hình động đơn giản:

$$
\frac{dG_j}{dt}
=
k_{tr,j}F_j
-
k_{deg,j}G_j
$$

Trong đó:
- \(G_j\): transcript/protein proxy;
- \(k_{tr,j}\): production/transcription rate;
- \(k_{deg,j}\): degradation rate.

---

## 3.21. Protein abundance

Nếu cần tách mRNA và protein:

$$
\frac{dP_j}{dt}
=
k_{tl,j}G_j
-
k_{pdeg,j}P_j
$$

Không giả định mRNA tỷ lệ tức thời 1:1 với protein activity.

---

## 3.22. Enzyme capacity

Một enzyme-mediated process:

$$
v
=
V_{\max}
\frac{S}{K_m+S}
$$

Trong VECrop:

$$
V_{\max}^{eff}
=
V_{\max}^{ref}
F_{protein}
F_T
F_{pH}
F_E
$$

---

## 3.23. Transporter capacity

Tương tự:

$$
V_{\max,i}^{eff}
=
V_{\max,i}^{ref}
s_i(Q)
F_{stage,i}
F_{T,i}
F_{O_2,i}
$$

Gene expression điều chỉnh capacity, không tạo “lực hút ion”.

---

## 3.24. H+-ATPase

H+-ATPase dùng ATP để bơm proton.

Chuỗi:

$$
ATP
\rightarrow
H^+\ pumping
\rightarrow
\Delta pH+\Delta\psi
\rightarrow
proton\ motive\ force
$$

---

## 3.25. Proton motive force

$$
\Delta p
=
\Delta\psi
-
\frac{2.303RT}{F}\Delta pH
$$

Proton motive force hỗ trợ:
- symport;
- antiport;
- secondary active transport.

---

## 3.26. H+-ATPase và nutrient uptake

Một conceptual coupling:

$$
ATP
\rightarrow
PMA
\rightarrow
\Delta\widetilde{\mu}_{H^+}
\rightarrow
Transporter_i
\rightarrow
J_i
$$

Không mô hình bằng cách cộng ATP trực tiếp vào flux ion.

---

## 3.27. ATP supply

Một reduced balance:

$$
ATP_{net}
=
ATP_{prod}
-
ATP_{cons}
$$

ATP production phụ thuộc:
- respiration;
- photosynthesis;
- O₂;
- substrate supply.

---

## 3.28. ATP demand

$$
ATP_{dem}
=
ATP_G
+
ATP_M
+
ATP_U
+
ATP_A
+
ATP_T
$$

Các nhóm:
- growth;
- maintenance;
- uptake;
- assimilation;
- transport.

---

## 3.29. Energy diagnostic

$$
H_E
=
\min
\left(
1,
\frac{ATP_{sup}}
{ATP_{dem}+\varepsilon}
\right)
$$

Đây là **VECrop reduced diagnostic**.

---

## 3.30. O₂ và Phi_2

Thiếu oxy tác động:

$$
O_2\downarrow
\rightarrow
oxidative\ phosphorylation\downarrow
\rightarrow
ATP\downarrow
\rightarrow
active\ transport\downarrow
$$

Do đó không nên dùng một \(F_{O_2}\) riêng nếu ATP đã được mô hình hóa đầy đủ và gây double counting.

---

## 3.31. Temperature và enzyme activity

Một dạng Arrhenius:

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

Không dùng một \(Q_{10}\) duy nhất cho mọi enzyme.

---

## 3.32. Phi_3: hormone–Ca2+–ROS–MAPK–development

Một dạng đề xuất:

$$
\Phi_{3,o}
=
\operatorname{clip}
\left[
y_o(Q,t)
(S_{7,o}^*+S_{8,o}^*-S_{9,o}^*),
0,1
\right]
$$

Trong đó:
- \(S_7\): developmental activation;
- \(S_8\): adaptive signaling;
- \(S_9\): inhibition/damage.

---

## 3.33. Hormone vector

$$
\mathbf H
=
[IAA,CK,GA,ABA,ET,BR,JA,SA,SL]^T
$$

Các hormone phải được giữ riêng trước khi tổng hợp.

---

## 3.34. Không chia hormone thành “tốt” và “xấu”

Không dùng biểu thức:

$$
Auxin+GA+CK-ABA-Ethylene
$$

cho mọi tình huống.

ABA hoặc ethylene có thể:
- hạn chế tăng trưởng;
- nhưng đồng thời tăng khả năng sống sót khi stress.

---

## 3.35. Hormone balance

$$
\frac{dH_{h,o}}{dt}
=
B_{h,o}
-
D_{h,o}
+
T_{h,in,o}
-
T_{h,out,o}
$$

Trong đó:
- \(B\): biosynthesis;
- \(D\): degradation/conjugation;
- \(T\): transport.

---

## 3.36. Auxin

Auxin liên quan:
- cell elongation;
- apical dominance;
- root initiation;
- tropism;
- vascular differentiation.

Một response phải phụ thuộc:
- concentration;
- tissue;
- developmental stage.

---

## 3.37. Cytokinin

Cytokinin liên quan:
- cell division;
- shoot signaling;
- nutrient status;
- senescence regulation.

Không xem cytokinin chỉ là “hormone tăng trưởng”.

---

## 3.38. Gibberellin

GA liên quan:
- stem elongation;
- germination;
- reproductive development.

Response phụ thuộc mạnh genotype và developmental stage.

---

## 3.39. ABA

ABA là tín hiệu quan trọng của water stress.

Chuỗi khí khổng:

$$
ABA
\rightarrow
PYR/PYL
\rightarrow
PP2C\downarrow
\rightarrow
SnRK2/OST1
$$

Sau đó:

$$
RBOH
\rightarrow
ROS
\rightarrow
Ca^{2+}
\rightarrow
ion\ channels
$$

---

## 3.40. Ethylene

Ethylene liên quan:
- senescence;
- flooding response;
- root architecture;
- stress signaling;
- fruit processes.

Trong hypoxia, ethylene signaling có vai trò thích nghi.

---

## 3.41. Brassinosteroid

BR liên quan:
- cell expansion;
- vascular development;
- growth signaling;
- stress interaction.

BR không nên được đưa vào một score tuyến tính cứng.

---

## 3.42. Jasmonate và salicylate

JA và SA liên quan mạnh đến:
- defense;
- wound response;
- pathogen signaling;
- growth-defense tradeoff.

---

## 3.43. Strigolactone

SL liên quan:
- branching;
- root architecture;
- nutrient response;
- mycorrhizal signaling.

---

## 3.44. Ca2+ signaling

Calcium cytosolic baseline thấp nhưng có transient/spike khi nhận tín hiệu.

Một transient:

$$
Ca(t)
=
Ca_0
+
\sum_k
A_ke^{-(t-t_k)/\tau_k}
$$

---

## 3.45. Calcium activation function

$$
S_{Ca}
=
\frac{[Ca^{2+}]^n}
{K_{Ca}^n+[Ca^{2+}]^n}
$$

\(n\) có thể đại diện cooperativity trong reduced model.

---

## 3.46. Calcium signature

Không chỉ amplitude quan trọng.

Tín hiệu Ca2+ còn có thể mã hóa qua:
- frequency;
- duration;
- spatial localization.

Do đó một scalar \(S_{Ca}\) chỉ là approximation.

---

## 3.47. ROS vector

$$
\mathbf R_{ROS}
=
\{
O_2^{\bullet-},
H_2O_2,
{}^1O_2,
{}^\bullet OH
\}
$$

Không gộp mọi ROS thành một chất duy nhất nếu cần cơ chế.

---

## 3.48. Nguồn ROS

$$
P_{ROS}
=
P_{chl}
+
P_{mit}
+
P_{per}
+
P_{RBOH}
+
P_{other}
$$

Các nguồn gồm:
- chloroplast;
- mitochondria;
- peroxisome;
- NADPH oxidase;
- apoplast.

---

## 3.49. ROS không chỉ là damage

ROS ở mức thích hợp là signaling molecule.

Vì vậy:

$$
ROS=0
$$

không mặc định là tối ưu sinh lý.

---

## 3.50. H2O2 balance

$$
\frac{d[H_2O_2]}{dt}
=
P_{H_2O_2}
+
\frac12v_{SOD}
-
v_{CAT}
-
v_{APX}
-
v_{PRX}
-
J_{H_2O_2}
$$

---

## 3.51. SOD

$$
2O_2^{\bullet-}
+
2H^+
\rightarrow
H_2O_2+O_2
$$

SOD chuyển superoxide thành H2O2.

---

## 3.52. Catalase

$$
2H_2O_2
\rightarrow
2H_2O+O_2
$$

---

## 3.53. Ascorbate–glutathione network

Ở mức nâng cao cần theo dõi:
- APX;
- AsA;
- DHA;
- GSH;
- GSSG;
- GR.

Không nên biến antioxidant capacity thành một scalar duy nhất nếu nghiên cứu redox mechanism.

---

## 3.54. Fenton reaction

$$
Fe^{2+}
+
H_2O_2
\rightarrow
Fe^{3+}
+
OH^-
+
{}^\bullet OH
$$

Hydroxyl radical có khả năng gây damage mạnh.

---

## 3.55. ROS signaling index

Một reduced signal index:

$$
S_{ROS}
=
\frac{H_2O_2}
{K_{sig}+H_2O_2}
$$

---

## 3.56. ROS damage index

$$
D_{ROS}
=
\frac{(H_2O_2/K_D)^n}
{1+(H_2O_2/K_D)^n}
$$

Nên tách signal và damage.

---

## 3.57. MAPK cascade

Canonical structure:

$$
MAPKKK
\rightarrow
MAPKK
\rightarrow
MAPK
\rightarrow
TF/substrate
$$

---

## 3.58. Dynamic MAPK model

$$
\frac{dM_3^*}{dt}
=
k_{a3}S(1-M_3^*)
-
k_{d3}M_3^*
$$

$$
\frac{dM_2^*}{dt}
=
k_{a2}M_3^*(1-M_2^*)
-
k_{d2}M_2^*
$$

$$
\frac{dM_1^*}{dt}
=
k_{a1}M_2^*(1-M_1^*)
-
k_{d1}M_1^*
$$

---

## 3.59. Transcription factor

Một TF activity:

$$
TF^*
=
f(MAPK,H,Ca,ROS)
$$

Gene regulation:

$$
\frac{dG_j}{dt}
=
k_{tr,j}F_j(TF^*)
-
k_{deg,j}G_j
$$

---

## 3.60. Crosstalk

Hormone, Ca2+, ROS và MAPK không hoạt động độc lập.

Ví dụ ABA drought signaling có thể nối:

$$
ABA
\rightarrow
ROS
\leftrightarrow
Ca^{2+}
\rightarrow
kinase
\rightarrow
ion\ channel
$$

---

## 3.61. Regulatory function y_o

Một VECrop reduced formulation:

$$
y_o
=
\sigma
\left[
\beta_0
+
\sum_i\beta_iH_i^*
+
\sum_{i<j}\beta_{ij}H_i^*H_j^*
+
\beta_{Ca}S_{Ca}
+
\beta_RS_{ROS}
+
\beta_MM^*
\right]
$$

Các coefficient phải được fit.

---

## 3.62. Interaction term

Ví dụ:

$$
\beta_{ABA,Ca}
ABA^*S_{Ca}
$$

có thể mô tả synergy/antagonism.

Không tự đặt dấu dương/âm nếu chưa có dữ liệu.

---

## 3.63. State-space molecular layer

$$
\frac{d\mathbf x}{dt}
=
\mathbf f(\mathbf x,\mathbf u,\boldsymbol\theta)
$$

với:

$$
\mathbf x
=
[IAA,CK,GA,ABA,ET,Ca,H_2O_2,MAPK,TF,Gene]^T
$$

---

## 3.64. Input vector molecular layer

$$
\mathbf u
=
[\Psi,EC,Na,N,P,T,VPD,O_2,light]^T
$$

---

## 3.65. Output regulatory layer

$$
\mathbf r
=
[
g_s,
root\ growth,
cell\ elongation,
xylem\ differentiation,
senescence,
sink\ strength
]^T
$$

---

## 3.66. Nối Phi_2 và Phi_3

Transport capacity có thể chịu điều hòa:

$$
V_{\max,i}^{eff}
=
V_{\max,i}^{ref}
\Phi_2
\Phi_3
$$

chỉ khi không double count cùng regulator trong hai lớp.

---

## 3.67. Organ specificity

Cùng hormone có thể gây response khác ở:
- root;
- leaf;
- stem;
- reproductive organ.

Do đó:

$$
y_o\neq y_{o'}
$$

cho hai cơ quan khác nhau.

---

## 3.68. Stage specificity

Parameter phụ thuộc giai đoạn:

$$
\theta=\theta(stage)
$$

Ví dụ:
- seedling;
- vegetative;
- reproductive;
- senescence.

---

## 3.69. Genotype specificity

$$
\boldsymbol\theta_G
\neq
\boldsymbol\theta_{G'}
$$

Không chuyển parameter regulator giữa cultivar nếu chưa kiểm định.

---

## 3.70. Stress history

Response hiện tại có thể phụ thuộc quá khứ:

$$
R(t)
=
f(
X(t),
\int_{t-\tau}^{t}Stress(s)\,ds
)
$$

đây là memory/hysteresis.

---

## 3.71. Hysteresis

Ví dụ recovery sau drought có thể không quay về cùng trajectory khi water potential trở lại.

Do đó:

$$
Response_{drying}
\neq
Response_{rewetting}
$$

---

## 3.72. Priming

Stress nhẹ trước đó có thể thay đổi response sau.

Một state variable:

$$
P_{memory}(t)
$$

có thể được thêm khi có dữ liệu.

---

## 3.73. Growth–defense tradeoff

Một conceptual allocation:

$$
C_{avail}
=
C_{growth}
+
C_{defense}
+
C_{storage}
$$

Nếu defense tăng, growth có thể giảm dù survival tăng.

---

## 3.74. Carbon–energy coupling

Không nên đánh giá hormone hoặc defense tách khỏi carbon status.

Một energy constraint:

$$
R_{process}^{eff}
=
R_{process}
H_E
$$

chỉ dùng nếu energy limitation chưa được giải trực tiếp bên trong process.

---

## 3.75. Sugar signaling

Sucrose/glucose/T6P có thể đóng vai trò:
- substrate;
- status signal;
- source–sink regulator.

Không đồng nhất sugar concentration với carbon flux.

---

## 3.76. SnRK1 và TOR

Một conceptual relation:

$$
Low\ energy
\rightarrow
SnRK1\uparrow
$$

$$
High\ carbon/nutrient
\rightarrow
TOR\uparrow
$$

Đây là kiến thức signaling nền; mô hình định lượng cần calibration.

---

## 3.77. Sugar–HSY coupling

Một reduced sugar status:

$$
S_C
=
\frac{C_{sugar}}
{K_C+C_{sugar}}
$$

Có thể đi vào regulatory function:

$$
y_o
=
f(H,Ca,ROS,MAPK,S_C)
$$

---

## 3.78. Không double count carbon status

Nếu source–sink model đã dùng sucrose flux trực tiếp, không nhân lại \(S_C\) vào growth nếu nó mô tả cùng limitation.

---

## 3.79. Phi_3 theo cơ quan

Một VECrop formulation:

$$
\Phi_{3,o}
=
\operatorname{clip}
[
y_o
(
S_{dev,o}
+
S_{adapt,o}
-
S_{damage,o}
),
0,1
]
$$

---

## 3.80. Diagnostic HSY

Một dạng tổng hợp toàn cây:

$$
HSY_{diag}
=
\left[
H_{env}^{w_e}
H_{cell}^{w_c}
H_{hyd}^{w_h}
H_{ion}^{w_i}
H_E^{w_a}
H_{redox}^{w_r}
H_{photo}^{w_p}
H_{sink}^{w_s}
\right]^{1/\sum w}
$$

Đây là **diagnostic index**, không phải yield equation.

---

## 3.81. Không nhân HSY vào yield hai lần

Nếu:

$$
Y_{mechanistic}
=
f(
water,
nutrient,
photosynthesis,
respiration,
sink
)
$$

thì không nên:

$$
Y
=
Y_{mechanistic}
\times
HSY_{diag}
$$

nếu các stress đã có trong \(Y_{mechanistic}\).

---

## 3.82. Reduced HSY model

Chỉ trong mô hình rút gọn:

$$
Y_{red}
=
Y_{pot}
C_D
HSY_{red}
$$

và phải chứng minh \(HSY_{red}\) không chứa lại cùng response đã có trong \(C_D\).

---

## 3.83. Weight estimation

Có thể fit weight:

$$
\hat{\mathbf w}
=
\arg\min_{\mathbf w}
Loss(\mathbf w)
$$

với constraint:

$$
w_i\ge0,\qquad\sum_iw_i=1
$$

---

## 3.84. Regularization

Để tránh overfitting:

$$
Loss_{reg}
=
Loss
+
\lambda\|\mathbf w\|_2^2
$$

hoặc sparsity penalty khi phù hợp.

---

## 3.85. Identifiability

Nếu hai state luôn biến đổi cùng nhau, có thể không phân biệt được coefficient riêng.

Cần kiểm tra:
- parameter correlation;
- profile likelihood;
- posterior uncertainty;
- sensitivity.

---

## 3.86. Sensitivity

Local:

$$
S_i
=
\frac{\partial H_{cell}}
{\partial\theta_i}
$$

Global:
- Morris;
- Sobol;
- variance decomposition.

---

## 3.87. Uncertainty propagation

$$
\mathbf X^{(k)},
\boldsymbol\theta^{(k)}
\rightarrow
H_{cell}^{(k)}
$$

Nên báo:
- median;
- quantile;
- credible/confidence interval.

---

## 3.88. Measurement layer

Các dữ liệu có thể dùng:
- qPCR/RNA;
- proteomics;
- enzyme activity;
- ATP/ADP;
- hormone assay;
- Ca imaging;
- ROS/redox probes;
- membrane leakage;
- antioxidant activity.

---

## 3.89. Không đồng nhất omics với flux

Gene expression cao không đảm bảo flux cao.

Flux còn phụ thuộc:
- substrate;
- enzyme activation;
- energy;
- membrane gradient;
- product inhibition.

---

## 3.90. Fluxomics

Một flux \(v_i\) có thể cần được suy từ:
- isotope labeling;
- mass balance;
- kinetic model.

Không suy flux chỉ từ transcript abundance.

---

## 3.91. Temporal scale

Signal:
- giây–phút.

Gene expression:
- phút–giờ.

Protein:
- giờ–ngày.

Growth:
- giờ–ngày.

Yield:
- tuần–tháng.

VECrop cần tránh dùng cùng timestep cho mọi lớp nếu không phù hợp.

---

## 3.92. Multi-rate integration

Có thể dùng:
- fast signaling timestep;
- slower metabolism timestep;
- daily growth timestep.

Một coupling:

$$
\mathbf x_{fast}
\rightarrow
\overline{\mathbf r}_{day}
\rightarrow
Growth_{day}
$$

---

## 3.93. Numerical stability

Nếu dynamic model stiff:

$$
\frac{d\mathbf x}{dt}
=
\mathbf f(\mathbf x)
$$

có thể cần implicit solver hoặc adaptive timestep.

---

## 3.94. Positivity constraints

Các pool vật chất:

$$
M_i\ge0
$$

Hormone concentration:

$$
H_i\ge0
$$

ROS concentration:

$$
[ROS]\ge0
$$

Solver tạo giá trị âm phải được kiểm tra.

---

## 3.95. Bound constraints cho score

$$
0\le\Phi_i\le1
$$

$$
0\le H_{cell}\le1
$$

nếu định nghĩa score theo miền này.

---

## 3.96. Test case baseline

Trong điều kiện reference:

$$
\Phi_1\approx1
$$

$$
\Phi_2\approx1
$$

$$
\Phi_3\approx1
$$

không có nghĩa mọi pathway hoạt động tối đa; chỉ có nghĩa trạng thái gần reference optimum của model.

---

## 3.97. Test case hypoxia

Kỳ vọng:
- ATP supply giảm;
- PMA capacity giảm;
- active uptake giảm;
- ROS/redox thay đổi;
- ethylene signaling thay đổi.

Không nên chỉ giảm một scalar \(H_{cell}\).

---

## 3.98. Test case salinity

Kỳ vọng:
- osmotic effect;
- Na/K imbalance;
- membrane potential change;
- ROS;
- ABA;
- Ca signaling.

Cần tránh phạt EC + Na + ROS + ABA nhiều lần cho cùng effect.

---

## 3.99. Test case drought

Kỳ vọng:
- water potential giảm;
- ABA tăng;
- Ca/ROS signaling;
- stomatal response;
- growth inhibition;
- source–sink change.

---

## 3.100. Test case nutrient deficiency

Ví dụ N deficiency:
- uptake limitation;
- amino acid/protein status;
- photosynthetic capacity;
- hormone/sugar signaling;
- senescence.

Không chỉ giảm “N score”.

---

## 3.101. Lúa

Các điểm cần chú ý:
- hypoxia tolerance;
- aerenchyma;
- ethylene;
- ROS/redox;
- NH4+ metabolism;
- tillering signal.

---

## 3.102. Ngô

Các điểm:
- C4 energy demand;
- drought signaling;
- deep root regulation;
- strong reproductive sink;
- ABA–stomata coupling.

---

## 3.103. Xà lách

Các điểm:
- shallow roots;
- high leaf expansion;
- Ca delivery;
- tipburn;
- root-zone hypoxia;
- temperature sensitivity.

---

## 3.104. Parameter provenance

Mỗi parameter cần:
- species;
- cultivar;
- tissue;
- stage;
- treatment;
- measurement method;
- unit;
- source;
- uncertainty.

---

## 3.105. Calibration hierarchy

Không fit mọi thứ bằng yield.

Thứ tự nên là:
1. molecular/signaling observable;
2. enzyme/transporter activity;
3. organ response;
4. whole-plant response;
5. yield.

---

## 3.106. Validation

Một HSY model cần validation độc lập với:
- stress treatment;
- cultivar;
- environment;
- time series.

---

## 3.107. Ablation test

Tắt từng thành phần:

$$
\Delta E_k
=
Error_{without\ k}
-
Error_{full}
$$

Nếu bỏ module mà error không tăng, module có thể chưa cần thiết hoặc không identifiable.

---

## 3.108. Causal caution

Một correlation:

$$
corr(X,Y)\neq0
$$

không chứng minh:

$$
X\rightarrow Y
$$

Cần dùng:
- perturbation;
- intervention;
- mechanistic evidence;
- temporal ordering.

---

## 3.109. Phân biệt signal và state

Ví dụ:
- ABA concentration: state;
- ABA receptor activation: signaling state;
- stomatal closure: response.

Không gộp cả ba thành một biến duy nhất nếu cần cơ chế.

---

## 3.110. Phân biệt capacity và flux

$$
V_{\max}
$$

là capacity.

$$
J
$$

là flux.

Có thể:

$$
V_{\max}\uparrow
$$

nhưng:

$$
J\downarrow
$$

nếu substrate hoặc energy thấp.

---

## 3.111. Phân biệt damage và adaptation

Cùng một stress có thể làm:
- adaptation tăng;
- damage tăng.

Do đó:

$$
S_{adapt}
\neq
1-D_{damage}
$$

trong mọi trường hợp.

---

## 3.112. Không gán chiều hướng tuyệt đối cho hormone

Không mặc định:
- ABA luôn âm;
- auxin luôn dương;
- ethylene luôn âm.

Dấu phải phụ thuộc process cụ thể.

---

## 3.113. Không gán “lực” cho gene/hormone

Không viết:

$$
Force
=
Gene
+
Hormone
+
ATP
$$

vì sai về vật lý.

Đúng hơn là:

$$
Regulatory\ state
\rightarrow
parameter/capacity
\rightarrow
physical\ flux
$$

---

## 3.114. Cầu nối từ Chương 3 sang Chương 4

Đầu ra Chương 3 nên là các regulator/capacity:

$$
\mathbf R_{cell}
=
[
L_{pr,eff},
V_{\max,i}^{eff},
g_{channel},
H_E,
S_{ROS},
S_{Ca},
y_o
]^T
$$

Các biến này sẽ được đưa vào mô hình:
- root hydraulics;
- ion uptake;
- xylem/phloem;
- stomata;
- source–sink.

---

## 3.115. Kết luận Chương 3

Chuỗi tích hợp:

<div class="flow-chain">
<strong>Môi trường</strong> → <strong>Màng & cấu trúc</strong> → <strong>Protein/Enzyme</strong> → <strong>Năng lượng</strong> → <strong>Hormone–Ca²⁺–ROS–MAPK</strong> → <strong>Gene regulation</strong> → <strong>Capacity/response cơ quan</strong>
</div>

HSY cấp tế bào chỉ có giá trị khi:
- dimensionless;
- có provenance;
- không double count;
- có uncertainty;
- có validation.

---

# Tài liệu nền tảng

1. Taiz L. et al. **Plant Physiology and Development.** Oxford University Press / Sinauer.
2. Buchanan B.B., Gruissem W., Jones R.L. **Biochemistry & Molecular Biology of Plants.** Wiley.
3. Rengel Z., Cakmak I., White P.J. (eds.). **Marschner's Mineral Nutrition of Plants. 4th ed.** Academic Press, 2023.
4. Maurel C. et al. Reviews on plant aquaporins and root water transport.
5. Palmgren M.G. Reviews on plasma membrane H+-ATPases in plants.
6. Zhu J.K. Reviews on abiotic stress signaling.
7. Mittler R. Reviews on ROS signaling and oxidative stress in plants.
8. Waszczak C., Carmody M., Kangasjärvi J. Reviews on ROS signaling.
9. Boudsocq M., Sheen J. Reviews on Ca2+-dependent protein kinases.
10. Xu J., Zhang S. Reviews on MAPK cascades in plant stress signaling.
11. Cutler S.R. et al. Reviews on ABA signaling.
12. Li G.S., Zhao Y. Reviews on HXK/SnRK1/TOR sugar signaling.

> **Quy tắc VECrop:** các coefficient logistic, weighting factor, threshold, interaction term và score function trong Chương 3 chỉ được xem là **proposed/calibration parameters** cho đến khi được kiểm định bằng dữ liệu độc lập.
