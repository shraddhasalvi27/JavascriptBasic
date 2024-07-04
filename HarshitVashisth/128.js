// Microtask Queue

//promise is a asynchronous - 
// produced promise get stored in GEC in the form of object.
//promise is a object which stored status and value
// browser will consume the promise .
//promise will get add to the microtask queue

//here there are global execution context(GEC),broweser ,callstack+microtask Queue
//GEC - everything will go into the GEC line by line 
//consumer promise will go into the browser then it will go into the microtask queue
//after GEC completes it task microtask queue will run the consume promise .then
//promise will execute in the end microtask queue will go into the GEC after it complete the tasks

console.log("script start");
const bucket = ["coffee",'chips','vegetables','salt','rice'];
const friedRicePromise = new Promise((resolve,reject)=>{
    if(bucket.includes('vegetables') && bucket.includes('salt') && bucket.includes('rice')){
        resolve('fried rice');
    }else{
        reject('couldn`t do it');
    }
});
friedRicePromise.then(
    (myfriedrice)=>{  
    //this is a resolve function it will run when promise get resolve
    console.log("let`s eat",myfriedrice);
}).catch(
    (error)=>{   //this is a reject function it will run when promise get reject
  
    console.log("what a bad day",error);
})

setTimeout(()=>{
    console.log("hello from settimeout");
},0);

for(let i =0;i<100;i++){
    console.log(i);
}

console.log("Script end");

// output - script start
            // 100 lines
            // script end
            //let`s eat fried rice
            //hello from time out
           
// here setTimeout will go into the callstack queue and promise will go into the microtaskqueue
// microtask queue has a higher priority than callstack


