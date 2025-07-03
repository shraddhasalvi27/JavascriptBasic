// foreach is a method that does the work of for loop
// that is iteration
// we can add function directly in foreach method that will do the work of for loop



/*  The forEach method iterates over each element in an array and executes a provided function once per element.
It does not return a new array (unlike map), making it suitable for operations where you don't need to collect results.
The callback function can accept up to three arguments: the current element, the index, and the array itself.
Use arrow functions for concise syntax.
While you can modify the array within the forEach loop, it's generally not recommended due to potential confusion and side effects. */

const numbers = [1,2,3,4];
numbers.forEach(function add(number){
    console.log(number);

});
numbers.forEach(number => console.log(number));
numbers.forEach(number =>number*number);
const fruits = ["apple", "banana", "cherry"];

fruits.forEach((fruit, index, arra4) => {  
    console.log(`Index: ${index}, Fruit: ${fruit}`);
    console.log(arra4); // Logs the entire array each time
});


//modifying array
const numbers = [1, 2, 3, 4, 5];

numbers.forEach((number, index, array) => {
    array[index] = number * 2;
});

console.log(numbers); // Outputs: [2, 4, 6, 8, 10]

const nums = [1,2,3,4,5];

function power(x){
    console.log(x**x);
}

nums.forEach(power);