"use strict"

// These 2 have to be here else they aren't called from inside a module
chrome.runtime.onInstalled.addListener(function onInstalledHandler(details) {
	console.log("[onInstalledHandler]", details);
});

chrome.runtime.onStartup.addListener(function onStartupHandler() {
	console.log("[onStartupHandler]");
});
