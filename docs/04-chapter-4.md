# Chương 4. Thủy lực, mạch dẫn và tích hợp toàn cây

## 4.1. Thế nước và SPAC
[
\Psi_w=\Psi_p+\Psi_s+\Psi_m+\Psi_g
]
[
\vec J_w=-K_h\nabla\Psi_w
]

## 4.2. Thủy lực rễ – apoplast – symplast – aquaporin
[
J_{w,r}=L_{pr,eff}(\Psi_{soil}-\Psi_{xyl})
]
[
L_{pr,eff}=L_{pr,0}F_{anat}F_{AQP}F_{env}
]

## 4.3. Vận chuyển khoáng và xylem loading
[
J_{i,in}=V_{\max,i}^{eff}\frac{C_i}{K_{m,i}+C_i}+J_{LATS,i}
]
[
U_i=A_rJ_{i,net}
]

## 4.4. Vận chuyển dọc xylem – cavitation – embolism
[
J_x=-K_{x,eff}\frac{\partial\Psi_x}{\partial z}
]
[
K_{x,eff}=K_{x,max}\left(1-\frac{PLC}{100}\right)
]

## 4.5. Phloem – source–sink – hormone cấp cơ quan
[
Q_{ph}=K_{ph}(P_{source}-P_{sink})
]
[
SS_o=M_oq_oy_oH_{CN,o}
]
[
a_o=\frac{SS_o}{\sum_jSS_j}
]

## 4.6. Ghép xylem – khí khổng – quang hợp – phloem
[
C_L\frac{d\Psi_L}{dt}=K_L(\Psi_{soil}-\Psi_L)-E
]
[
g_{sw}=g_0+F_{hyd}\,1.6\left(1+\frac{g_1}{\sqrt D}\right)\frac{A_n}{C_s}
]
[
A_{can}=\int_0^{LAI}A_n(L)\,dL
]

## 4.7. Cân bằng động C–N–P–K
[
\frac{dM_C}{dt}=A_C-R_m-R_g-L_C
]
[
\frac{dM_i}{dt}=U_i-L_i,\quad i=N,P,K
]
[
F_{rem,i,o}=k_{rem,i,o}M_{i,o}^{mob}
]

## 4.8. Hô hấp – ATP – chi phí tăng trưởng
[
R_{M,o}=m_{o,ref}M_{met,o}Q_{10,o}^{(T-T_{ref})/10}
]
[
ATP_{dem}=ATP_G+ATP_M+ATP_U+ATP_A+ATP_T
]
[
H_E=\min\left(1,\frac{ATP_{sup}}{ATP_{dem}+\varepsilon}\right)
]

## 4.9. Oxy – hypoxia – anoxia – Eh
[
\frac{\partial C_{O_2}}{\partial t}=D_{O_2,eff}\nabla^2C_{O_2}+S_{O_2}-R_{O_2}
]
[
E_h=E^0+\frac{RT}{nF}\ln\frac{a_{Ox}}{a_{Red}}
]

## 4.10. Cân bằng ion – điện tích – pH – mặn
[
\Delta\widetilde\mu_i=RT\ln\frac{a_{i,in}}{a_{i,out}}+z_iF\Delta\psi
]
[
C_m\frac{dV_m}{dt}=-\left(I_{pump}+\sum_iI_i\right)
]
[
\sum_i z_iC_i+C_{fixed}\approx0
]

## 4.11. ROS – redox – antioxidant – damage
[
P_{ROS}=P_{chl}+P_{mit}+P_{per}+P_{RBOH}
]
[
\frac{d[H_2O_2]}{dt}=P_{H_2O_2}+\frac12v_{SOD}-v_{CAT}-v_{APX}-v_{PRX}-J_{H_2O_2}
]
[
H_{redox}=e^{-(\lambda_LD_L+\lambda_PD_P+\lambda_ND_{NA})}
]

## 4.12. Hormone – Ca²⁺ – ROS – MAPK
[
\frac{dH_h}{dt}=B_h-D_h+T_{h,in}-T_{h,out}
]
[
y_o=\sigma\left[\beta_{0,o,g}+\sum_i\beta_iH_i^*+\sum_{i<j}\beta_{ij}H_i^*H_j^*+\beta_{Ca}S_{Ca}+\beta_RS_{ROS}+\beta_MM^*\right]
]

## Chuỗi tích hợp
[
\boxed{soil\rightarrow root\rightarrow xylem\rightarrow leaf\rightarrow photosynthesis\rightarrow phloem\rightarrow source\text{-}sink\rightarrow biomass\rightarrow yield}
]
