import { defineConfig } from 'astro/config';
import alpine from '@astrojs/alpinejs';
import sitemap from '@astrojs/sitemap';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  site: 'https://janwayfarms.netlify.app',
  integrations: [
    tailwind({
      applyBaseStyles: false,
    }),
    alpine({
      entrypoint: '/src/alpine-entrypoint.ts',
    }),
    sitemap(),
  ],
});
