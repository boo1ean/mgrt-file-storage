var fs = require('fs');

var Storage = function(path) {
	this.path = path;
}

Storage.prototype.get = function(cb) {
	cb(JSON.parse(fs.readFileSync(this.path)));
}

Storage.prototype.set = function(data, cb) {
	cb(fs.writeFileSync(this.path, JSON.stringify(data)));
}

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
