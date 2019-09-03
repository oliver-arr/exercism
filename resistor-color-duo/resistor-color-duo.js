export const value = (bandColours) => {

  let bandColour = [];

  bandColours.forEach((colour) => {
    bandColour.push(COLOURS.indexOf(colour));
    
  });
  return +bandColour.join('');
};

export const COLOURS = ['black', 'brown', 'red', 'orange', 'yellow', 'green', 'blue', 'violet', 'grey', 'white'];
