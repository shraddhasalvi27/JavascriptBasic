// Getters and setters allow you to define special methods to get and set the values of an object's properties.

class Rectangle {
    constructor(height, width) {
      this._height = height;
      this._width = width;
    }
  
    get area() {
      return this._height * this._width;
    }
  
    set height(value) {
      this._height = value;
    }
  }
  
  const rect = new Rectangle(10, 5);
  console.log(rect.area); // Output: 50
  rect.height = 20;
  console.log(rect.area); // Output: 100
  