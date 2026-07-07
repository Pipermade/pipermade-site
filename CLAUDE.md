# Pipermade Website — Project Brief

This folder contains the approved design prototype and photo library for the new
pipermade.com. The goal: build it out as a real multi-page site. Read this file
and `pipermade-prototype.html` before writing any code — the prototype is the
approved design and its look, palette, type, and copy should be matched exactly.

## The business

Pipermade is a two-person custom woodworking shop in Madison, Wisconsin — Luke
Piper (owner) and Tyler. Formerly part-time custom furniture; now a full-time
practice focused on **high-end custom cabinetry and built-ins**, plus furniture.
Target clients: homeowners doing significant renovations, plus architects,
designers, and builders. Key differentiator: **no automation in the shop** —
every dovetail, mortise, and edge profile is done individually. (The approved
headline for this is "No CNC. No production line. Just handwork." — keep both
phrasings; they're intentional.)

Old site: pipermade.com (Squarespace, furniture-era). It will be replaced.

## Approved design (see pipermade-prototype.html)

- Palette (CSS variables in the prototype are authoritative):
  warm sage background #EDEDD9, warm cream cards #F7F5E6, deep olive-pine
  #2F3A2B, footer pine #242D20, mid moss #4F5C40, ochre-brass accent #B0813A,
  green-black ink #262F1E, warm cream-on-dark #F2ECD6, wood tones #B98F62 /
  #D9BE9A for accents.
- Type: Sorts Mill Goudy (display) + Karla (body/UI), via Google Fonts.
- Signature detail: dovetail-joint seams between page sections (SVG pattern in
  the prototype). Keep this.
- Voice: "we" throughout (two-person shop), except no personal signature lines.
- Hero headline: "Handmade for your home." ("Handmade" italic.)

## Confirmed content (do not change without asking Luke)

- Process steps and timelines: Consultation (week 1), Design & proposal
  (weeks 2–4, fixed price), The build (6–10 weeks, photo updates), Installation
  (1–3 days, installed by us).
- Budget note: built-ins typically begin around $8,500; kitchens around
  $30,000. Free consultation, no obligation.
- Inquiry form budget ranges: $5k–$10k, $10k–$25k, $25k–$50k, $50k–$100k, $100k+.
- Project names: **Vanilla Wardrobe** (pine built-in wardrobe/desk),
  **Bradley Credenza** (black stained maple, walnut, brass — original design),
  walnut cabinetry with ambrosia maple drawer fronts (no confirmed name yet — ask).
- UNCONFIRMED / TODO: the "booking projects for fall 2026" line; the walnut
  cabinetry project name; wood species on the Vanilla Wardrobe (pine assumed);
  details/credits for the Vanilla Wardrobe project (professionally photographed —
  possibly an architect collaboration worth crediting).

## Build plan (agreed)

1. Astro static site, deployed on Netlify (or Vercel). Inquiry form via
   Netlify Forms or Formspree — must email Luke on submission.
2. Pages: Home, Work (index), individual project case-study pages
   (start with Vanilla Wardrobe, Bradley Credenza, walnut cabinetry),
   Process, About, Inquire.
3. Project pages as markdown/content collections so Luke can add projects
   without touching code.
4. Photos live in ./photos — optimize/resize at build time; never ship
   multi-MB originals.
5. Local SEO: titles like "Custom Cabinetry & Built-ins — Madison, WI";
   sensible meta descriptions; single H1 per page.
6. Launch checklist (later): point pipermade.com DNS at the new host, 301
   redirects from old Squarespace URLs, then cancel Squarespace; set up /
   update Google Business Profile.

## Working notes

- Luke is not a developer — explain steps plainly, run the dev server for
  previews, and confirm before anything destructive.
- Photo identification has caused mistakes before: never describe or caption a
  photo without actually viewing it, and when unsure which project a photo
  belongs to, ask Luke instead of guessing.
