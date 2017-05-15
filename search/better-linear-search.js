const init = require('./init');
const utils = require('../utils');

/**
 * Function for better linear search algo
 * @param {array} array - which should be treated
 * @param {number} searchValue - which should be searched
 * @return {object}
 */
const betterLinearSearch = (array, searchValue) => {
  const innerArray = Array.from(array);
  const time = process.hrtime();
  const lastIndex = innerArray.length - 1;
  const lastValue = innerArray[lastIndex];
  const result = {
    algoName: 'Better linear search',
    initial: innerArray.length,
  };
  let i = 0;

  innerArray[lastIndex] = searchValue;
  while (innerArray[i] !== searchValue) {
    i++;
  }
  innerArray[lastIndex] = lastValue;
  if (i < lastIndex || innerArray[lastIndex] === searchValue) {
    return Object.assign({}, result, {
      spentTime: utils.calculateTime(time),
      message: utils.showResult(i, time),
      foundedIndex: i,
      value: searchValue,
    });
  }

  return Object.assign({}, result, {
    spentTime: utils.calculateTime(time),
    message: utils.showResult(null, time),
    foundedIndex: null,
    value: null,
  });
};

init(betterLinearSearch);

module.exports = betterLinearSearch;
