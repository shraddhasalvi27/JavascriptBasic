let numbers = [2, 4, 6, 8, 10];
let allEven = numbers.every(element => element % 2 === 0);
console.log(allEven); // true


let users = [
    { name: "John", age: 25 },
    { name: "Jane", age: 22 },
    { name: "Jack", age: 27 }
  ];
let allAdults = users.every(user => user.age >= 18);
console.log(allAdults); // true


//every method will visit all the elements and check the condition
//if the condition is true for all element then it return value true else false

// Stops on First false: every() stops iterating through the array as soon as the callback returns false for any element.
// Returns true for Empty Arrays: For any empty array, every() returns true because there are no elements to fail the test.
// Does Not Modify the Array: every() does not change the original array.
// Short-circuiting: If the callback function returns false for any element, every() immediately returns false without checking the remaining elements.



  
