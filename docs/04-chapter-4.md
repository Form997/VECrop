# Chương 4. Thủy lực, vận chuyển dài hạn và tích hợp toàn cây

## 4.1. Thế nước và SPAC

$$
\Psi_w=\Psi_p+\Psi_s+\Psi_m+\Psi_g
$$

$$
\vec J_w=-K_h\nabla\Psi_w
$$

Trong nhiều trạng thái thoát hơi:

$$
\Psi_{soil}>\Psi_{root}>\Psi_{stem}>\Psi_{leaf}
$$

Không tuyệt đối hóa thứ tự này cho mọi thời điểm.

## 4.2. Thủy lực rễ và aquaporin

Ba đường chính:
- apoplast;
- symplast;
- transcellular.

$$
J_{w,r}
=
L_{pr,eff}
(\Psi_{soil}-\Psi_{xyl})
$$

$$
Q_r=A_rL_{pr,eff}(\Psi_{soil}-\Psi_{xyl})
$$

$$
R_{root}
\approx
\sum_j
\frac1{K_{apo,j}+K_{sym,j}+K_{trans,j}}
$$

H+-ATPase và aquaporin phải được tách chức năng.

## 4.3. Hấp thu khoáng

$$
U_i=A_rJ_{i,net}
$$

$$
J_i
=
J_{HATS,i}
+
J_{LATS,i}
-
J_{efflux,i}
$$

$$
J_{HATS,i}
=
V_{\max,H,i}
\frac{C_i}{K_{m,H,i}+C_i}
$$

Phosphate:

$$
J_P
=
V_{\max,P}
\frac{C_{Pi}}{K_{m,P}+C_{Pi}}
F_{H+}F_{PHT1}
$$

K:

$$
J_{K,HAK}
=
V_{\max,K}
\frac{[K^+]}{K_{m,K}+[K^+]}
$$

Channel form:

$$
I_K=g_K(V_m-E_K)
$$

$$
E_K=
\frac{RT}{F}
\ln
\frac{a_{K,out}}{a_{K,in}}
$$

## 4.4. Xylem loading và vận chuyển ion

$$
Q_{i,xyl}
=
Q_wC_{i,xyl}
-
A_xD_i
\frac{\partial C_i}{\partial z}
$$

Với Ca:

$$
Q_{Ca,x}
=
Q_wC_{Ca,x}
+
Q_{Ca,load}
$$

Ca có phloem mobility hạn chế tương đối so với nhiều nutrient khác, đặc biệt quan trọng với tipburn ở xà lách.

## 4.5. Xylem và cavitation

Poiseuille lý tưởng:

$$
Q=
\frac{\pi r^4}{8\eta l}\Delta P
$$

$$
K_v=
\frac{\pi r^4}{8\eta l}
$$

Mạch thật còn có pit, network và geometry resistance.

$$
J_x
=
-K_x
\frac{\partial\Psi_x}{\partial z}
$$

$$
K_{x,eff}
=
K_{x,pot}
F_{pit}
F_{emb}
F_T
F_{age}
$$

PLC:

$$
PLC
=
100
\left(
1-\frac{K_x}{K_{x,\max}}
\right)
$$

## 4.6. Vulnerability curve

Một dạng Weibull:

$$
PLC(x)
=
100
\left[
1-\exp\left(-(x/b)^c\right)
\right]
$$

với:

$$
x=|\Psi_x|
$$

$$
P_{50}
=
-b(\ln2)^{1/c}
$$

Không bịa $P_{50}$ cho cây khi chưa có nguồn.

## 4.7. Hydraulic capacitance

$$
C_h=\frac{dV_w}{d\Psi}
$$

$$
C_h
\frac{\partial\Psi_x}{\partial t}
=
-\frac{\partial Q_x}{\partial z}
+
S_{root}
-
S_{transp}
$$

## 4.8. Phloem và source–sink

$$
SS_o=M_oq_o
$$

Münch:

$$
Q_{ph}
=
K_{ph}
(P_{source}-P_{sink})
$$

$$
J_{ph}
=
-K_{ph}
\frac{\partial P_{ph}}{\partial x}
$$

Carbon flux:

$$
F_C=C_{Suc}Q_{ph}
$$

## 4.9. Phloem loading và xylem–phloem exchange

$$
J_{load}
=
V_{\max,Suc}^{eff}
\frac{C_{Suc,apo}}{K_{m,Suc}+C_{Suc,apo}}
$$

$$
J_{xp}
=
L_{xp}
(\Psi_x-\Psi_{ph})
$$

## 4.10. Sink strength và allocation

$$
SS_o^{eff}
=
M_oq_oy_oH_{CN,o}
$$

$$
a_o
=
\frac{SS_o^{eff}}
{\sum_jSS_j^{eff}}
$$

$$
F_{C,o}=a_oF_C
$$

$$
\frac{dC_o}{dt}
=
a_oF_C
-
R_{growth,o}
-
R_{maint,o}
-
F_{export,o}
$$

## 4.11. Hydraulics–stomata coupling

$$
C_L\frac{d\Psi_L}{dt}
=
K_L(\Psi_{soil}-\Psi_L)-E
$$

$$
g_{tw}
=
\left(
\frac1{g_{sw}}+\frac1{g_{bw}}
\right)^{-1}
$$

$$
E
\simeq
g_{tw}
\frac{D}{P_{atm}}
$$

Medlyn:

$$
g_{sw}
=
g_0
+
1.6
\left(
1+\frac{g_1}{\sqrt D}
\right)
\frac{A_n}{C_s}
$$

Hydraulic closure đề xuất:

$$
F_{hyd}(\Psi_L)
=
\frac1
{1+\exp[k_h(|\Psi_L|-|\Psi_{gs50}|)]}
$$

Lưu ý:

$$
\Psi_{gs50}\neq P_{50}
$$

## 4.12. C3 photosynthesis

Cho lúa và xà lách:

$$
A_n=\min(A_c,A_j,A_p)-R_d
$$

$$
A_c
=
V_{cmax}
\frac{C_c-\Gamma^*}
{C_c+K_c(1+O/K_o)}
$$

$$
A_j
=
J
\frac{C_c-\Gamma^*}
{4(C_c+2\Gamma^*)}
$$

$$
A_p\simeq3TPU
$$

## 4.13. C4 photosynthesis cho ngô

Không dùng mô hình C3 nguyên xi cho ngô.

$$
V_p
=
V_{pmax}
\frac{C_m}{C_m+K_p}
$$

Module đầy đủ cần tách mesophyll, bundle sheath, PEP carboxylase, Rubisco và bundle-sheath leakiness.

## 4.14. Tán cây

$$
I(L)=I_0e^{-k_LL}
$$

$$
A_{can}
=
\int_0^{LAI}
A_n(L,t)\,dL
$$

$$
E_{can}
=
\int_0^{LAI}
E(L,t)\,dL
$$

## 4.15. Cân bằng carbon

$$
\frac{dC_{plant}}{dt}
=
A_{can}
-
R_{maint}
-
R_{growth}
-
L_C
$$

## 4.16. Cân bằng C–N–P–K cấp cơ quan

$$
M_i=\sum_oM_{i,o}
$$

$$
c_{i,o}
=
\frac{M_{i,o}}{B_o}
$$

$$
\frac{dM_{i,o}}{dt}
=
I_{i,o}
+
\sum_{j\ne o}F_{i,j\to o}
-
\sum_{j\ne o}F_{i,o\to j}
-
L_{i,o}
$$

## 4.17. Pool di động và remobilization

$$
M_{i,o}
=
M_{i,o}^{mob}
+
M_{i,o}^{fix}
$$

$$
F_{rem,i,o}
=
k_{rem,i,o}(t)
M_{i,o}^{mob}
$$

Demand:

$$
Req_{i,o}
=
q_{i,o}^*(stage)
\frac{dB_o}{dt}
$$

Supply:

$$
Sup_i=U_i+F_{rem,i}
$$

Satisfaction:

$$
L_i
=
\min
\left(
1,
\frac{Sup_i}{Req_i+\varepsilon}
\right)
$$

Reduced nutrient limitation:

$$
L_{nut}=\min(L_N,L_P,L_K)
$$

chỉ dùng ở reduced model.

## 4.18. Harvest indices

$$
HI_B
=
\frac{B_H}{B_{shoot}}
$$

$$
NHI
=
\frac{M_{N,H}}{M_{N,shoot}}
$$

Có thể định nghĩa PHI và KHI tương tự.

## 4.19. Respiration

Reduced:

$$
R_{tot}=R_G+R_M
$$

Mechanistic:

$$
R_{tot}
=
R_{biosyn}
+
R_{turnover}
+
R_{ion}
+
R_{Nassim}
+
R_{transport}
+
R_{other}
$$

Không dùng cả hai để trừ lặp.

Growth respiration:

$$
R_{G,o}
=
G_o
\left(
\frac1{Y_{G,o}}-1
\right)
$$

Maintenance:

$$
R_{M,o}
=
m_o(T)M_{met,o}
$$

$$
m_o(T)
=
m_{o,ref}
Q_{10}^{(T-T_{ref})/10}
$$

## 4.20. ATP và chi phí vận chuyển

$$
\Delta\widetilde\mu_i
=
RT\ln
\frac{a_{i,in}}{a_{i,out}}
+
z_iF\Delta\psi
$$

$$
P_i
=
U_i\max(0,\Delta\widetilde\mu_i)
$$

Không giả định 1 ATP/ion.

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

## 4.21. O2 và hypoxia

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

Trong hypoxia, ATP từ oxidative phosphorylation giảm và cây có thể tăng fermentation. Không hard-code 38 ATP/glucose.

## 4.22. Aerenchyma và ROL

$$
\phi_{aer}
=
\frac{A_{gas}}{A_{root}}
$$

$$
J_{ROL}
=
P_{ROL}
(C_{O_2,root}-C_{O_2,soil})
$$

Đặc biệt quan trọng cho lúa.

## 4.23. Ion homeostasis, pH và salinity

$$
a_i=\gamma_iC_i
$$

$$
\Psi_s
=
-RT\sum_i\phi_iC_i
$$

$$
E_i
=
\frac{RT}{z_iF}
\ln
\frac{a_{i,out}}{a_{i,in}}
$$

Membrane equation:

$$
C_m\frac{dV_m}{dt}
=
-
\left(
I_{HATPase}
+
I_K
+
I_{Na}
+
I_{Ca}
+
I_{Cl}
+\cdots
\right)
$$

K/Na diagnostic:

$$
R_{KNa}
=
\frac{a_K}{a_{Na}+\varepsilon}
$$

Không đặt một ngưỡng phổ quát.

## 4.24. Salinity yield validation

Maas–Hoffman:

$$
Y_r=
\begin{cases}
1,&EC_e\le EC_t\\
1-\frac{b}{100}(EC_e-EC_t),&EC_e>EC_t
\end{cases}
$$

Dùng để validation empirical, không thay thế mô hình salt ở cấp tế bào.

## 4.25. ROS production

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

## 4.26. Antioxidant network

$$
2O_2^{\bullet-}
+
2H^+
\xrightarrow{SOD}
H_2O_2+O_2
$$

$$
2H_2O_2
\xrightarrow{CAT}
2H_2O+O_2
$$

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

## 4.27. ROS signaling và damage

$$
S_{ROS}
=
\frac{H_2O_2}{K_{sig}+H_2O_2}
$$

$$
D_{ROS}
=
\frac{(H_2O_2/K_D)^n}
{1+(H_2O_2/K_D)^n}
$$

$$
H_{mem}
=
e^{-\lambda_LD_L-\lambda_PD_P}
$$

ROS bằng 0 không phải trạng thái tối ưu vì ROS cũng là tín hiệu.

## 4.28. Hormone–Ca2+–ROS–MAPK

$$
\mathbf H
=
[IAA,CK,GA,ABA,ET,BR,JA,SA,SL]^T
$$

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

$$
K^+,\ anion\ efflux
\rightarrow
turgor_{guard}\downarrow
\rightarrow
g_s\downarrow
$$

## 4.29. Regulatory state equation

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

Interaction signs phải được fit.

## 4.30. Sugar sensing – SnRK1 – TOR

Cầu nối sang Chương 5:

$$
Carbon\ status
\rightarrow
T6P/SnRK1/TOR
\rightarrow
gene\ expression
\rightarrow
growth\ capacity
$$

## 4.31. Chuỗi tích hợp cuối

$$
\boxed{
soil
\rightarrow
root
\rightarrow
xylem
\rightarrow
leaf
\rightarrow
photosynthesis
\rightarrow
phloem
\rightarrow
source\!-\!sink
\rightarrow
biomass
\rightarrow
yield
}
$$

## 4.32. Quy tắc chống double counting

Nếu một stress đã tác động trực tiếp lên $K_{root}$, $g_s$, $A_n$, ATP hoặc sink strength thì không nhân lại cùng stress bằng một hệ số HSY cuối.

HSY trong mô hình đầy đủ nên dùng chủ yếu làm **diagnostic index**.
