// In JavaScript, the some() method tests whether at least one element in the array passes the test implemented by the provided function. It returns true if, at least one element in the array passes the test, otherwise false.
const array = [1, 3, 5, 7, 9];

const even = (element) => element % 2 === 0;

console.log(array.some(even));
// Output: false, because no element is even

const array = [1, 2, 3, 4, 5];

const even = (element) => element % 2 === 0;

console.log(array.some(even));
// Output: true, because at least one element (2, 4) is even
