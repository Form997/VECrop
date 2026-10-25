(function(){
  const root=document.documentElement;
  const theme=localStorage.getItem('vecrop-theme')||'light';
  const font=localStorage.getItem('vecrop-font')||'normal';
  root.dataset.theme=theme; root.dataset.font=font;
  function sync(){
    document.querySelectorAll('[data-ws-theme]').forEach(b=>b.textContent=root.dataset.theme==='dark'?'☀️':'🌙');
    document.querySelectorAll('[data-ws-font]').forEach(b=>b.textContent=root.dataset.font==='large'?'A−':'A+');
  }
  document.addEventListener('click',e=>{
    const t=e.target.closest('[data-ws-theme]');
    if(t){root.dataset.theme=root.dataset.theme==='dark'?'light':'dark';localStorage.setItem('vecrop-theme',root.dataset.theme);sync();}
    const f=e.target.closest('[data-ws-font]');
    if(f){root.dataset.font=root.dataset.font==='large'?'normal':'large';localStorage.setItem('vecrop-font',root.dataset.font);sync();}
  });
  sync();
})();