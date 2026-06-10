/* ===== Gedeelde header, footer en interacties voor alle pagina's ===== */
(function () {
  var TEL_DISPLAY = '030 214 8488';
  var TEL_HREF = 'tel:0302148488';

  var NAV = [
    { href: 'diensten.html', key: 'diensten', label: 'Diensten' },
    { href: 'waarom.html', key: 'waarom', label: 'Waarom' },
    { href: 'reviews.html', key: 'reviews', label: 'Reviews' },
    { href: 'occasions.html', key: 'occasions', label: "Auto's te koop" },
    { href: 'vacature.html', key: 'vacature', label: 'Vacature' },
    { href: 'contact.html', key: 'contact', label: 'Contact' }
  ];

  var active = document.body.getAttribute('data-page') || '';

  var phoneIcon = '<svg class="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.36 1.9.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.9.34 1.85.57 2.81.7A2 2 0 0 1 22 16.92z"/></svg>';

  function deskItem(it) {
    var cls = it.key === active ? 'text-brand-orange' : 'text-white/85 hover:text-brand-orange transition-colors duration-150';
    var cur = it.key === active ? ' aria-current="page"' : '';
    return '<li><a class="' + cls + ' focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-orange rounded px-1 py-1" href="' + it.href + '"' + cur + '>' + it.label + '</a></li>';
  }
  function mobItem(it) {
    var cls = it.key === active ? 'text-brand-orange' : 'text-white/90 hover:bg-white/5';
    return '<li><a class="block rounded px-2 py-3 ' + cls + '" href="' + it.href + '">' + it.label + '</a></li>';
  }

  var header = '' +
    '<header id="header" class="fixed inset-x-0 top-0 z-40 transition-all duration-300">' +
      '<nav class="mx-auto flex max-w-7xl items-center justify-between gap-4 px-5 py-4 lg:px-8" aria-label="Hoofdnavigatie">' +
        '<a href="index.html" class="text-2xl font-extrabold italic tightest text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-orange rounded">Fix-It <span class="text-brand-orange not-italic">All</span></a>' +
        '<ul class="hidden lg:flex items-center gap-7 text-sm font-medium">' + NAV.map(deskItem).join('') + '</ul>' +
        '<div class="flex items-center gap-3">' +
          '<a href="' + TEL_HREF + '" class="hidden sm:inline-flex items-center gap-2 rounded-md bg-brand-orange px-4 py-2.5 text-sm font-semibold text-white shadow-sm transition-all duration-150 hover:bg-brand-orangeDark active:scale-[0.98] focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-orange">' + phoneIcon + 'Bel direct ' + TEL_DISPLAY + '</a>' +
          '<button id="menuBtn" type="button" aria-label="Menu openen" aria-expanded="false" aria-controls="mobileMenu" class="lg:hidden inline-flex h-11 w-11 items-center justify-center rounded-md border border-white/15 text-white hover:bg-white/10 focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-orange"><svg class="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" aria-hidden="true"><path d="M4 6h16M4 12h16M4 18h16"/></svg></button>' +
        '</div>' +
      '</nav>' +
      '<div id="mobileMenu" class="hidden lg:hidden border-t border-white/10 bg-ink-900/98 backdrop-blur px-5 pb-5 pt-2">' +
        '<ul class="flex flex-col text-base font-medium">' + NAV.map(mobItem).join('') + '</ul>' +
        '<a href="' + TEL_HREF + '" class="mt-3 inline-flex w-full items-center justify-center gap-2 rounded-md bg-brand-orange px-4 py-3 text-sm font-semibold text-white hover:bg-brand-orangeDark">Bel direct ' + TEL_DISPLAY + '</a>' +
      '</div>' +
    '</header>';

  function footCol(title, items) {
    return '<nav aria-label="' + title + '"><h4 class="text-sm font-bold">' + title + '</h4><ul class="mt-3 space-y-2 text-sm text-white/55">' + items + '</ul></nav>';
  }
  function fl(href, label) { return '<li><a class="hover:text-brand-orange transition-colors" href="' + href + '">' + label + '</a></li>'; }

  var footer = '' +
    '<footer class="bg-ink-950 text-white">' +
      '<div class="mx-auto max-w-7xl px-5 py-14 lg:px-8">' +
        '<div class="grid grid-cols-2 gap-8 lg:grid-cols-5">' +
          '<div class="col-span-2 lg:col-span-1">' +
            '<div class="text-xl font-extrabold italic tightest">Fix-It <span class="text-brand-orange not-italic">All</span></div>' +
            '<p class="mt-3 text-sm leading-relaxed text-white/50">Service en kwaliteit voor een betaalbare prijs. Sinds 2000.</p>' +
            '<div class="mt-4 flex gap-3">' +
              '<a href="#" aria-label="Facebook" class="inline-flex h-9 w-9 items-center justify-center rounded-full bg-white/5 text-white/70 transition-colors hover:bg-brand-orange hover:text-white"><svg class="h-4 w-4" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg></a>' +
              '<a href="#" aria-label="Instagram" class="inline-flex h-9 w-9 items-center justify-center rounded-full bg-white/5 text-white/70 transition-colors hover:bg-brand-orange hover:text-white"><svg class="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><rect x="2" y="2" width="20" height="20" rx="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none"/></svg></a>' +
              '<a href="#" aria-label="WhatsApp" class="inline-flex h-9 w-9 items-center justify-center rounded-full bg-white/5 text-white/70 transition-colors hover:bg-brand-orange hover:text-white"><svg class="h-4 w-4" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M12 2a10 10 0 0 0-8.5 15.2L2 22l4.9-1.4A10 10 0 1 0 12 2zm0 18a8 8 0 0 1-4.1-1.1l-.3-.2-2.9.8.8-2.8-.2-.3A8 8 0 1 1 12 20zm4.4-6c-.2-.1-1.4-.7-1.6-.8s-.4-.1-.5.1l-.7.9c-.1.2-.3.2-.5.1a6.5 6.5 0 0 1-3.2-2.8c-.1-.2 0-.4.1-.5l.4-.5.2-.4v-.4l-.8-1.8c-.2-.5-.4-.4-.5-.4h-.5a1 1 0 0 0-.7.3 3 3 0 0 0-.9 2.2 5.2 5.2 0 0 0 1.1 2.7 11.8 11.8 0 0 0 4.6 4 5.3 5.3 0 0 0 3.2.7 2.6 2.6 0 0 0 1.7-1.2 2.1 2.1 0 0 0 .1-1.2c0-.1-.2-.2-.5-.3z"/></svg></a>' +
            '</div>' +
          '</div>' +
          footCol('Diensten', fl('diensten.html', 'Reparatie') + fl('diensten.html', 'Onderhoud &amp; APK') + fl('diensten.html', 'Alle merken') + fl('diensten.html', 'Diagnose')) +
          footCol('Over ons', fl('waarom.html', 'Waarom Fix-It All') + fl('reviews.html', 'Reviews') + fl('occasions.html', "Auto's te koop") + fl('vacature.html', 'Vacature') + fl('contact.html', 'Contact')) +
          '<div><h4 class="text-sm font-bold">Contact</h4><ul class="mt-3 space-y-2 text-sm text-white/55"><li>Industrieweg 12</li><li>3542 AD Utrecht</li>' + fl(TEL_HREF, TEL_DISPLAY) + fl('mailto:info@fix-it-all.nl', 'info@fix-it-all.nl') + '</ul></div>' +
          '<div><h4 class="text-sm font-bold">Openingstijden</h4><ul class="mt-3 space-y-2 text-sm text-white/55"><li class="flex justify-between gap-2"><span>Ma - Vr</span><span>08:00 - 17:30</span></li><li class="flex justify-between gap-2"><span>Zaterdag</span><span>09:00 - 13:00</span></li><li class="flex justify-between gap-2"><span>Zondag</span><span>Gesloten</span></li></ul></div>' +
        '</div>' +
        '<div class="mt-12 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-6 text-xs text-white/45 sm:flex-row">' +
          '<p>&copy; <span id="year"></span> Fix-It All. Alle rechten voorbehouden.</p>' +
          '<div class="flex gap-5"><a class="hover:text-white/80 transition-colors" href="#">Privacyverklaring</a><a class="hover:text-white/80 transition-colors" href="#">Algemene voorwaarden</a><a class="hover:text-white/80 transition-colors" href="#">Cookies</a></div>' +
        '</div>' +
      '</div>' +
    '</footer>';

  var toast = '<div id="toast" class="pointer-events-none fixed bottom-5 right-5 z-50 hidden"><div class="pointer-events-auto flex items-center gap-3 rounded-lg border border-ink-border bg-white px-4 py-3 text-sm text-ink-900 shadow-2xl"><svg class="h-6 w-6 text-emerald-500" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><circle cx="12" cy="12" r="10"/><path d="M9 12l2 2 4-4"/></svg><div><p class="font-semibold">Bericht verzonden.</p><p class="text-slate-500">We nemen snel contact op.</p></div></div></div>';

  // ===== Favicon (tab-icoon) op elke pagina =====
  if (!document.querySelector('link[rel="icon"]')) {
    document.head.insertAdjacentHTML('beforeend', '<link rel="icon" type="image/svg+xml" href="favicon.svg" />');
  }

  // ===== Injecteren =====
  var h = document.getElementById('site-header'); if (h) h.outerHTML = header;
  var f = document.getElementById('site-footer'); if (f) f.outerHTML = footer;
  document.body.insertAdjacentHTML('beforeend', toast);

  // ===== Interacties =====
  var headerEl = document.getElementById('header');
  function onScroll() {
    if (window.scrollY > 40) headerEl.classList.add('bg-ink-900/95', 'backdrop-blur', 'shadow-lg', 'shadow-black/20');
    else headerEl.classList.remove('bg-ink-900/95', 'backdrop-blur', 'shadow-lg', 'shadow-black/20');
  }
  window.addEventListener('scroll', onScroll, { passive: true }); onScroll();

  var btn = document.getElementById('menuBtn'), menu = document.getElementById('mobileMenu');
  btn.addEventListener('click', function () {
    var open = menu.classList.toggle('hidden') === false;
    btn.setAttribute('aria-expanded', String(open));
  });
  menu.querySelectorAll('a').forEach(function (a) {
    a.addEventListener('click', function () { menu.classList.add('hidden'); btn.setAttribute('aria-expanded', 'false'); });
  });

  var y = document.getElementById('year'); if (y) y.textContent = new Date().getFullYear();
})();

function handleContact(e) {
  e.preventDefault();
  var t = document.getElementById('toast');
  t.classList.remove('hidden');
  e.target.reset();
  setTimeout(function () { t.classList.add('hidden'); }, 4000);
  return false;
}

/* ===== BOLD700 demo-melding (demo verloopt na 14 dagen) ===== */
(function () {
  var SITE = 'Fix-It All';
  var KEY = 'b7pop_fixall';
  var DEADLINE = new Date('2026-06-24T23:59:59');
  try { var prev = localStorage.getItem(KEY); if (prev && (Date.now() - (+prev)) < 12 * 3600 * 1000) return; } catch (e) {}
  var days = Math.max(0, Math.ceil((DEADLINE - new Date()) / 86400000));
  var datum = DEADLINE.toLocaleDateString('nl-NL', { day: 'numeric', month: 'long' });
  var mail = 'mailto:support@bold700.com?subject=' + encodeURIComponent('Samenwerken: ' + SITE);
  var bel = 'mailto:support@bold700.com?subject=' + encodeURIComponent('Graag een belafspraak: ' + SITE);
  if (!document.getElementById('b7-pop-css')) {
    var st = document.createElement('style'); st.id = 'b7-pop-css';
    st.textContent = "#b7-pop{position:fixed;z-index:2147483000;left:16px;right:16px;bottom:16px;max-width:380px;font-family:'Inter',system-ui,sans-serif;opacity:0;transform:translateY(16px);transition:opacity .4s cubic-bezier(.16,1,.3,1),transform .4s cubic-bezier(.16,1,.3,1)}@media(min-width:640px){#b7-pop{left:auto;width:380px}}#b7-pop.b7-in{opacity:1;transform:none}#b7-pop .b7-card{background:#fff;color:#0f172a;border:1px solid rgba(15,23,42,.08);border-radius:18px;box-shadow:0 24px 60px -15px rgba(0,0,0,.35);padding:20px 18px 16px;position:relative;overflow:hidden}#b7-pop .b7-bar{height:4px;position:absolute;top:0;left:0;right:0;background:linear-gradient(90deg,#CCFF33,#7C6CF6)}#b7-pop .b7-head{display:flex;align-items:center;justify-content:space-between;margin-bottom:10px}#b7-pop .b7-brand{display:flex;align-items:center;gap:7px;font-weight:800;font-size:13px;letter-spacing:-.01em}#b7-pop .b7-dot{width:8px;height:8px;border-radius:50%;background:#CCFF33;box-shadow:0 0 0 3px rgba(204,255,51,.25)}#b7-pop .b7-x{border:0;background:transparent;cursor:pointer;color:#94a3b8;font-size:22px;line-height:1;padding:0 4px;border-radius:8px}#b7-pop .b7-x:hover{background:#f1f5f9;color:#0f172a}#b7-pop h3{font-size:16px;font-weight:700;margin:0 0 6px}#b7-pop p{font-size:13.5px;line-height:1.55;color:#475569;margin:0}#b7-pop .b7-chip{display:inline-flex;align-items:center;gap:6px;margin-top:12px;background:#f1f5f9;color:#0f172a;font-size:12px;font-weight:600;padding:5px 11px;border-radius:99px}#b7-pop .b7-actions{display:flex;flex-direction:column;gap:9px;margin-top:15px}#b7-pop .b7-btn{display:inline-flex;align-items:center;justify-content:center;gap:8px;background:#0f172a;color:#fff;font-size:14px;font-weight:600;padding:11px 16px;border-radius:11px;text-decoration:none;transition:transform .15s ease,background .15s ease}#b7-pop .b7-btn:hover{background:#1e293b;transform:translateY(-1px)}#b7-pop .b7-link{font-size:13px;color:#64748b;text-align:center;text-decoration:none}#b7-pop .b7-link:hover{color:#0f172a}@media(prefers-reduced-motion:reduce){#b7-pop{transition:none}}";
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
