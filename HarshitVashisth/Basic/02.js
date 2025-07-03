// var is a declaration of variable it  let Store,use and change the value 

//function scope
function example() {
    var x = 10;
    console.log(x); // 10
}
console.log(x); // ReferenceError: x is not defined
// if variable declare outside the function it has global scope

//hoisting
// Variables declared with var are hoisted to the top of their scope, meaning the declaration is processed before any code is executed.
// However, the initialization remains in place.
console.log(x) //x is undefined (it will not show reference error)
var x = 5;
console.log(x);


// no block scope
// variables declare with inside blocks do not have block scope
{
    var y = 10;
    console.log(x);    
}
console.log(y);  // we can print the y as it do not have the block scope


//redeclarion is aloud
var z =78;
var z = 89;  // now z = 89 js allows the redeclaration




// bellow is the mixture of different properties

function demoVar() {
    console.log(a); // undefined (due to hoisting)
    var a = 10;

    if (true) {
        var b = 20; // 'b' is function-scoped
    }
    console.log(b); // 20

    var a = 30; // re-declaration is allowed
    console.log(a); // 30
}
console.log(b)

demoVar();
console.log(typeof a); // undefined (a is not defined globally)



