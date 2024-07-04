// Practice with click events
const allButtons = document.querySelectorAll(".my-buttons button");
console.log(allButtons.length);
allButtons.forEach(button =>{
    button.addEventListener("click",(e)=>{
        // consolelog(e.target);
        console.log(e.target);
        e.target.style.backgroundColor = "yellow";
        e.target.style.color = "#333";
    })
})
