const Theme = {
    LIGHT: 'light-theme',
    DARK: 'dark-theme',
};
const themeToggleRef = document.querySelector('.theme-switch__toggle');
const bodyRef = document.querySelector('body');

function onLoadTheme() {
    if (localStorage.getItem('theme') === 'DARK') {
        bodyRef.classList.replace(Theme.LIGHT, Theme.DARK);
        localStorage.setItem('theme', 'DARK');
        themeToggleRef.checked = true;
    }
}

function themeToggle() {
    switch (themeToggleRef.checked) {    
        case true:
            bodyRef.classList.replace(Theme.LIGHT, Theme.DARK);
            localStorage.setItem('theme', 'DARK');
            break;
        case false:
            bodyRef.classList.replace(Theme.DARK, Theme.LIGHT);
            localStorage.setItem('theme', 'LIGHT');
            break;
     }
}


document.addEventListener('DOMContentLoaded', onLoadTheme);
themeToggleRef.addEventListener('change', themeToggle);