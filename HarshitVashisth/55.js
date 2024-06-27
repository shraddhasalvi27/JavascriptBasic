let numbers = [5, 12, 8, 130, 44];
let found = numbers.find(element => element > 10);
console.log(found); // 12

// The find() method in JavaScript is used to search through an array and return the first element that satisfies a provided testing function. 
// If no elements satisfy the testing function, it returns undefined.

let users = [
    { id: 1, name: "John", age: 25 },
    { id: 2, name: "Jane", age: 22 },
    { id: 3, name: "Jack", age: 27 }
  ];
  
  let user = users.find((user, index, array) => {
    console.log(`Index: ${index}, User: ${JSON.stringify(user)}`);
    return user.age > 23;
  });
  
  console.log(user); // { id: 1, name: "John", age: 25 }
  