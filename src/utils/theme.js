export function setTheme(themeName) {
	localStorage.setItem('countries-theme', themeName);
	document.documentElement.className = themeName;
}

export function keepTheme() {
	if (localStorage.getItem('countries-theme')) {
		localStorage.getItem('countries-theme') === 'theme-light'
			? setTheme('theme-light')
			: setTheme('theme-dark');
	} else {
		setTheme('theme-light');
	}
}
