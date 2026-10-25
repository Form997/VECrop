/* VECrop single-page workspace router: load Experiment only on demand. */
(function(){
 'use strict';
 const view=document.getElementById('experimentView');
 const mount=document.getElementById('experimentMount');
 const learnBlocks=[...document.querySelectorAll('.learning-only')];
 const nav=[...document.querySelectorAll('.workspace-nav .ws-link')];
 let modulePromise=null, learnRendered=false;
 function script(src){
  return new Promise((resolve,reject)=>{
    const s=document.createElement('script');s.src=src;s.onload=resolve;s.onerror=()=>reject(new Error('Không tải được '+src));document.body.appendChild(s);
  });
 }
 async function loadExperiment(){
  if(modulePromise)return modulePromise;
  modulePromise=(async()=>{
    mount.textContent='Đang chuẩn bị phòng thực nghiệm...';
    const r=await fetch('partials/experiment.html',{cache:'no-store'});
    if(!r.ok)throw new Error('Không tải được biểu mẫu thực nghiệm');
    const markup=await r.text();
    const doc=new DOMParser().parseFromString(markup,'text/html');
    const node=doc.querySelector('main.exp-wrap');
    if(!node)throw new Error('Biểu mẫu thực nghiệm không hợp lệ');
    mount.replaceChildren(document.importNode(node,true));
    await script('js/experiment.js');
    await script('js/experiment-pro.js');
  })().catch(err=>{
    modulePromise=null;
    mount.replaceChildren();
    const p=document.createElement('p');p.textContent='Không mở được phòng thực nghiệm: '+err.message;
    const b=document.createElement('button');b.type='button';b.textContent='Tải lại';b.onclick=()=>loadExperiment();mount.append(p,b);
    throw err;
  });
  return modulePromise;
 }
 async function activate(){
  const params=new URLSearchParams(location.search);
  const isExperiment=params.get('view')==='experiment';
  document.body.dataset.vecropView=isExperiment?'experiment':'learn';
  view.hidden=!isExperiment;
  learnBlocks.forEach(el=>el.hidden=isExperiment);
  nav.forEach(a=>a.classList.toggle('active',isExperiment ? a.href.includes('view=experiment') && !a.hash : a.href.includes('view=learn') && !a.hash));
  if(isExperiment){
    document.title='VECrop — Phòng thực nghiệm';
    try{await loadExperiment();}catch(_){}
    if(location.hash){
      const id=decodeURIComponent(location.hash.slice(1));
      const el=document.getElementById(id);
      if(window.VECropExperimentGoTo)window.VECropExperimentGoTo(id);
      if(el)el.scrollIntoView({behavior:'smooth',block:'start'});
    }
  }else{
    if(!learnRendered && typeof window.render==='function'){
      learnRendered=true;await window.render();
    }
    if(location.hash){
      const el=document.getElementById(decodeURIComponent(location.hash.slice(1)));
      if(el)el.scrollIntoView({block:'start'});
    }
  }
 }
 document.addEventListener('click',e=>{
   const anchor=e.target.closest('a[href]');
   if(!anchor)return;
   const url=new URL(anchor.href,location.href);
   if(url.origin!==location.origin||!url.pathname.endsWith('/index.html'))return;
   if(!url.searchParams.has('view'))return;
   e.preventDefault();
   history.pushState(null,'',url);
   activate();
 });
 window.addEventListener('popstate',activate);
 window.VECropActivateView=activate;
 activate();
})();