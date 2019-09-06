export const value = bandColours => {

  return Number(bandColours.map(bandColour => {
    return COLOURS.indexOf(bandColour);
  }).join(''));
  
};

export const COLOURS = ['black', 'brown', 'red', 'orange', 'yellow', 'green', 'blue', 'violet', 'grey', 'white'];
