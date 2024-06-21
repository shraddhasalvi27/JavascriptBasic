// && || operator

// and or opeartor

// in and operator if both the condition are true then run the condition
// in or operator if either one condition is true then run the opeartion
let age = 90;
if(age>90 && age<=100){
    console.log("she is old");
}else{
    console.log("she is not old");
}

let hasPermission = false;
let isAdmin = true;

if (hasPermission || isAdmin) {
    console.log('Access granted.');
} else {
    console.log('Access denied.');
}
// Output: Access granted.

let x = -5;
let y = 0;
console.log(x > 0 || y > 0); // false
console.log(x < 0 || y > 0); // true

