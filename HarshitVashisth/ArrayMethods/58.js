//some method
// The some() method in JavaScript checks if at least one element in an array passes the test implemented by the provided function. 
// It returns a Boolean value: true if the callback function returns true for at least one element, otherwise false.


let numbers = [1, 2, 3, 4, 5];
let hasEvenNumber = numbers.some(element => element % 2 === 0);
console.log(hasEvenNumber); // true

let users = [
    { name: "John", age: 15 },
    { name: "Jane", age: 22 },
    { name: "Jack", age: 12 }
  ];
let hasAdult = users.some(user => user.age >= 18);
console.log(hasAdult); // true
  

// Detailed explanation about working of some method
// Stops on First true: some() stops iterating through the array as soon as the callback returns true for any element.
// Returns false for Empty Arrays: For any empty array, some() returns false because there are no elements to pass the test.
// Does Not Modify the Array: some() does not change the original array.
// Short-circuiting: If the callback function returns true for any element, some() immediately returns true without checking the remaining elements.