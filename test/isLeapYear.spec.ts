import { expect } from 'chai';
import { isLeapYear } from '../lib/isLeapYear';


describe('A leap year', () => {
  it('is not very common', () => {
    expect(isLeapYear(2015)).to.be.false;
  });

  it('is introduced every 4 years to adjust about a day', () => {
    expect(isLeapYear(2016)).to.be.true;
  });

  it('is skipped every 100 years to remove an extra day', () => {
    expect(isLeapYear(1900)).to.be.false;
  });

  it('is reintroduced every 400 years to adjust another day', () => {
    expect(isLeapYear(2000)).to.be.true;
  });

  describe('Additional example of a leap year that', () => {
    it('is not a leap year', () => {
      expect(isLeapYear(1978)).to.be.false;
    });

    it('is a common leap year', () => {
      expect(isLeapYear(1992)).to.be.true;
    });

    it('is skipped every 100 years', () => {
      expect(isLeapYear(2100)).to.be.false;
    });

    it('is reintroduced every 400 years', () => {
        expect(isLeapYear(2400)).to.be.true;
    });
  });
});