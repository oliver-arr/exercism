/* first attempt
export const colorCode = color => COLORS.findIndex(element => element === color);
*/

// refactored first attempt
export const colorCode = color => COLORS.indexOf(color);

export const COLORS = ['black', 'brown', 'red', 'orange', 'yellow', 'green', 'blue', 'violet', 'grey', 'white'];
