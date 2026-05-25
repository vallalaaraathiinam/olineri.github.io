const menuBtn = document.getElementById('mobile-menu-btn');
const drawer  = document.getElementById('mobile-drawer');
const learnToggle  = document.querySelector('.learn-toggle');
const learnSubmenu = document.getElementById('learn-submenu');
const learnChevron = document.querySelector('.learn-chevron');

function collapseLearn() {
    learnSubmenu?.classList.add('hidden');
    learnToggle?.setAttribute('aria-expanded', 'false');
    learnChevron?.classList.remove('rotate-180');
}

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
    collapseLearn();
}

// Toggle on hamburger click
menuBtn?.addEventListener('click', () => {
    drawer?.classList.contains('drawer-open') ? closeMenu() : openMenu();
});

// Learn submenu toggle
learnToggle?.addEventListener('click', () => {
    const isOpen = !learnSubmenu?.classList.contains('hidden');
    if (isOpen) {
        collapseLearn();
    } else {
        learnSubmenu?.classList.remove('hidden');
        learnToggle?.setAttribute('aria-expanded', 'true');
        learnChevron?.classList.add('rotate-180');
    }
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