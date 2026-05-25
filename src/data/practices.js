/**
 * src/data/practices.js
 * ─────────────────────────────────────────────────────────────────────────────
 * Master data file for all spiritual practice guides published by
 * Vallalar Adhiyinam.
 *
 * Both /en/learn/practices and /ta/learn/practices read from this file.
 * Practice detail pages (/en/learn/practices/[slug]) are generated at
 * build time — one [slug].astro file handles ALL practices automatically.
 *
 * To add a new practice:
 *   1. Append a new object to the array below
 *   2. Choose a unique slug (lowercase, hyphens only)
 *   3. Set the date in ISO format (YYYY-MM-DD) — used for sort order
 *   4. Fill in all EN and TA fields
 *   5. Run npm run build — the new practice page is created automatically
 *
 * Slug naming convention:
 *   Use lowercase English words separated by hyphens.
 *   The same slug is used for both /en/ and /ta/ detail pages.
 *   Example: slug 'deepa-bavanai' generates:
 *     /en/learn/practices/deepa-bavanai
 *     /ta/learn/practices/deepa-bavanai
 *
 * Body formatting (Markdown):
 *   Paragraphs      — separate with a blank line
 *   Headings        — ## Heading 2,  ### Heading 3
 *   Bold            — **bold text**
 *   Italic          — *italic text*
 *   Blockquote      — > quoted text
 *   Unordered list  — - item
 *   Ordered list    — 1. item
 *   Horizontal rule — ---
 *   Image           — ![alt text](/images/articles/filename.jpg)
 *                     Place images in public/images/articles/
 * ─────────────────────────────────────────────────────────────────────────────
 */

export const practicesData = [
  {
    slug:  'deepa-bavanai',
    date:  '2026-05-25',

    titleEn:   'Divine Contemplation on Lamp (Deepa Bavanai)',
    titleTa:   'தீபத்தில் தெய்வ பாவனை',
    excerptEn: 'Details will be added soon.',
    excerptTa: 'விவரங்கள் விரைவில் பதிவேற்றப்படும்.',

    bodyEn: 'Details will be added soon.',
    bodyTa: 'விவரங்கள் விரைவில் பதிவேற்றப்படும்.',
  },

  {
    slug:  'saarbozhukkam',
    date:  '2026-05-25',

    titleEn:   'Relational Ethics Training (Saarbozhukkam)',
    titleTa:   'சார்பொழுக்கப் பயிற்சி',
    excerptEn: 'Details will be added soon.',
    excerptTa: 'விவரங்கள் விரைவில் பதிவேற்றப்படும்.',

    bodyEn: `Details will be added soon.`,

    bodyTa: `விவரங்கள் விரைவில் பதிவேற்றப்படும்.`,
  },

  {
    slug:  'aindhozhukkam',
    date:  '2026-05-25',

    titleEn:   'Five-fold Ethics Training (Aindhozhukkam)',
    titleTa:   'ஐந்தொழுக்கப் பயிற்சி',
    excerptEn: 'Details will be added soon.',
    excerptTa: 'விவரங்கள் விரைவில் பதிவேற்றப்படும்.',

    bodyEn: `Details will be added soon.`,

    bodyTa: `விவரங்கள் விரைவில் பதிவேற்றப்படும்.
    `,
  },

  {
    slug:  'manasatchi-payirchi',
    date:  '2026-05-25',

    titleEn:   'Relational Ethics Training (Saarbozhukkam)',
    titleTa:   'மனசாட்சி உறவக பயிற்சி',
    excerptEn: 'Details will be added soon.',
    excerptTa: 'விவரங்கள் விரைவில் பதிவேற்றப்படும்.',

    bodyEn: `Details will be added soon.`,

    bodyTa: `விவரங்கள் விரைவில் பதிவேற்றப்படும்.`,
  },
];
