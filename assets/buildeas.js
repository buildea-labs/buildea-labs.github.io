const gridStyles=document.createElement('link');
gridStyles.rel='stylesheet';
gridStyles.href='assets/products-grid.css';
document.head.appendChild(gridStyles);
const header=document.querySelector('.site-header');
const menuButton=document.querySelector('.menu-button');
const mobileMenu=document.querySelector('#mobile-menu');
const menuLinks=mobileMenu?.querySelectorAll('a')??[];
const year=document.querySelector('#year');
if(year)year.textContent=new Date().getFullYear();
function syncHeader(){header?.classList.toggle('scrolled',window.scrollY>18)}
syncHeader();
window.addEventListener('scroll',syncHeader,{passive:true});
function closeMenu(){if(!menuButton||!mobileMenu)return;menuButton.setAttribute('aria-expanded','false');mobileMenu.hidden=true;document.body.classList.remove('menu-open')}
menuButton?.addEventListener('click',()=>{if(!mobileMenu)return;const open=menuButton.getAttribute('aria-expanded')==='true';menuButton.setAttribute('aria-expanded',String(!open));mobileMenu.hidden=open;document.body.classList.toggle('menu-open',!open)});
menuLinks.forEach(link=>link.addEventListener('click',closeMenu));
window.addEventListener('resize',()=>{if(window.innerWidth>1020)closeMenu()});
const productRoutes={'.project-signallq':'produtos/signallq.html','.project-linka':'produtos/linka.html','.project-nds':'produtos/nds.html'};
Object.entries(productRoutes).forEach(([selector,href])=>{const card=document.querySelector(selector);if(!card)return;const current=card.querySelector('a,.project-coming');if(!current)return;if(current.tagName==='A'){current.href=href;current.removeAttribute('target');current.removeAttribute('rel');current.textContent='Conhecer produto →'}else{const link=document.createElement('a');link.className=current.className;link.href=href;link.textContent='Conhecer produto →';current.replaceWith(link)}});
const reduceMotion=window.matchMedia('(prefers-reduced-motion: reduce)').matches;
const reveals=document.querySelectorAll('.reveal');
if(reduceMotion||!('IntersectionObserver'in window)){reveals.forEach(el=>el.classList.add('visible'))}else{const observer=new IntersectionObserver(entries=>{entries.forEach(entry=>{if(entry.isIntersecting){entry.target.classList.add('visible');observer.unobserve(entry.target)}})},{threshold:.12,rootMargin:'0px 0px -40px 0px'});reveals.forEach(el=>observer.observe(el))}
