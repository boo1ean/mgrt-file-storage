var Storage = require('../').Storage,
    should = require('should'),
    fs = require('fs'),
    read = fs.readFileSync,
    unlink = fs.unlinkSync;

describe('File system storage', function() {
	it('Should read content from given file', function(done) {
		var path = __dirname + '/assets/.migrations';
		new Storage(path).get(function(data) {
			var expected = 'wow such content\n';
			var content = data.toString();

			content.should.be.equal(expected);
			done();
		});
	});

	it('Should write given string to the file specified file', function(done) {
		var content = 'very content',
		    path = __dirname + '/assets/test';

		new Storage(path).set(content, function() {
			read(path).toString().should.be.equal(content);
			unlink(path);
			done();
		});
	});
});
