export const gigasecond = (date) => {
  const gigasecond = Math.pow(10, 12);
  let moment = Date.parse(date);
  let momentAfterGigasecond = new Date(moment + gigasecond);

  return momentAfterGigasecond;
};
