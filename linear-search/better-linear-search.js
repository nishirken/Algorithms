const init = require('./init');
const utils = require('../utils');

const betterLinearSearch = (array, searchValue) => {
  const time = process.hrtime();
  const lastIndex = array.length - 1;
  const lastValue = array[lastIndex];
  let i = 0;

  array[lastIndex] = searchValue;
  while (array[i] !== searchValue) {
    i++;
  }
  array[lastIndex] = lastValue;

  return i < lastIndex || (array[lastIndex] = searchValue) ?
    utils.showResult(i, time) :
    utils.showResult(null, time);
};

init(betterLinearSearch);
