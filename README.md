# Website-leads

Demo-websites voor Utrechtse bedrijven met een verouderde of ontbrekende site. Per lead bouwen we een moderne, responsive demo om aan de prospect te tonen.

**Overzicht (live):** https://bold700.github.io/website-leads/

## Structuur
```
website-leads/
├─ index.html          # overzichtspagina met links naar alle demo's
├─ _template/          # starter-kit: site.css, site.js + STARTER.md (kopieer per nieuwe lead)
├─ fix-it-all/         # lead 1 — autogarage
└─ rij-youyou/         # lead 2 — rijschool (RESEARCH.md klaar, design volgt)
```
Elke lead-map is self-contained: eigen pagina's, eigen `site.css`/`site.js`, en een `RESEARCH.md` met de gescrapete brongegevens.

## Leads
| Lead | Branche | Status | Demo |
|---|---|---|---|
| Fix-It All | Autogarage Utrecht | ✅ Live demo | [openen](https://bold700.github.io/website-leads/fix-it-all/) |
| Rijschool YouYou | Rijschool Utrecht | 🔎 Research klaar, design volgt | — |

## Nieuwe lead toevoegen
Zie [`_template/STARTER.md`](_template/STARTER.md).

## Deploy
GitHub Pages (branch `main`, root). Elke `git push` werkt alles bij. Een lead is live op
`https://bold700.github.io/website-leads/<lead-naam>/`.

---
Foto's zijn placeholders (Unsplash); NAP-gegevens worden per lead bevestigd met de klant.
