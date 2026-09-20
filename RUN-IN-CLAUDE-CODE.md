# Run this in Claude Code

This is the Longhorn Publishers website — Vite + React + React Router.

## Start it

```bash
cd longhorn-web
npm install
npm run dev          # http://localhost:5173
```

`npm run build` → `dist/`, `npm run preview` to serve the build.

## What Claude Code should know

- **One stylesheet.** Every token and component style is in `src/styles/app.css`.
  Change the look there, not in the pages.
- **Type:** Archivo 700–800 for headings, Newsreader for body. Loaded from Google
  Fonts in `index.html`. `--font-heading` / `--font-body` in `app.css`.
- **Brand colours:** maroon `#83324E`, green `#80BA27` (mark only — green *text*
  uses `#547C18` on light, `#C1E094` on maroon). Colour is stroke and rule,
  never a solid fill in buttons or cards.
- **Photography** lives in `public/photos/` and is referenced by absolute path
  (`/photos/hero-classroom.png`). Book covers are still `picsum.photos`
  placeholders in `src/data/books.js`.
- **Catalogue filters are URL state** (`src/hooks/useBookFilters.js`) — a filtered
  result is shareable and back/forward works. Don't move it into component state.
- **`RuledGrid`** is the shared wrapping-grid pattern: uniform cell padding, left
  hairline on every cell, grid shifted `-1px` inside `overflow: hidden`. Never
  special-case first/last children.

## Known gaps

- Book titles, prices, ISBNs and news copy are placeholder.
- Forms show a success state but post nowhere.
- `STORE_URL` in `src/pages/Book.jsx` points at a placeholder.
- Fonts are CDN-loaded; self-host before launch.
- SPA fallback must be configured on the host (dev server already does it).
