import { Transcriptor } from './../lib/transcriptor';
import { expect } from 'chai';

describe('Transcriptor', () => {
  const transcriptor = new Transcriptor()

  it('transcribes cytosine to guanine', () => {
    expect(transcriptor.toRna('C')).to.be.eq('G')
  })

  it('transcribes guanine to cytosine', () => {
    expect(transcriptor.toRna('G')).to.be.eq('C')
  })

  it('transcribes adenine to uracil', () => {
    expect(transcriptor.toRna('A')).to.be.eq('U')
  })

  it('transcribes thymine to adenine', () => {
    expect(transcriptor.toRna('T')).to.be.eq('A')
  })

  it('transcribes all dna nucleotides to their rna complements', () => {
    expect(transcriptor.toRna('ACGTGGTCTTAA')).to.be.eq('UGCACCAGAAUU')
  })

  xit('correctly handles invalid input', () => {
    expect(() => transcriptor.toRna('U')).to.be.Throw('Invalid input DNA.');
  })

  xit('correctly handles completely invalid input', () => {
    expect(transcriptor.toRna('XXX')).to.throw('Invalid input DNA.');
  })

  xit('correctly handles partially invalid input', () => {
    expect(() => transcriptor.toRna('ACGTXXXCTTAA')).to.throw('Invalid input DNA.');
  })
});