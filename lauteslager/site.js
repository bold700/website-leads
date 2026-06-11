/* ===== Gedeelde header, footer, interacties — Lauteslager Makelaars ===== */
(function () {
  var TEL_DISPLAY = '030 231 51 86';
  var TEL_HREF = 'tel:0302315186';
  var EMAIL = 'info@lauteslager.nl';
  var ADDRESS = 'Catharijnesingel 100, 3511 GV Utrecht';

  var MENUS = {
    aanbod: { href: 'aanbod.html', label: 'Aanbod', items: [
      { href: 'aanbod.html', label: 'Woningaanbod' },
      { href: 'aanbod.html#verkocht', label: 'Verkochte woningen' },
      { href: 'aanbod.html#nieuwbouw', label: 'Nieuwbouwaanbod' }
    ] },
    diensten: { href: 'diensten.html', label: 'Diensten', items: [
      { href: 'diensten.html#verkopen', label: 'Woning verkopen' },
      { href: 'diensten.html#kopen', label: 'Woning kopen' },
      { href: 'diensten.html#taxaties', label: 'Taxaties' },
      { href: 'diensten.html#verhuur', label: 'Verhuur' },
      { href: 'diensten.html#nieuwbouw', label: 'Nieuwbouw' },
      { href: 'diensten.html#bedrijf', label: 'Bedrijfsonroerend goed' }
    ] },
    wijken: { href: 'wijken.html', label: 'Wijkinformatie', items: [
      { href: 'wijken.html#wittevrouwen', label: 'Wittevrouwen' },
      { href: 'wijken.html#oudwijk', label: 'Oudwijk' },
      { href: 'wijken.html#tuindorp', label: 'Tuindorp' },
      { href: 'wijken.html#leidsche-rijn', label: 'Leidsche Rijn' },
      { href: 'wijken.html#oog-in-al', label: 'Oog in Al' },
      { href: 'wijken.html#lombok', label: 'Lombok' }
    ] },
    'over-ons': { href: 'over-ons.html', label: 'Over ons', items: [
      { href: 'over-ons.html', label: 'Ons team' },
      { href: 'over-ons.html#reviews', label: 'Reviews' }
    ] }
  };
  var active = document.body.getAttribute('data-page') || '';
  var chevron = '<svg class="ml-0.5 h-3.5 w-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M6 9l6 6 6-6"/></svg>';
  var arrow = '<svg class="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M5 12h14M13 5l7 7-7 7"/></svg>';

  function logo(cls) {
    return '<a href="index.html" class="flex items-center ' + (cls || '') + '" aria-label="Lauteslager Makelaars, naar home"><img src="assets/logo.png" alt="Lauteslager Makelaars" width="1024" height="316" class="h-11 w-auto" /></a>';
  }

  function dropdown(key) {
    var m = MENUS[key];
    var on = active === key;
    return '<li class="has-menu relative"><a href="' + m.href + '" class="inline-flex items-center gap-0.5 rounded px-2.5 py-2 text-sm font-medium ' + (on ? 'text-gold' : 'text-ink/80 hover:text-navy') + ' transition-colors">' + m.label + chevron + '</a>' +
      '<div class="submenu absolute left-0 top-full z-10 pt-3"><ul class="min-w-[15rem] rounded-xl border border-line bg-white p-1.5 shadow-2xl">' +
      m.items.map(function (it) { return '<li><a class="block rounded-lg px-3 py-2.5 text-sm font-medium text-ink/80 hover:bg-paper hover:text-navy" href="' + it.href + '">' + it.label + '</a></li>'; }).join('') +
      '</ul></div></li>';
  }

  var header = '' +
    '<header id="header" class="sticky top-0 z-50 border-b border-line bg-white/95 backdrop-blur">' +
      '<nav class="mx-auto flex h-[4.75rem] max-w-7xl items-center justify-between gap-4 px-5 lg:px-8" aria-label="Hoofdnavigatie">' +
        logo() +
        '<ul class="hidden items-center gap-1 xl:flex">' +
          dropdown('aanbod') + dropdown('diensten') + dropdown('wijken') + dropdown('over-ons') +
          '<li><a href="contact.html" class="rounded px-2.5 py-2 text-sm font-medium ' + (active === 'contact' ? 'text-gold' : 'text-ink/80 hover:text-navy') + ' transition-colors">Contact</a></li>' +
        '</ul>' +
        '<div class="flex items-center gap-2">' +
          '<a href="contact.html" class="hidden items-center gap-2 rounded-md bg-gold px-4 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-gold/90 sm:inline-flex">Neem contact op ' + arrow + '</a>' +
          '<button id="menuBtn" type="button" aria-label="Menu openen" aria-expanded="false" aria-controls="mobileMenu" class="inline-flex h-11 w-11 items-center justify-center rounded-md border border-line text-navy xl:hidden"><svg class="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" aria-hidden="true"><path d="M4 6h16M4 12h16M4 18h16"/></svg></button>' +
        '</div>' +
      '</nav>' +
      '<div id="mobileMenu" class="hidden border-t border-line bg-white xl:hidden">' +
        '<nav class="mx-auto flex max-w-7xl flex-col px-5 py-4" aria-label="Mobiele navigatie">' +
          Object.keys(MENUS).map(function (k) {
            var m = MENUS[k];
            return '<a class="rounded-md px-2 py-3 text-base font-medium text-navy hover:bg-paper" href="' + m.href + '">' + m.label + '</a>';
          }).join('') +
          '<a class="rounded-md px-2 py-3 text-base font-medium text-navy hover:bg-paper" href="contact.html">Contact</a>' +
          '<a href="contact.html" class="mt-3 inline-flex w-full items-center justify-center gap-2 rounded-md bg-gold px-4 py-3 text-sm font-semibold text-white">Neem contact op</a>' +
        '</nav>' +
      '</div>' +
    '</header>';

  function fcol(title, items) {
    return '<div><h2 class="text-sm font-semibold text-white">' + title + '</h2><ul class="mt-3 space-y-2 text-sm text-white/60">' + items.map(function (it) { return '<li><a class="hover:text-gold transition-colors" href="' + it.href + '">' + it.label + '</a></li>'; }).join('') + '</ul></div>';
  }

  var footer = '' +
    '<footer class="bg-navy text-white">' +
      '<div class="mx-auto grid max-w-7xl gap-10 px-5 py-14 md:grid-cols-2 lg:grid-cols-5 lg:px-8">' +
        '<div class="lg:col-span-1"><a href="index.html" class="display text-2xl font-semibold tracking-wide">LAUTESLAGER</a><p class="mt-1 text-xs font-semibold uppercase tracking-[0.2em] text-gold">Makelaars</p>' +
          '<p class="mt-4 max-w-xs text-sm leading-relaxed text-white/60">Al sinds 1850 dé makelaar in Utrecht. Ervaring, vakkennis en persoonlijke aandacht voor elke stap.</p>' +
          '<div class="mt-4 flex gap-3"><a href="#" aria-label="LinkedIn" class="inline-flex h-9 w-9 items-center justify-center rounded-full bg-white/10 text-white/70 transition-colors hover:bg-gold hover:text-white"><svg class="h-4 w-4" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M4.98 3.5a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5zM3 9h4v12H3zM9 9h3.8v1.7h.05c.53-1 1.83-2.05 3.77-2.05 4.03 0 4.78 2.65 4.78 6.1V21h-4v-5.4c0-1.3 0-2.97-1.8-2.97-1.8 0-2.08 1.4-2.08 2.87V21H9z"/></svg></a><a href="#" aria-label="Instagram" class="inline-flex h-9 w-9 items-center justify-center rounded-full bg-white/10 text-white/70 transition-colors hover:bg-gold hover:text-white"><svg class="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><rect x="2" y="2" width="20" height="20" rx="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none"/></svg></a></div>' +
        '</div>' +
        fcol('Diensten', MENUS.diensten.items.slice(0, 5)) +
        fcol('Over ons', [{ href: 'over-ons.html', label: 'Ons team' }, { href: 'over-ons.html#reviews', label: 'Reviews' }, { href: 'aanbod.html', label: 'Woningaanbod' }, { href: 'contact.html', label: 'Contact' }]) +
        fcol('Wijkinformatie', MENUS.wijken.items.slice(0, 5)) +
        '<div><h2 class="text-sm font-semibold text-white">Contact</h2><ul class="mt-3 space-y-2.5 text-sm text-white/60">' +
          '<li class="flex items-start gap-2"><svg class="mt-0.5 h-4 w-4 shrink-0 text-gold" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg><span>' + ADDRESS + '</span></li>' +
          '<li class="flex items-center gap-2"><svg class="h-4 w-4 shrink-0 text-gold" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.36 1.9.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.9.34 1.85.57 2.81.7A2 2 0 0 1 22 16.92z"/></svg><a class="hover:text-gold transition-colors" href="' + TEL_HREF + '">' + TEL_DISPLAY + '</a></li>' +
          '<li class="flex items-center gap-2"><svg class="h-4 w-4 shrink-0 text-gold" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><rect x="2" y="4" width="20" height="16" rx="2"/><path d="m22 7-10 6L2 7"/></svg><a class="hover:text-gold transition-colors" href="mailto:' + EMAIL + '">' + EMAIL + '</a></li>' +
        '</ul></div>' +
      '</div>' +
      '<div class="border-t border-white/10"><div class="mx-auto flex max-w-7xl flex-col items-center justify-between gap-2 px-5 py-5 text-xs text-white/45 sm:flex-row lg:px-8"><p>&copy; <span id="year"></span> Lauteslager Makelaars · KvK 30014088 · NVM</p><div class="flex gap-5"><a class="hover:text-white/80 transition-colors" href="#">Disclaimer</a><a class="hover:text-white/80 transition-colors" href="#">Privacy</a></div></div></div>' +
    '</footer>';

  var toast = '<div id="toast" class="pointer-events-none fixed bottom-5 left-1/2 z-[60] hidden -translate-x-1/2"><div class="pointer-events-auto flex items-center gap-3 rounded-xl border border-line bg-white px-4 py-3 text-sm text-ink shadow-2xl"><svg class="h-6 w-6 text-gold" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><circle cx="12" cy="12" r="10"/><path d="M9 12l2 2 4-4"/></svg><div><p class="font-semibold">Bedankt! Je aanvraag is verzonden.</p><p class="text-muted">We nemen snel contact met je op.</p></div></div></div>';

  var h = document.getElementById('site-header'); if (h) h.outerHTML = header;
  var f = document.getElementById('site-footer'); if (f) f.outerHTML = footer;
  document.body.insertAdjacentHTML('beforeend', toast);

  var headerEl = document.getElementById('header');
  var menu = document.getElementById('mobileMenu'), btn = document.getElementById('menuBtn');
  function onScroll() { headerEl.classList.toggle('hdr-solid', window.scrollY > 8); }
  window.addEventListener('scroll', onScroll, { passive: true }); onScroll();
  btn.addEventListener('click', function () { var open = menu.classList.toggle('hidden') === false; btn.setAttribute('aria-expanded', String(open)); });
  var y = document.getElementById('year'); if (y) y.textContent = new Date().getFullYear();

  var noPref = window.matchMedia('(prefers-reduced-motion: no-preference)').matches;
  document.addEventListener('click', function (e) {
    var a = e.target.closest ? e.target.closest('a') : null;
    if (!a || a.target === '_blank') return;
    var href = a.getAttribute('href');
    if (!href || href.charAt(0) === '#' || href.indexOf(':') !== -1) return;
    if (!/\.html(\?|#|$)/.test(href) || !noPref) return;
    e.preventDefault(); document.body.classList.add('is-leaving');
    setTimeout(function () { window.location.href = href; }, 200);
  });
  window.addEventListener('pageshow', function () { document.body.classList.remove('is-leaving'); });

  if (noPref && 'IntersectionObserver' in window) {
    var sel = 'main .eyebrow, main h1, main h2, main p.lead, main article, main figure, main blockquote, main .reveal-img, main dl > div, main ol > li, main form, main iframe, main details';
    var items = Array.prototype.slice.call(document.querySelectorAll(sel));
    items = items.filter(function (el, i) { return items.indexOf(el) === i && !el.closest('.banner'); });
    var seen = [];
    items.forEach(function (el) {
      el.classList.add('reveal');
      var p = el.parentNode, idx = 0, k;
      for (k = 0; k < seen.length; k++) { if (seen[k] === p) idx++; }
      seen.push(p); el.style.transitionDelay = Math.min(idx, 6) * 55 + 'ms';
    });
    var io = new IntersectionObserver(function (en) { en.forEach(function (x) { if (x.isIntersecting) { x.target.classList.add('in'); io.unobserve(x.target); } }); }, { threshold: 0.06, rootMargin: '0px 0px -32px 0px' });
    items.forEach(function (el) { io.observe(el); });
  }
})();

function handleContact(e) {
  e.preventDefault();
  var t = document.getElementById('toast');
  t.classList.remove('hidden');
  e.target.reset();
  setTimeout(function () { t.classList.add('hidden'); }, 4000);
  return false;
}

/* ===== BOLD700 demo-melding ===== */
(function () {
  var SITE = 'Lauteslager Makelaars';
  var KEY = 'b7pop_ls';
  var DEADLINE = new Date('2026-06-26T23:59:59');
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
  card.id = 'b7-pop'; card.setAttribute('role', 'dialog'); card.setAttribute('aria-label', 'Bericht van BOLD700');
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
