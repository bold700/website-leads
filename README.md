# Website-leads

Demo-websites voor Utrechtse bedrijven met een verouderde of ontbrekende site. Per lead bouwen we een moderne, responsive demo om aan de prospect te tonen.

**Publieke root (promo BOLD700):** https://bold700.github.io/website-leads/
**Intern overzicht (niet publiek gelinkt):** https://bold700.github.io/website-leads/leads.html

> De root is bewust een promotiepagina voor de studio, zodat een prospect die de lead-naam uit de URL haalt geen funnel of andere bedrijven ziet, maar een uitnodiging om contact op te nemen. Het lead-overzicht staat op `leads.html` en wordt nergens publiek gelinkt.

## Structuur
```
website-leads/
├─ index.html          # PUBLIEKE promotiepagina (BOLD700 studio)
├─ leads.html          # INTERN overzicht met links naar alle demo's
├─ _template/          # starter-kit: site.css, site.js + STARTER.md (kopieer per nieuwe lead)
├─ fix-it-all/         # lead 1 — autogarage
├─ rij-youyou/         # lead 2 — rijschool
├─ jaarrondtuinen/     # lead 3 — hovenier
├─ de-lachende-tuinman/ # lead — hovenier Maarssen (statische HTML)
└─ lauteslager/        # lead 4 — makelaar (live demo, navy/goud, sinds 1850)
```
Elke lead-map is self-contained: eigen pagina's, eigen `site.css`/`site.js`, en een `RESEARCH.md` met de gescrapete brongegevens.

## Leads
| Lead | Branche | Status | Demo |
|---|---|---|---|
| Fix-It All | Autogarage Utrecht | ✅ Live demo | [openen](https://bold700.github.io/website-leads/fix-it-all/) |
| Rijschool YOU YOU | Rijschool Utrecht | ✅ Live demo | [openen](https://bold700.github.io/website-leads/rij-youyou/) |
| Jaarrond Tuinen | Hovenier Zeist/Utrecht | ✅ Live demo | [openen](https://bold700.github.io/website-leads/jaarrondtuinen/) |
| De Lachende Tuinman | Hovenier Maarssen | ✅ Live demo | [openen](https://bold700.github.io/website-leads/de-lachende-tuinman/) |
| Lauteslager Makelaars | Makelaar Utrecht | ✅ Live demo | [openen](https://bold700.github.io/website-leads/lauteslager/) |

## Nieuwe lead toevoegen
Zie [`_template/STARTER.md`](_template/STARTER.md).

## Deploy
GitHub Pages (branch `main`, root). Elke `git push` werkt alles bij. Een lead is live op
`https://bold700.github.io/website-leads/<lead-naam>/`.

---
Foto's zijn placeholders (Unsplash); NAP-gegevens worden per lead bevestigd met de klant.
