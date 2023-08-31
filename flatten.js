function flatten(elements) {
    const flattened = [];

    function recursiveFlatten(arr) {
        for (const element of arr) {
            if (Array.isArray(element)) {
                recursiveFlatten(element);
            } else {
                flattened.push(element);
            }
        }
    }

    recursiveFlatten(elements);
    return flattened;}

module.exports = flatten
