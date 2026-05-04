const toTopBtn = document.getElementById('to-top');

window.addEventListener('scroll', () => {
    if (window.scrollY > 400) {
        // Show button after scrolling 400px
        toTopBtn?.classList.remove('translate-y-20', 'opacity-0');
        toTopBtn?.classList.add('translate-y-0', 'opacity-100');
    } else {
        // Hide button
        toTopBtn?.classList.add('translate-y-20', 'opacity-0');
        toTopBtn?.classList.remove('translate-y-0', 'opacity-100');
    }
});

toTopBtn?.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
});