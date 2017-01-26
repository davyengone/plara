export function find() {
  let result = [];
  const term = arguments[0];

  if (typeof term === 'string') {
    for(let i = 0; i < this.length; i++){
      if(this[i] === term)
        result = [...result, this[i]];
    }
  }
  return result;
}
