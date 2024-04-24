"use strict"
// I have to use var keyword 
console.log("Learn all about variable")
var firstName = 'Shraddha';
console.log(firstName);

// rules to use variable
// only use _,$  
// cannot use _ in start or number in start
// cannot use spaces
// var: Variables declared with var are function-scoped or globally-scoped. They are hoisted to the top of their function or global scope, meaning you can access them before they're declared. If you declare a var variable inside a block (like if, for, while), it's accessible outside that block.
// let: Variables declared with let are block-scoped. They are only accessible within the block they're declared in, and they are not hoisted. If you declare a let variable inside a block, it's not accessible outside that block.

// Using var
var x = 10;
if (true) {
    var x = 20;
    console.log(x); // Outputs 20
}
console.log(x); // Outputs 20

// Using let
let y = 10;
if (true) {
    let y = 20;
    console.log(y); // Outputs 20
}
console.log(y); // Outputs 10

// let declaration
let LastName = "harshit";
console.log(LastName);

//block scope vs function scope (difference between var and let)

// constant declaration
const pi = 3.14;
console.log(pi);
// cannot change the pi value so constant variable values are fixed



