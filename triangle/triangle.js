export class Triangle {
  constructor(sideOne, sideTwo, sideThree) {
    this.sideOne = sideOne;
    this.sideTwo = sideTwo;
    this.sideThree = sideThree;
    this.allSides = [this.sideOne, this.sideTwo, this.sideThree];

  }

  isEquilateral() {
    return this.allSides.every(side => side === this.sideOne);
  }

  isIsosceles() {   
    if([...new Set(this.allSides)].length !== this.allSides.length){
      return true;
    } else return false;
  }

  kind() {
    if(this.isEquilateral()){
      return 'equilateral'
    } else if(this.isIsosceles()){
      return 'isosceles';
    } else {
      return 'scalene';
    }
  }
}
