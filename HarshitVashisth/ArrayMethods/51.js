// //map method 
// // basic difference between map and foreach method is map returns array and foreach do not return an array

const numbers = [1,2,3,4,5];

const doubled = numbers.map(function add(number){
    return number*2;
})

console.log(doubled);

// using arrow function
const doubled = numbers.map(number => number*2);


const fruits = ["apple", "banana", "cherry"];
const fruitInfo = fruits.map((fruit, index, array) => {
    return `Index: ${index}, Fruit: ${fruit}`;
});
console.log(fruitInfo);
// Outputs: ["Index: 0, Fruit: apple", "Index: 1, Fruit: banana", "Index: 2, Fruit: cherry"]

//transforming object
const users = [
    { user_id: 1, firstName: "parth", gender: "male" },
    { user_id: 2, firstName: "harshit", gender: "malesig" },
    { user_id: 3, firstName: "rakes", gender: "malemig" }
];
const userNames = users.map(user => user.firstName);
console.log(userNames); // Outputs: ["parth", "harshit", "rakes"]







//all concepts at one place
const users = [
    { user_id: 1, firstName: "parth", gender: "male" },
    { user_id: 2, firstName: "harshit", gender: "malesig" },
    { user_id: 3, firstName: "rakes", gender: "malemig" }
];

// Extracting first names
const userNames = users.map(user => user.firstName);
console.log(userNames); // Outputs: ["parth", "harshit", "rakes"]

// Creating new objects with transformed properties
const userDescriptions = users.map((user, index) => {
    return {
        id: user.user_id,
        name: user.firstName,
        index: index
    };
});
console.log(userDescriptions);
/* Outputs:
[
    { id: 1, name: "parth", index: 0 },
    { id: 2, name: "harshit", index: 1 },
    { id: 3, name: "rakes", index: 2 }
]
*/

// Chaining with filter
const usersWithGender = users
    .filter(user => user.gender.startsWith("male"))
    .map(user => `${user.firstName} (${user.gender})`);
console.log(usersWithGender); // Outputs: ["parth (male)", "harshit (malesig)", "rakes (malemig)"]


const numb1 = [7,8,9,0];

function mul(x){
 return x*x;
}
const mul1 = numb1.map(mul);
console.log(mul1);