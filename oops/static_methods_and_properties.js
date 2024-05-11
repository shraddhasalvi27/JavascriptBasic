// Static methods and properties are defined on the class itself, rather than on the prototype.

class MathUtils {
    static add(a, b) {
      return a + b;
    }
  }
  
  console.log(MathUtils.add(5, 3)); // Output: 8
  