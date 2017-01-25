import chai from 'chai';
let expect = chai.expect;
import {find} from '../lib/find';

describe('Array', ()=> {

	// it('has a property find', ()=> {
	// 	expect([]).to.have.property('find');
	// });

	describe('Find', ()=> {
    beforeEach(()=>{
      [].find = find;
      Array.prototype.find = find;
    });

		describe('Is called with no arguments', ()=> {
			it('Returns an empty array ', function(){
				expect([].find()).to.deep.equal([]);
			});
		});

		describe('Is called with an argument', ()=> {
			describe('A string', ()=> {
				var sources;
				beforeEach(()=> {
					sources = ['davy', 'yorick', 'denis'];
				});

				it('returns an array', ()=> {
					expect(sources.find('davy')).to.deep.equal(['davy']);
				});
			});

			describe('Is called with an object literal', ()=> {
				var sources;
				beforeEach(()=> {
					sources = ['davy', 'yorick', 'denis'];
				});

				it('returns an array', ()=> {
					expect(sources.find('davy')).to.deep.equal(['davy']);
				});
			});

			describe('Is called with a function', ()=> {
				var sources;
				beforeEach(()=> {
					sources = { name: 'davy', age: 32 };
				});

				it('returns an array', ()=> {
					expect(sources.find('davy')).to.deep.equal(['davy']);
				});
			});

			describe('Is called with a lambda expression', ()=> {
				var sources;
				beforeEach(()=> {
					sources = ['davy', 'yorick', 'denis'];
				});

				it('returns an array', ()=> {
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
