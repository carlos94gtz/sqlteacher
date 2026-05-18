# QueryCraft SQL Academy

A public-ready static web platform for learning SQL with live browser exercises.

## What is included

- Guided SQL lessons from `SELECT` through `JOIN` and `GROUP BY`
- Three live exercises per topic, with topic-level progress tracking
- Live in-browser SQL runner for beginner-friendly query practice
- Instant exercise validation
- Monetization-ready upgrade section for a paid SQL Interview Practice Pack
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

## Monetize the site

The home page includes a premium offer for a one-time SQL Interview Practice Pack.

To activate checkout:

1. Create a Stripe Payment Link for the product.
2. Open `app.js`.
3. Set `monetization.checkoutUrl` to the Stripe Payment Link.
4. Set `monetization.supportEmail` to your support email.
5. Redeploy the site.

Until `checkoutUrl` is set, the button uses a mailto access request so visitors can still express interest.

Suggested first offer:

- Product: SQL Interview Practice Pack
- Price: $19 one time
- Includes: 100 exercises, 25 interview scenarios, cheat sheet, solutions, and certificate template

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
