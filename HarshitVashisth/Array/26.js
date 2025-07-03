// The spread operator (...) can be used to create a shallow copy of an array
let array1 = [1,2,3,4];
let array2 = [...array1];
let array2 = [...array1];

let array1 = ["item1", "item2"];
let array2 = [...array1]; // Cloning array1

console.log("array1", array1); // Output: array1 ["item1", "item2"]
console.log("array2", array2); // Output: array2 ["item1", "item2"]

array1.push("item3");

console.log("after pushing element to array1");
console.log("array1", array1); // Output: array1 ["item1", "item2", "item3"]
console.log("array2", array2); // Output: array2 ["item1", "item2"]



//shallow copy only rises the issue in case of a nested objects or arrays

