function cb(i) {
  return i + 1;
}

function map(elements, cb) {
  let arr = [];
  for (let item of elements) {
    newVal = cb(item);
    arr.push(newVal);
  }
  return arr;
}
module.exports = { cb, map };
