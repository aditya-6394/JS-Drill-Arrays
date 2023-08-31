function reduce(elements, cb, startingValue) {   
    let op;
    if (elements.length === 0 && startingValue === undefined) {
        return "Error:Reduce of empty array with no initial values";
    }

    if (startingValue === undefined) startingValue = elements[0];
    op = startingValue;
    for (let index = 0; index < elements.length; index++) {
        op = cb(op, elements[index]);
    }
    
    return op;
};

module.exports = reduce;
