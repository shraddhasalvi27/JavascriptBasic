// loops
// Using const to declare an array
const array = ["item1", "item2", "item3"];

// Using a for loop
for (let i = 0; i < array.length; i++) {
    console.log('for loop:', array[i]);
}

// Using a while loop
let i = 0;
while (i < array.length) {
    console.log('while loop:', array[i]);
    i++;
}

// Using a for...of loop
for (const item of array) {
    console.log('for...of loop:', item);
}

// Using a for...in loop
for (const index in array) {
    console.log('for...in loop:', array[index]);
}

