/**
 * src/data/gallery.js
 * ─────────────────────────────────────────────────────────────────────────────
 * Master data file for all gallery events and their photographs.
 *
 * Structure:
 *   galleryData is an array of event objects.
 *   Each event groups related photos from a single occasion/location.
 *
 * Each event object contains:
 *   eventNameEn  - Event name in English  (shown as section heading)
 *   eventNameTa  - Event name in Tamil
 *   images       - Array of image objects for this event
 *
 * Each image object contains:
 *   url    - Path relative to /public (served from public/images/gallery/...)
 *   altEn  - Descriptive alt text in English (important for accessibility + SEO)
 *   altTa  - Descriptive alt text in Tamil
 *
 * To add a new event:
 *   1. Create a new folder under public/images/gallery/EventName/
 *   2. Add photos to that folder
 *   3. Append a new event object at the end of the galleryData array below
 *   4. Both /en/gallery and /ta/gallery will automatically display it
 *
 * To add photos to an existing event:
 *   1. Add the image file to the corresponding folder in public/images/gallery/
 *   2. Add a new image object to the images array of the matching event
 *
 * Alt text guidelines:
 *   - Describe what is actually visible in the photo
 *   - Include the event/location name for context
 *   - Keep it under 125 characters
 *   - Example: 'Devotees gathered at Chennai Olineri Peedam Sabhai ceremony'
 * ─────────────────────────────────────────────────────────────────────────────
 */

export const galleryData = [
    
    // ── Chennai Sabhai ──────────────────────────────────────────────────────────
    {
      eventNameEn: "Chennai Sabhai",
      eventNameTa: "சென்னை சபை",
      images: [
        { url: '/images/gallery/Chennai/PHOTO-2026-05-01-20-54-22.jpg', altEn: 'Chennai Sabhai Photos', altTa: 'சென்னை சபை புகைபடங்கள்' },
        { url: '/images/gallery/Chennai/PHOTO-2026-05-01-20-54-21.jpg', altEn: 'Chennai Sabhai Photos', altTa: 'சென்னை சபை புகைபடங்கள்' },
        { url: '/images/gallery/Chennai/PHOTO-2026-05-01-20-54-23.jpg', altEn: 'Chennai Sabhai Photos', altTa: 'சென்னை சபை புகைபடங்கள்' },
        { url: '/images/gallery/Chennai/PHOTO-2026-05-01-20-54-24 3.jpg', altEn: 'Chennai Sabhai Photos', altTa: 'சென்னை சபை புகைபடங்கள்' },
        { url: '/images/gallery/Chennai/PHOTO-2026-05-01-20-54-20.jpg', altEn: 'Chennai Sabhai Photos', altTa: 'சென்னை சபை புகைபடங்கள்' },
        { url: '/images/gallery/Chennai/PHOTO-2026-05-01-20-54-24.jpg', altEn: 'Chennai Sabhai Photos', altTa: 'சென்னை சபை புகைபடங்கள்' },
        { url: '/images/gallery/Chennai/PHOTO-2026-05-01-20-54-25 2.jpg', altEn: 'Chennai Sabhai Photos', altTa: 'சென்னை சபை புகைபடங்கள்' },
        { url: '/images/gallery/Chennai/PHOTO-2026-05-01-20-54-25.jpg', altEn: 'Chennai Sabhai Photos', altTa: 'சென்னை சபை புகைபடங்கள்' },
        { url: '/images/gallery/Chennai/PHOTO-2026-05-01-20-54-26 2.jpg', altEn: 'Chennai Sabhai Photos', altTa: 'சென்னை சபை புகைபடங்கள்' },
        { url: '/images/gallery/Chennai/PHOTO-2026-05-01-20-59-19.jpg', altEn: 'Chennai Sabhai Photos', altTa: 'சென்னை சபை புகைபடங்கள்' },
        { url: '/images/gallery/Chennai/PHOTO-2026-05-01-20-59-20 2.jpg', altEn: 'Chennai Sabhai Photos', altTa: 'சென்னை சபை புகைபடங்கள்' },
        { url: '/images/gallery/Chennai/PHOTO-2026-05-01-20-59-20.jpg', altEn: 'Chennai Sabhai Photos', altTa: 'சென்னை சபை புகைபடங்கள்' },
        { url: '/images/gallery/Chennai/PHOTO-2026-05-01-21-00-13.jpg', altEn: 'Chennai Sabhai Photos', altTa: 'சென்னை சபை புகைபடங்கள்' },
        { url: '/images/gallery/Chennai/PHOTO-2026-05-01-21-00-14 2.jpg', altEn: 'Chennai Sabhai Photos', altTa: 'சென்னை சபை புகைபடங்கள்' },
        { url: '/images/gallery/Chennai/PHOTO-2026-05-01-21-00-14.jpg', altEn: 'Chennai Sabhai Photos', altTa: 'சென்னை சபை புகைபடங்கள்' },
        { url: '/images/gallery/Chennai/PHOTO-2026-05-01-21-02-26 3.jpg', altEn: 'Chennai Sabhai Photos', altTa: 'சென்னை சபை புகைபடங்கள்' },
      ]
    },

    // ── Trichy Sabhai ───────────────────────────────────────────────────────────
    {
      eventNameEn: "Trichy Sabhai",
      eventNameTa: "திருச்சி சபை",
      images: [
        { url: '/images/gallery/Trichy_Sabhai/PHOTO-2026-04-29-21-52-55.jpg', altEn: 'Trichy Sabhai Photos', altTa: 'திருச்சி சபை புகைபடங்கள்' },
        { url: '/images/gallery/Trichy_Sabhai/PHOTO-2026-04-29-21-52-57 2.jpg', altEn: 'Trichy Sabhai Photos', altTa: 'திருச்சி சபை புகைபடங்கள்' },
        { url: '/images/gallery/Trichy_Sabhai/PHOTO-2026-04-29-21-52-57.jpg', altEn: 'Trichy Sabhai Photos', altTa: 'திருச்சி சபை புகைபடங்கள்' },
        { url: '/images/gallery/Trichy_Sabhai/PHOTO-2026-04-29-21-52-59.jpg', altEn: 'Trichy Sabhai Photos', altTa: 'திருச்சி சபை புகைபடங்கள்' },
      ]
    },
    
    // ── At Vadalur ──────────────────────────────────────────────────────────────
    {
      eventNameEn: "At Vadalur",
      eventNameTa: "வடலூரில்",
      images: [
        { url: '/images/gallery/At_Vadalur/PHOTO-2026-04-29-21-44-51.jpg', altEn: 'Pictures taken at Vadalur', altTa: 'வடலூரில் எடுத்த புகைபடங்கள்' },
        { url: '/images/gallery/At_Vadalur/PHOTO-2026-04-29-21-44-52 2.jpg', altEn: 'Pictures taken at Vadalur', altTa: 'வடலூரில் எடுத்த புகைபடங்கள்' },
        { url: '/images/gallery/At_Vadalur/PHOTO-2026-04-29-21-44-52 3.jpg', altEn: 'Pictures taken at Vadalur', altTa: 'வடலூரில் எடுத்த புகைபடங்கள்' },
        { url: '/images/gallery/At_Vadalur/PHOTO-2026-04-29-21-44-52.jpg', altEn: 'Pictures taken at Vadalur', altTa: 'வடலூரில் எடுத்த புகைபடங்கள்' },
        { url: '/images/gallery/At_Vadalur/PHOTO-2026-04-29-21-44-53 2.jpg', altEn: 'Pictures taken at Vadalur', altTa: 'வடலூரில் எடுத்த புகைபடங்கள்' },
        { url: '/images/gallery/At_Vadalur/PHOTO-2026-04-29-21-44-53.jpg', altEn: 'Pictures taken at Vadalur', altTa: 'வடலூரில் எடுத்த புகைபடங்கள்' },
        { url: '/images/gallery/At_Vadalur/PHOTO-2026-04-29-21-44-54 2.jpg', altEn: 'Pictures taken at Vadalur', altTa: 'வடலூரில் எடுத்த புகைபடங்கள்' },
        { url: '/images/gallery/At_Vadalur/PHOTO-2026-04-29-21-44-54 3.jpg', altEn: 'Pictures taken at Vadalur', altTa: 'வடலூரில் எடுத்த புகைபடங்கள்' },
        { url: '/images/gallery/At_Vadalur/PHOTO-2026-04-29-21-44-54.jpg', altEn: 'Pictures taken at Vadalur', altTa: 'வடலூரில் எடுத்த புகைபடங்கள்' },
        { url: '/images/gallery/At_Vadalur/PHOTO-2026-04-29-21-44-55.jpg', altEn: 'Pictures taken at Vadalur', altTa: 'வடலூரில் எடுத்த புகைபடங்கள்' },
        { url: '/images/gallery/At_Vadalur/PHOTO-2026-04-29-21-52-48 2.jpg', altEn: 'Pictures taken at Vadalur', altTa: 'வடலூரில் எடுத்த புகைபடங்கள்' },
        { url: '/images/gallery/At_Vadalur/PHOTO-2026-04-29-21-52-48.jpg', altEn: 'Pictures taken at Vadalur', altTa: 'வடலூரில் எடுத்த புகைபடங்கள்' },
        { url: '/images/gallery/At_Vadalur/PHOTO-2026-04-29-21-52-50.jpg', altEn: 'Pictures taken at Vadalur', altTa: 'வடலூரில் எடுத்த புகைபடங்கள்' },
        { url: '/images/gallery/At_Vadalur/PHOTO-2026-04-29-21-52-51 2.jpg', altEn: 'Pictures taken at Vadalur', altTa: 'வடலூரில் எடுத்த புகைபடங்கள்' },
        { url: '/images/gallery/At_Vadalur/PHOTO-2026-04-29-21-53-02 2.jpg', altEn: 'Pictures taken at Vadalur', altTa: 'வடலூரில் எடுத்த புகைபடங்கள்' },
        { url: '/images/gallery/At_Vadalur/PHOTO-2026-04-29-21-53-05.jpg', altEn: 'Pictures taken at Vadalur', altTa: 'வடலூரில் எடுத்த புகைபடங்கள்' },
        { url: '/images/gallery/At_Vadalur/PHOTO-2026-04-29-21-53-06.jpg', altEn: 'Pictures taken at Vadalur', altTa: 'வடலூரில் எடுத்த புகைபடங்கள்' },
        { url: '/images/gallery/At_Vadalur/PHOTO-2026-04-29-21-53-07.jpg', altEn: 'Pictures taken at Vadalur', altTa: 'வடலூரில் எடுத்த புகைபடங்கள்' },
        { url: '/images/gallery/At_Vadalur/PHOTO-2026-04-29-21-53-09.jpg', altEn: 'Pictures taken at Vadalur', altTa: 'வடலூரில் எடுத்த புகைபடங்கள்' },
      ]
    },
    
    // ── Vallalaar 201st Commemoration ────────────────────────────────────────────
    {
      eventNameEn: "Vallalaar 201st Commemoration",
      eventNameTa: "வள்ளலார் 201வது வருவிக்க உற்ற திருவிழா",
      images: [
        { url: '/images/gallery/Vallalaar_201st_Commemoration/PHOTO-2026-04-29-22-16-22.jpg', altEn: 'Vallalaar 201st Commemoration', altTa: 'வள்ளலார் 201வது வருவிக்க உற்ற திருவிழா' },
        { url: '/images/gallery/Vallalaar_201st_Commemoration/PHOTO-2026-04-29-22-16-23 2.jpg', altEn: 'Vallalaar 201st Commemoration', altTa: 'வள்ளலார் 201வது வருவிக்க உற்ற திருவிழா' },
        { url: '/images/gallery/Vallalaar_201st_Commemoration/PHOTO-2026-04-29-22-16-23 3.jpg', altEn: 'Vallalaar 201st Commemoration', altTa: 'வள்ளலார் 201வது வருவிக்க உற்ற திருவிழா' },
        { url: '/images/gallery/Vallalaar_201st_Commemoration/PHOTO-2026-04-29-22-16-24.jpg', altEn: 'Vallalaar 201st Commemoration', altTa: 'வள்ளலார் 201வது வருவிக்க உற்ற திருவிழா' },
      ]
    }
  ];
