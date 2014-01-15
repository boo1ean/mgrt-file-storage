var Storage = require('./storage'),
    ward = require('./ward');

var install = function() {
	var file = '.migrations',
	    path = this.path + '/' + file;

	this.storage = new Storage(path)
	this.wards.push(ward(path));
}

module.exports = install;
