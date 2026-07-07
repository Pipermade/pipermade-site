import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  site: 'https://pipermade.com',
  // Static output — deploys as plain files to Netlify/Vercel.
  output: 'static',
  image: {
    // Build-time optimization; never ship multi-MB originals.
    responsiveStyles: true,
  },
});
