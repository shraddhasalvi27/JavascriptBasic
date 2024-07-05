// Nested if else

// if else inside if else
if(45>=78){
    if(67>=90){
        console.log("hello");
    }else{
        console.log("shraddha");
    }
}else{
    if(89>=90){
        console.log("hello");
    }else{
        console.log("bye");

    }
}

// basically nested if else are if else inside the if or else condition
// condition inside the condition


let score = 85;

if (score >= 90) {
    console.log('Grade: A');
    if (score >= 95) {
        console.log('Remark: Excellent');
    } else {
        console.log('Remark: Very Good');
    }
} else if (score >= 80) {
    console.log('Grade: B');
    if (score >= 85) {
        console.log('Remark: Good');
    } else {
        console.log('Remark: Fair');
    }
} else if (score >= 70) {
    console.log('Grade: C');
    if (score >= 75) {
        console.log('Remark: Average');
    } else {
        console.log('Remark: Below Average');
    }
} else if (score >= 60) {
    console.log('Grade: D');
    if (score >= 65) {
        console.log('Remark: Poor');
    } else {
        console.log('Remark: Very Poor');
    }
} else {
    console.log('Grade: F');
    console.log('Remark: Fail');
}



// example 2
let winningNumber = 19;
let userGuess = +prompt("Guess a number");

if(userGuess === winningNumber){
    console.log("Your guess is right!!");
}else{
    if(userGuess < winningNumber){
        console.log("too low !!!");
    }else{
        console.log("too high !!!");
    }
}