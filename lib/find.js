export function find() {
  let result = [];
  const term = arguments[0];

  if (typeof term === 'string') {
    for(let i = 0; i < this.length; i++){
      if(this[i] === term)
        results = [results..., this[i]];
    }
  }
  return result;
}
