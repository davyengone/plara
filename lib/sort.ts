
export function sort<T>(collection: T[]): T[] {
  for(let i = 0; i < collection.length; i++){
    for(let j = 0; j < collection.length; j++){
      if(collection[i] < collection[j]){
        let temp = collection[j];
        collection[j] = collection[i];
        collection[i] = temp;
      }
    }
  }
  return collection;
}


