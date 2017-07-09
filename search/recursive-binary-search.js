const init = require('./init');
const utils = require('../utils');

/**
 * Function for recursive binary search algo
 * @param {array} array - which should be treated
 * @param {number} searchValue - which should be searched
 * @param {number} start - start index
 * @param {number} end - end index
 * @return {*}
 */
const getSearchResult = (array, searchValue, start, end) => {
  if (start > end) {
    return null;
  }
  const mid = Math.round((start + end) / 2);

  if (array[mid] === searchValue) {
    return mid;
  } else if (array[mid] > searchValue) {
    return getSearchResult(array, searchValue, start, array[mid] - 1);
  }

  return getSearchResult(array, searchValue, array[mid] + 1, end);
};

/**
 * Recursive binary search wrapper
 * @param {array} array - which should be treated
 * @param {number} searchValue - which should be searched
 * @return {*}
 */
const recursiveBinarySearch = (array, searchValue) => {
  const newArray = Array.from(array);
  const time = process.hrtime();
  const result = {
    algoName: 'Recursive Binary search',
    initial: array.length,
  };
  const searchRes = getSearchResult(newArray, searchValue, 0, newArray.length - 1);

  if (searchRes) {
    return Object.assign({}, result, {
      spentTime: utils.calculateTime(time),
      message: utils.showResult(searchRes, time),
      foundedIndex: searchRes,
      foundedValue: searchValue,
    });
  }

  return Object.assign({}, result, {
    spentTime: utils.calculateTime(time),
    message: utils.showResult(null, time),
    foundedIndex: null,
    foundedValue: null,
  });
};

init(recursiveBinarySearch);

module.exports = recursiveBinarySearch;
