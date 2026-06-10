# Fix-It All — autogarage Utrecht (demo website)

Responsive demo-website voor autogarage **Fix-It All**, gebouwd als presentatie voor de prospect.

**Live:** https://bold700.github.io/fix-it-all/

## Pagina's
- `index.html` — home / overzicht
- `diensten.html` — onderhoud, APK, reparatie, diagnose, airco, banden, schade
- `waarom.html` — over ons, cijfers, certificeringen
- `reviews.html` — klantbeoordelingen (4.6 uit 216)
- `occasions.html` — auto's te koop (filterbaar)
- `vacature.html` — vacature automonteur + sollicitatieformulier
- `contact.html` — gegevens, kaart en contactformulier

## Techniek
- Statische HTML + [Tailwind CSS](https://tailwindcss.com) via CDN, geen build-stap.
- Gedeelde header/footer/toast via `site.js`.
- Brand-kleur staat op één plek: `site.css` (CSS-variabele `--brand-orange`).
- Mobile-first responsive, focus states en `prefers-reduced-motion`.

## Lokaal bekijken
```bash
python3 -m http.server 8099
# open http://localhost:8099
```

## Deploy
Gehost via GitHub Pages (branch `main`, root). Elke `git push` werkt de live site bij.

---
Onderdeel van de website-leads voor Utrechtse bedrijven. Foto's zijn placeholders (Unsplash); NAP-gegevens zijn voorbeeld.
