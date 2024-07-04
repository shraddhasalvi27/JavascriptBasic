// Event bubbling
console.log("hello world");
const child = document.querySelector(".child");
const parent = document.querySelector(".parent");
const grandparent = document.querySelector(".grandparent");

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

// this is called event bubbling
// here what is happening is if i click on child all the previous links are getting triggered
// if I click on parent grandparent and body event will also triggered

