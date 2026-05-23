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
    date:  '2026-01-01',

    titleEn:   'Divine Contemplation on Lamp (Deepa Bavanai)',
    titleTa:   'தீபத்தில் தெய்வ பாவனை',
    excerptEn: 'A step-by-step guide to the foundational practice of Olineri — meditating on the lamp flame to awaken the inner light.',
    excerptTa: 'ஒளிநெறியின் அடிப்படை பயிற்சியான தீப பாவனை — உள் ஒளியை விழிப்படைய தீபத்தின் சுடரில் தியானிப்பதற்கான படிப்படியான வழிகாட்டுதல்.',

    bodyEn: `
## What is Deepa Bavanai?

Deepa Bavanai means Divine Contemplation on the Lamp. It is the foundational practice of Olineri — the act of turning one's complete attention toward the lamp flame and, through it, toward the inner light that the flame represents.

The lamp is not worshipped as an external deity. It is used as a focal point — a tangible, visible symbol of the **Arutperunjothi** (Infinite Grace Light) that resides within every being.

## Why the Lamp?

Our ancestors discovered that the lamp flame has specific qualities that make it uniquely suited for this practice:

- It is **self-luminous** — it does not reflect borrowed light, it generates its own
- It is **steady yet alive** — with the right conditions, a flame barely flickers
- It **consumes itself** to give light — a model of selfless service
- It **points upward** — toward the source

These qualities mirror what the practitioner seeks to cultivate within: a pure, steady, self-generated inner awareness.

## Preparation

Before sitting for Deepa Bavanai, prepare the following:

1. **A clean lamp** — a traditional oil lamp (sesame oil or ghee preferred) or a simple candle
2. **A quiet, undisturbed space** — the same spot each day builds a sanctified atmosphere over time
3. **Clean, comfortable clothing** — loose fitting, not restrictive
4. **An empty or light stomach** — avoid sitting immediately after a full meal

Place the lamp at eye level when seated, approximately 2–3 feet away.

## The Practice

**Step 1 — Settle the body**
Sit comfortably with the spine naturally upright. Take three slow, deep breaths. Let the body become still.

**Step 2 — Soften the gaze**
Open your eyes and look gently at the lamp flame. Do not stare forcefully — let the gaze be soft and receptive, as if you are allowing the flame to enter your vision rather than reaching toward it.

**Step 3 — Withdraw the mind**
As thoughts arise, do not follow them. Simply return attention gently to the flame. The flame is the anchor.

**Step 4 — Deepen into stillness**
Over time, the gap between thoughts lengthens. A quality of quiet presence arises. This is the beginning of the inner light making itself known.

**Step 5 — Close the practice**
After 20–30 minutes, close your eyes. Hold the image of the flame in the mind's eye for a few moments. Then slowly return to ordinary awareness, carrying the stillness with you.

## Duration and Frequency

- **Minimum:** 20 minutes per session
- **Ideal:** 30–45 minutes
- **Frequency:** Daily, preferably at the same time each morning

Consistency matters more than duration. Twenty minutes every day produces deeper results than two hours once a week.

> "The lamp does not ask if you are worthy. It simply burns. Sit before it with the same simplicity." — Olineri Teachings

---

Begin with commitment to just 21 consecutive days. Notice what changes in your quality of attention, your relationships, and your sense of inner steadiness.
`,

    bodyTa: `
## தீப பாவனை என்றால் என்ன?

தீபத்தில் தெய்வ பாவனை என்பது தீபத்தின் சுடரை நோக்கி முழு கவனத்தையும் செலுத்தி, அதன் வழியாக அந்த சுடர் குறிக்கும் உள் ஒளியை நோக்கி செல்வதே. இது ஒளிநெறியின் அடிப்படை பயிற்சி.

தீபம் வெளி தெய்வமாக வழிபடப்படுவதில்லை. அது ஒரு கவன மையமாக பயன்படுகிறது — ஒவ்வொரு உயிரிலும் உள்ள **அருட்பெருஞ்ஜோதியின்** காட்சிப் படிமம்.

## ஏன் தீபம்?

நம் முன்னோர்கள் தீபத்தின் சுடரில் சில தனித்துவமான குணங்கள் இருப்பதை கண்டறிந்தனர்:

- அது **சுய ஒளி கொண்டது** — கடன் வாங்கிய ஒளியல்ல, தன்னிலிருந்தே ஒளி தருகிறது
- அது **நிலையாகவும் உயிரோடும்** எரிகிறது — சரியான சூழலில் சுடர் அசைவதில்லை
- அது **தன்னை மாய்த்துக்கொண்டு** ஒளி தருகிறது — தன்னலமற்ற சேவையின் முன்மாதிரி
- அது **மேல்நோக்கி** சுடர் வீசுகிறது — மூலத்தை நோக்கி

இந்த குணங்கள் பயிற்சியாளர் தனக்குள் வளர்க்க விரும்புவதை பிரதிபலிக்கின்றன.

## தயாரிப்பு

தீப பாவனைக்கு முன்:

1. **சுத்தமான விளக்கு** — எள்ளெண்ணெய் அல்லது நெய் விளக்கு (அல்லது மெழுகுவர்த்தி)
2. **அமைதியான இடம்** — ஒவ்வொரு நாளும் அதே இடம் ஒரு புனித சூழலை உருவாக்கும்
3. **சுத்தமான, தளர்வான உடை**
4. **வெறும் அல்லது இலகுவான வயிறு** — முழு உணவுக்கு பின் உடனே அமராதீர்கள்

விளக்கை கண்ணுயரத்தில், 2–3 அடி தொலைவில் வையுங்கள்.

## பயிற்சி முறை

**படி 1 — உடலை அமைதிப்படுத்துங்கள்**
முதுகு நேராக இருக்கும்படி வசதியாக அமருங்கள். மூன்று ஆழமான மூச்சு எடுங்கள். உடல் அசைவற்று இருக்கட்டும்.

**படி 2 — பார்வையை மென்மையாக்குங்கள்**
கண்களை திறந்து தீபத்தின் சுடரை மென்மையாக பாருங்கள். கண்களை விரிக்காதீர்கள் — சுடர் உங்கள் பார்வையில் வருவதை அனுமதிப்பது போல் பாருங்கள்.

**படி 3 — மனதை திரும்பச் செய்யுங்கள்**
எண்ணங்கள் வரும்போது, அவற்றை பின்பற்றாதீர்கள். மெதுவாக கவனத்தை சுடரிடம் திரும்பச் செய்யுங்கள். சுடரே நங்கூரம்.

**படி 4 — அமைதியில் ஆழுங்கள்**
காலப்போக்கில் எண்ணங்களுக்கு இடையே இடைவெளி அதிகரிக்கும். ஒரு அமைதியான இருப்பு உணர்வு தோன்றும். இதுவே உள் ஒளி தன்னை வெளிப்படுத்தத் தொடங்குவதன் ஆரம்பம்.

**படி 5 — பயிற்சியை முடிக்கவும்**
20–30 நிமிடங்களுக்கு பிறகு கண்களை மூடுங்கள். சில நிமிடங்கள் மனக்கண்ணில் சுடரின் படத்தை வைத்திருங்கள். பின் மெதுவாக சாதாரண நிலைக்கு திரும்புங்கள்.

## காலம் மற்றும் அலவு

- **குறைந்தபட்சம்:** 20 நிமிடங்கள்
- **சிறந்தது:** 30–45 நிமிடங்கள்
- **அலவு:** தினமும், முன்னுரிமையாக காலையில் ஒரே நேரத்தில்

தொடர்ச்சி காலத்தை விட முக்கியம். வாரத்தில் ஒரு முறை இரண்டு மணி நேரம் இருப்பதை விட தினமும் 20 நிமிடங்கள் ஆழமான பலன் தரும்.

> "தீபம் நீ தகுதியானவனா என்று கேட்பதில்லை. அது வெறுமனே எரிகிறது. அதே எளிமையுடன் அதன் முன் அமருங்கள்." — ஒளிநெறி போதனைகள்

---

21 தொடர்ச்சியான நாட்களுக்கு மட்டும் உறுதியுடன் தொடங்குங்கள். உங்கள் கவன தரத்தில், உறவுகளில், உள் நிலைத்தன்மையில் என்ன மாறுகிறது என்று கவனியுங்கள்.
`,
  },

  {
    slug:  'saarbozhukkam',
    date:  '2026-02-01',

    titleEn:   'Relational Ethics Training (Saarbozhukkam)',
    titleTa:   'சார்பொழுக்கப் பயிற்சி',
    excerptEn: 'Saarbozhukkam is the training in right relationship — understanding how our connections with others either obscure or reveal the inner light.',
    excerptTa: 'சார்பொழுக்கம் என்பது சரியான உறவு பற்றிய பயிற்சி — மற்றவர்களுடனான நம் தொடர்புகள் உள் ஒளியை எவ்வாறு மறைக்கின்றன அல்லது வெளிப்படுத்துகின்றன என்பதை புரிந்துகொள்வது.',

    bodyEn: `
## What is Saarbozhukkam?

Saarbozhukkam means relational ethics — the code of right conduct in our relationships. "Saarbu" means dependence or connection; "Ozhukkam" means ethics or right conduct.

Every human being exists in relationship — with family, with community, with nature, and with the Divine. These relationships are not separate from the spiritual path. **They are the spiritual path**, the very arena in which inner growth is tested and expressed.

## Why Relationships Matter Spiritually

Vallalar taught that the inner light is not revealed in isolation. It is revealed in relationship — specifically in how we treat those who depend on us and those on whom we depend.

When we act from selfishness, ego, or indifference in our relationships, we create inner turbulence. When we act from genuine care, honesty, and service, the inner turbulence settles and the light becomes perceptible.

## The Four Relational Fields

Saarbozhukkam addresses four primary areas of relationship:

### 1. Family and Household
The first and most important training ground. How we speak to our spouse, children, and parents — in moments of stress, frustration, or disagreement — reveals our actual inner state more clearly than any meditation session.

### 2. Community and Social Life
How we behave in the marketplace, with neighbours, with strangers. Honesty in transaction, fairness in dealing, respect for those with less power or status.

### 3. Relationship with Nature and Living Beings
Jeeva Karunyam — compassion toward all living beings — is an expression of Saarbozhukkam extended to the natural world. How we treat animals, how we use resources, whether we cause unnecessary suffering.

### 4. Relationship with the Divine
The quality of our inner relationship — our orientation toward the source of grace. This includes regular practice, sincerity in approach, and openness to guidance.

## Practical Training Points

- **Speak truth** — even when it is uncomfortable, speak without cruelty
- **Keep your word** — reliability builds inner integrity
- **Notice reactive patterns** — when someone triggers anger or fear, pause before responding
- **Serve without expectation** — practice giving without keeping score
- **Acknowledge your mistakes** — ego dissolves when we stop defending our errors

---

Saarbozhukkam is not a moral code imposed from outside. It is the natural expression of an awakening inner life — as the inner light grows, right relationship follows naturally.
`,

    bodyTa: `
## சார்பொழுக்கம் என்றால் என்ன?

சார்பொழுக்கம் என்பது உறவு நெறிமுறைகள் — நம் உறவுகளில் சரியான நடத்தையின் விதிமுறை. "சார்பு" என்பது சார்ந்திருத்தல் அல்லது தொடர்பு; "ஒழுக்கம்" என்பது நெறிமுறை அல்லது சரியான நடத்தை.

ஒவ்வொரு மனிதனும் உறவுகளில் வாழ்கிறான் — குடும்பம், சமூகம், இயற்கை, இறைவன். இந்த உறவுகள் ஆன்மீக வழியிலிருந்து தனியானவை அல்ல. **அவையே ஆன்மீக வழி** — உள் வளர்ச்சி சோதிக்கப்படும் மற்றும் வெளிப்படும் களம்.

## உறவுகள் ஏன் ஆன்மீகமாக முக்கியம்

வள்ளலார் கற்பித்தார்: உள் ஒளி தனிமையில் வெளிப்படுவதில்லை. அது உறவுகளில் வெளிப்படுகிறது — குறிப்பாக நம்மை நம்பிக்கொண்டவர்களையும், நாம் நம்பிக்கொண்டவர்களையும் நாம் எவ்வாறு நடத்துகிறோம் என்பதில்.

தன்னலம், அகங்காரம் அல்லது அலட்சியத்திலிருந்து செயல்படும்போது உள் கலக்கம் ஏற்படுகிறது. உண்மையான அக்கறை, நேர்மை, சேவையிலிருந்து செயல்படும்போது உள் கலக்கம் ஆறுகிறது, ஒளி தெரிகிறது.

## நான்கு உறவு களங்கள்

### 1. குடும்பம் மற்றும் இல்லறம்
முதல் மற்றும் மிக முக்கியமான பயிற்சி களம். மன அழுத்தம், விரக்தி, கருத்து வேறுபாட்டின் தருணங்களில் வாழ்க்கைத் துணை, பிள்ளைகள், பெற்றோரிடம் நாம் பேசும் விதம் — எந்த தியானத்தை விடவும் தெளிவாக நம் உள் நிலையை வெளிப்படுத்துகிறது.

### 2. சமூகம் மற்றும் சமூக வாழ்க்கை
சந்தையில், அண்டை வீட்டினரிடம், அறிமுகமில்லாதவரிடம் நடந்துகொள்ளும் விதம். பரிவர்த்தனையில் நேர்மை, குறைந்த அதிகாரம் உள்ளவர்களிடம் மரியாதை.

### 3. இயற்கை மற்றும் உயிரினங்களுடனான உறவு
ஜீவகாருண்யம் — இயற்கை உலகிற்கு நீட்டிக்கப்பட்ட சார்பொழுக்கத்தின் வெளிப்பாடு. விலங்குகளை எவ்வாறு நடத்துகிறோம், வளங்களை எவ்வாறு பயன்படுத்துகிறோம், தேவையற்ற துன்பத்தை ஏற்படுத்துகிறோமா என்பவை.

### 4. இறைவனுடனான உறவு
நம் உள் உறவின் தரம் — அருளின் மூலத்தை நோக்கிய நம் நோக்குநிலை. இதில் தொடர்ந்த பயிற்சி, நேர்மையான அணுகுமுறை, வழிகாட்டுதலுக்கு திறந்த மனம் அடங்கும்.

## நடைமுறை பயிற்சி புள்ளிகள்

- **உண்மை பேசுங்கள்** — கொடுமையின்றி, சங்கடமானாலும் உண்மை பேசுங்கள்
- **வாக்கை காத்துக்கொள்ளுங்கள்** — நம்பகத்தன்மை உள் ஒருமைப்பாட்டை வளர்க்கிறது
- **எதிர்வினை வடிவங்களை கவனியுங்கள்** — யாரோ கோபம் அல்லது பயத்தை தூண்டும்போது, பதில் சொல்வதற்கு முன் நிறுத்துங்கள்
- **எதிர்பார்ப்பின்றி சேவை செய்யுங்கள்**
- **உங்கள் தவறுகளை ஒப்புக்கொள்ளுங்கள்**

---

சார்பொழுக்கம் வெளியிலிருந்து திணிக்கப்பட்ட நெறிமுறை அல்ல. அது விழிப்படையும் உள் வாழ்வின் இயற்கையான வெளிப்பாடு — உள் ஒளி வளரும்போது சரியான உறவு இயல்பாக பின்பற்றும்.
`,
  },
];
