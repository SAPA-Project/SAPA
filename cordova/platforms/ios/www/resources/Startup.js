window.addEventListener("load",init,false);

function init() {
	// alert('initialized');
	document.addEventListener('deviceready', onDeviceReady, false);
}

function onDeviceReady() {
	Parse.initialize("nDKW4Ew4GAEIAr7SzM2ruMLadgtAhucsbOn0FY1v", "MwdgP1F8fHK1jHZ9vqoJ4RpM6BWbQeDxigRoFjQI");
}
