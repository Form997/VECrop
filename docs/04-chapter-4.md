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

Phloem là con đường vận chuyển dài hạn chủ yếu của assimilates từ source tới sink. Mô hình pressure-flow/Münch xem gradient áp suất thủy tĩnh, hình thành nhờ loading và unloading chất tan, là driving force chính của bulk flow. citeturn894170search0turn894170search1

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

Medlyn-type models liên kết stomatal conductance với assimilation và VPD; tham số \(g_0,g_1\) phụ thuộc plant functional type/crop và không phải hằng số phổ quát. citeturn894170search4turn894170search6

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

Các phản ứng low-O₂ bao gồm thay đổi sử dụng carbohydrate, fermentation, hình thành aerenchyma và radial oxygen loss barrier ở các loài thích nghi ngập. citeturn894170search7

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

# Chuỗi tích hợp cuối Chương 4

<div class="flow-chain">
<strong>Đất/giá thể</strong> → <strong>Rễ</strong> → <strong>Xylem</strong> → <strong>Lá</strong> → <strong>Khí khổng & quang hợp</strong> → <strong>Phloem</strong> → <strong>Source–sink</strong> → <strong>C–N–P–K & năng lượng</strong> → <strong>ROS–Hormone–Ca²⁺–MAPK</strong> → <strong>Sinh trưởng và năng suất</strong>
</div>

**Phạm vi giáo trình hiện tại kết thúc đúng tại mục 4.12.**

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

> **Quy tắc VECrop:** mọi tham số như \(P_{50}\), \(g_1\), \(V_{cmax}\), \(J_{max}\), \(K_m\), \(V_{\max}\), \(k_{rem}\), hormone coefficient hoặc vulnerability parameter phải có provenance theo loài/giống/cơ quan/giai đoạn/điều kiện/phương pháp; nếu chưa có nguồn thì phải ghi rõ *calibration parameter* hoặc *proposed*.
