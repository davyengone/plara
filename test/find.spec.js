
var expect = require('chai').expect;
var lp = require('../lib/dist/find').pLara;

describe('Find function', function () {
	
	it('pLara has a property find', function () {
		var l = new lp();
		expect(l).to.have.property('fin');
	});

	describe('no arguments passed', function () {
		
		var sources;

		beforeEach(function () {
			sources = ['davy', 'yorick'];	
		});


		it('Returns an empty array', function(){
			var result = lp.find('davy');
			expect(result).to.be.equal(true);
		});
	});
});

