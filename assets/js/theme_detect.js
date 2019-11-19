const setFaviconColor = (color) => {
    if (color === "dark") {
        document.getElementById("faviconApple").href = "dark_favicon/apple-touch-icon.png";
        document.getElementById("faviconAndroid1").href = "dark_favicon/android-chrome-512x512.png";
        document.getElementById("faviconAndroid2").href = "dark_favicon/android-chrome-192x192.png";
        document.getElementById("favicon1").href = "dark_favicon/favicon-32x32.png";
        document.getElementById("favicon2").href = "dark_favicon/favicon-16x16.png";
        document.getElementById("faviconManifest").href = "dark_favicon/site.webmanifest";
    } else if (color === "light") {
        document.getElementById("faviconApple").href = "light_favicon/apple-touch-icon.png";
        document.getElementById("faviconAndroid1").href = "light_favicon/android-chrome-512x512.png";
        document.getElementById("faviconAndroid2").href = "light_favicon/android-chrome-192x192.png";
        document.getElementById("favicon1").href = "light_favicon/favicon-32x32.png";
        document.getElementById("favicon2").href = "light_favicon/favicon-16x16.png";
        document.getElementById("faviconManifest").href = "light_favicon/site.webmanifest";
    }
};


if (window.matchMedia('(prefers-color-scheme: dark)').matches === true) {
    document.getElementById('checkbox').checked = true;
    setFaviconColor("dark");
}

window.matchMedia('(prefers-color-scheme: dark)').addListener((e) => {
    if (e.matches === true) {
        document.getElementById('checkbox').checked = true;
        document.documentElement.setAttribute('theme-mode', 'dark');
        setFaviconColor("dark");
    }
    else if (e.matches === false) {
        document.getElementById('checkbox').checked = false;
        document.documentElement.setAttribute('theme-mode', 'light');
        setFaviconColor("light");
    }
});

document.getElementById('theme-switch').addEventListener('change', (e) => {
    if (e.target.checked) {
        document.documentElement.setAttribute('theme-mode', 'dark');
        setFaviconColor("dark");
    }
    else {
        document.documentElement.setAttribute('theme-mode', 'light');
        setFaviconColor("light");
    }
}, false);