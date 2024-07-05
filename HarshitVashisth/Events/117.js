// Event delegation 
const grandparent = document.querySelector(".grandparent");
grandparent.addEventListener("click",(e)=>{
    console.log("clicked grandparent");
    console.log(e.target);
})

// here what I am doing is I am clicking on child - result is clicked grandparent
// I can target any element inside the grandparent - that is event delegation