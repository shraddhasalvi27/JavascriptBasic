//push pop shift unshift

// push

// push()
// Purpose: Adds one or more elements to the end of an array.
// Returns: The new length of the array.

let fruits = ['banana','apple'];
let newlength = fruits.push("cherry");
console.log(fruits);
console.log(newlength); //it will return the new length

// pop()
// Purpose: Removes the last element from an array.
// Returns: The removed element.

let removedElement = fruits.pop();
console.log(fruits);
console.log(removedElement);


// shift()
// Purpose: Removes the first element from an array.
// Returns: The removed element.
let firstelement = fruits.shift();
console.log(fruits);
console.log(firstelement);

// unshift
// Purpose: Adds one or more elements to the beginning of an array.
// Returns: The new length of the array.
let newlength = fruits.unshift("cherry");
console.log(fruits);
console.log(newlength);


