/**
 * astro.config.mjs
 * ─────────────────────────────────────────────────────────────────────────────
 * Astro build configuration for olineri.org
 *
 * Key integrations:
 *   - @astrojs/tailwind  : Utility-first CSS framework
 *   - @astrojs/sitemap   : Auto-generates sitemap-index.xml at build time
 *   - astro-indexnow     : Notifies Bing/Yandex of new/changed URLs after deploy
 *
 * Environment variables required:
 *   - INDEXNOW_KEY       : API key for IndexNow submissions
 *                          Set in .env locally, GitHub Actions secret in CI
 *
 * Docs:
 *   https://docs.astro.build/en/reference/configuration-reference/
 * ─────────────────────────────────────────────────────────────────────────────
 */

import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import sitemap from '@astrojs/sitemap';
import indexnow from 'astro-indexnow';
import { loadEnv } from 'vite';

// Load environment variables from .env before defineConfig runs.
// process.env alone does NOT read .env files — loadEnv() is required here.
// The empty string third argument means: load ALL variables (no prefix filter).
const { INDEXNOW_KEY } = loadEnv(process.env.NODE_ENV ?? 'production', process.cwd(), '');

export default defineConfig({
  // ── Site URL ────────────────────────────────────────────────────────────────
  // Required by @astrojs/sitemap to generate absolute URLs.
  // Must match the live domain exactly (including https, no trailing slash).
  site: 'https://olineri.org',

  // ── Base path ───────────────────────────────────────────────────────────────
  // '/' means the site is deployed at the root of the domain.
  // Change this only if deploying to a subdirectory e.g. '/blog'.
  base: '/',                    // This MUST be just a slash
  
  integrations: [
    
    // Tailwind CSS — scans all src files to purge unused classes at build time
    tailwind(), 

    sitemap({
      // ── Sitemap filter ──────────────────────────────────────────────────────
      // Exclude the root redirect page (/) from the sitemap.
      // The root page just 301-redirects to /en/ and should not be indexed.
      filter: (page) => !page.endsWith('olineri.org/'),
      
      // ── Bilingual i18n ──────────────────────────────────────────────────────
      // Tells the sitemap generator that /en/ and /ta/ are language alternates.
      // This adds <xhtml:link rel="alternate" hreflang="..."> to each URL entry,
      // which prevents Google treating them as duplicate content.
      i18n: {
        defaultLocale: 'en',
        locales: {
          en: 'en',
          ta: 'ta',
        },
      },
    }),
    
    // ── IndexNow ──────────────────────────────────────────────────────────────
    // Automatically pings IndexNow API after each deploy, notifying Bing,
    // Yandex, and others of changed/new URLs. Uses a SHA256 cache file
    // (.astro-indexnow-cache.json) to submit only changed pages, not all URLs.
    // The cache file must be committed to the repo to persist between CI builds.
    indexnow({ 
      host: 'olineri.org',
      key: INDEXNOW_KEY
    }),
  ]
});
