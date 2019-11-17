if (window.matchMedia('(prefers-color-scheme: dark)').matches === true) {
    document.getElementById('checkbox').checked = true;
}

window.matchMedia('(prefers-color-scheme: dark)').addListener((e) => {
    if (e.matches === true) {
        document.getElementById('checkbox').checked = true;
        document.documentElement.setAttribute('data-theme', 'dark');
    }
    else if (e.matches === false) {
        document.getElementById('checkbox').checked = false;
        document.documentElement.setAttribute('data-theme', 'light');
    }
});

document.getElementById('theme-switch').addEventListener('change', (e) => {
    if (e.target.checked) {
        document.documentElement.setAttribute('data-theme', 'dark');
    }
    else {
        document.documentElement.setAttribute('data-theme', 'light');
    }
}, false);