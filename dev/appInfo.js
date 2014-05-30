"use strict"

define([
],
function() {

	var manifest = chrome.runtime.getManifest();

	return {
		getName: function() { return manifest.name; },
		getShortName: function() { return manifest.short_name; },
		getVersion: function() { return manifest.version; }
	}

});