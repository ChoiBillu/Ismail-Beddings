/* Shared by index.html and showroom.html: Tailwind config, header, footer */
tailwind.config={theme:{extend:{colors:{brand:{navy:'#0F1D38',navyLight:'#182B4F',gold:'#C5A869',goldHover:'#B39455',champagne:'#F6F2E9',champagneLight:'#FCFAF6',slate:'#5A6B82',cream:'#EDE6D6'}},fontFamily:{serif:['"Playfair Display"','Georgia','serif'],sans:['"Plus Jakarta Sans"','system-ui','sans-serif']}}}};
const PHONE='923001234567', WA='https://wa.me/'+PHONE;
const COLLECTIONS=categories.map(c=>[c.id,c.title]);
const wa=t=>WA+'?text='+encodeURIComponent(t);
document.head.insertAdjacentHTML('beforeend','<style>.custom-shadow{box-shadow:0 16px 36px -10px rgba(15,29,56,.08)}html{scroll-behavior:smooth}</style>');

const logo=`<a href="index.html" class="flex items-center gap-3 group"><div class="w-12 h-14 flex-shrink-0"><svg viewBox="0 0 100 120" class="w-full h-full transition-transform duration-300 group-hover:scale-105"><path d="M50 5 L88 20 C88 65 72 95 50 115 C28 95 12 65 12 20 Z" fill="#FCFAF6" stroke="#C5A869" stroke-width="4" stroke-linejoin="round"/><path d="M50 12 L82 25 C82 62 68 88 50 106 C32 88 18 62 18 25 Z" fill="none" stroke="#C5A869" stroke-width="1.5" stroke-dasharray="2 2"/><text x="49" y="73" font-family="'Playfair Display',serif" font-weight="700" font-size="52" fill="#C5A869" text-anchor="middle" font-style="italic">S</text><text x="50" y="72" font-family="'Playfair Display',serif" font-weight="700" font-size="50" fill="#0F1D38" text-anchor="middle">I</text></svg></div><div><span class="font-serif text-2xl font-bold tracking-tight text-brand-navy block leading-none">ISMAIL</span><span class="text-[10px] tracking-[0.28em] text-brand-gold font-bold uppercase mt-1 block">BEDDING • FAISALABAD</span></div></a>`;
const L='text-sm font-medium tracking-wide hover:text-brand-gold transition-colors';
const header=`
<div class="bg-brand-navy border-b border-brand-gold/30 text-white text-xs md:text-sm py-2 px-4"><div class="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-2 text-center sm:text-left"><div class="flex items-center gap-2"><span class="inline-block w-2 h-2 rounded-full bg-brand-gold animate-pulse"></span><span class="tracking-wide">Direct from the Textile Capital of Pakistan — <strong>Faisalabad</strong></span></div><div class="flex items-center gap-4 text-brand-champagne"><span>Free Delivery Across Pakistan on Orders Over PKR 5,000</span><span class="hidden md:inline">|</span><a href="tel:+${PHONE}" class="hidden md:inline hover:text-brand-gold font-medium">+92 300 1234567</a></div></div></div>
<header class="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-brand-champagne/80"><div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"><div class="flex items-center justify-between h-20">${logo}
<nav class="hidden lg:flex items-center gap-8">
<a data-p="home" href="index.html" class="${L}">Home</a>
<div class="relative group"><a data-p="showroom" href="showroom.html" class="${L} inline-flex items-center gap-1">Showroom <i data-lucide="chevron-down" class="w-4 h-4 transition-transform group-hover:rotate-180"></i></a>
<div class="absolute left-1/2 -translate-x-1/2 top-full pt-4 hidden group-hover:block group-focus-within:block"><div class="w-60 bg-white rounded-xl border border-brand-champagne shadow-xl py-2">
<a href="showroom.html" class="block px-5 py-2 text-sm font-semibold hover:bg-brand-champagne hover:text-brand-gold">All Collections</a><div class="my-1 border-t border-brand-champagne"></div>
${COLLECTIONS.map(([i,n])=>`<a href="showroom.html#${i}" class="block px-5 py-2 text-sm hover:bg-brand-champagne hover:text-brand-gold">${n}</a>`).join('')}</div></div></div>
<a href="showroom.html#size-guide" class="${L}">Size Guide</a>
<a href="index.html#craftsmanship" class="${L}">Heritage & Craft</a>
<a href="index.html#location" class="${L}">Visit Us</a></nav>
<div class="hidden sm:flex"><a href="${wa('Hello Ismail Bedding, I would like to inquire about your luxury bedding sets.')}" target="_blank" class="hidden lg:inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-xs font-semibold tracking-wider uppercase bg-brand-navy text-white hover:bg-brand-gold transition-all shadow-md"><i data-lucide="message-circle" class="w-4 h-4 text-brand-gold"></i>WhatsApp Inquiry</a></div>
<button id="mBtn" aria-label="Toggle navigation menu" class="lg:hidden p-2 hover:text-brand-gold"><i data-lucide="menu" class="w-6 h-6"></i></button></div></div>
<div id="mMenu" class="hidden lg:hidden bg-white border-t border-brand-champagne px-6 py-5 max-h-[80vh] overflow-y-auto"><div class="flex flex-col gap-3 text-base font-medium">
<a href="index.html">Home</a><a href="showroom.html">Showroom — All Collections</a>
<div class="pl-4 border-l-2 border-brand-gold/40 flex flex-col gap-2 text-sm text-brand-slate">${COLLECTIONS.map(([i,n])=>`<a href="showroom.html#${i}">${n}</a>`).join('')}</div>
<a href="showroom.html#size-guide">Size Guide</a><a href="index.html#craftsmanship">Heritage & Craft</a><a href="index.html#location">Visit Us</a>
<a href="${wa('Hello Ismail Bedding')}" target="_blank" class="mt-1 flex items-center justify-center gap-2 py-3 rounded-md bg-brand-navy text-brand-champagne font-semibold text-sm">Inquire on WhatsApp</a></div></div></header>`;
const footer=`<footer class="bg-brand-navy text-brand-champagne"><div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 grid gap-8 md:grid-cols-3"><div><p class="font-serif text-2xl font-bold">ISMAIL</p><p class="text-[10px] tracking-[0.28em] text-brand-gold font-bold uppercase mt-1">Bedding • Faisalabad</p><p class="text-sm text-brand-champagne/70 mt-4 max-w-xs">Export-quality bedding woven in the textile capital of Pakistan.</p></div><div class="text-sm space-y-2"><p class="text-brand-gold font-bold uppercase text-xs tracking-widest mb-3">Explore</p><a class="block hover:text-brand-gold" href="index.html">Home</a><a class="block hover:text-brand-gold" href="showroom.html">Showroom</a><a class="block hover:text-brand-gold" href="showroom.html#size-guide">Size Guide</a></div><div class="text-sm space-y-2"><p class="text-brand-gold font-bold uppercase text-xs tracking-widest mb-3">Contact</p><a class="block hover:text-brand-gold" href="tel:+${PHONE}">+92 300 1234567</a><a class="block hover:text-brand-gold" target="_blank" href="${WA}">WhatsApp</a></div></div><div class="border-t border-white/10 text-center text-xs py-4 text-brand-champagne/60">© Ismail Bedding, Faisalabad</div></footer>`;

document.addEventListener('DOMContentLoaded',()=>{
  document.getElementById('site-header').innerHTML=header;
  document.getElementById('site-footer').innerHTML=footer;
  const p=document.body.dataset.page;
  document.querySelectorAll('[data-p="'+p+'"]').forEach(a=>a.classList.add('text-brand-gold'));
  document.getElementById('mBtn').onclick=()=>document.getElementById('mMenu').classList.toggle('hidden');
  document.querySelectorAll('#mMenu a').forEach(a=>a.addEventListener('click',()=>document.getElementById('mMenu').classList.add('hidden')));
  if(window.lucide)lucide.createIcons();
});
