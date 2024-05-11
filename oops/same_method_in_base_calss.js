// You can have methods with the same name in a child class as in its base class.


class Animal {
    speak() {
      return 'Animal makes a noise';
    }
  }
  
  class Dog extends Animal {
    speak() {
      return 'Dog barks';
    }
  }
  
  const dog = new Dog();
  console.log(dog.speak()); // Output: Dog barks
  