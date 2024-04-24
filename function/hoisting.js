hello();
function hello(){
    console.log("hello world");
} //it will not throw error

//for function expression
const hello = function(){
    console.log("hello word");
} // it will throw error for all the variables - const,let and var.



// for variables
console.log(sum)
var sum = "a+b"; //it will not throw error
let sum = "a+b";
const sum = "a+b"; // it will throw error for both const and let

// it is hoisting we will cover reason in next part