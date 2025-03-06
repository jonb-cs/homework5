class Square {
  constructor(side) {
    this.side = side;
  }

  perimeter (side) {
    return side * 4;
  }

  area (side) {
    return side * side;
  }

  diagonal(side) {
    return Math.sqrt(2*(side*side));
  }

  describe()  {
    return `Squre with side ${this.side} has a perimeter of ${this.perimeter(this.side)},
    area of ${this.area(this.side)}, and a diagonal of ${this.diagonal(this.side).toPrecision(4)}`;
  }

}

const size2Square = new Square('2');
console.log(`${size2Square.describe()}`);

const size3Square = new Square('3');
console.log(`${size3Square.describe()}`);

const size5Square = new Square('5');
console.log(`${size5Square.describe()}`);