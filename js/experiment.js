const form=document.getElementById('experimentForm');
const tbody=document.querySelector('#obsTable tbody');
const STORE='vecrop-experiment-draft-v1';

const REQUIRED=[
 ['experiment_id','Mã thí nghiệm'],['title','Tên thí nghiệm'],['start_date','Ngày bắt đầu'],
 ['site','Địa điểm'],['production_system','Hệ thống sản xuất'],['crop_name','Tên cây'],
 ['cultivar','Giống/cultivar'],['design','Thiết kế thí nghiệm'],['treatment_count','Số nghiệm thức'],
 ['replicate_count','Số lần lặp'],['treatments','Mô tả nghiệm thức'],
 ['soil_or_substrate','Đất/giá thể'],['weather_source','Nguồn thời tiết']
];

function addObservation(row={}){
 const tr=document.createElement('tr');
 const defs=[
  ['datetime','datetime-local'],['treatment','text'],['replicate','number'],['variable','text'],
  ['value','number'],['unit','text'],['method','text'],['qc','text']
 ];
 defs.forEach(([name,type])=>{
   const td=document.createElement('td'), inp=document.createElement('input');
   inp.type=type; inp.dataset.field=name; if(type==='number') inp.step='any';
   if(row[name]!==undefined) inp.value=row[name];
   td.appendChild(inp); tr.appendChild(td);
 });
 const td=document.createElement('td'), b=document.createElement('button');
 b.type='button'; b.className='delete-row'; b.textContent='×';
 b.onclick=()=>{tr.remove();saveDraft()}; td.appendChild(b); tr.appendChild(td);
 tbody.appendChild(tr);
}

function formObject(){
 const fd=new FormData(form), data={};
 for(const [k,v] of fd.entries()) data[k]=v;
 data.observations=[...tbody.querySelectorAll('tr')].map(tr=>{
   const r={}; tr.querySelectorAll('input').forEach(i=>r[i.dataset.field]=i.value); return r;
 });
 data.schema_version='1.0';
 data.generated_by='VECrop Practical Experiment Workspace';
 data.generated_at=new Date().toISOString();
 return data;
}

function validate(data){
 const errors=[],warnings=[];
 for(const [k,label] of REQUIRED) if(!String(data[k]||'').trim()) errors.push('Thiếu: '+label+'.');

 const tc=Number(data.treatment_count), rc=Number(data.replicate_count);
 if(tc && tc<1) errors.push('Số nghiệm thức phải ≥ 1.');
 if(rc && rc<1) errors.push('Số lần lặp phải ≥ 1.');
 if(data.end_date && data.start_date && data.end_date<data.start_date) errors.push('Ngày kết thúc trước ngày bắt đầu.');

 if(data.soil_ec && !data.soil_ec_unit) warnings.push('Có EC nhưng chưa ghi đơn vị EC.');
 if(data.initial_water && !data.initial_water_unit) warnings.push('Có ẩm ban đầu nhưng chưa ghi đơn vị.');
 if(data.density_value && !data.density_unit) warnings.push('Có mật độ nhưng chưa ghi đơn vị.');
 if(data.plot_area && !data.plot_area_unit) warnings.push('Có diện tích ô nhưng chưa ghi đơn vị.');
 if(data.yield_value && !data.yield_unit) warnings.push('Có năng suất nhưng chưa ghi đơn vị.');
 if(data.yield_value && !data.mass_basis) warnings.push('Nên ghi rõ năng suất theo fresh mass hay dry mass.');
 if(data.mass_basis==='fresh' && data.dmf==='' ) warnings.push('Nếu cần quy đổi fresh↔dry, nên đo dry matter fraction.');

 const obs=data.observations||[];
 if(!obs.length) warnings.push('Chưa có dòng quan trắc.');
 obs.forEach((r,i)=>{
   const miss=['datetime','treatment','replicate','variable','value','unit'].filter(k=>!String(r[k]||'').trim());
   if(miss.length) errors.push('Quan trắc '+(i+1)+' thiếu: '+miss.join(', ')+'.');
 });
 if(!data.protocol) warnings.push('Chưa ghi protocol/phương pháp chuẩn.');
 if(!data.instruments) warnings.push('Chưa ghi thiết bị đo.');
 if(!data.references) warnings.push('Chưa ghi nguồn/tài liệu tham chiếu.');
 if(!data.environment_qc) warnings.push('Chưa mô tả QC dữ liệu môi trường.');

 const total=REQUIRED.length+6;
 let completed=REQUIRED.filter(([k])=>String(data[k]||'').trim()).length;
 completed += ['protocol','instruments','references','weather_timestep','yield_unit','mass_basis'].filter(k=>String(data[k]||'').trim()).length;
 const score=Math.max(0,Math.min(100,Math.round(100*completed/total)));
 let readiness='incomplete';
 if(errors.length===0 && score>=85) readiness='ready_for_validation';
 else if(errors.length===0 && score>=65) readiness='ready_for_review';
 return {score,readiness,errors,warnings};
}

function showValidation(v){
 document.getElementById('score').textContent=v.score+'%';
 document.getElementById('readiness').textContent=v.readiness;
 document.getElementById('warningCount').textContent=String(v.errors.length+v.warnings.length);
 const box=document.getElementById('validation');
 let h='';
 if(v.errors.length) h+='<div class="bad"><strong>Lỗi bắt buộc</strong><ul>'+v.errors.map(x=>'<li>'+x+'</li>').join('')+'</ul></div>';
 if(v.warnings.length) h+='<div class="warn"><strong>Cần bổ sung/kiểm tra</strong><ul>'+v.warnings.map(x=>'<li>'+x+'</li>').join('')+'</ul></div>';
 if(!v.errors.length) h+='<div class="ok"><strong>Không còn lỗi bắt buộc.</strong> Trạng thái: '+v.readiness+'.</div>';
 box.innerHTML=h;
}

function saveDraft(){localStorage.setItem(STORE,JSON.stringify(formObject()));}
function loadDraft(){
 const raw=localStorage.getItem(STORE); if(!raw){addObservation();return}
 try{
  const d=JSON.parse(raw);
  Object.entries(d).forEach(([k,v])=>{const el=form.elements[k];if(el&&typeof v!=='object')el.value=v});
  (d.observations||[]).forEach(addObservation);
  if(!(d.observations||[]).length)addObservation();
 }catch{addObservation()}
}
function download(name,text,type){
 const a=document.createElement('a');a.href=URL.createObjectURL(new Blob([text],{type}));a.download=name;a.click();setTimeout(()=>URL.revokeObjectURL(a.href),1000)
}
function csvEscape(v){v=String(v??'');return /[",\n]/.test(v)?'"'+v.replace(/"/g,'""')+'"':v}
document.getElementById('addObsBtn').onclick=()=>{addObservation();saveDraft()};
document.getElementById('validateBtn').onclick=()=>{const d=formObject();showValidation(validate(d));saveDraft()};
document.getElementById('newBtn').onclick=()=>{if(confirm('Xóa bản nháp hiện tại và tạo bộ mới?')){localStorage.removeItem(STORE);form.reset();tbody.innerHTML='';addObservation();showValidation({score:0,readiness:'Chưa kiểm tra',errors:[],warnings:[]})}};
document.getElementById('exportJsonBtn').onclick=()=>{const d=formObject(),v=validate(d);showValidation(v);if(v.errors.length)return;download((d.experiment_id||'vecrop-experiment')+'.json',JSON.stringify(d,null,2),'application/json')};
document.getElementById('exportCsvBtn').onclick=()=>{const d=formObject();const cols=['datetime','treatment','replicate','variable','value','unit','method','qc'];const rows=[cols.join(','),...(d.observations||[]).map(r=>cols.map(k=>csvEscape(r[k])).join(','))];download((d.experiment_id||'vecrop')+'-observations.csv',rows.join('\n'),'text/csv')};
form.addEventListener('input',saveDraft);form.addEventListener('change',saveDraft);
loadDraft();

function currentEvidenceQuery(topicOverride=''){
  const d=formObject();
  const topic=(topicOverride||document.getElementById('evidenceTopic').value||'').trim();
  const context=(document.getElementById('evidenceContext').value||'').trim();
  const parts=[
    d.crop_name,d.species,d.cultivar,topic,context,d.site,d.production_system
  ].filter(Boolean);
  return parts.join(' ').replace(/\s+/g,' ').trim();
}

function missingTopicsFromValidation(data,v){
  const topics=[];
  const map={
    'soil_ec_unit_missing':'soil EC unit measurement method',
    'yield_unit_missing':'crop yield unit fresh dry mass methodology',
    'protocol_missing':'measurement protocol crop experiment',
    'instruments_missing':'measurement instrument crop physiology'
  };
  v.warnings.forEach(w=>{
    for(const [k,q] of Object.entries(map)) if(w.includes(k)||w.toLowerCase().includes(k.replaceAll('_',' '))) topics.push(q);
  });
  v.errors.forEach(e=>{
    if(e.includes('weather_source')) topics.push('weather data source crop experiment');
    if(e.includes('soil_or_substrate')) topics.push('soil substrate characterization crop experiment');
    if(e.includes('design')) topics.push('experimental design crop field trial RCBD replication');
    if(e.includes('cultivar')) topics.push('cultivar agronomic characteristics');
  });
  if(!topics.length){
    if(!data.soil_ph) topics.push('soil pH');
    if(!data.soil_ec) topics.push('soil electrical conductivity EC');
    if(!data.weather_timestep) topics.push('weather timestep crop model');
    if(!data.yield_value) topics.push('crop yield');
  }
  return [...new Set(topics)].slice(0,6);
}

async function searchCrossref(query){
  const box=document.getElementById('evidenceResults');
  const status=document.getElementById('evidenceStatus');
  if(!query){status.textContent='Chưa có từ khóa để tìm.';return}
  status.textContent='Đang tìm nguồn học thuật: '+query;
  box.innerHTML='';
  try{
    const url='https://api.crossref.org/works?rows=6&select=DOI,title,author,published-print,published-online,container-title,URL,type,is-referenced-by-count&query.bibliographic='+encodeURIComponent(query);
    const r=await fetch(url,{headers:{'Accept':'application/json'}});
    if(!r.ok) throw new Error('Crossref HTTP '+r.status);
    const j=await r.json();
    const items=j?.message?.items||[];
    if(!items.length){status.textContent='Không tìm thấy kết quả phù hợp.';return}
    status.textContent='Tìm thấy '+items.length+' kết quả. Hãy kiểm tra bối cảnh trước khi dùng.';
    box.innerHTML=items.map((it,idx)=>{
      const title=(it.title&&it.title[0])||'Không có tiêu đề';
      const journal=(it['container-title']&&it['container-title'][0])||'';
      const authors=(it.author||[]).slice(0,4).map(a=>[a.given,a.family].filter(Boolean).join(' ')).join(', ');
      const parts=(it['published-print']?.['date-parts']||it['published-online']?.['date-parts']||[])[0]||[];
      const year=parts[0]||'';
      const doi=it.DOI||'';
      const href=doi?'https://doi.org/'+encodeURIComponent(doi):it.URL||'#';
      const cited=Number(it['is-referenced-by-count']||0);
      return '<article class="evidence-item">'+
        '<h3>'+(idx+1)+'. '+escapeEvidence(title)+' <span class="score">cited '+cited+'</span></h3>'+
        '<div class="evidence-meta">'+escapeEvidence([authors,journal,year].filter(Boolean).join(' • '))+'</div>'+
        '<div><a href="'+href+'" target="_blank" rel="noopener">Mở nguồn / DOI</a>'+
        (doi?' &nbsp; <button type="button" class="copy-cite" data-doi="'+escapeEvidence(doi)+'" data-title="'+escapeEvidence(title)+'">Ghi provenance</button>':'')+
        '</div></article>';
    }).join('');
    box.querySelectorAll('.copy-cite').forEach(btn=>btn.addEventListener('click',()=>{
      const ref=form.elements.references;
      const line='DOI: '+btn.dataset.doi+' — '+btn.dataset.title;
      ref.value=(ref.value?ref.value.trim()+'\n':'')+line;
      saveDraft();
      btn.textContent='Đã ghi provenance';
      btn.disabled=true;
    }));
  }catch(err){
    console.error(err);
    status.textContent='Không truy cập được Crossref. Có thể dùng Google Scholar hoặc AGRIS bên cạnh.';
  }
}

function escapeEvidence(s=''){
  return String(s).replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;').replace(/"/g,'&quot;').replace(/'/g,'&#039;');
}

document.getElementById('searchEvidenceBtn').addEventListener('click',()=>searchCrossref(currentEvidenceQuery()));
document.getElementById('searchMissingBtn').addEventListener('click',async()=>{
  const d=formObject(),v=validate(d);showValidation(v);
  const topics=missingTopicsFromValidation(d,v);
  if(!topics.length){document.getElementById('evidenceStatus').textContent='Không phát hiện trường thiếu rõ ràng để tạo truy vấn.';return}
  document.getElementById('evidenceTopic').value=topics[0];
  document.getElementById('evidenceContext').value=[d.site,d.production_system].filter(Boolean).join(' ');
  await searchCrossref(currentEvidenceQuery(topics[0]));
});
document.getElementById('openScholarBtn').addEventListener('click',()=>{
  const q=currentEvidenceQuery(); if(q) window.open('https://scholar.google.com/scholar?q='+encodeURIComponent(q),'_blank','noopener');
});
document.getElementById('openAgrisBtn').addEventListener('click',()=>{
  const q=currentEvidenceQuery(); if(q) window.open('https://agris.fao.org/search/en?query='+encodeURIComponent(q),'_blank','noopener');
});
