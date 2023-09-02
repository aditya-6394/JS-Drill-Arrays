// // const elements = [1, 2, 3, 4, 5, 5];

// function cb(sum,element){
//     return sum+element
// }

// function reduce(elements,cb,startingValue){    
//     let sum = 0;
//     if(startingValue == undefined){
//         startingValue =0;
//     }
//     for(let i=startingValue; i < elements.length; i++){        
//         sum = cb(sum,elements[i]);
//     }
//     return sum;
// }

// module.exports = {reduce,cb};


function reduce(array, callback, initialValue) {
  if (array.length === 0 && initialValue === undefined) {
    throw new TypeError('Reduce of empty array with no initial value');
  }

  let accumulator = initialValue !== undefined ? initialValue : array[0];
  const startIndex = initialValue !== undefined ? 0 : 1;

  for (let i = startIndex; i < array.length; i++) {
    accumulator = callback(accumulator, array[i], i, array);
  }

  return accumulator;
}

module.exports = reduce;

