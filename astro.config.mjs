import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
import tailwind from "@astrojs/tailwind";

// https://astro.build/config

// https://astro.build/config
import prefetch from "@astrojs/prefetch";

// https://astro.build/config
import image from "@astrojs/image";

// https://astro.build/config
import vercel from "@astrojs/vercel/serverless";

// https://astro.build/config
import partytown from "@astrojs/partytown";

// https://astro.build/config
import svelte from "@astrojs/svelte";

// https://astro.build/config
export default defineConfig({
  site: 'https://divnectar.com',
  markdown: {
    shikiConfig: {
      // Choose from Shiki's built-in themes (or add your own)
      // https://github.com/shikijs/shiki/blob/main/docs/themes.md
      theme: 'dracula',
      // Add custom languages
      // Note: Shiki has countless langs built-in, including .astro!
      // https://github.com/shikijs/shiki/blob/main/docs/languages.md
      langs: [],
      // Enable word wrap to prevent horizontal scrolling
      wrap: true
    }
  },
  integrations: [mdx(), sitemap(), tailwind(), prefetch(), image(), 
  partytown({
    config: { 
      debug: true,
      // forward: ["dataLayer.push"] ,
    },
  }), 
  svelte()],
});