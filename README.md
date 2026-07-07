# Pipermade website

Marketing site for **Pipermade** — a two-person custom woodworking shop in
Madison, Wisconsin (custom cabinetry, built-ins, and furniture).

Built with [Astro](https://astro.build). Static site — it builds to plain HTML
that can be hosted anywhere (Netlify, Vercel, etc.).

## Running it locally

You need [Node.js](https://nodejs.org) 18+ installed.

```bash
npm install      # first time only — downloads dependencies
npm run dev      # start the local preview at http://localhost:4321
```

Other commands:

```bash
npm run build    # build the finished site into dist/
npm run preview  # preview the built site locally
```

## How it's organized

```
src/
  pages/            Each file is a page (index = Home, work/ = the Work section)
  layouts/          Shared page shell (nav, footer, fonts)
  content/projects/ One Markdown file per project — edit these to change project
                    pages, or add a new .md file to add a project (no code needed)
  assets/projects/  The photos the site uses
  styles/global.css Colors, fonts, and layout
public/             Files served as-is
```

### Adding or editing a project

Each project is a Markdown file in `src/content/projects/`. Copy an existing one,
change the details at the top (title, materials, photos, etc.), put its photos in
`src/assets/projects/<name>/`, and it appears on the Work page automatically.

## Deploying

This is a static Astro site. On Netlify or Vercel, connect this repository and use:

- **Build command:** `npm run build`
- **Publish/output directory:** `dist`
