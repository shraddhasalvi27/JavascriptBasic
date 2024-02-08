// use const for creating array

//heap memory ["apple", "mango"] //0x11

const fruits = ["apple", "mango"]; // 0x11
fruits.push("banana");
console.log(fruits);


const myArray = [1, 2, 3];

// You can still modify the elements of the array
myArray[0] = 100;
console.log(myArray); // Outputs: [100, 2, 3]

// But you cannot reassign the variable to a new array
// This will result in an error:
myArray = [4, 5, 6];
