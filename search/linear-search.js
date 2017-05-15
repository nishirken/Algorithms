const init = require('./init');
const utils = require('../utils');

/**
 * Function for linear search algo
 * @param {array} array - which should be treated
 * @param {number} searchValue - which should be searched
 * @return {object}
 */
const linearSearch = (array, searchValue) => {
  const innerArray = Array.from(array);
  const time = process.hrtime();
  const result = {
    algoName: 'Linear search',
    initial: innerArray.length,
  };

  for (let i = 0; i < innerArray.length; i++) {
    if (innerArray[i] === searchValue) {
      return Object.assign({}, result, {
        spentTime: utils.calculateTime(time),
        message: utils.showResult(i, time),
        foundedIndex: i,
        foundedValue: searchValue,
      });
    }
  }

  return Object.assign({}, result, {
    spentTime: utils.calculateTime(time),
    message: utils.showResult(null, time),
    foundedIndex: null,
    foundedValue: null,
  });
};

init(linearSearch);

module.exports = linearSearch;
