"use strict"

define([
],
function() {

	function windowCreated(windowInfo) {
		console.log("[module1] [windowCreated]", windowInfo);
	};

	return {
		'windowCreatedHandler': windowCreated,
		'init': function() {
			console.log('[module1] init');
		}
	};
});