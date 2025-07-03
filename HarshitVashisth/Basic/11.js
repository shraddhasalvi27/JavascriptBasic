// falsy Values: false, 0, -0, 0n, "" (empty string), null, undefined, and NaN.

if (0) {
    console.log('This will not be executed'); // 0 is falsy
}

if ('hello') {
    console.log('This will be executed'); // non-empty string is truthy
}


// Comparison Operators: Used to compare values, resulting in a Boolean (true or false).
// Booleans: Represent true or false values, used extensively in control flow statements.
// Truthy and Falsy: Certain values are implicitly converted to true or false in Boolean contexts. 
