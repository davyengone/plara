// sources.find(c => c.startWith('d')); => ['davy', 'denis']
// sources
// .find(c => c.endWith('y')) => ['davy']
// .uppercase(c => c); => ['DAVY']

interface IFindPredicate {
  (): boolean
}

export function find<T>(collection:T[], fn?: IFindPredicate | string) {
  let result = [];
  if (typeof fn === 'function') {
    for(let i = 0; i < collection.length; i++){
      if(fn())
        result = [...result, this[i]];
    }
  }

  if(typeof fn === 'string'){

  }
  return result;
}
