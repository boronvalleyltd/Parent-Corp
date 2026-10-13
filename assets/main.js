document.addEventListener('DOMContentLoaded',()=>{
  const t=document.querySelector('.menu-toggle'),l=document.querySelector('.nav-links');
  if(t&&l)t.addEventListener('click',()=>{l.classList.toggle('open');t.setAttribute('aria-expanded',l.classList.contains('open'))});
  const y=document.getElementById('year');if(y)y.textContent=new Date().getFullYear();
  const els=document.querySelectorAll('.reveal');
  if('IntersectionObserver' in window){
    const io=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting){e.target.classList.add('in');io.unobserve(e.target)}}),{threshold:.12});
    els.forEach(e=>io.observe(e));
  }else els.forEach(e=>e.classList.add('in'));
});
