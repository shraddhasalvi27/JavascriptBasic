// Intro to events
//events are action performed by user
// hover,click ets are events
// search mdn event preference
// mouse click events we are going to study here
// there are three ways to add event are as follows
// onclick = "console.log('you clicked me')"
const btn = document.querySelector(".btn-headline")
// console.log(btn); it will log btn
// console.dir(btn);//it will show me all properties

function clickMe(){
    console.log("You clicked me!!!!!!");
}

btn.addEventListener("click",clickMe);//here pass the event to perform and one function (result after performing action)

btn.addEventListener("click",()=>{
    console.log("shraddha");
});

