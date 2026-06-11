/* ===== Gedeelde header, footer, interacties — De Lachende Tuinman ===== */
(function () {
  var TEL_DISPLAY = '06 34 63 42 80';
  var TEL_HREF = 'tel:0634634280';
  var WA_HREF = 'https://wa.me/31634634280';
  var EMAIL = 'info@delachendetuinman.nl';

  var SERVICES = [
    { slug: 'tuinaanleg', label: 'Tuinaanleg' },
    { slug: 'tuinonderhoud', label: 'Tuinonderhoud' },
    { slug: 'bestrating', label: 'Bestrating' },
    { slug: 'beplanting', label: 'Beplanting' },
    { slug: 'schuttingen-houtwerk', label: 'Schuttingen & houtwerk' },
    { slug: 'grondwerk', label: 'Grondwerk' }
  ];
  var NAV = [
    { href: 'projecten.html', key: 'projecten', label: 'Projecten' },
    { href: 'over-chris.html', key: 'over-chris', label: 'Over Chris' },
    { href: 'werkwijze.html', key: 'werkwijze', label: 'Werkwijze' },
    { href: 'reviews.html', key: 'reviews', label: 'Reviews' },
    { href: 'contact.html', key: 'contact', label: 'Contact' }
  ];
  var active = document.body.getAttribute('data-page') || '';

  var sun = '<svg viewBox="0 0 48 48" class="h-9 w-9 shrink-0 text-brand-accent" fill="none" aria-hidden="true"><g stroke="currentColor" stroke-width="2.4" stroke-linecap="round"><path d="M24 4v4M24 40v4M4 24h4M40 24h4M9.9 9.9l2.8 2.8M35.3 35.3l2.8 2.8M38.1 9.9l-2.8 2.8M12.7 35.3l-2.8 2.8"/></g><circle cx="24" cy="24" r="11" fill="currentColor"/><g stroke="rgb(var(--brand-green))" stroke-width="2" stroke-linecap="round"><path d="M19 22.5h.01M29 22.5h.01"/><path d="M19 27c1.2 1.8 3 2.8 5 2.8s3.8-1 5-2.8"/></g></svg>';
  var chevron = '<svg class="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M6 9l6 6 6-6"/></svg>';
  var phoneIcon = '<svg class="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.36 1.9.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.9.34 1.85.57 2.81.7A2 2 0 0 1 22 16.92z"/></svg>';

  function logo() {
    return '<a href="index.html" class="flex items-center gap-2.5 rounded-md focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-accent" aria-label="De Lachende Tuinman, naar home">' + sun +
      '<span class="display leading-none text-current"><span class="block text-[0.8rem] italic opacity-80">De Lachende</span><span class="block text-xl font-semibold">Tuinman</span></span></a>';
  }
  var navlink = 'rounded-md px-3 py-2 text-sm font-medium text-current/85 transition-colors hover:text-current focus:outline-none focus-visible:ring-2 focus-visible:ring-current';
  var activeMark = ' underline decoration-brand-accent decoration-2 underline-offset-[6px]';

  function deskItem(it) {
    return '<li><a class="' + navlink + (it.key === active ? activeMark : '') + '" href="' + it.href + '"' + (it.key === active ? ' aria-current="page"' : '') + '>' + it.label + '</a></li>';
  }

  var submenu = '<ul class="submenu absolute left-0 top-full z-10 pt-3"><div class="min-w-[16rem] rounded-2xl border border-border bg-white p-2 text-ink shadow-2xl">' +
    SERVICES.map(function (s) { return '<li><a class="flex items-center rounded-lg px-3 py-2.5 text-sm font-medium hover:bg-cream" href="diensten.html#' + s.slug + '">' + s.label + '</a></li>'; }).join('') +
    '<li><a class="flex items-center rounded-lg px-3 py-2.5 text-sm font-semibold text-brand-green hover:bg-cream" href="diensten.html">Alle diensten</a></li></div></ul>';

  var header = '' +
    '<header id="header" class="fixed inset-x-0 top-0 z-50">' +
      '<nav class="container mx-auto flex h-[4.75rem] max-w-6xl items-center justify-between gap-4 px-5 lg:px-8" aria-label="Hoofdnavigatie">' +
        logo() +
        '<ul class="hidden items-center gap-1 lg:flex">' +
          '<li class="has-menu relative"><a class="' + navlink + ' inline-flex items-center gap-1' + (active === 'diensten' ? activeMark : '') + '" href="diensten.html">Diensten ' + chevron + '</a>' + submenu + '</li>' +
          NAV.map(deskItem).join('') +
        '</ul>' +
        '<div class="flex items-center gap-2">' +
          '<a href="' + TEL_HREF + '" class="hidden items-center gap-2 rounded-md bg-brand-accent px-4 py-2.5 text-sm font-semibold text-ink transition-transform hover:scale-[1.03] active:scale-95 focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-accent sm:inline-flex">' + phoneIcon + 'Bel Chris</a>' +
          '<button id="menuBtn" type="button" aria-label="Menu openen" aria-expanded="false" aria-controls="mobileMenu" class="inline-flex h-11 w-11 items-center justify-center rounded-md border border-current/30 text-current lg:hidden"><svg class="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" aria-hidden="true"><path d="M4 6h16M4 12h16M4 18h16"/></svg></button>' +
        '</div>' +
      '</nav>' +
      '<div id="mobileMenu" class="hidden border-t border-border bg-cream text-ink lg:hidden">' +
        '<nav class="container mx-auto flex max-w-6xl flex-col px-5 py-4" aria-label="Mobiele navigatie">' +
          '<p class="px-2 pb-1 pt-2 text-xs font-semibold uppercase tracking-wide text-muted">Diensten</p>' +
          SERVICES.map(function (s) { return '<a class="rounded-md px-2 py-3 text-base hover:bg-white" href="diensten.html#' + s.slug + '">' + s.label + '</a>'; }).join('') +
          '<div class="my-2 h-px bg-border"></div>' +
          NAV.map(function (it) { return '<a class="rounded-md px-2 py-3 text-base hover:bg-white" href="' + it.href + '">' + it.label + '</a>'; }).join('') +
          '<a href="' + TEL_HREF + '" class="mt-3 inline-flex w-full items-center justify-center gap-2 rounded-md bg-brand-accent px-4 py-3 text-sm font-semibold text-ink">' + phoneIcon + 'Bel Chris</a>' +
        '</nav>' +
      '</div>' +
    '</header>';

  function fl(href, label) { return '<li><a class="hover:text-brand-green transition-colors" href="' + href + '">' + label + '</a></li>'; }

  var footer = '' +
    '<footer class="border-t border-border bg-[#ECE8DC]">' +
      '<div class="container mx-auto grid max-w-6xl gap-10 px-5 py-14 md:grid-cols-2 lg:grid-cols-4 lg:px-8">' +
        '<div class="lg:col-span-1 text-ink">' + logo() +
          '<p class="mt-4 max-w-xs text-sm leading-relaxed text-muted">Uw idee is onze uitdaging. Tuinaanleg, onderhoud en alles eromheen in Maarssen, Utrecht en omgeving.</p>' +
          '<div class="mt-4 flex gap-3"><a href="' + WA_HREF + '" class="rounded-full bg-white px-3 py-1.5 text-xs font-medium text-muted transition-colors hover:text-brand-green">WhatsApp</a><a href="#" class="rounded-full bg-white px-3 py-1.5 text-xs font-medium text-muted transition-colors hover:text-brand-green">Facebook</a></div>' +
        '</div>' +
        '<nav aria-label="Diensten"><h2 class="text-sm font-semibold text-ink">Diensten</h2><ul class="mt-3 space-y-2 text-sm text-muted">' + SERVICES.map(function (s) { return fl('diensten.html#' + s.slug, s.label); }).join('') + '</ul></nav>' +
        '<div><h2 class="text-sm font-semibold text-ink">Contact</h2><ul class="mt-3 space-y-2.5 text-sm text-muted">' +
          '<li><a class="hover:text-brand-green transition-colors" href="' + TEL_HREF + '">' + TEL_DISPLAY + '</a></li>' +
          '<li><a class="hover:text-brand-green transition-colors" href="mailto:' + EMAIL + '">' + EMAIL + '</a></li>' +
          '<li>Maarssen, Utrecht en omgeving</li>' +
        '</ul></div>' +
        '<div><h2 class="text-sm font-semibold text-ink">Bereikbaarheid</h2><ul class="mt-3 space-y-2 text-sm text-muted"><li class="flex justify-between gap-2"><span>Ma - Vr</span><span>07:30 - 18:00</span></li><li class="flex justify-between gap-2"><span>Zaterdag</span><span>Op afspraak</span></li><li class="flex justify-between gap-2"><span>Zondag</span><span>Gesloten</span></li></ul><p class="mt-3 text-xs text-muted">Werk je vaak overdag? Stuur een appje, dan reageer ik zodra ik uit de tuin ben.</p></div>' +
      '</div>' +
      '<div class="border-t border-border"><div class="container mx-auto flex max-w-6xl flex-col items-center justify-between gap-2 px-5 py-5 text-xs text-muted sm:flex-row lg:px-8"><p>&copy; <span id="year"></span> De Lachende Tuinman. Alle rechten voorbehouden.</p><p>Werkgebied: Maarssen, Utrecht, Vleuten, Nieuwegein e.o.</p></div></div>' +
    '</footer>';

  var toast = '<div id="toast" class="pointer-events-none fixed bottom-5 left-1/2 z-[60] hidden -translate-x-1/2"><div class="pointer-events-auto flex items-center gap-3 rounded-xl border border-border bg-white px-4 py-3 text-sm text-ink shadow-2xl"><svg class="h-6 w-6 text-brand-green" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><circle cx="12" cy="12" r="10"/><path d="M9 12l2 2 4-4"/></svg><div><p class="font-semibold">Bedankt! Je bericht is verzonden.</p><p class="text-muted">Chris kijkt mee en laat snel van zich horen.</p></div></div></div>';

  var h = document.getElementById('site-header'); if (h) h.outerHTML = header;
  var f = document.getElementById('site-footer'); if (f) f.outerHTML = footer;
  document.body.insertAdjacentHTML('beforeend', toast);

  var headerEl = document.getElementById('header');
  var menu = document.getElementById('mobileMenu');
  var btn = document.getElementById('menuBtn');
  function refresh() {
    var solid = window.scrollY > 12 || (menu && !menu.classList.contains('hidden'));
    headerEl.classList.toggle('hdr-solid', solid);
  }
  window.addEventListener('scroll', refresh, { passive: true }); refresh();
  btn.addEventListener('click', function () { var open = menu.classList.toggle('hidden') === false; btn.setAttribute('aria-expanded', String(open)); refresh(); });
  var y = document.getElementById('year'); if (y) y.textContent = new Date().getFullYear();

  var noPref = window.matchMedia('(prefers-reduced-motion: no-preference)').matches;

  document.addEventListener('click', function (e) {
    var a = e.target.closest ? e.target.closest('a') : null;
    if (!a || a.target === '_blank') return;
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
    var sel = 'main .eyebrow, main h1, main h2, main p.lead, main article, main figure, main blockquote, main .reveal-img, main dl > div, main ol > li, main form, main iframe, main details';
    var items = Array.prototype.slice.call(document.querySelectorAll(sel));
    items = items.filter(function (el, i) { return items.indexOf(el) === i && !el.closest('.banner'); });
    var seen = [];
    items.forEach(function (el) {
      el.classList.add('reveal');
      var p = el.parentNode, idx = 0, k;
      for (k = 0; k < seen.length; k++) { if (seen[k] === p) idx++; }
      seen.push(p);
      el.style.transitionDelay = Math.min(idx, 6) * 55 + 'ms';
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
  var SITE = 'De Lachende Tuinman';
  var KEY = 'b7pop_dlt';
  var DEADLINE = new Date('2026-06-25T23:59:59');
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
