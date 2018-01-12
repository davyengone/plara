import { expect } from 'chai';
import {find} from '../lib/find';

describe('Array', () => {
	describe('Find', ()=> {

    let sources = [];
	describe('Is called with no arguments', ()=> {
		it('Returns an empty array ', function(){
			expect(find(sources)).to.deep.equal([]);
		});
	});

    describe('Is called with an argument', ()=> {
        describe('A string', ()=> {
            beforeEach(()=> {
                sources = ['davy', 'yorick', 'denis'];
            });

            it('returns an array with element it found', ()=> {
                expect(sources.find('davy')).to.deep.equal(['davy']);
            });
        });

        describe('Is called with an object literal', ()=> {
            sources = [{name:'davy'}, {name:'yorick'}, {name:'denis'}];

            it('returns an array', ()=> {
                expect(sources.find('davy')).to.deep.equal(['davy']);
            });
        });

        describe('Is called with a function', ()=> {
            sources = { name: 'davy', age: 32 };

            it('returns an array', ()=> {
                expect(sources.find('davy')).to.deep.equal(['davy']);
            });
        });

        xdescribe('Is called with a lambda expression', ()=> {
            sources = ['davy', 'yorick', 'denis'];

            it('returns an array', ()=> {
                expect(sources.find('davy')).to.deep.equal(['davy']);
            });
        });
    });
});
});
