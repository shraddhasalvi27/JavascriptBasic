// if else condition 

let age = 17;

if(age>=18){
    console.log("User can play ddlc");
}else {
    console.log("User can play mario");
}

let num = 13;

if(num%2===0){
    console.log("even");
}else{
    console.log("odd");
}

// falsy values 


// false
// ""
// null 
// undefined
// 0

// truthy 
// "abc"
// 1, -1

let firstName= 0;

if(firstName){
    console.log(firstName);
}else{
    console.log("firstName is kinda empty");
}

// nested if else

// winning number 19 

// 19 your guess is right 
// 17 too low 
// 20 too high 

let winningNumber = 19;
let userGuess = +prompt("Guess a number");
// In JavaScript, +prompt is a way of converting the user's input obtained through the prompt function
//  into a numeric value. The prompt function is used to display a dialog box that prompts the user for input.
//   When you use +prompt, it attempts to convert the entered value into a number by using the unary plus (+)
//    operator.



if(userGuess === winningNumber){
    console.log("Your guess is right!!");
}else{
    if(userGuess < winningNumber){
        console.log("too low !!!");
    }else{
        console.log("too high !!!");
    }
}



// if 
// else if 
// else if 
// else if 
// else 

// let tempInDegree = 50;


// if(tempInDegree < 0){
//     console.log("extremely cold outside");
// }else if(tempInDegree < 16){
//     console.log("It is cold outside");
// }else if(tempInDegree < 25){
//     console.log("wheather is okay ");
// }else if(tempInDegree < 35){
//     console.log("lets go for swim");
// }else if(tempInDegree < 45){
//     console.log("turn on AC");
// }else{
//     console.log("too hot!!");
// }



let tempInDegree = 4;

if(tempInDegree > 40){
    console.log("too hot");
}else if(tempInDegree > 30){
    console.log("lets go for swim");
}else if(tempInDegree > 20){
    console.log("weather is cool");
}else if(tempInDegree > 10){
    console.log("it is very cold outside");
}else{
    console.log("extremely cold");
}

console.log("hello");