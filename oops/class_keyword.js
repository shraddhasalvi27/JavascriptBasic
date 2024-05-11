// The class keyword in JavaScript is used to create a new class, which is a blueprint for creating objects with specific properties and methods.

class Person {
    constructor(name) {
      this.name = name;
    }
  
    sayHello() {
      return 'Hello, my name is ' + this.name;
    }
  }
  
  const person = new Person('John');
  console.log(person.sayHello()); // Output: Hello, my name is John
  