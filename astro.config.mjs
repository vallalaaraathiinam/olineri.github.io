import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
// https://astro.build/config
export default defineConfig({
  site: 'https://olineri.github.io',
  base: '/', // This must match your repo name exactly
  integrations: [tailwind()]
});
