// break keyword

// continue keyword 

for(let i = 1; i<=10; i++){
    if(i===4){
        break;
    }
    console.log(i);
}

for(let i = 1; i<=10; i++){
    if(i===4){
        continue;
    }
    console.log(i);
}
console.log("hello there");


// break: Exits the loop immediately. 
// Useful when you need to terminate the loop based on a specific condition.
// continue: Skips the current iteration and moves to the next iteration. 
// Useful when you need to skip certain iterations based on a condition.