console.log('booleans and html');
// booleans & comparison operator 

// booleans 
// true, false 

 let num1 = 7;
 let num2 = "7";
 console.log(num1<num2);
 //output is false

// == vs === 
console.log(num1 == num2); 
//result is true
//loose equality ,

console.log(num1 === num2);
//result false
// The === operator checks for both value and type equality.
// The == operator performs type coercion if the operands are of different types. In this case, it converts the string "7" to the number 7 and then compares them. As a result, the comparison evaluates to true. This is an example of loose equality where JavaScript tries to make the operands of the same type before making the comparison.

// != vs !==

console.log(num1 !== num2);
console.log(num1 != num2);


// false: This is straightforward. The boolean value false is inherently falsy.
// Empty String (""): When used in a boolean context, an empty string is treated as false.
// null: The special value null is considered falsy. It represents the absence of any object value.
// undefined: The special value undefined is also considered falsy. It indicates that a variable has been declared but has not been assigned a value.
// 0 (Zero): The numeric value 0 is considered falsy. Other non-zero numeric values are considered truthy.

if (false) {
    // This block won't be executed
  }
  
  if ("") {
    // This block won't be executed
  }
  
  if (null) {
    // This block won't be executed
  }
  
  if (undefined) {
    // This block won't be executed
  }
  
  if (0) {
    // This block won't be executed
  }
  