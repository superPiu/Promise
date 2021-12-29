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