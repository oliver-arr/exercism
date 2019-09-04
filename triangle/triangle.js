export class Triangle {
  constructor(sideOne, sideTwo, sideThree) {
    this.sideOne = sideOne;
    this.sideTwo = sideTwo;
    this.sideThree = sideThree;
    this.allSides = [this.sideOne, this.sideTwo, this.sideThree];

  }

  // exception handling
  checkForIllegalTriangle(){
    if(this.allSides.some(length => length <= 0)){
      throw new Error('All sides have to be of length > 0');
    }
  }

  checkTriangleInequality(){
    if(this.sideOne + this.sideTwo < this.sideThree || 
      this.sideOne + this.sideThree < this.sideTwo || 
      this.sideTwo + this.sideThree < this.sideOne){
        throw new Error('The sum of two sides must be >= the third side');
      }
  }

  isEquilateral() {
    return this.allSides.every(side => side === this.sideOne);
  }

  isIsosceles() {   
  // Set only accepts unique values, therefore,
  // if duplicates are found, a comparison is made between old and new array lengths.
    if([...new Set(this.allSides)].length !== this.allSides.length){
      return true;
    } else return false;
  }

  kind() {
    this.checkForIllegalTriangle();
    this.checkTriangleInequality();

    if(this.isEquilateral()){
      return 'equilateral';
    } else if(this.isIsosceles()){
      return 'isosceles';
    } else {
      return 'scalene';
    }
  }
}
