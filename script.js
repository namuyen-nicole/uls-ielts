
const toggle=document.querySelector('.menu-toggle');const nav=document.querySelector('.nav-links');if(toggle){toggle.addEventListener('click',()=>nav.classList.toggle('open'));}
document.querySelectorAll('.nav-links a').forEach(a=>a.addEventListener('click',()=>nav&&nav.classList.remove('open')));
const lightbox=document.querySelector('.lightbox');const lbImg=document.querySelector('.lightbox img');document.querySelectorAll('.gallery-item').forEach(btn=>{btn.addEventListener('click',()=>{lbImg.src=btn.dataset.img;lightbox.classList.add('open');lightbox.setAttribute('aria-hidden','false');});});
document.querySelector('.lightbox-close')?.addEventListener('click',()=>{lightbox.classList.remove('open');lightbox.setAttribute('aria-hidden','true');lbImg.src='';});
lightbox?.addEventListener('click',e=>{if(e.target===lightbox){lightbox.classList.remove('open');lightbox.setAttribute('aria-hidden','true');lbImg.src='';}});
