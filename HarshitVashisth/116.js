// Event Capturing


console.log("hello world");
const child = document.querySelector(".child");
const parent = document.querySelector(".parent");
const grandparent = document.querySelector(".grandparent");

child.addEventListener("click",()=>{
    console.log("captured child");
},true)
parent.addEventListener("click",()=>{
    console.log("captured parent");
},true)
grandparent.addEventListener("click",()=>{
    console.log("captured grandparent");
},true)
document.body.addEventListener("click",()=>{
    console.log("captured body");
},true)



child.addEventListener("click",()=>{
    console.log("you clicked on child");
})
parent.addEventListener("click",()=>{
    console.log("you clicked on parent");
})
grandparent.addEventListener("click",()=>{
    console.log("you clicked on grandparent");
})
document.body.addEventListener("click",()=>{
    console.log("you clicked on body");
})


