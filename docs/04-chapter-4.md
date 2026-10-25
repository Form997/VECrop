# Chương 4. Thủy lực, mạch dẫn và tích hợp toàn cây

> **Phạm vi:** Chương 4 được giới hạn đúng từ **4.1 đến 4.12**. Chương này nối điều kiện vùng rễ và lớp điều hòa tế bào với vận chuyển dài hạn, quang hợp, phân bổ carbon–dinh dưỡng, năng lượng, redox và tín hiệu toàn cây. Các phương trình cơ chế nền được giữ riêng với các hàm VECrop đề xuất.

---

## 4.1. Thế nước và hệ đất–cây–khí quyển (SPAC)

Thế nước là biến trung tâm để mô tả chuyển động của nước trong hệ đất–cây–khí quyển.

Tổng thế nước:

$$
\Psi_w
=
\Psi_p+\Psi_s+\Psi_m+\Psi_g
$$

Trong đó:

- \(\Psi_p\): thế áp suất;
- \(\Psi_s\): thế thẩm thấu;
- \(\Psi_m\): thế ma trận;
- \(\Psi_g\): thế trọng trường.

### 4.1.1. Gradient thế nước

Dòng nước tổng quát:

$$
\vec J_w
=
-K_h\nabla\Psi_w
$$

Dạng lumped:

$$
Q_w
=
K_{plant}
(\Psi_{soil}-\Psi_{leaf})
$$

Tổng resistance:

$$
R_{tot}
=
R_{soil}
+
R_{root}
+
R_{xylem}
+
R_{leaf}
$$

và:

$$
K_{plant}
=
\frac1{R_{tot}}
$$

Trong nhiều điều kiện cây đang thoát hơi:

$$
\Psi_{soil}
>
\Psi_{root}
>
\Psi_{stem}
>
\Psi_{leaf}
$$

Đây không phải trật tự tuyệt đối cho mọi thời điểm.

### 4.1.2. Root pressure và transpiration

Root pressure có thể xuất hiện khi:

- transpiration thấp;
- ion accumulation tạo osmotic driving force;
- root hydraulic conductance đủ cao.

Nhưng không được xem root pressure là cơ chế phổ quát duy nhất của vận chuyển xylem.

Trong phần lớn cây đang thoát hơi mạnh, gradient thế nước do transpiration là thành phần rất quan trọng.

### 4.1.3. Trọng lực

$$
\Psi_g
=
\rho_wgz
$$

Độ lớn gần đúng:

$$
0.00981\ MPa\ m^{-1}
$$

theo chiều cao.

### 4.1.4. Hydraulic segmentation

Không phải mọi cơ quan có resistance bằng nhau.

Có thể mô tả:

$$
R_{plant}
=
R_{root}
+
R_{stem}
+
R_{petiole}
+
R_{leaf}
$$

và mỗi phần có thể thay đổi theo:
- tuổi;
- embolism;
- nhiệt độ;
- anatomy;
- aquaporin state.

### 4.1.5. Water storage

Mô thực vật có capacitance:

$$
C_h
=
\frac{dV_w}{d\Psi}
$$

Một dạng động:

$$
C_h
\frac{d\Psi}{dt}
=
Q_{in}-Q_{out}
$$

Water storage giúp giảm dao động ngắn hạn giữa uptake và transpiration.

### 4.1.6. Kiểm tra đơn vị

Nếu:

$$
Q_w=K\Delta\Psi
$$

thì \(K\) phải có đơn vị phù hợp để \(Q_w\) là lưu lượng.

Không được cộng trực tiếp:

$$
\Psi + ABA + ATP
$$

vì sai thứ nguyên.

---

## 4.2. Thủy lực rễ – apoplast – symplast – aquaporin

Rễ là interface giữa môi trường vùng rễ và xylem.

### 4.2.1. Ba đường vận chuyển

Nước có thể đi qua:

- apoplast;
- symplast;
- transcellular.

Các đường này có resistance khác nhau.

### 4.2.2. Root hydraulic flux

$$
J_{w,r}
=
L_{pr,eff}
(\Psi_{soil}-\Psi_{xyl})
$$

Tổng lưu lượng:

$$
Q_r
=
A_rL_{pr,eff}
(\Psi_{soil}-\Psi_{xyl})
$$

Trong đó:
- \(A_r\): active root area;
- \(L_{pr,eff}\): effective root hydraulic conductivity.

### 4.2.3. Aquaporin factor

Một dạng VECrop:

$$
L_{pr,eff}
=
L_{pr,0}
F_{anat}
F_{AQP}
F_T
F_{pH}
F_{O_2}
$$

Không dùng nếu các yếu tố trên đã được mô hình hóa trực tiếp bên trong \(L_{pr}\).

### 4.2.4. Aquaporin gating

Aquaporin có thể bị điều hòa bởi:

- phosphorylation;
- cytosolic pH;
- Ca2+;
- ROS;
- membrane trafficking.

Aquaporin thay đổi permeability, không tạo năng lượng.

### 4.2.5. Endodermis và Casparian strip

Endodermis làm tăng selectivity của radial transport.

Apoplastic flow bị hạn chế qua Casparian strip nên nước và ion thường phải đi qua màng trước khi vào stele.

### 4.2.6. Root age

Hydraulic conductance thay đổi theo:
- suberization;
- secondary growth;
- root hair abundance;
- lateral root formation.

Do đó:

$$
L_{pr}=L_{pr}(age,z,t)
$$

### 4.2.7. Root distribution

Tổng uptake:

$$
Q_{root}
=
\int_0^{Z_r}
A_r(z)
L_{pr}(z)
[
\Psi_{soil}(z)-\Psi_x
]
\,dz
$$

### 4.2.8. Hydraulic redistribution

Trong một số cây, rễ có thể vận chuyển nước từ lớp ẩm sang lớp khô khi transpiration thấp.

Do đó:

$$
Q_r(z)
$$

có thể đổi dấu theo lớp đất.

---

## 4.3. Hấp thu khoáng, điện hóa màng và xylem loading

### 4.3.1. Uptake tổng

$$
U_i
=
A_rJ_{i,net}
$$

### 4.3.2. HATS và LATS

$$
J_i
=
J_{HATS,i}
+
J_{LATS,i}
-
J_{efflux,i}
$$

High-affinity component:

$$
J_{HATS,i}
=
V_{\max,H,i}
\frac{C_i}
{K_{m,H,i}+C_i}
$$

Một reduced LATS:

$$
J_{LATS,i}
\approx
k_{L,i}C_i
$$

chỉ khi dữ liệu hỗ trợ.

### 4.3.3. Điện thế điện hóa

$$
\Delta\widetilde\mu_i
=
RT\ln
\frac{a_{i,in}}{a_{i,out}}
+
z_iF
(V_{in}-V_{out})
$$

Transporter và channel phản ứng với driving force này.

### 4.3.4. Nernst potential

$$
E_i
=
\frac{RT}{z_iF}
\ln
\frac{a_{i,out}}
{a_{i,in}}
$$

Channel current:

$$
I_i
=
g_i(V_m-E_i)
$$

### 4.3.5. H+-ATPase

H+-ATPase tạo proton motive force:

$$
\Delta p
=
\Delta\psi
-
\frac{2.303RT}{F}\Delta pH
$$

Nó hỗ trợ secondary active uptake.

### 4.3.6. Phosphate uptake

$$
J_P
=
V_{\max,P}
\frac{C_{Pi}}
{K_{m,P}+C_{Pi}}
F_{H+}
F_{PHT1}
$$

### 4.3.7. Potassium uptake

Transporter form:

$$
J_{K,HAK}
=
V_{\max,K}
\frac{[K^+]}
{K_{m,K}+[K^+]}
$$

Channel form:

$$
I_K
=
g_K(V_m-E_K)
$$

### 4.3.8. Nitrate và ammonium

Cần tách:

$$
U_N
=
U_{NO_3}
+
U_{NH_4}
$$

vì hai dạng N có:
- transporter;
- assimilation cost;
- effect lên pH;
- environmental preference khác nhau.

### 4.3.9. Xylem loading

Một balance tại stele:

$$
J_{i,xyl}
=
J_{load,i}
-
J_{retrieve,i}
$$

Ion đi vào xylem sau đó được vận chuyển với water flux.

### 4.3.10. Long-distance ion flux

$$
Q_{i,xyl}
=
Q_wC_{i,xyl}
-
A_xD_i
\frac{\partial C_i}{\partial z}
$$

Trong nhiều trường hợp advection chiếm ưu thế, nhưng không mặc định cho mọi ion.

### 4.3.11. Calcium

$$
Q_{Ca,x}
=
Q_wC_{Ca,x}
+
Q_{Ca,load}
$$

Ca có phloem mobility hạn chế tương đối so với nhiều nutrient khác, nên delivery tới mô non phụ thuộc mạnh transpiration và xylem connectivity.

### 4.3.12. Mass balance nutrient

$$
\frac{dM_i}{dt}
=
U_i-E_i-L_i
$$

Remobilization nội bộ không phải input mới.

---

## 4.4. Xylem – conductance – cavitation – embolism

### 4.4.1. Poiseuille idealization

$$
Q
=
\frac{\pi r^4}
{8\eta l}
\Delta P
$$

Hydraulic conductance:

$$
K_v
=
\frac{\pi r^4}
{8\eta l}
$$

Radius có ảnh hưởng bậc bốn trong ống lý tưởng.

### 4.4.2. Xylem thực

Xylem thực còn có:
- pit resistance;
- vessel connectivity;
- tapering;
- conduit length distribution;
- embolism.

Do đó:

$$
K_{x,real}
<
K_{Poiseuille,ideal}
$$

trong nhiều trường hợp.

### 4.4.3. Dòng xylem

$$
J_x
=
-K_x
\frac{\partial\Psi_x}{\partial z}
$$

### 4.4.4. Conductance hữu hiệu

$$
K_{x,eff}
=
K_{x,pot}
F_{pit}
F_{emb}
F_T
F_{age}
$$

### 4.4.5. PLC

$$
PLC
=
100
\left(
1-\frac{K_x}{K_{x,max}}
\right)
$$

và:

$$
F_{emb}
=
1-\frac{PLC}{100}
$$

### 4.4.6. Vulnerability curve

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

### 4.4.7. P50

$$
P_{50}
=
-b(\ln2)^{1/c}
$$

Không dùng một P50 chung cho:
- species;
- cultivar;
- organ;
- developmental stage.

### 4.4.8. Cavitation risk

Cavitation risk phụ thuộc:
- xylem tension;
- anatomy;
- pit membrane;
- dehydration history;
- freeze/thaw ở hệ phù hợp.

### 4.4.9. Embolism recovery

Recovery không được giả định tự động.

Cần phân biệt:
- refilling;
- new xylem growth;
- rehydration artifact;
- measurement method.

### 4.4.10. Hydraulic safety margin

Một diagnostic:

$$
HSM
=
\Psi_{min}-P_{50}
$$

Phải thống nhất quy ước dấu trước khi diễn giải.

### 4.4.11. Hydraulic failure

Ở mức reduced model:

$$
Risk_{hyd}
=
f(PLC,\Psi_{leaf},K_{plant})
$$

Không biến thành threshold tử vong phổ quát nếu chưa kiểm định.

---

## 4.5. Phloem – loading – pressure flow – source–sink

Phloem là con đường vận chuyển dài hạn chủ yếu của assimilates từ source tới sink. Mô hình pressure-flow/Münch xem gradient áp suất thủy tĩnh, hình thành nhờ loading và unloading chất tan, là driving force chính của bulk flow.

### 4.5.1. Source

Source có thể là:
- mature photosynthetic leaf;
- storage organ đang remobilize.

### 4.5.2. Sink

Sink có thể là:
- root tip;
- young leaf;
- meristem;
- grain;
- fruit;
- storage organ.

### 4.5.3. Sink strength

$$
SS_o
=
M_oq_o
$$

Trong đó:
- \(M_o\): sink size/capacity;
- \(q_o\): sink activity.

### 4.5.4. Pressure flow

$$
Q_{ph}
=
K_{ph}
(P_{source}-P_{sink})
$$

### 4.5.5. Sugar flux

$$
F_C
=
C_{Suc}Q_{ph}
$$

### 4.5.6. Phloem loading

Một saturating form:

$$
J_{load}
=
V_{\max,Suc}^{eff}
\frac{C_{Suc,apo}}
{K_{m,Suc}+C_{Suc,apo}}
$$

Tùy species, loading có thể có active/apoplastic hoặc symplastic components.

### 4.5.7. Phloem unloading

$$
J_{unload,o}
=
f(
C_{ph},
sink\ demand,
transporters,
stage
)
$$

### 4.5.8. Xylem–phloem water exchange

$$
J_{xp}
=
L_{xp}
(\Psi_x-\Psi_{ph})
$$

Pressure flow inherently liên kết water và carbon transport.

### 4.5.9. Effective sink strength

Một VECrop formulation:

$$
SS_o^{eff}
=
M_oq_oy_oH_{CN,o}
$$

### 4.5.10. Allocation fraction

$$
a_o
=
\frac{SS_o^{eff}}
{\sum_jSS_j^{eff}}
$$

$$
F_{C,o}
=
a_oF_C
$$

### 4.5.11. Organ carbon balance

$$
\frac{dC_o}{dt}
=
F_{C,o}
-
R_{growth,o}
-
R_{maint,o}
-
F_{export,o}
$$

### 4.5.12. Hướng vận chuyển

Phloem source→sink có thể hướng lên hoặc xuống tùy vị trí source–sink.

Không nói:
- “phloem luôn đi xuống”;
- “mọi mạch dẫn đều đi lên”.

---

## 4.6. Ghép xylem – khí khổng – quang hợp – tán lá

### 4.6.1. Leaf water balance

$$
C_L
\frac{d\Psi_L}{dt}
=
K_L(\Psi_{soil}-\Psi_L)
-
E
$$

### 4.6.2. Total conductance

$$
g_{tw}
=
\left(
\frac1{g_{sw}}
+
\frac1{g_{bw}}
\right)^{-1}
$$

### 4.6.3. Transpiration

Một dạng gần đúng:

$$
E
\approx
g_{tw}
\frac{D}{P_{atm}}
$$

Trong đó \(D\) là VPD.

### 4.6.4. Medlyn stomatal model

Một dạng:

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

Medlyn-type models liên kết stomatal conductance với assimilation và VPD; tham số \(g_0,g_1\) phụ thuộc plant functional type/crop và không phải hằng số phổ quát.

### 4.6.5. Hydraulic limitation

Một factor đề xuất:

$$
F_{hyd}(\Psi_L)
=
\frac1
{1+\exp[
k_h(|\Psi_L|-|\Psi_{gs50}|)
]}
$$

Lưu ý:

$$
\Psi_{gs50}
\neq
P_{50}
$$

vì stomatal sensitivity và xylem vulnerability là hai response khác nhau.

### 4.6.6. C3 photosynthesis

Cho lúa và xà lách:

$$
A_n
=
\min(A_c,A_j,A_p)-R_d
$$

Rubisco limitation:

$$
A_c
=
V_{cmax}
\frac{C_c-\Gamma^*}
{C_c+K_c(1+O/K_o)}
$$

Electron transport limitation:

$$
A_j
=
J
\frac{C_c-\Gamma^*}
{4(C_c+2\Gamma^*)}
$$

TPU approximation:

$$
A_p\approx3TPU
$$

### 4.6.7. C4 specificity cho ngô

Ngô không được dùng FvCB C3 nguyên xi.

PEP carboxylase:

$$
V_p
=
V_{pmax}
\frac{C_m}
{C_m+K_p}
$$

Module đầy đủ cần tách:
- mesophyll;
- bundle sheath;
- PEPCase;
- Rubisco;
- leakiness.

### 4.6.8. Electron transport

Một non-rectangular hyperbola:

$$
\theta_JJ^2
-
(\alpha I+J_{max})J
+
\alpha IJ_{max}
=
0
$$

### 4.6.9. Canopy radiation

Beer–Lambert:

$$
I(L)
=
I_0e^{-k_LL}
$$

### 4.6.10. Canopy photosynthesis

$$
A_{can}
=
\int_0^{LAI}
A_n(L,t)\,dL
$$

### 4.6.11. Canopy transpiration

$$
E_{can}
=
\int_0^{LAI}
E(L,t)\,dL
$$

### 4.6.12. Sunlit/shaded leaves

Ở mức nâng cao nên tách:

$$
A_{can}
=
A_{sunlit}
+
A_{shaded}
$$

thay vì dùng một lá đại diện cho toàn canopy.

### 4.6.13. Carbon balance

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

---

## 4.7. Cân bằng động C–N–P–K, demand và remobilization

### 4.7.1. Tổng pool

$$
M_i
=
\sum_oM_{i,o}
$$

### 4.7.2. Nồng độ cơ quan

$$
c_{i,o}
=
\frac{M_{i,o}}{B_o}
$$

### 4.7.3. Organ mass balance

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

### 4.7.4. Carbon balance

$$
\frac{dM_C}{dt}
=
A_C-R_m-R_g-L_C
$$

### 4.7.5. Mobile và fixed pool

$$
M_{i,o}
=
M_{i,o}^{mob}
+
M_{i,o}^{fix}
$$

### 4.7.6. Remobilization

$$
F_{rem,i,o}
=
k_{rem,i,o}(t)
M_{i,o}^{mob}
$$

### 4.7.7. Demand

$$
Req_{i,o}
=
q_{i,o}^{*}(stage)
\frac{dB_o}{dt}
$$

Tổng:

$$
Req_i
=
\sum_oReq_{i,o}
$$

### 4.7.8. Supply

$$
Sup_i
=
U_i
+
F_{rem,i}
$$

### 4.7.9. Satisfaction

$$
L_i
=
\min
\left(
1,
\frac{Sup_i}
{Req_i+\varepsilon}
\right)
$$

### 4.7.10. Liebig reduced term

$$
L_{nut}
=
\min(L_N,L_P,L_K)
$$

chỉ dùng trong reduced model.

### 4.7.11. Nutrient interaction

Không giả định N/P/K độc lập hoàn toàn.

Có thể thêm:

$$
Req_{N,o}
=
f(
growth,
P\ status,
K\ status
)
$$

khi có dữ liệu.

### 4.7.12. Harvest indices

Biomass harvest index:

$$
HI_B
=
\frac{B_H}
{B_{shoot}}
$$

Nitrogen harvest index:

$$
NHI
=
\frac{M_{N,H}}
{M_{N,shoot}}
$$

Có thể xây PHI và KHI tương tự.

### 4.7.13. Apparent remobilization

Không đồng nhất apparent remobilization tính từ concentration difference với tracer-confirmed remobilization.

---

## 4.8. Hô hấp – ATP – chi phí tăng trưởng và duy trì

### 4.8.1. Hai cách biểu diễn

Reduced:

$$
R_{tot}
=
R_G+R_M
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

### 4.8.2. Growth respiration

$$
R_{G,o}
=
G_o
\left(
\frac1{Y_{G,o}}-1
\right)
$$

### 4.8.3. Maintenance respiration

$$
R_{M,o}
=
m_o(T)M_{met,o}
$$

### 4.8.4. Temperature response

Q10 form:

$$
m_o(T)
=
m_{o,ref}
Q_{10,o}^{(T-T_{ref})/10}
$$

Không mặc định:

$$
Q_{10}=2
$$

### 4.8.5. Electrochemical work

$$
\Delta\widetilde\mu_i
=
RT\ln
\frac{a_{i,in}}{a_{i,out}}
+
z_iF\Delta\psi
$$

Một energetic cost:

$$
P_i
=
U_i
\max(
0,
\Delta\widetilde\mu_i
)
$$

### 4.8.6. ATP demand

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

### 4.8.7. ATP supply

$$
ATP_{sup}
=
ATP_{photo}
+
ATP_{resp}
$$

tùy tissue.

### 4.8.8. Energy diagnostic

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

Đây là reduced diagnostic, không thay thế ATP model cơ chế.

### 4.8.9. Không hard-code ATP/ion

Không giả định:
- 1 ATP/ion;
- một stoichiometry duy nhất cho mọi transporter;
- cùng energetic cost ở mọi membrane potential.

### 4.8.10. Carbon cost

Hô hấp là carbon cost thực, nên phải liên kết với carbon balance thay vì chỉ dùng một scalar penalty.

---

## 4.9. O₂ – hypoxia – anoxia – fermentation – aerenchyma – Eh

Các phản ứng low-O₂ bao gồm thay đổi sử dụng carbohydrate, fermentation, hình thành aerenchyma và radial oxygen loss barrier ở các loài thích nghi ngập.

### 4.9.1. O₂ concentration và Eh khác nhau

$$
Eh_{soil}
\neq
O_{2,root}
$$

Eh là trạng thái redox tổng hợp; O₂ là concentration cụ thể.

### 4.9.2. O₂ transport

$$
\frac{\partial C_{O_2}}{\partial t}
=
D_{O_2,eff}\nabla^2C_{O_2}
+
S_{O_2}
-
R_{O_2}
$$

### 4.9.3. O₂ consumption

$$
R_{O_2}
=
R_{O_2,max}
\frac{C_{O_2}}
{K_{O_2}+C_{O_2}}
$$

### 4.9.4. Hypoxia cascade

$$
O_2\downarrow
\rightarrow
oxidative\ phosphorylation\downarrow
\rightarrow
ATP\downarrow
\rightarrow
active\ transport\downarrow
$$

### 4.9.5. Fermentation

Pyruvate decarboxylase:

$$
Pyruvate
\rightarrow
Acetaldehyde
+
CO_2
$$

Alcohol dehydrogenase:

$$
Acetaldehyde
+
NADH
\rightarrow
Ethanol
+
NAD^+
$$

Fermentation giúp regenerate NAD+.

### 4.9.6. ATP yield

Fermentation không tạo ATP ngoài ATP đã hình thành trong glycolysis.

Không hard-code “38 ATP/glucose” như một chuẩn duy nhất.

### 4.9.7. Aerenchyma

$$
\phi_{aer}
=
\frac{A_{gas}}
{A_{root}}
$$

Aerenchyma làm tăng internal gas transport.

### 4.9.8. Radial oxygen loss

$$
J_{ROL}
=
P_{ROL}
(C_{O_2,root}-C_{O_2,soil})
$$

Đặc biệt quan trọng ở lúa.

### 4.9.9. ROL barrier

Một số loài có thể hình thành barrier hạn chế oxygen leakage ở phần basal root, giúp oxygen đi sâu hơn tới root tip.

### 4.9.10. Redox sequence

Trong đất ngập:

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

Threshold cụ thể phụ thuộc đất và không được hard-code.

### 4.9.11. Reoxygenation

Sau ngập, reoxygenation có thể tăng ROS nhanh.

Do đó recovery cần xem:
- O₂;
- antioxidant capacity;
- membrane damage;
- hydraulic recovery.

---

## 4.10. Ion homeostasis – điện thế màng – pH – salinity

### 4.10.1. EC không phải ion cụ thể

$$
EC
\neq
[Na^+]
$$

$$
EC
\neq
[K^+]
$$

$$
EC
\neq
[NO_3^-]
$$

### 4.10.2. Activity

$$
a_i
=
\gamma_iC_i
$$

### 4.10.3. Osmotic potential

$$
\Psi_s
=
-RT\sum_i\phi_iC_i
$$

### 4.10.4. Membrane potential equation

$$
C_m
\frac{dV_m}{dt}
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
+
\cdots
\right)
$$

### 4.10.5. Electroneutrality

Một gần đúng bulk solution:

$$
\sum_i
z_iC_i
+
C_{fixed}
\approx0
$$

### 4.10.6. K/Na ratio

Một diagnostic:

$$
R_{KNa}
=
\frac{a_K}
{a_{Na}+\varepsilon}
$$

Không đặt threshold phổ quát.

### 4.10.7. SOS pathway

SOS1 là Na+/H+ exchanger.

Không mô tả SOS1 như ATP-driven Na pump trực tiếp.

### 4.10.8. Na sequestration

Tonoplast transport giúp cô lập Na trong vacuole.

Một pool model:

$$
\frac{dNa_{vac}}{dt}
=
J_{sequest}
-
J_{release}
$$

### 4.10.9. Osmotic và ionic stress

Phải tách:

$$
Stress_{salt}
=
Stress_{osmotic}
+
Stress_{ionic}
$$

ở mức khái niệm.

Không nhân hai scalar này nếu chúng đã cùng tác động lên một process cụ thể.

### 4.10.10. pH homeostasis

Cytosolic pH ảnh hưởng:
- enzyme;
- transporter;
- aquaporin;
- metabolism.

Một balance:

$$
\frac{dH^+}{dt}
=
J_{H,in}
-
J_{H,out}
+
P_H
-
C_H
$$

### 4.10.11. Maas–Hoffman validation

Một empirical yield relationship:

$$
Y_r
=
\begin{cases}
1,&EC_e\le EC_t\\
1-\frac{b}{100}(EC_e-EC_t),&EC_e>EC_t
\end{cases}
$$

Nó có thể dùng benchmark/validation empirical, không thay thế ion-homeostasis model.

### 4.10.12. Ca và salinity

Ca có thể hỗ trợ membrane/selectivity dưới salinity, nhưng không dùng như universal antidote factor.

---

## 4.11. ROS – redox – antioxidant – signaling – damage

### 4.11.1. ROS vector

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

### 4.11.2. Nguồn ROS

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

### 4.11.3. ROS dual role

ROS có hai vai trò:
- signaling;
- oxidative damage.

Do đó:

$$
ROS=0
$$

không mặc định là tối ưu.

### 4.11.4. SOD

$$
2O_2^{\bullet-}
+
2H^+
\rightarrow
H_2O_2
+
O_2
$$

### 4.11.5. Catalase

$$
2H_2O_2
\rightarrow
2H_2O
+
O_2
$$

### 4.11.6. H₂O₂ balance

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

### 4.11.7. Ascorbate–glutathione

Ở mức chi tiết có thể theo dõi:
- AsA;
- DHA;
- GSH;
- GSSG;
- APX;
- GR.

### 4.11.8. Fenton chemistry

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

### 4.11.9. ROS signaling index

Reduced:

$$
S_{ROS}
=
\frac{H_2O_2}
{K_{sig}+H_2O_2}
$$

### 4.11.10. ROS damage

$$
D_{ROS}
=
\frac{(H_2O_2/K_D)^n}
{1+(H_2O_2/K_D)^n}
$$

### 4.11.11. Membrane damage

$$
H_{mem}
=
e^{-\lambda_LD_L-\lambda_PD_P}
$$

Đây là VECrop reduced diagnostic.

### 4.11.12. Redox couples

Có thể dùng:
- GSH/GSSG;
- AsA/DHA;
- NADPH/NADP+.

Không gộp tất cả thành một scalar nếu nghiên cứu cơ chế redox chi tiết.

### 4.11.13. Reoxygenation ROS

Sau hypoxia:

$$
O_2\uparrow
\rightarrow
ROS\ burst
$$

nên recovery module phải tính ROS dynamics.

---

## 4.12. Hormone – Ca²⁺ – ROS – MAPK và điều hòa cấp cơ quan

### 4.12.1. Regulatory function tổng quát

$$
y_o(t)
=
\mathcal F
[
\mathbf H_o(t),
\mathbf{Ca}_o(t),
\mathbf{ROS}_o(t),
\mathbf{MAPK}_o(t),
\mathbf G_o(t),
stage
]
$$

### 4.12.2. Hormone vector

$$
\mathbf H
=
[IAA,CK,GA,ABA,ET,BR,JA,SA,SL]^T
$$

### 4.12.3. Hormone balance

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

### 4.12.4. Hormone normalization

Một saturating function:

$$
H_h^*
=
\frac{H_h}
{K_h+H_h}
$$

Chỉ là reduced representation.

### 4.12.5. ABA–stomata pathway

Một chuỗi khái niệm:

$$
ABA
\rightarrow
PYR/PYL
\rightarrow
PP2C\downarrow
\rightarrow
SnRK2/OST1
$$

sau đó:

$$
SnRK2/OST1
\rightarrow
RBOH
\rightarrow
ROS
$$

và:

$$
ROS
\rightarrow
Ca^{2+}_{cyt}\uparrow
$$

tiếp theo:

$$
Ca^{2+}
\rightarrow
CPK/CBL-CIPK
\rightarrow
ion\ channels
$$

kết quả:

$$
K^+,\ anion\ efflux
\rightarrow
turgor_{guard}\downarrow
\rightarrow
g_s\downarrow
$$

### 4.12.6. Calcium transient

$$
Ca_o(t)
=
Ca_0
+
\sum_k
A_k
e^{-(t-t_k)/\tau_k}
$$

### 4.12.7. Calcium activation

$$
S_{Ca}
=
\frac{[Ca^{2+}]^n}
{K_{Ca}^n+[Ca^{2+}]^n}
$$

### 4.12.8. Calcium signature

Tín hiệu Ca2+ còn phụ thuộc:
- amplitude;
- frequency;
- duration;
- spatial pattern.

Một scalar chỉ là approximation.

### 4.12.9. MAPK cascade

$$
MAPKKK
\rightarrow
MAPKK
\rightarrow
MAPK
\rightarrow
TF
$$

### 4.12.10. MAPK dynamics

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

### 4.12.11. Gene expression

$$
\frac{dG_j}{dt}
=
k_{tr,j}F_j(TF,H,Ca,ROS)
-
k_{deg,j}G_j
$$

### 4.12.12. Regulatory integration

Một VECrop formulation:

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

Các coefficient phải được hiệu chỉnh.

### 4.12.13. Process 3 update

$$
\Phi_{3,o}
=
\operatorname{clip}
[
y_o
(
S_{7,o}^*
+
S_{8,o}^*
-
S_{9,o}^*
),
0,1
]
$$

Trong đó:
- \(S_7^*\): developmental activation;
- \(S_8^*\): adaptive signaling;
- \(S_9^*\): growth inhibition/damage.

### 4.12.14. State-space

$$
\frac{d\mathbf x}{dt}
=
\mathbf f(
\mathbf x,
\mathbf u,
\boldsymbol\theta
)
$$

với:

$$
\mathbf x
=
[IAA,CK,GA,ABA,ET,Ca,H_2O_2,MAPK,TF,Gene]^T
$$

và:

$$
\mathbf u
=
[\Psi,EC,Na,N,P,T,VPD,O_2,light]^T
$$

### 4.12.15. Output regulatory state

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

### 4.12.16. Không gọi hormone là lực

Hormone không phải lực cơ học.

Đúng hơn:

$$
Hormone/signaling
\rightarrow
capacity
\rightarrow
physical\ flux/organ\ response
$$

### 4.12.17. Organ specificity

$$
y_o
\neq
y_{o'}
$$

cho hai cơ quan khác nhau.

### 4.12.18. Stage specificity

$$
\theta
=
\theta(stage)
$$

### 4.12.19. Genotype specificity

$$
\boldsymbol\theta_G
\neq
\boldsymbol\theta_{G'}
$$

### 4.12.20. Không double counting

Nếu ABA đã làm giảm \(g_s\), và \(g_s\) đã đi vào transpiration/photosynthesis, không nên nhân thêm một \(F_{ABA}\) vào yield.

Tương tự với:
- ROS;
- salinity;
- O₂;
- water stress.

---


## 4.13. Cảm nhận carbon – đường – T6P – SnRK1 – TOR và điều hòa tăng trưởng

### 4.13.1. Vai trò của sugar sensing

Đường trong cây không chỉ là substrate trao đổi chất mà còn là tín hiệu trạng thái carbon.

Các tín hiệu chính cần phân biệt:

- glucose;
- sucrose;
- glucose-6-phosphate;
- trehalose-6-phosphate (T6P);
- trạng thái ATP/AMP;
- carbon skeleton cho đồng hóa N.

Không được đồng nhất:

$
Sugar\ concentration
=
Carbon\ flux
$

vì concentration là state, còn flux là tốc độ vận chuyển/chuyển hóa.

### 4.13.2. Hexokinase như cảm biến glucose

Hexokinase (HXK) vừa xúc tác:

$
Glucose
+
ATP
\rightarrow
Glucose\text{-}6\text{-}phosphate
+
ADP
$

vừa tham gia sugar signaling.

Một reduced signal:

$
S_{HXK}
=
\frac{Glu}
{K_{HXK}+Glu}
$

chỉ là biểu diễn VECrop đề xuất khi không mô hình pathway HXK chi tiết.

### 4.13.3. Sucrose status

Sucrose là:
- dạng vận chuyển carbon chính trong phloem ở nhiều loài;
- substrate cho sink;
- tín hiệu trạng thái source–sink.

Một biến trạng thái:

$
C_{Suc,o}
$

nên được giữ theo cơ quan khi dữ liệu cho phép.

### 4.13.4. Trehalose-6-phosphate

T6P là một tín hiệu quan trọng liên hệ sucrose availability với tăng trưởng và phát triển.

Một reduced coupling:

$
S_{T6P}
=
\frac{T6P}
{K_{T6P}+T6P}
$

Không dùng T6P như đại diện trực tiếp cho lượng carbon dự trữ.

### 4.13.5. T6P–sucrose relationship

Ở mức khái niệm:

$
Sucrose\uparrow
\Rightarrow
T6P\uparrow
$

trong nhiều mô và điều kiện, nhưng slope và dynamics phụ thuộc:
- tissue;
- species;
- developmental stage;
- light;
- nutrient status.

Do đó không hard-code quan hệ tuyến tính phổ quát.

### 4.13.6. SnRK1

SnRK1 là kinase cảm nhận trạng thái năng lượng/carbon.

Khi thiếu năng lượng:

$
Energy\ deficit
\rightarrow
SnRK1\uparrow
$

SnRK1 có xu hướng:
- ức chế anabolism;
- thúc đẩy catabolism;
- tăng khả năng sống sót khi thiếu carbon;
- điều chỉnh gene expression liên quan stress và metabolism.

### 4.13.7. TOR

TOR là kinase tích hợp:
- carbon;
- nutrient;
- energy;
- growth signals.

Khi điều kiện thuận lợi:

$
Carbon/Nutrient/Energy\uparrow
\rightarrow
TOR\uparrow
$

TOR thường liên quan:
- translation;
- ribosome biogenesis;
- cell growth;
- cell proliferation;
- anabolic metabolism.

### 4.13.8. Trục SnRK1–TOR

Một conceptual antagonism:

$
SnRK1
\dashv
Growth/Anabolism
$

$
TOR
\rightarrow
Growth/Anabolism
$

Nhưng không nên xem SnRK1 và TOR là hai biến luôn đối xứng hoàn toàn.

### 4.13.9. T6P–SnRK1

Một conceptual link:

$
T6P\uparrow
\Rightarrow
SnRK1\ activity\downarrow
$

trong nhiều bối cảnh mô thực vật.

Không mặc định cùng độ nhạy ở mọi tissue/crop.

### 4.13.10. Carbon status index

Một reduced carbon status:

$
S_C
=
\frac{C_{sugar}}
{K_C+C_{sugar}}
$

Nếu tách nhiều pool:

$
\mathbf C_{sugar}
=
[Sucrose,Glucose,Fructose,Starch,T6P]^T
$

### 4.13.11. Energy status

Một reduced energy state:

$
S_E
=
\frac{ATP}
{K_E+ATP}
$

Ở mức cơ chế sâu hơn có thể dùng:
- ATP/ADP;
- adenylate energy charge;
- NADH/NAD+;
- NADPH/NADP+.

### 4.13.12. TOR reduced formulation

Một VECrop proposal:

$
A_{TOR}
=
\sigma
(
\beta_0
+
\beta_CS_C
+
\beta_NS_N
+
\beta_ES_E
-
\beta_SS_{stress}
)
$

Các coefficient phải được calibration.

### 4.13.13. SnRK1 reduced formulation

Một VECrop proposal:

$
A_{SnRK1}
=
\sigma
(
\gamma_0
-
\gamma_CS_C
-
\gamma_ES_E
+
\gamma_SS_{stress}
)
$

Không xem phương trình này là pathway sinh học chính xác.

### 4.13.14. Sugar–hormone crosstalk

Sugar signaling tương tác với:
- ABA;
- auxin;
- cytokinin;
- GA;
- ethylene.

Một regulator:

$
y_o
=
f(
Sugar,
Hormone,
Ca,
ROS,
MAPK,
stage
)
$

### 4.13.15. Carbon–nitrogen coupling

Tăng trưởng cần đồng thời:
- carbon skeleton;
- nitrogen;
- energy.

Một stoichiometric constraint:

$
Growth_o
\le
\min
(
C_{avail,o}/q_{C,o},
N_{avail,o}/q_{N,o}
)
$

Đây là reduced Liebig-style formulation.

### 4.13.16. N assimilation và carbon skeleton

Nitrate/ammonium assimilation cần carbon skeleton và reducing power.

Một conceptual link:

$
N\ assimilation
\rightarrow
C\ skeleton\ demand
+
ATP/NAD(P)H\ demand
$

Do đó N uptake cao không bảo đảm growth nếu carbon/energy giới hạn.

### 4.13.17. Source–sink feedback

Khi sink demand thấp:

$
Sucrose_{leaf}\uparrow
\rightarrow
feedback\ regulation
\rightarrow
photosynthetic\ capacity\ change
$

Khi sink demand cao:

$
Export\uparrow
\rightarrow
source\ utilization\uparrow
$

Mức độ phụ thuộc crop/stage.

### 4.13.18. Sink strength coupling

Từ 4.5:

$
SS_o=M_oq_o
$

Bổ sung carbon-energy regulation:

$
SS_o^{eff}
=
SS_o
F_{sugar,o}
F_{energy,o}
F_{stage,o}
$

Các factor này chỉ dùng nếu chưa được giải trực tiếp trong \(q_o\).

### 4.13.19. Growth capacity

Một reduced capacity:

$
G_o^{cap}
=
G_{o,max}
A_{TOR}
(1-A_{SnRK1}^{eff})
$

Đây là VECrop proposal, cần validation.

### 4.13.20. Starch dynamics

Một balance:

$
\frac{dC_{starch}}{dt}
=
P_{starch}
-
D_{starch}
$

Ban ngày:

$
P_{starch}>0
$

thường tăng.

Ban đêm:

$
D_{starch}>0
$

cung carbon cho respiration và growth.

### 4.13.21. Night carbon starvation

Nếu starch reserve không đủ:

$
C_{starch}\downarrow
\rightarrow
Sugar\downarrow
\rightarrow
SnRK1\uparrow
$

có thể làm:
- growth giảm;
- catabolism tăng;
- gene stress response thay đổi.

### 4.13.22. Diurnal carbon balance

Một day-night balance:

$
C_{net,day}
=
A_{day}
-
R_{day}
-
Export_{day}
-
Storage_{day}
$

$
C_{net,night}
=
Mobilization_{starch}
-
R_{night}
-
Growth_{night}
$

### 4.13.23. Carbon starvation diagnostic

Một reduced index:

$
H_C
=
\min
\left(
1,
\frac{C_{available}}
{C_{demand}+\varepsilon}
\right)
$

Không dùng nếu carbon balance đã được mô hình hóa đầy đủ.

### 4.13.24. Growth–survival tradeoff

Under stress:

$
Growth\downarrow
$

có thể đồng thời:

$
Survival\ capacity\uparrow
$

Do đó HSY không được định nghĩa đơn giản là “growth càng cao càng khỏe”.

### 4.13.25. Cấu trúc state-space

Có thể mở rộng state vector:

$
\mathbf x_C
=
[
Sucrose,
Glucose,
Starch,
T6P,
SnRK1,
TOR,
ATP
]^T
$

Dynamics:

$
\frac{d\mathbf x_C}{dt}
=
\mathbf f_C(
\mathbf x_C,
A_{can},
F_C,
N,
Hormone,
Stress,
stage
)
$

### 4.13.26. Coupling với Chương 4.5

Phloem đưa sucrose tới sink:

$
F_C=C_{Suc}Q_{ph}
$

4.13 chuyển flux này thành trạng thái carbon–energy điều khiển growth capacity.

### 4.13.27. Coupling với 4.8

Từ ATP balance:

$
ATP_{sup}
\leftrightarrow
S_E
$

Không được vừa dùng \(H_E\) vừa dùng lại cùng ATP limitation trong \(A_{TOR}\) nếu dẫn đến double counting.

### 4.13.28. Coupling với 4.12

Một regulatory function mở rộng:

$
y_o
=
f(
Hormone,
Ca,
ROS,
MAPK,
Sugar,
SnRK1,
TOR,
stage
)
$

### 4.13.29. Lúa

Ở lúa, carbon signaling cần gắn với:
- tillering;
- panicle development;
- grain filling;
- source–sink balance;
- nighttime starch turnover.

### 4.13.30. Ngô

Ở ngô:
- C4 assimilation cao;
- reproductive sink mạnh;
- kernel set và grain filling nhạy với carbon supply;
- drought có thể làm thay đổi source–sink và SnRK1/TOR signaling.

### 4.13.31. Xà lách

Ở xà lách:
- marketable organ là leaf;
- sink là vegetative tissue;
- sugar status ảnh hưởng leaf expansion;
- carbon excess/deficit tương tác mạnh với light và root-zone temperature.

### 4.13.32. Parameter provenance

Các tham số cần provenance:
- \(K_C\);
- \(K_E\);
- \(\beta_i\);
- \(\gamma_i\);
- \(K_{T6P}\);
- starch turnover rates.

Không dùng một bộ chung cho mọi crop.

### 4.13.33. Experimental observables

Có thể đo:
- sucrose;
- glucose;
- starch;
- T6P;
- ATP/ADP;
- SnRK1 activity;
- TOR activity/phosphorylation proxies;
- growth rate;
- sink biomass.

### 4.13.34. Calibration hierarchy

Ưu tiên:
1. sugar pools;
2. starch turnover;
3. T6P;
4. SnRK1/TOR proxies;
5. organ growth;
6. whole-plant biomass.

Không fit toàn bộ chỉ bằng final yield.

### 4.13.35. Validation

Một model 4.13 tốt phải tái hiện:
- day/night sugar dynamics;
- starvation response;
- source–sink perturbation;
- stress-induced growth slowdown;
- recovery sau stress.

### 4.13.36. Không double counting

Nếu sink strength đã dùng \(F_{sugar}\) và \(F_{energy}\), không nhân lại \(H_C\) vào growth.

Nếu TOR đã phụ thuộc ATP, không nhân thêm \(H_E\) lần nữa nếu cùng mechanism.

### 4.13.37. Vai trò của 4.13 trong VECrop

4.13 tạo cầu nối:

<div class="flow-chain">
<strong>Quang hợp</strong> → <strong>Sucrose/Starch</strong> → <strong>T6P/HXK</strong> → <strong>SnRK1/TOR</strong> → <strong>Gene/Enzyme</strong> → <strong>Sink strength & Growth capacity</strong>
</div>

### 4.13.38. Kết luận 4.13

Sugar sensing không thay thế carbon balance.

Đúng hơn:

$
Carbon\ balance
\rightarrow
Sugar\ status
\rightarrow
T6P/SnRK1/TOR
\rightarrow
Regulation
\rightarrow
Growth\ capacity
$

Trong VECrop, T6P–SnRK1–TOR nên được dùng như **regulatory layer**, còn carbon flux và biomass vẫn phải tuân theo conservation.

---


## 4.14. Meristem – phân chia tế bào – giãn tế bào – phát triển cơ quan và phenology

### 4.14.1. Vai trò của meristem

Sinh trưởng vô hạn của cây phụ thuộc các vùng meristem duy trì quần thể tế bào phân chia.

Hai hệ chính:
- shoot apical meristem (SAM);
- root apical meristem (RAM).

Meristem cung cấp tế bào mới cho:
- lá;
- thân;
- rễ;
- mô dẫn;
- cơ quan sinh sản.

### 4.14.2. Organogenesis là quá trình hậu phôi chủ đạo

Ở cây, phần lớn cơ quan mới được hình thành sau nảy mầm.

Do đó:

$
Organ\ growth
=
Cell\ production
+
Cell\ expansion
+
Differentiation
$

Không nên mô tả tăng trưởng cơ quan chỉ bằng biomass accumulation.

### 4.14.3. Phân rã tăng trưởng cơ quan

Một decomposition:

$
B_o
=
N_{cell,o}
m_{cell,o}
$

Suy ra:

$
\frac{dB_o}{dt}
=
N_{cell,o}
\frac{dm_{cell,o}}{dt}
+
m_{cell,o}
\frac{dN_{cell,o}}{dt}
$

Trong đó:
- \(N_{cell,o}\): số tế bào;
- \(m_{cell,o}\): khối lượng trung bình mỗi tế bào.

Đây là decomposition khái niệm, không phải mô hình duy nhất.

### 4.14.4. Cell proliferation rate

Một dạng:

$
\frac{dN_{cell}}{dt}
=
r_{div}
N_{cycling}
$

trong đó:
- \(r_{div}\): division rate;
- \(N_{cycling}\): số tế bào đang trong cell cycle.

### 4.14.5. Cell-cycle duration

Nếu chu kỳ tế bào trung bình là:

$
T_c
$

thì một approximation:

$
r_{div}
\approx
\frac{\ln 2}{T_c}
$

chỉ hợp lý khi population tăng gần exponential.

### 4.14.6. Cell-cycle phases

Cell cycle gồm:
- G1;
- S;
- G2;
- M.

Một state vector:

$
\mathbf N_{cycle}
=
[N_{G1},N_S,N_{G2},N_M]^T
$

Ở mô hình sâu có thể dùng transition rates giữa các pha.

### 4.14.7. Cyclin–CDK control

Cell cycle được điều hòa bởi:
- cyclins;
- CDKs;
- inhibitors;
- checkpoint signals.

VECrop không cần mô hình chi tiết protein nếu dữ liệu không đủ; có thể dùng:

$
r_{div}^{eff}
=
r_{div}^{ref}
F_{C}
F_{N}
F_{TOR}
F_{Hormone}
F_T
$

đây là reduced formulation.

### 4.14.8. TOR và meristem activation

Từ 4.13:

$
Carbon/Nutrient/Energy
\rightarrow
TOR
\rightarrow
Meristem\ activation
$

TOR có thể điều phối:
- cell-cycle entry;
- ribosome biogenesis;
- protein synthesis;
- meristem activity.

### 4.14.9. SnRK1 và cell proliferation

Khi năng lượng thiếu:

$
SnRK1\uparrow
\rightarrow
Anabolism\downarrow
\rightarrow
Cell\ proliferation\downarrow
$

Đây là directional biological relation; quantitative strength cần calibration.

### 4.14.10. Cell expansion

Từ Lockhart-type framework:

$
\frac{dV}{dt}
=
\phi
(P-Y)
$

khi:

$
P>Y
$

Cell expansion phụ thuộc:
- turgor;
- wall extensibility;
- osmotic status;
- hormone;
- temperature.

### 4.14.11. Relative expansion rate

$
RER
=
\frac1V
\frac{dV}{dt}
$

Một reduced formulation:

$
RER
=
RER_{max}
F_{\Psi}
F_{wall}
F_{auxin}
F_{TOR}
$

### 4.14.12. Turgor–growth coupling

$
\Psi_w
=
\Psi_p+\Psi_s
$

Ở cấp tế bào, giảm water potential ngoài có thể làm:

$
P\downarrow
\rightarrow
Cell\ expansion\downarrow
$

trước khi photosynthesis giảm mạnh.

### 4.14.13. Wall loosening

Cell expansion liên quan đến:
- expansin;
- XTH;
- pectin remodeling;
- proton-mediated wall acidification.

Một conceptual chain:

$
H^+\ export
\rightarrow
Wall\ acidification
\rightarrow
Wall\ loosening
\rightarrow
Expansion
$

Không nên biến acid growth thành cơ chế duy nhất cho mọi mô.

### 4.14.14. Auxin và expansion

Auxin có thể tăng cell expansion trong một số mô qua:
- proton pump activation;
- wall loosening;
- gene regulation.

Một reduced response:

$
F_{IAA}
=
f(IAA,organ,stage)
$

Không dùng cùng hàm cho root và shoot.

### 4.14.15. Cytokinin và meristem

Cytokinin liên quan:
- cell division;
- SAM maintenance;
- shoot growth;
- nutrient signaling.

Một organ-specific regulator:

$
F_{CK,o}
=
f(CK_o,stage)
$

### 4.14.16. GA và elongation

GA thường liên quan:
- stem elongation;
- seed germination;
- floral development.

Một reduced elongation factor:

$
F_{GA}
=
\frac{GA}
{K_{GA}+GA}
$

chỉ dùng khi có calibration.

### 4.14.17. BR và growth

Brassinosteroid ảnh hưởng:
- cell expansion;
- vascular differentiation;
- growth signaling.

BR response cần được tích hợp với auxin/TOR, tránh cộng tuyến tính thô.

### 4.14.18. Differentiation

Tế bào rời meristem phải chuyển từ:
- proliferation;
- expansion;
- differentiation.

Một conceptual transition:

$
Meristematic
\rightarrow
Expansion
\rightarrow
Differentiated
$

### 4.14.19. Root developmental zones

RAM có thể tách:
- stem-cell niche;
- meristematic zone;
- transition zone;
- elongation zone;
- differentiation zone.

Điều này giúp nối cell cycle với root architecture.

### 4.14.20. Root elongation rate

Một balance:

$
\frac{dL_r}{dt}
=
v_{cell\ production}
+
v_{elongation}
$

Trong reduced form:

$
RGR_{root}
=
RGR_{root,max}
F_TF_{\Psi}F_NF_{O_2}F_{TOR}
$

### 4.14.21. Shoot apical meristem

SAM tạo:
- leaf primordia;
- axillary meristem;
- reproductive structures.

Meristem state cần liên kết với phenology.

### 4.14.22. Leaf initiation rate

Một phyllochron-type framework:

$
N_{leaf}(t)
=
N_0
+
\frac{TT(t)}
{Phyllochron}
$

chỉ dùng trong miền phát triển phù hợp.

Phyllochron phụ thuộc genotype và temperature regime.

### 4.14.23. Thermal time

Một dạng đơn giản:

$
TT
=
\sum_d
\max
(
0,
T_{mean,d}-T_b
)
$

Trong đó \(T_b\) là base temperature.

Không dùng một \(T_b\) chung cho mọi crop/giai đoạn.

### 4.14.24. Cardinal temperatures

Một process có thể có:
- \(T_b\): base;
- \(T_{opt}\): optimum;
- \(T_{max}\): maximum.

Một triangular response:

$
f_T(T)
=
\begin{cases}
0,&T\le T_b\\
\frac{T-T_b}{T_{opt}-T_b},&T_b<T<T_{opt}\\
\frac{T_{max}-T}{T_{max}-T_{opt}},&T_{opt}\le T<T_{max}\\
0,&T\ge T_{max}
\end{cases}
$

Đây là reduced phenology function.

### 4.14.25. Nonlinear thermal time

Khi temperature response phi tuyến mạnh:

$
TT_{eff}
=
\sum_t
f_T(T_t)\Delta t
$

có ý nghĩa hơn linear degree-day.

### 4.14.26. Photoperiod

Một developmental modifier:

$
F_P
=
f(Daylength,genotype,stage)
$

Không giả định mọi cultivar cùng photoperiod sensitivity.

### 4.14.27. Photoperiod classes

Cây có thể:
- short-day;
- long-day;
- day-neutral;
- quantitative/qualitative response.

Lúa thường có genotype-specific short-day sensitivity; nhiều giống hiện đại giảm sensitivity.

### 4.14.28. Vernalization

Vernalization là đáp ứng phát triển với prolonged low temperature ở các loài/giống cần cold exposure.

Một reduced state:

$
V(t)
=
\min
\left(
1,
V(t-\Delta t)
+
r_V(T)\Delta t
\right)
$

Chỉ áp dụng với crop có vernalization requirement.

### 4.14.29. Không ép vernalization cho lúa/ngô/xà lách

VECrop không được mặc định cả ba crop đều có vernalization requirement.

Module chỉ bật khi:
- species;
- cultivar;
- production context
có bằng chứng phù hợp.

### 4.14.30. Development rate

Một reduced formulation:

$
D_{dev}
=
D_{max}
F_T
F_P
F_V
F_G
$

Trong đó:
- \(F_T\): temperature;
- \(F_P\): photoperiod;
- \(F_V\): vernalization;
- \(F_G\): genotype.

### 4.14.31. Developmental stage state

Một state:

$
0\le DVS\le2
$

ví dụ:
- \(DVS=0\): emergence;
- \(DVS=1\): flowering;
- \(DVS=2\): maturity.

Đây chỉ là convention mô hình; mapping phải crop-specific.

### 4.14.32. Stage transition

Một threshold:

$
DVS(t+\Delta t)
=
DVS(t)
+
r_{dev}\Delta t
$

Khi vượt threshold thì chuyển stage.

### 4.14.33. Developmental timing không chỉ là “đồng hồ nhiệt”

Plant developmental timing còn phụ thuộc:
- growth status;
- circadian system;
- light;
- carbon;
- hormones;
- stress.

Do đó thermal time chỉ là reduced layer.

### 4.14.34. Circadian coupling

Một signal:

$
C_{circ}(t)
=
A\sin
\left(
\frac{2\pi t}{24}
+\phi
\right)
$

chỉ là mathematical proxy.

Circadian regulation có thể ảnh hưởng:
- starch turnover;
- flowering;
- hormone timing;
- growth rhythms.

### 4.14.35. Thermomorphogenesis

Nhiệt độ ấm nhưng chưa gây heat stress có thể thay đổi:
- elongation;
- leaf angle;
- architecture;
- flowering timing.

Không đồng nhất thermomorphogenesis với heat damage.

### 4.14.36. Development vs growth

Phân biệt:

$
Development
\neq
Growth
$

Growth: tăng kích thước/biomass.

Development: chuyển trạng thái/identity.

Một cây có thể phát triển nhanh về stage nhưng biomass thấp.

### 4.14.37. Organ initiation

Một organ number model:

$
\frac{dN_o}{dt}
=
r_{init,o}
$

với:

$
r_{init,o}
=
f(T,photoperiod,meristem,genotype)
$

### 4.14.38. Leaf area expansion

$
\frac{dA_L}{dt}
=
N_L
\frac{dA_{cell}}{dt}
+
A_{cell}
\frac{dN_{cell}}{dt}
$

Tương tự decomposition biomass.

### 4.14.39. Specific leaf area

$
SLA
=
\frac{Leaf\ area}
{Leaf\ dry\ mass}
$

SLA có thể thay đổi theo:
- light;
- N;
- temperature;
- age.

Không giữ cố định cả vụ nếu cần mechanistic accuracy.

### 4.14.40. LAI formation

$
LAI
=
\frac{Leaf\ area}{Ground\ area}
$

Dynamics:

$
\frac{dLAI}{dt}
=
LAI_{growth}
-
LAI_{senescence}
$

### 4.14.41. Root–shoot coordination

Một allocation balance:

$
C_{growth}
=
C_{root}
+
C_{shoot}
+
C_{reproductive}
$

Meristem demand cạnh tranh carbon theo source–sink status.

### 4.14.42. Meristem demand

Một sink demand:

$
Demand_{meristem}
=
M_{meristem}
q_{meristem}
F_{TOR}
F_{stage}
$

Đây là VECrop proposed formulation.

### 4.14.43. Cell-number limitation

Nếu carbon đủ nhưng division thấp:

$
Growth
\approx
Cell\ number\ limited
$

Nếu division đủ nhưng water/turgor thấp:

$
Growth
\approx
Cell\ expansion\ limited
$

### 4.14.44. Multiplicative limitation caution

Không mặc định:

$
Growth
=
F_{division}
F_{expansion}
F_{differentiation}
$

vì các process có coupling và compensation.

### 4.14.45. Stress effect on meristem

Stress có thể:
- arrest cell cycle;
- reduce meristem size;
- shift differentiation;
- alter hormone gradients.

Một reduced modifier:

$
r_{div}^{stress}
=
r_{div}^{ref}
F_{stress}
$

### 4.14.46. Drought

Drought thường làm giảm:
- turgor;
- cell expansion;
- meristem activity;
- leaf appearance rate.

Expansion có thể phản ứng trước photosynthesis.

### 4.14.47. Hypoxia

Hypoxia:

$
ATP\downarrow
\rightarrow
Cell\ cycle/expansion\downarrow
$

nhưng rice roots có adaptation đặc thù.

### 4.14.48. Salinity

Salinity ảnh hưởng:
- osmotic expansion;
- ion homeostasis;
- ROS;
- hormone signaling;
- meristem activity.

Không chỉ giảm một “salinity growth factor”.

### 4.14.49. Nutrient deficiency

N/P/K deficiency có thể thay đổi:
- meristem activity;
- organ initiation;
- leaf expansion;
- root/shoot allocation.

Response phụ thuộc nutrient.

### 4.14.50. Phenology × source–sink

Developmental stage quyết định:
- active sinks;
- sink strength;
- nutrient demand;
- allocation priorities.

Do đó:

$
SS_o
=
SS_o(stage)
$

### 4.14.51. Phenology × respiration

Maintenance/growth respiration thay đổi theo:
- organ age;
- active tissue fraction;
- stage.

Không dùng một hệ số duy nhất cho cả vòng đời.

### 4.14.52. Phenology × nutrient demand

$
q_{i,o}^{*}
=
q_{i,o}^{*}(stage)
$

Nutrient target concentration thay đổi theo stage và organ.

### 4.14.53. Lúa: phenology

Các stage chính có thể gồm:
- emergence;
- tillering;
- panicle initiation;
- booting;
- heading/flowering;
- grain filling;
- maturity.

VECrop cần map stage theo cultivar.

### 4.14.54. Lúa: tiller dynamics

Một reduced tiller balance:

$
\frac{dN_{tiller}}{dt}
=
Initiation
-
Mortality
$

Initiation phụ thuộc:
- carbon;
- N;
- light;
- cytokinin/strigolactone;
- density.

### 4.14.55. Ngô: phenology

Các stage cần phân biệt:
- emergence;
- vegetative leaf stages;
- tasseling;
- silking;
- grain filling;
- maturity.

Thermal time thường hữu ích nhưng cultivar-specific.

### 4.14.56. Ngô: anthesis–silking synchrony

Một diagnostic:

$
ASI
=
t_{silking}
-
t_{anthesis}
$

ASI tăng trong stress có thể phản ánh reproductive stress.

### 4.14.57. Xà lách: phenology

Các trạng thái chính:
- emergence;
- rosette expansion;
- marketable vegetative stage;
- bolting;
- flowering.

Với production lettuce, bolting thường là transition không mong muốn.

### 4.14.58. Xà lách: bolting

Bolting phụ thuộc:
- genotype;
- temperature;
- photoperiod;
- developmental state.

Không dùng một threshold nhiệt duy nhất cho mọi cultivar.

### 4.14.59. Organ-specific growth

Một general form:

$
\frac{dB_o}{dt}
=
G_o^{pot}
F_{source}
F_{water}
F_{nut}
F_{dev}
$

Đây là reduced form và phải tránh double counting.

### 4.14.60. Mechanistic alternative

Ở mức cơ chế hơn:

$
\frac{dB_o}{dt}
=
Carbon\ allocation_o
-
Respiration_o
-
Turnover_o
$

và meristem/cell-expansion module quyết định capacity.

### 4.14.61. Developmental capacity

Một proposed capacity:

$
G_o^{cap}
=
f(
Meristem_o,
CellCycle_o,
Expansion_o,
TOR_o,
Hormone_o,
Stage
)
$

### 4.14.62. Growth rate thực

$
G_o
=
\min
(
G_o^{source},
G_o^{cap}
)
$

Đây là conceptual supply–capacity coupling.

### 4.14.63. Sink capacity

Từ 4.5:

$
SS_o
=
M_oq_o
$

4.14 giúp giải thích \(M_o\) qua:
- cell number;
- organ number;
- meristem size.

### 4.14.64. Coupling với 4.13

Chuỗi:

$
Sugar/T6P/TOR
\rightarrow
CellCycle
\rightarrow
Meristem
\rightarrow
Organ\ growth
$

### 4.14.65. Coupling với 4.12

Hormone–Ca–ROS–MAPK có thể điều chỉnh:
- cell-cycle entry;
- wall expansion;
- differentiation;
- developmental transitions.

### 4.14.66. Coupling với 4.6

Leaf development quyết định:

$
LAI
$

và từ đó ảnh hưởng:

$
A_{can}
$

### 4.14.67. Coupling với 4.7

Phenology quyết định:

$
Req_{i,o}
$

và remobilization timing.

### 4.14.68. Parameter provenance

Cần provenance cho:
- \(T_b\);
- \(T_{opt}\);
- \(T_{max}\);
- phyllochron;
- photoperiod sensitivity;
- cell-cycle duration;
- meristem size;
- organ initiation rate;
- SLA.

### 4.14.69. Experimental observables

Có thể đo:
- meristem cell number;
- EdU/BrdU-type proliferation labeling;
- root meristem length;
- cell length profile;
- leaf appearance;
- organ number;
- LAI;
- thermal time;
- flowering/heading date.

### 4.14.70. Calibration hierarchy

Nên hiệu chỉnh:
1. temperature response;
2. leaf/root initiation;
3. cell division/expansion;
4. organ growth;
5. developmental transition;
6. whole-plant phenology.

### 4.14.71. Validation

Validation cần kiểm:
- stage dates;
- leaf number;
- root elongation;
- LAI;
- organ biomass;
- flowering/heading;
- maturity.

### 4.14.72. Không dùng yield để fit phenology duy nhất

Final yield không đủ để nhận dạng:
- \(T_b\);
- photoperiod sensitivity;
- phyllochron;
- cell-cycle rate.

Cần time-series developmental data.

### 4.14.73. Không double counting

Nếu phenology đã điều chỉnh:
- sink strength;
- nutrient demand;
- photosynthetic area;

thì không nhân thêm một “stage factor” chung vào yield.

### 4.14.74. Vai trò của 4.14

4.14 chuyển regulatory state thành cấu trúc phát triển:

<div class="flow-chain">
<strong>Carbon–TOR/Hormone</strong> → <strong>Meristem</strong> → <strong>Cell division</strong> → <strong>Cell expansion</strong> → <strong>Organ initiation</strong> → <strong>Phenology</strong> → <strong>Canopy/Root/Sink capacity</strong>
</div>

### 4.14.75. Kết luận 4.14

Phát triển cây cần tách hai trục:

$
Growth
\neq
Development
$

và mô hình VECrop nên biểu diễn:

$
Environment
\rightarrow
Developmental\ timing
\rightarrow
Organ\ capacity
$

song song với:

$
Carbon/Nutrient/Water
\rightarrow
Growth\ realization
$

Như vậy phenology xác định **khi nào và cơ quan nào có khả năng tăng trưởng**, còn source–sink, hydraulics và metabolism xác định **mức tăng trưởng thực sự đạt được**.

---


## 4.15. Lão hóa – programmed cell death – tái huy động dinh dưỡng – kết thúc vòng đời cơ quan

### 4.15.1. Senescence là một chương trình phát triển

Senescence không chỉ là “già đi” thụ động.

Ở cấp cơ quan, nó là một quá trình được điều hòa, thường bao gồm:
- suy giảm quang hợp;
- tháo dỡ chloroplast;
- proteolysis;
- lipid turnover;
- nucleic-acid degradation;
- tái huy động N, P, K và carbon;
- cuối cùng có thể dẫn tới programmed cell death.

### 4.15.2. Phân biệt senescence và programmed cell death

Không đồng nhất:

$
Senescence
=
PCD
$

Senescence có thể kéo dài nhiều ngày hoặc nhiều tuần, còn PCD là pha kết thúc của một số chương trình phát triển/stress.

### 4.15.3. Developmental senescence

Một developmental driver:

$
S_{dev}
=
f(
age,
DVS,
organ,
genotype
)
$

Senescence có thể bắt đầu ngay cả khi môi trường không stress.

### 4.15.4. Stress-induced senescence

Stress có thể thúc đẩy senescence:

$
S_{stress}
=
f(
drought,
salinity,
heat,
nutrient\ deficiency,
pathogen,
shade
)
$

Không được dùng một stress factor chung cho mọi nguyên nhân.

### 4.15.5. Senescence rate

Một reduced state:

$
\frac{dS_o}{dt}
=
r_{sen,o}
(1-S_o)
$

với:

$
0\le S_o\le1
$

Trong đó \(S_o=0\) là chưa senescent và \(S_o=1\) là senescence hoàn tất.

### 4.15.6. Rate phụ thuộc stage và stress

$
r_{sen,o}
=
r_{0,o}
F_{stage}
F_T
F_{water}
F_N
F_{hormone}
F_{ROS}
$

Đây là reduced VECrop formulation.

### 4.15.7. Chlorophyll loss

Một proxy:

$
\frac{dChl}{dt}
=
-k_{Chl}S_oChl
$

Chlorophyll decline là chỉ báo hữu ích nhưng không bằng toàn bộ senescence state.

### 4.15.8. Photosynthetic decline

Một reduced relation:

$
V_{cmax}^{eff}
=
V_{cmax}^{green}
F_{sen}
$

$
J_{max}^{eff}
=
J_{max}^{green}
F_{sen}
$

với:

$
F_{sen}=1-S_o
$

chỉ là approximation.

### 4.15.9. Chloroplast dismantling

Trong leaf senescence, chloroplast thường là nguồn lớn của N được tái huy động do Rubisco và protein quang hợp chiếm tỷ lệ N đáng kể.

### 4.15.10. Protein degradation

Một protein pool:

$
\frac{dP_o}{dt}
=
Synthesis_o
-
Degradation_o
$

Trong senescence:

$
Degradation_o\uparrow
$

### 4.15.11. Proteolysis

Proteolysis tạo:
- amino acids;
- peptides;
- N remobilizable pools.

Một flux:

$
F_{prot\rightarrow AA}
=
k_{prot}S_oP_o
$

### 4.15.12. Nitrogen remobilization

Từ 4.7:

$
F_{rem,N,o}
=
k_{rem,N,o}(t)
M_{N,o}^{mob}
$

4.15 mở rộng bằng senescence control:

$
F_{rem,N,o}^{eff}
=
k_{rem,N,o}
S_o
M_{N,o}^{mob}
$

### 4.15.13. Phosphorus remobilization

$
F_{rem,P,o}
=
k_{rem,P,o}
S_o
M_{P,o}^{mob}
$

Khả năng remobilize P phụ thuộc:
- chemical form;
- tissue;
- sink demand;
- genotype.

### 4.15.14. Potassium remobilization

K thường có mobility cao trong phloem.

Một balance:

$
F_{rem,K,o}
=
k_{rem,K,o}
S_o
M_{K,o}^{mob}
$

### 4.15.15. Mineral-specific remobilization

Không dùng:

$
F_{rem,N}
=
F_{rem,P}
=
F_{rem,K}
$

vì mobility và biochemical binding khác nhau.

### 4.15.16. Source transition

Một lá có thể chuyển:

$
Sink\ leaf
\rightarrow
Source\ leaf
\rightarrow
Senescing\ source
$

Trong giai đoạn senescing, export vẫn có thể cao dù photosynthesis đang giảm.

### 4.15.17. Sink priority

Trong reproductive stage:

$
Priority_{grain}
\uparrow
$

có thể thúc đẩy remobilization từ vegetative organs.

### 4.15.18. Carbon remobilization

Stored carbon có thể được huy động:

$
Starch/Fructan/NSC
\rightarrow
Sucrose
\rightarrow
Phloem
\rightarrow
Sink
$

### 4.15.19. NSC pool

$
NSC
=
Sucrose
+
Glucose
+
Fructose
+
Starch
$

tùy định nghĩa thực nghiệm.

### 4.15.20. Carbon remobilization flux

$
F_{rem,C,o}
=
k_{rem,C,o}
S_o
M_{C,o}^{storage}
$

### 4.15.21. Hormone control

Hormone liên quan senescence gồm:
- ethylene;
- ABA;
- cytokinin;
- JA;
- SA;
- auxin interactions.

Không gán:
- cytokinin = luôn chống lão hóa;
- ethylene = luôn gây lão hóa
một cách tuyệt đối cho mọi mô.

### 4.15.22. Cytokinin effect

Trong nhiều bối cảnh:

$
CK\uparrow
\Rightarrow
Senescence\ delay
$

nhưng magnitude phụ thuộc:
- tissue;
- stage;
- source–sink;
- genotype.

### 4.15.23. Ethylene effect

Ethylene có thể thúc đẩy senescence ở nhiều hệ:

$
ET\uparrow
\Rightarrow
r_{sen}\uparrow
$

nhưng response phải organ-specific.

### 4.15.24. ABA effect

ABA có thể tăng trong drought và phối hợp:
- stomatal closure;
- stress response;
- senescence acceleration.

Không nên phạt drought qua ABA thêm lần nữa nếu drought đã ảnh hưởng trực tiếp lên cùng process.

### 4.15.25. ROS và senescence

ROS có thể vừa là signal vừa là damage.

Một coupling:

$
r_{sen}
=
r_0
[
1+\alpha_{ROS}S_{ROS}
+\beta_{D}D_{ROS}
]
$

Đây là proposed formulation.

### 4.15.26. Autophagy

Autophagy đóng vai trò trong:
- recycling cellular components;
- nutrient remobilization;
- stress survival;
- senescence progression.

Một reduced flux:

$
F_{auto}
=
k_{auto}
A_{auto}
M_{substrate}
$

### 4.15.27. Autophagy không đồng nhất với cell death

Autophagy có thể hỗ trợ survival và recycling trước khi PCD xảy ra.

Do đó:

$
Autophagy
\neq
PCD
$

### 4.15.28. Programmed cell death state

Một PCD activation state:

$
A_{PCD}
=
\sigma
(
\beta_0
+
\beta_{ROS}D_{ROS}
+
\beta_{ET}ET^*
+
\beta_{ABA}ABA^*
+
\beta_{dev}DVS
)
$

Đây là VECrop proposed diagnostic.

### 4.15.29. Membrane integrity decline

$
H_{mem}
=
e^{-\lambda DD}
$

với \(D\) là damage state tổng hợp.

### 4.15.30. Senescence và phloem export

Một organ export:

$
F_{export,o}
=
F_{phloem,o}
+
F_{rem,C,o}
+
F_{rem,N,o}
+
F_{rem,P,o}
+
F_{rem,K,o}
$

### 4.15.31. Reproductive sink coupling

$
F_{rem,i\rightarrow grain}
=
a_{grain,i}
F_{rem,i,total}
$

Trong đó \(a_{grain,i}\) phụ thuộc sink strength.

### 4.15.32. Grain filling

Một grain nutrient balance:

$
\frac{dM_{i,grain}}{dt}
=
U_{new,i}
+
F_{rem,i\rightarrow grain}
-
Loss_i
$

### 4.15.33. New uptake và remobilization

Final grain nutrient có thể đến từ hai nguồn:

$
M_{i,grain}
=
M_{i,new\ uptake}
+
M_{i,remobilized}
$

Không được suy rằng toàn bộ grain N đến từ remobilization.

### 4.15.34. Remobilization efficiency

$
RE_i
=
\frac{M_{i,remobilized}}
{M_{i,pre-senescence}}
$

Cần định nghĩa rõ pool và thời điểm đo.

### 4.15.35. Apparent remobilization efficiency

Từ biomass/tissue concentration:

$
ARE_i
=
\frac{M_{i,pre}-M_{i,post}}
{M_{i,pre}}
$

Đây là apparent metric, không chứng minh flux đích đến.

### 4.15.36. Isotope validation

Khi cần xác định flux thực:
- \(^{15}N\);
- \(^{13}C\);
- stable isotope tracing

có thể giúp phân biệt uptake mới và remobilization.

### 4.15.37. Leaf area loss

LAI dynamics:

$
\frac{dLAI}{dt}
=
LAI_{growth}
-
LAI_{sen}
$

Một senescence loss:

$
LAI_{sen}
=
k_{LAI,sen}S_{leaf}LAI
$

### 4.15.38. Green leaf area index

$
GLAI
=
LAI(1-S_{leaf})
$

Đây là reduced canopy representation.

### 4.15.39. Canopy photosynthesis under senescence

$
A_{can}
=
\int_0^{GLAI}
A_n(L,t)\,dL
$

hoặc phải tách green/senescent fractions.

### 4.15.40. Stay-green trait

Stay-green không phải một trait duy nhất.

Cần phân biệt:
- cosmetic stay-green;
- functional stay-green.

Functional stay-green duy trì photosynthetic function lâu hơn.

### 4.15.41. Stay-green và yield

Stay-green có thể tăng yield trong một số điều kiện nếu:
- sink còn hoạt động;
- water supply đủ;
- remobilization không bị cản trở.

Không mặc định stay-green luôn tốt.

### 4.15.42. Senescence timing

Senescence quá sớm:

$
Source\ duration\downarrow
$

Senescence quá muộn có thể:

$
Remobilization\ efficiency\downarrow
$

tùy crop và mục tiêu thu hoạch.

### 4.15.43. Source duration

Một source-duration metric:

$
SAD
=
\int_{t_1}^{t_2}
GLAI(t)\,dt
$

Green leaf area duration có thể liên hệ với cumulative carbon capture.

### 4.15.44. Source–sink balance

Nếu sink nhỏ:

$
Sink\ limitation
\rightarrow
Sugar\ accumulation
\rightarrow
Feedback
\rightarrow
Senescence\ regulation
$

### 4.15.45. Sugar signaling

Từ 4.13:

$
Sucrose/T6P/SnRK1/TOR
\leftrightarrow
Senescence
$

Carbon starvation và carbon excess có thể gây response khác nhau.

### 4.15.46. SnRK1

Trong carbon deficit:

$
SnRK1\uparrow
$

có thể thúc đẩy:
- catabolism;
- survival responses;
- recycling.

### 4.15.47. TOR

Khi growth-supporting carbon/nutrient cao:

$
TOR\uparrow
$

có thể trì hoãn một số starvation-like responses.

Không dùng TOR như “anti-senescence scalar” phổ quát.

### 4.15.48. Nitrogen status

N deficiency có thể tăng senescence ở lá già:

$
N_{status}\downarrow
\rightarrow
Remobilization\uparrow
$

nhưng response phụ thuộc sink demand.

### 4.15.49. Phosphorus status

P deficiency có thể thay đổi:
- leaf longevity;
- membrane turnover;
- RNA turnover;
- P remobilization.

### 4.15.50. Potassium status

K deficiency có thể ảnh hưởng:
- phloem loading;
- osmotic regulation;
- carbohydrate export;
- senescence timing.

### 4.15.51. Water stress

Drought có thể:
- tăng ABA;
- tăng ROS;
- giảm photosynthesis;
- tăng leaf senescence.

Nhưng mild drought và terminal drought phải được tách.

### 4.15.52. Heat

Heat stress có thể tăng:
- protein damage;
- membrane damage;
- ROS;
- reproductive failure;
- accelerated senescence.

### 4.15.53. Hypoxia

Hypoxia kéo dài có thể:
- ATP deficit;
- ROS khi reoxygenation;
- root death;
- premature senescence.

### 4.15.54. Pathogen-triggered senescence

Pathogen và defense signaling có thể kích hoạt:
- SA;
- JA/ET;
- ROS;
- localized PCD.

Không gộp disease senescence vào developmental senescence.

### 4.15.55. Organ-specific senescence

$
S_{leaf}
\neq
S_{root}
\neq
S_{stem}
\neq
S_{grain}
$

Cần state riêng theo organ.

### 4.15.56. Root senescence

Root senescence ảnh hưởng:
- active root length;
- nutrient uptake;
- hydraulic conductance;
- rhizodeposition.

### 4.15.57. Root mortality

Một balance:

$
\frac{dM_{root}}{dt}
=
Growth_{root}
-
Mortality_{root}
$

Trong đó:

$
Mortality_{root}
=
k_{death}S_{root}M_{root}
$

### 4.15.58. Active root fraction

$
f_{active}
=
\frac{M_{root,active}}
{M_{root,total}}
$

Uptake nên phụ thuộc active fraction hơn total root biomass.

### 4.15.59. Stem remobilization

Stem có thể lưu:
- soluble sugars;
- fructans ở một số loài;
- N compounds;
- K.

Tỷ lệ remobilization phụ thuộc crop.

### 4.15.60. Lúa

Ở lúa, cần theo dõi:
- leaf senescence;
- stem NSC;
- grain filling;
- N remobilization;
- stay-green;
- source–sink after heading.

### 4.15.61. Ngô

Ở ngô, cần theo dõi:
- post-silking N uptake;
- remobilization từ vegetative tissues;
- stay-green;
- leaf senescence progression;
- kernel sink strength.

### 4.15.62. Xà lách

Ở xà lách, marketable stage thường trước reproductive senescence.

Cần đặc biệt theo dõi:
- outer-leaf senescence;
- tipburn/necrosis phân biệt với senescence;
- bolting transition;
- marketable biomass loss.

### 4.15.63. Senescence vs necrosis

Không đồng nhất:

$
Senescence
=
Necrosis
$

Necrosis có thể là damage/pathology, còn senescence là regulated developmental program.

### 4.15.64. Senescence vs abscission

Abscission là quá trình tách cơ quan.

Một leaf có thể senesce trước abscission nhưng hai quá trình không đồng nhất.

### 4.15.65. Abscission state

Một reduced state:

$
A_{abs}
=
\sigma(
\beta_0+\beta_{ET}ET^*-\beta_{IAA}IAA^*+\beta_SS_o
)
$

chỉ dùng như proposed model.

### 4.15.66. Nutrient loss through abscission

Nếu leaf rụng trước remobilization hoàn tất:

$
Loss_i
=
M_{i,leaf}
A_{abs}
$

làm giảm nutrient-use efficiency.

### 4.15.67. Nutrient-use efficiency

Một crop-level metric:

$
NUE
=
\frac{Yield}
{N\ input}
$

Cần phân biệt:
- uptake efficiency;
- utilization efficiency;
- remobilization efficiency.

### 4.15.68. Uptake efficiency

$
NUpE
=
\frac{N_{plant}}
{N_{available/input}}
$

định nghĩa denominator phải ghi rõ.

### 4.15.69. Utilization efficiency

$
NUtE
=
\frac{Yield}
{N_{plant}}
$

### 4.15.70. Senescence và NUE

Senescence timing có thể ảnh hưởng NUE qua:
- remobilization;
- late uptake;
- photosynthetic duration;
- sink filling.

### 4.15.71. Protein turnover cost

Remobilization không miễn phí về năng lượng.

Một energetic cost:

$
ATP_{rem}
=
ATP_{proteolysis}
+
ATP_{transport}
+
ATP_{reassimilation}
$

### 4.15.72. Carbon cost của remobilization

Amino acid transport và N reassimilation có thể cần carbon skeleton.

Do đó:

$
Remobilization
\neq
Zero\ cost
$

### 4.15.73. Senescence state-space

$
\mathbf x_{sen}
=
[
Chl,
Protein,
NSC,
N_{mob},
P_{mob},
K_{mob},
ROS,
Hormone,
Autophagy,
PCD
]^T
$

### 4.15.74. Dynamics

$
\frac{d\mathbf x_{sen}}{dt}
=
\mathbf f_{sen}
(
\mathbf x_{sen},
stage,
sink,
stress,
carbon,
nutrient
)
$

### 4.15.75. Output

$
\mathbf y_{sen}
=
[
GLAI,
F_{rem,C},
F_{rem,N},
F_{rem,P},
F_{rem,K},
Mortality,
Abscission
]^T
$

### 4.15.76. Coupling với 4.7

4.7 xác định:
- nutrient pools;
- demand;
- remobilization capacity.

4.15 quyết định:
- timing;
- regulatory state;
- organ turnover.

### 4.15.77. Coupling với 4.13

$
Sugar/T6P/SnRK1/TOR
\rightarrow
Senescence\ regulation
$

### 4.15.78. Coupling với 4.14

$
DVS
\rightarrow
Senescence\ program
$

Phenology xác định khi senescence developmentally competent.

### 4.15.79. Coupling với 4.6

$
Senescence
\rightarrow
GLAI\downarrow
\rightarrow
A_{can}\downarrow
$

### 4.15.80. Coupling với 4.5

Remobilized carbon/nutrients phải đi qua transport network tới sink.

Không được chuyển pool tức thời mà bỏ qua phloem capacity.

### 4.15.81. Parameter provenance

Cần provenance cho:
- \(k_{sen}\);
- \(k_{rem,i}\);
- chlorophyll decay;
- proteolysis rate;
- autophagy proxy;
- PCD threshold;
- abscission parameters.

### 4.15.82. Dữ liệu thực nghiệm

Có thể dùng:
- SPAD/chlorophyll;
- leaf N/P/K;
- protein;
- NSC;
- LAI/GLAI;
- isotope tracing;
- senescence scoring;
- gene-expression markers;
- root mortality;
- grain nutrient accumulation.

### 4.15.83. Calibration hierarchy

Nên hiệu chỉnh:
1. chlorophyll/GLAI decline;
2. organ nutrient loss;
3. remobilization flux;
4. sink accumulation;
5. organ mortality/abscission;
6. yield/nutrient composition.

### 4.15.84. Validation

Validation nên kiểm:
- onset of senescence;
- rate of green-area loss;
- N/P/K remobilization;
- grain filling;
- stay-green response;
- root turnover.

### 4.15.85. Không fit bằng final yield duy nhất

Hai mô hình có cùng final yield nhưng senescence trajectory khác nhau có thể sai cơ chế hoàn toàn.

### 4.15.86. Không double counting

Nếu senescence đã giảm:
- \(V_{cmax}\);
- \(GLAI\);
- active root area;

thì không nhân thêm một \(F_{sen}\) chung vào yield.

### 4.15.87. Vai trò của 4.15

4.15 hoàn thiện vòng đời cơ quan:

<div class="flow-chain">
<strong>Phát triển</strong> → <strong>Trưởng thành</strong> → <strong>Senescence</strong> → <strong>Autophagy/Proteolysis</strong> → <strong>Remobilization</strong> → <strong>PCD/Abscission</strong> → <strong>Sink filling</strong>
</div>

### 4.15.88. Kết luận 4.15

Trong VECrop, senescence phải được xem là một **quá trình điều hòa và tái phân bổ tài nguyên**, không chỉ là một hệ số giảm biomass.

Mô hình nên biểu diễn:

$
Development
+
Stress
+
Source\text{-}Sink
\rightarrow
Senescence
$

sau đó:

$
Senescence
\rightarrow
Remobilization
+
Photosynthetic\ decline
+
Organ\ turnover
$

để nối trực tiếp vòng đời cơ quan với năng suất và hiệu quả sử dụng dinh dưỡng.

---


## 4.16. Sinh trưởng sinh khối – phân bổ cơ quan – allometry – cấu trúc tán và rễ

### 4.16.1. Vai trò của 4.16

4.16 nối các module trước thành tăng trưởng biomass thực:

<div class="flow-chain">
<strong>Quang hợp</strong> → <strong>Carbon khả dụng</strong> → <strong>Source–sink</strong> → <strong>Phân bổ cơ quan</strong> → <strong>Hình thành sinh khối</strong> → <strong>Cấu trúc tán/rễ</strong>
</div>

Mục tiêu là tách rõ:
- carbon supply;
- sink demand;
- organ growth capacity;
- allocation;
- turnover.

### 4.16.2. Tổng sinh khối

$
B_{tot}
=
B_{root}
+
B_{stem}
+
B_{leaf}
+
B_{repro}
+
B_{storage}
$

Tùy crop có thể bỏ hoặc gộp một số compartment.

### 4.16.3. Cân bằng sinh khối toàn cây

$
\frac{dB_{tot}}{dt}
=
G_{tot}
-
L_{turnover}
$

Trong đó:
- \(G_{tot}\): biomass growth;
- \(L_{turnover}\): loss do senescence, mortality hoặc abscission.

### 4.16.4. Carbon-limited growth

Nếu biomass quy đổi từ carbon:

$
G_C
=
Y_G
C_{avail}
$

Trong đó \(Y_G\) là growth yield coefficient.

Không dùng một \(Y_G\) chung cho mọi tissue nếu thành phần hóa sinh khác nhau rõ.

### 4.16.5. Organ-specific growth

$
\frac{dB_o}{dt}
=
G_o
-
L_o
$

với:

$
o\in
\{root,stem,leaf,reproductive,storage\}
$

### 4.16.6. Allocation fraction

$
a_o
=
\frac{F_{C,o}}
{\sum_jF_{C,j}}
$

với:

$
\sum_oa_o=1
$

nếu toàn bộ carbon growth được phân bổ cho các compartment này.

### 4.16.7. Allocation theo sink strength

Từ 4.5:

$
a_o
=
\frac{SS_o^{eff}}
{\sum_jSS_j^{eff}}
$

Trong đó:

$
SS_o^{eff}
=
M_oq_oF_{dev,o}F_{resource,o}
$

Đây là VECrop reduced formulation.

### 4.16.8. Source limitation

Nếu carbon supply thấp:

$
\sum_oDemand_{C,o}
>
C_{available}
$

thì:

$
Growth
\approx
Source\ limited
$

### 4.16.9. Sink limitation

Nếu:

$
C_{available}
>
\sum_oDemand_{C,o}
$

nhưng organ growth capacity thấp thì:

$
Growth
\approx
Sink\ limited
$

### 4.16.10. Supply–capacity coupling

Một conceptual formulation:

$
G_o
=
\min
(
G_{o}^{supply},
G_{o}^{capacity}
)
$

### 4.16.11. Growth capacity

$
G_o^{capacity}
=
f(
Meristem,
CellCycle,
Expansion,
TOR,
Hormone,
Stage
)
$

nối trực tiếp với 4.14.

### 4.16.12. Supply term

$
G_o^{supply}
=
f(
F_{C,o},
N_o,
P_o,
K_o,
Water_o,
ATP_o
)
$

### 4.16.13. Carbon-to-biomass conversion

Một organ-specific coefficient:

$
B_o
=
\eta_oC_o
$

Trong đó \(\eta_o\) phụ thuộc:
- lipid;
- protein;
- carbohydrate;
- mineral fraction.

### 4.16.14. Growth respiration

Từ 4.8:

$
R_{G,o}
=
G_o
\left(
\frac1{Y_{G,o}}-1
\right)
$

Phân bổ carbon phải trừ growth respiration trước khi tính dry matter gain.

### 4.16.15. Maintenance respiration

$
R_{M,o}
=
m_o(T)M_{met,o}
$

Tissue già có thể có metabolic fraction thấp hơn tissue non.

### 4.16.16. Net carbon available

$
C_{avail}
=
A_{can}
-
R_M
-
R_G
-
L_C
$

Không double count respiration nếu \(Y_G\) đã bao gồm chi phí biosynthesis tương ứng.

### 4.16.17. Root allocation

Một root allocation state:

$
a_r
=
f(
N_{status},
P_{status},
Water,
Carbon,
Hormone,
Stage
)
$

Root allocation thường thay đổi khi resource limitation thay đổi.

### 4.16.18. Shoot allocation

$
a_s
=
a_{leaf}+a_{stem}+a_{repro}
$

với:

$
a_r+a_s=1
$

trong mô hình hai compartment.

### 4.16.19. Root:shoot ratio

$
R:S
=
\frac{B_{root}}
{B_{shoot}}
$

Không xem một giá trị R:S là optimum phổ quát.

### 4.16.20. Functional equilibrium

Một conceptual hypothesis:

$
Allocation
\rightarrow
Resource\ acquisition\ balance
$

Cây có thể tăng allocation vào cơ quan giúp thu nhận resource đang giới hạn, nhưng response phụ thuộc crop và stage.

### 4.16.21. Leaf biomass

$
\frac{dB_{leaf}}{dt}
=
G_{leaf}
-
L_{leaf}
$

### 4.16.22. Leaf area

$
A_{leaf}
=
SLA
B_{leaf}
$

Nếu SLA biến đổi theo thời gian:

$
A_{leaf}(t)
=
SLA(t)B_{leaf}(t)
$

### 4.16.23. LAI

$
LAI
=
\frac{A_{leaf}}{A_{ground}}
$

### 4.16.24. Dynamic SLA

Một reduced relationship:

$
SLA
=
SLA_{ref}
F_{light}
F_N
F_T
F_{age}
$

Cần calibration.

### 4.16.25. Stem biomass

$
\frac{dB_{stem}}{dt}
=
G_{stem}
-
L_{stem}
-
F_{rem,stem}
$

Nếu stem là storage organ tạm thời thì phải tách structural và reserve pools.

### 4.16.26. Structural và reserve biomass

$
B_o
=
B_{struct,o}
+
B_{reserve,o}
$

Điều này hữu ích cho lúa và ngô khi stem tích trữ NSC.

### 4.16.27. Storage pool

$
\frac{dB_{reserve,o}}{dt}
=
Storage_o
-
Mobilization_o
$

### 4.16.28. Reproductive biomass

$
\frac{dB_{repro}}{dt}
=
G_{repro}
-
Loss_{repro}
$

Ở crop lấy hạt, sink reproductive thường tăng mạnh sau flowering.

### 4.16.29. Reproductive allocation

$
a_{repro}
=
f(
DVS,
Sink_{repro},
Carbon,
N,
Water
)
$

### 4.16.30. Partition coefficient

Một empirical partition coefficient:

$
p_o
=
\frac{\Delta B_o}
{\Delta B_{tot}}
$

Phải xác định theo stage.

### 4.16.31. Không dùng partition coefficient cố định cả vụ

Vì:

$
p_o
=
p_o(stage,environment,genotype)
$

### 4.16.32. Allometry

Một allometric relation:

$
B_y
=
aB_x^b
$

Log transform:

$
\ln B_y
=
\ln a
+
b\ln B_x
$

### 4.16.33. Allometry không phải cơ chế

Allometry là mô tả quan hệ scaling.

Không nên dùng nó thay cho:
- carbon balance;
- developmental transition;
- sink strength
nếu mục tiêu là cơ chế.

### 4.16.34. Relative growth rate

$
RGR
=
\frac1B
\frac{dB}{dt}
$

### 4.16.35. Crop growth rate

$
CGR
=
\frac1{A_g}
\frac{dB}{dt}
$

### 4.16.36. Net assimilation rate

$
NAR
=
\frac1{A_L}
\frac{dB}{dt}
$

NAR là chỉ số sinh trưởng, không đồng nhất trực tiếp với leaf gas-exchange \(A_n\).

### 4.16.37. Leaf area ratio

$
LAR
=
\frac{A_L}{B}
$

và:

$
RGR
=
NAR\times LAR
$

theo decomposition cổ điển.

### 4.16.38. Specific leaf area và leaf mass ratio

$
SLA
=
\frac{A_L}{B_L}
$

$
LMR
=
\frac{B_L}{B}
$

Do đó:

$
LAR
=
SLA\times LMR
$

### 4.16.39. Canopy closure

Khi LAI tăng:

$
f_{intercept}
=
1-e^{-k_LLAI}
$

Canopy closure làm thay đổi:
- light interception;
- within-canopy VPD;
- leaf temperature;
- weed suppression.

### 4.16.40. Self-shading

Khi LAI quá cao:

$
A_{lower\ canopy}\downarrow
$

và maintenance cost có thể tăng so với carbon gain.

### 4.16.41. Optimal LAI không phổ quát

Optimum LAI phụ thuộc:
- solar radiation;
- leaf angle;
- extinction coefficient;
- crop;
- season;
- water/nutrient status.

### 4.16.42. Root biomass

$
\frac{dB_{root}}{dt}
=
G_{root}
-
Mortality_{root}
$

### 4.16.43. Root length

$
L_{root}
=
SRL
B_{root}
$

Trong đó:

$
SRL
=
\frac{Root\ length}
{Root\ dry\ mass}
$

### 4.16.44. Dynamic SRL

$
SRL
=
SRL_{ref}
F_{diameter}
F_{age}
F_N
F_P
F_{water}
$

### 4.16.45. Root surface area

Một cylindrical approximation:

$
A_{root}
=
2\pi rL_{root}
$

Nếu diameter distribution rộng, phải tích phân theo root classes.

### 4.16.46. Root architecture

Cần tách:
- axial roots;
- lateral roots;
- fine roots;
- root hairs.

Total biomass không đủ mô tả nutrient acquisition.

### 4.16.47. Root depth growth

Một reduced form:

$
\frac{dZ_r}{dt}
=
v_{root,max}
F_TF_{\Psi}F_{O_2}F_{soil}
$

### 4.16.48. Soil mechanical resistance

Root elongation có thể giảm khi penetration resistance tăng.

Một reduced modifier:

$
F_{PR}
=
f(PR)
$

Không dùng một threshold universal cho mọi đất và root type.

### 4.16.49. Root distribution by depth

$
\beta(z)
=
\frac{RLD(z)}
{\int_0^{Z_r}RLD(z)\,dz}
$

với:

$
\int_0^{Z_r}\beta(z)\,dz=1
$

### 4.16.50. Active root fraction

$
A_{root,active}
=
A_{root}
f_{active}
$

Uptake và hydraulics nên dùng active fraction khi có dữ liệu.

### 4.16.51. Root turnover

$
Turnover_{root}
=
k_{turn,root}
B_{root}
$

### 4.16.52. Root exudation carbon cost

$
C_{root,total}
=
C_{growth}
+
C_{resp}
+
C_{exudation}
$

Exudation không được bỏ khỏi carbon budget nếu nghiên cứu rhizosphere.

### 4.16.53. Mycorrhizal carbon cost

$
C_{myc}
=
f(
colonization,
P_{delivery},
C_{supply}
)
$

### 4.16.54. Organ nitrogen concentration

$
N_{conc,o}
=
\frac{M_{N,o}}
{B_o}
$

Growth dilution có thể làm concentration giảm dù total N tăng.

### 4.16.55. Nutrient dilution

Một empirical dilution curve:

$
N_c
=
aB^{-b}
$

Đây là benchmark empirical, không phải định luật phổ quát.

### 4.16.56. Critical nutrient concentration

Critical concentration là concentration tối thiểu liên quan với gần-maximal growth trong một calibration context.

Không chuyển trực tiếp giữa crop/cultivar nếu chưa kiểm định.

### 4.16.57. Nutrient demand from biomass growth

$
Req_{i,o}
=
q_{i,o}^{*}
\frac{dB_o}{dt}
$

nối trực tiếp 4.16 với 4.7.

### 4.16.58. Growth–nutrient feedback

Nếu nutrient supply thấp:

$
L_i
=
\frac{Sup_i}
{Req_i+\varepsilon}
$

thì organ growth capacity có thể giảm.

### 4.16.59. Water–growth feedback

Nếu leaf expansion giảm do turgor:

$
LAI\downarrow
\rightarrow
Light\ interception\downarrow
\rightarrow
A_{can}\downarrow
$

### 4.16.60. Carbon–growth feedback

Nếu sink growth thấp:

$
Sucrose_{leaf}\uparrow
\rightarrow
Source\ feedback
$

nối 4.16 với 4.13.

### 4.16.61. Senescence–growth coupling

Từ 4.15:

$
L_{leaf}\uparrow
\rightarrow
GLAI\downarrow
$

và:

$
F_{rem}\uparrow
$

có thể đồng thời xảy ra.

### 4.16.62. Turnover balance

$
Net\ biomass\ change
=
Gross\ growth
-
Turnover
$

Không đồng nhất net biomass gain với gross production.

### 4.16.63. Aboveground biomass

$
AGB
=
B_{leaf}
+
B_{stem}
+
B_{repro}
$

### 4.16.64. Belowground biomass

$
BGB
=
B_{root}
+
B_{belowground\ storage}
$

tùy crop.

### 4.16.65. Shoot biomass

$
B_{shoot}
=
AGB
$

chỉ khi định nghĩa shoot không bao gồm cấu trúc dưới đất.

### 4.16.66. Dry matter vs fresh mass

Không trộn:

$
Fresh\ mass
\neq
Dry\ mass
$

Fresh mass phụ thuộc mạnh water content.

### 4.16.67. Dry matter fraction

$
DMF
=
\frac{Dry\ mass}
{Fresh\ mass}
$

### 4.16.68. Marketable biomass

Đối với xà lách:

$
B_{market}
\le
B_{shoot}
$

do loại bỏ:
- damaged leaves;
- senescent leaves;
- diseased tissue;
- nonmarketable fraction.

### 4.16.69. Structural biomass

Một simplified decomposition:

$
B_{struct}
=
B_{cellwall}
+
B_{protein}
+
B_{lipid}
+
B_{other}
$

### 4.16.70. Biomass composition

Composition ảnh hưởng:
- construction cost;
- C:N ratio;
- energy demand;
- tissue longevity.

### 4.16.71. Construction cost

Một generic cost:

$
C_{cost,o}
=
\sum_j
c_jM_{j,o}
$

với \(c_j\) là carbon/energy cost theo thành phần.

### 4.16.72. Không dùng cùng construction cost cho mọi organ

Leaf, root, stem và grain có composition khác nhau.

### 4.16.73. Growth efficiency

$
GE
=
\frac{\Delta B}
{C_{substrate}}
$

Cần định nghĩa denominator rõ.

### 4.16.74. Radiation-use efficiency

Một empirical crop model:

$
\Delta B
=
RUE
\times
IPAR
$

RUE hữu ích như benchmark nhưng không thay thế photosynthesis-respiration model cơ chế.

### 4.16.75. Không nhân RUE vào mechanistic carbon gain

Nếu \(A_{can}\) đã tính carbon assimilation thì không:

$
B
=
A_{can}
\times
RUE
$

một cách máy móc.

### 4.16.76. Water-use efficiency

$
WUE
=
\frac{Biomass\ or\ Yield}
{Water\ use}
$

Phải ghi rõ numerator và denominator.

### 4.16.77. Biomass allocation dưới drought

Drought có thể thay đổi:
- root:shoot;
- leaf expansion;
- reproductive allocation;
- senescence.

Response phụ thuộc timing.

### 4.16.78. Biomass allocation dưới N deficiency

N deficiency thường ảnh hưởng mạnh:
- leaf area;
- protein concentration;
- shoot growth;
- root allocation.

Không hard-code cùng response cho mọi crop.

### 4.16.79. Density effect

Per-plant biomass:

$
B_{plant}
=
f(D)
$

Per-area biomass:

$
B_{area}
=
D
B_{plant}
$

Hai đại lượng có thể phản ứng ngược chiều với density.

### 4.16.80. Competition

Competition gồm:
- light;
- water;
- nutrients;
- space.

Một canopy model nên tránh gộp hết thành một density scalar nếu dữ liệu đủ.

### 4.16.81. Size hierarchy

Trong quần thể:

$
B_i
\neq
B_j
$

ngay cả cùng genotype do competition và spatial heterogeneity.

### 4.16.82. Distributional growth

Có thể mô hình:

$
B\sim Lognormal(\mu_B,\sigma_B)
$

nếu cần mô tả variability quần thể.

### 4.16.83. Lúa

Các compartment quan trọng:
- root;
- leaf;
- culm;
- sheath;
- panicle/grain;
- stem NSC reserve.

### 4.16.84. Lúa: tiller biomass

$
B_{shoot}
=
\sum_{k=1}^{N_{tiller}}
B_{tiller,k}
$

Tiller mortality cần nối với 4.14 và 4.15.

### 4.16.85. Ngô

Các compartment:
- root;
- leaf;
- stalk;
- cob;
- grain.

Post-silking allocation phải tách grain sink khỏi vegetative maintenance.

### 4.16.86. Ngô: kernel demand

$
Demand_{grain}
=
N_{kernel}
q_{kernel}(t)
$

### 4.16.87. Xà lách

Các compartment thực dụng:
- root;
- marketable leaves;
- nonmarketable/senescent leaves;
- stem/bolting axis nếu xuất hiện.

### 4.16.88. Xà lách: fresh vs dry yield

Market yield thường là fresh mass nên cần:

$
Fresh\ yield
=
\frac{Dry\ mass}
{DMF}
$

chỉ khi DMF được đo/ước lượng phù hợp.

### 4.16.89. State-space biomass

$
\mathbf B
=
[
B_{root},
B_{stem},
B_{leaf},
B_{repro},
B_{reserve}
]^T
$

### 4.16.90. Biomass dynamics

$
\frac{d\mathbf B}{dt}
=
\mathbf G
-
\mathbf L
$

### 4.16.91. Growth vector

$
\mathbf G
=
\mathbf a
G_{tot}
$

với:

$
\sum_oa_o=1
$

### 4.16.92. Turnover vector

$
\mathbf L
=
[
L_{root},
L_{stem},
L_{leaf},
L_{repro},
L_{reserve}
]^T
$

### 4.16.93. Allocation constraints

$
0\le a_o\le1
$

và:

$
\sum_oa_o=1
$

### 4.16.94. Dynamic allocation

$
\frac{da_o}{dt}
=
f(
stage,
sink,
resource,
hormone,
stress
)
$

thay vì xem \(a_o\) cố định.

### 4.16.95. Calibration hierarchy

Nên hiệu chỉnh:
1. total biomass;
2. organ biomass;
3. LAI/SLA;
4. root length/depth;
5. reserve pools;
6. allocation trajectories.

### 4.16.96. Validation

Validation độc lập nên có:
- destructive biomass sampling;
- organ dry mass;
- LAI;
- root traits;
- phenology;
- reserve/remobilization data.

### 4.16.97. Không fit allocation bằng final yield duy nhất

Final yield không đủ nhận dạng:
- root allocation;
- leaf/stem partition;
- turnover;
- reserve dynamics.

### 4.16.98. Mass-balance test

Biomass balance:

$
B_{tot}(t_2)
-
B_{tot}(t_1)
\approx
\int_{t_1}^{t_2}
(G_{tot}-L_{turnover})dt
$

### 4.16.99. Carbon-balance test

$
C_{assim}
-
C_{resp}
-
C_{export/loss}
-
\Delta C_{biomass}
\approx0
$

### 4.16.100. Coupling với 4.5

Phloem flux cấp carbon cho allocation.

### 4.16.101. Coupling với 4.6

LAI và canopy architecture quyết định carbon supply.

### 4.16.102. Coupling với 4.7

Nutrient pools quyết định growth stoichiometry.

### 4.16.103. Coupling với 4.8

Respiration quyết định carbon cost.

### 4.16.104. Coupling với 4.13

Sugar/TOR/SnRK1 điều chỉnh growth capacity.

### 4.16.105. Coupling với 4.14

Phenology xác định organ priority và developmental capacity.

### 4.16.106. Coupling với 4.15

Senescence/turnover quyết định net biomass và remobilization.

### 4.16.107. Không double counting

Nếu allocation đã được quyết định bởi sink strength và source supply, không nhân thêm:
- root factor;
- shoot factor;
- stage factor
vào biomass một lần nữa nếu chúng mô tả cùng cơ chế.

### 4.16.108. Vai trò của 4.16 trong VECrop

4.16 biến flux và capacity thành trạng thái sinh khối thực:

<div class="flow-chain">
<strong>Carbon supply</strong> → <strong>Sink strength</strong> → <strong>Allocation</strong> → <strong>Organ growth</strong> → <strong>Canopy/Root architecture</strong> → <strong>Total biomass</strong>
</div>

### 4.16.109. Kết luận 4.16

Sinh khối không nên được tính bằng một hệ số tăng trưởng duy nhất.

VECrop nên tách:

$
Gross\ production
\rightarrow
Respiration
\rightarrow
Allocation
\rightarrow
Organ\ growth
\rightarrow
Turnover
\rightarrow
Net\ biomass
$

và giữ riêng:
- source limitation;
- sink limitation;
- organ capacity;
- allocation;
- senescence.

Điều này tạo nền trực tiếp cho bước tiếp theo là **hình thành năng suất kinh tế và Harvest Index**.

---


## 4.17. Hình thành năng suất kinh tế – Harvest Index – thiết lập sink – filling – source/sink limitation – năng suất thương phẩm

### 4.17.1. Vai trò của 4.17

4.17 là bước chuyển từ:

<div class="flow-chain">
<strong>Sinh khối toàn cây</strong> → <strong>Cơ quan kinh tế</strong> → <strong>Số lượng sink</strong> → <strong>Kích thước sink</strong> → <strong>Filling</strong> → <strong>Năng suất</strong>
</div>

Không được đồng nhất:

$
Biomass
=
Yield
$

vì năng suất kinh tế phụ thuộc cả:
- tổng sinh khối;
- số cơ quan thu hoạch;
- sức chứa sink;
- phân bổ;
- thời gian filling;
- remobilization;
- stress theo giai đoạn;
- tỷ lệ thương phẩm.

### 4.17.2. Năng suất kinh tế

Một định nghĩa tổng quát:

$
Y_{econ}
=
\frac{M_{harvestable}}{A_{ground}}
$

Đơn vị thường:
- kg m\(^{-2}\);
- t ha\(^{-1}\).

### 4.17.3. Năng suất sinh học

$
Y_{bio}
=
\frac{B_{total}}{A_{ground}}
$

Phải phân biệt với năng suất kinh tế.

### 4.17.4. Harvest Index

$
HI
=
\frac{Y_{econ}}
{B_{aboveground}}
$

với cây lấy hạt.

Không dùng cùng định nghĩa cho mọi crop nếu cơ quan kinh tế khác nhau.

### 4.17.5. Harvest Index không phải hằng số

$
HI
=
HI(
genotype,
stage,
environment,
source\text{-}sink,
stress
)
$

Không được giữ cố định cả vụ nếu muốn mô hình động.

### 4.17.6. Yield decomposition tổng quát

Có thể phân rã:

$
Y
=
N_{unit}
\times
W_{unit}
$

Trong đó:
- \(N_{unit}\): số đơn vị thu hoạch trên diện tích;
- \(W_{unit}\): khối lượng trung bình mỗi đơn vị.

### 4.17.7. Yield component multiplicativity caution

Công thức:

$
Y
=
N_{unit}
W_{unit}
$

là identity cấu trúc nếu định nghĩa đúng.

Nhưng không có nghĩa hai thành phần độc lập; thường tồn tại compensation:

$
N_{unit}\uparrow
\Rightarrow
W_{unit}\downarrow
$

### 4.17.8. Sink number

Số sink được xác lập qua:
- organ initiation;
- flowering;
- fertilization;
- abortion;
- mortality.

Một balance:

$
\frac{dN_{sink}}{dt}
=
Initiation
-
Abortion
-
Loss
$

### 4.17.9. Sink size

Khối lượng sink:

$
M_{sink}
=
N_{sink}
m_{sink}
$

### 4.17.10. Potential sink capacity

Một sink capacity:

$
Cap_{sink}
=
N_{sink}
W_{max,sink}
$

Đây là upper bound cơ chế, không phải yield prediction trực tiếp.

### 4.17.11. Sink strength

Từ 4.5:

$
SS_o
=
M_oq_o
$

Mở rộng cho organ kinh tế:

$
SS_{econ}
=
N_{sink}
q_{sink}
F_{dev}
F_{hormone}
F_{resource}
$

### 4.17.12. Source supply

$
Supply_C
=
A_{can}
+
F_{rem,C}
-
R
$

Nếu dùng carbon unit nhất quán.

### 4.17.13. Sink demand

$
Demand_C
=
N_{sink}
d_{sink}(t)
$

### 4.17.14. Source limitation

Nếu:

$
Supply_C
<
Demand_C
$

thì:

$
Growth_{sink}
\approx
Source\ limited
$

### 4.17.15. Sink limitation

Nếu:

$
Supply_C
>
Demand_C
$

nhưng sink capacity thấp:

$
Growth_{sink}
\approx
Sink\ limited
$

### 4.17.16. Co-limitation

Trong nhiều trường hợp:

$
Source\ limitation
\land
Sink\ limitation
$

có thể đồng thời tồn tại theo thời gian hoặc giữa organ.

Không ép mô hình chỉ chọn một nhãn cho cả vụ.

### 4.17.17. Filling rate

Một generic filling rate:

$
\frac{dm_{sink}}{dt}
=
r_{fill}(t)
$

### 4.17.18. Logistic filling

Một empirical formulation:

$
m(t)
=
\frac{W_{max}}
{1+\exp[-k(t-t_{50})]}
$

Không xem logistic là cơ chế sinh học.

### 4.17.19. Gompertz filling

$
m(t)
=
W_{max}
\exp
[
-\exp(-k(t-t_i))
]
$

Có thể phù hợp dữ liệu một số organ.

### 4.17.20. Mechanistic filling

Ở mức cơ chế:

$
\frac{dM_{sink}}{dt}
=
F_{C,in}
+
F_{N,in}
+
F_{P,in}
+
F_{K,in}
-
R_{sink}
-
Loss
$

### 4.17.21. Filling duration

$
Y_{sink}
\approx
\int_{t_{set}}^{t_{maturity}}
r_{fill}(t)\,dt
$

Năng suất phụ thuộc cả:
- rate;
- duration.

### 4.17.22. Shortened filling duration

Heat hoặc stress cuối vụ có thể làm:

$
Duration_{fill}\downarrow
$

dù instantaneous filling rate ban đầu không giảm mạnh.

### 4.17.23. Thermal control của filling

Một temperature modifier:

$
r_{fill}^{eff}
=
r_{fill,max}
F_T(T)
$

Cardinal temperatures phải crop/stage-specific.

### 4.17.24. Carbon supply theo thời gian

Không dùng:

$
Y
=
A_{can,mean}
\times
Duration
$

nếu source và sink thay đổi mạnh theo thời gian.

Nên:

$
C_{sup,total}
=
\int
Supply_C(t)\,dt
$

### 4.17.25. Nitrogen supply cho sink

$
Supply_N
=
U_N
+
F_{rem,N}
$

### 4.17.26. Protein yield

Ở crop lấy hạt:

$
Protein\ yield
=
Y_{grain}
\times
Protein\ concentration
$

Yield và quality có thể trade-off.

### 4.17.27. Nutrient concentration dilution

Tăng carbohydrate accumulation có thể làm giảm nutrient concentration dù total nutrient không giảm tương ứng.

### 4.17.28. Grain N balance

$
\frac{dM_{N,grain}}{dt}
=
U_{N,new}
+
F_{rem,N}
-
Loss_N
$

### 4.17.29. Remobilization contribution

$
f_{rem,N}
=
\frac{N_{grain,rem}}
{N_{grain,total}}
$

Cần isotope/tracer hoặc mass-balance đủ tốt để ước lượng đáng tin.

### 4.17.30. Harvestable fraction

$
f_h
=
\frac{B_{harvestable}}
{B_{organ,econ}}
$

Cho crop thị trường tươi, \(f_h\) có thể < 1 do loại bỏ mô hỏng.

### 4.17.31. Marketable yield

$
Y_{market}
=
Y_{gross}
f_{market}
$

### 4.17.32. Marketable fraction

$
f_{market}
=
1
-
f_{defect}
-
f_{disease}
-
f_{senescent}
-
f_{undersize}
-
f_{oversize}
$

Không nhất thiết cộng tuyến tính nếu các defect chồng lấp; đây là bookkeeping form.

### 4.17.33. Yield quality vector

Có thể định nghĩa:

$
\mathbf Q
=
[
size,
protein,
sugar,
moisture,
color,
firmness,
defect
]^T
$

### 4.17.34. Multi-objective yield

Một objective:

$
J
=
w_YY
+
w_QQ
-
w_CC
$

nếu tối ưu đồng thời:
- yield;
- quality;
- cost.

### 4.17.35. Yield potential

Khái niệm:

$
Y_p
=
f(
genotype,
radiation,
temperature,
CO_2,
phenology
)
$

trong điều kiện không bị giới hạn bởi:
- water;
- nutrients;
- pests/diseases.

Đây là khái niệm benchmark, không phải một hằng số cố định.

### 4.17.36. Water-limited yield potential

$
Y_w
=
f(
Y_p,
water\ supply,
ET,
soil
)
$

### 4.17.37. Nutrient-limited yield

Một reduced formulation:

$
Y_n
=
Y_p
F_N
F_P
F_K
$

chỉ dùng khi các stress chưa được mô hình hóa cơ chế.

### 4.17.38. Attainable yield

Một conceptual:

$
Y_a
\le
Y_w
\le
Y_p
$

nhưng định nghĩa operational phải ghi rõ context.

### 4.17.39. Yield gap

$
Y_g
=
Y_{benchmark}
-
Y_{actual}
$

Benchmark có thể là:
- \(Y_p\);
- \(Y_w\);
- best-farm;
- experimental ceiling.

Phải ghi rõ loại nào.

### 4.17.40. Harvest Index động

Một state:

$
HI(t)
=
\frac{B_{econ}(t)}
{B_{shoot}(t)}
$

### 4.17.41. HI onset

Trước reproductive transition:

$
HI\approx0
$

với crop lấy hạt.

### 4.17.42. HI growth

Một reduced form:

$
\frac{dHI}{dt}
=
r_{HI}
F_{stage}
F_{sink}
F_{resource}
$

### 4.17.43. HI ceiling

$
HI
\le
HI_{max,G}
$

với \(HI_{max,G}\) genotype-specific.

### 4.17.44. Không áp dụng grain HI cho xà lách

Với xà lách:

$
Y_{econ}
=
B_{marketable\ leaf}
$

nên harvest index cần định nghĩa lại theo mục tiêu thương phẩm.

### 4.17.45. Reproductive success

Một reproductive success fraction:

$
f_{fert}
=
\frac{N_{fertilized}}
{N_{potential}}
$

### 4.17.46. Abortion fraction

$
f_{abort}
=
\frac{N_{aborted}}
{N_{set}}
$

### 4.17.47. Final sink number

$
N_{final}
=
N_{potential}
f_{fert}
(1-f_{abort})
$

### 4.17.48. Stress sensitivity windows

Không dùng một stress factor cho cả vụ.

Cần phân biệt:
- pre-flowering;
- flowering;
- early filling;
- late filling.

### 4.17.49. Stage-weighted stress

Một reduced cumulative stress:

$
S_{cum}
=
\int
w_{stage}(t)
S(t)\,dt
$

Trong đó \(w_{stage}\) phải calibration theo crop/process.

### 4.17.50. Heat around flowering

Heat có thể làm giảm:
- pollen viability;
- anthesis synchrony;
- fertilization;
- sink number.

### 4.17.51. Drought around flowering

Drought có thể giảm:
- reproductive success;
- silk emergence ở ngô;
- panicle fertility ở lúa;
- sink establishment.

### 4.17.52. Stress after flowering

Sau flowering, stress thường tác động mạnh lên:
- filling rate;
- filling duration;
- remobilization;
- senescence.

### 4.17.53. Density effect on yield components

$
Y_{area}
=
D
\times
Y_{plant}
$

Khi density tăng:
- sink number per area có thể tăng;
- unit weight có thể giảm;
- competition tăng.

### 4.17.54. Compensation

Một empirical relationship:

$
W_{unit}
=
f(N_{unit})
$

thường có negative compensation.

### 4.17.55. Yield stability

Không chỉ xét mean yield.

Có thể dùng:

$
CV_Y
=
\frac{\sigma_Y}{\mu_Y}
$

### 4.17.56. Environment sensitivity

Một genotype response:

$
Y_{g,e}
=
\mu
+
G_g
+
E_e
+
(G\times E)_{g,e}
+
\epsilon
$

### 4.17.57. G×E

Genotype × environment interaction quan trọng khi chuyển parameter giữa:
- location;
- season;
- management.

### 4.17.58. Yield uncertainty

$
Y
=
f(
X,
\theta,
weather,
management
)
$

Nên propagate uncertainty thay vì chỉ báo một con số.

### 4.17.59. Monte Carlo yield

$
X^{(k)},
\theta^{(k)}
\rightarrow
Y^{(k)}
$

Báo:
- median;
- P10;
- P50;
- P90
khi phù hợp.

### 4.17.60. Yield sensitivity

$
S_{\theta_i}
=
\frac{\partial Y}
{\partial\theta_i}
$

### 4.17.61. Elasticity

$
E_{\theta_i}
=
\frac{\partial Y}{\partial\theta_i}
\frac{\theta_i}{Y}
$

giúp so sánh parameter khác đơn vị.

### 4.17.62. Counterfactual yield

Một diagnostic:

$
\Delta Y_{stress}
=
Y_{without\ stress}
-
Y_{actual}
$

Chỉ có ý nghĩa nếu model causal đủ đáng tin.

### 4.17.63. Attribution caution

Không được kết luận:
“x% mất năng suất do N”
nếu:
- water;
- N;
- heat
tương tác mạnh mà model không nhận dạng được riêng.

### 4.17.64. Harvest timing

Yield marketable phụ thuộc thời điểm thu hoạch.

Một objective:

$
t_h^*
=
\arg\max_t
[
Y_{market}(t)
\times
Price(t)
-
Loss(t)
]
$

### 4.17.65. Overmaturity

Thu hoạch trễ có thể:
- tăng dry matter;
- nhưng giảm quality;
- tăng lodging;
- tăng shattering;
- tăng senescence.

### 4.17.66. Early harvest

Thu hoạch sớm có thể:
- giảm unit weight;
- tăng moisture;
- giảm total biomass;
- nhưng cải thiện market quality ở crop tươi.

### 4.17.67. Economic yield

$
Revenue
=
Y_{market}
P_y
$

### 4.17.68. Gross margin

$
GM
=
Revenue
-
Variable\ Costs
$

Không tối ưu input chỉ theo biological yield nếu mục tiêu sản xuất là lợi nhuận.

### 4.17.69. Marginal response

$
MR_i
=
\frac{\partial Y}
{\partial u_i}
$

với \(u_i\) là irrigation/fertilizer/density.

### 4.17.70. Economic optimum

$
P_Y
\frac{\partial Y}{\partial u_i}
=
\frac{\partial C}{\partial u_i}
$

trong mô hình đơn biến lý tưởng.

### 4.17.71. Lúa: cấu trúc năng suất

Một decomposition:

$
Y_{rice}
=
Panicles\ m^{-2}
\times
Spikelets\ panicle^{-1}
\times
Filled\ fraction
\times
Grain\ weight
$

cần scale factor đơn vị phù hợp.

### 4.17.72. Lúa: panicle number

$
N_{panicle}
\le
N_{tiller}
$

do không phải mọi tiller đều hữu hiệu.

### 4.17.73. Lúa: spikelets per panicle

Phụ thuộc:
- panicle differentiation;
- N status;
- radiation;
- temperature;
- genotype.

### 4.17.74. Lúa: filled-grain fraction

$
f_{filled}
=
\frac{N_{filled}}
{N_{spikelet}}
$

### 4.17.75. Lúa: grain filling

Một grain balance:

$
\frac{dM_{grain}}{dt}
=
F_{photo}
+
F_{stem\ rem}
-
R_{grain}
$

### 4.17.76. Lúa: stem NSC

Stem NSC có thể đóng góp đáng kể khi source sau heading bị giới hạn.

Không dùng một tỷ lệ cố định cho mọi giống/mùa vụ.

### 4.17.77. Lúa: sterility

Heat/cold quanh flowering có thể làm:

$
f_{fert}\downarrow
$

và giảm sink number trước khi grain filling bắt đầu.

### 4.17.78. Lúa: Harvest Index

$
HI_{rice}
=
\frac{Grain\ dry\ mass}
{Aboveground\ dry\ biomass}
$

### 4.17.79. Ngô: cấu trúc năng suất

$
Y_{maize}
=
Ears\ m^{-2}
\times
Kernels\ ear^{-1}
\times
Kernel\ weight
$

### 4.17.80. Ngô: ear number

$
N_{ear}
\le
N_{plant}
\times
Ears\ plant^{-1}
$

### 4.17.81. Ngô: kernel set

Kernel number phụ thuộc mạnh:
- ovule number;
- pollination;
- assimilate availability;
- stress quanh silking.

### 4.17.82. Ngô: ASI

$
ASI
=
t_{silking}
-
t_{anthesis}
$

ASI tăng thường là dấu hiệu reproductive stress trong nhiều bối cảnh.

### 4.17.83. Ngô: kernel growth

$
\frac{dm_k}{dt}
=
r_{kernel}
F_T
F_C
F_N
$

### 4.17.84. Ngô: post-silking source

Nguồn carbon gồm:
- current photosynthesis;
- stem reserve remobilization.

### 4.17.85. Ngô: post-silking N

Grain N:

$
N_{grain}
=
N_{post\ uptake}
+
N_{remobilized}
$

### 4.17.86. Ngô: stay-green tradeoff

Stay-green có thể tăng source duration nhưng nếu remobilization bị hạn chế thì grain nutrient dynamics có thể thay đổi.

### 4.17.87. Xà lách: định nghĩa năng suất

Với xà lách:

$
Y_{lettuce}
=
Fresh\ marketable\ leaf\ biomass
$

thường phù hợp hơn grain-style HI.

### 4.17.88. Xà lách: fresh mass

$
Fresh\ mass
=
\frac{Dry\ mass}
{DMF}
$

nếu dry matter fraction được đo phù hợp.

### 4.17.89. Xà lách: marketable fraction

$
f_{market}
=
f(
tipburn,
senescence,
disease,
size,
shape,
bolting
)
$

### 4.17.90. Xà lách: leaf number

$
Y_{market}
\approx
N_{leaf,market}
\times
W_{leaf}
$

chỉ là decomposition.

### 4.17.91. Xà lách: tipburn

Tipburn làm giảm:

$
f_{market}
$

dù total biomass có thể cao.

### 4.17.92. Xà lách: bolting

Bolting làm:
- thay đổi biomass allocation;
- giảm marketability;
- tăng stem fraction.

### 4.17.93. Xà lách: water content

Fresh yield rất nhạy với tissue water content.

Không dùng fresh yield để suy trực tiếp carbon gain.

### 4.17.94. Lúa/ngô/xà lách: cùng một framework, khác yield organ

VECrop nên giữ framework chung:

$
Y
=
Number
\times
Unit\ size
\times
Marketable\ fraction
$

nhưng mapping sinh lý phải crop-specific.

### 4.17.95. Yield-state vector

$
\mathbf Y
=
[
N_{sink},
W_{sink},
f_{fert},
f_{abort},
HI,
Y_{gross},
f_{market},
Y_{market}
]^T
$

### 4.17.96. Yield dynamics

$
\frac{d\mathbf Y}{dt}
=
\mathbf f_Y
(
Source,
Sink,
Stage,
Water,
Nutrients,
Temperature,
Hormone,
Senescence
)
$

### 4.17.97. Coupling với 4.5

Phloem source–sink quyết định carbon delivery tới organ kinh tế.

### 4.17.98. Coupling với 4.6

Canopy photosynthesis quyết định source supply.

### 4.17.99. Coupling với 4.7

N/P/K supply quyết định:
- sink growth;
- composition;
- remobilization.

### 4.17.100. Coupling với 4.8

Respiration quyết định carbon cost của filling.

### 4.17.101. Coupling với 4.13

Sugar/T6P/SnRK1/TOR điều chỉnh sink activity và growth capacity.

### 4.17.102. Coupling với 4.14

Phenology xác định:
- sink initiation;
- flowering;
- filling window;
- maturity.

### 4.17.103. Coupling với 4.15

Senescence quyết định:
- source duration;
- remobilization;
- organ loss.

### 4.17.104. Coupling với 4.16

Organ biomass và allocation cung cấp nền cho HI và economic yield.

### 4.17.105. Parameter provenance

Cần provenance cho:
- maximum sink size;
- flowering fertility;
- abortion rate;
- filling-rate parameters;
- filling duration;
- HI ceiling;
- marketable fraction;
- crop-specific yield components.

### 4.17.106. Calibration hierarchy

Nên hiệu chỉnh:
1. sink number;
2. fertilization/abortion;
3. unit filling curve;
4. source duration;
5. organ biomass;
6. HI;
7. marketable yield.

### 4.17.107. Validation độc lập

Nên kiểm:
- component yield;
- time-course filling;
- grain/leaf number;
- individual unit weight;
- final HI;
- marketable fraction;
- quality traits.

### 4.17.108. Không fit chỉ bằng final yield

Hai model có cùng final yield nhưng:
- sink number khác;
- unit weight khác;
- remobilization khác
có thể có cơ chế hoàn toàn khác nhau.

### 4.17.109. Component balance test

Phải kiểm:

$
Y_{calc}
\approx
N_{unit}
W_{unit}
$

sau quy đổi đơn vị.

### 4.17.110. Biomass-to-yield balance

$
Y_{econ}
\le
B_{harvestable}
\le
B_{total}
$

trừ khi hệ quy đổi fresh/dry mass khác nhau và đã được giải thích.

### 4.17.111. Carbon consistency

Economic dry-matter accumulation phải phù hợp với carbon supply/remobilization.

Không được tạo thêm biomass chỉ bằng tăng HI mà không giảm biomass compartment khác.

### 4.17.112. Nutrient consistency

Nếu grain N tăng:

$
\Delta N_{grain}
$

phải đến từ:
- new uptake;
- remobilization;
- hoặc cả hai.

### 4.17.113. Stress attribution test

Một stress chỉ được gán là nguyên nhân giảm yield component khi model tái hiện đúng intermediate states.

Ví dụ drought → low yield phải đi qua:
- water potential;
- stomata/photosynthesis;
- flowering/filling;
- hoặc sink loss.

### 4.17.114. Counterfactual component analysis

Có thể tính:

$
\Delta Y_{N_{sink}}
=
Y(N_{sink}^{ref})-Y(actual)
$

và tương tự cho unit weight, nhưng chỉ dùng như diagnostic.

### 4.17.115. Uncertainty decomposition

$
Var(Y)
=
Var_{weather}
+
Var_{parameter}
+
Var_{measurement}
+
Var_{structure}
+
Interactions
$

ở mức conceptual.

### 4.17.116. Practical decision outputs

4.17 có thể cung cấp:
- yield forecast;
- component forecast;
- expected marketable fraction;
- harvest-window forecast;
- limiting-component diagnosis.

### 4.17.117. Yield forecast phải có interval

Không báo:

$
Y=8.2\ t\ ha^{-1}
$

mà không uncertainty nếu dữ liệu đầu vào bất định.

Nên báo:

$
Y_{P50}
$

kèm:

$
[P10,P90]
$

khi phù hợp.

### 4.17.118. Forecast horizon

Sai số dự báo tăng khi horizon dài.

Cần phân biệt:
- early-season forecast;
- flowering-stage forecast;
- filling-stage forecast;
- near-harvest forecast.

### 4.17.119. Dynamic updating

Khi có dữ liệu mới:

$
P(Y|\mathcal D_{new})
$

nên được cập nhật bằng data assimilation/Bayesian update nếu model hỗ trợ.

### 4.17.120. Yield ceiling warning

Mô hình không nên cho:

$
Y_{econ}
>
Cap_{sink}
$

hoặc:

$
Y_{econ}
>
C_{available}\times conversion
$

### 4.17.121. Harvest Index warning

Nếu:

$
HI>1
$

trong dry-matter definition thông thường, model sai về balance.

### 4.17.122. Fresh-weight warning

Với xà lách:

$
HI_{fresh}
$

có thể gây hiểu nhầm vì water content chi phối mạnh.

Nên dùng:
- dry-matter partition;
- marketable fresh yield
song song.

### 4.17.123. Yield quality tradeoff

Ví dụ:
- grain yield vs protein concentration;
- lettuce fresh mass vs dry matter concentration;
- rapid growth vs tissue structural quality.

Không tối ưu một chỉ tiêu duy nhất nếu mục tiêu thương mại đa tiêu chí.

### 4.17.124. Losses before harvest

Một gross-to-net relation:

$
Y_{net}
=
Y_{gross}
-
L_{lodging}
-
L_{shatter}
-
L_{disease}
-
L_{quality}
$

### 4.17.125. Lodging

Ở lúa/ngô, lodging có thể làm giảm:
- harvestability;
- photosynthesis cuối vụ;
- grain filling;
- mechanical harvest efficiency.

### 4.17.126. Shattering

Ở cereal:

$
Loss_{shatter}
=
f(
genotype,
maturity,
weather,
harvest\ delay
)
$

### 4.17.127. Harvest efficiency

$
\eta_h
=
\frac{Yield_{collected}}
{Yield_{standing}}
$

### 4.17.128. Final collected yield

$
Y_{collected}
=
Y_{standing}
\eta_h
$

### 4.17.129. Economic yield chain

<div class="flow-chain">
<strong>Potential sinks</strong> → <strong>Sink set</strong> → <strong>Filling</strong> → <strong>Standing yield</strong> → <strong>Marketable fraction</strong> → <strong>Harvest efficiency</strong> → <strong>Collected yield</strong>
</div>

### 4.17.130. Không double counting

Nếu heat đã giảm:
- fertility;
- filling duration;

thì không nhân thêm một \(F_{heat}\) chung vào final yield.

Nếu senescence đã giảm GLAI và source supply, không phạt yield thêm bằng một \(F_{sen}\) tổng quát.

### 4.17.131. Vai trò của 4.17 trong VECrop

4.17 biến trạng thái sinh khối thành năng suất kinh tế:

$
Biomass
\rightarrow
Yield\ components
\rightarrow
Sink\ filling
\rightarrow
Harvest\ index
\rightarrow
Marketable\ yield
$

### 4.17.132. Kết luận 4.17

VECrop không nên dự báo năng suất bằng một hệ số cuối cùng duy nhất.

Cấu trúc phù hợp hơn là:

$
Yield
=
f(
Sink\ number,
Sink\ size,
Filling\ rate,
Filling\ duration,
Source\ supply,
Remobilization,
Stress\ timing,
Harvestability
)
$

và mọi thành phần phải liên kết ngược với:
- phenology;
- canopy photosynthesis;
- hydraulics;
- nutrient balance;
- source–sink;
- senescence;
- biomass allocation.

Điều này làm cho năng suất trở thành **kết quả cuối của chuỗi cơ chế**, không phải biến được “gắn thêm” vào cuối mô hình.

---

# Chuỗi tích hợp cuối Chương 4

<div class="flow-chain">
<strong>Đất/giá thể</strong> → <strong>Rễ</strong> → <strong>Xylem</strong> → <strong>Lá</strong> → <strong>Khí khổng & quang hợp</strong> → <strong>Phloem</strong> → <strong>Source–sink</strong> → <strong>C–N–P–K & năng lượng</strong> → <strong>ROS–Hormone–Ca²⁺–MAPK</strong> → <strong>Sinh trưởng và năng suất</strong>
</div>

**Phạm vi giáo trình hiện tại kết thúc đúng tại mục 4.17.**

---

# Tài liệu nền tảng

1. Nobel P.S. **Physicochemical and Environmental Plant Physiology.**
2. Kramer P.J., Boyer J.S. **Water Relations of Plants and Soils.**
3. Rengel Z., Cakmak I., White P.J. (eds.). **Marschner's Mineral Nutrition of Plants. 4th ed.** Academic Press, 2023.
4. Tyree M.T., Zimmermann M.H. **Xylem Structure and the Ascent of Sap.**
5. Knoblauch M., Peters W.S. Reviews on the Münch pressure-flow mechanism.
6. De Schepper V. et al. Reviews on phloem transport and drought.
7. Farquhar G.D., von Caemmerer S., Berry J.A. C3 photosynthesis model.
8. Medlyn B.E. et al. Unified stomatal optimization / conductance model.
9. von Caemmerer S. **Biochemical Models of Leaf Photosynthesis.**
10. Bailey-Serres J., Voesenek L.A.C.J. Reviews on flooding and low-oxygen responses.
11. Zhu J.K. Reviews on salinity and ion homeostasis.
12. Mittler R.; Waszczak C. et al. Reviews on ROS signaling and redox.
13. Cutler S.R. et al. Reviews on ABA signaling.
14. Boudsocq M., Sheen J. Reviews on calcium-dependent signaling.
15. Xu J., Zhang S. Reviews on MAPK cascades in plants.
16. Fichtner F., Lunn J.E. Reviews on trehalose-6-phosphate and sucrose signaling.
17. Reviews on HXK, SnRK1 and TOR signaling in plant growth and stress responses.
18. Coen E., Prusinkiewicz P. Reviews on developmental timing in plants.
19. Desvoyes B. et al. Reviews on cell proliferation kinetics in the root apical meristem.
20. Reviews on flowering-time regulation, photoperiod and vernalization in crops.
21. Reviews on leaf senescence regulation, nutrient remobilization and stay-green phenotypes.
22. Reviews on autophagy and programmed cell death in plant senescence.
23. Reviews and textbooks on crop growth analysis, biomass partitioning, allometry and organ allocation.
24. Reviews on root–shoot allocation, functional equilibrium and dynamic dry-matter partitioning.
25. Reviews and crop-model literature on yield components, sink establishment, grain filling and harvest index.
26. Literature on yield potential, yield gaps, reproductive stress windows and marketable yield formation in rice, maize and leafy vegetables.

> **Quy tắc VECrop:** mọi tham số như \(P_{50}\), \(g_1\), \(V_{cmax}\), \(J_{max}\), \(K_m\), \(V_{\max}\), \(k_{rem}\), hormone coefficient hoặc vulnerability parameter phải có provenance theo loài/giống/cơ quan/giai đoạn/điều kiện/phương pháp; nếu chưa có nguồn thì phải ghi rõ *calibration parameter* hoặc *proposed*.
