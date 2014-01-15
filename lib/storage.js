var fs = require('fs');

var Storage = function(path) {
	this.path = path;
}

Storage.prototype.get = function(cb) {
	cb(fs.readFileSync(this.path));
}

Storage.prototype.set = function(data, cb) {
	cb(fs.writeFileSync(this.path, data));
}

module.exports = Storage;
