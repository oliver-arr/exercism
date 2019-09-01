// retrieve the colour index from the array of COLORS using the built in Array method findIndex, which takes a callback function.
export const colorCode = color => COLORS.findIndex(element => element === color);

export const COLORS = ['black', 'brown', 'red', 'orange', 'yellow', 'green', 'blue', 'violet', 'grey', 'white'];
