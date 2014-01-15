var fs = require('fs');

var createWard = function(path) {
	return function(next) {
		if (!fs.existsSync(path)) {
			fs.writeFileSync(path, '[]');
		}

		next();
	}
}

module.exports = createWard;
