// Function that returns promise
function ricePromise(){

    const bucket = ["coffee",'chips','vegetables','salt','rice'];
    return new Promise((resolve,reject)=>{
         if(bucket.includes('vegetables') && bucket.includes('salt') && bucket.includes('rice')){
            resolve('fried rice');
        }else{
            reject('couldn`t do it');
        }
    })
}

ricePromise().then(
    (myfriedrice)=>{  
    //this is a resolve function it will run when promise get resolve
    console.log("let`s eat",myfriedrice);
}).catch(
    (error)=>{   //this is a reject function it will run when promise get reject
  
    console.log("what a bad day",error);
})