console.log('a')


function f(a){
    console.log(a)
}

function cb(f,a){
    f(a)
}

cb(f,'ddd')

console.log('b')

