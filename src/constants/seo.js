/**
 * src/constants/seo.js
 * ─────────────────────────────────────────────────────────────────────────────
 * Central store for all SEO-related constants used across the site.
 *
 * Why a separate constants file?
 *   Keeping SEO data here (rather than hardcoded in each page) means:
 *   - A single place to update the site name, URL, or OG image
 *   - All meta descriptions are easy to find, review, and translate
 *   - No risk of inconsistency between pages
 *
 * Exports:
 *   SITE_CONFIG      - Global site metadata (name, URL, OG image, social handle)
 *   SEO_DATA         - Per-page meta descriptions in English and Tamil
 *   CONTACT_DETAILS  - Contact/WhatsApp details used in books and contact pages
 *
 * Usage in BaseLayout.astro:
 *   import { SITE_CONFIG, SEO_DATA } from '../constants/seo';
 *
 * Usage in books.astro:
 *   import { CONTACT_DETAILS } from '../constants/seo';
 * ─────────────────────────────────────────────────────────────────────────────
 */

// ── Site-wide configuration ───────────────────────────────────────────────────
// Used by BaseLayout for OG tags, Schema.org, and Twitter cards.
// Update baseUrl if the domain ever changes.
export const SITE_CONFIG = {
  siteName:      'Vallalar Adhiyinam - Olineri Peedam',
  baseUrl:       'https://olineri.org',

  // Absolute URL to the Open Graph image (shown when links are shared on
  // WhatsApp, Facebook, Twitter, etc.). Recommended size: 1200 x 630 px.
  ogImage:       'https://olineri.org/images/og-main.png',

  // Twitter/X handle — used in twitter:site meta tag
  twitterHandle: '@olineri_peedam',
};


// ── Per-page meta descriptions ────────────────────────────────────────────────
// Structure: SEO_DATA[lang][pageKey]
//
// pageKey is auto-detected in BaseLayout from the URL path segment:
//   /en/about   → pageKey = 'about'
//   /en/        → pageKey = 'index'
//   /ta/books   → pageKey = 'books'
//
// To add a new page:
//   1. Add the page file under src/pages/en/ and src/pages/ta/
//   2. Add matching description entries below in both 'en' and 'ta' objects
//   3. The key must exactly match the URL segment (e.g. 'about', 'contact')
export const SEO_DATA = {
  en: {
    index:    'Welcome to Olineri Peedam, the official spiritual center of Vallalar Adhiyinam following the Path of Light.',
    about:    'Discover the divine significance of our emblem and the mission of Vallalar Adhiyinam in spreading grace.',
    learn:    'Explore the foundational teachings, principles, and spiritual practices of the Sanmarga Path of Light.',
    contact:  'Reach out to Olineri Peedam for inquiries, spiritual guidance, or information about our center location.',
    books:    'Browse our collection of spiritual literature, wisdom books, and publications from Vallalar Adhiyinam.',
    articles: 'Read insightful articles and spiritual discourses on the Path of Light and Sanmarga philosophy.',
    services: 'Explore the spiritual services, community activities, and rituals offered by Olineri Peedam.',
    gallery:  'View photographs and visual highlights from events and spiritual gatherings at Vallalar Adhiyinam.',
    '404':    'The page you are looking for was not found. Please return to the Olineri Peedam home page.',
  },
  ta: {
    index:    'வள்ளலார் ஆதியினத்தின் அதிகாரப்பூர்வ ஆன்மீக மையமான ஒளிநெறி பீடத்திற்கு உங்களை அன்புடன் வரவேற்கிறோம்.',
    about:    'எமது கொள்கை குறியீட்டின் சிறப்பையும், அருளைப் பரப்பும் வள்ளலார் ஆதியினத்தின் நோக்கத்தையும் அறிந்து கொள்ளுங்கள்.',
    learn:    'சன்மார்க்க ஒளிநெறியின் அடிப்படைப் போதனைகள், கொள்கைகள் மற்றும் ஆன்மீகப் பயிற்சிகளைத் தேடி அறியுங்கள்.',
    contact:  'ஆன்மீக வழிகாட்டுதல் மற்றும் எமது மையத்தின் இருப்பிடம் குறித்த தகவல்களுக்கு ஒளிநெறி பீடத்தைத் தொடர்பு கொள்ளுங்கள்.',
    books:    'வள்ளலார் ஆதியினத்தின் ஆன்மீக மற்றும் ஞான நூல்கள், அதனை சார்ந்த வெளியீடுகளை இங்கே காணலாம்.',
    articles: 'ஒளிநெறி மற்றும் சன்மார்க்கத் தத்துவங்கள் குறித்த ஆழமான கட்டுரைகள் மற்றும் ஆன்மீக உரைகளை வாசியுங்கள்.',
    services: 'ஒளிநெறி பீடம் வழங்கும் ஆன்மீகச் சேவைகள், சமூகச் செயல்பாடுகள் மற்றும் பயிற்சி முறைகளை அறிந்து கொள்ளுங்கள்.',
    gallery:  'வள்ளலார் ஆதியினத்தின் ஆன்மீக நிகழ்வுகள் மற்றும் திருவிழாக்களின் புகைப்படக் காட்சிகளைக் கண்டு மகிழுங்கள்.',
    '404':    'நீங்கள் தேடும் பக்கம் காணப்படவில்லை. தயவுசெய்து ஒளிநெறி பீடத்தின் முகப்புப் பக்கத்திற்குத் திரும்புங்கள்.',
  },
};


// ── Contact & WhatsApp order details ──────────────────────────────────────────
// Centralised here so the WhatsApp number and message prefix are updated
// in one place rather than duplicated across books.astro (EN + TA).
//
// Number format: international, no '+', no spaces (WhatsApp API requirement).
// Message prefix: pre-fills the WhatsApp chat with the book title appended.
export const CONTACT_DETAILS = {
  whatsapp_order: {
    number:       '918610692350',                    // International format without '+'
    textPrefixEn: 'I would like to order the book: ',
    textPrefixTa: 'இந்த புத்தகத்தை வாங்க விரும்பிகிறேன்: ',
  },
};
