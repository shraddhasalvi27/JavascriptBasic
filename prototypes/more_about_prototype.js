// The prototype property is used to share properties and methods among all instances of a constructor function.


function Person(name) {
    this.name = name;
  }
  
  Person.prototype.sayHello = function() {
    return 'Hello, my name is ' + this.name;
  };
  
  const person1 = new Person('John');
  const person2 = new Person('Jane');
  
  console.log(person1.sayHello()); // Output: Hello, my name is John
  console.log(person2.sayHello()); // Output: Hello, my name is Jane
  