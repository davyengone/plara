export function find() {
  let result = [];
  if (typeof arguments[0] === 'string') {
    for(let i = 0; i < this.length; i++){
      if(this[i] === arguments[0])
        result.push(this[i]);
    }
  }
  return result;
}
