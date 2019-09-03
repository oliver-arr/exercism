export const value = (bandColours) => {

  let bandColour = '';

  bandColours.forEach((colour) => {
    bandColour += `${COLOURS.indexOf(colour)}`;
    
  });
  return +bandColour;
};

export const COLOURS = ['black', 'brown', 'red', 'orange', 'yellow', 'green', 'blue', 'violet', 'grey', 'white'];
