# Garde‑Malade

Simple Vue 3 + Vite site for a caregiving recruiting service.

What I added:
- Router-based app with a landing `Home` view and a `Contact` form.
- `NavBar` component and basic styling.
- Vite `base` configured for GitHub Pages: `base: '/garde-malade/'`.
- `package.json` includes a `deploy` script using `gh-pages` (`npm run deploy`).

Local development

1. Install dependencies:

```bash
npm install
```

2. Run the dev server:

```bash
npm run dev
```

Open http://localhost:5173 (or the port Vite prints) to view the site.

Build and preview

```bash
npm run build
npm run preview
```

Deploy to GitHub Pages

- Make sure this repository is pushed to GitHub at `https://github.com/<your-username>/garde-malade`.
- The Vite config `base` assumes the repo will be served at `/garde-malade/`. If your repo name differs, update `vite.config.js`.

To publish the `dist` folder to GitHub Pages (this uses the `gh-pages` package):

```bash
npm run deploy
```

This runs `gh-pages -d dist` and publishes to the `gh-pages` branch.

Notes and next steps

- The contact form currently uses a `mailto:` fallback to open the user's email client. If you'd like server-side submission (Netlify Functions, Formspree, or an API), I can wire that up next.
- We can add unit tests, form validation improvements, responsive styles, and content sections next.

# Site
