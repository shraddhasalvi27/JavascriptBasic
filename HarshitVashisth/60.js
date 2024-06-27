//splice method
// The splice() method in JavaScript is used to change the contents of an array by removing, replacing, or adding elements. 
// It directly modifies the original array and returns an array containing the deleted elements.

let fruits = ["apple", "banana", "cherry", "date"];
let removed = fruits.splice(1, 2);

console.log(fruits); // ["apple", "date"]
console.log(removed); // ["banana", "cherry"]


let fruits = ["apple", "banana", "cherry", "date"];
let removed = fruits.splice(2, 0, "kiwi", "mango");
console.log(fruits); // ["apple", "banana", "kiwi", "mango", "cherry", "date"]
console.log(removed); // []


let fruits = ["apple", "banana", "cherry", "date"];
let removed = fruits.splice(1, 2, "kiwi", "mango");
console.log(fruits); // ["apple", "kiwi", "mango", "date"]
console.log(removed); // ["banana", "cherry"]


let fruits = ["apple", "banana", "cherry", "date"];
let removed = fruits.splice(-2, 1);
console.log(fruits); // ["apple", "banana", "date"]
console.log(removed); // ["cherry"]


// Directly Modifies the Array: splice() changes the original array.
// Returns Removed Elements: The method returns an array containing the elements that were removed.
// Flexible Functionality: You can use splice() to add, remove, or replace elements in an array.


