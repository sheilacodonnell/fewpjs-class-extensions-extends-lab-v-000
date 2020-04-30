class Polygon {
  constructor(sides) {
    this.sides = sides;
  }
 
  get countSides() {
    return this.sides.length;
  }
  
  get perimeter() {
    return this.sides.reduce((a,b) => a + b, 0)
  }
}

class Triangle extends Polygon {
  
  
    get isValid() {
    if (countSides() === 3) {
      return true
    }
    else
      return false
    }
}