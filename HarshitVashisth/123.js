// SetInterval and create little project with setInterval
console.log("script start");
setInterval(()=>{
    console.log(math.random());
},500);

console.log("script end");

// small project

const body = document.body;
const button = document.querySelector("button");
const intervalid = setInterval(()=>{
    const red = Math.floor(Math.random()*126);
    const green = Math.floor(Math.random()*126);
    const blue = Math.floor(Math.random()*126);
    const rgb = `rgb(${red},${green},${blue})`;
    body.style.background = rgb;


},1000);

button.addEventListener("click",()=>{
    clearInterval(intervalid);
    button.textContent = body.style.background;
});

console.log(intervalid);