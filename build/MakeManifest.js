var fs = require('fs');
var templateFile = __dirname + '/manifest.template';
var manifestFile = __dirname + '/manifest.json';

fs.readFile(templateFile, 'utf8', function(err, templateData) {
	if (err) {
		throw err;
	}
	templateData = JSON.parse(templateData);

	fs.readFile(manifestFile, 'utf8', function(err, currentData) {
		currentData = (err || !currentData) ? templateData.all : JSON.parse(currentData) || templateData.all;
		var entry, entries;

		switch (process.argv[2]) {
		case "dev":
			entries = templateData.development;
			for (entry in entries) {
				currentData[entry] = entries[entry];
			}
			break;

		case "rel":
			entries = templateData.release;
			for (entry in entries) {
				currentData[entry] = entries[entry];
			}
			// bump the major / minor / patch number
			var incLevel = ["major", "minor", "patch"].indexOf(process.argv[3]);
			if (incLevel === -1) { incLevel = 2; } // patch by default
			currentData["version"] = currentData["version"].split(".").map(function(x, index) {
				return index === incLevel ? parseInt(x, 10) + 1 : x;
			}).join('.');
			break;
		}

		fs.writeFile(manifestFile, JSON.stringify(currentData), 'utf8', function(err) {
			if (err) {
				throw err;
			}
		});
	});
});
