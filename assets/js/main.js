// File: `assets/js/main.js`
document.addEventListener('DOMContentLoaded', () => {
    const toggle = document.getElementById('nav-toggle');
    const nav = document.getElementById('main-nav');

    if (toggle && nav) {
        toggle.addEventListener('click', () => {
            const open = toggle.getAttribute('aria-expanded') === 'true';
            toggle.setAttribute('aria-expanded', String(!open));
            nav.classList.toggle('show');
            nav.setAttribute('aria-hidden', String(open));
        });
    }

    // Smooth scroll for in-page links
    document.querySelectorAll('a[href^="#"]').forEach(a => {
        a.addEventListener('click', (e) => {
            const target = document.querySelector(a.getAttribute('href'));
            if (target) {
                e.preventDefault();
                target.scrollIntoView({behavior:'smooth', block:'start'});
                // close mobile nav if open
                if (nav && nav.classList.contains('show')) {
                    nav.classList.remove('show');
                    toggle?.setAttribute('aria-expanded', 'false');
                    nav.setAttribute('aria-hidden', 'true');
                }
            }
        });
    });
});
