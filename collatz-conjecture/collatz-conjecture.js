export const steps = number => {
  let stepCount = 0;

  // error handling
  if(number < 1)
    throw new Error('Only positive numbers are allowed');

  while(number > 1){
    if(number % 2 === 0){
      number /= 2;
    } else {
      number *= 3;
      number += 1;
    }
    
    stepCount++;
  } 

  return stepCount;
};
