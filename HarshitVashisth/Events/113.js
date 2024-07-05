// Create demo project
const mainButton = document.querySelector("button");
console.log(mainButton);
const body = document.body;
const currentColor = document.querySelector(".current-color");
console.log(currentColor);
function  randomColorGenerator(){
    const red = Math.floor(Math.random() * 256);
    const green = Math.floor(Math.random() * 256);
    const blue = Math.floor(Math.random() * 256);
    const randomColor = `rgb(${red},${blue},${green})`;
    return randomColor;

}

mainButton.addEventListener("click",()=>{
    // console.log("you clicked me");
    const randomcolor = randomColorGenerator();
    console.log(randomcolor);
    body.style.backgroundColor=randomcolor;
    currentColor.textContent=randomcolor;

})