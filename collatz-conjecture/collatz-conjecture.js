export const steps = (number) => {
  let stepCount = 0;

  while(number > 1){
    if(number % 2 === 0){
      number /= 2;
      stepCount++;
    } else {
      number *= 3;
      number += 1;
      stepCount++;
    }
  } 
  console.log({number, stepCount});
  return stepCount;
};
