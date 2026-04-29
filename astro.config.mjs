import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import sitemap from '@astrojs/sitemap';
// https://astro.build/config
export default defineConfig({
  site: 'https://olineri.org',
  base: '/', // This MUST be just a slash
  integrations: [tailwind(), sitemap()]
});