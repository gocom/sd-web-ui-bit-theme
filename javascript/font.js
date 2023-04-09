/**
 * Loads webfonts.
 */
document.addEventListener('DOMContentLoaded', () => {
    const link = document.createElement('link');

    link.rel = 'stylesheet';

    link.href = 'https://fonts.googleapis.com/css2?family=Fira+Code:wght@400;700&family=Roboto:ital,wght@0,400;0,700;1,400;1,700&display=swap';

    gradioApp().appendChild(link);
});
