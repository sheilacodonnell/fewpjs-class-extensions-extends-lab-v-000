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
      if (this.countSides === 3) {
        return true
      }
      else
        return false
      }
}

class Square extends Polygon {
  
  get area() {
    this.sides[0] * this.sides[0]
  }
  // get isValid() {
  //   this.sides.every(function (e) {
  //   return this.sides[0] === e;
  //   }
  // )}
}

