var fs = require('fs'),
    Storage = require('./lib/storage');

module.exports = function() {
	var file = '.migrations',
	    path = this.path + '/' + file;

	this.storage = new Storage(path)
	this.wards.push(function(next) {
		if (!fs.existsSync(path)) {
			fs.writeFileSync(path, '[]');
		}

		next();
	});
}

module.exports.Storage = Storage;
