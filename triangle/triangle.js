export class Triangle {
  constructor(sideOne, sideTwo, sideThree) {
    this.sideOne = sideOne;
    this.sideTwo = sideTwo;
    this.sideThree = sideThree;
  }

  isEquilateral() {
    return ([this.sideOne, this.sideTwo, this.sideThree].every(side => side === this.sideOne)) ? true: false;
  }

  isIsosceles(side = this.sideOne, fromIndex = 1) {
    return ([this.sideOne, this.sideTwo, this.sideThree].includes(side, fromIndex)) ? true: this.isIsosceles(this.sideThree, 0);
  }

  kind() {
    if(this.isEquilateral()){
      return 'equilateral'
    } else if(this.isIsosceles()){
      return 'isosceles';
    }
  }
}
