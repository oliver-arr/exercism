export const value = (bandColours) => {

  let resistorValue = '';

  bandColours.forEach(bandColour => {
    resistorValue += `${COLOURS.indexOf(bandColour)}`;
  });
  
  return +resistorValue;
};

export const COLOURS = ['black', 'brown', 'red', 'orange', 'yellow', 'green', 'blue', 'violet', 'grey', 'white'];
