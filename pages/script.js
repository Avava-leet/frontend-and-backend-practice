document.addEventListener('DOMContentLoaded', function() {
    let page = document.querySelector('.bd');
    let themeButton = document.querySelector('.btn-theme');

    // Function to set theme
    function setTheme(theme) {
        page.classList.remove('light', 'dark');
        page.classList.add(theme);
        localStorage.setItem('selectedTheme', theme);
    }

    // Function to toggle theme
    function toggleTheme() {
        if (page.classList.contains('light')) {
            setTheme('dark');
        } else {
            setTheme('light');
        }
    }

    // Initialize theme on page load
    function initTheme() {
        const savedTheme = localStorage.getItem('selectedTheme');
        if (savedTheme) {
            setTheme(savedTheme);
        } else {
            setTheme('light');
        }
    }

    // Event listener
    themeButton.onclick = toggleTheme;

    // Initialize theme
    initTheme();
});