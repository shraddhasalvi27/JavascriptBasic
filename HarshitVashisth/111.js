// How event listener works
// working of eventListener behind the scene

console.log("script start");
const allButtons = document.querySelectorAll(".my-buttons button");

allButtons.forEach((button)=>{
        button.addEventListener("click",(e)=>{
            let num = 0;
            for(let i=0;i<100000000;i++){
                num+=i;
            }
            console.log(e.currentTarget.textContent,num);
            // console.log(this);
        })
    })

let outerVar = 0;
for(let i=0;i<1000000000;i++){
    outerVar +=i;
}

console.log("Value of outer variable is",outerVar);

console.log("Script End");


// working of above is as below

// browser -> js engine+ webAPI
// it will start from first line  execute one by one on console
// all buttons will get store in GEC that is js engine 
// every task will go in call stack
// eventlistener callback function will go into the browser 
// browser will send buttons one by one
// all buttons will go into the queue
// when my all task get complete buttons will go into the call stack
// there is one event listener who keep watch on the queue and call stack
// then my buttons will get execute

    
    
