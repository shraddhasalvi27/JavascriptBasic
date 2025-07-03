//callback functions
// passing function as a parameter
//it can be object also as studied previous
function myFunc(a){
    console.log(a)
    a("harshit")//I am calling function a 
}

function myFunc1(name){
    console.log("hii shraddha");
    console.log(name);
}

myFunc(myFunc1);
//here a value is myFunc1 as a fuction
// after treating a as a function I called the a() in myFunc


// A callback function in JavaScript is a function that is passed as an argument to another function and is executed after some operation has been completed.
// Callbacks are commonly used for asynchronous operations, such as reading files, making HTTP requests, or handling user events.

// They allow you to ensure that a certain piece of code is executed only after a specific task is finished.

function add(a){
    console.log(a);
    console.log("shraddha");
    a(1,2);
}
function num(num1,num2){
    console.log(num1+num2);
}
add(num);

