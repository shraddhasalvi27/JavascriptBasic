// for loop in array

const array = ["item1", "item2", "item3"];
console.log(array); // Output: ["item1", "item2", "item3"]

// Modifying the contents of the array
array.push("item4");
console.log(array); // Output: ["item1", "item2", "item3", "item4"]

array[0] = "newItem1";
console.log(array); // Output: ["newItem1", "item2", "item3", "item4"]

// Trying to reassign the array will result in an error
// array = ["anotherItem1", "anotherItem2"]; // This line will cause an error

