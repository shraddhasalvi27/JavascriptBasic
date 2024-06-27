//sort method
let fruits = ["banana", "apple", "cherry"];
fruits.sort();
console.log(fruits); // ["apple", "banana", "cherry"]

//sort method use to sort the strings and numbers

let numbers = [4, 2, 5, 1, 3];
numbers.sort((a, b) => a - b); // Ascending order
console.log(numbers); // [1, 2, 3, 4, 5]
numbers.sort((a, b) => b - a); // Descending order
console.log(numbers); // [5, 4, 3, 2, 1]



let items = [
    { name: "apple", price: 50 },
    { name: "banana", price: 30 },
    { name: "cherry", price: 20 }
  ];
  
  // Sort by price in ascending order
  items.sort((a, b) => a.price - b.price);
  console.log(items);
  // [
  //   { name: "cherry", price: 20 },
  //   { name: "banana", price: 30 },
  //   { name: "apple", price: 50 }
  // ]
  
  // Sort by name in ascending order
  items.sort((a, b) => a.name.localeCompare(b.name));
  console.log(items);
  // [
  //   { name: "apple", price: 50 },
  //   { name: "banana", price: 30 },
  //   { name: "cherry", price: 20 }
  // ]
  