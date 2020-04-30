class Polygon {
  constructor(sides) {
    this.sides = sides;
  }
 
  get area() {
    return this.sideLength * this.sideLength;
  }
 
}