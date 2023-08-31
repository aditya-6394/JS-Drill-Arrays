let a=[];
function cb(i){
    a.push(i);
}

function map(elements,cb){
    for(let i=0; i<elements.length; i++){
        cb(elements[i]);
    }
    return a;
}
module.exports={cb,map};
