// More events

// keypress and mouseover event

const body = document.body;
body.addEventListener("keypress",(e)=>{
    console.log(e.key);
})

const mouse = document.querySelector(".btn-headline");
mouse.addEventListener("mouseover",()=>{
    console.log("mouseover event occur");
})

mouse.addEventListener("mouseleave",()=>{
    console.log("mouseleave event occur");
})

