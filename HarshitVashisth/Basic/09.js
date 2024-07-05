//null and undefined

//undefined
let name;   //I can declare as var or let but cannt declare as const ,in case const we have to declare and initialize at the same time
console.log(typeof name);
// it will right undefined
name = "shraddha";
console.log(name);

const age;
console.log(age);
//here it will throw error as varable is not initialized in the case of const I have to initialise the variable
let firstname;
console.log(typeof firstname); //it will print undefined as type is not defined
firstname = "shraddha";
console.log(typeof firstname,firstname);



//NULL

let myVariable = null;
console.log(myVariable);
myVariable = "harshit";
console.log(myVariable,typeof myVariable);

console.log(typeof null);  //it will print object
//I have to remeber it is a error,bug in javascript

//BigInt

let myNumber = 123n;
let num = BigInt(45);
// both num and myNumber are ways to declare BigInt
console.log(myNumber);
console.log(Number.MAX_SAFE_INTEGER);
//bigInt is a large number
console.log(myNumber + num);
let num1 = 78;
console.log(num+num1);  //it will throw error
//cannot add bigInt with normal number











