// The new keyword is used to create an instance of an object created by a constructor function.
function Person(name) {
    this.name = name;
  }
  
  const person1 = new Person('John');
  console.log(person1.name); // Output: John
  