const Theme = {
    LIGHT: 'light-theme',
    DARK: 'dark-theme',
};
const themeToggleRef = document.querySelector('.theme-switch__toggle');
const bodyRef = document.querySelector('body');

function onLoadTheme() {
    if (localStorage.getItem('theme') === 'DARK') {
        themeToggle();
        themeToggleRef.checked = true;
    }
}

function themeToggle() {
    bodyRef.classList.toggle(Theme.DARK);
    switch (themeToggleRef.checked) {        
        case true:
            localStorage.setItem('theme', 'DARK');
            break;
        case false:
            localStorage.setItem('theme', 'LIGHT');
            break;
     }
}


document.addEventListener('DOMContentLoaded', onLoadTheme);
themeToggleRef.addEventListener('change', themeToggle);