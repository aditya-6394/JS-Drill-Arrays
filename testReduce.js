const reduce = require('./reduce');


const items = [1, 2, 3, 4, 5, 5];       
function cb(accumulator, current) {        
    accumulator = accumulator + current;
    return accumulator;
}

console.log(reduce(items, cb, 0));