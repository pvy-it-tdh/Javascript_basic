const promiseExp=()=>{
    return new Promise((resolve,reject)=>{
        resolve('get some data')
        reject('something wrong')
    });
}
promiseExp()
.then(data=>{
    console.log(data)       
})
.catch(error=>{
    console.log(error)
})