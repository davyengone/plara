
var expect = require('chai').expect;
require('../lib/dist/find');

describe('Array', function () {

	it('has a property find', function () {
		expect([]).to.have.property('find');
	});

	describe('Find', function () {

		describe('Is called with no arguments', function () {
			it('Returns an empty array ', function(){
				expect([].find()).to.deep.equal([]);
			});
		});

		describe('Is called with an argument', function () {
			
			describe('A string', function () {
				var sources;
				
				beforeEach(function () {
					sources = ['davy', 'yorick', 'denis'];
				});

				it('returns an array', function () {
					expect(sources.find('davy')).to.deep.equal(['davy']);

				});
			});
		});
	});
});

// sources.find(c => c.startWith('d')); => ['davy', 'denis']
// sources
// .find(c => c.endWith('y')) => ['davy']
// .uppercase(c => c); => ['DAVY']
