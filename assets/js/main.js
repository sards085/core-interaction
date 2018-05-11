var md = new MobileDetect(window.navigator.userAgent);

if (md.phone()) {
	window.location.href="hp.html"
	console.log('hey its a phone')
}
