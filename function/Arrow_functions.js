const number = () =>{
    console.log("you are dead");
}

const sum = (num1,num2) =>{
    return num1+num2;
}

// Lexical this binding: Arrow functions do not have their own this value. The value of this inside an arrow function is determined by the surrounding scope.
// No arguments object: Arrow functions do not have their own arguments object. However, you can still access the arguments of the parent function using the arguments object of that function.
// Cannot be used as constructors: Arrow functions cannot be used as constructors with the new keyword.

const sum = (sum1,sum2) => sum1+sum2; //it can be used if function consist of only one expression

