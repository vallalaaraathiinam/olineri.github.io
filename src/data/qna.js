/**
 * src/data/qna.js
 * ─────────────────────────────────────────────────────────────────────────────
 * Master data file for all Q&A entries published by Vallalar Adhiyinam.
 *
 * Both /en/learn/qna and /ta/learn/qna read from this single file.
 * All Q&As are displayed on one page in the order listed here.
 *
 * To add a new Q&A:
 *   1. Append a new object to the array below with the next sequential id
 *   2. Provide both English and Tamil question and answer
 *   3. No code changes needed — both pages update automatically on next build
 *
 * Formatting the answer:
 *   Plain text only in this field. Use \n\n for paragraph breaks.
 *   Numbered lists can be written as:  1. item\n\n2. item
 * ─────────────────────────────────────────────────────────────────────────────
 */

export const qnaData = [
  {
    id: 1,
    questionTa: 'ஒளிநெறி என்றால் என்ன?',
    questionEn: 'What is Olineri?',
    answerTa: `ஒளிநெறி என்பது "ஒளியின் வழி" என்று பொருள்படும். ஒவ்வொரு மனிதனும் தனக்குள் இருக்கும் இறைமையை உணர்ந்து, மாமனிதனாக மாறுவதற்கான வாழ்வியல் முறையே ஒளிநெறி ஆகும்.

இது ஒரு மதம் அல்ல, ஒரு பிரிவு அல்ல. இது நம் முன்னோர்கள் பின்பற்றிய உலகளாவிய ஆன்மீக வழி. தொன்மை குருகுல மரபு வழியாக இந்த அரிய உண்மைகள் வெளிப்படுத்தப்படுகின்றன.`,
  answerEn: `Olineri means the "Path of Light." It is a way of life that prompts an individual to investigate the root cause of existence within themselves, transforming a human into a great being and turning them into a divine field where the Almighty manifests.

It is not a religion or a sect. It is the universal path of inner realisation that was followed by our ancestors and revealed through the ancient Gurukula tradition.`,
  },

  {
    id: 2,

    questionTa: 'மனிதனிடம் உள்ள மூன்று உடல்கள் யாவை?',
    questionEn: 'What are the three bodies present in a human being?',

    answerTa: `மனிதனிடம் மூன்று உடல்கள் உள்ளன:

1. பருவுடல்

2. நுண்ணுடல்

3. மூல உடல்`,

    answerEn: `A human being has three bodies:

1. The Gross Body (Paru Udal) — the physical body

2. The Subtle Body (Nun Udal) — the mental and vital body

3. The Soul Body (Moola Udal) — the seed body, the deepest layer of being`,
  },

  {
    id: 3,

    questionTa: 'மனிதனின் பருவுடல் என்றால் என்ன?',
    questionEn: 'What is the Gross body (Paru Udal) of a human being?',

    answerTa: `பார்த்தல், கேட்டல், முகர்தல், சுவைத்தல், உராய்தல் என ஐந்து வகை ஏக்கங்களை (மலத்தை) கண், காது, மூக்கு, நாக்கு, தோல் என்ற கருவிகளின் வழியாக உலகத்தோடு (உயிர் உறவுகள், உடைமை உறவுகள்) தொடர்பு கொண்டு நீக்கிக் கொள்ளும் களமே பருவுடல்.`,

    answerEn: `The gross body is the field through which the five longings (impurities) — seeing, hearing, smelling, tasting, and touching — are expressed and resolved through the instruments of the eyes, ears, nose, tongue, and skin, by engaging with the world through relationships with living beings and with material possessions.`,
  },

  {
    id: 4,

    questionTa: 'ஜீவகாருண்யம் என்றால் என்ன?',
    questionEn: 'What is Jeeva Karunyam (Compassion toward all living beings)?',

    answerTa: `எல்லா உயிர்களும் இன்பமாக வாழ்வதற்கு உதவுவதும், அதன் வளர்ச்சியை தடை செய்யாமல் இருப்பதும் ஜீவகாருண்யமாகும்.`,

    answerEn: `Jeeva Karunyam is the quality of helping all living beings to live joyfully, and of never obstructing their growth and wellbeing. It is both an active compassion — supporting life — and a passive one — refraining from causing harm.`,
  },

  {
    id: 5,

    questionTa: 'மனிதனின் இயக்க ஒழுங்கு என்றால் என்ன?',
    questionEn: 'What is the natural order of conduct (Iyakka Ozhungu) for a human being?',

    answerTa: `மனிதன் செய்யும் அனைத்து செயல்களின் விளைவு இன்பமாக, நிறைவாக இருப்பதற்கு இயற்கை வகுத்த விதிகளே இயக்க ஒழுங்கு.

உதாரணம்: பசித்த பின் உண்பது, இரவில் உறங்குவது.`,

    answerEn: `The natural order of conduct (Iyakka Ozhungu) refers to the laws set by nature so that the results of all actions performed by a human being are joyful and fulfilling.

Examples: eating only when hungry, sleeping at night.`,
  },
];