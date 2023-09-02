// const elements = [1, 2, 3, 4, 5, 5];

function cb(sum,element){
    return sum+element
}

function reduce(elements,cb,startingValue){    
    let sum = 0;
    if(startingValue == undefined){
        startingValue =0;
    }
    for(let i=startingValue; i < elements.length; i++){        
        sum = cb(sum,elements[i]);
    }
    return sum;
}

module.exports = {reduce,cb};
