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

  {
    slug: 'how-to-gain-clarity',
    date: '2026-05-26',

    titleEn: 'What is the path for society to achieving humaneness and gaining clarity?',
    excerptEn: `The possessions acquired through temple worships to meet one's needs, and the intellectual explanations for ignorance gained through ashrams, have failed to satisfy man.`,
    bodyEn: `The possessions acquired through temple worships to meet one's needs, and the intellectual explanations for ignorance gained through ashrams, have failed to satisfy man. They remained merely objects of pursuit. In other words, what he knew and what he attained were not complete. What is it within him that kept prompting him to know more and more to dispel his ignorance? What is it within him that kept prompting him to acquire more and more to fulfill his desires? The lack of clarity regarding these two factors is the root cause of modern man's confusion.

The complete clarity of knowledge and the lasting happiness (enduring bliss) that he searches for actually reside within himself. Man is now realizing that something which exists inside him cannot be searched for and attained through something that exists outside of him. It exists as Divinity within the human being living in physical form. The Divinity that prompted him to know from within has taken the form of "Conscience," and the Divinity that prompted him to attain has taken the form of "Intuition."

If a connection—that is, a relationship—is established with these two, a confused human being will transform into a complete human being. If that relationship is established and allowed to mature, a complete human being will elevate into a great human being (Mahapurusha/Saint). This is the path traversed by the sages. This is the path designed by the Divine.`,

    titleTa: 'மனித சமுதாயம் மனிதத்தன்மை அடைந்து தெளிவாவதற்கான வழி என்ன?',
    excerptTa: 'ஆலய வழிபாடுகள் மூலம் அடைந்த தேவைகளுக்கான உடைமைகளும், ஆசிரமங்கள் மூலம் அறிந்த அறியாமைக்கான அறிவு விளக்கமும் மனிதனை திருப்திப்படுத்த முடியவில்லை.',
    bodyTa: `ஆலய வழிபாடுகள் மூலம் அடைந்த தேவைகளுக்கான உடைமைகளும், ஆசிரமங்கள் மூலம் அறிந்த அறியாமைக்கான அறிவு விளக்கமும் மனிதனை திருப்திப்படுத்த முடியவில்லை. தேடும் பொருளாகவே இருந்தது. அதாவது அவன் அறிந்ததும், அடைந்ததும் முழுமையானதாக இல்லை. அறியாமையை நீக்கிக் கொள்வதற்காக மேலும் மேலும் அவனுக்குள் அறிய தூண்டியது எது? தேவைகளை நிறைவேற்றிக் கொள்வதற்காக மேலும் மேலும் அவனுக்குள் அடைய தூண்டியது எது? இவற்றில் தெளிவில்லாத நிலையே இன்றைய மனிதனின் தெளிவின்மைக்கு காரணம்.

அவன் தேடுகின்ற முழுமையான அறிவுத் தெளிவும், சுகநீட்சியும் (சுகம் நீடித்திருப்பது) அவனுக்குள்ளாகவே இருக்கின்றது. அவனுக்குள்ளாக இருக்கின்ற ஒன்றை அவனுக்கு வெளியே இருக்கின்ற வேறொன்றால் தேடி அடைய முடியாததை மனிதன் உணர்கின்றான். அது வடிவத்தில் வாழ்ந்து கொண்டிருக்கும் மனிதனுக்குள் இறைமையாக இருக்கின்றது. அவனுக்குள் அறியத் தூண்டிய இறைமையானது “மனசாட்சி” ஆகவும், அடையத் தூண்டிய இறைமையானது “உள்ளுணர்வு” ஆகவும் வடிவெடுத்து இருக்கின்றது.

இந்த இரண்டுடனும் தொடர்பு ஏற்பட்டால், அதாவது உறவு ஏற்பட்டால், தெளிவில்லாத மனிதன் முழுமையான மனிதனாக மாறி அமைவான். உறவு ஏற்பட்டு, உறவில் முதிர்ச்சி பெற்றால் முழுமையான மனிதன் மாமனிதனாக உயர்வடைவான். இதுதான் ஞானிகள் பயணித்த பாதை. இதுதான் இறைவன் வகுத்த பாதை.`,
  },

  {
    slug: 'purpose-of-temples-ashrams',
    date: '2026-05-27',

    titleEn: 'What is the purpose of establishing temples and ashrams by our ancestors?',
    excerptEn: 'In ancient times, our ancestors set up symbolic forms and methods of worship in temples and ashrams that taught internal stimulation namely — intellectual stimulation and vibrational/movement stimulation.',
    bodyEn: `In ancient times, our ancestors set up symbolic forms and methods of worship in temples and ashrams that taught internal stimulation namely — intellectual stimulation and vibrational/movement stimulation. Nowadays, such systems have become obsolete. In the present era, commercial motives have proliferated in temples and ashrams. Even so, by going to temples and ashrams, man still finds a sense of relaxation.

Those who wish to travel on a spiritual journey can become disheartened when they are unable to experience a tangible benefit. To prevent them from becoming weary and giving up, and to offer them a period of relaxation in their journey, the Divine made an arrangement known as the subconscious mind. (The explanation of subconscious mind will be answered in the subsequent essays).

To whatever extent a person firmly accepts and believes in ashrams (Gurus) and temples (Deities), to that same extent they will attain relaxation. However, that is only a temporary relaxation; it will not endure continuously. If relaxation is to endure, one must turn inward. For that, one must travel upon the path designed by the Divine and traversed by the sages. This will bring about natural purity and spiritual maturity.

The relaxation offered by the subconscious mind is impermanent. Only natural purity and maturity of mind can provide eternal fulfillment. For this, a change in one's lifestyle is required.

Lifestyle changes include orderly conduct (discipline in action), elimination of negative thoughts, functioning with positive thoughts, accepting what is, sharing the surplus, and setting boundaries for one's needs. Those who do not wish to practice these will wander around merely searching for relaxation. Because such people are in the majority, relaxation centers for them have also emerged in abundance.`,

    titleTa: 'நமது முன்னோர்கள் ஆலயங்கள், ஆசிரமங்கள் இவற்றை ஏற்படுத்தியதன் பயன்பாடு என்ன?',
    excerptTa: 'தொன்மை காலத்தில் அகத்தூண்டலாகிய அறிவுத் தூண்டலையும் மற்றும் அசைவுத் தூண்டலையும் கற்றுத்தரும் குறியீட்டு வடிவங்களையும், வழிபாட்டு முறைகளையும் ஆலயங்களிலும் ஆசிரமங்களிலும் அமைத்துத் தந்து இருந்தார்கள்.',
    bodyTa: `தொன்மை காலத்தில் அகத்தூண்டலாகிய அறிவுத் தூண்டலையும் மற்றும் அசைவுத் தூண்டலையும் கற்றுத்தரும் குறியீட்டு வடிவங்களையும், வழிபாட்டு முறைகளையும் ஆலயங்களிலும் ஆசிரமங்களிலும் அமைத்துத் தந்து இருந்தார்கள். இப்போது அது போன்ற அமைப்புக்கள் வழக்கொழிந்து போய்விட்டது. இன்றைய கால கட்டத்தில் ஆலயங்களிலும் ஆசிரமங்களிலும் வியாபார நோக்கம் பெருகிப் போய்விட்டது. ஆனாலும் மனிதன் ஆலயங்களுக்கும், ஆசிரமங்களுக்கும் செல்வதன் மூலமாக இளைப்பாறுதல் அடைகின்றான்.

ஆன்மீக பயணத்தில் பயணிக்க விரும்புவோர், ஒரு பயனை அனுபவிக்க முடியாமல் போகும்போது தளர்ந்து போய்விடுவார்கள். அப்படி சோர்ந்து தளர்ந்து போகாமல், அவர்களுடைய பயணத்தில் ஒரு இளைப்பாறுதலை தர வேண்டும் என்பதற்காகவே, இறைமை செய்து வைத்த ஏற்பாடுதான் ஆழ்மனப் பதிவு. (ஆழ்மனப் பதிவு விளக்கம் தொடர்ந்து வரும் கட்டுரைகளில் பதிலாக இருக்கும்)

ஒருவன் ஆசிரமங்களையும் (குருமார்களை), ஆலயங்களையும் (தெய்வங்களை) எந்த அளவுக்கு உறுதியாக ஏற்றுக் கொண்டு நம்புகின்றானோ, அந்த அளவுக்கு அவனுக்கு இளைப்பாறுதல் கிடைக்கும். அது தற்காலிக இளைப்பாறுதல் மட்டுமே, தொடர்ந்து நீடிக்காது.இளைப்பாறுதல் நீடிக்க வேண்டுமென்றால் அகம் நோக்கி திரும்ப வேண்டும். அதற்கு, இறைவன் வகுத்த ஞானிகள் பயணித்த பாதையில், அவன் பயணிக்க வேண்டும். இது இயல்பு தூய்மை மற்றும் பக்குவ முதிர்வை ஏற்படுத்தும்.

ஆழ்மனம் தரும் *இளைப்பாறுதல் நித்தியமற்றது*. இயல்பு தூய்மை மற்றும் பக்குவ முதிர்வு மட்டுமே **நித்தியமான நிறைவை** தரும். இதற்கு வாழ்வியல் முறையில் மாற்றம் தேவை.

இயக்க ஒழுங்கு, எதிர்மறை எண்ணம் நீக்கம், நேர்மறை எண்ணங்களுடன் இயங்குதல், இருப்பதை ஏற்றல், எஞ்சியதை ஈதல், தேவைகளுக்கு எல்லை வகுத்தல் ஆகிய இவை போன்றவைகளே வாழ்வியல் மாற்றங்கள். இதனை செய்ய விரும்பாதவர்கள், இளைப்பாறுதலை மட்டும் தேடி அலைவார்கள். இவர்கள் மிகையாக இருப்பதால், இவர்களுக்கான இளைப்பாறுதல் மையங்களும் ஏராளமாக தோன்றின.`,
  },

  {
    slug: 'searching-outside-those-within-inside',
    date: '2026-05-28',

    titleEn: 'What made that which is within (inward), be searched outside (outward)? And why?',
    excerptEn: 'What made the search turn outward is malam (impurity). [Triple bondage of "Aanavam" - Primal Ego, "Kanmam" - Karma, and "Maayai" - Cosmic Illusion].',
    bodyEn: `What made the search turn outward is malam (impurity). [Triple bondage of "Aanavam" - Primal Ego, "Kanmam" - Karma, and "Maayai" - Cosmic Illusion].

The very purpose of human birth is to dissolve this impurity/bondage. Through the experiences gained by interacting with living relationships (people) and material relationships (possessions) in this world, impurities are dissolved. By doing so, man attains clarity of intellect (fulfillment) and order in action (happiness) in life.

The leader of malam is "Agandhai" (Psychological Ego or just "Ego"). It is a combination of two things: "I" and "Mine". From the moment one wakes up in the morning, it is impossible to function without its assistance. It is this ego that identifies and introduces living relationships and material possessions. Therefore, using the aid of "I-and-Mine", man begins to look outward (into the world) to search for the knowledge he wishes to know and the pleasure he wishes to attain.`,

    titleTa: 'அகம் நோக்கி இருப்பதை, புறம் நோக்கி தேட வைத்தது எது? ஏன்?',
    excerptTa: 'புறம் நோக்கி தேடவைத்தது மலம். (ஆணவம், கன்மம், மாயை)',
    bodyTa: `புறம் நோக்கி தேடவைத்தது மலம். (ஆணவம், கன்மம், மாயை)

மனிதன் பிறப்பெடுத்து வந்திருப்பதே மலத்தை கரைப்பதற்காக. உலகில் உள்ள உயிர் உறவுகளையும், உடைமை உறவுகளையும் தொடர்பு கொண்டு பெறுகின்ற அனுபவங்கள் மூலம் மலமானது கரைக்கப்படுகிறது. வாழ்க்கையில் மலத்தை கரைப்பதன் மூலமாக அறிவில் தெளிவையும்(நிறைவு), செயலில் ஒழுங்கையும் (இன்பம்) மனிதன் அடைகின்றான்.

மலத்தின் தலைவன் “அகந்தை” (EGO). இது “நான்” மற்றும் “எனது” ஆகிய இரண்டின் கலவை. காலை விழித்தது முதல் இதன் துணையின்றி இயங்க முடியாது. இதுதான் உயிர் உறவுகள், உடைமை உறவுகள் ஆகியவற்றை அடையாளப்படுத்தி அறிமுகப்படுத்துகின்றது. அதனால் உலகத்தில் தொடர்பு கொண்டு அறிய நினைக்கின்ற அறிவையும், அடைய நினைக்கின்ற சுகத்தையும் “நான்-எனது“ துணைக் கொண்டு புறம்நோக்கி (உலகத்தில்) தேட ஆரம்பிக்கின்றான்.`,
  },

//   {
//     slug: 'what-is-malam',
//     date: '2026-05-29',

//     titleEn: 'What is Malam (Impurity)?',
//     excerptEn: '',
//     bodyEn: `The barrier between God and us is malam (Impurity / Tarnish). The tarnish that has settled upon the soul is malam. Because it is tarnished, the soul — which ought to function by accepting the governance of the Divine — becomes unable to manifest its own true, natural state. Only the soul's true nature can connect it with the Divine.

// The tarnish that has settled upon the soul separates it from God. It is malam that obstructs the manifestation of the soul's true nature. Alternatively, it can be described as compressed particles of darkness, dirt, or tarnish. It is solely to break through these barriers and cleanse itself of this malam, that the soul takes birth in various forms as jeevan (living being). In its tarnished state, the Soul is called a **Jeevan**.`,

//     titleTa: 'மலம் என்றால் என்ன?',
//     excerptTa: 'இறைவனுக்கும் நமக்கும் உள்ள தடையே, மலம். ஆன்மா மீது படிந்த களங்கம், மலம்.',
//     bodyTa: `இறைவனுக்கும் நமக்கும் உள்ள தடையே, மலம். ஆன்மா மீது படிந்த களங்கம், மலம். களங்கப்பட்டதால், இறைமையின் ஆளுமையை ஏற்று இயங்கவேண்டிய ஆன்மா, தனது சுய இயல்பான ஆன்ம இயல்பை வெளிப்படுத்த முடியாமல் போகின்றது. ஆன்ம இயல்பு மட்டுமே ஆன்மாவை இறைவனுடன் இணைக்கும்.

// ஆன்மா மீது படிந்த மலம் இறைவனிடமிருந்து பிரிக்கும். ஆன்ம இயல்பு வெளிப்பாட்டை தடுப்பது மலம். அல்லது அழுத்தம் பெற்ற இருள் துகள்கள், அழுக்கு, களங்கம் என்றும் சொல்லலாம். இந்த தடைகளை உடைத்து மலத்தை நீக்கிக் கொள்ளவே, ஆன்மா ஜீவனாக பல்வேறு நிலைகளில் பிறப்பெடுக்கின்றது. மலம் படிந்த நிலையில் ஆன்மாவுக்கு, ஜீவன் என்று பெயர்.`,
//   },

//   {
//     slug: 'impurity-obstructing-soul-nature',
//     date: '2026-05-30',

//     titleEn: 'How does malam obstruct the true nature of the soul? Explain the characteristics of malam?',
//     excerptEn: '',
//     bodyEn: `The soul, which functions by accepting the governance of the Divine and holding that divine nature as its own true nature, is eternal. It has neither birth nor death. It is the **Root Malam (Primal Bondage)** that limits this soul — which ought to function in divine nature and merge with the Grand Cosmic Vibration — and obstructs it from functioning altogether.

// Malam is an inert matter (jada) devoid of any traits like intelligence, movement, energy, speed, or expansion. It consists of particles of darkness spread throughout the entire universe. Scriptural texts refer to this as **Prakruti**. This can be understood as what modern scientific researchers refer to as **DARK ENERGY*. When wind takes the shape of a massive storm, we see completely stationary objects getting shattered and swept away. In that scenario, the appearance that those stationary objects are moving on their own is false. The movement of malam is exactly like that. The "movement of malam" is merely an effect caused when the Grand Cosmic Vibration travels rapidly through the otherwise stationary particles of dark malam.

// Just as objects scattered by a storm violently pile up haphazardly due to the Earth's gravitational pull, these dark particles are drawn in by the attractive nature of the soul, settling as a layer upon it. Souls that are unable to manifest their true nature due to these layers of malam are called Jeevan or Uyir (living being or spirit). These are **formless spirits**. When these formless spirits take shape as the atoms of the five elements (pancha bhootas) and emerge as **dormant life-forms**, it marks the very first birth of the **Jeevan**.

// When the incarnated souls — the living jeevas — take shape as distinct functional entities, three centers align within them. Because the jeevan possesses these three centers, the Root Malam settled upon it also splits into three functional parts. They are:

// 1. The Intellect-based Stimulation Center: The malam that obstructs this is called Primal Ego (Aanava Malam).
// 2. The Movement-based Action Center: The malam that conflicts with this is called Karma (Kanma Malam).
// 3. The Sharing-based Connection Center: The malam that veils this is called Cosmic Illusion (Maya Malam).

// These three types of malam manifest respectively as the freedom of the soul (jeeva-swatantra), the freedom of consumption/experience (bhoga-swatantra), and the freedom of the physical body (deha-swatantra), serving as the seeds for rebirth. Since these three malams follow the soul through every birth until they are completely eliminated and a birthless state is achieved, this entity can be called the "Root Malam" (Moola Malam). It is in accordance with their maturation — that is, in accordance with their gradual removal — the changes and reductions in births take place.`,

//     titleTa: 'ஆன்ம சுய இயல்பை மலம் எப்படி தடைப்படுத்தியது? மலத்தின் தன்மை, அதன் விளக்கம் என்ன?',
//     excerptTa: 'இறைமையின் ஆளுமையை ஏற்று, அந்த இறை இயல்பை தன் சுய இயல்பாக கொண்டு இயங்கும் ஆன்மா நித்தியமானது. பிறப்பு இறப்பு இல்லாதது.',
//     bodyTa: `இறைமையின் ஆளுமையை ஏற்று, அந்த இறை இயல்பை தன் சுய இயல்பாக கொண்டு இயங்கும் ஆன்மா நித்தியமானது. பிறப்பு இறப்பு இல்லாதது. அவ்வாறு இறை இயல்பில் இயங்கி பேரசைவுடன் இனையவேண்டிய ஆன்மாவை எல்லைப் படுத்தி, இயங்க விடாமல் தடைப்படுத்தியது **மூல மலம்**.

// மலம் என்பது அறிவு, அசைவு, ஆற்றல், வேகம், விரிவு என்ற எந்த தன்மையும் இல்லாத ஜடம். பிரபஞ்சம் முழுவதும் பரவியிருக்கின்ற இருள் துகள்கள். தத்துவ நூல்களில் இதனை **பிரக்ருதி** என்பர். இன்றைய அறிவியல் ஆராய்ச்சியாளர்கள் கூறும் **DARK ENERGY** என்பது இதை குறிப்பதாக எடுத்துக் கொள்ளலாம். காற்று பெரும் புயலாக வடிவெடுக்கும் போது, அசைவற்று கிடந்த பொருட்களெல்லாம் சிதைந்து பறப்பது தெரியும். அங்கு அசைவற்ற பொருட்களெல்லாம் அசைவதாக தோன்றுவது பொய். அதனை போன்றதுதான் மலத்தின் அசைவும். அசைவற்ற மல இருள் துகள்களின் ஊடாக பேரசைவு விரைந்து பயணிக்கும் போது ஏற்பட்ட விளைவுதான் "மல அசைவு".

// புயல் காற்றில் சிதைந்து பறந்த பொருட்கள் பூமியின் ஈர்ப்பு விசையால் ஆங்காங்கே முறையற்று குவிந்து விடுவதை போன்று, ஆன்மாவின் ஈர்த்தல் தன்மையால் இருள் துகள்கள் ஈர்க்கப்பட்டு, ஆன்மா மீது வந்து படிகின்றன. மலப் படிவுகளால் தன் இயல்பை வெளிப்படுத்திட முடியாத ஆன்மாக்கள் தான் ‘ஜீவன்’ என்றும் ‘உயிர்’ என்றும் அழைக்கப்படுகின்றது. இவைகள் **உரு பெறா உயிர்கள்**. உரு பெறா ஜீவன்கள் பஞ்ச பூத அணுக்களாக வடிவெடுத்து **உறைநிலை உயிர்களாக** தோன்றுவதுதான் ஜீவனுக்கான முதல் பிறப்பு.

// பிறப்பெடுத்த ஆன்மாக்கள் அதாவது உயிராகிய ஜீவர்கள் தனித்த இயக்கமாக வடிவெடுக்கும் போது, அவைகளுக்கு மூன்று மையங்கள் அமைந்து விடுகின்றன. ஜீவனுக்கு மூன்று மையங்கள் அமைந்திருப்பதால், ஜீவன் மீது படிந்திருந்த மூலமலமும் மூன்றாக பிரிந்து இயங்குகின்றது. அவைகள்:

// 1. அறிவு வடிவான தூண்டல் மையம். இதனை தடைப்படுத்தும் மலத்திற்கு **ஆணவ மலம்** என்று பெயர்.
// 2. அசைவு வடிவான செயல் மையம். இதனை முரண்படுத்தும் மலத்திற்கு **கன்ம மலம்** என்று பெயர்.
// 3. பகிர்வு வடிவான தொடர்பு மையம். இதனை மறைக்கும் மலத்திற்கு **மாயா மலம்** என்று பெயர்.

// மூன்று வகை மலங்களும் முறையே ஜீவசுதந்திரம், போக சுதந்திரம், தேக சுதந்திரம் என்ற வடிவெடுத்து பிறப்பிற்கு விதையாகின்றது. இந்த மூன்று மலங்களும், முற்றிலும் நீங்கி பிறப்பற்ற நிலை வரும் வரை பிறப்பு தோறும் மலம் தொடர்வதால், இதனை **மூலமலம்** என்று கூறலாம். இவைகளின் பக்குவங்களுக்கு ஏற்பவே அதாவது இவைகள் நீங்குவதற்கு ஏற்பவே பிறப்புக்கள் மாறுவதும், குறைவதும் நிகழ்கின்றன.`,
//   },

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