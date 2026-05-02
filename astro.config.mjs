import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://olineri.org',  // required for sitemap to work
  base: '/',                    // This MUST be just a slash
  integrations: [
    tailwind(), 
    sitemap({
      // Only include canonical English + Tamil pages
      // Exclude the root redirect page (/) from the sitemap
      filter: (page) => !page.endsWith('olineri.org/'),
      
      // Tell Google these are bilingual alternates of each other
      i18n: {
        defaultLocale: 'en',
        locales: {
          en: 'en',
          ta: 'ta',
        },
      },
    }),
  ]
});
