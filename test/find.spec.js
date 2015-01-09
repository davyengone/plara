
var expect = require('chai').expect;
var lp = require('../lib/dist/find');


describe('Find function', function () {
	
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

