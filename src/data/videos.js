/**
 * src/data/videos.js
 * ─────────────────────────────────────────────────────────────────────────────
 * Master data file for all video entries published by Vallalar Adhiyinam.
 *
 * Both /en/learn/videos and /ta/learn/videos read from this single file.
 * All videos are displayed on one page in the order listed here.
 *
 * To add a new video:
 *   1. Upload/publish the video to YouTube
 *   2. Copy just the video ID from the URL:
 *      e.g. https://www.youtube.com/watch?v=Wnx4BfcM2wg → youtubeId: 'Wnx4BfcM2wg'
 *   3. Append a new object below with the next sequential id
 *   4. Both EN and TA pages update automatically on next build
 *
 * Fields:
 *   id           — Unique sequential number
 *   youtubeId    — YouTube video ID only (not full URL) — used to build embed URL
 *   titleEn      — Video title in English (shown as heading above the player)
 *   titleTa      — Video title in Tamil
 *   descriptionEn — Short description shown below the title (optional context)
 *   descriptionTa — Same in Tamil
 *   category     — Topic grouping for future filtering (e.g. 'deepa-bavanai')
 *                  Use lowercase, hyphens only. Not displayed to users currently.
 *
 * YouTube embed note:
 *   We use youtube-nocookie.com instead of youtube.com for the embed URL.
 *   This prevents YouTube from setting tracking cookies unless the user
 *   actually plays the video — a privacy best practice.
 * ─────────────────────────────────────────────────────────────────────────────
 */

export const videosData = [
    {
      id:            1,
      youtubeId:     'Wnx4BfcM2wg',
      titleEn:       'Divine Contemplation on Lamp — An Introduction',
      titleTa:       'தீபத்தில் தெய்வ பாவனை — ஓர் அறிமுகம்',
      descriptionEn: 'An introduction to Deepa Bavanai — the practice of meditating on the lamp flame as a path to inner light.',
      descriptionTa: 'தீப பாவனை பற்றிய அறிமுகம் — தீபத்தின் சுடரில் தியானிப்பது உள் ஒளியை நோக்கிய வழி.',
      category:      'deepa-bavanai',
    },
    {
      id:            2,
      youtubeId:     'iNfQkijvv0M',
      titleEn:       'How to Practice Divine Contemplation on Lamp',
      titleTa:       'தீபத்தில் தெய்வ பாவனையை எப்படி பயிற்சி செய்வது',
      descriptionEn: 'Step-by-step guidance on how to sit, focus, and deepen the Deepa Bavanai practice.',
      descriptionTa: 'தீப பாவனை பயிற்சியை எவ்வாறு அமர்ந்து, கவனம் செலுத்தி, ஆழப்படுத்துவது என்பது பற்றிய வழிகாட்டுதல்.',
      category:      'deepa-bavanai',
    },
    {
      id:            3,
      youtubeId:     'pP_AsgnzDHU',
      titleEn:       'What is Relational Ethics (Saarbozhukkam) Training?',
      titleTa:       'சார்பொழுக்கப் பயிற்சி என்றால் என்ன?',
      descriptionEn: 'An explanation of Saarbozhukkam — the training in relational ethics that governs how we relate to others.',
      descriptionTa: 'சார்பொழுக்கம் என்றால் என்ன, மற்றவர்களுடனான உறவில் அது எவ்வாறு வழிகாட்டுகிறது என்பதன் விளக்கம்.',
      category:      'saarbozhukkam',
    },
    {
      id:            4,
      youtubeId:     'jDvDeDt_4DY',
      titleEn:       'What is Fivefold Discipline (Aindhozhukkam) Training?',
      titleTa:       'ஐந்தொழுக்கப் பயிற்சி என்றால் என்ன?',
      descriptionEn: 'An explanation of the five disciplines that form the foundation of a spiritually grounded life.',
      descriptionTa: 'ஆன்மீக அடிப்படையான வாழ்க்கைக்கு மூலமான ஐந்து ஒழுக்கங்களின் விளக்கம்.',
      category:      'aindhozhukkam',
    },
  ];