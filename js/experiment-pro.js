/* VECrop Experiment Pro: data stewardship / QC, never invent observations. */
(function(){
'use strict';
const pane=document.getElementById('experimentView');
const expForm=pane?.querySelector('#experimentForm');
const body=pane?.querySelector('#obsTable tbody');
if(!pane||!expForm||!body){console.warn('Experiment Pro skipped: form unavailable');return}

const STEPS=[
 'Nhận dạng','Cây & giống','Thiết kế','Đất & giá thể','Quản lý',
 'Môi trường','Quan trắc','Năng suất','Nguồn & QC','Tìm bằng chứng','Kiểm tra'
];
const get=id=>pane.querySelector('#'+id);
const originalFormObject=formObject;
formObject=function(){
 const d=originalFormObject();
 d.observations=(d.observations||[]).filter(r=>
  Object.values(r).some(v=>String(v??'').trim()!==''));
 d.data_class=d.dataset_role||'raw_observations';
 return d;
};

const originalValidate=validate;
validate=function(d){
 const result=originalValidate(d);
 const errors=[...result.errors], warnings=[...result.warnings];
 const add=(arr,message)=>{if(!arr.includes(message))arr.push(message)};
 const numeric=(key,label,lower,upper,strictLow=false)=>{
  const raw=d[key];if(raw===''||raw==null)return;
  const v=Number(raw);
  if(!Number.isFinite(v)||(lower!==null&&(strictLow?v<=lower:v<lower))||
   (upper!==null&&v>upper))
     add(errors,label+' không hợp lệ: cần số trong miền cho phép.');
 };
 numeric('treatment_count','Số nghiệm thức',0,null,true);
 numeric('replicate_count','Số lần lặp',0,null,true);
 numeric('plot_area','Diện tích ô',0,null,true);
 numeric('density_value','Mật độ',0,null,true);
 numeric('soil_ph','pH',0,14);
 numeric('soil_ec','EC',0,null);
 numeric('initial_water','Ẩm ban đầu',0,null);
 numeric('yield_value','Năng suất',0,null);
 numeric('marketable_fraction','Tỷ lệ thương phẩm (%)',0,100);
 numeric('dmf','Dry matter fraction',0,1,true);
 if(d.harvest_date&&d.start_date&&d.harvest_date<d.start_date)
  add(errors,'Ngày thu hoạch trước ngày bắt đầu.');
 if(d.harvest_date&&d.end_date&&d.harvest_date>d.end_date)
  add(warnings,'Ngày thu hoạch sau ngày kết thúc ghi trong hồ sơ.');
 if(d.yield_value!=='' && !d.harvest_date)
  add(warnings,'Có năng suất nhưng chưa nhập ngày thu hoạch.');
 if(!d.instrument_calibration)
  add(warnings,'Chưa có nhật ký hiệu chuẩn thiết bị.');
 if(!d.raw_data_source)
  add(warnings,'Chưa ghi liên kết hoặc tên tệp dữ liệu gốc.');
 if((d.dataset_role||'raw_observations')==='independent_validation'&&!d.reviewer)
  add(warnings,'Dữ liệu kiểm định độc lập cần người rà soát và dấu vết phân tách với tập hiệu chuẩn.');

 const seen=new Set(),variableUnits=new Map(),treatments=new Set(),reps=new Set();
 let rowsWithMethods=0;
 (d.observations||[]).forEach((r,i)=>{
  const n=i+1,key=[r.datetime,r.treatment,r.replicate,r.variable].map(x=>String(x||'').trim().toLowerCase()).join('|');
  if(r.datetime&&r.treatment&&r.replicate&&r.variable){
   if(seen.has(key))add(errors,'Quan trắc '+n+' bị trùng tổ hợp thời gian/nghiệm thức/lặp/biến.');
   seen.add(key);
  }
  if(r.treatment)treatments.add(String(r.treatment).trim());
  if(r.replicate)reps.add(String(r.replicate).trim());
  if(r.value!=='' && !Number.isFinite(Number(r.value)))
   add(errors,'Quan trắc '+n+': giá trị đo phải là số hữu hạn, hoặc bỏ trống và gắn cờ thiếu.');
  if(r.replicate && (!Number.isInteger(Number(r.replicate))||Number(r.replicate)<=0))
   add(errors,'Quan trắc '+n+': mã lặp phải là số nguyên dương.');
  if(r.datetime && !Number.isFinite(Date.parse(r.datetime)))
   add(errors,'Quan trắc '+n+': ngày/giờ không hợp lệ.');
  const day=String(r.datetime||'').slice(0,10);
  if(day&&d.start_date&&day<d.start_date)
   add(warnings,'Quan trắc '+n+' trước ngày bắt đầu; cần kiểm tra.');
  if(day&&d.end_date&&day>d.end_date)
   add(warnings,'Quan trắc '+n+' sau ngày kết thúc; cần kiểm tra.');
  const variable=String(r.variable||'').trim().toLowerCase();
  const unit=String(r.unit||'').trim().toLowerCase();
  if(variable&&unit){
   const old=variableUnits.get(variable);
   if(old&&old!==unit)add(warnings,'Biến '+variable+' có nhiều đơn vị ('+old+' và '+unit+'); chưa tự quy đổi.');
   else variableUnits.set(variable,unit);
  }
  const x=Number(r.value);
  if(r.value!=='' && Number.isFinite(x)){
   if(/^(ph|soil_ph|solution_ph)$/i.test(variable)&&(x<0||x>14))
     add(errors,'Quan trắc '+n+': pH ngoài khoảng vật lý 0–14.');
   if(/(^ec$|_ec$|conductivity|salinity)/i.test(variable)&&x<0)
     add(errors,'Quan trắc '+n+': EC âm.');
   if(/(fraction|percentage|percent)/i.test(variable)&&unit==='%'&&(x<0||x>100))
     add(errors,'Quan trắc '+n+': tỷ lệ phần trăm ngoài 0–100.');
  }
  if(String(r.method||'').trim())rowsWithMethods++;
 });
 if(treatments.size>Number(d.treatment_count||Infinity))
   add(errors,'Số mã nghiệm thức quan sát lớn hơn treatment_count khai báo.');
 if(reps.size>Number(d.replicate_count||Infinity))
   add(warnings,'Số mã lần lặp quan sát lớn hơn replicate_count khai báo.');
 if(!(d.observations||[]).length)
   add(warnings,'Chưa có quan trắc thực nghiệm; chưa thể đánh giá đầy đủ bộ dữ liệu đo.');
 else if(rowsWithMethods===0)
   add(warnings,'Không dòng quan trắc nào ghi phương pháp/thiết bị.');
 if(d.design==='RCBD'&&Number(d.replicate_count)<2)
   add(warnings,'RCBD chỉ có 1 lần lặp: kiểm tra lại thiết kế và khả năng ước lượng sai số.');
 if(d.design==='observational'&&d.randomized==='yes')
   add(warnings,'Nghiên cứu quan sát nhưng khai báo ngẫu nhiên hóa: cần làm rõ.');
 result.errors=errors; result.warnings=warnings;
 result.completeness_score=result.score;
 result.observation_count=(d.observations||[]).length;
 result.treatment_count_observed=treatments.size;
 result.replicate_count_observed=reps.size;
 result.valid=errors.length===0;
 result.readiness=errors.length?'incomplete':result.observation_count>0?'structure_checked_not_scientifically_validated':'metadata_only';
 return result;
};

const baseShow=showValidation;
showValidation=function(v){
 baseShow(v);
 const ready=get('readiness');
 if(ready)ready.textContent={
  incomplete:'Cần sửa lỗi',
  structure_checked_not_scientifically_validated:'Đã kiểm cấu trúc · Chưa kiểm định',
  metadata_only:'Chưa có quan trắc'
 }[v.readiness]||v.readiness||'Chưa kiểm tra';
 renderSummary(v);
};
function renderSummary(v){
 const c=get('expObsCount');if(c)c.textContent=String(v.observation_count??formObject().observations.length);
 const extra=get('expQcExtra');
 if(!extra)return;
 extra.replaceChildren();
 const panel=document.createElement('div');panel.className='exp-qc-item';
 const title=document.createElement('strong');title.textContent='Tổng quan kiểm toán dữ liệu';
 const p=document.createElement('p');p.textContent=
  'Quan trắc: '+(v.observation_count||0)+
  ' · Nghiệm thức có quan trắc: '+(v.treatment_count_observed||0)+
  ' · Mã lần lặp: '+(v.replicate_count_observed||0)+
  ' · Lỗi: '+v.errors.length+' · Cảnh báo: '+v.warnings.length;
 const note=document.createElement('p');note.className='exp-meta-warning';
 note.textContent='QC kiểm tra cú pháp và logic cơ bản, không chứng minh tính đúng đắn của phép đo, thí nghiệm hay mô hình.';
 panel.append(title,p,note);extra.append(panel);
}

const formCardSections=[...expForm.querySelectorAll(':scope > section.card')];
const stepper=get('expStepper');
let currentStep=1;
formCardSections.forEach((section,i)=>{section.dataset.step=String(i+1);section.id ||= 'expStep'+(i+1)});
if(stepper){
 stepper.replaceChildren();
 STEPS.forEach((label,i)=>{
  const b=document.createElement('button');
  b.type='button';b.textContent=(i+1)+'. '+label;b.dataset.step=String(i+1);
  b.setAttribute('aria-label','Mở bước '+(i+1)+': '+label);
  b.onclick=()=>openStep(i+1);
  stepper.append(b);
 });
}
const footer=document.createElement('div');footer.className='exp-footer-nav';
const prev=document.createElement('button');prev.type='button';prev.className='exp-secondary';prev.textContent='← Bước trước';
const next=document.createElement('button');next.type='button';next.textContent='Bước tiếp →';
const where=document.createElement('span');where.className='hint';
prev.onclick=()=>openStep(currentStep-1);next.onclick=()=>openStep(currentStep+1);
footer.append(prev,where,next);
expForm.after(footer);
function openStep(n){
 currentStep=Math.max(1,Math.min(formCardSections.length,Number(n)||1));
 formCardSections.forEach((x,i)=>x.classList.toggle('exp-hidden-step',i!==currentStep-1));
 stepper?.querySelectorAll('button').forEach(b=>{
  const active=Number(b.dataset.step)===currentStep;
  b.classList.toggle('active',active);
  b.setAttribute('aria-current',active?'step':'false');
 });
 prev.disabled=currentStep===1;next.disabled=currentStep===formCardSections.length;
 where.textContent='Bước '+currentStep+'/'+formCardSections.length;
}
window.VECropExperimentGoTo=function(id){
 const target=pane.querySelector('#'+id);
 if(!target)return false;
 const section=target.closest('section[data-step]');
 if(section){openStep(Number(section.dataset.step));return true}
 return false;
};

const provenanceCard=formCardSections[8];
if(provenanceCard){
 const extra=document.createElement('div');extra.className='grid';
 extra.innerHTML=String.raw`
  <label>Vai trò bộ dữ liệu
  <select name="dataset_role">
    <option value="raw_observations">Quan trắc gốc</option>
    <option value="calibration">Tập hiệu chuẩn</option>
    <option value="independent_validation">Tập kiểm định độc lập</option>
    <option value="literature_reference">Tài liệu tham khảo (không thay số đo)</option>
  </select></label>
  <label>Tên tệp hoặc đường dẫn dữ liệu gốc<input name="raw_data_source" placeholder="VD: data/logger-2026-01.csv"></label>`;
 provenanceCard.querySelector('.grid')?.append(...extra.children);
}

// Restore additional fields if an older draft was loaded before these controls existed.
try{
 const prevData=JSON.parse(localStorage.getItem('vecrop-experiment-draft-v1')||'{}');
 for(const key of ['dataset_role','raw_data_source']){
  if(prevData[key]&&expForm.elements[key])expForm.elements[key].value=prevData[key];
 }
}catch(_){}

function setSaveStatus(message){
 const n=get('expSaveStatus');if(n)n.textContent=message;
}
function stats(){
 const c=get('expObsCount');
 if(c)c.textContent=String(formObject().observations.length);
}
expForm.addEventListener('input',()=>{setSaveStatus('Bản nháp được lưu trên thiết bị');stats()});
expForm.addEventListener('change',()=>{setSaveStatus('Đã cập nhật bản nháp');stats()});
body.addEventListener('click',()=>setTimeout(stats,0));
get('addObsBtn')?.addEventListener('click',()=>setTimeout(stats,0));
get('newBtn')?.addEventListener('click',()=>setTimeout(()=>{
 openStep(1);stats();setSaveStatus('Đã tạo bộ nhập liệu mới');
},0));

function fail(message){alert(message)}
function selectFile(buttonId,fileId,handler){
 get(buttonId)?.addEventListener('click',()=>get(fileId)?.click());
 get(fileId)?.addEventListener('change',async e=>{
  const file=e.target.files?.[0];if(!file)return;
  try{if(file.size>3_000_000)throw new Error('Tệp quá 3 MB; hãy chia nhỏ bộ quan trắc.');
      await handler(await file.text());}
  catch(err){fail('Không nhập được: '+err.message)}
  finally{e.target.value=''}
 });
}
function replaceDataset(d){
 if(!d||typeof d!=='object'||Array.isArray(d))throw new Error('Cấu trúc JSON không hợp lệ');
 if(!Array.isArray(d.observations))throw new Error('JSON phải có mảng observations.');
 if(d.observations.length>10000)throw new Error('Quá 10.000 dòng, cần chia lô.');
 if(!confirm('Nhập bộ JSON sẽ thay thế toàn bộ bản nháp hiện tại. Tiếp tục?'))return;
 expForm.reset();body.replaceChildren();
 for(const [key,value] of Object.entries(d)){
  if(key==='observations'||typeof value==='object')continue;
  const el=expForm.elements[key];if(el)el.value=String(value??'');
 }
 d.observations.forEach(row=>addObservation(row));
 if(!d.observations.length)addObservation();
 saveDraft();openStep(1);stats();
 showValidation(validate(formObject()));
 setSaveStatus('Đã nhập JSON và lưu bản nháp');
}
selectFile('importJsonBtn','importJsonFile',text=>replaceDataset(JSON.parse(text)));

function parseCSV(text){
 const first=text.replace(/^\uFEFF/,'');
 const firstLine=first.split(/\r?\n/,1)[0];
 const delim=(firstLine.match(/;/g)||[]).length>(firstLine.match(/,/g)||[]).length?';':',';
 const out=[],row=[];let value='',quoted=false;
 for(let i=0;i<first.length;i++){
  const ch=first[i];
  if(quoted){
   if(ch==='"'&&first[i+1]==='"'){value+='"';i++}
   else if(ch==='"')quoted=false;
   else value+=ch;
  }else if(ch==='"')quoted=true;
  else if(ch===delim){row.push(value);value=''}
  else if(ch==='\n'){row.push(value.replace(/\r$/,''));out.push([...row]);row.length=0;value=''}
  else value+=ch;
 }
 if(quoted)throw new Error('CSV chưa đóng dấu ngoặc kép');
 if(value!==''||row.length){row.push(value);out.push([...row])}
 return out;
}
selectFile('importCsvBtn','importCsvFile',async text=>{
 const rows=parseCSV(text);if(!rows.length)throw new Error('CSV rỗng');
 const headers=rows.shift().map(s=>s.trim().toLowerCase().replace(/^\uFEFF/,''));
 const fields=['datetime','treatment','replicate','variable','value','unit','method','qc'];
 const missing=['datetime','treatment','replicate','variable','value','unit'].filter(k=>!headers.includes(k));
 if(missing.length)throw new Error('Thiếu cột: '+missing.join(', '));
 const mapped=rows.filter(r=>r.some(x=>x.trim())).map(r=>{
  const obj={};fields.forEach(k=>obj[k]=r[headers.indexOf(k)]??'');return obj;
 });
 if(mapped.length>10000)throw new Error('Tối đa 10.000 dòng CSV một lần');
 if(!confirm('Thêm '+mapped.length+' dòng CSV vào bộ hiện tại?'))return;
 const oldRows=[...body.querySelectorAll('tr')];
 if(oldRows.length===1&&[...oldRows[0].querySelectorAll('input')].every(x=>!x.value))
  oldRows[0].remove();
 mapped.forEach(r=>addObservation(r));
 saveDraft();openStep(7);stats();
 showValidation(validate(formObject()));
 setSaveStatus('Đã nhập '+mapped.length+' dòng CSV');
});
get('exportQcBtn')?.addEventListener('click',()=>{
 const d=formObject(),v=validate(d);showValidation(v);
 const report={
  report_type:'VECrop input-data quality audit (not scientific validation)',
  schema_version:'1.0',
  created_at:new Date().toISOString(),
  experiment_id:d.experiment_id,
  data_role:d.dataset_role||'raw_observations',
  observation_count:d.observations.length,
  completeness_score:v.score,
  status:v.readiness,
  errors:v.errors,
  warnings:v.warnings,
  note:'Do not infer missing measured values from literature. Provenance must be checked.'
 };
 download((d.experiment_id||'vecrop')+'-qc.json',
  JSON.stringify(report,null,2),'application/json');
 openStep(11);
});
get('validateBtn')?.addEventListener('click',()=>openStep(11));

stats();openStep(location.hash==='#evidenceSearch'?10:location.hash==='#validationPanel'?11:1);
setSaveStatus('Tự động lưu cục bộ · Nên xuất JSON định kỳ');
})();