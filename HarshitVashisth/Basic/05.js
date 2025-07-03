console.log("all about const");
//const is a keyword use to declare the variable.


//key difference between const and let are const cannot be redeclare
//properties - block scope,assignment ,hoisting,immutability binding,re-declaration not allowed

// assignment
const x = 89;
x = 90;  //it will throw type error
// it is not aloud


//immutability binding
const obj = {
    o:90
}
obj.o = 70; //I can change the values inside the object

const arr = [90,89,70,56,9];
arr.push(90);

//redeclaration is not aloud
const x = 90;
const x = 78;

{
    const x =90;
}
console.log(x); //it will print the refernce error

function demoConst() {
    if (true) {
        const x = 10;
        console.log(x); // 10
    }
    // x is not accessible here, it's block-scoped

    const y = 20;
    // y = 30; // TypeError: Assignment to constant variable.

    const obj = { a: 1 };
    obj.a = 2; // Allowed because we're changing the property, not reassigning the variable
    console.log(obj.a); // 2

    const arr = [1, 2, 3];
    arr.push(4); // Allowed because we're modifying the array, not reassigning the variable
    console.log(arr); // [1, 2, 3, 4]
}

demoConst();



