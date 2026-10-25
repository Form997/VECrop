# Tôi đang xây giáo trình nghiên cứu VECrop bằng tiếng Việt về sinh lý, dinh dưỡng

**Question:** Tôi đang xây giáo trình nghiên cứu VECrop bằng tiếng Việt về sinh lý, dinh dưỡng và mô hình hóa cây trồng cho lúa, ngô và xà lách. Nội dung hiện có: Chương 1 nền tảng vật lý-sinh lý; Chương 2 môi trường vùng rễ; Chương 3 HSY cấp tế bào/phân tử; Chương 4 đến 4.12 gồm thế nước/SPAC, thủy lực rễ/aquaporin, hấp thu khoáng/xylem loading, xylem/cavitation, phloem/source-sink, ghép hydraulics-stomata-photosynthesis, cân bằng C-N-P-K, respiration/ATP, O2/hypoxia/Eh, ion/pH/salinity, ROS/redox, hormone-Ca2+-ROS-MAPK.

Hãy xác định các mảng học thuật còn thiếu để giáo trình đạt mức sau đại học/tiến sĩ và có thể dùng làm nền cho mô hình cơ chế. Ưu tiên các phần: sugar sensing/SnRK1-TOR, phenology và thermal time/vernalization/photoperiod, meristem/cell division-expansion, senescence và remobilization, root architecture/rhizosphere/microbiome, photosynthetic acclimation và canopy radiation, C4 specificity cho maize, reproductive development/grain filling, nutrient interactions/stoichiometry, micronutrients, heat/cold/drought/flood/salinity interactions, pests/disease chỉ ở mức physiological coupling nếu cần, genotype x environment, parameter calibration/identifiability/uncertainty, validation and benchmarking, experimental design/sensor data assimilation, management optimization, and crop-specific modules rice/maize/lettuce.

Yêu cầu:
1) Liệt kê cấu trúc chương/mục đề xuất sau 4.12, theo thứ tự logic.
2) Với mỗi mục, nêu 3-6 cơ chế cốt lõi và 1-3 phương trình/khung mô hình phù hợp.
3) Chỉ dùng cơ chế và nguồn học thuật có thể truy vết; tách rõ kiến thức đã thiết lập với phần cần hiệu chỉnh/thực nghiệm.
4) Ưu tiên review/seminal papers và sách chuyên ngành; tránh bịa tham số phổ quát.
5) Nêu rõ những điểm khác biệt bắt buộc giữa lúa, ngô và xà lách.
6) Cuối cùng đưa ra một đề cương giáo trình hoàn chỉnh từ Chương 1 đến chương cuối, có thể triển khai thành repository khoa học.

# Khung **giáo trình VECrop** còn thiếu

Để giáo trình VECrop đạt mức **sau đại học/tiến sĩ** và làm nền cho **mô hình cơ chế**, phần còn thiếu tập trung vào ba lớp: điều hòa tăng trưởng–phát triển, chuyển pha vòng đời và nguồn–đích, và phương pháp luận mô hình hóa–hiệu chuẩn–đánh giá. Sugar signaling qua HXK/SnRK1/TOR là một tầng điều phối trung tâm giữa trạng thái carbon–năng lượng, stress và tăng trưởng; phenology cần được tách riêng như một mô-đun cơ chế dựa trên nhiệt độ, quang chu kỳ và vernalization; còn tăng trưởng cơ quan cần thêm động học phân chia–giãn tế bào và lão hóa–tái huy động để nối từ tế bào tới năng suất [[1.1]](https://consensus.app/papers/the-critical-roles-of-three-sugarrelated-proteins-hxk-li-zhao/2f3b68474f5b523b885140d2ea8c43e9/) [[1.2]](https://consensus.app/papers/the-critical-roles-of-three-sugarrelated-proteins-hxk-li-zhao/2f3b68474f5b523b885140d2ea8c43e9/) [[2.1]](https://consensus.app/papers/simulation-of-phenological-development-of-wheat-crops-wang-engel/e52bbe83163e5c08bcc6a1d48f24d97b/) [[2.2]](https://consensus.app/papers/simulation-of-phenological-development-of-wheat-crops-wang-engel/e52bbe83163e5c08bcc6a1d48f24d97b/) [[3.1]](https://consensus.app/papers/a-perspective-on-cell-proliferation-kinetics-in-the-root-desvoyes-echevarría/4ae4fc90328e5e6d8d7b5647e6f6ff81/) [[3.2]](https://consensus.app/papers/a-perspective-on-cell-proliferation-kinetics-in-the-root-desvoyes-echevarría/4ae4fc90328e5e6d8d7b5647e6f6ff81/) [[4.1]](https://consensus.app/papers/molecular-basis-of-nitrogen-starvationinduced-leaf-sakuraba/9af96de1b0c8521583eeee956db731a0/) [[4.2]](https://consensus.app/papers/molecular-basis-of-nitrogen-starvationinduced-leaf-sakuraba/9af96de1b0c8521583eeee956db731a0/).

## Evidence Coverage

| | Gene Control | Process Rates | Environment | Genotype | Modeling |
|---|---|---|---|---|---|
| Sugar Sensing |  |  |  |  |  |
| Phenology |  |  |  |  |  |
| Meristems |  |  |  |  |  |
| Senescence |  |  |  |  |  |
| Remobilization |  |  |  |  |  |

Khoảng trống rõ nhất là **cầu nối từ cơ chế phân tử sang trạng thái mô hình**. Văn liệu về HXK/SnRK1/TOR mô tả tốt vai trò cảm nhận glucose, stress và phân bổ tài nguyên, nhưng chính các review cũng nhấn mạnh rằng nhiều đích downstream, PTM và mạng tương tác còn chưa rõ, nên khó chuyển trực tiếp thành biến trạng thái và tham số tổng quát [[5.1]](https://consensus.app/papers/hxk-snrk1-and-tor-signaling-in-plants-unraveling-eom-kim/6215430a0af95584b01acb13232b6f37/) [[5.2]](https://consensus.app/papers/hxk-snrk1-and-tor-signaling-in-plants-unraveling-eom-kim/6215430a0af95584b01acb13232b6f37/) [[5.3]](https://consensus.app/papers/hxk-snrk1-and-tor-signaling-in-plants-unraveling-eom-kim/6215430a0af95584b01acb13232b6f37/) [[5.4]](https://consensus.app/papers/hxk-snrk1-and-tor-signaling-in-plants-unraveling-eom-kim/6215430a0af95584b01acb13232b6f37/) [[5.5]](https://consensus.app/papers/hxk-snrk1-and-tor-signaling-in-plants-unraveling-eom-kim/6215430a0af95584b01acb13232b6f37/).  

Khoảng trống thứ hai là **thiếu mô hình hóa phát triển có tính di truyền–môi trường** ngoài cereal ôn đới. Các bài phenology cho thấy thermal time đơn thuần là chưa đủ; phải thêm hàm hiệu chỉnh quang chu kỳ và vernalization, thậm chí dùng allele-based parameterization để dự đoán heading/flowering ổn định hơn giữa địa điểm và thời vụ [[2.1]](https://consensus.app/papers/simulation-of-phenological-development-of-wheat-crops-wang-engel/e52bbe83163e5c08bcc6a1d48f24d97b/) [[2.3]](https://consensus.app/papers/simulation-of-phenological-development-of-wheat-crops-wang-engel/e52bbe83163e5c08bcc6a1d48f24d97b/) [[6.1]](https://consensus.app/papers/physiological-and-environmental-dissection-of-jardón-álvarez-prado/31f4373091b45365986dc04fa6970881/) [[6.2]](https://consensus.app/papers/physiological-and-environmental-dissection-of-jardón-álvarez-prado/31f4373091b45365986dc04fa6970881/) [[7.1]](https://consensus.app/papers/an-allelic-based-phenological-model-to-predict-phasic-christy-riffkin/0c4ffdfbec7b5bbebec2abfacf521088/) [[7.2]](https://consensus.app/papers/an-allelic-based-phenological-model-to-predict-phasic-christy-riffkin/0c4ffdfbec7b5bbebec2abfacf521088/).

**Fig 1.** Observed and simulated phenology for the calibration (A) and validation (B) datasets. Climate type Cfb is represented by circles (o), climate type Dfb is represented by squares ( □ ) and climate type Dfa is represented by triangle ( Δ ). Intensity of grey varies with simulated crop stage in BBCH scale, with lighter grey being stem extension (BBCH 30) and darker grey being maturity (BBCH 89). [[8]](https://consensus.app/papers/processbased-analysis-of-thinopyrum-intermedium-duchene-dumont/a72de23e7c165101968c2468b21ed947/)

*How to read: Các điểm là giai đoạn phenology quan sát và mô phỏng ở các bộ dữ liệu hiệu chuẩn và kiểm định. Sắc độ thể hiện thang BBCH; so sánh độ bám của điểm quanh đường tương ứng giữa hai tập dữ liệu.*

## Chương Đề Xuất

| Mục sau 4.12 | Cơ chế cốt lõi | Phương trình/khung mô hình | Trạng thái bằng chứng | Khác biệt lúa-ngô-xà lách |
|---|---|---|---|---|
| **4.13 Sugar Sensing** | HXK cảm nhận glucose; SnRK1 kích hoạt khi thiếu năng lượng; TOR thúc đẩy anabolic growth; Tre6P phản ánh sucrose | Carbon status index; SnRK1–TOR switch; source-sink feedback | **Thiết lập** ở mức mạng lõi, **chưa ổn** ở mức tham số phổ quát [[1.3]](https://consensus.app/papers/the-critical-roles-of-three-sugarrelated-proteins-hxk-li-zhao/2f3b68474f5b523b885140d2ea8c43e9/) [[1.1]](https://consensus.app/papers/the-critical-roles-of-three-sugarrelated-proteins-hxk-li-zhao/2f3b68474f5b523b885140d2ea8c43e9/) [[9.1]](https://consensus.app/papers/sugars-and-the-speed-of-life—metabolic-signals-that-wingler-henriques/dd6fc3e7bf1851a7930d5fab822512fc/) [[9.2]](https://consensus.app/papers/sugars-and-the-speed-of-life—metabolic-signals-that-wingler-henriques/dd6fc3e7bf1851a7930d5fab822512fc/) | Ngô nhấn mạnh sink mạnh và C4 sugar flux; lúa nhạy ngập/hypoxia; xà lách nhạy source limitation |
| **4.14 Phenology** | nhiệt độ, quang chu kỳ, vernalization, earliness per se, tốc độ ra lá | thermal time; photoperiod factor; vernalization factor | **Thiết lập mạnh** cho cereal [[2.1]](https://consensus.app/papers/simulation-of-phenological-development-of-wheat-crops-wang-engel/e52bbe83163e5c08bcc6a1d48f24d97b/) [[6.3]](https://consensus.app/papers/physiological-and-environmental-dissection-of-jardón-álvarez-prado/31f4373091b45365986dc04fa6970881/) [[6.4]](https://consensus.app/papers/physiological-and-environmental-dissection-of-jardón-álvarez-prado/31f4373091b45365986dc04fa6970881/) [[10.1]](https://consensus.app/papers/vernalisation-and-photoperiod-responses-of-diverse-wheat-bloomfield-celestina/cf56c386cb715ad7b9f4df7cdd5c1d27/) | Ngô cần photothermal development; lúa cần flowering theo mùa vụ; xà lách cần bolting/cold sensitivity |
| **4.15 Meristem Và Growth Kinetics** | số tế bào phân chia, độ dài growth zone, giãn tế bào, endoreplication, exit khỏi mitosis | kinematic growth; cell flux; zone-based organ growth | **Thiết lập** cho root/leaf mô hình mẫu [[11.1]](https://consensus.app/papers/analysis-of-cell-division-and-elongation-underlying-the-beemster-baskin/67e29434d70b537d8d09220c0868748e/) [[11.2]](https://consensus.app/papers/analysis-of-cell-division-and-elongation-underlying-the-beemster-baskin/67e29434d70b537d8d09220c0868748e/) [[11.3]](https://consensus.app/papers/analysis-of-cell-division-and-elongation-underlying-the-beemster-baskin/67e29434d70b537d8d09220c0868748e/) [[12.1]](https://consensus.app/papers/scarecrowlike28-modulates-organ-growth-in-arabidopsis-by-goldy-barrera/8707fae40cb05abb92d06f4a64f00fce/) | Xà lách cần mô-đun leaf expansion; ngô cần leaf elongation và reproductive meristem; lúa cần tiller/panicle meristem |
| **4.16 Senescence–Remobilization** | chlorophyll catabolism, autophagy, N remobilization, post-anthesis uptake, source-sink tradeoff | pool-remobilization equations; senescence hazard; grain demand coupling | **Thiết lập vừa-mạnh**, nhưng phụ thuộc loài và môi trường [[13.1]](https://consensus.app/papers/nitrogen-remobilization-during-leaf-senescence-lessons-havé-marmagne/9b585f27f8ee5b2cab41078bd40215aa/) [[4.3]](https://consensus.app/papers/molecular-basis-of-nitrogen-starvationinduced-leaf-sakuraba/9af96de1b0c8521583eeee956db731a0/) [[14.1]](https://consensus.app/papers/leaf-mineral-nutrient-remobilization-during-leaf-maillard-diquélou/208b4fc106b15dd1a0b74f85a3f284fd/) [[14.2]](https://consensus.app/papers/leaf-mineral-nutrient-remobilization-during-leaf-maillard-diquélou/208b4fc106b15dd1a0b74f85a3f284fd/) | Ngô remobilization kém hơn wheat; lúa cần grain filling dưới ngập/nhiệt; xà lách thiên về harvest quality hơn grain sink |
| **4.17 Root Architecture–Rhizosphere** | kiến trúc rễ, root hairs, sink growth, sugar–microbe coupling | RSA graph models; uptake–architecture coupling | **Thiếu trong bộ tài liệu hiện có**, cần bổ sung review chuyên đề; sugar signaling có gợi ý cầu nối microbe [[1.4]](https://consensus.app/papers/the-critical-roles-of-three-sugarrelated-proteins-hxk-li-zhao/2f3b68474f5b523b885140d2ea8c43e9/) [[1.5]](https://consensus.app/papers/the-critical-roles-of-three-sugarrelated-proteins-hxk-li-zhao/2f3b68474f5b523b885140d2ea8c43e9/) [[5.6]](https://consensus.app/papers/hxk-snrk1-and-tor-signaling-in-plants-unraveling-eom-kim/6215430a0af95584b01acb13232b6f37/) | Lúa có aerenchyma/ngập; ngô rooting depth; xà lách bộ rễ nông và nhạy EC/O2 |
**Figure 1:** Các mục học thuật đề xuất sau 4.12, gắn cơ chế với khung mô hình và khác biệt bắt buộc giữa lúa, ngô, xà lách.

## Các Cụm Cần Thêm

- **Photosynthetic acclimation và canopy radiation** nên là một chương riêng nối từ quang hợp lá tới tán; bộ tài liệu hiện có chỉ gợi gián tiếp qua quan hệ quang hợp lá, NDVI và năng suất sau anthesis [[15.1]](https://consensus.app/papers/nitrogen-partitioning-and-remobilization-in-relation-to-nehe-misra/97aafe2720d85956a5cbdc27a84b29b0/) [[15.2]](https://consensus.app/papers/nitrogen-partitioning-and-remobilization-in-relation-to-nehe-misra/97aafe2720d85956a5cbdc27a84b29b0/) [[15.3]](https://consensus.app/papers/nitrogen-partitioning-and-remobilization-in-relation-to-nehe-misra/97aafe2720d85956a5cbdc27a84b29b0/).
- **Reproductive development và grain filling** phải đứng sau phenology và meristem vì flowering timing chi phối phơi nhiễm với frost, heat và drought, từ đó quyết định cấu phần năng suất [[10.2]](https://consensus.app/papers/vernalisation-and-photoperiod-responses-of-diverse-wheat-bloomfield-celestina/cf56c386cb715ad7b9f4df7cdd5c1d27/) [[10.3]](https://consensus.app/papers/vernalisation-and-photoperiod-responses-of-diverse-wheat-bloomfield-celestina/cf56c386cb715ad7b9f4df7cdd5c1d27/) [[8.1]](https://consensus.app/papers/processbased-analysis-of-thinopyrum-intermedium-duchene-dumont/a72de23e7c165101968c2468b21ed947/).
- **Nutrient interactions, stoichiometry và micronutrients** cần tách khỏi cân bằng C-N-P-K cơ bản vì hiệu suất tái huy động khác rõ giữa N, K, P, S, Mg và cả vi lượng như Cu, Mo, Ni, B, Fe, Zn [[14.1]](https://consensus.app/papers/leaf-mineral-nutrient-remobilization-during-leaf-maillard-diquélou/208b4fc106b15dd1a0b74f85a3f284fd/) [[14.3]](https://consensus.app/papers/leaf-mineral-nutrient-remobilization-during-leaf-maillard-diquélou/208b4fc106b15dd1a0b74f85a3f284fd/) [[14.4]](https://consensus.app/papers/leaf-mineral-nutrient-remobilization-during-leaf-maillard-diquélou/208b4fc106b15dd1a0b74f85a3f284fd/).
- **G×E, calibration, identifiability, uncertainty, validation, benchmarking, sensor assimilation và management optimization** là khối còn thiếu lớn nhất nếu mục tiêu là repository khoa học dùng được; các paper phenology cho thấy chỉ sau khi hiệu chuẩn và kiểm định đa môi trường thì mô hình mới đủ tin cậy để dùng cho ideotype và quyết định quản lý [[6.1]](https://consensus.app/papers/physiological-and-environmental-dissection-of-jardón-álvarez-prado/31f4373091b45365986dc04fa6970881/) [[6.2]](https://consensus.app/papers/physiological-and-environmental-dissection-of-jardón-álvarez-prado/31f4373091b45365986dc04fa6970881/) [[8.2]](https://consensus.app/papers/processbased-analysis-of-thinopyrum-intermedium-duchene-dumont/a72de23e7c165101968c2468b21ed947/) [[8.3]](https://consensus.app/papers/processbased-analysis-of-thinopyrum-intermedium-duchene-dumont/a72de23e7c165101968c2468b21ed947/) [[7.3]](https://consensus.app/papers/an-allelic-based-phenological-model-to-predict-phasic-christy-riffkin/0c4ffdfbec7b5bbebec2abfacf521088/) [[7.4]](https://consensus.app/papers/an-allelic-based-phenological-model-to-predict-phasic-christy-riffkin/0c4ffdfbec7b5bbebec2abfacf521088/).

## Đề Cương Hoàn Chỉnh

Sau 4.12, thứ tự logic phù hợp là: **4.13 sugar sensing; 4.14 phenology; 4.15 meristem/cell division-expansion; 4.16 senescence/remobilization; 4.17 root architecture-rhizosphere; 4.18 photosynthetic acclimation-canopy radiation; 4.19 reproductive development-grain filling; 4.20 nutrient interactions-stoichiometry-micronutrients; 4.21 đa stress và physiological coupling với sâu bệnh; 4.22 G×E và trait hierarchy; 4.23 parameterization-identifiability-uncertainty; 4.24 validation-benchmarking; 4.25 experimental design-sensor data assimilation; 4.26 management optimization; 4.27 module cây trồng đặc thù cho lúa; 4.28 cho ngô với **C4 specificity**; 4.29 cho xà lách**.** [[1.6]](https://consensus.app/papers/the-critical-roles-of-three-sugarrelated-proteins-hxk-li-zhao/2f3b68474f5b523b885140d2ea8c43e9/) [[11.1]](https://consensus.app/papers/analysis-of-cell-division-and-elongation-underlying-the-beemster-baskin/67e29434d70b537d8d09220c0868748e/) [[6.1]](https://consensus.app/papers/physiological-and-environmental-dissection-of-jardón-álvarez-prado/31f4373091b45365986dc04fa6970881/) [[14.1]](https://consensus.app/papers/leaf-mineral-nutrient-remobilization-during-leaf-maillard-diquélou/208b4fc106b15dd1a0b74f85a3f284fd/) [[16.1]](https://consensus.app/papers/polarityguided-uneven-mitotic-divisions-control-vukašinović-hsu/e711bac09518581ab9b8c3aa5a0d9c20/) [[16.2]](https://consensus.app/papers/polarityguided-uneven-mitotic-divisions-control-vukašinović-hsu/e711bac09518581ab9b8c3aa5a0d9c20/).

Nếu cần, bước tiếp theo hợp lý nhất là chuyển khung này thành **syllabus cấp mục 4.13–4.29**, trong đó mỗi mục có: mục tiêu học tập, cơ chế đã thiết lập, phần cần hiệu chỉnh, biến trạng thái, tham số, dữ liệu đo, test cases cho lúa–ngô–xà lách, và skeleton repository.
 
_These search results were found and analyzed using Consensus, an AI-powered search engine for research. Try it at https://consensus.app. © 2026 Consensus NLP, Inc. Personal, non-commercial use only; redistribution requires copyright holders’ consent._
 
## References
 
`1.` Li G, Zhao Y. The critical roles of three sugar-related proteins (HXK, SnRK1, TOR) in regulating plant growth and stress responses. *Horticulture Research.* 2024;11. doi:10.1093/hr/uhae099
 
> [1.1] SnRK1 serves as a vital regulator of growth under energy-depleted circumstances, whereas TOR, a large protein, acts as a central integrator of signaling pathways that govern cell metabolism, organ development, and transcriptome reprogramming in response to diverse stimuli. (Abstract)
 
> [1.2] Furthermore, studies have found that these three proteins not only regulate sugar signaling but also exhibit certain signal crosstalk in regulating plant growth and development. (Abstract)
 
> [1.3] HXK, SnRK1, and TOR are three fundamental proteins that have a pivotal role in the metabolism of sugars in plants. (Abstract)
 
> [1.4] Researchers found that HXK1 exerts a negative influence on the stability of EIN3, and that EIN3 acts upstream of SUC2 in the modulation of root sink growth through glucose signaling [76]. (Body)
 
> [1.5] Consequently, these components together formed the HXK1–EIN3–SUC2 module, which is instrumental in facilitating sucrose phloem loading in sucrose tissues, ultimately leading to an increase in sucrose content in sink roots (Fig. (Body)
 
> [1.6] Together, these two proteins work to sense upstream signals and modulate downstream signals to regulate cell growth and proliferation. (Abstract)
 
`2.` Wang E, Engel T. Simulation of phenological development of wheat crops. *Agricultural Systems.* 1998;58:1-24. doi:10.1016/s0308-521x(98)00028-6
 
> [2.1] A wheat phenology model based on the effects of temperature, vernalization and photoperiod was developed by introducing a temperature response function for development rate and vernalization, and the concepts of physiological development days and physiological vernalization days. (Abstract)
 
> [2.2] The model can be extended to other cereal crops. (Abstract)
 
> [2.3] Simulation results show that the phenology model can be used to simulate development stages for different wheat varieties with acceptable accuracy. (Abstract)
 
`3.` Desvoyes B, Echevarría C, Gutierrez C. A perspective on cell proliferation kinetics in the root apical meristem. *Journal of Experimental Botany.* 2021;72:6708 - 6715. doi:10.1093/jxb/erab303
 
> [3.1] Organogenesis in plants is primarily postembryonic and relies on a strict balance between cell division and cell expansion. (Abstract)
 
> [3.2] The combination of novel tools, experimental strategies, and mathematical models has contributed to our current view of cell proliferation in the RAM. (Abstract)
 
`4.` Sakuraba Y. Molecular basis of nitrogen starvation-induced leaf senescence. *Frontiers in Plant Science.* 2022;13. doi:10.3389/fpls.2022.1013304
 
> [4.1] Leaf senescence, the final phase of leaf development, is a highly controlled process accompanied by massive transcriptional and metabolic changes that destabilize intracellular organelles and macromolecules and lead to the translocation of nutrients into developing tissues and storage organs. (Body)
 
> [4.2] Under N-deficient conditions, older leaves exhibit yellowing, owing to the degradation of proteins and chlorophyll pigments in chloroplasts and subsequent N remobilization from older leaves to younger leaves and developing organs to sustain plant growth and productivity. (Abstract)
 
> [4.3] In Arabidopsis, the expression levels of NYC1, HCAR, NYE1/SGR1, PPH, and PAO increased significantly under N deficiency stress ( Figure2 ), which implies that these enzymes are involved in chlorophyll degradation during N starvation-induced (Body)
 
`5.` Eom S, Kim E, Hyun TK. HXK, SnRK1, and TOR signaling in plants: Unraveling mechanisms of stress response and secondary metabolism. *Science Progress.* 2024;107. doi:10.1177/00368504241301533
 
> [5.1] The sensing function of AtHXK1, in which the catalytic activity of HXK is not essential for Glc sensing, 10 is evolutionarily conserved and is shared by HXK in other species, including potato (StHXK1 and 2), rice (OsHXK5, 6, and 7), and tobacco (NtHXK1). (Body)
 
> [5.2] However, how the conformational changes induced by Glc binding in HXKs transmit the signal of Glc abundance remains unclear. (Body)
 
> [5.3] Although substantial progress has been made, signi fi cant gaps remain in our understanding of the precise molecular mechanisms and regulatory networks. (Body)
 
> [5.4] Future research should assess the speci fi c downstream targets of these kinases and PTMs that modulate their activity. (Body)
 
> [5.5] Additionally, assessing the crosstalk between HXK/SnRK1/TOR signaling and other hormonal pathways will be crucial for understanding the broader implications of sugar-mediated stress responses. (Body)
 
> [5.6] Moreover, it is essential to investigate the impact of sugar signaling on plant-microbe interactions, as understanding how sugar in fl uences relationships with both bene fi cial and pathogenic microbes could uncover new strategies for enhancing plant health and resilience. (Body)
 
`6.` Jardón M, Álvarez-Prado S, Vanzetti L, et al. Physiological and environmental dissection of developmental drivers for predicting heading date in wheat based on Vrn1, Ppd1 and Eps-D1 allelic characterization. *Field Crops Research.* 2023. doi:10.1016/j.fcr.2023.108810
 
> [6.1] A wheat phenological model using photoperiod and vernalization correction factors was calibrated to predict heading dates in the Argentine wheat region. (Abstract)
 
> [6.2] The model accurately predicted heading date with an error of 8.1, 6.5, 6.2, and 7.0 days for WI, WS, SI, and SS, respectively. (Abstract)
 
> [6.3] Heading time is a critical feature determining wheat performance. (Abstract)
 
> [6.4] Bread wheat development is regulated by the effect of vernalization (Vrn), photoperiod sensitivity (Ps), and earliness per-se (Eps). (Abstract)
 
`7.` Christy B, Riffkin P, Richards R, et al. An allelic based phenological model to predict phasic development of wheat (Triticum aestivum L.). *Field Crops Research.* 2020;249:107722. doi:10.1016/j.fcr.2020.107722
 
> [7.1] Abstract We developed a photoperiod-corrected thermal model that can predict wheat phenology based solely on the combination of photoperiod (Ppd) and vernalisation (Vrn) alleles to identify the phenological suitability of germplasm across the cropping region in southern Australia. (Abstract)
 
> [7.2] The model predicted dates of TS and AN to within 5 days of the field values. (Abstract)
 
> [7.3] The phenological sensitivities of a genotype to varying basic temperature, photoperiod and vernalisation requirement was adjusted via optimisation to minimise the least square difference between the measured and predicted dates of both terminal spike (TS) and flowering (AN). (Abstract)
 
> [7.4] The optimum allelic combinations required to target the optimum flowering period for different locations when sown on different dates were also identified. (Abstract)
 
`8.` Duchene O, Dumont B, Cattani D, et al. Process-based analysis of Thinopyrum intermedium phenological development highlights the importance of dual induction for reproductive growth and agronomic performance. *Agricultural and Forest Meteorology.* 2021. doi:10.1016/j.agrformet.2021.108341
 
> [8.1] Therefore, timing and duration of vegetative vs. reproductive growth may differ between environments and change reproductive tiller elongation earliness, weed competitiveness, management timing, and stress conditions during phases critical to grain yield. (Abstract)
 
> [8.2] The model was compliant with experimental results (relative root mean square error = 0.03). (Abstract)
 
> [8.3] Accurate phenology models will enable optimal field management and inform future breeding strategies. (Abstract)
 
`9.` Wingler A, Henriques R. Sugars and the speed of life—Metabolic signals that determine plant growth, development and death. *Physiologia Plantarum.* 2022;174. doi:10.1111/ppl.13656
 
> [9.1] Key signalling components include trehalose-6-phosphate (Tre6P), which reflects sucrose availability and stimulates growth and branching when the conditions are favourable. (Abstract)
 
> [9.2] Alongside Tre6P, Target of Rapamycin (TOR) stimulates processes such as protein synthesis and growth when sugar availability is high. (Abstract)
 
`10.` Bloomfield MT, Celestina C, Hunt J, et al. Vernalisation and photoperiod responses of diverse wheat genotypes. *Crop and Pasture Science.* 2023;74:405 - 422. doi:10.1071/cp22213
 
> [10.1] Wheat genotypes have different lifecycle durations determined by plant responses to temperature (thermal time accumulation and vernalisation) and photoperiod. (Abstract)
 
> [10.2] Wheat (Triticum aestivum L.) adaptation is highly dependent on crop lifecycle duration, particularly the time at which flowering occurs in a specific environment. (Abstract)
 
> [10.3] Frost, low solar radiation, heat and drought can significantly reduce yield if a crop flowers too early or late. (Abstract)
 
`11.` Beemster G, Baskin T. Analysis of cell division and elongation underlying the developmental acceleration of root growth in Arabidopsis thaliana.. *Plant physiology.* 1998;116 4:1515-26. doi:10.1104/pp.116.4.1515
 
> [11.1] Accelerating root elongation was caused by an increasingly longer growth zone, while maximal strain rates remained unchanged. (Abstract)
 
> [11.2] This increased production was caused by increasingly numerous dividing cells, whereas their rates of division remained approximately constant. (Abstract)
 
> [11.3] These results highlight the importance of controlling the number of dividing cells, both to generate tissues with different cell lengths and to regulate the rate of organ enlargement. (Abstract)
 
`12.` Goldy C, Barrera V, Taylor IW, et al. SCARECROW-LIKE28 modulates organ growth in Arabidopsis by controlling mitotic cell cycle exit, endoreplication and cell expansion dynamics.. *The New phytologist.* 2022. doi:10.1111/nph.18650
 
> [12.1] Here, we show that the Arabidopsis SCL28 transcription factor promotes organ growth by modulating cell expansion dynamics in both root and leaf cells. (Abstract)
 
`13.` Havé M, Marmagne A, Chardon F, Masclaux-Daubresse C. Nitrogen remobilization during leaf senescence: lessons from Arabidopsis to crops.. *Journal of experimental botany.* 2016;68 10:2513-2529. doi:10.1093/jxb/erw365
 
> [13.1] Mechanisms involved in nitrogen recycling, such as autophagy, are essential for nutrient remobilization at the whole-plant level and for seed quality. (Abstract)
 
`14.` Maillard A, Diquélou S, Billard V, et al. Leaf mineral nutrient remobilization during leaf senescence and modulation by nutrient deficiency. *Frontiers in Plant Science.* 2015;6. doi:10.3389/fpls.2015.00317
 
> [14.1] While N was remobilized in all plant species with different efficiencies ranging from 40% (maize) to 90% (wheat), other macronutrients (K-P-S-Mg) were mobilized in most species. (Abstract)
 
> [14.2] Compared to field conditions, remobilization from leaves was similar (N-S-Cu) or increased by nutrient deficiency (K-P-Mg) while nutrient deficiency had no effect on Mo-Zn-B-Ca-Mn, which seemed to be non-mobile during leaf senescence under field conditions. (Abstract)
 
> [14.3] Leaf content of Cu-Mo-Ni-B-Fe-Zn decreased in some species, as a result of remobilization. (Abstract)
 
> [14.4] Differences in remobilization between species and between nutrients are then discussed in relation to a range of putative mechanisms. (Abstract)
 
`15.` Nehe A, Misra S, Murchie E, Chinnathambi K, Tyagi BS, Foulkes M. Nitrogen partitioning and remobilization in relation to leaf senescence, grain yield and protein concentration in Indian wheat cultivars. *Field Crops Research.* 2020;251. doi:10.1016/j.fcr.2020.107778
 
> [15.1] Flag-leaf photosynthesis rate (A max ), flag-leaf senescence rate and canopy normalized difference vegetation index (NDVI) were also assessed. (Abstract)
 
> [15.2] There was a positive linear association between post-anthesis flag-leaf A max and grain yield amongst the 30 genotypes under high N (HN) conditions. (Abstract)
 
> [15.3] Under both HN and low N (LN) conditions, higher N uptake at anthesis was associated with delayed onset of flag-leaf senescence and higher grain yield. (Abstract)
 
`16.` Vukašinović N, Hsu C, Marconi M, et al. Polarity-guided uneven mitotic divisions control brassinosteroid activity in proliferating plant root cells.. *Cell.* 2025. doi:10.1016/j.cell.2025.02.011
 
> [16.1] Brassinosteroid hormones are positive regulators of plant organ growth, yet their function in proliferating tissues remains unclear. (Abstract)
 
> [16.2] The post-mitotic recovery of brassinosteroid activity is driven by the intrinsic polarity of the mother cell, resulting in one daughter cell with enhanced brassinosteroid signaling, while the other supports brassinosteroid biosynthesis. (Abstract)
