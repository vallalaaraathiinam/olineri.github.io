/**
 * tailwind.config.mjs
 * ─────────────────────────────────────────────────────────────────────────────
 * Tailwind CSS configuration for olineri.org
 *
 * Tailwind purges (removes) any CSS class not found as a static string
 * in the scanned source files. This keeps the production CSS bundle small.
 *
 * IMPORTANT — The safelist:
 * The scroll-to-top button in BaseLayout adds/removes Tailwind classes
 * dynamically via JavaScript at runtime (not as static strings in source).
 * Tailwind cannot detect these during the build scan, so they would be
 * purged and the button animation would break in production.
 * The safelist forces Tailwind to always include these classes regardless.
 *
 * Docs: https://tailwindcss.com/docs/content-configuration#safelisting-classes
 * ─────────────────────────────────────────────────────────────────────────────
 */

/** @type {import('tailwindcss').Config} */
export default {

  // Tell Tailwind which files to scan for class names.
  // Adjust this glob if new file types are added to the project.
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,ts,tsx}'],

  // Classes added/removed by scrollToTop.js at runtime.
  // Without this list, these classes are purged in production builds,
  // breaking the show/hide animation of the scroll-to-top button.
  safelist: [
    'translate-y-0',   // button visible state  (scrolled down)
    'translate-y-20',  // button hidden state   (at top of page)
    'opacity-0',       // button hidden state   (at top of page)
    'opacity-100',     // button visible state  (scrolled down)
  ],

  theme: {
    extend: {},
  },

  // @tailwindcss/typography provides the 'prose' classes used in essay detail
  // pages to style Markdown-generated HTML (headings, paragraphs, blockquotes,
  // images, lists, horizontal rules) with clean, readable typography.
  plugins: [
    require('@tailwindcss/typography'),
  ],
};
