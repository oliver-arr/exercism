export const isArmstrongNumber = (num) => {
  const power = num.toString().split("").length;
  const digits = num
    .toString()
    .split("")
    .map((num) => Number(num));

  const sum = digits.reduce((acc, curVal) => {
    return acc + Math.pow(curVal, power);
  }, 0);
  return sum === num;
};
