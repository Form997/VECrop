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