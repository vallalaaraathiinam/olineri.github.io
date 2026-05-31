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
    titleEn: `Crowds have swelled in temples in the name of devotion, and in ashrams in the name of wisdom. But what is the reason that human society has lost its humaneness and lost its clarity?`,
    excerptEn: `From atoms to the universe, everything is a mechanism. All mechanisms possess the inherent nature to function. Because they function, they are called mechanisms.`,

    bodyEn: `
From atoms to the universe, everything is a mechanism. All mechanisms possess the inherent nature to function. Because they function, they are called mechanisms. We, as human beings, are also a mechanism. We have also been given the ability to drive other mechanisms. No mechanism can function without the support of another, and this includes the human mechanism as well. For a human to function, he needs something else. He considers life-relationships and possessive-relationships to be that "something else" for him. He wanders in search of these two relationships. With the things he has sought and found, he tries to attain pleasure through clarity of action, and fulfillment through clarity of knowledge.

"Life-relationships" can be understood as living mechanisms that relate to humans, while "possessive-relationships" refer to all inanimate objects that assist humans. However, in the effort to seek and attain these relationships, the expected outcome is lost. That is, the hard-earned pleasure disappears, and fulfillment vanishes.

Through both research and experience, man realizes that he cannot achieve this through his efforts alone, and that it can only be attained with the support of something that is more knowledgeable, superior in action, and wiser than himself. Having realized this, he named that entity "God" and built temples to worship it. Through those temples, he attempted to seek what he needed.

Unable to achieve clarity in his actions, he tried to secure permanent pleasure by acquiring his needed possessions with the help of God. Even though he fulfills his needs by going to temples, he is driven back to a state where he must search for needs all over again. Next, the one who failed to achieve fulfillment in knowledge—after experiencing defeat in his own efforts—goes to an ashram in search of wise elders who are mature in knowledge, to attain that mental fulfillment. Even if he finds the fulfillment he sought at the ashram, that attained fulfillment fails to last.

Thus, human society — unable to achieve clarity of action through the multiplication of needs, and unable to achieve fulfillment of mind through the multiplication of knowledge — has lost its humaneness, stumbles, and become bewildered.
    `,

    // ── Tamil content ─────────────────────────────────────────────────────────
    titleTa: `பக்தி என்ற பெயரில் கோவில்களிலும், ஞானம் என்ற பெயரில் ஆசிரமங்களிலும் கூட்டம் பெருகியுள்ளது. ஆனால் மனித சமுதாயம் மனிதத் தன்மையை இழந்து தெளிவற்று போனதற்கு காரணம் என்ன?`,
    excerptTa: `அணு முதல் அண்டம் வரை உள்ள அனைத்துமே இயக்கங்கள். எல்லா இயக்கங்களும் இயங்கும் தன்மையோடு உள்ளன. இயங்குவதால் அவைகள் இயக்கம். மனிதர்களாகிய நாமும் ஒரு இயக்கம்.`,

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

    titleEn: `What is the path for society to achieving humaneness and gaining clarity?`,
    excerptEn: `The possessions acquired through temple worships to meet one's needs, and the intellectual explanations for ignorance gained through ashrams, have failed to satisfy man.`,
    bodyEn: `The possessions acquired through temple worships to meet one's needs, and the intellectual explanations for ignorance gained through ashrams, have failed to satisfy man. They remained merely objects of pursuit. In other words, what he knew and what he attained were not complete. What is it within him that kept prompting him to know more and more to dispel his ignorance? What is it within him that kept prompting him to acquire more and more to fulfill his desires? The lack of clarity regarding these two factors is the root cause of modern man's confusion.

The complete clarity of knowledge and the lasting happiness (enduring bliss) that he searches for actually reside within himself. Man is now realizing that something which exists inside him cannot be searched for and attained through something that exists outside of him. It exists as Divinity within the human being living in physical form. The Divinity that prompted him to know from within has taken the form of "Conscience," and the Divinity that prompted him to attain has taken the form of "Intuition."

If a connection—that is, a relationship—is established with these two, a confused human being will transform into a complete human being. If that relationship is established and allowed to mature, a complete human being will elevate into a great human being (Mahapurusha/Saint). This is the path traversed by the sages. This is the path designed by the Divine.`,

    titleTa: `மனித சமுதாயம் மனிதத்தன்மை அடைந்து தெளிவாவதற்கான வழி என்ன?`,
    excerptTa: `ஆலய வழிபாடுகள் மூலம் அடைந்த தேவைகளுக்கான உடைமைகளும், ஆசிரமங்கள் மூலம் அறிந்த அறியாமைக்கான அறிவு விளக்கமும் மனிதனை திருப்திப்படுத்த முடியவில்லை.`,
    bodyTa: `ஆலய வழிபாடுகள் மூலம் அடைந்த தேவைகளுக்கான உடைமைகளும், ஆசிரமங்கள் மூலம் அறிந்த அறியாமைக்கான அறிவு விளக்கமும் மனிதனை திருப்திப்படுத்த முடியவில்லை. தேடும் பொருளாகவே இருந்தது. அதாவது அவன் அறிந்ததும், அடைந்ததும் முழுமையானதாக இல்லை. அறியாமையை நீக்கிக் கொள்வதற்காக மேலும் மேலும் அவனுக்குள் அறிய தூண்டியது எது? தேவைகளை நிறைவேற்றிக் கொள்வதற்காக மேலும் மேலும் அவனுக்குள் அடைய தூண்டியது எது? இவற்றில் தெளிவில்லாத நிலையே இன்றைய மனிதனின் தெளிவின்மைக்கு காரணம்.

அவன் தேடுகின்ற முழுமையான அறிவுத் தெளிவும், சுகநீட்சியும் (சுகம் நீடித்திருப்பது) அவனுக்குள்ளாகவே இருக்கின்றது. அவனுக்குள்ளாக இருக்கின்ற ஒன்றை அவனுக்கு வெளியே இருக்கின்ற வேறொன்றால் தேடி அடைய முடியாததை மனிதன் உணர்கின்றான். அது வடிவத்தில் வாழ்ந்து கொண்டிருக்கும் மனிதனுக்குள் இறைமையாக இருக்கின்றது. அவனுக்குள் அறியத் தூண்டிய இறைமையானது “மனசாட்சி” ஆகவும், அடையத் தூண்டிய இறைமையானது “உள்ளுணர்வு” ஆகவும் வடிவெடுத்து இருக்கின்றது.

இந்த இரண்டுடனும் தொடர்பு ஏற்பட்டால், அதாவது உறவு ஏற்பட்டால், தெளிவில்லாத மனிதன் முழுமையான மனிதனாக மாறி அமைவான். உறவு ஏற்பட்டு, உறவில் முதிர்ச்சி பெற்றால் முழுமையான மனிதன் மாமனிதனாக உயர்வடைவான். இதுதான் ஞானிகள் பயணித்த பாதை. இதுதான் இறைவன் வகுத்த பாதை.`,
  },

  {
    slug: 'purpose-of-temples-ashrams',
    date: '2026-05-27',

    titleEn: `What is the purpose of establishing temples and ashrams by our ancestors?`,
    excerptEn: `In ancient times, our ancestors set up symbolic forms and methods of worship in temples and ashrams that taught internal stimulation namely — intellectual stimulation and vibrational/movement stimulation.`,
    bodyEn: `In ancient times, our ancestors set up symbolic forms and methods of worship in temples and ashrams that taught internal stimulation namely — intellectual stimulation and vibrational/movement stimulation. Nowadays, such systems have become obsolete. In the present era, commercial motives have proliferated in temples and ashrams. Even so, by going to temples and ashrams, man still finds a sense of relaxation.

Those who wish to travel on a spiritual journey can become disheartened when they are unable to experience a tangible benefit. To prevent them from becoming weary and giving up, and to offer them a period of relaxation in their journey, the Divine made an arrangement known as the subconscious mind. (The explanation of subconscious mind will be answered in the subsequent essays).

To whatever extent a person firmly accepts and believes in ashrams (Gurus) and temples (Deities), to that same extent they will attain relaxation. However, that is only a temporary relaxation; it will not endure continuously. If relaxation is to endure, one must turn inward. For that, one must travel upon the path designed by the Divine and traversed by the sages. This will bring about natural purity and spiritual maturity.

The relaxation offered by the subconscious mind is impermanent. Only natural purity and maturity of mind can provide eternal fulfillment. For this, a change in one's lifestyle is required.

Lifestyle changes include orderly conduct (discipline in action), elimination of negative thoughts, functioning with positive thoughts, accepting what is, sharing the surplus, and setting boundaries for one's needs. Those who do not wish to practice these will wander around merely searching for relaxation. Because such people are in the majority, relaxation centers for them have also emerged in abundance.`,

    titleTa: `நமது முன்னோர்கள் ஆலயங்கள், ஆசிரமங்கள் இவற்றை ஏற்படுத்தியதன் பயன்பாடு என்ன?`,
    excerptTa: `தொன்மை காலத்தில் அகத்தூண்டலாகிய அறிவுத் தூண்டலையும் மற்றும் அசைவுத் தூண்டலையும் கற்றுத்தரும் குறியீட்டு வடிவங்களையும், வழிபாட்டு முறைகளையும் ஆலயங்களிலும் ஆசிரமங்களிலும் அமைத்துத் தந்து இருந்தார்கள்.`,
    bodyTa: `தொன்மை காலத்தில் அகத்தூண்டலாகிய அறிவுத் தூண்டலையும் மற்றும் அசைவுத் தூண்டலையும் கற்றுத்தரும் குறியீட்டு வடிவங்களையும், வழிபாட்டு முறைகளையும் ஆலயங்களிலும் ஆசிரமங்களிலும் அமைத்துத் தந்து இருந்தார்கள். இப்போது அது போன்ற அமைப்புக்கள் வழக்கொழிந்து போய்விட்டது. இன்றைய கால கட்டத்தில் ஆலயங்களிலும் ஆசிரமங்களிலும் வியாபார நோக்கம் பெருகிப் போய்விட்டது. ஆனாலும் மனிதன் ஆலயங்களுக்கும், ஆசிரமங்களுக்கும் செல்வதன் மூலமாக இளைப்பாறுதல் அடைகின்றான்.

ஆன்மீக பயணத்தில் பயணிக்க விரும்புவோர், ஒரு பயனை அனுபவிக்க முடியாமல் போகும்போது தளர்ந்து போய்விடுவார்கள். அப்படி சோர்ந்து தளர்ந்து போகாமல், அவர்களுடைய பயணத்தில் ஒரு இளைப்பாறுதலை தர வேண்டும் என்பதற்காகவே, இறைமை செய்து வைத்த ஏற்பாடுதான் ஆழ்மனப் பதிவு. (ஆழ்மனப் பதிவு விளக்கம் தொடர்ந்து வரும் கட்டுரைகளில் பதிலாக இருக்கும்)

ஒருவன் ஆசிரமங்களையும் (குருமார்களை), ஆலயங்களையும் (தெய்வங்களை) எந்த அளவுக்கு உறுதியாக ஏற்றுக் கொண்டு நம்புகின்றானோ, அந்த அளவுக்கு அவனுக்கு இளைப்பாறுதல் கிடைக்கும். அது தற்காலிக இளைப்பாறுதல் மட்டுமே, தொடர்ந்து நீடிக்காது.இளைப்பாறுதல் நீடிக்க வேண்டுமென்றால் அகம் நோக்கி திரும்ப வேண்டும். அதற்கு, இறைவன் வகுத்த ஞானிகள் பயணித்த பாதையில், அவன் பயணிக்க வேண்டும். இது இயல்பு தூய்மை மற்றும் பக்குவ முதிர்வை ஏற்படுத்தும்.

ஆழ்மனம் தரும் *இளைப்பாறுதல் நித்தியமற்றது*. இயல்பு தூய்மை மற்றும் பக்குவ முதிர்வு மட்டுமே **நித்தியமான நிறைவை** தரும். இதற்கு வாழ்வியல் முறையில் மாற்றம் தேவை.

இயக்க ஒழுங்கு, எதிர்மறை எண்ணம் நீக்கம், நேர்மறை எண்ணங்களுடன் இயங்குதல், இருப்பதை ஏற்றல், எஞ்சியதை ஈதல், தேவைகளுக்கு எல்லை வகுத்தல் ஆகிய இவை போன்றவைகளே வாழ்வியல் மாற்றங்கள். இதனை செய்ய விரும்பாதவர்கள், இளைப்பாறுதலை மட்டும் தேடி அலைவார்கள். இவர்கள் மிகையாக இருப்பதால், இவர்களுக்கான இளைப்பாறுதல் மையங்களும் ஏராளமாக தோன்றின.`,
  },

  {
    slug: 'searching-outside-those-within-inside',
    date: '2026-05-28',

    titleEn: `What made that which is within (inward), be searched outside (outward)? And why?`,
    excerptEn: `What made the search turn outward is malam (impurity). [Triple bondage of "Aanavam" - Primal Ego, "Kanmam" - Karma, and "Maayai" - Cosmic Illusion].`,
    bodyEn: `What made the search turn outward is malam (impurity). [Triple bondage of "Aanavam" - Primal Ego, "Kanmam" - Karma, and "Maayai" - Cosmic Illusion].

The very purpose of human birth is to dissolve this impurity/bondage. Through the experiences gained by interacting with living relationships (people) and material relationships (possessions) in this world, impurity are dissolved. By doing so, man attains clarity of intellect (fulfillment) and order in action (happiness) in life.

The leader of malam is "Agandhai" (Psychological Ego or just "Ego"). It is a combination of two things: "I" and "Mine". From the moment one wakes up in the morning, it is impossible to function without its assistance. It is this ego that identifies and introduces living relationships and material possessions. Therefore, using the aid of "I-and-Mine", man begins to look outward (into the world) to search for the knowledge he wishes to know and the pleasure he wishes to attain.`,

    titleTa: `அகம் நோக்கி இருப்பதை, புறம் நோக்கி தேட வைத்தது எது? ஏன்?`,
    excerptTa: `புறம் நோக்கி தேடவைத்தது மலம். (ஆணவம், கன்மம், மாயை)`,
    bodyTa: `புறம் நோக்கி தேடவைத்தது மலம். (ஆணவம், கன்மம், மாயை)

மனிதன் பிறப்பெடுத்து வந்திருப்பதே மலத்தை கரைப்பதற்காக. உலகில் உள்ள உயிர் உறவுகளையும், உடைமை உறவுகளையும் தொடர்பு கொண்டு பெறுகின்ற அனுபவங்கள் மூலம் மலமானது கரைக்கப்படுகிறது. வாழ்க்கையில் மலத்தை கரைப்பதன் மூலமாக அறிவில் தெளிவையும்(நிறைவு), செயலில் ஒழுங்கையும் (இன்பம்) மனிதன் அடைகின்றான்.

மலத்தின் தலைவன் “அகந்தை” (EGO). இது “நான்” மற்றும் “எனது” ஆகிய இரண்டின் கலவை. காலை விழித்தது முதல் இதன் துணையின்றி இயங்க முடியாது. இதுதான் உயிர் உறவுகள், உடைமை உறவுகள் ஆகியவற்றை அடையாளப்படுத்தி அறிமுகப்படுத்துகின்றது. அதனால் உலகத்தில் தொடர்பு கொண்டு அறிய நினைக்கின்ற அறிவையும், அடைய நினைக்கின்ற சுகத்தையும் “நான்-எனது“ துணைக் கொண்டு புறம்நோக்கி (உலகத்தில்) தேட ஆரம்பிக்கின்றான்.`,
  },

  {
    slug: 'what-is-malam',
    date: '2026-05-29',

    titleEn: `What is Malam (Impurity)?`,
    excerptEn: `The barrier between God and us is malam (Cosmic Impurity). The tarnish that has settled upon the soul is malam.`,
    bodyEn: `The barrier between God and us is malam (Cosmic Impurity). The tarnish that has settled upon the soul is malam. Because it is tarnished, the soul — which ought to function by accepting the governance of the Divine — becomes unable to manifest its own true, natural state. Only the soul's true nature can connect it with the Divine.

The tarnish that has settled upon the soul separates it from God. It is malam that obstructs the manifestation of the soul's true nature. Alternatively, it can be described as compressed particles of darkness, dirt, or tarnish. It is solely to break through these barriers and cleanse itself of this malam, that the soul takes birth in various forms as jeevan (living being). In its tarnished state, the Soul is called a **Jeevan**.`,

    titleTa: `மலம் என்றால் என்ன?`,
    excerptTa: `இறைவனுக்கும் நமக்கும் உள்ள தடையே, மலம். ஆன்மா மீது படிந்த களங்கம், மலம்.`,
    bodyTa: `இறைவனுக்கும் நமக்கும் உள்ள தடையே, மலம். ஆன்மா மீது படிந்த களங்கம், மலம். களங்கப்பட்டதால், இறைமையின் ஆளுமையை ஏற்று இயங்கவேண்டிய ஆன்மா, தனது சுய இயல்பான ஆன்ம இயல்பை வெளிப்படுத்த முடியாமல் போகின்றது. ஆன்ம இயல்பு மட்டுமே ஆன்மாவை இறைவனுடன் இணைக்கும்.

ஆன்மா மீது படிந்த மலம் இறைவனிடமிருந்து பிரிக்கும். ஆன்ம இயல்பு வெளிப்பாட்டை தடுப்பது மலம். அல்லது அழுத்தம் பெற்ற இருள் துகள்கள், அழுக்கு, களங்கம் என்றும் சொல்லலாம். இந்த தடைகளை உடைத்து மலத்தை நீக்கிக் கொள்ளவே, ஆன்மா ஜீவனாக பல்வேறு நிலைகளில் பிறப்பெடுக்கின்றது. மலம் படிந்த நிலையில் ஆன்மாவுக்கு, ஜீவன் என்று பெயர்.`,
  },

  {
    slug: 'impurity-obstructing-soul-nature',
    date: '2026-05-29',

    titleEn: `How does malam obstruct the true nature of the soul? Explain the characteristics of malam?`,
    excerptEn: `The soul, which functions by accepting the governance of the Divine and holding that divine nature as its own true nature, is eternal.`,
    bodyEn: `The soul, which functions by accepting the governance of the Divine and holding that divine nature as its own true nature, is eternal. It has neither birth nor death. It is the **Root Malam (Primal Bondage)** that limits this soul — which ought to function in divine nature and merge with the Grand Cosmic Vibration — and obstructs it from functioning altogether.

Malam is an inert matter (jada) devoid of any traits like intelligence, movement, energy, speed, or expansion. It consists of particles of darkness spread throughout the entire universe. Scriptural texts refer to this as **Prakruti**. This can be understood as what modern scientific researchers refer to as **DARK ENERGY*. When wind takes the shape of a massive storm, we see completely stationary objects getting shattered and swept away. In that scenario, the appearance that those stationary objects are moving on their own is false. The movement of malam is exactly like that. The "movement of malam" is merely an effect caused when the Grand Cosmic Vibration travels rapidly through the otherwise stationary particles of dark malam.

Just as objects scattered by a storm violently pile up haphazardly due to the Earth's gravitational pull, these dark particles are drawn in by the attractive nature of the soul, settling as a layer upon it. Souls that are unable to manifest their true nature due to these layers of malam are called Jeevan or Uyir (living being or spirit). These are **formless spirits**. When these formless spirits take shape as the atoms of the five elements (pancha bhootas) and emerge as **dormant life-forms**, it marks the very first birth of the **Jeevan**.

When the incarnated souls — the living jeevas — take shape as distinct functional entities, three centers align within them. Because the jeevan possesses these three centers, the Root Malam settled upon it also splits into three functional parts. They are:

1. The Intellect-based Stimulation Center: The malam that obstructs this is called Primal Ego (Aanava Malam).
2. The Movement-based Action Center: The malam that conflicts with this is called Karma (Kanma Malam).
3. The Sharing-based Connection Center: The malam that veils this is called Cosmic Illusion (Maya Malam).

These three types of malam manifest respectively as the freedom of the soul (jeeva-swatantra), the freedom of consumption/experience (bhoga-swatantra), and the freedom of the physical body (deha-swatantra), serving as the seeds for rebirth. Since these three malams follow the soul through every birth until they are completely eliminated and a birthless state is achieved, this entity can be called the "Root Malam" (Moola Malam). It is in accordance with their maturation — that is, in accordance with their gradual removal — the changes and reductions in births take place.`,

    titleTa: `ஆன்ம சுய இயல்பை மலம் எப்படி தடைப்படுத்தியது? மலத்தின் தன்மை, அதன் விளக்கம் என்ன?`,
    excerptTa: `இறைமையின் ஆளுமையை ஏற்று, அந்த இறை இயல்பை தன் சுய இயல்பாக கொண்டு இயங்கும் ஆன்மா நித்தியமானது. பிறப்பு இறப்பு இல்லாதது.`,
    bodyTa: `இறைமையின் ஆளுமையை ஏற்று, அந்த இறை இயல்பை தன் சுய இயல்பாக கொண்டு இயங்கும் ஆன்மா நித்தியமானது. பிறப்பு இறப்பு இல்லாதது. அவ்வாறு இறை இயல்பில் இயங்கி பேரசைவுடன் இனையவேண்டிய ஆன்மாவை எல்லைப் படுத்தி, இயங்க விடாமல் தடைப்படுத்தியது **மூல மலம்**.

மலம் என்பது அறிவு, அசைவு, ஆற்றல், வேகம், விரிவு என்ற எந்த தன்மையும் இல்லாத ஜடம். பிரபஞ்சம் முழுவதும் பரவியிருக்கின்ற இருள் துகள்கள். தத்துவ நூல்களில் இதனை **பிரக்ருதி** என்பர். இன்றைய அறிவியல் ஆராய்ச்சியாளர்கள் கூறும் **DARK ENERGY** என்பது இதை குறிப்பதாக எடுத்துக் கொள்ளலாம். காற்று பெரும் புயலாக வடிவெடுக்கும் போது, அசைவற்று கிடந்த பொருட்களெல்லாம் சிதைந்து பறப்பது தெரியும். அங்கு அசைவற்ற பொருட்களெல்லாம் அசைவதாக தோன்றுவது பொய். அதனை போன்றதுதான் மலத்தின் அசைவும். அசைவற்ற மல இருள் துகள்களின் ஊடாக பேரசைவு விரைந்து பயணிக்கும் போது ஏற்பட்ட விளைவுதான் "மல அசைவு".

புயல் காற்றில் சிதைந்து பறந்த பொருட்கள் பூமியின் ஈர்ப்பு விசையால் ஆங்காங்கே முறையற்று குவிந்து விடுவதை போன்று, ஆன்மாவின் ஈர்த்தல் தன்மையால் இருள் துகள்கள் ஈர்க்கப்பட்டு, ஆன்மா மீது வந்து படிகின்றன. மலப் படிவுகளால் தன் இயல்பை வெளிப்படுத்திட முடியாத ஆன்மாக்கள் தான் ‘ஜீவன்’ என்றும் ‘உயிர்’ என்றும் அழைக்கப்படுகின்றது. இவைகள் **உரு பெறா உயிர்கள்**. உரு பெறா ஜீவன்கள் பஞ்ச பூத அணுக்களாக வடிவெடுத்து **உறைநிலை உயிர்களாக** தோன்றுவதுதான் ஜீவனுக்கான முதல் பிறப்பு.

பிறப்பெடுத்த ஆன்மாக்கள் அதாவது உயிராகிய ஜீவர்கள் தனித்த இயக்கமாக வடிவெடுக்கும் போது, அவைகளுக்கு மூன்று மையங்கள் அமைந்து விடுகின்றன. ஜீவனுக்கு மூன்று மையங்கள் அமைந்திருப்பதால், ஜீவன் மீது படிந்திருந்த மூலமலமும் மூன்றாக பிரிந்து இயங்குகின்றது. அவைகள்:

1. அறிவு வடிவான தூண்டல் மையம். இதனை தடைப்படுத்தும் மலத்திற்கு **ஆணவ மலம்** என்று பெயர்.
2. அசைவு வடிவான செயல் மையம். இதனை முரண்படுத்தும் மலத்திற்கு **கன்ம மலம்** என்று பெயர்.
3. பகிர்வு வடிவான தொடர்பு மையம். இதனை மறைக்கும் மலத்திற்கு **மாயா மலம்** என்று பெயர்.

மூன்று வகை மலங்களும் முறையே ஜீவசுதந்திரம், போக சுதந்திரம், தேக சுதந்திரம் என்ற வடிவெடுத்து பிறப்பிற்கு விதையாகின்றது. இந்த மூன்று மலங்களும், முற்றிலும் நீங்கி பிறப்பற்ற நிலை வரும் வரை பிறப்பு தோறும் மலம் தொடர்வதால், இதனை **மூலமலம்** என்று கூறலாம். இவைகளின் பக்குவங்களுக்கு ஏற்பவே அதாவது இவைகள் நீங்குவதற்கு ஏற்பவே பிறப்புக்கள் மாறுவதும், குறைவதும் நிகழ்கின்றன.`,
  },

  {
    slug: 'how-to-remove-malam',
    date: '2026-05-31',

    titleEn: `What are the provisions made by the Divine to remove the Cosmic Impurity (Malam) that obstructs the expression of the soul's true nature? How will it be eliminated?`,
    excerptEn: `Our soul is inherently omniscient and divine in nature. However, it is obscured by Cosmic Impurity (Malam). The soul cannot remove this impurity on its own.`,
    bodyEn: `Our soul is inherently omniscient and divine in nature. However, it is obscured by Cosmic Impurity (Malam). The soul cannot remove this impurity on its own. Saiva Siddhanta texts offer a beautiful analogy for this: Like the **encrustation on copper**. Just as the green tarnish (rust) coexists naturally with copper from its inception, and just as the husk coexists with the paddy grain, this Cosmic Impurity has been bound to the soul since time immemorial.
Let us see in detail the highly potent provisions made by the Divine to remove this deep-seated impurity and purify the soul.

#### 1. Provisions Made by the Divine to Remove Cosmic Impurity - Birth and Death
The soul cannot eliminate its intense, deep-seated impurity by standing alone. It is only when it unites with other souls (fellow human beings and living creatures in the world) to share worldly duties and tasks, that this impurity begins to dissolve little by little. The supreme grace shown by the Divine for this purpose is the arrangement called **Birth** (incarnation).

If a washerman strikes a dirty cloth against bare ground, the dirt will not go away. It requires a rock (a washing stone). Similarly, the **Earth and Birth** is the rock provided by the Divine to shed the soul's Cosmic Impurity.

While trying to eliminate the impurity during a particular birth, a stage is reached where the body experiences exhaustion, decay, and a sense of helplessness ("incapacity") — feeling **I can do no more**. When it tires out in this manner, **Death** is the intermission granted by the Divine to give rest to the soul, only to grant it a new body with renewed freshness.

Simple Analogy: When a child gets exhausted after studying and playing all day, the mother puts her to sleep. The next morning, the child wakes up refreshed and continues her duties. Here, "sleep" is akin to death, and "the next morning" is akin to a new birth.

#### 2. The Tools Provided to Us by the Divine

  The Divine does not merely grant a body and physical instruments at birth. It has also arranged worldly relationships, events for sharing within those relationships, and the consumption of experiences to dissolve impurity through those events. This constitutes a complete **Life Toolkit** (Vaazhkai Pettagam) to dissolve impurity. It consists of five components:
  
  1. Thanu (Body/Physical Form): A physical vehicle given to the soul to reside in and to interact with the world (Physical Body).
  2. Karanam (Bodily Instruments): A mere body is not enough; tools like the mind (Manam), intellect (Buddhi), subconscious (Chittam), ego (Ahankaram), along with organs of perception (Gnanendriyas like eyes, ears, nose, tongue) and organs of action (Karmendriyas) are provided to think and function.
  3. Bhuvanam (World/Environment): The universe and worldly society created by the Divine for us to live and interact with fellow human beings. This can also be understood as the sphere or stage where the soul functions.
  4. Bhogam (Objects of Experience): The worldly objects, relationships, and situations provided by the Divine that bring pleasure and pain for the soul to experience in worldly life (Objects of Experience).
  5. Thuyppu (Experience/Consumption): The direct experiences (pleasure and pain) obtained by the soul by interacting with those given worldly objects (Bhogam) and situations.

To remove the husk from a paddy grain, one must place it in a mortar and pound it with a pestle. Just as the pestle, mortar, and the act of pounding help remove the husk, the life experiences occurring through Thanu, Karanam, Bhuvanam, and Bhogam gradually dissolves the soul's impurity. Since the Divine holds absolute sovereignty (Authority) over the soul, passing through these five stages to dissolve impurity becomes the soul's mandatory duty.

#### 3. The Three Stages of Elimination of Cosmic Impurity (Evolution of the Soul)
Since the impurity enveloping the soul is extremely dense and deep-seated, it cannot be eliminated in a single birth or all of a sudden. The impurity reaches a state of total elimination only after passing through three major stages over several births (incarnations):

  ![alt](/images/essays/evolution-of-soul-en.jpg)

A) Layered State (Static/Elemental Form of Life - Urai Nilai Uyir)
  - In the initial phase, the impurity is extremely dense and thick.
  - At this stage, the souls exist without any movement, taking sequential forms as elemental atoms of the five primordial elements (Panchabhootas—a combination of Earth, Water, Fire, Air, and Space).
  - These are called **Static/Dormant Souls**. This is where the most foundational spiritual maturity of the soul begins.

B) Slackened State (Cellular/Animal Form of Life - Thalarvu Nilai Uyir)
  - After attaining a degree of maturity from being elemental atoms, the intensity of the Malam slackens (loosens up).
  - Consequently, souls take birth as living organisms ranging from one-sensed to five-sensed creatures, such as plants, worms, insects, fish, birds, and animals.
  - These are called **Sentient/Living Souls** (Uyirppu Nilai Uyirgal).

C) Elimination State (Human Form of Life - Uyar Nilai Uyir)
  - It is only after attaining maturity through the Layered and Slackened states across millions of births that the soul finally attains a **Human Birth**.
  - It is precisely in human birth that the impurity reaches the Elimination State, where it can completely detach from the soul.
  - This is why humans are called **Advanced/High-level Souls** (Uyar Nilai Uyirgal).

#### 4. The Final State: The Great Human and the State of the Sage (State of Salvation)
Human birth is the ultimate opportunity to completely dissolve Cosmic Impurity. When a human being attains spiritual maturity in life and their impurity dissolves entirely, a monumental transformation takes place within them:

  - The Great Human (Souls in the State of Salvation - Uyvu Nilai Uyirgal): A human being liberated from impurity rises above the ordinary human state to become a **Great Human** (Maamanithan). That is, a soul that has successfully crossed (and been saved from) the great ocean of birth.

  - The State of the Sage (The Playground of the Divine): When the impurity dissolves completely, the hitherto hidden inherent nature of the soul (Divine Nature) manifests fully. Now, that soul adopts and operates purely under the inherent nature of the Divine.

Simple Analogy: Sunlight cannot be seen through a dirt-stained mirror. As you wipe the mirror continuously, the light slowly begins to break through (the maturity process up to human birth). When the mirror becomes completely immaculate and the dirt is entirely removed, the sun's light not only reflects in that mirror, but the mirror itself becomes one with the sunlight.

Similarly, when the Cosmic Impurity is completely dissolved, the soul transforms into an **Instrument of the Divine** (Iraivayin Iyakka Kalam). Our ancestors called this sublime, exalted state **The State of the Sage** (Gnaniyar Nilai).
`,
    titleTa: `ஆன்மாவின் இயல்பு வெளிப்பாட்டைத் தடைப்படுத்தும் மலத்தை நீக்குவதற்காக இறைமை செய்த ஏற்பாடுகள் என்ன? அது எவ்வாறு வெளியேறும்?`,
    excerptTa: `நம்முடைய ஆன்மா இயற்கையிலேயே பேரறிவு உடையது, தெய்வீகத் தன்மை வாய்ந்தது. ஆனால், அப்படிப்பட்ட ஆன்மாவை "மலம்" (Cosmic Impurity) மறைத்துக் கொண்டிருக்கிறது.`,
    bodyTa: `நம்முடைய ஆன்மா இயற்கையிலேயே பேரறிவு உடையது, தெய்வீகத் தன்மை வாய்ந்தது. ஆனால், அப்படிப்பட்ட ஆன்மாவை "மலம்" (Cosmic Impurity) மறைத்துக் கொண்டிருக்கிறது. இந்த மலத்தை ஆன்மாவால் தானாகவே நீக்கிக் கொள்ள முடியாது. சைவ சித்தாந்த நூல்கள் இதற்கு ஒரு அழகான உதாரணம் சொல்லும்: **செம்பில் களிம்பு போல**. செம்பில் பச்சை நிறக் களிம்பு (துரு) எப்படி அதனோடு ஒட்டியே பிறக்கிறதோ, நெல்லோடு உமி எப்படி ஒட்டியே பிறக்கிறதோ, அப்படி ஆன்மாவோடு இந்த மலம் பிறப்பற்ற காலத்திலிருந்தே ஒட்டி நிற்கிறது.
இந்த அழுத்தமான அழுக்கை நீக்கி, ஆன்மாவைத் தூய்மைப்படுத்த இறைவன் செய்த பேராற்றல் மிக்க ஏற்பாடுகளைப் பற்றி இங்கு விரிவாகக் காண்போம்.

#### 1. மலத்தை நீக்க இறைமை செய்த ஏற்பாடுகள் - பிறப்பும் மரணமும்
  
  ஆன்மா தன் மேல் உள்ள அழுத்தமான மலத்தைத் தனித்து நின்று போக்க முடியாது. மற்ற ஆன்மாக்களோடு (உலகில் உள்ள சக மனிதர்கள் மற்றும் உயிர்களோடு) இணைந்து, உலகியல் கடமைகளையும் பணிகளையும் பகிர்ந்து கொள்ளும் போதுதான் இந்த மலம் கொஞ்சம் கொஞ்சமாகக் கரையத் தொடங்கும். இதற்காக இறைவன் காட்டிய பெருங்கருணைதான் **பிறவி** என்னும் ஏற்பாடு.

  துணி துவைக்கும் தொழிலாளி, அழுக்குத் துணியை வெறும் தரையில் அடித்தால் அழுக்கு போகாது. அதற்கு ஒரு பாறை (வண்ணாரக் கல்) தேவைப்படுகிறது. அதுபோல, ஆன்மாவின் மலத்தை உதிர்ப்பதற்கு இறைவன் கொடுத்த பாறைதான் இந்த **பூமி மற்றும் பிறவி**.
  
  ஒரு பிறவியில் ஆன்மா மலத்தை நீக்க முயலும் போது, ஒரு கட்டத்தில் உடலுக்குச் சோர்வும் தளர்ச்சியும், **இனி என்னால் முடியாது** என்ற பலவீனமும் (முடியாமை) வந்துவிடுகிறது. அப்படி சோர்வடையும் போது, ஆன்மாவிற்கு ஓய்வு தந்து, மீண்டும் புத்துணர்ச்சியோடு புதிய உடலைத் தருவதற்காக இறைவன் தரும் இடைவேளைதான் **மரணம்**.
  
  எளிமையான உதாரணம்: ஒரு குழந்தை பகல் முழுவதும் படித்து, விளையாடி களைத்துப் போகும்போது தாய் அவளைத் தூங்க வைக்கிறாள். மறுநாள் காலை குழந்தை புத்துணர்ச்சியோடு எழுந்து தன் கடமைகளைத் தொடர்கிறது. இங்கே "தூக்கம்" என்பது மரணம் போன்றது, "மறுநாள் காலை" என்பது புதிய பிறவி போன்றது.

#### 2. இறைவன் நமக்குத் தந்துள்ள கருவிகள்
இறைமையானது பிறப்பில் உடலையும், உடல் கருவிகளையும் மட்டும் தரவில்லை. உலகியல் உறவுகளையும், உறவில் பகிர்விற்கான நிகழ்வுகளையும், நிகழ்வில் மலநீக்கத்திற்கான பயன் துய்ப்பையும் ஏற்பாடு செய்துள்ளார். அதுதான் மலத்தைக் கரைப்பதற்கான ஒரு முழுமையான **வாழ்க்கைப் பெட்டகம்** (Life Toolkit). அதில் ஐந்து பொருட்கள் உள்ளன:

  1. தனு (உடம்பு/பரு உடல்): ஆன்மா தங்குவதற்கும், உலகத்தோடு தொடர்பு கொள்வதற்கும் கொடுக்கப்பட்ட ஒரு இயற்பியல் வாகனம் (Physical Body).
  2. கரணம் (உடல் கருவிகள்): வெறும் உடல் மட்டும் போதாது, சிந்திப்பதற்கும் செயல்படுவதற்கும் மனம், புத்தி, சித்தம், அகங்காரம் மற்றும் கண், காது, மூக்கு, வாய், போன்ற ஞானேந்திரியங்கள், கர்மேந்திரியங்கள் ஆகிய கருவிகள் கொடுக்கப்பட்டுள்ளன.
  3. புவனம் (உலகம்/சுற்றுச்சூழல்): நாம் வாழ்வதற்கும், சக மனிதர்களோடு உறவு கொண்டு வாழ்வதற்கும் இறைவன் படைத்துள்ள இந்த பிரபஞ்சம் மற்றும் உலகியல் உறவுகள் (World & Society). இதை ஆன்மா இயங்கும் களம் என்றும் புரிந்துக்கொள்ளலாம்.
  4. போகம் (அனுபவப் பொருட்கள்): உலக வாழ்க்கையில் ஆன்மா அனுபவிப்பதற்காக இறைவனால் கொடுக்கப்பட்ட இன்ப-துன்பத்தை வழங்கக்கூடிய உலகப் பொருட்கள், உறவுகள் மற்றும் சூழ்நிலைகள் (Objects of Experience).
  5. துய்ப்பு (அனுபவம்/நுகர்தல்): தமக்குக் கொடுக்கப்பட்ட அந்த உலகப் பொருட்களோடும் (போகம்) சூழ்நிலைகளோடும் தொடர்பு கொண்டு, அதன் மூலம் ஆன்மா நேரடியாகப் பெறுகின்ற அனுபவங்கள். (Experience)

நெல் உமியை நீக்க வேண்டுமானால் அதை உரலில் போட்டு உலக்கையால் குத்த வேண்டும். இங்கே உலக்கை, உரல், குத்தும் செயல் யாவும் எப்படி உமியை நீக்க உதவுகிறதோ, அதேபோல தனு, கரணம், புவனம், போகம் வழியாக நடக்கும் துய்ப்பு (வாழ்க்கை அனுபவங்கள்) ஆன்மாவின் மலத்தை கொஞ்சம் கொஞ்சமாக கரைக்கிறது. ஆன்மாவின் மீது இறைவனின் முழுமையான ஆளுமை (Authority) இருப்பதால், இந்த ஐந்து நிலைகளையும் கடந்து மலத்தைக் கரைப்பது ஆன்மாவின் கட்டாயக் கடமையாகிறது.

#### 3. மலம் வெளியேறும் மூன்று படிநிலைகள் (ஆன்மாவின் பரிணாம வளர்ச்சி)
ஆன்மாவை மூடியிருக்கும் மலம் மிக மிக அழுத்தமானது என்பதால், அது ஒரே பிறவியிலோ அல்லது திடீரென்றோ வெளியேறிவிடாது. பல பிறவிகளாக, மூன்று முக்கிய நிலைகளைக் கடந்துதான் மலம் முழுமையாக நீங்கும் நிலைக்கு வரும்:

  ![alt](/images/essays/evolution-of-soul-ta.jpg)

அ) அடுக்கு நிலை (உறைநிலை உயிர்கள் - Static/Elemental State)
  - ஆரம்பக் கட்டத்தில் மலம் மிக மிக அடர்த்தியாக இருக்கும். 
  - அப்போது ஆன்மாக்கள் எந்த அசைவும் இன்றி, பஞ்சபூத அணுக்களாக (நிலம், நீர், நெருப்பு, காற்று, ஆகாயம் ஆகியவற்றின் கலவையாக) வரிசைக்கிரமமாக வடிவம் பெற்று இருக்கும். 
  - இவற்றுக்கு **உறைநிலை உயிர்கள்** என்று பெயர். இங்குதான் ஆன்மாவின் மிக அடிப்படையான பக்குவம் தொடங்குகிறது.

ஆ) தளர்வு நிலை (உயிர்ப்புநிலை உயிர்கள் - Cellular/Animal State)
  - பஞ்சபூத அணுக்களாக இருந்து ஓரளவு பக்குவம் பெற்ற பின், மலத்தின் வீரியம் சற்று தளர்கிறது (தளர்வு நிலை).
  - அப்போது ஆன்மாக்கள் தாவரங்கள், புழுக்கள், பூச்சிகள், மீன்கள், பறவைகள், விலங்குகள் என ஓரறிவு முதல் ஐந்தறிவு வரையிலான உயிரினங்களாகப் பிறப்பெடுக்கின்றன. 
  - இவற்றுக்கு **உயிர்ப்புநிலை உயிர்கள்** என்று பெயர்.

இ) நீக்க நிலை (உயர்நிலை உயிர்கள் - Human State)
  - பல கோடி பிறவிகளில் அடுக்கு நிலையிலும் தளர்வு நிலையிலும் பக்குவம் அடைந்த பிறகுதான், இறுதியாக ஆன்மாவிற்கு **மனிதப் பிறவி** கிடைக்கிறது. 
  - மனிதப் பிறவியில் தான் மலம், ஆன்மாவை விட்டு முழுமையாக விலகும் நீக்க நிலையை அடைகிறது. 
  - எனவேதான் மனிதர்கள் **உயர்நிலை உயிர்கள்** என்று அழைக்கப்படுகிறார்கள்.

#### 4. இறுதி நிலை: மாமனிதனும் ஞானியர் நிலையும் (உய்வு நிலை)
மனிதப் பிறவி என்பது மலத்தை முழுமையாகக் கரைப்பதற்கான இறுதி வாய்ப்பு. ஒரு மனிதன் தன் வாழ்வில் ஆன்மீகப் பக்குவம் பெற்று, அவனது மலம் முழுவதும் கரையும் போது, அவனுக்குள் ஒரு மாபெரும் மாற்றம் நிகழ்கிறது:
  - மாமனிதன் (உய்வு நிலை உயிர்கள்): மலம் நீங்கப் பெற்ற மனிதன், சாதாரண மனித நிலையிலிருந்து உயர்ந்து "மாமனிதன்" ஆகிறான். அதாவது, பிறவிப் பெருங்கடலில் இருந்து உய்வு பெற்ற (ஈடேறிய) உயிர் ஆகிறான்.
  - ஞானியர் நிலை (இறைவனின் இயக்கக் களம்): மலம் முழுமையாகக் கரைந்து போகும்போது, அதுவரை மறைக்கப்பட்டிருந்த ஆன்மாவின் சுய இயல்பு (Divine Nature) முழுமையாக வெளிப்படுகிறது. இப்போது அந்த ஆன்மா, இறைவனின் சுய இயல்பை அப்படியே ஏற்றுக்கொண்டு செயல்படத் தொடங்கும்.

இதை ஒரு எளிய உதாரணம் மூலம் புரிந்து கொள்ளலாம்: ஒரு அழுக்கு படிந்த கண்ணாடி வழியாகப் பார்த்தால் சூரிய வெளிச்சம் தெரியாது. அந்தக் கண்ணாடியைத் துடைக்கத் துடைக்க மெல்ல வெளிச்சம் வரத் தொடங்கும் (மனிதப் பிறவி வரை நடக்கும் பக்குவம்). கண்ணாடி முற்றிலும் தூய்மையாகி, அழுக்கு (மலம்) முழுமையாக நீங்கும் போது, சூரியனின் ஒளி அந்தக் கண்ணாடியில் பிரதிபலிப்பது மட்டுமல்லாமல், கண்ணாடியே சூரிய ஒளியாக மாறிவிடும்.

அதுபோல, மலம் முழுமையாகக் கரைந்த நிலையில் ஆன்மா இறைவனின் **இயக்கக் களமாக** (Instrument of the Divine) மாறுகிறது. இந்த உன்னதமான நிலையையே நம் முன்னோர்கள் **ஞானியர் நிலை** என்று அழைத்தார்கள்.`,
  },

  // {
  //   slug: '',
  //   date: '',

  //   titleEn: ``,
  //   excerptEn: ``,
  //   bodyEn: ``,

  //   titleTa: ``,
  //   excerptTa: ``,
  //   bodyTa: ``,
  // },
];

// ## 11. கேள்வி:- உயிர்உறவுகள், உடைமை உறவுகள் என்றால் என்ன? அவைகள் எதற்காக கொடுக்கப்பட்டிருக்கின்றது?

// பதில்: - மனிதன் இந்த உலகத்தில் தொடர்புகொள்ளும் அனைத்துமே அவனுக்கு உறவுகளாக இருக்கின்றது. அவைகள் இரண்டுவிதமாகத்தான் இருக்கின்றது. 1. உயிர்உறவுகள் 2. உடைமை உறவுகள். உயிர் உறவுகள் என்பது மனிதன் அவன் தேவைக்காக உறவுக்கொள்ளும் அவனைப்போன்ற உயிர்கள். உடைமை உறவுகள் என்பது அவன் தேவைக்காக பயன்படுத்திக்கொள்ளும் உடைமைப் பொருட்கள். இந்த இரண்டோடும் உறவு கொண்டுதான், அவன் இந்த உலகத்தில் தொடர்பு கொண்டு, தனக்கான தேவைகளைப் பெறுகின்றான். தனக்கான மலத்தைக் கரைக்க முயல்கின்றான். மலத்தைக் கரைக்க இந்த உலகம் தேவை. அதாவது உயிர் மற்றும் உடைமை உறவுகள் அனைத்தும் நமக்கு இந்த பிறப்பில் இறைமை தந்த பயன்பாட்டு ஊடகங்கள். மறுபிறப்பில் தொடராதவைகள். இருவகை உறவுகளும் மறு பிறப்பில் புதியனவாக வந்து இணையும். அதனால்தான் நமக்கு முற் பிறப்பு தெரிவதில்லை. இந்த இயற்கை நியதி, மனித குல நன்மைக்கே.

// இந்த பிரபஞ்சத்தை படைத்து இயக்கிக்கொண்டிருப்பது பேரறிவும், பெருஞ்செயலும் ஆகும். அந்த பேரறிவும், பெருஞ்செயலுமானது, ஒரு இயக்கத்திற்குள் வரும்போது, அந்த இயக்க அமைப்பிற்கு ஏற்ப பகுதி அறிவாகவும், பகுதி செயலாகவும் அமைகின்றது. பகுதி அறிவை இயக்க அறிவு என்றும் பகுதி செயலை இயக்க செயல் அல்லது இயக்க அசைவு என்றும் கூறுகின்றோம். இந்த பகுதி அறிவான இயக்க அறிவும், பகுதி செயலான இயக்க செயலும் எல்லா ஜீவன்களிலும் உண்டு. இந்த இயக்க அறிவையும், இயக்க செயலையும் தூய்மை செய்யும் போதுதான், ஜீவன் தனது மலத்தை கரைக்க முடியும். இயக்க அறிவில் அறியாமையும், இயக்க செயலில் முரண்பாடும் மலத்தை கரைக்காது. மலம் கரைந்தால் தான் இயக்க அறிவும், இயக்க செயலும் தூய்மை அடையும். இயக்க அறிவும், இயக்க செயலும் தூய்மை அடைந்தால்தான் பேரறிவுடனும், பெருஞ்செயலாகிய பேரசைவுடனும் இணைய முடியும். அந்நிலையில் ஆன்மா இயல்பு வெளிப்படும். எனவே ஆன்மா இயல்பு வெளிப்படுவதற்கு தடையாக இருக்கும் மலம் கரைய உலகத்தின் தொடர்பு தேவை. மலத்தை கரைத்து இயக்க அறிவையும், இயக்க செயலையும் தூய்மை செய்ய உயிர் உறவுகள், உடைமை உறவுகள் தேவை. உயிர் உறவுகளால் இயக்க அறிவும், உடைமை உறவுகளால் இயக்க செயலும் தூய்மை பெறும். பயன் துய்ப்பில் மலம் கரையும்.

// ---

// ## 12. கேள்வி: - இயக்க அறிவையும், இயக்க செயலையும் எது தூண்டி அசைக்கின்றது? அவைகள் எங்கு மையம் கொண்டிருக்கின்றது? இயக்க அறிவு, இயக்க செயல் தூய்மைக்கான ஏற்பாடுகள் என்ன?

// பதில்: - நம் இயக்க மையத்தில் உள்ள இறைமையாகிய பேரறிவிலிருந்து வருகின்ற தூண்டலானது, இயக்க அசைவை தூண்டி அசைக்கின்றது. இறைவியாகிய பேரசைவிலிருந்து வருகின்ற தூண்டலானது இயக்க அறிவை தூண்டி அசைக்கின்றது.

// நமக்காக பேரறிவு எடுத்த வடிவம் உள்ளுணர்வு. இது இயக்க அசைவை கட்டுப்படுத்துவது. பேரசைவு எடுத்த வடிவம் மனசாட்சி. இது இயக்க அறிவை தூய்மை செய்கின்றது. கரையும் மலம் எடுத்த வடிவம் நான்-எனது கலவையாகிய அகந்தை.

// அகந்தையை அசைய வைப்பது இரண்டு. 1. ஆணவ மலத்தால் தடைப்பட்ட பேரறிவு. இது “நான்” வடிவில் இருக்கும். 2. மாயா மலத்தால் தடைப்பட்ட பேரசைவு. இது “எனது” வடிவில் இருக்கும். இவை இரண்டும் தன்னை தடைப்படுத்தும் அகந்தை மலத்தை அசைத்து ஐந்து வகை ஏக்கங்களாக்கி, உறவுகளைத் தேடி துய்க்க வைத்து கரைய வைக்கும்.

// பேரறிவின் தூண்டலும், இயக்க அறிவும், பேரசைவின் தூண்டலும் இயக்க செயலும் மையம் கொண்டிருக்கும் இடம் திருவடி. இரண்டுக்கும் இடையில் தடையாக இருப்பது மலம்.