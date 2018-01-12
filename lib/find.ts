// sources.find(c => c.startWith('d')); => ['davy', 'denis']
// sources
// .find(c => c.endWith('y')) => ['davy']
// .uppercase(c => c); => ['DAVY']


export function find(collection, fn) {
  let result = [];
  if (typeof arguments[0] === 'string') {
    for(let i = 0; i < collection.length; i++){
      if(fn())
        result = [...result, this[i]];
    }
  }
  return result;
}
