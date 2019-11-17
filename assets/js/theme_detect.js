if (window.matchMedia('(prefers-color-scheme: dark)').matches === true) {
    document.getElementById('checkbox').checked = true;
}

window.matchMedia('(prefers-color-scheme: dark)').addListener((e) => {
    if (e.matches === true) {
        document.getElementById('checkbox').checked = true;
        document.documentElement.setAttribute('theme-mode', 'dark');
    }
    else if (e.matches === false) {
        document.getElementById('checkbox').checked = false;
        document.documentElement.setAttribute('theme-mode', 'light');
    }
});

document.getElementById('theme-switch').addEventListener('change', (e) => {
    if (e.target.checked) {
        document.documentElement.setAttribute('theme-mode', 'dark');
    }
    else {
        document.documentElement.setAttribute('theme-mode', 'light');
    }
}, false);