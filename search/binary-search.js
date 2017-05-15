const init = require('./init');
const utils = require('../utils');

/**
 * Function for binary search algo
 * @param {array} array - which should be treated
 * @param {number} searchValue - which should be searched
 * @return {object}
 */
const binarySearch = (array, searchValue) => {
  const time = process.hrtime();
  const sortedArray = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
  let start = 0;
  let end = sortedArray.length - 1;
  const result = {
    algoName: 'Binary search',
    initial: sortedArray.length,
  };

  while (start <= end) {
    const mid = Math.round((start + end) / 2);

    if (sortedArray[mid] === searchValue) {
      return Object.assign({}, result, {
        spentTime: utils.calculateTime(time),
        message: utils.showResult(mid, time),
        foundedIndex: mid,
        value: searchValue,
      });
    } else if (sortedArray[mid] > searchValue) {
      end = mid - 1;
    } else {
      start = mid + 1;
    }
  }

  return Object.assign({}, result, {
    spentTime: utils.calculateTime(time),
    message: utils.showResult(null, time),
    foundedIndex: null,
    value: null,
  });
};

init(binarySearch);
