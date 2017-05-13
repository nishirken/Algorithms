const init = require('./init');
const utils = require('../utils');

const betterLinearSearch = (array, searchValue) => {
  const time = process.hrtime();
  const lastIndex = array.length - 1;
  const lastValue = array[lastIndex];
  const result = {
    algoName: 'Better linear search',
    arrayLength: array.length,
  };
  let i = 0;

  array[lastIndex] = searchValue;
  while (array[i] !== searchValue) {
    i++;
  }
  array[lastIndex] = lastValue;

  if (i < lastIndex || (array[lastIndex] = searchValue)) {
    return Object.assign({}, result, {
      spentTime: utils.calculateTime(time),
      message: utils.showResult(i, time),
      foundedIndex: i,
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

init(betterLinearSearch);
