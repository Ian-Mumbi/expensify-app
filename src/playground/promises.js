const promise = new Promise(function (resolve, reject) {
    setTimeout(function(){
        resolve('This is my resolved data')
    }, 1500)
})

console.log('before')

promise.then((data) => {
    console.log(data)
}).catch((e) => {
    console.log('Error', e)
})

console.log('after')