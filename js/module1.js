"use strict"

define([
],
function() {

	function windowCreated(windowInfo) {
		console.log("[windowCreated]", windowInfo);
	};

	function setupEventListeners() {
		chrome.windows.onCreated.addListener(windowCreated);
	}

	return {
		'init': function() {
			console.log('init');
			setupEventListeners();
		}
	};
});