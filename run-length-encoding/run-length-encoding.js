export const encode = (data) => {
  const dataChars = data.split("");
  let temp = [];

  const encoded = dataChars.reduce((acc, currVal, index) => {
    if (temp.length === 0) {
      temp.push(currVal);
    } else if (currVal !== temp[0]) {
      if (temp.length <= 1) {
        acc += `${temp[0]}`;
        temp = [];
        temp.push(currVal);

        // pushes last character in data to acc
        if (index === dataChars.length - 1) {
          acc += `${temp[0]}`;
        }
      } else {
        // same characters are pushed to acc
        acc += `${temp.length}${temp[0]}`;

        // pushes last character in data to acc
        if (index === dataChars.length - 1) {
          console.log({ acc, currVal, index, temp });
          acc += `${temp.length}${temp[0]}`;
        }

        temp = [];
        temp.push(currVal);
      }
    } else if (index === dataChars.length - 1 && currVal === temp[0]) {
      // deals with last char
      temp.push(currVal);
      acc += `${temp.length}${temp[0]}`;
      console.log({ acc, currVal, index, temp });
    } else {
      temp.push(currVal);
    }
    return acc;
  }, "");

  console.log(encoded);
  return encoded;
};

export const decode = () => {
  throw new Error("Remove this statement and implement this function");
};
