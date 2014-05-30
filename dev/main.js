"use strict"

require([
	"appInfo",
	"module1"
],
function(App, Module1) {

	console.log('App ', App.getName(), App.getShortName(), App.getVersion());

	(function init() {
		console.log('[main] init');
		chrome.windows.onCreated.addListener(Module1.windowCreatedHandler);
		Module1.init();
	})();

});