let j = undefined
function cb(i){
    if(i===5){
        j=i;
    }
}

function find(elements,cb){    
    for(let i of elements){
        cb(i);
    }
    return j;
}

module.exports={find,cb}