/* 
export const reverseString = str => [...str].reverse().join('');
*/

// implemented my version of the in-built reverse() functionality
export const reverseString = str => {
  const strCharacters = [...str];
  let strReversed = '';
  let index = strCharacters.length - 1;

  while(strReversed.length < strCharacters.length){
    strReversed += `${strCharacters[index]}`;
    index--;
  }

return strReversed;
};