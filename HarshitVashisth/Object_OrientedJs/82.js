//super keyword
// The super keyword is used to call the constructor of a parent class and to access its methods.

class Person {
    constructor(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }

    fullName() {
        return `${this.firstName} ${this.lastName}`;
    }
}

class Employee extends Person {
    constructor(firstName, lastName, jobTitle) {
        super(firstName, lastName);
        this.jobTitle = jobTitle;
    }

    fullDetails() {
        return `${this.fullName()} - ${this.jobTitle}`;
    }
}

const employee1 = new Employee("Jane", "Doe", "Developer");
console.log(employee1.fullDetails());  // Output: Jane Doe - Developer
