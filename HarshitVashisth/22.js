// do -while loop
// The do-while loop is similar to the while loop,
//  but it guarantees that the loop body is executed at least once before the condition is tested.

let userInput;
do {
    userInput = prompt('Enter a number greater than 10:');
} while (userInput <= 10);

console.log('Thank you!'); // This will print after valid input is given.
