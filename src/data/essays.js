/**
 * src/data/essays.js
 * ─────────────────────────────────────────────────────────────────────────────
 * Master data file for all essays published by Vallalar Adhiyinam.
 *
 * Both /en/learn/essays and /ta/learn/essays read from this file.
 * Essay detail pages (/en/learn/essays/[slug]) are generated at build time
 * from this file — one Astro [slug].astro file handles ALL essays.
 * Adding a new essay here automatically creates its detail page on next build.
 *
 * To add a new essay:
 *   1. Append a new object to the array below
 *   2. Choose a unique slug (URL-friendly, lowercase, hyphens only)
 *   3. Set the date in ISO format (YYYY-MM-DD) — used for sorting
 *   4. Fill in all EN and TA fields
 *   5. Run npm run build — the new essay page is automatically created
 *
 * ── Formatting the body (Markdown) ──────────────────────────────────────────
 * The bodyEn and bodyTa fields support full Markdown syntax:
 *
 *   Paragraphs      — separate with a blank line
 *   Headings        — ## Heading 2,  ### Heading 3
 *   Bold            — **bold text**
 *   Italic          — *italic text*
 *   Blockquote      — > quoted text
 *   Unordered list  — - item one
 *   Ordered list    — 1. item one
 *   Horizontal rule — ---
 *   Image           — ![alt text](/images/learn/filename.jpg)
 *                     Place images in public/images/learn/
 *   Link            — [link text](https://example.com)
 *
 * ── Slug naming convention ───────────────────────────────────────────────────
 * Use lowercase English words separated by hyphens.
 * The same slug is used for both /en/ and /ta/ essay detail pages.
 * Example: slug 'thai-poosam' generates:
 *   /en/learn/essays/thai-poosam
 *   /ta/learn/essays/thai-poosam
 * ─────────────────────────────────────────────────────────────────────────────
 */

export const essaysData = [
  {
    // ── Unique URL identifier — use lowercase, hyphens only ──────────────────
    slug: 'why-people-lost-clarity',

    // ── Publication date (ISO 8601) — essays are listed newest first ─────────
    date: '2026-05-25',

    // ── English content ──────────────────────────────────────────────────────
    titleEn: 'Crowds have swelled in temples in the name of devotion, and in ashrams in the name of wisdom. But what is the reason that human society has lost its humaneness and lost its clarity?',
    excerptEn: 'From atoms to the universe, everything is a mechanism. All mechanisms possess the inherent nature to function. Because they function, they are called mechanisms.',

    bodyEn: `
From atoms to the universe, everything is a mechanism. All mechanisms possess the inherent nature to function. Because they function, they are called mechanisms. We, as human beings, are also a mechanism. We have also been given the ability to drive other mechanisms. No mechanism can function without the support of another, and this includes the human mechanism as well. For a human to function, he needs something else. He considers life-relationships and possessive-relationships to be that "something else" for him. He wanders in search of these two relationships. With the things he has sought and found, he tries to attain pleasure through clarity of action, and fulfillment through clarity of knowledge.

"Life-relationships" can be understood as living mechanisms that relate to humans, while "possessive-relationships" refer to all inanimate objects that assist humans. However, in the effort to seek and attain these relationships, the expected outcome is lost. That is, the hard-earned pleasure disappears, and fulfillment vanishes.

Through both research and experience, man realizes that he cannot achieve this through his efforts alone, and that it can only be attained with the support of something that is more knowledgeable, superior in action, and wiser than himself. Having realized this, he named that entity "God" and built temples to worship it. Through those temples, he attempted to seek what he needed.

Unable to achieve clarity in his actions, he tried to secure permanent pleasure by acquiring his needed possessions with the help of God. Even though he fulfills his needs by going to temples, he is driven back to a state where he must search for needs all over again. Next, the one who failed to achieve fulfillment in knowledge—after experiencing defeat in his own efforts—goes to an ashram in search of wise elders who are mature in knowledge, to attain that mental fulfillment. Even if he finds the fulfillment he sought at the ashram, that attained fulfillment fails to last.

Thus, human society — unable to achieve clarity of action through the multiplication of needs, and unable to achieve fulfillment of mind through the multiplication of knowledge — has lost its humaneness, stumbles, and become bewildered.
    `,

    // ── Tamil content ─────────────────────────────────────────────────────────
    titleTa:   'பக்தி என்ற பெயரில் கோவில்களிலும், ஞானம் என்ற பெயரில் ஆசிரமங்களிலும் கூட்டம் பெருகியுள்ளது. ஆனால் மனித சமுதாயம் மனிதத் தன்மையை இழந்து தெளிவற்று போனதற்கு காரணம் என்ன?',
    excerptTa: 'அணு முதல் அண்டம் வரை உள்ள அனைத்துமே இயக்கங்கள். எல்லா இயக்கங்களும் இயங்கும் தன்மையோடு உள்ளன. இயங்குவதால் அவைகள் இயக்கம். மனிதர்களாகிய நாமும் ஒரு இயக்கம்.',

    bodyTa: `
அணு முதல் அண்டம் வரை உள்ள அனைத்துமே இயக்கங்கள். எல்லா இயக்கங்களும் இயங்கும் தன்மையோடு உள்ளன. இயங்குவதால் அவைகள் இயக்கம். மனிதர்களாகிய நாமும் ஒரு இயக்கம். நமக்கு மற்ற இயக்கங்களை இயக்கும் திறனும் கொடுக்கப்பட்டுள்ளது. எந்த ஒரு இயக்கமும் இன்னொன்றின் துணை இன்றி இயங்க முடியாது. அதில் மனித இயக்கமும் அடங்கும். மனிதன் இயங்க அவனுக்கு இன்னொன்று தேவை. அவனுக்கான இன்னொன்றாக உயிர் உறவுகளையும், உடைமை உறவுகளையும் நினைக்கின்றான். இந்த இரு உறவுகளையும் தேடி அலைகின்றான் அலைந்து தேடியவைகளை கொண்டு செயல் தெளிவின் மூலம் இன்பத்தையும், அறிவுத் தெளிவின் மூலம் நிறைவையும் அடைய முயலுகின்றான். 

உயிர் உறவுகள் என்றால் மனிதனுடன் உறவுக்கொள்ளும் உயிர் இயக்கங்கள் என்றும், உடைமை உறவுகள் என்றால் மனிதனுக்கு உதவும் உயிரற்ற அனைத்து பொருட்கள் என்று புரிந்துக் கொள்ளலாம். உறவுகளை தேடி அடையும் முயற்சியில் எதிர்பார்த்த பயன் கிடைக்காமல் போய்விடுகின்றது. அதாவது முயன்று பெற்ற இன்பம் தொலைந்து போகின்றது மற்றும் நிறைவு நீங்கிவிடுகின்றது. 

தன்னுடைய முயற்சியால் மட்டும் அதை அடைய முடியாது என்பதையும் தன்னை விட அறிவு நிறைந்ததாகவும், செயல் சிறந்ததாகவும், அறிவாளியாகவும் இருக்கின்ற ஒன்றின் துணையோடுதான் அதை அடையமுடியும் என்பதையும் ஆராய்ச்சியாலும், அனுபவத்தாலும் உணர்கின்றான். அவ்வாறு உணர்ந்து, அதற்கு இறைவன் என்ற பெயர் வைத்து, அதை வணங்க ஆலயங்களை அமைத்தான். அந்த ஆலயங்களை கொண்டு அவனுக்கு தேவையானதை தேட முயற்சி செய்தான். 

செயலில் தெளிவை அடையமுடியாமல் போனவன், தேவைக்கான உடைமைகளை இறைவனின் உதவியோடு அடைந்து இன்பத்தை நிலைவாட்ட முயன்றான். ஆலயங்களுக்குச் சென்று தேவைகளை அடைந்தாலும் மீண்டும் தேவைகளை தேட வேண்டும் என்ற நிலைக்கு ஆளாகின்றான். அடுத்து அறிவில் நிறைவை அடையமுடியாமல் போனவன், அவன் முயற்சியில் தோல்வியை கண்ட பிறகு, அறிவில் நிறைவ்டைவதற்காக அறிவில் முதிர்ந்த பெரியோர்களை தேடி ஆசிரமத்துக்கு செல்கின்றான். ஆசிரமத்தில் அவன் தேடிய நிறைவு கிடைத்தாலும், கிடைத்த நிறைவு தொடர முடியாமல் போய்விடுகின்றது.

இப்படி தேவை பெருக்கத்தின் மூலம் செயலில் தெளிவையும், அறிவுப் பெருக்கத்தின் மூலம் அறிவில் நிறைவையும் பெறமுடியாத மனித சமுதாயமானது மனிதத் தன்மையை இழந்து தடுமாறி தெளிவற்று போனது.
    `,
  },
  // {
  //   slug: '',
  //   date: '',

  //   titleEn: '',
  //   excerptEn: '',
  //   bodyEn: ``,

  //   titleTa: '',
  //   excerptTa: '',
  //   bodyTa: ``,
  // },
];