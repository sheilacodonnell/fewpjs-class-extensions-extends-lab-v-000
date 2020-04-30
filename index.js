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
  isValid() {
    return this.countSides() === 3 ? true : false
  }
}