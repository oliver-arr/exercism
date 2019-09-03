export const isLeap = (year) => {

// year divisible by 4, not divisible by 100: leap year, OR
  // year divisible by 400: leap year
if(year % 4 === 0 && year % 100 !== 0 || year % 400 === 0){
  return true;

// year not divisible by 4: common year, OR
  // year divisible by 100, not divisible by 400: common year, OR
    // year divisible by 200, not divisible by 400: common year
  } else if (year % 4 !== 0 || year % 100 === 0 && year % 400 !== 0 || year % 200 === 0 && year % 400 !== 0){
    return false;
  }
};
