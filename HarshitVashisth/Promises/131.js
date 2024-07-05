// Promise.resolve and more about then method
//promise chaining
const myPromise = Promise.resolve(7);
myPromise.then(value =>{
    console.log(value);
})

// then method always return promise

function myPromise(){
    return new Promise((resolve,reject)=>{
        resolve("foo");
    })
}
myPromise()
    .then((value)=>{
        console.log(value);
        value+="bar";
        return value
    })
    .then(value=>{
        console.log(value);
        value+="baaz";
        return value;
    })
    .then(value=>{
        console.log(value);
    })

//then method always return the promise