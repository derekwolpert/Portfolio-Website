# Quick Note on Implimenting a Dynamic Light/Dark Mode

<a href="https://trends.google.com/trends/explore?date=all&geo=US&q=dark%20mode" target="_blank">Dark modes are more popular than ever</a>, so I knew from the get-go I wanted to implement its support on my website. To achieve this, a combination of media queries (to set an initial light or dark mode based on a user’s device) and CSS variables (to assign the corresponding colors of a theme) are utilized. I’ve also included a toggle switch to freely change between light and dark mode, and incorporated fluid CSS transitions when swapping between themes.

When initially accessing this website, the `Window` interface’s `matchMedia()` method is used to check if there is a preferred color scheme, and a `document.documentElement` is set accordingly. If there is no preferred color scheme the page defaults to light mode. Event listeners are placed onto both `window.matchMedia('(prefers-color-scheme: dark)’)` and the page’s theme toggle switch element to ensure consistency between assigned themes and HTML elements.

```
if (window.matchMedia('(prefers-color-scheme: dark)').matches === true) {
	document.getElementById('checkbox').checked = true;
	setFaviconColor("dark");
}

window.matchMedia('(prefers-color-scheme: dark)').addListener((e) => {
	if (e.matches === true) {
		document.getElementById('checkbox').checked = true;
		document.documentElement.setAttribute('theme-mode', 'dark');
		setFaviconColor("dark");
	} else if (e.matches === false) {
		document.getElementById('checkbox').checked = false;
		document.documentElement.setAttribute('theme-mode', 'light');
		setFaviconColor("light");
	}
});

document.getElementById('theme-switch').addEventListener('change', (e) => {
	if (e.target.checked) {
		document.documentElement.setAttribute('theme-mode', 'dark');
		setFaviconColor("dark");
	} else {
		document.documentElement.setAttribute('theme-mode', 'light');
		setFaviconColor("light");
	}
}, false);
```

Colors affected by the selected color mode are assigned to CSS variables based on the `MediaQueryList` value for `”prefers-color-scheme”`. If the page’s theme toggle switch has been adjusted, the value of the `theme-mode` root element is used to determine the colors instead.

If you want to learn more about how to impliment a dynamic dark mode on your own website check out the resources from WebKit and W3C below:

<a href="https://webkit.org/blog/8840/dark-mode-support-in-webkit/" target="_blank">Dark Mode Support in WebKit</a>

<a href="https://drafts.csswg.org/css-color-adjust-1/" target="_blank">CSS Color Adjustment Module Level 1</a>
