// getters and setters
// Getters and setters are used to define methods for 
// getting and setting the value of an object's properties.

class Person {
    constructor(firstName, lastName) {
        this._firstName = firstName;
        this._lastName = lastName;
    }

    get firstName() {
        return this._firstName;
    }

    set firstName(value) {
        this._firstName = value;
    }

    get lastName() {
        return this._lastName;
    }

    set lastName(value) {
        this._lastName = value;
    }

    get fullName() {
        return `${this._firstName} ${this._lastName}`;
    }
}

const person1 = new Person("John", "Doe");
console.log(person1.fullName);  // Output: John Doe
person1.firstName = "Jane";
console.log(person1.fullName);  // Output: Jane Doe
