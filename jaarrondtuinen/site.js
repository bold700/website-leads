/* ===== Gedeelde header, footer, toast en interacties — Jaarrond Tuinen ===== */
(function () {
  var TEL_DISPLAY = '06 29 46 42 40';
  var TEL_HREF = 'tel:0629464240';
  var EMAIL = 'info@jaarrondtuinen.nl';

  var NAV = [
    { href: 'diensten.html', key: 'diensten', label: 'Diensten' },
    { href: 'projecten.html', key: 'projecten', label: 'Projecten' },
    { href: 'werkwijze.html', key: 'werkwijze', label: 'Werkwijze' },
    { href: 'over-ons.html', key: 'over-ons', label: 'Over ons' },
    { href: 'reviews.html', key: 'reviews', label: 'Reviews' },
    { href: 'contact.html', key: 'contact', label: 'Contact' }
  ];
  var active = document.body.getAttribute('data-page') || '';

  var leaf = '<svg class="h-8 w-8 text-brand-green" viewBox="0 0 64 64" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M32 50V28"/><path d="M32 32c-2-8-9-11-15-11 0 9 6 13 15 13z"/><path d="M32 26c2-7 8-10 13-10 0 8-5 12-13 12z"/></svg>';
  var phoneIcon = '<svg class="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.36 1.9.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.9.34 1.85.57 2.81.7A2 2 0 0 1 22 16.92z"/></svg>';

  function logo() {
    return '<a href="index.html" class="inline-flex items-center focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-green rounded" aria-label="Jaarrond Tuinen, naar home">' +
      '<img src="assets/logo.webp" alt="Jaarrond Tuinen" width="177" height="91" class="h-12 w-auto" /></a>';
  }
  function deskItem(it) {
    var cls = it.key === active ? 'text-brand-green' : 'text-ink/70 hover:text-brand-green transition-colors duration-150';
    return '<li><a class="' + cls + ' focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-green rounded px-1 py-1" href="' + it.href + '"' + (it.key === active ? ' aria-current="page"' : '') + '>' + it.label + '</a></li>';
  }
  function mobItem(it) {
    var cls = it.key === active ? 'text-brand-green' : 'text-ink/80 hover:bg-ink/5';
    return '<li><a class="block rounded px-2 py-3 ' + cls + '" href="' + it.href + '">' + it.label + '</a></li>';
  }

  var header = '' +
    '<header id="header" class="sticky top-0 z-40 border-b border-ink/10 bg-cream/85 backdrop-blur transition-shadow">' +
      '<nav class="mx-auto flex max-w-7xl items-center justify-between gap-4 px-5 py-3.5 lg:px-8" aria-label="Hoofdnavigatie">' +
        logo() +
        '<ul class="hidden lg:flex items-center gap-8 text-sm font-medium">' + NAV.map(deskItem).join('') + '</ul>' +
        '<div class="flex items-center gap-2.5">' +
          '<a href="contact.html" class="hidden sm:inline-flex items-center gap-2 rounded-md bg-brand-green px-5 py-2.5 text-sm font-semibold text-cream shadow-sm transition-all duration-150 hover:bg-brand-greenDark active:scale-[0.98] focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-green focus-visible:ring-offset-2 focus-visible:ring-offset-cream">Offerte aanvragen</a>' +
          '<a href="' + TEL_HREF + '" aria-label="Bel ons" class="hidden sm:inline-flex h-10 w-10 items-center justify-center rounded-md border border-ink/15 text-ink transition-colors hover:border-brand-green hover:text-brand-green focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-green">' + phoneIcon + '</a>' +
          '<button id="menuBtn" type="button" aria-label="Menu openen" aria-expanded="false" aria-controls="mobileMenu" class="lg:hidden inline-flex h-11 w-11 items-center justify-center rounded-md border border-ink/15 text-ink transition-colors hover:bg-ink/5 focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-green"><svg class="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" aria-hidden="true"><path d="M4 6h16M4 12h16M4 18h16"/></svg></button>' +
        '</div>' +
      '</nav>' +
      '<div id="mobileMenu" class="hidden lg:hidden border-t border-ink/10 bg-cream px-5 pb-5 pt-2">' +
        '<ul class="flex flex-col text-base font-medium">' + NAV.map(mobItem).join('') + '</ul>' +
        '<div class="mt-3 flex flex-col gap-2.5">' +
          '<a href="contact.html" class="inline-flex w-full items-center justify-center gap-2 rounded-md bg-brand-green px-4 py-3 text-sm font-semibold text-cream hover:bg-brand-greenDark">Offerte aanvragen</a>' +
          '<a href="' + TEL_HREF + '" class="inline-flex w-full items-center justify-center gap-2 rounded-md border border-ink/15 px-4 py-3 text-sm font-semibold text-ink hover:bg-ink/5">' + phoneIcon + 'Bel ' + TEL_DISPLAY + '</a>' +
        '</div>' +
      '</div>' +
    '</header>';

  function fl(href, label) { return '<li><a class="hover:text-brand-green transition-colors" href="' + href + '">' + label + '</a></li>'; }

  var footer = '' +
    '<footer class="border-t border-ink/10 bg-cream">' +
      '<div class="mx-auto max-w-7xl px-5 py-14 lg:px-8">' +
        '<div class="grid grid-cols-2 gap-8 lg:grid-cols-4">' +
          '<div class="col-span-2 lg:col-span-1">' + logo() +
            '<p class="mt-4 max-w-xs text-sm leading-relaxed text-muted">Tuinaanleg en onderhoud in Utrecht, Zeist en omgeving. Netjes, mooi en zonder verrassingen.</p>' +
            '<div class="mt-4 flex gap-3"><a href="#" aria-label="Facebook" class="inline-flex h-9 w-9 items-center justify-center rounded-full bg-ink/5 text-ink/60 transition-colors hover:bg-brand-green hover:text-cream"><svg class="h-4 w-4" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg></a></div>' +
          '</div>' +
          '<nav aria-label="Diensten"><h4 class="text-sm font-bold text-ink">Diensten</h4><ul class="mt-3 space-y-2 text-sm text-muted">' + fl('diensten.html','Nieuwe tuin aanleggen') + fl('diensten.html','Sierbestrating') + fl('diensten.html','Tuinonderhoud') + fl('diensten.html','Boomverzorging') + '</ul></nav>' +
          '<nav aria-label="Meer"><h4 class="text-sm font-bold text-ink">Meer</h4><ul class="mt-3 space-y-2 text-sm text-muted">' + fl('projecten.html','Projecten') + fl('werkwijze.html','Werkwijze') + fl('over-ons.html','Over ons') + fl('reviews.html','Reviews') + '</ul></nav>' +
          '<div><h4 class="text-sm font-bold text-ink">Contact</h4><ul class="mt-3 space-y-2.5 text-sm text-muted">' +
            '<li class="flex items-center gap-2"><svg class="h-4 w-4 text-brand-green" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.36 1.9.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.9.34 1.85.57 2.81.7A2 2 0 0 1 22 16.92z"/></svg><a class="hover:text-brand-green transition-colors" href="' + TEL_HREF + '">' + TEL_DISPLAY + '</a></li>' +
            '<li class="flex items-center gap-2"><svg class="h-4 w-4 text-brand-green" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><rect x="2" y="4" width="20" height="16" rx="2"/><path d="m22 7-10 6L2 7"/></svg><a class="hover:text-brand-green transition-colors" href="mailto:' + EMAIL + '">' + EMAIL + '</a></li>' +
            '<li class="flex items-start gap-2"><svg class="mt-0.5 h-4 w-4 text-brand-green" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg><span>Noordweg 103, Zeist<br />Utrecht &amp; omgeving</span></li>' +
          '</ul></div>' +
        '</div>' +
        '<div class="mt-12 flex flex-col items-center justify-between gap-3 border-t border-ink/10 pt-6 text-xs text-muted sm:flex-row"><p>&copy; <span id="year"></span> Jaarrond Tuinen B.V. · KvK 88527174</p><div class="flex gap-5"><a class="hover:text-ink transition-colors" href="#">Algemene voorwaarden</a><a class="hover:text-ink transition-colors" href="#">Privacy</a></div></div>' +
      '</div>' +
    '</footer>';

  var toast = '<div id="toast" class="pointer-events-none fixed bottom-5 right-5 z-50 hidden"><div class="pointer-events-auto flex items-center gap-3 rounded-lg border border-ink/10 bg-white px-4 py-3 text-sm text-ink shadow-2xl"><svg class="h-6 w-6 text-brand-green" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><circle cx="12" cy="12" r="10"/><path d="M9 12l2 2 4-4"/></svg><div><p class="font-semibold">Aanvraag verzonden.</p><p class="text-muted">We nemen snel contact met je op.</p></div></div></div>';

  var h = document.getElementById('site-header'); if (h) h.outerHTML = header;
  var f = document.getElementById('site-footer'); if (f) f.outerHTML = footer;
  document.body.insertAdjacentHTML('beforeend', toast);

  var headerEl = document.getElementById('header');
  function onScroll() { if (window.scrollY > 8) headerEl.classList.add('shadow-sm'); else headerEl.classList.remove('shadow-sm'); }
  window.addEventListener('scroll', onScroll, { passive: true }); onScroll();
  var btn = document.getElementById('menuBtn'), menu = document.getElementById('mobileMenu');
  btn.addEventListener('click', function () { var open = menu.classList.toggle('hidden') === false; btn.setAttribute('aria-expanded', String(open)); });
  menu.querySelectorAll('a').forEach(function (a) { a.addEventListener('click', function () { menu.classList.add('hidden'); btn.setAttribute('aria-expanded', 'false'); }); });
  var y = document.getElementById('year'); if (y) y.textContent = new Date().getFullYear();

  var noPref = window.matchMedia('(prefers-reduced-motion: no-preference)').matches;

  document.addEventListener('click', function (e) {
    var a = e.target.closest ? e.target.closest('a') : null;
    if (!a || a.target === '_blank' || a.hasAttribute('download')) return;
    var href = a.getAttribute('href');
    if (!href || href.charAt(0) === '#' || href.indexOf(':') !== -1) return;
    if (!/\.html(\?|#|$)/.test(href)) return;
    if (!noPref) return;
    e.preventDefault();
    document.body.classList.add('is-leaving');
    setTimeout(function () { window.location.href = href; }, 200);
  });
  window.addEventListener('pageshow', function () { document.body.classList.remove('is-leaving'); });

  if (noPref && 'IntersectionObserver' in window) {
    var sel = 'main .eyebrow, main h1, main h2, main p.lead, main article, main figure, main blockquote, main .reveal-img, main dl > div, main ol > li, main form, main iframe';
    var items = Array.prototype.slice.call(document.querySelectorAll(sel));
    items = items.filter(function (el, i) { return items.indexOf(el) === i; });
    var seen = [];
    items.forEach(function (el) {
      el.classList.add('reveal');
      var p = el.parentNode, idx = 0, k;
      for (k = 0; k < seen.length; k++) { if (seen[k] === p) idx++; }
      seen.push(p);
      el.style.transitionDelay = Math.min(idx, 6) * 60 + 'ms';
    });
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (en) { if (en.isIntersecting) { en.target.classList.add('in'); io.unobserve(en.target); } });
    }, { threshold: 0.06, rootMargin: '0px 0px -32px 0px' });
    items.forEach(function (el) { io.observe(el); });
  }
})();

function handleOfferte(e) {
  e.preventDefault();
  var t = document.getElementById('toast');
  t.classList.remove('hidden');
  e.target.reset();
  setTimeout(function () { t.classList.add('hidden'); }, 4000);
  return false;
}

/* ===== BOLD700 demo-melding (demo verloopt na 14 dagen) ===== */
(function () {
  var SITE = 'Jaarrond Tuinen';
  var KEY = 'b7pop_jt';
  var DEADLINE = new Date('2026-06-24T23:59:59');
  try { var prev = localStorage.getItem(KEY); if (prev && (Date.now() - (+prev)) < 12 * 3600 * 1000) return; } catch (e) {}
  var days = Math.max(0, Math.floor((DEADLINE - new Date()) / 86400000));
  var datum = DEADLINE.toLocaleDateString('nl-NL', { day: 'numeric', month: 'long' });
  var mail = 'mailto:support@bold700.com?subject=' + encodeURIComponent('Samenwerken: ' + SITE);
  var bel = 'mailto:support@bold700.com?subject=' + encodeURIComponent('Graag een belafspraak: ' + SITE);
  if (!document.getElementById('b7-pop-css')) {
    var st = document.createElement('style'); st.id = 'b7-pop-css';
    st.textContent = "#b7-pop{position:fixed;z-index:2147483000;left:16px;right:16px;bottom:16px;max-width:380px;font-family:'Geist',system-ui,sans-serif;opacity:0;transform:translateY(16px);transition:opacity .4s cubic-bezier(.16,1,.3,1),transform .4s cubic-bezier(.16,1,.3,1)}@media(min-width:640px){#b7-pop{left:auto;width:380px}}#b7-pop.b7-in{opacity:1;transform:none}#b7-pop .b7-card{background:#fff;color:#0f172a;border:1px solid rgba(15,23,42,.08);border-radius:18px;box-shadow:0 24px 60px -15px rgba(0,0,0,.35);padding:20px 18px 16px;position:relative;overflow:hidden}#b7-pop .b7-bar{height:4px;position:absolute;top:0;left:0;right:0;background:linear-gradient(90deg,#CCFF33,#7C6CF6)}#b7-pop .b7-head{display:flex;align-items:center;justify-content:space-between;margin-bottom:10px}#b7-pop .b7-brand{display:flex;align-items:center;gap:7px;font-weight:800;font-size:13px;letter-spacing:-.01em}#b7-pop .b7-dot{width:8px;height:8px;border-radius:50%;background:#CCFF33;box-shadow:0 0 0 3px rgba(204,255,51,.25)}#b7-pop .b7-x{border:0;background:transparent;cursor:pointer;color:#94a3b8;font-size:22px;line-height:1;padding:0 4px;border-radius:8px}#b7-pop .b7-x:hover{background:#f1f5f9;color:#0f172a}#b7-pop h3{font-size:16px;font-weight:700;margin:0 0 6px}#b7-pop p{font-size:13.5px;line-height:1.55;color:#475569;margin:0}#b7-pop .b7-chip{display:inline-flex;align-items:center;gap:6px;margin-top:12px;background:#f1f5f9;color:#0f172a;font-size:12px;font-weight:600;padding:5px 11px;border-radius:99px}#b7-pop .b7-actions{display:flex;flex-direction:column;gap:9px;margin-top:15px}#b7-pop .b7-btn{display:inline-flex;align-items:center;justify-content:center;gap:8px;background:#0f172a;color:#fff;font-size:14px;font-weight:600;padding:11px 16px;border-radius:11px;text-decoration:none;transition:transform .15s ease,background .15s ease}#b7-pop .b7-btn:hover{background:#1e293b;transform:translateY(-1px)}#b7-pop .b7-link{font-size:13px;color:#64748b;text-align:center;text-decoration:none}#b7-pop .b7-link:hover{color:#0f172a}@media(prefers-reduced-motion:reduce){#b7-pop{transition:none}}";
    document.head.appendChild(st);
  }
  var card = document.createElement('div');
  card.id = 'b7-pop';
  card.setAttribute('role', 'dialog');
  card.setAttribute('aria-label', 'Bericht van BOLD700');
  card.innerHTML = '<div class="b7-card"><span class="b7-bar"></span>'
    + '<div class="b7-head"><span class="b7-brand"><span class="b7-dot"></span>BOLD700</span><button class="b7-x" data-close aria-label="Sluiten">×</button></div>'
    + '<h3>Wat vind je van je nieuwe site?</h3>'
    + '<p>We hebben deze website als demo voor je gemaakt. Hij blijft nog <strong>' + days + ' dagen</strong> online (tot ' + datum + ') en gaat daarna offline. Zie je een samenwerking zitten? Dan plannen we graag een belletje.</p>'
    + '<span class="b7-chip">⏳ Nog ' + days + ' dagen online</span>'
    + '<div class="b7-actions"><a class="b7-btn" href="' + mail + '">Ja, ik ben geïnteresseerd</a>'
    + '<a class="b7-link" href="' + bel + '">Liever eerst even bellen? Neem contact op →</a></div></div>';
  document.body.appendChild(card);
  function remember() { try { localStorage.setItem(KEY, Date.now()); } catch (e) {} }
  function dismiss() { card.classList.remove('b7-in'); remember(); setTimeout(function () { if (card.parentNode) card.parentNode.removeChild(card); }, 400); }
  card.querySelector('[data-close]').addEventListener('click', dismiss);
  card.querySelectorAll('a').forEach(function (a) { a.addEventListener('click', remember); });
  setTimeout(function () { card.classList.add('b7-in'); }, 3500);
}());
