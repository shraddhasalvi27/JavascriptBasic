// Static methods and properties belong to 
// the class itself rather than to instances of the class.

class MathUtilities {
    static pi = 3.14159;

    static circleArea(radius) {
        return MathUtilities.pi * radius * radius;
    }
}

console.log(MathUtilities.pi);  // Output: 3.14159
console.log(MathUtilities.circleArea(5));  // Output: 78.53975

// pi and circlearea are static properties