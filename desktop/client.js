/* Visible only inside Windows Desktop bundle, not public GitHub Pages. */
(function(){
'use strict';
const ROOT='/__vecrop_status';
let token='',busy=false,latest=null;
const root=document.createElement('aside');
root.setAttribute('aria-label','Cập nhật VECrop Desktop');
root.id='vecrop-desktop-update';
root.style.cssText='position:fixed;right:14px;bottom:14px;z-index:99999;width:min(355px,calc(100vw - 28px));font:13px/1.45 system-ui,Arial,sans-serif;color:#18372b;background:#f8fffb;border:1px solid #a8d2c0;border-radius:14px;box-shadow:0 12px 30px #153c3350;padding:12px;box-sizing:border-box';
root.innerHTML='<div style="display:flex;justify-content:space-between;align-items:center;gap:6px"><strong>🔄 Cập nhật VECrop Desktop</strong><button type="button" id="vecrop-update-minimize" style="padding:2px 8px">−</button></div>'+
 '<div id="vecrop-update-body" style="margin-top:8px"><p id="vecrop-update-status" style="margin:4px 0">Đang kiểm tra…</p>'+
 '<div style="display:flex;gap:6px;flex-wrap:wrap">'+
 '<button id="vecrop-update-sync" type="button">Đồng bộ học liệu</button>'+
 '<button id="vecrop-update-check" type="button">Kiểm tra EXE</button>'+
 '<button id="vecrop-update-download" type="button" style="display:none">Tải bản mới</button>'+
 '</div><p style="margin:8px 0 0;font-size:11px;color:#526e5e">Học liệu cập nhật không ghi đè bản nháp. EXE mới cần tải và thay sau khi thoát ứng dụng.</p></div>';
function el(id){return root.querySelector('#'+id)}
function msg(text){el('vecrop-update-status').textContent=text}
async function status(){
 const r=await fetch(ROOT,{cache:'no-store'});
 if(!r.ok)throw new Error('Máy chủ cập nhật không sẵn sàng');
 const d=await r.json();token=d.token;latest=d;
 const build=Number(d.current_run_number||0);
 let label=(d.staging?'🧪 STAGING · DATA riêng; ':'')+'Bản cài: '+(build?'#'+build:'đóng gói thủ công')+'. ';
 if(d.release_state==='available')label+='Có EXE mới ('+d.release_tag+'). ';
 else if(d.release_state==='current')label+='EXE đang là bản mới nhất. ';
 else if(d.release_state==='offline')label+='Chưa kiểm tra được bản EXE trên Internet. ';
 else label+='Đang kiểm tra phiên bản. ';
 if(d.mode==='syncing')label+='Đang đồng bộ học liệu…';
 if(d.mode==='ready')label+='Đồng bộ xong; tải lại trang để xem nội dung mới.';
 if(d.mode==='failed')label+='Lỗi đồng bộ: '+d.error;
 if(d.mode==='idle')label+=d.active_content_revision?'Đã có học liệu đồng bộ.':'Đang dùng học liệu đóng gói.';
 msg(label);
 el('vecrop-update-download').style.display=d.release_state==='available'?'inline-block':'none';
 el('vecrop-update-sync').disabled=d.mode==='syncing'||Boolean(d.staging);
 if(d.staging)el('vecrop-update-sync').title='Staging không đồng bộ học liệu main';
 if(d.mode==='ready'&&!el('vecrop-update-reload')){
  const b=document.createElement('button');b.id='vecrop-update-reload';b.type='button';
  b.textContent='Tải lại trang';b.style.marginTop='8px';b.onclick=()=>location.reload();
  el('vecrop-update-body').append(b);
 }
}
async function action(route){
 if(busy)return;
 busy=true;msg('Đang xử lý…');
 try{
  const r=await fetch(route,{method:'POST',headers:{'X-VECrop-Token':token,'Content-Type':'application/json'},body:''});
  if(!r.ok)throw Error('HTTP '+r.status);
  await status();
 }catch(e){msg('Không thực hiện được: '+e.message)}
 finally{busy=false}
}
el('vecrop-update-sync').onclick=()=>action('/__vecrop_sync');
el('vecrop-update-check').onclick=()=>action('/__vecrop_check');
el('vecrop-update-download').onclick=()=>action('/__vecrop_open_release');
el('vecrop-update-minimize').onclick=()=>{
 const b=el('vecrop-update-body');
 const closed=b.hidden=!b.hidden;
 el('vecrop-update-minimize').textContent=closed?'+':'−';
};
document.addEventListener('DOMContentLoaded',()=>document.body.append(root));
status().catch(e=>msg(e.message));
setInterval(()=>{if(!document.hidden)status().catch(()=>{})},5000);
})();