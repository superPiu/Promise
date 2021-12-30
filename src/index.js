const Promise = require('./promise')

const p1 = new Promise((resolve,reject)=>{
    setTimeout(()=>{
        resolve('p1')
    },2000)
})
p1.then((res)=>{
    console.log(res)
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve('p2Resolve')
        },1000)
    })
}).then((res)=>{
    console.log(res)
})
const p2 = new Promise((resolve,reject)=>{
    setTimeout(()=>{
        resolve('p2')
    },3000)
})

Promise.all([p1,p2]).then((val)=>{
    console.log(val)
})
Promise.race([p1,p2]).then((val)=>{
    console.log(val)
})