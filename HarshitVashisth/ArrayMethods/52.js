const numbers = [1, 2, 3, 4, 5, 6];
const evenNumbers = numbers.filter(function(number) {
    return number % 2 === 0;
});

console.log(evenNumbers); // Outputs: [2, 4, 6]
const numbers = [1, 2, 3, 4, 5, 6];
const evenNumbers = numbers.filter(number => number % 2 === 0);
console.log(evenNumbers); // Outputs: [2, 4, 6]


const users = [
    { user_id: 1, name: "Alice", age: 25 },
    { user_id: 2, name: "Bob", age: 30 },
    { user_id: 3, name: "Charlie", age: 35 }
];
// Filter users older than 28
const olderUsers = users.filter(user => user.age > 28);
console.log(olderUsers);
// Outputs:
// [
//     { user_id: 2, name: "Bob", age: 30 },
//     { user_id: 3, name: "Charlie", age: 35 }
// ]


// The filter method in JavaScript creates a new array with all elements that pass the test implemented by the provided function.
//  It is used to filter out elements from an array based on certain criteria.
