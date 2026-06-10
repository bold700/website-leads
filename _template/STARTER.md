# Starter-kit voor een nieuwe lead

Zo bouw je snel een nieuwe lead-demo, consistent met de rest.

## Stappen
1. Maak een nieuwe map in de root: `../<lead-naam>/` (kebab-case, bijv. `rij-youyou`).
2. Zet er eerst een `RESEARCH.md` in met de gescrapete info van de huidige site.
3. Kopieer `site.css` en `site.js` uit deze map als startpunt.
4. Pas in `site.js` de `NAV`-array, telefoon/e-mail en footer aan op het bedrijf.
5. Pas in `site.css` de brand-kleur aan (CSS-variabele `--brand-orange`, op één plek).
6. Bouw de pagina's (`index.html` + losse pagina's per menu-item) met:
   - Tailwind via CDN + `site.css` + Inter font in de `<head>`
   - Tailwind-config die de brand-kleur via de CSS-var leest
   - `<div id="site-header"></div>` en `<div id="site-footer"></div>` + `<script src="site.js"></script>`
7. Voeg de lead toe aan de root `index.html` (overzicht) en `README.md` (registry).

## Conventies
- Eén map per lead, self-contained (eigen `site.css`/`site.js`, eigen foto's of Unsplash).
- Relatieve links (`diensten.html`, `site.js`, `favicon.svg`) zodat het in elke submap werkt.
- Brand-kleur altijd via `--brand-orange` (naam historisch; waarde mag elke kleur zijn).
- Foto's: eerst met `curl` op HTTP 200 checken én visueel bekijken vóór gebruik.
- Verifieer kleur/layout met een headless screenshot vóór oplevering.

## Deploy
De hele monorepo draait op GitHub Pages. Een nieuwe lead is na pushen live op:
`https://bold700.github.io/website-leads/<lead-naam>/`
