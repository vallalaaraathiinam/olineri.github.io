import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
// https://astro.build/config
export default defineConfig({
  site: 'https://vallalaaraathiinam.github.io',
  base: '/olineri-website', // This must match your repo name exactly
  integrations: [tailwind()]
});
