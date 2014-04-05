"use strict"

require([
	"js/main"
],
function(MyExtn) {
	MyExtn.main();
	console.log("version", MyExtn.getVersion());
});


// These 2 have to be out here else they aren't called
chrome.runtime.onInstalled.addListener(function onInstalledHandler(details) {
	console.log("[onInstalledHandler]", details);
});

chrome.runtime.onStartup.addListener(function onStartupHandler() {
	console.log("[onStartupHandler]");
});
