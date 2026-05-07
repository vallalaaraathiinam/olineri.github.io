/**
 * src/scripts/scrollToTop.js
 * ─────────────────────────────────────────────────────────────────────────────
 * Scroll-to-top button behaviour.
 *
 * The button (#to-top) is defined in BaseLayout.astro.
 * It is hidden by default (translate-y-20 opacity-0) and becomes visible
 * after the user scrolls 400px down the page.
 *
 * Why an external script file (not inline <script> in BaseLayout)?
 *   Astro hoists external script files into the JS bundle during build,
 *   giving them a src="..." attribute in the output HTML. This means they
 *   are served from 'self' and pass the Content Security Policy (CSP)
 *   without needing 'unsafe-inline' or a SHA256 hash.
 *
 * Why these classes are in tailwind.config.mjs safelist:
 *   Tailwind purges classes it cannot find as static strings at build time.
 *   Since these classes are added/removed dynamically here, they must be
 *   safelisted to survive the production build.
 *   See: tailwind.config.mjs → safelist
 * ─────────────────────────────────────────────────────────────────────────────
 */
 
// Get a reference to the button element rendered in BaseLayout.astro
const toTopBtn = document.getElementById('to-top');
 
/**
 * Show or hide the scroll-to-top button based on scroll position.
 * Threshold: 400px — chosen to show the button only after
 * the user has scrolled past the sticky header and first section.
 */
window.addEventListener('scroll', () => {
  if (window.scrollY > 400) {
    // User has scrolled down — show the button by removing hidden classes
    // and adding visible classes
    toTopBtn?.classList.remove('translate-y-20', 'opacity-0');
    toTopBtn?.classList.add('translate-y-0', 'opacity-100');
  } else {
    // User is near the top — hide the button
    toTopBtn?.classList.add('translate-y-20', 'opacity-0');
    toTopBtn?.classList.remove('translate-y-0', 'opacity-100');
  }
});
 
/**
 * Scroll the page back to the top smoothly when the button is clicked.
 * 'smooth' behaviour is supported in all modern browsers.
 */
toTopBtn?.addEventListener('click', () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});
