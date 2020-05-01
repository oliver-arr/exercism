export const encode = (data) => {
  const dataChars = data.split("");
  let temp = [];

  const encoded = dataChars.reduce((acc, currVal, index) => {
    if (temp.length === 0) {
      temp.push(currVal);
    } else if (currVal !== temp[0]) {
      // console.log({ acc, currVal });
      acc += `${temp[0]}`;
      temp = [];
      temp.push(currVal);
      // pushes last character in data to acc
      if (index === dataChars.length - 1) {
        acc += `${temp[0]}`;
      }
    }
    // else if (currVal === temp[temp.length - 1]) {
    //   temp.push(currVal);
    // } else if (currVal !== temp[temp.length - 1]) {
    //   if (temp.length <= 1) {
    //     acc += `${temp[0]}`;
    //     temp = [];
    //   } else {
    //     acc += `${temp.length}${temp[0]}`;
    //     temp = [];
    //   }
    // }
    return acc;
  }, "");

  console.log(encoded);
  return encoded;
};

export const decode = () => {
  throw new Error("Remove this statement and implement this function");
};
