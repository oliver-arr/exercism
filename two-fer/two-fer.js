/* first solution
export const twoFer = name => (name ? `One for ${name}, one for me.`: `One for you, one for me.`);
*/

// Refactored using default parameters, after receieving feedback.
export const twoFer = (name = 'you') => `One for ${name}, one for me.`;