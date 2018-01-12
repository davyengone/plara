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