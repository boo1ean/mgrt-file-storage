var install = require('../'),
    Storage = require('../lib/storage');

describe('File system storage install script', function() {
	it('Should install all the stuff', function() {
		var env = {
			path: __dirname + '/assets',
			wards: []
		}

		install.apply(env);

		env.should.have.property('storage').and.be.instanceof(Storage);
		env.should.have.property('wards').and.be.instanceof(Array).and.have.lengthOf(1);
		env.wards[0].should.be.type('function');
	});
});
