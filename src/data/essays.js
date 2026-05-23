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
    slug: 'significance-of-thai-poosam',

    // ── Publication date (ISO 8601) — essays are listed newest first ─────────
    date: '2026-01-15',

    // ── English content ──────────────────────────────────────────────────────
    titleEn:   'The Significance of Thai Poosam',
    excerptEn: 'Thai Poosam marks a sacred alignment of cosmic energies. Understanding its deeper spiritual significance transforms how we approach this holy day.',

    bodyEn: `
## The Cosmic Alignment

Thai Poosam occurs when the moon is in the Pushya (Poosam) star during the Tamil month of Thai (January–February). This is not merely an astronomical event — it represents a precise alignment of inner and outer energies that our ancestors observed and honoured for thousands of years.

The Pushya star is associated with nourishment, spiritual growth, and the light of wisdom. When this star aligns with the full moon in the Tamil month of Thai, it creates what the ancients described as a window of heightened spiritual receptivity.

## The Inner Significance

Beyond the outer observance, Thai Poosam invites us to reflect on the light that exists within each of us. The **Arutperunjothi** — the Infinite Grace Light — is not something distant or external. It is the very basis of our awareness, the silent witness behind all thought and perception.

Thai Poosam is an invitation to turn our attention inward, toward this inner light, and to recognise it as our true nature.

> "The light you seek outside has always been within you. Thai Poosam is the reminder." — Olineri Teachings

## How to Observe Thai Poosam

The outer observance — the lighting of lamps, the singing of devotional songs, the gathering of seekers — is meaningful only when it reflects the inner orientation.

On this day, consider:

- **Morning lamp meditation (Deepa Bavanai):** Begin the day by meditating on the lamp flame for at least 20 minutes
- **Silence and reflection:** Reserve periods of silence to allow the inner stillness to deepen
- **Compassion in action (Jeeva Karunyam):** Offer food or service to those in need — this is the practical expression of inner light

---

Thai Poosam, observed with this inner understanding, becomes not just a festival but a genuine spiritual practice — a day of turning toward the light that never fades.
`,

    // ── Tamil content ─────────────────────────────────────────────────────────
    titleTa:   'தைப்பூசத்தின் முக்கியத்துவம்',
    excerptTa: 'தைப்பூசம் பிரபஞ்ச சக்திகளின் புனித இணைவை குறிக்கிறது. இந்த திருநாளின் ஆழமான ஆன்மீக முக்கியத்துவத்தை உணர்வது நம் அணுகுமுறையை மாற்றும்.',

    bodyTa: `
## பிரபஞ்ச இணைவு

தை மாதம் பூச நட்சத்திரம் கூடும்போது தைப்பூசம் நிகழ்கிறது. இது வெறும் வானியல் நிகழ்வு மட்டுமல்ல — நம் முன்னோர்கள் ஆயிரக்கணக்கான ஆண்டுகளாக கவனித்துப் போற்றிய ஒரு ஆழமான ஆன்மீக இணைவை இது குறிக்கிறது.

பூச நட்சத்திரம் வளர்ச்சி, ஆன்மீக முதிர்ச்சி மற்றும் ஞான ஒளியுடன் தொடர்புடையது. தை மாதத்தில் பௌர்ணமியன்று இந்த நட்சத்திரம் இணையும்போது, பண்டையோர் "ஆன்மீக ஏற்பின் உயர்நிலை" என்று வர்ணித்த ஒரு தருணம் உருவாகிறது.

## உள்ளார்ந்த முக்கியத்துவம்

வெளி வழிபாட்டிற்கு அப்பால், தைப்பூசம் நம் ஒவ்வொருவருக்குள்ளும் உள்ள ஒளியை தியானிக்க அழைக்கிறது. **அருட்பெருஞ்ஜோதி** — பேரருள் ஒளி — தூரத்தில் இருப்பதல்ல. அது நம் உணர்வின் அடிப்படையே, எல்லா சிந்தனைகளுக்கும் பின்னால் இருக்கும் அமைதியான சாட்சியே.

தைப்பூசம் நம் கவனத்தை உள்நோக்கி திருப்ப, இந்த உள் ஒளியை அடையாளம் காண ஒரு அழைப்பு.

> "நீ வெளியில் தேடும் ஒளி எப்போதும் உனக்குள்ளேயே இருந்தது. தைப்பூசம் அதை நினைவூட்டுகிறது." — ஒளிநெறி போதனைகள்

## தைப்பூசத்தை எப்படி கடைப்பிடிப்பது

விளக்கேற்றுதல், பக்திப் பாடல்கள், சாதகர்களின் கூட்டம் — இவை வெளி வழிபாடுகள், உள் நோக்கத்தை பிரதிபலிக்கும்போதே பொருளுடையவை.

இந்நாளில் கவனிக்க:

- **காலை தீப பாவனை:** குறைந்தது 20 நிமிடங்கள் தீப சுடரில் தியானம் செய்யுங்கள்
- **மௌனமும் தியானமும்:** உள் அமைதி ஆழமடைய மௌன நேரங்களை ஒதுக்குங்கள்
- **ஜீவகாருண்யம்:** தேவைப்படுவோருக்கு உணவு அல்லது சேவை வழங்குங்கள் — இதுவே உள் ஒளியின் நடைமுறை வெளிப்பாடு

---

இந்த உள்ளார்ந்த புரிதலுடன் கடைப்பிடிக்கும் தைப்பூசம் வெறும் திருவிழாவல்ல — அது ஒரு உண்மையான ஆன்மீக பயிற்சியாக மாறுகிறது.
`,
  },

  {
    slug: 'jeeva-karunyam-path-to-grace',
    date: '2026-02-10',

    titleEn:   'Jeeva Karunyam: Compassion as the Path to Divine Grace',
    excerptEn: 'Vallalar taught that compassion toward all living beings is not merely a virtue — it is the very gateway through which Divine Grace enters the human heart.',

    bodyEn: `
## What is Jeeva Karunyam?

Jeeva Karunyam literally means "compassion toward all living beings" (Jeeva = living being, Karunyam = compassion). Vallalar placed this at the very centre of his teachings, declaring it the single most important quality a spiritual seeker must cultivate.

This is not the compassion of pity or condescension. It is the recognition that every living being — from the smallest ant to the greatest sage — carries within it the same spark of the Divine, the same Arutperunjothi that we seek in ourselves.

## Why Compassion Opens the Path

Vallalar taught that the human body is a sacred instrument, finely calibrated to receive and express Divine Grace. But this instrument becomes blocked when we cause suffering to other beings — directly or indirectly, consciously or unconsciously.

**The act of causing suffering to another being creates a veil** — between the individual and the inner light. No amount of ritual, meditation, or scripture reading can lift this veil if the heart remains closed to the suffering of others.

Jeeva Karunyam — actively removing the causes of suffering for others — dissolves this veil, allowing the Grace Light to flow unobstructed.

## Practical Expression

Vallalar's approach to Jeeva Karunyam was intensely practical:

1. **Food offering (Annadanam):** Providing food to the hungry was, for Vallalar, the most direct expression of compassion. The hungry body cannot receive spiritual light. Feed the body, and the path to the inner light opens.

2. **Non-harm (Ahimsa):** Avoiding actions that cause suffering to other beings — in diet, in speech, in thought.

3. **Recognising the One in all:** Seeing the same Divine presence in every being, regardless of form, species, or status.

## The Connection to Inner Light

Jeeva Karunyam is not separate from the inner spiritual path — it *is* the inner spiritual path, expressed outwardly. As the heart opens toward all beings, it simultaneously opens toward its own deepest nature.

> "If your heart melts at the suffering of another, know that the Grace Light is already working within you." — Vallalar

---

Begin with small acts. Notice the suffering closest to you. Respond with care. The path of compassion, walked sincerely, leads directly to the heart of the light.
`,

    titleTa:   'ஜீவகாருண்யம்: அருளின் வழி',
    excerptTa: 'அனைத்து உயிரினங்களிடமும் கருணை கொள்வது வெறும் நல்லொழுக்கம் மட்டுமல்ல — அதுவே இறையருள் மனித இதயத்தில் பிரவேசிக்கும் வாயில் என்று வள்ளலார் கூறினார்.',

    bodyTa: `
## ஜீவகாருண்யம் என்றால் என்ன?

ஜீவகாருண்யம் என்பது "அனைத்து உயிரினங்களிடமும் கருணை" என்று பொருள்படும். வள்ளலார் இதை தன் போதனைகளின் மையமாக வைத்தார். ஆன்மீக வழியில் செல்பவர் வளர்க்க வேண்டிய ஒற்றை முக்கியமான குணம் இதுவே என்று அவர் கூறினார்.

இது பரிதாபம் அல்ல, இரக்கம் மட்டுமுமல்ல. சிறிய எறும்பிலிருந்து மாமுனிவர் வரை — ஒவ்வொரு உயிரிலும் அதே தெய்வீக ஒளி, அதே அருட்பெருஞ்ஜோதி இருக்கிறது என்னும் உணர்தலே ஜீவகாருண்யம்.

## கருணை ஏன் வழியை திறக்கிறது

மனித உடல் ஒரு புனிதமான கருவி — இறையருளை ஏற்றுக்கொள்ளவும் வெளிப்படுத்தவும் நுணுக்கமாக அமைக்கப்பட்டது என்று வள்ளலார் கூறினார். ஆனால் நாம் மற்ற உயிர்களுக்கு துன்பம் விளைவிக்கும்போது இந்த கருவி அடைத்துக்கொள்கிறது.

**மற்றொரு உயிருக்கு துன்பம் தருவது ஒரு திரையை உருவாக்குகிறது** — தனிமனிதனுக்கும் உள் ஒளிக்கும் இடையே. இந்த திரையை அகற்றாத வரை எந்த சடங்கும், தியானமும், வேத வாசிப்பும் பயனில்லை.

ஜீவகாருண்யம் — மற்றவர்களின் துன்பத்தை அகற்ற செயல்படுவது — இந்த திரையை கரைக்கிறது. அருள் ஒளி தடையின்றி பாய்கிறது.

## நடைமுறை வெளிப்பாடு

வள்ளலாரின் ஜீவகாருண்யம் மிகவும் நடைமுறையானது:

1. **அன்னதானம்:** பசித்தவருக்கு உணவளிப்பது வள்ளலாருக்கு கருணையின் நேரடி வெளிப்பாடு. பசித்த உடல் ஆன்மீக ஒளியை ஏற்க முடியாது. உடலை போஷி, உள் ஒளியின் வழி திறக்கும்.

2. **அகிம்சை:** உணவில், வார்த்தையில், சிந்தனையில் — மற்ற உயிர்களுக்கு துன்பம் தரும் செயல்களை தவிர்க்கவும்.

3. **எல்லாவற்றிலும் ஒன்றை காணுதல்:** ஒவ்வொரு உயிரிலும் — வடிவம், இனம், நிலை வேறுபாடின்றி — அதே தெய்வீக இருப்பை காணுதல்.

## உள் ஒளியுடன் தொடர்பு

ஜீவகாருண்யம் உள் ஆன்மீக வழியிலிருந்து பிரிந்தது அல்ல — அது வெளியில் வெளிப்படும் ஆன்மீக வழியே. இதயம் எல்லா உயிர்களிடமும் திறக்கும்போது, அது ஒரே நேரத்தில் தன் ஆழமான இயல்பிடமும் திறக்கிறது.

> "மற்றொருவரின் துன்பத்தில் உன் இதயம் கரைந்தால், அருள் ஒளி உனக்குள் ஏற்கனவே செயல்படுகிறது என்று அறிவாய்." — வள்ளலார்

---

சிறிய செயல்களிலிருந்து தொடங்கு. உனக்கு அருகிலிருக்கும் துன்பத்தை கவனி. அக்கறையுடன் செயல்படு. உண்மையாக நடக்கப்படும் கருணையின் வழி, நேரடியாக ஒளியின் இதயத்திற்கு இட்டுச் செல்கிறது.
`,
  },
];