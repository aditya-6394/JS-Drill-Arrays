const obj = require('./reduce');

const elements = [1, 2, 3, 4, 5, 5];

console.log(obj.reduce(elements,obj.cb,2));