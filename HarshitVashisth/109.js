// Add events on multiple elements

const firstbutton = document.querySelector("#one");
firstbutton.addEventListener("click",function(){
    console.log("You clicked me");
});

const allbutton = document.querySelectorAll("button"); //I can select button in a specific class also
console.log(allbutton);

for(let button of allbutton){
    button.addEventListener("click",function(){
        console.log("You clicked me");
        console.log(this); //value of this is different for ever button
        console.log(this.textContent);//text content for every button
        // Note:here I can use only normal function in loop.arrow function this value is window
    });
} //if we click on every button it will give me console 
//addeventlistener apply to every button


// for(let i =0;i<allbutton.length;i++){
//     allbutton[i].addEventListener("click",function(){
//         console.log(this);
//     })
// }

// allbutton.forEach(function(button){
//     button.addEventListener("click",function(){
//         console.log(this);
//     });
// })



