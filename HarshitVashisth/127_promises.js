// Intro to promises
//promises are also called future values that we get to know in the future

const bucket = ["coffee",'chips','vegetables','salt','rice'];
const friedRicePromise = new Promise((resolve,reject)=>{
    if(bucket.includes('vegetables') && bucket.includes('salt') && bucket.includes('rice')){
        resolve('fried rice');
    }else{
        reject('couldn`t do it');
    }
});
//here in Promise I passed arrow function with two parameter functions resolve and reject.
//this is how we produce function 

friedRicePromise.then(
    (myfriedrice)=>{  
    //this is a resolve function it will run when promise get resolve
    console.log("let`s eat",myfriedrice);
}).catch(
    (error)=>{   //this is a reject function it will run when promise get rejected
  
    console.log("what a bad day",error);
})
//.then function will run when promise get resolve else it will run reject function
//this is how we consume promise


