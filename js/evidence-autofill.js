/* Vietnam-first verified bibliographic autofill. Never populate measured experimental data. */
(function(){
'use strict';
const E=id=>document.getElementById(id);
const F=E('experimentForm');
const BTN=E('searchMissingBtn');
if(!F||!BTN)return;
const CLEAN=/[\u0300-\u036f]/g;
const VIETNAM=/\b(viet\s*nam|vietnam|vietnamese)\b/i;
const CROPS={
 'lua':['Oryza sativa','rice','paddy'],'rice':['Oryza sativa','rice'],
 'ngo':['Zea mays','maize','corn'],'bap':['Zea mays','maize','corn'],
 'xa lach':['Lactuca sativa','lettuce'],'rau xa lach':['Lactuca sativa','lettuce'],
 'lettuce':['Lactuca sativa','lettuce'],
 'ca chua':['Solanum lycopersicum','tomato'],'tomato':['Solanum lycopersicum','tomato'],
 'dau tuong':['Glycine max','soybean'],'dau nanh':['Glycine max','soybean'],
 'khoai tay':['Solanum tuberosum','potato'],'potato':['Solanum tuberosum','potato'],
 'khoai lang':['Ipomoea batatas','sweet potato'],
 'dua chuot':['Cucumis sativus','cucumber'],'dua leo':['Cucumis sativus','cucumber'],
 'lac':['Arachis hypogaea','peanut','groundnut'],'dau phong':['Arachis hypogaea','peanut','groundnut'],
 'dua hau':['Citrullus lanatus','watermelon'],'watermelon':['Citrullus lanatus','watermelon'],
 'keo':['acacia','Acacia mangium','Acacia auriculiformis'],
 'tre':['bamboo','Bambusoideae'],'ca phe':['coffee','Coffea arabica','Coffea canephora']
};
const norm=x=>String(x||'').normalize('NFD').replace(CLEAN,'').toLowerCase().replace(/đ/g,'d').replace(/[^a-z0-9]+/g,' ').trim();
const vnRx=/\b(viet\s*nam|vietnam|vietnamese)\b/i;
const placeAliases={
 hue:['Hue','Thua Thien Hue'],'thua thien hue':['Hue','Thua Thien Hue'],
 'thanh hoa':['Thanh Hoa'],'quang tri':['Quang Tri'],
 'quang binh':['Quang Binh'],'ha noi':['Hanoi','Ha Noi'],
 'tp ho chi minh':['Ho Chi Minh City','Saigon']
};
const zones={
 'bac trung bo':['North Central Vietnam','North Central Coast'],
 'dong bang song hong':['Red River Delta'],
 'dong bang song cuu long':['Mekong Delta'],
 'tay nguyen':['Central Highlands'],
 'nam trung bo':['South Central Coast'],
 'dong nam bo':['Southeast Vietnam']
};
function locality(){
 const province=String(F.elements.site_province?.value||'').trim().slice(0,100);
 const agroZone=String(F.elements.agro_zone?.value||'').trim().slice(0,100);
 const cultivar=String(F.elements.cultivar?.value||'').trim();
 return {province,agroZone,cultivar,
  provinceAliases:[province,...(placeAliases[norm(province)]||[])].filter(Boolean),
  regionAliases:[agroZone,...(zones[norm(agroZone)]||[])].filter(Boolean)};
}
function containsPlace(text,aliases){
 return aliases.some(s=>norm(s).length>=3&&(' '+norm(text)+' ').includes(' '+norm(s)+' '));
}
function cleanAbstract(text){
 return String(text||'').replace(/<[^>]*>/g,' ').replace(/\s+/g,' ').slice(0,5000);
}
const topicAliases={
 'soil ec':['soil electrical conductivity','electrical conductivity','salinity','soil ec','conductivity'],
 'ec':['electrical conductivity','salinity','conductivity'],
 'ph':['soil ph','soil acidity','soil reaction'],
 'soil ph':['soil ph','soil acidity','soil reaction'],
 'nang suat':['yield','productivity','nang suat'],
 'yield':['yield','productivity'],
 'do am':['soil moisture','soil water','water content'],
 'lai':['leaf area index','lai'],
 'vcmax':['vcmax','photosynthetic capacity'],
 'p50':['p50','xylem vulnerability','cavitation'],
 'phan bon':['fertilizer','fertilization','nutrient']
};
function matchingTopic(text,topic){
 const terms=topicAliases[norm(topic)]||[topic];
 return terms.some(t=>norm(t).length>=2&&(' '+norm(text)+' ').includes(' '+norm(t)+' '));
}
function doiAlerts(it){
 const warnings=[],updates=Array.isArray(it['update-to'])?it['update-to']:[];
 let blocked=false;
 for(const update of updates){
  const label=String(update.type||update.label||'').toLowerCase();
  if(/retract|withdraw/.test(label)){blocked=true;warnings.push('Metadata ghi nhận thu hồi/rút bài');}
  else warnings.push('Có thông tin cập nhật/đính chính: '+(label||'chưa rõ loại'));
 }
 for(const key of Object.keys(it.relation||{})){
  if(/retract|withdraw/.test(key)){blocked=true;warnings.push('Quan hệ DOI về thu hồi: '+key);}
  else if(/correct|update/.test(key))warnings.push('Quan hệ DOI về đính chính/cập nhật: '+key);
 }
 return {blocked,warnings};
}
function cropInfo(){
 const crop=String(F.elements.crop_name?.value||'').trim();
 const species=String(F.elements.species?.value||'').trim();
 const aliases=CROPS[norm(crop)]||[];
 const primary=species||aliases[0]||crop;
 const terms=[crop,species,...aliases].filter(Boolean).map(norm);
 const candidate=aliases[0]||(/^[A-Z][a-z]+\s+[a-z][a-z-]+$/.test(species)?species:'');
 return {crop,species,primary,terms,candidate};
}
function cropMatch(it,crop){
 const title=norm(it?.title?.[0]);
 return Boolean(title && crop.crop && crop.terms.some(t=>
  t.length>=3 && (' '+title+' ').includes(' '+t+' ')));
}
function selectPaper(it,crop,tier,topic=''){
 const doi=String(it?.DOI||'').trim();
 if(!/^10\.\d{4,9}\/[-._;()/:a-z0-9]+$/i.test(doi))return null;
 if(!['journal-article','proceedings-article'].includes(it.type))return null;
 if(!cropMatch(it,crop))return null;
 const title=String(it.title[0]||'').replace(/\s+/g,' ').trim().slice(0,480);
 const abstract=cleanAbstract(it.abstract), text=title+' '+abstract;
 const loc=locality();
 const province=containsPlace(title,loc.provinceAliases)||containsPlace(abstract,loc.provinceAliases);
 const region=containsPlace(title,loc.regionAliases)||containsPlace(abstract,loc.regionAliases);
 const vietnam=vnRx.test(title)||vnRx.test(abstract);
 const geographicLevel=province?4:region?3:vietnam?2:1;
 const geographicEvidence=province?'Địa danh tỉnh trong title/abstract':
  region?'Tên vùng trong title/abstract':vietnam?'Việt Nam trong title/abstract':
  'Chưa có bằng chứng địa điểm trong title/abstract';
 if(tier==='PROVINCE'&&geographicLevel<4)return null;
 if(tier==='AGRO_ZONE'&&geographicLevel<3)return null;
 if(tier==='VN'&&geographicLevel<2)return null;
 const pub=it.published||it['published-online']||it['published-print']||{};
 const year=pub['date-parts']?.[0]?.[0]||null;
 const journal=String(it['container-title']?.[0]||'').slice(0,240);
 const flags=doiAlerts(it);
 const topicMatch=matchingTopic(text,topic);
 const cultivarMatch=!loc.cultivar||(' '+norm(text)+' ').includes(' '+norm(loc.cultivar)+' ');
 const issues=[];
 if(!abstract)issues.push('Thiếu abstract trong metadata Crossref');
 if(!topicMatch)issues.push('Chưa rõ biến/chủ đề trong metadata');
 if(!cultivarMatch)issues.push('Không thấy cultivar đang nghiên cứu trong metadata');
 if(geographicLevel===1)issues.push('Địa điểm nghiên cứu chưa rõ');
 if(!loc.province)issues.push('Chưa nhập tỉnh/thành để kiểm tra tính địa phương');
 if(!it.ISSN?.length)issues.push('Chưa có ISSN trong metadata');
 issues.push(...flags.warnings);
 const record={
  kind:'bibliography',source:'Crossref',doi,title,journal,year,
  url:'https://doi.org/'+encodeURIComponent(doi),tier,
  geographic_level:geographicLevel,geographic_evidence:geographicEvidence,
  province_query:loc.province||'',agro_zone_query:loc.agroZone||'',
  publisher:String(it.publisher||'').slice(0,200),
  issn:Array.isArray(it.ISSN)?it.ISSN.slice(0,3):[],
  author_count:Array.isArray(it.author)?it.author.length:0,
  reference_count:Number(it['references-count'])||0,
  cited_by_count:Number(it['is-referenced-by-count'])||0,
  abstract_available:!!abstract,topic_match:topicMatch,cultivar_match:cultivarMatch,
  issues,retraction_alert:flags.blocked,
  doi_status:flags.blocked?'RETRACTION_FLAG_REVIEW':'METADATA_REGISTERED_NOT_VALIDATED',
  search_rank:geographicLevel*6+(topicMatch?5:0)+(cultivarMatch?3:0)+
    (abstract?1:0)+(it.ISSN?.length?1:0),
  checked_at:new Date().toISOString(),
  verification:'DOI registry metadata only; actual trial site, methods, observations, external validity NOT verified'};
 record.auto_citation=!flags.blocked&&topicMatch&&cultivarMatch&&geographicLevel>=2;
 return record;
}
async function api(url,timeout=12000){
 const ctrl=new AbortController(),tid=setTimeout(()=>ctrl.abort(),timeout);
 try{const res=await fetch(url,{signal:ctrl.signal,headers:{Accept:'application/json'}});
 if(!res.ok)throw Error('HTTP '+res.status);return await res.json()}
 finally{clearTimeout(tid)}
}
let lastCrossrefRequest=0;
async function lookup(crop,topic,tier){
 const loc=locality();
 const area=tier==='PROVINCE'?loc.province:
  tier==='AGRO_ZONE'?loc.agroZone:tier==='VN'?'Vietnam':'';
 const queries=[
  [crop.primary,topic,area],
  [crop.primary,area]
 ].map(x=>x.filter(Boolean).join(' '));
 const base='https://api.crossref.org/works?rows=15&query.bibliographic=';
 const found=new Map();
 for(const [i,q] of queries.entries()){
  // Crossref public list rate is one request/s; queries are sequential.
  const elapsed=Date.now()-lastCrossrefRequest;
  if(elapsed<1100)await new Promise(resolve=>setTimeout(resolve,1100-elapsed));
  lastCrossrefRequest=Date.now();
  let data;
  try{data=await api(base+encodeURIComponent(q))}
  catch(err){if(i===queries.length-1)throw err;continue}
  for(const it of data?.message?.items||[]){
   const p=selectPaper(it,crop,tier,topic);
   if(p&&!found.has(p.doi.toLowerCase()))found.set(p.doi.toLowerCase(),p);
  }
  if(found.size)break;
 }
 return [...found.values()].sort((a,b)=>b.search_rank-a.search_rank).slice(0,4);
}
function displayDOI(p,clear=true){
 const target=E('doiAnalysisResult');if(!target)return;
 if(clear)target.replaceChildren();
 const panel=document.createElement('section');
 panel.className='exp-doi-audit';
 const h=document.createElement('h3');h.textContent='DOI: '+p.doi+' · '+p.doi_status;
 const dl=document.createElement('dl');
 const facts=[
  ['Tên bài',p.title],['Tạp chí',p.journal||'Chưa có thông tin'],
  ['Nhà xuất bản',p.publisher||'Chưa có thông tin'],
  ['Năm',p.year||'Chưa có thông tin'],['ISSN',p.issn.join(', ')||'Chưa có'],
  ['Số tác giả',p.author_count],['Số tham chiếu',p.reference_count],
  ['Trích dẫn',p.cited_by_count+' (không phải điểm uy tín)'],
  ['Abstract',p.abstract_available?'Có metadata':'Không thấy'],
  ['Phù hợp địa điểm',p.geographic_evidence],
  ['Chủ đề',p.topic_match?'Có dấu hiệu phù hợp':'Chưa có bằng chứng khớp'],
  ['Giống',p.cultivar_match?'Có nhắc hoặc chưa khai báo':'Chưa thấy trong metadata'],
  ['Cảnh báo',p.issues.join('; ')||'Không có cảnh báo từ metadata đã trả về; chưa kiểm tra toàn văn'],
  ['Kết luận','DOI hợp lệ chỉ xác nhận metadata đăng ký, không xác nhận nguồn đúng thực địa']
 ];
 for(const [label,value] of facts){
  const dt=document.createElement('dt'),dd=document.createElement('dd');
  dt.textContent=label;dd.textContent=String(value);dl.append(dt,dd);
 }
 const a=document.createElement('a');a.href=p.url;a.rel='noopener noreferrer';a.target='_blank';
 a.textContent='Mở DOI để đọc và kiểm chứng';
 panel.append(h,dl,a);target.append(panel);
}
async function analyzeDOI(){
 const raw=String(E('doiToAnalyze')?.value||'').trim()
  .replace(/^https?:\/\/(?:dx\.)?doi\.org\//i,'');
 const target=E('doiAnalysisResult');target.replaceChildren();
 if(!/^10\.\d{4,9}\/\S+$/i.test(raw)){
  const p=document.createElement('p');p.textContent='Nhập DOI 10.xxxx/... hoặc liên kết doi.org.';
  target.append(p);return;
 }
 const btn=E('analyzeDoiBtn');btn.disabled=true;
 try{
  const data=await api('https://api.crossref.org/works/'+encodeURIComponent(raw));
  const m=data.message;
  if(!m||String(m.DOI||'').toLowerCase()!==raw.toLowerCase())throw Error('Crossref không trả bản ghi đúng DOI');
  const info=selectPaper(m,cropInfo(),'MANUAL',String(E('evidenceTopic')?.value||'').trim());
  if(info)displayDOI(info);
  else{
   const p=document.createElement('p');p.textContent='Crossref nhận DOI nhưng bài không khớp tên cây hoặc loại công bố nghiên cứu của hồ sơ. Không tự ghi vào dữ liệu.';
   target.append(p);
  }
 }catch(err){
  const p=document.createElement('p');p.textContent='Lỗi kiểm tra DOI: '+err.message;
  target.append(p);
 }finally{btn.disabled=false}
}
E('analyzeDoiBtn')?.addEventListener('click',analyzeDOI);
function readLog(){
 try{const d=JSON.parse(F.elements.evidence_sources_json?.value||'[]');
 return Array.isArray(d)?d.filter(x=>x&&typeof x==='object').slice(-60):[]}catch{return []}
}
function writeLog(log){
 if(F.elements.evidence_sources_json)
  F.elements.evidence_sources_json.value=JSON.stringify(log.slice(-60));
}
function appendCitation(source){
 const field=F.elements.references;
 if(!field||!source?.doi)return false;
 if(field.value.toLowerCase().includes(source.doi.toLowerCase()))return false;
 const c='[NGUỒN THAM KHẢO TỰ ĐIỀN — CHƯA KIỂM TRA TOÀN VĂN — '+source.geographic_evidence+'] '+source.title+
 ' ('+(source.year||'không rõ năm')+'). '+source.journal+
 '. DOI: '+source.doi+' | '+source.url+
 ' | '+(source.tier==='VN'?'Nêu Việt Nam trong tiêu đề':'Quốc tế/không xác nhận địa điểm');
 field.value+=(field.value.trim()?'\n':'')+c;
 return true;
}
async function gbifSpecies(crop,log){
 const dest=F.elements.species;
 if(!dest||dest.value.trim()||!crop.candidate)return null;
 const query=crop.candidate;
 if(!/^[A-Z][a-z]+\s+[a-z][a-z-]+$/.test(query))return null;
 const result=await api('https://api.gbif.org/v1/species/match?kingdom=Plantae&name='+encodeURIComponent(query),10000);
 if(result.matchType!=='EXACT'||result.rank!=='SPECIES'||
   result.status!=='ACCEPTED'||result.kingdom!=='Plantae'||
   Number(result.confidence)<95||norm(result.canonicalName)!==norm(query)||
   !Number.isInteger(result.usageKey))return null;
 dest.value=result.canonicalName;
 const source={kind:'taxonomy',field:'species',value:dest.value,source:'GBIF',
  url:'https://www.gbif.org/species/'+result.usageKey,usageKey:result.usageKey,
  checked_at:new Date().toISOString(),
  limitation:'Exact species identity, not cultivar identity'};
 if(!log.some(x=>x.kind==='taxonomy'&&x.value===source.value))log.push(source);
 return source;
}
function panel(title,message,link,warning=false){
 const target=E('autoFillReport'),root=document.createElement('div');
 root.className='exp-autofill-row'+(warning?' exp-autofill-warning':'');
 const b=document.createElement('strong');b.textContent=title;
 const p=document.createElement('p');p.textContent=message;
 root.append(b,p);
 if(link){const a=document.createElement('a');a.href=link;a.target='_blank';
 a.rel='noopener noreferrer';a.textContent='Xem nguồn gốc';root.append(a)}
 target.append(root);
}
const previousFormObject=formObject;
formObject=function(){
 const data=previousFormObject();
 data.literature_sources=readLog();
 return data;
};
window.VECropSmartAutoFill=async function(){
 if(BTN.disabled)return;
 E('autoFillReport').replaceChildren();
 E('doiAnalysisResult')?.replaceChildren();
 const crop=cropInfo(),loc=locality();
 if(!crop.crop){panel('Thiếu tên cây','Hãy nhập đúng tên cây ở bước 2.',null,true);return}
 const topic=String(E('evidenceTopic')?.value||'').trim().slice(0,120);
 if(!topic){panel('Cần biến/chủ đề','Nhập cụ thể “soil EC”, “yield”, “soil pH” trước khi tìm.',null,true);return}
 BTN.disabled=true;const old=BTN.textContent;BTN.textContent='Đang tra cứu...';
 const warnings=[],plan=[];
 if(loc.province)plan.push('PROVINCE');
 if(loc.agroZone)plan.push('AGRO_ZONE');
 plan.push('VN','WORLD');
 let chosen=null,region='Không xác định',candidates=[];
 try{
  for(const tier of plan){
   E('evidenceStatus').textContent='Đang tìm mức '+tier+' cho cây '+crop.crop+'...';
   let papers=[];
   try{papers=await lookup(crop,topic,tier)}
   catch(e){warnings.push(tier+': '+e.message);continue}
   candidates=candidates.concat(papers).sort((a,b)=>b.search_rank-a.search_rank);
   const eligible=papers.filter(p=>p.auto_citation);
   if(eligible.length){chosen=eligible[0];region=tier;break}
  }
  if(chosen){
   // Re-fetch DOI individually to inspect update/retraction metadata, not just search snippet.
   try{
    const json=await api('https://api.crossref.org/works/'+encodeURIComponent(chosen.doi));
    const exact=json.message;
    if(!exact||String(exact.DOI).toLowerCase()!==chosen.doi.toLowerCase())throw Error('DOI phản hồi không trùng');
    const check=selectPaper(exact,crop,region,topic);
    if(!check||!check.auto_citation)throw Error('DOI chưa đủ điều kiện sau kiểm tra chi tiết');
    chosen=check;
   }catch(err){
    warnings.push('Không kiểm tra DOI đầy đủ: '+err.message);
    chosen=null;
   }
  }
  const log=readLog();
  if(chosen){
   const added=appendCitation(chosen);
   if(!log.some(p=>p.kind==='bibliography'&&p.doi===chosen.doi))log.push(chosen);
   panel(added?'Đã điền nguồn tham khảo':'Nguồn đã tồn tại',
    chosen.title+' · '+chosen.geographic_evidence+
    '. Chỉ sàng lọc metadata; chưa thể xác nhận thử nghiệm đã thực hiện đúng tại địa điểm nêu.',chosen.url);
   displayDOI(chosen);
  }else{
   panel('Chưa đủ bằng chứng để tự điền',
    'Chưa tìm thấy DOI khớp cây, chủ đề, giống (nếu có) và dấu hiệu khu vực. Không chọn bừa bài khác để lấp trống.',null,true);
   if(candidates.length)displayDOI(candidates[0]);
  }
  const seen=new Set(chosen?[chosen.doi]:[]);
  for(const p of candidates){
   if(seen.has(p.doi))continue;
   seen.add(p.doi);
   panel('Nguồn ứng viên, cần xem toàn văn',p.title+' · '+p.geographic_evidence+' · '+p.issues.join('; ').slice(0,260),p.url,true);
   if(seen.size>=5)break;
  }
  try{const tax=await gbifSpecies(crop,log);
   if(tax)panel('Đã đối chiếu tên khoa học bằng GBIF',tax.value+' (chỉ định danh loài).',tax.url)}
  catch(e){warnings.push('GBIF: '+e.message)}
  writeLog(log);saveDraft();
  panel('Không thay dữ liệu đo ngoài đồng',
   'Giữ nguyên các ô pH, EC, thời tiết thực đo, nghiệm thức, giống, năng suất và quan trắc; tài liệu tham khảo không thay các phép đo.',null,true);
  warnings.forEach(x=>panel('Cảnh báo kết nối/DOI',x,null,true));
  E('evidenceStatus').textContent='Đã tìm theo thứ tự: '+plan.join(' → ')+
   '. '+(chosen?'Đã ghi nguồn tham khảo '+region:'Chưa có nguồn đủ điều kiện')+
   '. Điểm phù hợp địa điểm chỉ dựa trên metadata, không thay thẩm định toàn văn.';
  showValidation(validate(formObject()));
 }finally{BTN.textContent=old;BTN.disabled=false}
};
window.VECropEvidenceCore={norm,cropMatch,selectPaper,locality,doiAlerts,matchingTopic};
})();