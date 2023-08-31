function cb(i, k){
    console.log(k,i*i*i);
}

function each(a, cb){
    for(let i=0; i<a.length; i++){
        cb(a[i],i);
    }
}

module.exports = {each,cb};