// The super keyword is used to call functions on an object's parent.

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
      return super.speak() + ' and barks';
    }
  }
  
  const dog = new Dog('Buddy');
  console.log(dog.speak()); // Output: Buddy makes a noise and barks
  
