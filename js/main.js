define([
	"js/module1"
],
function(Module1) {
	var manifest = chrome.runtime.getManifest();

	function windowCreated(windowInfo) {
		console.log("[windowCreated]", windowInfo);
	};

	function setupEventListeners() {
		chrome.windows.onCreated.addListener(windowCreated);
	}

	console.log("Module1", Module1);

	return {
		getName: function() { return manifest.name; },
		getShortName: function() { return manifest.short_name; },
		getVersion: function() { return manifest.version; },
		main: function() {
			setupEventListeners();
		},
	};
});
