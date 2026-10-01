const $=(selector,parent=document)=>parent.querySelector(selector);
const $$=(selector,parent=document)=>[...parent.querySelectorAll(selector)];

const SERVICES={
  cabelo:{
    title:'Cabelo',
    subtitle:'Cortes, tratamentos, escova e finalização',
    description:'Cuidados capilares, cortes e finalizações pensados para valorizar cada estilo.',
    image:'https://images.unsplash.com/photo-1562322140-8baeececf3df?auto=format&fit=crop&w=1600&q=90',
    items:['Corte Feminino','Corte Infantil','Tratamentos Capilares','Escova & Finalização']
  },
  cor:{
    title:'Cor & Mechas',
    subtitle:'Coloração, iluminação e transformações',
    description:'Serviços de cor e mechas com avaliação individual antes de cada transformação.',
    image:'https://images.unsplash.com/photo-1519699047748-de8e457a634e?auto=format&fit=crop&w=1600&q=90',
    items:['Coloração','Mechas & Iluminação']
  },
  masculino:{
    title:'Masculino & Barba',
    subtitle:'Cabelo, barba e cuidados masculinos',
    description:'Cortes e cuidados masculinos com atenção ao acabamento e à rotina de cada cliente.',
    image:'https://images.unsplash.com/photo-1503951914875-452162b0f3f1?auto=format&fit=crop&w=1600&q=90',
    items:['Corte Masculino','Barba']
  },
  sobrancelhas:{
    title:'Sobrancelhas & Epilação',
    subtitle:'Detalhes que valorizam expressão e acabamento',
    description:'Serviços de sobrancelhas e epilação realizados de acordo com a necessidade de cada cliente.',
    image:'https://images.unsplash.com/photo-1512496015851-a90fb38ba796?auto=format&fit=crop&w=1600&q=90',
    items:['Sobrancelhas','Epilação']
  },
  maquiagem:{
    title:'Maquiagem',
    subtitle:'Produções para diferentes momentos',
    description:'Maquiagem para ocasiões especiais e produções personalizadas.',
    image:'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?auto=format&fit=crop&w=1600&q=90',
    items:['Maquiagem Social','Produção para Eventos']
  }
};

const GALLERY=[
  'https://images.unsplash.com/photo-1492106087820-71f1a00d2b11?auto=format&fit=crop&w=1800&q=92',
  'https://images.unsplash.com/photo-1519699047748-de8e457a634e?auto=format&fit=crop&w=1800&q=92',
  'https://images.unsplash.com/photo-1621605815971-fbc98d665033?auto=format&fit=crop&w=1800&q=92',
  'https://images.unsplash.com/photo-1527799820374-dcf8d9d4a388?auto=format&fit=crop&w=1800&q=92'
];

const ALL_SERVICES=[
  ['Cabelo',['Corte Feminino','Corte Infantil','Tratamentos Capilares','Escova & Finalização']],
  ['Cor & Mechas',['Coloração','Mechas & Iluminação']],
  ['Masculino & Barba',['Corte Masculino','Barba']],
  ['Sobrancelhas & Epilação',['Sobrancelhas','Epilação']],
  ['Maquiagem',['Maquiagem Social','Produção para Eventos']]
];

const observer=new IntersectionObserver(entries=>{
  entries.forEach(entry=>{
    if(entry.isIntersecting){
      entry.target.classList.add('visible');
      observer.unobserve(entry.target);
    }
  });
},{threshold:.12,rootMargin:'0px 0px -30px'});
$$('.reveal').forEach(el=>observer.observe(el));

const header=$('#siteHeader');
const progress=$('#scrollProgress');
let lastY=scrollY;
let ticking=false;

function updateScroll(){
  const max=Math.max(1,document.documentElement.scrollHeight-innerHeight);
  const current=scrollY;
  const ratio=Math.min(1,current/max);
  const energy=Math.min(1,Math.abs(current-lastY)/42);

  document.documentElement.style.setProperty('--scroll-progress',ratio);
  document.documentElement.style.setProperty('--scroll-energy',energy);
  progress.style.width=`${ratio*100}%`;
  header.classList.toggle('scrolled',current>30);
  lastY=current;
  ticking=false;
}
addEventListener('scroll',()=>{
  if(!ticking){
    requestAnimationFrame(updateScroll);
    ticking=true;
  }
},{passive:true});
updateScroll();

addEventListener('pointermove',event=>{
  const x=((event.clientX/innerWidth)-.5)*24;
  const y=((event.clientY/innerHeight)-.5)*24;
  document.documentElement.style.setProperty('--pointer-x',x.toFixed(2));
  document.documentElement.style.setProperty('--pointer-y',y.toFixed(2));
},{passive:true});

const menuToggle=$('#menuToggle');
const mobileMenu=$('#mobileMenu');

function closeMobileMenu(){
  mobileMenu.classList.remove('open');
  mobileMenu.setAttribute('aria-hidden','true');
  menuToggle.setAttribute('aria-expanded','false');
}
menuToggle.addEventListener('click',()=>{
  const opening=!mobileMenu.classList.contains('open');
  mobileMenu.classList.toggle('open',opening);
  mobileMenu.setAttribute('aria-hidden',String(!opening));
  menuToggle.setAttribute('aria-expanded',String(opening));
});
$$('a',mobileMenu).forEach(link=>link.addEventListener('click',closeMobileMenu));

function renderService(id){
  const data=SERVICES[id]||SERVICES.cabelo;
  const image=$('#serviceImage');
  image.style.animation='none';
  image.offsetHeight;
  image.src=data.image;
  image.alt=data.title;
  image.style.animation='';
  $('#serviceSubtitle').textContent=data.subtitle;
  $('#serviceTitle').textContent=data.title;
  $('#serviceDescription').textContent=data.description;
  $('#serviceList').innerHTML=data.items.map(name=>`
    <div class="service-row">
      <div><strong>${name}</strong><span> · Sob consulta</span></div>
      <button data-book-service="${name}">Agendar</button>
    </div>`).join('');

  $$('[data-service-tab]').forEach(button=>{
    button.classList.toggle('active',button.dataset.serviceTab===id);
  });
}

$$('[data-service-tab]').forEach(button=>{
  button.addEventListener('click',()=>renderService(button.dataset.serviceTab));
});
renderService('cabelo');

const backdrop=$('#modalBackdrop');
const bookingDialog=$('#bookingDialog');
const catalogDialog=$('#catalogDialog');
const bookingSelect=$('#bookingService');

bookingSelect.innerHTML=ALL_SERVICES.flatMap(([group,items])=>items.map(item=>`<option value="${item}">${item}</option>`)).join('');

function openDialog(dialog){
  closeMobileMenu();
  backdrop.classList.add('open');
  dialog.classList.add('open');
  dialog.setAttribute('aria-hidden','false');
  document.body.classList.add('modal-open');
  setTimeout(()=>dialog.querySelector('button,select,a')?.focus(),40);
}

function closeDialogs(){
  backdrop.classList.remove('open');
  $$('.dialog.open').forEach(dialog=>{
    dialog.classList.remove('open');
    dialog.setAttribute('aria-hidden','true');
  });
  document.body.classList.remove('modal-open');
}

document.addEventListener('click',event=>{
  const bookingTarget=event.target.closest('[data-open-booking],[data-book-service]');
  if(bookingTarget){
    const service=bookingTarget.dataset.bookService;
    if(service){
      [...bookingSelect.options].some(option=>{
        if(option.value===service){
          bookingSelect.value=service;
          return true;
        }
        return false;
      });
    }
    openDialog(bookingDialog);
  }
});
$$('[data-close-dialog]').forEach(button=>button.addEventListener('click',closeDialogs));
backdrop.addEventListener('click',closeDialogs);

$('#openServiceCatalog').addEventListener('click',()=>{
  $('#catalogContent').innerHTML=`<div class="catalog-list">${ALL_SERVICES.map(([group,items])=>`
    <div class="catalog-group">
      <h3>${group}</h3>
      <ul>${items.map(item=>`<li>${item}</li>`).join('')}</ul>
    </div>`).join('')}</div>`;
  openDialog(catalogDialog);
});

const lightbox=$('#lightbox');
const lightboxImage=$('#lightboxImage');
let lightboxIndex=0;

function showLightbox(index){
  lightboxIndex=(index+GALLERY.length)%GALLERY.length;
  lightboxImage.src=GALLERY[lightboxIndex];
  lightboxImage.alt='Galeria PEDRARA Salon';
}
function openLightbox(index){
  showLightbox(index);
  lightbox.classList.add('open');
  lightbox.setAttribute('aria-hidden','false');
  document.body.classList.add('modal-open');
}
function closeLightbox(){
  lightbox.classList.remove('open');
  lightbox.setAttribute('aria-hidden','true');
  document.body.classList.remove('modal-open');
}

$$('[data-gallery-index]').forEach(item=>{
  item.addEventListener('click',()=>openLightbox(Number(item.dataset.galleryIndex)));
});
$('#lightboxPrev').addEventListener('click',()=>showLightbox(lightboxIndex-1));
$('#lightboxNext').addEventListener('click',()=>showLightbox(lightboxIndex+1));
$$('[data-close-lightbox]').forEach(button=>button.addEventListener('click',closeLightbox));
lightbox.addEventListener('click',event=>{
  if(event.target===lightbox)closeLightbox();
});

addEventListener('keydown',event=>{
  if(event.key==='Escape'){
    closeDialogs();
    closeLightbox();
    closeMobileMenu();
  }
  if(lightbox.classList.contains('open')&&event.key==='ArrowLeft')showLightbox(lightboxIndex-1);
  if(lightbox.classList.contains('open')&&event.key==='ArrowRight')showLightbox(lightboxIndex+1);
});

$('#backToTop').addEventListener('click',()=>scrollTo({top:0,behavior:'smooth'}));

const images=$$('img');
images.forEach(image=>{
  image.addEventListener('error',()=>{
    image.style.opacity='.2';
    image.closest('.media-zoom,.service-media,.gallery-item,.hero-media')?.classList.add('image-error');
  });
});