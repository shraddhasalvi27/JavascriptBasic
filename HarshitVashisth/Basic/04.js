//let is a keyword which use to declare the variable

// properties - no redeclaration,block Scope,reassignment,no hoisting

let a = 67;
// let a = 67;
//it will thorw the syntaxerror


{
    let b = 90;
    console.log(b);
}
console.log(b);  // it will throw the referece error :cannot access y before initialization

console.log(z); //here it will throw error refrence error in var it threw the undefined
let z =90;
console.log(z);



function demoLet() {
    if (true) {
        let x = 10;
        console.log(x); // 10
    }
    // x is not accessible here, it's block-scoped

    for (let i = 0; i < 5; i++) {
        console.log(i); // 0, 1, 2, 3, 4
    }
    // i is not accessible here, it's block-scoped within the for loop

    let y = 20;
    y = 30; // Valid
    console.log(y); // 30

    // let y = 40; // SyntaxError: Identifier 'y' has already been declared

    console.log(z); // ReferenceError: Cannot access 'z' before initialization
    let z = 50;
    console.log(z); // 50
}

demoLet();
