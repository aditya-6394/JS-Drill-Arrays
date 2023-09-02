// const obj = require('./reduce');

// const elements = [1, 2, 3, 4, 5, 5];

// console.log(obj.reduce(elements,obj.cb,2));

const reduce = require('./reduce');
const numbers = [1, 2, 3, 4, 5];

const sum = reduce(numbers, (accumulator, currentValue) => {
  return accumulator + currentValue;
}, 0);

console.log(sum); 