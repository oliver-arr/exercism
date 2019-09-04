export class Triangle {
  constructor(sideOne, sideTwo, sideThree) {
    this.sideOne = sideOne;
    this.sideTwo = sideTwo;
    this.sideThree = sideThree;
  }

  isEquilateral() {
    return ([this.sideOne, this.sideTwo, this.sideThree].every(side => side === this.sideOne)) ? true: false;
  }

  kind() {
    if(this.isEquilateral()){
      return 'equilateral'
    } else {
      return 'not equilateral';
    }
  }
}
