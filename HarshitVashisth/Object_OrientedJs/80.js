// class keyword

class Person {
    constructor(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }

    fullName() {
        return `${this.firstName} ${this.lastName}`;
    }
}

const person1 = new Person("John", "Doe"); //cannot call without new keyword
console.log(person1.fullName());  // Output: John Doe
console.log(Object.getPrototypeOf(person1));

