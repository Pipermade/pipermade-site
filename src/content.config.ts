import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

// A "project" is one case-study page. To add a new project, drop a .md file
// into src/content/projects/ with the frontmatter below and put its photos in
// src/assets/projects/<something>/ — no code changes needed.
const projects = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/projects' }),
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      // Lower numbers show first on the Work page and on the homepage.
      order: z.number().default(99),
      category: z.string(), // small brass eyebrow, e.g. "Furniture"
      scope: z.string(), // one-line description under the title
      materials: z.array(z.string()), // e.g. ["Walnut", "Brass"]
      location: z.string().default('Madison, Wisconsin'),
      year: z.string().optional(),
      // Short summary used for the card and the page's meta description.
      summary: z.string(),
      heroImage: image(),
      heroAlt: z.string(),
      // Optional thumbnail for the Work-index card. Defaults to heroImage if unset.
      cardImage: image().optional(),
      cardAlt: z.string().optional(),
      // Extra photos shown in the gallery. Each MUST have alt text.
      gallery: z
        .array(z.object({ src: image(), alt: z.string() }))
        .default([]),
      // Set to true to keep a project out of the live site while you work on it.
      draft: z.boolean().default(false),
    }),
});

export const collections = { projects };
