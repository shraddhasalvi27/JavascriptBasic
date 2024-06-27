// Method Overriding
class Person {
    fullName() {
        return "Anonymous";
    }
}

class Employee extends Person {
    constructor(firstName, lastName) {
        super();
        this.firstName = firstName;
        this.lastName = lastName;
    }

    fullName() {
        return `${this.firstName} ${this.lastName}`;
    }
}


// Method overriding occurs when a subclass provides a specific 
// implementation of a method that is already defined in its superclass.

const employee1 = new Employee("Jane", "Doe");
console.log(employee1.fullName());  // Output: Jane Doe
