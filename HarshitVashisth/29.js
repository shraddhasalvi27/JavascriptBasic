const array = ["item1", "item2", "item3"];

// Basic destructuring
const [first, second, third] = array;

console.log(first);  // Output: "item1"
console.log(second); // Output: "item2"
console.log(third);  // Output: "item3"



const array = ["item1", "item2", "item3", "item4"];

// Skipping the second element
const [first, , third, fourth] = array;

console.log(first);  // Output: "item1"
console.log(third);  // Output: "item3"
console.log(fourth); // Output: "item4"

const array = ["item1", "item2", "item3", "item4"];

// Using rest pattern
const [first, second, ...rest] = array;

console.log(first);  // Output: "item1"
console.log(second); // Output: "item2"
console.log(rest);   // Output: ["item3", "item4"]


const array = ["item1"];

// Providing default values
const [first, second = "default2", third = "default3"] = array;

console.log(first);  // Output: "item1"
console.log(second); // Output: "default2"
console.log(third);  // Output: "default3"



const nestedArray = ["item1", ["item2.1", "item2.2"], "item3"];

// Nested destructuring
const [first, [second1, second2], third] = nestedArray;

console.log(first);   // Output: "item1"
console.log(second1); // Output: "item2.1"
console.log(second2); // Output: "item2.2"
console.log(third);   // Output: "item3"




const person = ["John", "Doe", 30, ["Reading", "Traveling"], "New York"];

// Destructuring with skipping, default values, and rest pattern
const [firstName, lastName, age, [hobby1, hobby2], city = "Unknown", country = "USA"] = person;

console.log(firstName); // Output: "John"
console.log(lastName);  // Output: "Doe"
console.log(age);       // Output: 30
console.log(hobby1);    // Output: "Reading"
console.log(hobby2);    // Output: "Traveling"
console.log(city);      // Output: "New York"
console.log(country);   // Output: "USA"
