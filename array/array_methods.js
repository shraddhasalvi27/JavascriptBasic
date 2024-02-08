// array push pop 

// array shift unshift 

let fruits = ["apple", "mango", "grapes"];
console.log(fruits);
// push 
// add element at end
 fruits.push("banana");
console.log(fruits);
// pop
// remove element from end 
 let poppedFruit = fruits.pop();
console.log(fruits);
console.log("popped fruits is", poppedFruit);

// unshift 
fruits.unshift("banana");
fruits.unshift("myfruit");
console.log(fruits);
// add element at start

// shift 
let removedFruit = fruits.shift();
console.log(fruits);
console.log("removed fruits is ", removedFruit);