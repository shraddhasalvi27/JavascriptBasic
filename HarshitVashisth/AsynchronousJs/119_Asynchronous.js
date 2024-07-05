// Is Javascript a synchronous or asynchronous programming language ? 
//javascript is a synchronous programming ,it is a single threaded
console.log("script start here");
for(let i =0;i<100;i++){
    console.log("inside for loop");
} //here it is a blocking event
console.log("script End here");

console.log("start");
function hello(){
    console.log("hello world");
}
setTimeout(hello,1000);
// setTimeout(()=>{
//     console.log("heyyy")
// },1000);
console.log("script end");

// here start and end line will run normally
// settimeout function will go into the web API provided by browser for 1000ms
// after that callback function will go into the callback queue and wait there to empty callstack
// as soon as callstack gets empty my callback function will go into the GEC
//this is how asynchronous things get work in the javascript



console.log("start");
function hello(){
    console.log("hello world");
}
const id = setTimeout(hello,0);
// setTimeout(()=>{
//     console.log("heyyy")
// },1000);
for(let i =0;i<100;i++){
    console.log("inside for loop");
} 
console.log("settimeout id is",id);
console.log("settimeout is clear");
clearTimeout(id);
console.log("script end");

//give the ans and explanation for above code along with output,and also explain the clear timeout
