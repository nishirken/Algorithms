const calculateTime = require('./calculate-time');

module.exports = (value, time) => {
  const calculatedTime = calculateTime(time);

  return typeof value === Number ?
    `Founded index of value: ${value}, ${calculatedTime}` :
    `Not found, ${calculatedTime}`;
};
