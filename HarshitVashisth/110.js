// Event object

const firstButton = document.querySelector("#one");
firstButton.addEventListener("click",function(){
    console.log("yoy clicked!!!!!!!!");
});

// jab browser ko pata chala kuchh event perform hua hai jo hum listen kr rahe hai
// browser callback function js engine ko degi and along with callback function browser will
// provide inforamtion about event
//here if I passed any parameter in function and then print it it will give me all information about event object

const firstButton = document.querySelector("#one");
firstButton.addEventListener("click",function(event){
    console.log("yoy clicked!!!!!!!!");
    console.log(event); //it will give me all info about event that has been performed
});

for(let button of allbutton){
    button.addEventListener("click",(event)=>{
        console.log("You clicked me");
        console.log(event); 
        // though it is arrow function it can print about event 
        // here event can be a,b,i,jklk anything
    });
} 