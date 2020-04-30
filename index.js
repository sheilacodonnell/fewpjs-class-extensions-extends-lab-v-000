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
    let a = this.sides[0];
    let b = this.sides[1];
    let c = this.sides[2];
    
    get isValid() {
      if (this.countSides === 3 && (a + b <= c || a + c <= b || b + c <= a) ) {
        return true
      }
      else
        return false
      }
}

class Square extends Polygon {
  
  get area() {
    return this.sides[0] * this.sides[0]
  }
  
  get isValid() {
    let squareSides = this.sides
    let result = squareSides.every(function (e) {
      return squareSides[0] === e;
    }
  )
    return result
  }
}

