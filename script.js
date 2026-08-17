document.querySelectorAll('a[href^="#"]').forEach(a=>a.addEventListener('click',e=>{const el=document.querySelector(a.getAttribute('href'));if(el){e.preventDefault();el.scrollIntoView({behavior:'smooth'})}}));
const reveal=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting)e.target.classList.add('show')}),{threshold:.12});
document.querySelectorAll('.card,.feature-grid article,.reviews article,.faq-list details').forEach(e=>{e.style.opacity=0;e.style.transform='translateY(18px)';e.style.transition='opacity .65s ease,transform .65s ease';reveal.observe(e)});
const s=document.createElement('style');s.textContent='.show{opacity:1!important;transform:none!important}';document.head.appendChild(s);
