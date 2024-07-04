// This keyword inside eventListener callback

const btn = document.querySelector(".btn-headline");

btn.addEventListener("click",()=>{
    console.log("You clicked me");
    console.log("value of this");
    console.log(this);  //value of this is window here
}); //in arrow function value of this is one level up 

btn.addEventListener("click",function(){
    console.log("You clicked me");
    console.log("value of this");
    console.log(this);  //value of this is button in normal function
});


