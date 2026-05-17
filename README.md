# QueryCraft SQL Academy

A public-ready static web platform for learning SQL with live browser exercises.

## What is included

- Guided SQL lessons from `SELECT` through `JOIN` and `GROUP BY`
- Three live exercises per topic, with topic-level progress tracking
- Live in-browser SQL runner for beginner-friendly query practice
- Instant exercise validation
- Sample database schema browser
- Local progress saving with `localStorage`
- No backend, no build step, and no paid services required

## Run locally

Open `index.html` in a browser, or serve the folder with any static server:

```bash
python3 -m http.server 8080
```

Then visit `http://localhost:8080`.

## Make it public

Because this is a static site, you can publish it anywhere that hosts HTML, CSS, and JavaScript.

### GitHub Pages

1. Create a new public GitHub repository.
2. Upload `index.html`, `styles.css`, `app.js`, and `README.md`.
3. Open the repository settings.
4. Go to Pages.
5. Choose the main branch and root folder.
6. Save and share the generated public URL.

### Netlify

1. Go to Netlify.
2. Drag this folder into the deploy screen.
3. Share the generated public URL.

### Cloudflare Pages or Vercel

Use these settings:

- Framework preset: none
- Build command: none
- Output directory: root

## Extend the course

Add more lessons in `app.js` by appending to the `lessons` array. Each lesson needs:

- `title`
- `level`
- `body`
- `exercises`

Each exercise needs:

- `title`
- `prompt`
- `starter`
- `hint`
- `solution`
- `expected`

The built-in query engine supports `SELECT`, `FROM`, simple `JOIN`, one-condition `WHERE`, `GROUP BY`, `ORDER BY`, `LIMIT`, `COUNT`, `SUM`, and `AVG`.
