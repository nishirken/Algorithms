const init = require('./init');
const utils = require('../utils');

const getSearchResult = (array, searchValue, index = 0) => {
  if (index > array.length) {
    return null;
  } else if (array[index] === searchValue) {
    return index;
  }

  return getSearchResult(array, searchValue, index + 1);
};
const recursiveLinearSearch = (array, searchValue) => {
  const time = process.hrtime();
  const result = {
    algoName: 'Recursive Linear search',
    initial: array.length,
  };
  const searchRes = getSearchResult(array, searchValue, 0);

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

init(recursiveLinearSearch);
