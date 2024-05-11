// prototype is free space in a function 

// only function provide prototype property
// 
// treat protype as a object

// In JavaScript, every object has a special property called prototype. The prototype is an object itself and acts as a blueprint for other objects to inherit properties and methods from. When you access a property or method of an object, JavaScript first looks for it on the object itself. If it doesn't find it there, it looks for it on the object's prototype, and so on.

function Person(name) {
    this.name = name;
  }
  
  Person.prototype.sayHello = function() {
    return 'Hello, my name is ' + this.name;
  };
  
  const person1 = new Person('John');
  console.log(person1.sayHello()); // Output: Hello, my name is John
  