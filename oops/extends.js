// The extends keyword is used in class declarations or class expressions to create a new class as a child of another class.

class Animal {
    constructor(name) {
      this.name = name;
    }
  
    speak() {
      return this.name + ' makes a noise';
    }
  }
  
  class Dog extends Animal {
    speak() {
      return this.name + ' barks';
    }
  }
  
  const dog = new Dog('Buddy');
  console.log(dog.speak()); // Output: Buddy barks
  