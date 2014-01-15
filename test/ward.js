var createWard = require('../lib/ward'),
    fs = require('fs'),
    exists = fs.existsSync,
    read = fs.readFileSync,
    unlink = fs.unlinkSync;


describe('File storage ward', function() {
	it('Should be ward factory function', function() {
		createWard.should.be.type('function');
		createWard('test').should.be.type('function');
	});

	it('Should create file at given path with empty json array if file does not exist and call next', function(done) {
		var path = __dirname + '/assets/test';

		exists(path).should.not.be.ok;
		createWard(path)(function() {
			exists(path).should.be.ok;
			JSON.parse(read(path)).should.be.instanceof(Array).and.have.lengthOf(0);
			unlink(path);
			done();
		})
	});

	it('Should not affect file if it already exists', function(done) {
		var path = __dirname + '/assets/.migrations';
		var expectedContent = 'wow such content\n';

		createWard(path)(function() {
			read(path).toString().should.be.exactly(expectedContent);
			done();
		});
	});
});
