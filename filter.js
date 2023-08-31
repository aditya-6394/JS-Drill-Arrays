let arr=[]
function cb(i){
    if(i>3){
        arr.push(i)
    }
}

function filter(a,cb){
    for(let i = 0; i < a.length; i++){
        cb(a[i]);
    }
    return arr
}

module.exports={filter,cb}