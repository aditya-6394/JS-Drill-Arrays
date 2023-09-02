function cb(i){
   return i < 3;
}

function filter(a,cb){
    let arr=[];
    for(let i = 0; i < a.length; i++){
        if(cb(a[i])){
            arr.push(a[i]);
        }
    }
    return arr;
}

module.exports={filter,cb}