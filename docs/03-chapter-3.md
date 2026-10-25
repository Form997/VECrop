# Chương 3. HSY cấp tế bào – cấu trúc, chuyển hóa và điều hòa

## 3.1. Vai trò của HSY

HSY trong VECrop là **khung tích hợp trạng thái sinh học**, không phải:
- lực;
- năng lượng;
- định luật;
- hệ số năng suất phổ quát.

Ba trụ cột:

$$
\Phi_1=\text{structure / vascular integrity}
$$

$$
\Phi_2=\text{gene–protein–enzyme–transport–energy}
$$

$$
\Phi_3=\text{hormone–Ca^{2+}–ROS–MAPK–development}
$$

## 3.2. Chỉ số tế bào

$$
H_{cell}
=
w_1\Phi_1+w_2\Phi_2+w_3\Phi_3
$$

với:

$$
w_i\ge0,\qquad \sum_iw_i=1
$$

và:

$$
0\le\Phi_i\le1
$$

## 3.3. Chuẩn hóa trước khi tích hợp

Không cộng trực tiếp các đại lượng khác đơn vị.

Sigmoid:

$$
x^*=\frac{1}{1+\exp[-k(x-x_{50})]}
$$

Gaussian optimum:

$$
R(x)=
\exp\left[
-\frac{(x-\mu)^2}{2\sigma^2}
\right]
$$

Tất cả $\mu,\sigma,k,x_{50}$ phải hiệu chỉnh.

## 3.4. Phi_1: cấu trúc

Các thành phần có thể gồm:
- cellulose;
- hemicellulose;
- lignin;
- wall integrity;
- vessel anatomy;
- pit properties;
- root active area.

Một dạng:

$$
\Phi_1=\sum_k w_{1k}S_k^*
$$

Nếu một trait đã được dùng trực tiếp để tính $K_x$, không nhân nó thêm lần nữa trong $\Phi_1$.

## 3.5. Phi_2: gene–protein–enzyme–transport

Khung ban đầu:

$$
(\vec A_4+\vec B_5+\vec C_6)
=
s(S_4+S_5-S_6)
$$

Chuẩn hóa:

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

## 3.6. Regulatory logistic

$$
s_i(Q)
=
\frac{1}
{1+\exp[-(\beta_{0i}+\sum_j\beta_{ji}Q_j^*)]}
$$

## 3.7. Nối với transport capacity

$$
V_{\max,i}^{eff}
=
V_{\max,i}^{ref}
s_i(Q)
F_{stage,i}
F_{T,i}
F_{O_2,i}
$$

Gene/protein điều chỉnh **capacity**, không tạo “lực vận chuyển”.

## 3.8. H+-ATPase

H+-ATPase tạo proton motive force:

$$
\Delta p
=
\Delta\psi
-
\frac{2.303RT}{F}\Delta pH
$$

Nó không bơm nước trực tiếp.

## 3.9. Aquaporin

Có thể đưa aquaporin vào hydraulic capacity:

$$
L_{pr,eff}
=
L_{pr,0}
F_{AQP}
F_{anat}
F_{env}
$$

nhưng $F_{AQP}$ cần liên kết với expression/phosphorylation hoặc được hiệu chỉnh.

## 3.10. Phi_3: hormone và phát triển

Khung ban đầu:

$$
(\vec A_7+\vec B_8+\vec C_9)
=
y(S_7+S_8-S_9)
$$

Chuẩn hóa:

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

## 3.11. Hormone không chia cố định thành “tốt” và “xấu”

Không dùng:

$$
Auxin+GA+CK-ABA-Ethylene
$$

cho mọi tình huống.

ABA, ethylene, JA, SA có thể thúc đẩy thích nghi hoặc hạn chế tăng trưởng tùy:
- organ;
- stage;
- dose;
- stress history.

## 3.12. Hormone vector

$$
\mathbf H=
[IAA,CK,GA,ABA,ET,BR,JA,SA,SL]^T
$$

Có thể chuẩn hóa:

$$
H_h^*=\frac{H_h}{K_h+H_h}
$$

## 3.13. Hormone balance

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

## 3.14. Calcium signaling

Một transient:

$$
Ca_o(t)
=
Ca_0+\sum_kA_ke^{-(t-t_k)/\tau_k}
$$

Activation:

$$
S_{Ca}
=
\frac{[Ca^{2+}]^n}
{K_{Ca}^n+[Ca^{2+}]^n}
$$

## 3.15. ROS signaling

Không giả định ROS = 0 là tối ưu.

Một tín hiệu giảm lược:

$$
S_{ROS}
=
\frac{H_2O_2}
{K_{sig}+H_2O_2}
$$

Damage response:

$$
D_{ROS}
=
\frac{(H_2O_2/K_D)^n}
{1+(H_2O_2/K_D)^n}
$$

## 3.16. MAPK cascade

$$
MAPKKK\rightarrow MAPKK\rightarrow MAPK\rightarrow TF
$$

Dạng động:

$$
\frac{dM_3^*}{dt}
=
k_{a3}S(1-M_3^*)-k_{d3}M_3^*
$$

$$
\frac{dM_2^*}{dt}
=
k_{a2}M_3^*(1-M_2^*)-k_{d2}M_2^*
$$

$$
\frac{dM_1^*}{dt}
=
k_{a1}M_2^*(1-M_1^*)-k_{d1}M_1^*
$$

## 3.17. Gene expression

$$
\frac{dG_j}{dt}
=
k_{tr,j}F_j(TF,H,Ca,ROS)
-
k_{deg,j}G_j
$$

## 3.18. Regulator tích hợp cấp cơ quan

$$
y_o=
\sigma
\left[
\beta_0
+\sum_i\beta_iH_i^*
+\sum_{i<j}\beta_{ij}H_i^*H_j^*
+\beta_{Ca}S_{Ca}
+\beta_RS_{ROS}
+\beta_MM^*
\right]
$$

Dấu của các interaction term phải fit từ dữ liệu.

## 3.19. State-space molecular layer

$$
\frac{d\mathbf x}{dt}
=
\mathbf f(\mathbf x,\mathbf u,\boldsymbol\theta)
$$

với:

$$
\mathbf x=
[IAA,CK,GA,ABA,ET,Ca,H_2O_2,MAPK,TF,Gene]^T
$$

và:

$$
\mathbf u=
[\Psi,EC,Na,N,P,T,VPD,O_2,light]^T
$$

## 3.20. Output của lớp điều hòa

$$
\mathbf r=
[g_s,\ root\ growth,\ cell\ elongation,\ xylem\ differentiation,\ senescence,\ sink\ strength]
$$

## 3.21. Diagnostic HSY

Ở mô hình đầy đủ:

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

Không nhân $HSY_{diag}$ vào năng suất nếu các stress đã được mô hình cơ chế ở bên trong.

## 3.22. Calibration

Các trọng số và hệ số:
- không chọn tùy ý;
- phải fit hoặc có prior;
- cần kiểm tra identifiability;
- phải báo uncertainty.

## 3.23. Kết luận

Chương 3 nối:
$$
molecular\ regulation
\rightarrow
transport\ capacity
\rightarrow
organ\ function
$$

mà không biến hormone/gene thành “lực vật lý”.
