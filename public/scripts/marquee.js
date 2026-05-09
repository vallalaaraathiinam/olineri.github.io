/**
 * public/scripts/marquee.js
 * ─────────────────────────────────────────────────────────────────────────────
 * Tagline marquee scroll — desktop and mobile versions.
 *
 * Desktop (.tagline-track):
 *   Full viewport width track. Escapes the max-w-6xl container via CSS
 *   calc(-50vw + 50%) technique. Uses window.innerWidth as track width.
 *   Pauses on mouse hover so users can read the full text.
 *
 * Mobile (#mobile-tagline-track):
 *   Sits on line 2 of the mobile header alongside the lang pill and
 *   hamburger button. Uses track.offsetWidth (the flex-1 available space)
 *   as the track width — this naturally excludes the right-side controls.
 *   No hover pause (touch devices don't support mouseenter reliably).

 *
 * Configuration:
 *   DESKTOP_SCROLL_SPEED — px/sec for the desktop marquee
 *   MOBILE_SCROLL_SPEED  — px/sec for the mobile marquee (slower for comfort)
 *   PAUSE_SECONDS        — gap between end of scroll and restart (both)
 * ─────────────────────────────────────────────────────────────────────────────
 */

// ── Configuration ─────────────────────────────────────────────────────────────
// Adjust these values to tune scroll speed independently per device.
// Lower number = slower scroll. Higher number = faster scroll.
const DESKTOP_SCROLL_SPEED = 80;   // px/sec — desktop (wider viewport)
const MOBILE_SCROLL_SPEED  = 30;   // px/sec — mobile  (narrower, older readers)
const PAUSE_SECONDS        = 2;    // seconds of pause after text exits left edge
                                   // same pause duration for both desktop and mobile
// ─────────────────────────────────────────────────────────────────────────────


/**
 * applyMarquee()
 * Core function shared by both desktop and mobile initialisers.
 *
 * @param {HTMLElement} span         - The <span> inside the track holding the text
 * @param {number}      trackWidth   - Available scroll width in pixels
 *                                     Desktop: window.innerWidth
 *                                     Mobile:  track.offsetWidth (flex-1 space)
 * @param {string}      keyframeName - Unique @keyframes name to prevent collision
 *                                     between desktop and mobile animations
 * @param {number}      scrollSpeed  - px/sec — different per device type
 */
function applyMarquee(span, trackWidth, keyframeName, scrollSpeed) {
  const textWidth = span.offsetWidth;

  // ── Travel distance ────────────────────────────────────────────────────────
  // Text starts just off the RIGHT edge of the track:  left = trackWidth px
  // Text ends just off the LEFT edge of the track:     left = -textWidth px
  // Total pixel distance = trackWidth + textWidth (exact, no guessing)
  const totalDistance = trackWidth + textWidth;

  // ── Timing calculation ─────────────────────────────────────────────────────
  // scrollTime = seconds to travel the full distance at the given speed
  // totalTime  = scrollTime + fixed pause gap
  // scrollPct  = percentage of totalTime spent scrolling (vs pausing)
  //              used to position the hold keyframe correctly
  const scrollTime = totalDistance / scrollSpeed;
  const totalTime  = scrollTime + PAUSE_SECONDS;
  const scrollPct  = ((scrollTime / totalTime) * 100).toFixed(2);

  // ── Inject @keyframes ──────────────────────────────────────────────────────
  // Remove any previously injected rule (e.g. after window resize)
  // then create a fresh <style> tag with the new pixel-exact values.
  // Pixel values are used instead of percentages because translateX/left %
  // is relative to the element itself — causing edge mismatch on containers
  // that don't match the viewport width.
  document.getElementById(keyframeName)?.remove();

  const style = document.createElement('style');
  style.id    = keyframeName;
  style.textContent = `
    @keyframes ${keyframeName} {
      0%            { transform: translateX(${trackWidth}px);  }  /* Right edge of track — entering  */
      ${scrollPct}% { transform: translateX(${-textWidth}px); }  /* Left edge of track  — exiting   */
      100%          { transform: translateX(${-textWidth}px); }  /* Hold position — pause gap       */
    }
  `;
  document.head.appendChild(style);

  // Apply animation to the span
  span.style.animation = `${keyframeName} ${totalTime.toFixed(2)}s linear infinite`;
}


/**
 * initDesktopMarquee()
 * Initialises the full-width desktop tagline marquee.
 * Track selector: .tagline-track
 * Track width:    window.innerWidth (track is 100vw via CSS calc trick)
 * Extra:          pauses on mouseenter, resumes on mouseleave
 */
function initDesktopMarquee() {
  const track = document.querySelector('.tagline-track');
  const span  = track?.querySelector('span');

  // Exit silently if not in DOM (e.g. mobile viewport where desktop
  // header is hidden via Tailwind's hidden md:block pattern)
  if (!track || !span) return;

  applyMarquee(span, window.innerWidth, 'marquee-desktop', DESKTOP_SCROLL_SPEED);

  // ── Hover pause ────────────────────────────────────────────────────────────
  // animationPlayState: paused freezes animation exactly where it is.
  // On mouseleave it resumes from the same position — no jump or reset.
  // Using onmouseenter/onmouseleave (not addEventListener) prevents
  // duplicate listeners accumulating on repeated resize re-initialisations.
  track.onmouseenter = () => { span.style.animationPlayState = 'paused';  };
  track.onmouseleave = () => { span.style.animationPlayState = 'running'; };
}


/**
 * initMobileMarquee()
 * Initialises the mobile tagline marquee.
 * Track selector: #mobile-tagline-track
 * Track width:    track.offsetWidth — the flex-1 space on line 2 of the
 *                 mobile header, between the emblem link on the left and
 *                 the lang pill + hamburger button on the right.
 *                 Text never overlaps the right-side controls.
 * No hover pause — touch devices don't reliably fire mouseenter.
 */
function initMobileMarquee() {
  const track = document.getElementById('mobile-tagline-track');
  const span  = track?.querySelector('span');

  // Exit silently if not in DOM (e.g. desktop viewport where mobile
  // header is hidden via Tailwind's md:hidden pattern)
  if (!track || !span) return;

  // offsetWidth = actual rendered pixel width of the flex-1 container.
  // Calculated by the browser after flex layout resolves — already
  // excludes the lang pill and hamburger button widths automatically.
  applyMarquee(span, track.offsetWidth, 'marquee-mobile', MOBILE_SCROLL_SPEED);
}


/**
 * initAll()
 * Runs both initialisers. Safe to call multiple times (e.g. on resize)
 * because applyMarquee() removes previous keyframes before re-injecting.
 */
function initAll() {
  initDesktopMarquee();
  initMobileMarquee();
}


// ── Run on page load ──────────────────────────────────────────────────────────
// The <script> tag in BaseLayout uses defer so the DOM is fully parsed
// and all elements are available when this runs.
initAll();


// ── Re-run on window resize ───────────────────────────────────────────────────
// Both window.innerWidth (desktop) and track.offsetWidth (mobile) change
// when the viewport is resized. Debounced at 150ms to avoid firing
// hundreds of times per second during a resize drag operation.
let resizeTimer;
window.addEventListener('resize', () => {
  clearTimeout(resizeTimer);
  resizeTimer = setTimeout(initAll, 150);
});
