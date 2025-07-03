let array1 = [1, 2, 3];
let array2 = array1;

array2.push(4);

console.log(array1); // Output: [1, 2, 3, 4]
console.log(array2); // Output: [1, 2, 3, 4]

// array2 is assigned to the same reference as array1.
// Modifying array2 by pushing a new element also affects array1, 
// because they both refer to the same array.

let array1 = ["item1", "item2"];
let array2 = array1;
console.log("array1", array1);
console.log("array2", array2);
array1.push("item3");
console.log("after pushing element to array 1");
console.log("array1", array1);
console.log("array2", array2);
array2.push("item4");
console.log(array1);
//item3 will get add to both the array

