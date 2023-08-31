obj = require('./map')
const items = [1, 2, 3, 4, 5, 5];
let new_array = obj.map(items,obj.cb);
console.log(new_array);