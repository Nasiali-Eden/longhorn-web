# Longhorn Publishers PLC — website

Vite + React + React Router implementation of the Longhorn website redesign.

## Run

```bash
npm install
npm run dev      # http://localhost:5173
npm run build    # → dist/
npm run preview
```

## Routes

| Route | Page |
| --- | --- |
| `/` | Homepage — hero, quick book finder, audience routes, featured, trust, digital, news |
| `/books` | Catalogue — filters are URL query params (`?country=&curriculum=&grade=&subject=`) |
| `/books/:slug` | Single book — specs, teacher resources, related titles, bookstore handoff dialog |
| `/schools` | For Schools & Teachers — resources row + quotation form |
| `/digital-learning` | LOHO Learning, e-books, support |
| `/about` | Company overview, journey, footprint, subsidiaries, impact, why partner |
| `/news` | News & Insights |
| `/contact` | Offices, enquiry routes, enquiry form |
| `*` | 404 |

Catalogue filter state lives in the URL, so a filtered result is shareable and
back/forward works (`src/hooks/useBookFilters.js`).

## Structure

```
src/
  styles/app.css        all design tokens + component styles (single sheet)
  components/           UtilityBar, SiteHeader, SiteFooter, SectionHeader,
                        RuledGrid, BookCard, BookFilters, ImageWell,
                        PageHeader, Dialog
  hooks/useBookFilters.js
  data/books.js         placeholder catalogue + filter definitions
  data/news.js          placeholder newsroom + About timeline/markets
  pages/                one file per route
```

## Brand

From the Corporate Identity Guidelines:

- **Longhorn Maroon** `#83324E` (Pantone 506) — authority, bands, headings.
- **Longhorn Green** `#80BA27` (Pantone 376) — used as a *mark* (3px rules, kickers,
  hover underlines). Green **text** uses `#547C18` on light grounds and `#C1E094` on
  maroon, because `#80BA27` on white is only ~2.3:1 and fails WCAG.
- Colour is stroke, rule and band — never a solid fill inside buttons or cards.
- **Myriad Pro** is the corporate typeface and has no web licence here.
  The site now sets **Archivo** (700–800) for headings and **Newsreader** for body copy —
  a heavier display voice over an editorial serif. Swap `--font-heading` / `--font-body`
  if Longhorn licenses Myriad Pro for web.
- The logo is never redrawn or recoloured; on dark grounds it sits on a white plate.

### The ruled grid

`RuledGrid` is the pattern used on four pages: every cell has identical padding and a
left hairline, and the grid is shifted `-1px` inside an `overflow: hidden` wrapper so
the leading rule is clipped. That is what keeps columns aligned however the row wraps —
do not special-case first/last children.

## Before launch

- **Replace remaining images.** Site photography now lives in `public/photos/` (real
  generated plates). Book covers are still `picsum.photos` placeholders — swap for
  real Longhorn covers.
- **Replace placeholder copy.** Book titles, prices, ISBNs, news headlines and marketing
  prose are lorem ipsum. Nav labels, buttons, and everything on About and Contact are real.
- Wire the forms to a real endpoint (they currently just show a success state).
- Point `STORE_URL` in `src/pages/Book.jsx` at the real bookstore.
- Swap `src/data/*.js` for the CMS / product feed.
- Self-host the fonts.
- The dev server rewrites unknown paths to `index.html`; configure the same SPA fallback
  on your host, or move to a framework with file-system routing.
