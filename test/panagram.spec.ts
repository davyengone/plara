import {expect } from 'chai';

export const pangramFromAscii = (ascii: number, pangram: string): string[] =>
  Array.apply(null, Array(26))
            .map((el, index) => String.fromCharCode(ascii+index))
            .filter(el => (new RegExp(el)).test(pangram));

export const _uniq = <T>(collection: T[]): T[] => {
  const temp = {}; 
  let result: T[] = [];
  collection.forEach(el => temp[el.toString()] = el);
  for (const key in temp) {
    result = [...result, temp[key]];
  }
  return result;
}


export const uniq = <T>(collection: T[]): T[] => {
  const temp = {};
  return collection
    .map((el: T) => {
      if(!temp[el.toString()]) {
        temp[el.toString()] = el;
        return el;
      } else {
        return null;
      }
    })
    .filter((el) => Boolean(el));
}


export class Pangram {
    constructor(private pangram: string){}

    isPangram(): Boolean {
      return uniq(pangramFromAscii(65, this.pangram)
              .concat(pangramFromAscii(97, this.pangram))
              .map(x => x.toLocaleLowerCase())).length === 26;
    }
}

describe('Pangram()', () => {

  it('empty sentence', () => {
    const pangram = new Pangram('')
    expect(pangram.isPangram()).to.be.false;
  });

 it('pangram with only lower case', () => {
    const pangram = new Pangram("the quick brown fox jumps over the lazy dog")
    expect(pangram.isPangram()).to.be.true;
  });

  it("missing character 'x'", () => {
    const pangram = new Pangram("a quick movement of the enemy will jeopardize five gunboats")
    expect(pangram.isPangram()).to.be.false;
  });

  it("another missing character 'x'", () => {
    const pangram = new Pangram("the quick brown fish jumps over the lazy dog")
    expect(pangram.isPangram()).to.be.false;
  });

  it("pangram with underscores", () => {
    const pangram = new Pangram("the_quick_brown_fox_jumps_over_the_lazy_dog")
    expect(pangram.isPangram()).to.be.true;
  });

  it("pangram with numbers", () => {
    const pangram = new Pangram("the 1 quick brown fox jumps over the 2 lazy dogs")
    expect(pangram.isPangram()).to.be.true;
  });

  it('missing letters replaced by numbers', () => {
    const pangram = new Pangram("7h3 qu1ck brown fox jumps ov3r 7h3 lazy dog")
    expect(pangram.isPangram()).to.be.false;
  });

  it('pangram with mixed case and punctuation', () => {
    const pangram = new Pangram("\"Five quacking Zephyrs jolt my wax bed.\"")
    expect(pangram.isPangram()).to.be.true;
  });

  it('pangram with non-ascii characters', () => {
    const pangram = new Pangram("Victor jagt zwölf Boxkämpfer quer über den großen Sylter Deich.")
    expect(pangram.isPangram()).to.be.true;
  });
});