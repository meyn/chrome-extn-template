"use strict"

require([
	"appInfo",
	"module1"
],
function(App, Module1) {
	console.log('App ', App.getName(), App.getShortName(), App.getVersion());
	Module1.init();
});