const calculateTime = require('./calculate-time');

module.exports = (value, time) => {
  const calculatedTime = calculateTime(time);

  return typeof value === 'number' ?
    `The result is: ${value}, ${calculatedTime}` :
    `Not found, ${calculatedTime}`;
};
