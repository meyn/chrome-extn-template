"use strict"

chrome.runtime.onInstalled.addListener(function(details) {
	console.log("onInstalled()", details);
});

chrome.runtime.onStartup.addListener(function() {
	console.log("onStartup()");
});