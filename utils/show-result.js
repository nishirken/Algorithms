const calculateTime = require('./calculate-time');

module.exports = (value, time) => {
  const calculatedTime = calculateTime(time);

  if (value === 'sort') {
    return `Array sorted, spent time is: ${calculatedTime}`;
  }

  return typeof value === 'number' ?
    `The result is: ${value}, ${calculatedTime}` :
    `Not found, ${calculatedTime}`;
};
