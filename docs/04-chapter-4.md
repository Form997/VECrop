# Chương 4. Thủy lực, mạch dẫn và tích hợp toàn cây

## 4.1. Thế nước và SPAC

$$
\Psi_w=\Psi_p+\Psi_s+\Psi_m+\Psi_g
$$

$$
\vec J_w=-K_h\nabla\Psi_w
$$

$$
Q_w=K_{plant}(\Psi_{soil}-\Psi_{leaf})
$$

$$
R_{tot}=R_{soil}+R_{root}+R_{xylem}+R_{leaf},
\qquad
K_{plant}=\frac{1}{R_{tot}}
$$

Trong nhiều trạng thái thoát hơi:

$$
\Psi_{soil}>\Psi_{root}>\Psi_{stem}>\Psi_{leaf}
$$

Với lúa đất ngập, thế ma trận có thể nhỏ nhưng O₂/redox vẫn giới hạn chức năng rễ. Với ngô đất khô, thế ma trận giảm và resistance tăng.

## 4.2. Thủy lực rễ – apoplast – symplast – aquaporin

$$
J_{w,r}=L_{pr,eff}(\Psi_{soil}-\Psi_{xyl})
$$

$$
Q_r=A_rL_{pr,eff}(\Psi_{soil}-\Psi_{xyl})
$$

Ba đường chính là apoplast, symplast và transcellular.

Một dạng tích hợp:

$$
\Phi_2=
w_{AQP}\Phi_{AQP}
+w_{PMA}\Phi_{PMA}
+w_{TR}\Phi_{TR}
+w_{ATP}\Phi_{ATP}
$$

H+-ATPase không bơm nước trực tiếp. Dòng nước và dòng ion phải được tách:

$$
J_w=L_{pr,eff}\Delta\Psi
$$

$$
J_i=f(C_i,V_{\max},K_m,\Delta\widetilde{\mu},pH,T,\ldots)
$$

## 4.3. Hấp thu khoáng và xylem loading

$$
U_i=A_rJ_{i,net}
$$

$$
J_i=J_{HATS,i}+J_{LATS,i}-J_{efflux,i}
$$

$$
J_{HATS,i}
=
V_{\max,H,i}
\frac{C_i}{K_{m,H,i}+C_i}
$$

Phosphate:

$$
J_P=
V_{\max,P}
\frac{C_{Pi}}{K_{m,P}+C_{Pi}}
F_{H+}F_{PHT1}
$$

K:

$$
J_{K,HAK}=
V_{\max,K}
\frac{[K^+]}{K_{m,K}+[K^+]}
$$

$$
E_K=\frac{RT}{F}\ln\frac{a_{K,out}}{a_{K,in}}
$$

Vận chuyển dọc xylem:

$$
Q_{i,xyl}
=
Q_wC_{i,xyl}
-
A_xD_i\frac{\partial C_i}{\partial z}
$$

EC không phải nồng độ của từng ion.

## 4.4. Xylem – cavitation – embolism

Poiseuille lý tưởng:

$$
Q=\frac{\pi r^4}{8\eta l}\Delta P
$$

$$
K_v=\frac{\pi r^4}{8\eta l}
$$

Dòng xylem:

$$
J_x=-K_x\frac{\partial\Psi_x}{\partial z}
$$

Conductance hữu hiệu:

$$
K_{x,eff}=K_{x,pot}F_{pit}F_{emb}F_TF_{age}
$$

$$
PLC=100\left(1-\frac{K_x}{K_{x,\max}}\right)
$$

Một vulnerability curve dạng Weibull:

$$
PLC(x)=100\left[1-\exp\left(-(x/b)^c\right)\right]
$$

$$
P_{50}=-b(\ln2)^{1/c}
$$

Hydraulic capacitance:

$$
C_h=\frac{dV_w}{d\Psi}
$$

Không tự gán P50 nếu chưa có nguồn theo loài/giống.

## 4.5. Phloem – source–sink

$$
SS_o=M_oq_o
$$

Münch:

$$
Q_{ph}=K_{ph}(P_{source}-P_{sink})
$$

$$
F_C=C_{Suc}Q_{ph}
$$

Phloem loading:

$$
J_{load}
=
V_{\max,Suc}^{eff}
\frac{C_{Suc,apo}}{K_{m,Suc}+C_{Suc,apo}}
$$

Sink strength hiệu dụng:

$$
SS_o^{eff}=M_oq_oy_oH_{CN,o}
$$

Phân bổ carbon:

$$
a_o=\frac{SS_o^{eff}}{\sum_jSS_j^{eff}}
$$

$$
F_{C,o}=a_oF_C
$$

Phloem vận chuyển source → sink; hướng có thể lên hoặc xuống tùy vị trí source và sink.

## 4.6. Ghép thủy lực – khí khổng – quang hợp

$$
C_L\frac{d\Psi_L}{dt}
=
K_L(\Psi_{soil}-\Psi_L)-E
$$

$$
g_{tw}=
\left(\frac1{g_{sw}}+\frac1{g_{bw}}\right)^{-1}
$$

$$
E\simeq g_{tw}\frac{D}{P_{atm}}
$$

Medlyn:

$$
g_{sw}
=
g_0+
1.6\left(1+\frac{g_1}{\sqrt D}\right)\frac{A_n}{C_s}
$$

C3 cho lúa và xà lách:

$$
A_n=\min(A_c,A_j,A_p)-R_d
$$

$$
A_c=
V_{cmax}
\frac{C_c-\Gamma^*}{C_c+K_c(1+O/K_o)}
$$

$$
A_j=
J\frac{C_c-\Gamma^*}{4(C_c+2\Gamma^*)}
$$

Ngô cần module C4 riêng:

$$
V_p=V_{pmax}\frac{C_m}{C_m+K_p}
$$

Tán cây:

$$
I(L)=I_0e^{-k_LL}
$$

$$
A_{can}=\int_0^{LAI}A_n(L,t)\,dL
$$

## 4.7. Cân bằng động C–N–P–K và remobilization

$$
M_i=\sum_oM_{i,o}
$$

$$
\frac{dM_{i,o}}{dt}
=
I_{i,o}
+\sum_{j\ne o}F_{i,j\to o}
-\sum_{j\ne o}F_{i,o\to j}
-L_{i,o}
$$

Carbon:

$$
\frac{dM_C}{dt}=A_C-R_m-R_g-L_C
$$

Pool:

$$
M_{i,o}=M_{i,o}^{mob}+M_{i,o}^{fix}
$$

Remobilization:

$$
F_{rem,i,o}=k_{rem,i,o}(t)M_{i,o}^{mob}
$$

Demand:

$$
Req_{i,o}=q_{i,o}^{*}(stage)\frac{dB_o}{dt}
$$

Supply:

$$
Sup_i=U_i+F_{rem,i}
$$

Satisfaction:

$$
L_i=\min\left(1,\frac{Sup_i}{Req_i+\varepsilon}\right)
$$

Reduced Liebig term chỉ dùng ở mô hình rút gọn:

$$
L_{nut}=\min(L_N,L_P,L_K)
$$

## 4.8. Hô hấp – ATP – chi phí tăng trưởng

Reduced:

$$
R_{tot}=R_G+R_M
$$

Mechanistic:

$$
R_{tot}
=
R_{biosyn}+R_{turnover}+R_{ion}+R_{Nassim}+R_{transport}+R_{other}
$$

Không dùng đồng thời hai cách để trừ lặp.

Growth respiration:

$$
R_{G,o}=G_o\left(\frac1{Y_{G,o}}-1\right)
$$

Maintenance:

$$
R_{M,o}=m_o(T)M_{met,o}
$$

$$
m_o(T)=m_{o,ref}Q_{10}^{(T-T_{ref})/10}
$$

ATP demand:

$$
ATP_{dem}=ATP_G+ATP_M+ATP_U+ATP_A+ATP_T
$$

$$
H_E=\min\left(1,\frac{ATP_{sup}}{ATP_{dem}+\varepsilon}\right)
$$

Q10 và các chi phí ATP phải được hiệu chỉnh, không coi là hằng số phổ quát.

## 4.9. O₂ – hypoxia – anoxia – Eh

$$
Eh_{soil}\neq O_{2,root}
$$

O₂:

$$
\frac{\partial C_{O_2}}{\partial t}
=
D_{O_2,eff}\nabla^2C_{O_2}
+
S_{O_2}
-
R_{O_2}
$$

$$
R_{O_2}
=
R_{O_2,\max}
\frac{C_{O_2}}{K_{O_2}+C_{O_2}}
$$

Trong hypoxia, oxidative phosphorylation giảm và fermentation tăng. Không hard-code một con số ATP/glucose duy nhất cho mọi điều kiện.

Aerenchyma:

$$
\phi_{aer}=\frac{A_{gas}}{A_{root}}
$$

Radial oxygen loss:

$$
J_{ROL}=P_{ROL}(C_{O_2,root}-C_{O_2,soil})
$$

Trong đất ngập, redox sequence phải được mô hình hóa theo điều kiện thực nghiệm, không dùng một ngưỡng Eh cố định cho mọi đất.

## 4.10. Ion – điện thế màng – pH – salinity

$$
EC\neq[Na^+],\qquad EC\neq C_i
$$

Hoạt độ:

$$
a_i=\gamma_iC_i
$$

Thế thẩm thấu:

$$
\Psi_s=-RT\sum_i\phi_iC_i
$$

Thế điện hóa:

$$
\Delta\widetilde{\mu}_i
=
RT\ln\frac{a_{i,in}}{a_{i,out}}
+
z_iF(V_{in}-V_{out})
$$

Nernst:

$$
E_i=
\frac{RT}{z_iF}
\ln\frac{a_{i,out}}{a_{i,in}}
$$

Điện thế màng:

$$
C_m\frac{dV_m}{dt}
=
-
\left(
I_{HATPase}+I_K+I_{Na}+I_{Ca}+I_{Cl}+\cdots
\right)
$$

K/Na diagnostic:

$$
R_{KNa}=\frac{a_K}{a_{Na}+\varepsilon}
$$

Không đặt một ngưỡng K/Na phổ quát.

## 4.11. ROS – redox – antioxidant – damage

ROS vector:

$$
\mathbf R_{ROS}
=
\{O_2^{\bullet-},H_2O_2,{}^1O_2,{}^\bullet OH\}
$$

Nguồn ROS:

$$
P_{ROS}=P_{chl}+P_{mit}+P_{per}+P_{RBOH}+P_{other}
$$

H2O2 balance:

$$
\frac{d[H_2O_2]}{dt}
=
P_{H_2O_2}
+\frac12v_{SOD}
-v_{CAT}
-v_{APX}
-v_{PRX}
-J_{H_2O_2}
$$

Phải tách ROS signaling khỏi oxidative damage.

Một signal index đề xuất:

$$
S_{ROS}
=
\frac{H_2O_2}{K_{sig}+H_2O_2}
$$

Damage:

$$
D_{ROS}
=
\frac{(H_2O_2/K_D)^n}{1+(H_2O_2/K_D)^n}
$$

Membrane integrity:

$$
H_{mem}=e^{-\lambda_LD_L-\lambda_PD_P}
$$

ROS bằng 0 không mặc định là trạng thái tối ưu.

## 4.12. Hormone – Ca²⁺ – ROS – MAPK

Hàm điều hòa tổng quát:

$$
y_o(t)
=
\mathcal F[
\mathbf H_o(t),
\mathbf{Ca}_o(t),
\mathbf{ROS}_o(t),
\mathbf{MAPK}_o(t),
\mathbf G_o(t),
stage]
$$

Hormone vector:

$$
\mathbf H=[IAA,CK,GA,ABA,ET,BR,JA,SA,SL]^T
$$

Hormone balance:

$$
\frac{dH_{h,o}}{dt}
=
B_{h,o}-D_{h,o}+T_{h,in,o}-T_{h,out,o}
$$

Một chuỗi ABA–stomata:

$$
ABA
\rightarrow
PYR/PYL
\rightarrow
PP2C\downarrow
\rightarrow
SnRK2/OST1
\rightarrow
RBOH
\rightarrow
ROS
$$

$$
ROS\rightarrow Ca^{2+}_{cyt}\uparrow
$$

$$
Ca^{2+}
\rightarrow
CPK/CBL-CIPK
\rightarrow
ion\ channels
$$

Calcium activation:

$$
S_{Ca}
=
\frac{[Ca^{2+}]^n}
{K_{Ca}^n+[Ca^{2+}]^n}
$$

MAPK cascade:

$$
MAPKKK\rightarrow MAPKK\rightarrow MAPK\rightarrow TF
$$

Regulator tích hợp:

$$
y_o=
\sigma\left[
\beta_0
+\sum_i\beta_iH_i^*
+\sum_{i<j}\beta_{ij}H_i^*H_j^*
+\beta_{Ca}S_{Ca}
+\beta_RS_{ROS}
+\beta_MM^*
\right]
$$

Interaction signs phải được hiệu chỉnh từ dữ liệu.

State-space:

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

$$
\mathbf u=
[\Psi,EC,Na,N,P,T,VPD,O_2,light]^T
$$

Output regulation:

$$
\mathbf r=
[g_s,\ root\ growth,\ cell\ elongation,\ xylem\ differentiation,\ senescence,\ sink\ strength]
$$

Cập nhật Process 3:

$$
\Phi_{3,o}
=
\operatorname{clip}
[
y_o(S_7^*+S_8^*-S_9^*),
0,1
]
$$

với:
- \(S_7^*\): developmental activation;
- \(S_8^*\): adaptive/stress signaling;
- \(S_9^*\): growth inhibition/damage.

Tổng HSY cấp tế bào:

$$
H_{cell}
=
w_h\Phi_{structure}
+
w_s\Phi_{metabolism}
+
w_y\Phi_{regulation}
$$

Hormone điều hòa sink strength, hydraulics và phát triển; không phải lực cơ học của mạch dẫn.

---

<div class="flow-chain">
<strong>Đất</strong> → <strong>Rễ</strong> → <strong>Xylem</strong> → <strong>Lá</strong> → <strong>Quang hợp</strong> → <strong>Phloem</strong> → <strong>Source–sink</strong> → <strong>Sinh khối</strong> → <strong>Năng suất</strong>
</div>

**Phạm vi hiện tại của giáo trình kết thúc tại mục 4.12.**
