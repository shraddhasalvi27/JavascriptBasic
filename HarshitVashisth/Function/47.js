//parameter destructuring
const person = {
    firstName:"shraddha",
    lastName:"Salvi",
    age:89
}

function printobj(obj){
    console.log(obj.firstName);
    console.log(obj.lastName);
    console.log(obj.age);
}

printobj(person);

function printobj1({firstName,lastname,age}){
    console.log(firstName);
    console.log(lastname);
    console.log(age);
}
printobj1(person);
