export class Triangle {
  constructor(sideOne, sideTwo, sideThree) {
    this.sideOne = sideOne;
    this.sideTwo = sideTwo;
    this.sideThree = sideThree;
    this.allSides = [this.sideOne, this.sideTwo, this.sideThree];

  }

  // exception handling
  checkForIllegalTriangle(){
    if(this.allSides.includes(0)) {
      throw new Error('All sides have to be of length > 0');
    }
  }

  isEquilateral() {
    return this.allSides.every(side => side === this.sideOne);
  }

  isIsosceles() {   
  // Set only accepts unique values, therfore,
  // if duplicates are found, a comparison is made between old and new array lengths.
    if([...new Set(this.allSides)].length !== this.allSides.length){
      return true;
    } else return false;
  }

  kind() {
    this.checkForIllegalTriangle();

    if(this.isEquilateral()){
      return 'equilateral';
    } else if(this.isIsosceles()){
      return 'isosceles';
    } else {
      return 'scalene';
    }
  }
}
