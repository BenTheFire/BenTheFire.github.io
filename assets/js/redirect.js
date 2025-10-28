// File: assets/js/redirect.js
document.addEventListener('DOMContentLoaded', () => {
    const body = document.body;
    const url = body.getAttribute('data-redirect-url') || 'https://benthefire.dev/';
    const secondsAttr = parseInt(body.getAttribute('data-redirect-seconds') || '8', 10);
    const countdownEl = document.getElementById('countdown');
    const openNow = document.getElementById('open-now');

    let seconds = Number.isFinite(secondsAttr) ? secondsAttr : 8;
    if (countdownEl) countdownEl.textContent = String(seconds);

    // Update countdown every second and redirect when 0
    const timer = setInterval(() => {
        seconds -= 1;
        if (countdownEl) countdownEl.textContent = String(Math.max(0, seconds));
        if (seconds <= 0) {
            clearInterval(timer);
            // Hard redirect
            window.location.href = url;
        }
    }, 1000);

    // Allow immediate open in new tab/window
    if (openNow) {
        openNow.addEventListener('click', (e) => {
            // keep default behavior (opens in new tab) and clear timer
            clearInterval(timer);
        });
    }
});