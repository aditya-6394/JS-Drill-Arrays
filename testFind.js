const items = [1, 2, 3, 4, 5, 5];
let obj = require("./find");

let j = obj.find(items, obj.cb);
console.log(j);
