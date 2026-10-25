/* Lightweight spatial UI: CSS 3D + pointer events only; no GPU frameworks. */
(function(){
'use strict';
const container=document.getElementById('experimentView');
const toggle=container?.querySelector('#exp3dToggle');
const hero=container?.querySelector('#exp3dHero');
const scene=container?.querySelector('#exp3dScene');
if(!container||!toggle||!hero||!scene)return;

const reduced=window.matchMedia('(prefers-reduced-motion: reduce)');
const fine=window.matchMedia('(hover: hover) and (pointer: fine)');
const key='vecrop-experiment-3d';
let userPreference='on';
try{userPreference=localStorage.getItem(key)||'on'}catch(_){}
let raf=0;
let running=false;

function enabled(){
 return userPreference==='on'&&!reduced.matches&&fine.matches&&!document.hidden;
}
function reset(){
 if(raf)cancelAnimationFrame(raf);
 raf=0;
 scene.style.removeProperty('--exp-pointer-x');
 scene.style.removeProperty('--exp-pointer-y');
}
function sync(){
 running=enabled();
 container.dataset['3d']=running?'on':'off';
 toggle.setAttribute('aria-pressed',running?'true':'false');
 toggle.textContent=running?'◈ 3D: Bật':'◈ 3D: Tắt';
 toggle.title=reduced.matches?'Thiết bị đang ưu tiên giảm chuyển động':fine.matches?'Bật/tắt hiệu ứng 3D':'Thiết bị không có con trỏ chính xác: hiệu ứng 3D tương tác được tắt';
 if(!running)reset();
}
toggle.addEventListener('click',()=>{
 userPreference=userPreference==='on'?'off':'on';
 try{localStorage.setItem(key,userPreference)}catch(_){}
 sync();
});
hero.addEventListener('pointermove',event=>{
 if(!running||container.hidden||event.pointerType!=='mouse')return;
 const rect=hero.getBoundingClientRect();
 const dx=(event.clientX-rect.left)/rect.width-.5;
 const dy=(event.clientY-rect.top)/rect.height-.5;
 if(raf)cancelAnimationFrame(raf);
 raf=requestAnimationFrame(()=>{
  scene.style.setProperty('--exp-pointer-x',(dx*11).toFixed(2)+'deg');
  scene.style.setProperty('--exp-pointer-y',(-dy*8).toFixed(2)+'deg');
  raf=0;
 });
},{passive:true});
hero.addEventListener('pointerleave',reset);
document.addEventListener('visibilitychange',sync);
function handleMedia(){sync()}
if(typeof reduced.addEventListener==='function')reduced.addEventListener('change',handleMedia);
if(typeof fine.addEventListener==='function')fine.addEventListener('change',handleMedia);
document.addEventListener('keydown',event=>{
 if(event.key==='Escape'&&container.dataset['3d']==='on')reset();
});
const tool=container.querySelector('.exp-toolbar');
if(tool)tool.classList.add('exp-3d-card');
sync();
})();