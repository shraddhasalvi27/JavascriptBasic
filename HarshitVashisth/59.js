//fill method

let arr = [1, 2, 3, 4, 5];
arr.fill(0);
console.log(arr); // [0, 0, 0, 0, 0]

let arr = [1, 2, 3, 4, 5];
arr.fill(0, 2, 4);
console.log(arr); // [1, 2, 0, 0, 5]

let arr = [1, 2, 3, 4, 5];
arr.fill(0, -3, -1);
console.log(arr); // [1, 2, 0, 0, 5]

// Modifies the Original Array: fill() changes the original array in place.
// Inclusive Start, Exclusive End: The start index is inclusive, and the end index is exclusive.
// Negative Indices: Negative indices count back from the end of the array.
