const menuBtn = document.getElementById('mobile-menu-btn');
const drawer  = document.getElementById('mobile-drawer');

function openMenu() {
    drawer?.classList.add('drawer-open');
    menuBtn?.setAttribute('aria-expanded', 'true');
    menuBtn?.setAttribute(
        'aria-label',
        document.documentElement.lang === 'ta' ? 'மெனுவை மூடு' : 'Close menu'
    );
}

function closeMenu() {
    drawer?.classList.remove('drawer-open');
    menuBtn?.setAttribute('aria-expanded', 'false');
    menuBtn?.setAttribute(
        'aria-label',
        document.documentElement.lang === 'ta' ? 'மெனுவைத் திற' : 'Open menu'
    );
}

// Toggle on hamburger click
menuBtn?.addEventListener('click', () => {
    drawer?.classList.contains('drawer-open') ? closeMenu() : openMenu();
});

// Close when any nav link is clicked
drawer?.querySelectorAll('.drawer-link').forEach(link => {
    link.addEventListener('click', closeMenu);
});

// Close on Escape — return focus to hamburger
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && drawer?.classList.contains('drawer-open')) {
        closeMenu();
        menuBtn?.focus();
    }
});

// Close if resized to desktop width
window.addEventListener('resize', () => {
    if (window.innerWidth >= 768) closeMenu();
});