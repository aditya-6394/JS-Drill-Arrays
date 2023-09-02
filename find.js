function cb(i) {
  return i == 6;
}

function find(elements, cb) {
  for (let i of elements) {
    if (cb(i)) {
      return i;
    }
  }
}

module.exports = { find, cb };
