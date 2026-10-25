/* VECrop DATA vault interface, injected only into Windows Desktop bundle.
   Data is stored in local SQLite, never automatically sent to GitHub. */
(function(){
'use strict';
const mount=document.getElementById('experimentMount');
if(!mount)return;
let activeId='',activeRevision=0,saving=false,dirty=false,timer=0,token='',setupDone=false;
let vault=null,notice=null,records=null,stats=null;
const URLS={state:'/__vecrop_status',list:'/__vecrop_data',
 history:'/__vecrop_data_history',save:'/__vecrop_data_save',
 backup:'/__vecrop_data_backup'};
const tag=(name,cls,text)=>{
 const n=document.createElement(name);
 if(cls)n.className=cls;
 if(text!==undefined)n.textContent=text;
 return n;
};
function status(message,fail=false){
 if(!notice)return;notice.textContent=message;
 notice.dataset.level=fail?'error':'normal';
}
async function auth(){
 const r=await fetch(URLS.state,{cache:'no-store'});
 if(!r.ok)throw Error('DATA server unavailable');
 const body=await r.json();
 token=body.token;
 if(stats && body.data){
  stats.textContent='SQLite · '+body.data.experiments+' thí nghiệm · '+
     body.data.observations+' quan trắc · '+body.data.sources+' nguồn';
 }
}
async function call(path,body){
 if(!token)await auth();
 const r=await fetch(path,{method:'POST',
  headers:{'Content-Type':'application/json','X-VECrop-Token':token},
  body:body?JSON.stringify(body):''});
 if(!r.ok){
  let message='HTTP '+r.status;
  try{message=(await r.json()).error||message}catch(_){}
  throw Error(message);
 }
 return r;
}
async function api(path){
 const r=await fetch(path,{cache:'no-store'});
 if(!r.ok){
  let msg='HTTP '+r.status;
  try{msg=(await r.json()).error||msg}catch(_){}
  throw Error(msg);
 }
 return await r.json();
}
function download(name,data,mime){
 const blob=data instanceof Blob?data:new Blob([data],{type:mime});
 const link=document.createElement('a'),src=URL.createObjectURL(blob);
 link.href=src;link.download=name;document.body.append(link);link.click();link.remove();
 setTimeout(()=>URL.revokeObjectURL(src),1000);
}
async function save(silent=false){
 if(saving){dirty=true;return}
 if(typeof formObject!=='function')return;
 const payload=formObject();
 const id=String(payload.experiment_id||'').trim();
 if(!id){
  if(!silent)status('Hãy nhập Mã thí nghiệm ở Bước 1 trước khi lưu vào DATA.',true);
  return;
 }
 if(activeId && id!==activeId){
  status('Bạn đã đổi Mã thí nghiệm. Dữ liệu mới phải được lưu thành bộ riêng; hãy chọn Lưu vào DATA để tạo.',true);
  if(silent)return;
  activeId='';activeRevision=0;
 }
 if(!activeId && silent)return; // Only auto-save after explicit initial vault save.
 saving=true;dirty=false;
 if(!silent)status('Đang ghi dữ liệu vào SQLite…');
 try{
  const response=await call(URLS.save,{payload,expected_revision:activeRevision});
  const info=await response.json();
  activeId=info.id;activeRevision=info.revision;
  status('✓ Đã lưu '+info.id+' · phiên bản '+info.revision+
         (info.unchanged?' (không thay đổi)':' · bản gốc được lưu trong SQLite'));
  await auth();
 }catch(err){
  // Stop silent saves on any error. 409 means another version exists.
  activeId='';activeRevision=0;
  dirty=false;
  status('Không thể ghi DATA: '+err.message+' Dữ liệu bản nháp vẫn còn trên trang; hãy xuất JSON để sao lưu.',true);
 }finally{
  saving=false;
  if(dirty && activeId)schedule();
 }
}
function schedule(){
 if(timer)clearTimeout(timer);
 if(!activeId||saving)return;
 timer=setTimeout(()=>save(true),6500);
}
async function openDataset(identifier){
 try{
  const result=await api(URLS.list+'?id='+encodeURIComponent(identifier));
  if(typeof window.VECropExperimentReplaceDataset!=='function'){
   throw Error('Phòng thực nghiệm chưa tải xong');
  }
  const ok=window.VECropExperimentReplaceDataset(result.payload,'vault');
  if(ok!==true)return;
  activeId=result.id;activeRevision=result.revision;
  status('Đã mở DATA '+result.id+' · bản lưu #'+result.revision+
         '. Khi thay đổi, ứng dụng sẽ tự ghi lại sau vài giây.');
  if(records)records.hidden=true;
 }catch(err){status('Không mở được: '+err.message,true)}
}
function row(parent,label,text){
 const c=tag('div','vecrop-data-row');
 const l=tag('strong','',label);
 const value=tag('span','',text);
 c.append(l,value);parent.append(c);
}
async function history(identifier,slot){
 slot.replaceChildren(tag('p','', 'Đang tải lịch sử…'));
 try{
  const history=await api(URLS.history+'?id='+encodeURIComponent(identifier));
  slot.replaceChildren();
  const entries=history.items||[];
  for(const item of entries){
   const line=tag('div','vecrop-data-history-item');
   line.append(tag('span','','#'+item.revision+' · '+item.changed_at));
   const b=tag('button','','Xuất JSON');
   b.type='button';
   b.onclick=async()=>{
    try{
     const data=await api(URLS.list+'?id='+encodeURIComponent(identifier)+
       '&revision='+item.revision);
     download(identifier+'-revision-'+item.revision+'.json',
       JSON.stringify(data.payload,null,2),'application/json');
    }catch(err){status(err.message,true)}
   };
   line.append(b);slot.append(line);
  }
 }catch(err){slot.replaceChildren(tag('p','','Không tải được lịch sử: '+err.message))}
}
async function list(){
 if(!records)return;
 records.hidden=false;
 records.replaceChildren(tag('p','','Đang đọc DATA…'));
 try{
  const data=await api(URLS.list);
  records.replaceChildren();
  const items=data.items||[];
  if(!items.length){
   records.append(tag('p','','Chưa có thí nghiệm trong SQLite. Nhập hồ sơ rồi nhấn Lưu vào DATA.'));
   return;
  }
  for(const item of items){
   const card=tag('div','vecrop-data-record');
   const title=tag('strong','',item.id+' · '+(item.title||'Chưa có tên'));
   const sub=tag('p','',[(item.crop_name||'Chưa rõ cây'),(item.province||'Chưa có tỉnh'),
      item.observations+' quan trắc','phiên bản #'+item.revision,
      'Sửa '+item.updated_at].join(' · '));
   const buttons=tag('div','vecrop-data-actions');
   const open=tag('button','','Mở hồ sơ');open.type='button';
   open.onclick=()=>openDataset(item.id);
   const historyButton=tag('button','','Lịch sử');historyButton.type='button';
   const historySlot=tag('div','vecrop-data-history');historySlot.hidden=true;
   historyButton.onclick=()=>{
    historySlot.hidden=!historySlot.hidden;
    if(!historySlot.hidden)history(item.id,historySlot);
   };
   buttons.append(open,historyButton);
   card.append(title,sub,buttons,historySlot);
   records.append(card);
  }
 }catch(err){records.replaceChildren(tag('p','','Không mở được DATA: '+err.message))}
}
async function backup(){
 status('Đang tạo bản sao SQLite nhất quán…');
 try{
  const response=await call(URLS.backup,null);
  const header=response.headers.get('Content-Disposition')||'';
  const filename=header.match(/filename="([^"]+)"/)?.[1]||'VECrop-DATA-backup.sqlite3';
  const blob=await response.blob();
  download(filename,blob,'application/vnd.sqlite3');
  status('✓ Đã sao lưu file '+filename+'. Hãy cất ở ổ đĩa/USB khác với nơi cài phần mềm.');
 }catch(err){status('Không sao lưu được: '+err.message,true)}
}
function buildUI(){
 if(setupDone)return;
 const form=mount.querySelector('#experimentForm');
 const toolbar=mount.querySelector('.exp-toolbar');
 if(!form||!toolbar||typeof formObject!=='function'||typeof window.VECropExperimentReplaceDataset!=='function')return;
 setupDone=true;
 vault=tag('section','vecrop-data-vault');
 vault.setAttribute('aria-label','Kho dữ liệu thực nghiệm SQLite');
 const top=tag('div','vecrop-data-top');
 top.append(tag('h2','','🗄️ DATA — Kho dữ liệu thực nghiệm trên máy'));
 stats=tag('div','vecrop-data-stats','Đang kết nối SQLite…');
 top.append(stats);
 const desc=tag('p','','Lưu thí nghiệm theo mã riêng, ghi lịch sử phiên bản và quan trắc. '+
  'DATA nằm ngoài file .exe. Không tự đồng bộ dữ liệu riêng tư lên GitHub.');
 const actions=tag('div','vecrop-data-actions');
 const btnSave=tag('button','','💾 Lưu vào DATA');
 const btnList=tag('button','','📂 Danh sách thí nghiệm');
 const btnBackup=tag('button','','🛡️ Sao lưu SQLite');
 btnSave.type=btnList.type=btnBackup.type='button';
 btnSave.onclick=()=>save(false);
 btnList.onclick=()=>list();
 btnBackup.onclick=()=>backup();
 actions.append(btnSave,btnList,btnBackup);
 notice=tag('p','vecrop-data-notice','Bản nháp cũ trên trình duyệt vẫn được giữ. Nhấn Lưu vào DATA để tạo bản lưu đầu tiên.');
 notice.setAttribute('aria-live','polite');
 records=tag('div','vecrop-data-list');records.hidden=true;
 vault.append(top,desc,actions,notice,records);
 toolbar.after(vault);
 form.addEventListener('input',()=>{
  const id=String(form.elements.experiment_id?.value||'').trim();
  if(id!==activeId)return;
  dirty=true;schedule();
 });
 form.addEventListener('change',()=>{
  const id=String(form.elements.experiment_id?.value||'').trim();
  if(id!==activeId)return;
  dirty=true;schedule();
 });
 document.addEventListener('vecrop:dataset-replaced',event=>{
  if(event.detail?.source==='vault')return;
  activeId='';activeRevision=0;dirty=false;
  if(timer)clearTimeout(timer);
  status('Đã nhập bản nháp mới. Nhấn Lưu vào DATA để tạo bản ghi riêng.');
 });
 const newButton=mount.querySelector('#newBtn');
 if(newButton)newButton.addEventListener('click',()=>{
  setTimeout(()=>{
   if(!String(form.elements.experiment_id?.value||'').trim()){
    activeId='';activeRevision=0;dirty=false;
    status('Đã tạo bản nháp mới. Hãy đặt Mã thí nghiệm và Lưu vào DATA.');
   }
  },0);
 });
 auth().catch(err=>status('SQLite chưa kết nối: '+err.message,true));
}
buildUI();
const observer=new MutationObserver(()=>{
 if(setupDone){observer.disconnect();return}
 buildUI();
});
observer.observe(mount,{childList:true});
})();
