//dot vs bracket notation

// dot notation
let dog ={
    name:"rocky",
    age:90,
    breed:"german schephard",
    "full name":"rocky raut"
}

console.log(dog.name);
console.log(dog.age);

// there is one more way
//bracket notation

console.log(dog["name"]);

// I cannot acceess full name using dot notation as it contain spaces
// thats why Can be used with property names that are not valid identifiers, 
// such as those with spaces, special characters, or reserved words.

console.log(dog["full name"]);

// When to Use Dot Notation
// When the property name is a valid identifier and you know it at coding time.
// When you want concise and readable code.
// When to Use Bracket Notation
// When the property name contains spaces, special characters, or is a reserved word.
// When the property name is stored in a variable or determined dynamically.
// When working with properties that are dynamically created or when iterating over properties.

//invalid identifier
let person = {
    "full name": "John Doe",
    age: 30
  };
  
  console.log(person["full name"]); // "John Doe"

// while using variable
  let property = "name";
let person = {
  name: "John",
  age: 30
};

console.log(person[property]); // "John"

// while iterating object
let person = {
    name: "John",
    age: 30
  };
  
  for (let key in person) {
    console.log(key + ": " + person[key]);
  }
  // Output:
  // name: John
  // age: 30
  
  for(let key in person){
    console.log(key + ":" + person[key])
  }
