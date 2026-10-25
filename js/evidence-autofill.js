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
 'lac':['Arachis hypogaea','peanut','groundnut'],'dau phong':['Arachis hypogaea','peanut','groundnut']
};
const norm=x=>String(x||'').normalize('NFD').replace(CLEAN,'').toLowerCase().replace(/đ/g,'d').replace(/[^a-z0-9]+/g,' ').trim();
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
function selectPaper(it,crop,tier){
 const doi=String(it?.DOI||'').trim();
 if(!/^10\.\d{4,9}\/[-._;()/:a-z0-9]+$/i.test(doi))return null;
 if(!['journal-article','proceedings-article'].includes(it.type))return null;
 if(!cropMatch(it,crop))return null;
 const title=String(it.title[0]||'').replace(/\s+/g,' ').trim().slice(0,480);
 const vietnam=VIETNAM.test(title);
 if(tier==='VN'&&!vietnam)return null;
 const pub=it.published||it['published-online']||it['published-print']||{};
 const year=pub['date-parts']?.[0]?.[0]||null;
 const journal=String(it['container-title']?.[0]||'').slice(0,240);
 let rank=10+(vietnam?5:0)+(it.type==='journal-article'?2:0);
 if(crop.candidate && norm(title).includes(norm(crop.candidate)))rank+=3;
 return {kind:'bibliography',source:'Crossref',doi,title,journal,year,
  url:'https://doi.org/'+encodeURIComponent(doi),tier,
  geographic_proof:vietnam?'Vietnam appears in publication title':'Study location not established',
  rank,checked_at:new Date().toISOString(),
  limitation:'Metadata only. Full text, methods, local applicability and numeric results not checked.'};
}
async function api(url,timeout=12000){
 const ctrl=new AbortController(),tid=setTimeout(()=>ctrl.abort(),timeout);
 try{const res=await fetch(url,{signal:ctrl.signal,headers:{Accept:'application/json'}});
 if(!res.ok)throw Error('HTTP '+res.status);return await res.json()}
 finally{clearTimeout(tid)}
}
async function lookup(crop,topic,tier){
 const query=[crop.primary,topic,tier==='VN'?'Vietnam':''].filter(Boolean).join(' ');
 const base='https://api.crossref.org/works?rows=12&select=DOI,title,type,container-title,published,published-online,published-print&query.bibliographic=';
 const data=await api(base+encodeURIComponent(query));
 return (data.message?.items||[]).map(x=>selectPaper(x,crop,tier))
  .filter(Boolean).sort((a,b)=>b.rank-a.rank).slice(0,3);
}
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
 const c='[NGUỒN THAM KHẢO TỰ ĐIỀN — CHƯA KIỂM TRA TOÀN VĂN] '+source.title+
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
 const crop=cropInfo();
 if(!crop.crop){
  panel('Cần tên cây','Nhập tên cây ở bước 2 trước khi tìm để tránh tài liệu sai loài.',null,true);
  return;
 }
 BTN.disabled=true;const old=BTN.textContent;BTN.textContent='Đang dò nguồn...';
 const issues=[];
 try{
  const topic=String(E('evidenceTopic').value||'').trim().slice(0,100)||'crop agronomic field trial';
  const log=readLog();
  let papers=[],tier='VN';
  E('evidenceStatus').textContent='1/3: Đang ưu tiên Việt Nam...';
  try{papers=await lookup(crop,topic,'VN')}catch(e){issues.push('Tìm Việt Nam: '+e.message)}
  if(!papers.length){
   tier='WORLD';
   E('evidenceStatus').textContent='2/3: Chưa có bài khớp tại Việt Nam; tìm quốc tế...';
   try{papers=await lookup(crop,topic,'WORLD')}catch(e){issues.push('Tìm quốc tế: '+e.message)}
  }
  if(papers.length){
   const first=papers[0],added=appendCitation(first);
   if(!log.some(x=>x.kind==='bibliography'&&x.doi===first.doi))log.push(first);
   panel(added?'Đã tự điền DOI vào ô Nguồn tham khảo':'Nguồn này đã có trong hồ sơ',
    (tier==='VN'?'Có Việt Nam trong tiêu đề. ':'Nguồn quốc tế. ')+first.title+
    ' ('+(first.year||'?')+'). Chưa thẩm định toàn văn.',first.url);
   for(const extra of papers.slice(1))
    panel('Tài liệu để kiểm tra thêm',extra.title+' · DOI: '+extra.doi,extra.url);
  }else panel('Không có bài đủ khớp','Đã thử Việt Nam rồi quốc tế. Không gán DOI không phù hợp.',null,true);
  E('evidenceStatus').textContent='3/3: Đang đối chiếu tên khoa học...';
  try{
   const tax=await gbifSpecies(crop,log);
   if(tax)panel('Đã điền tên khoa học (GBIF)',tax.value+' — khớp chính xác cấp loài, không xác thực giống.',tax.url);
  }catch(e){issues.push('GBIF: '+e.message)}
  writeLog(log);
  saveDraft();
  panel('Không tự điền số đo hiện trường',
    'Ô thiếu pH, EC, năng suất, lịch tưới/bón, nghiệm thức, giống và quan trắc phải nhập từ dữ liệu thực. Nguồn DOI chỉ dùng đối chiếu.',null,true);
  issues.forEach(e=>panel('Dịch vụ tra cứu có lỗi',e,null,true));
  E('evidenceStatus').textContent='Hoàn tất tìm '+(tier==='VN'?'Việt Nam':'Việt Nam → Thế giới')+
   '. Nguồn tham khảo và đối sánh GBIF được lưu nếu đạt điều kiện. Hãy kiểm tra bài gốc.';
  showValidation(validate(formObject()));
 }finally{BTN.textContent=old;BTN.disabled=false}
};
window.VECropEvidenceCore={norm,cropMatch,selectPaper};
})();