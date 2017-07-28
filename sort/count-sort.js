const init = require('./init');
const utils = require('../utils');

const countKeysEqual = (array, range) => {
  const equal = new Array(range + 1);
  const last = array.length;

  for (let i = 0; i < equal.length; i++) {
    equal[i] = 0;
  }

  for (let i = 0; i < last; i++) {
    equal[array[i]]++;
  }

  return equal;
};

const sort = (array, equalArray) => {
  let sortedIndex = 0;

  for (let i = 0; i < equalArray.length; i++) {
    while (equalArray[i] > 0) {
      array[sortedIndex++] = i;
      equalArray[i]--;
    }
  }

  return array;
};

const maxValueSearch = array => {
  let maxValue = 0;

  for (let i = 0; i < array.length; i++) {
    maxValue = maxValue < array[i] ? array[i] : maxValue;
  }

  return maxValue;
};

const countSortWrapper = array => {
  const newArray = Array.from(array);
  const maxValue = maxValueSearch(newArray);
  const time = process.hrtime();

  sort(newArray, countKeysEqual(newArray, maxValue));

  return {
    algoName: 'Count sort',
    initial: newArray.length,
    spentTime: utils.calculateTime(time),
    message: utils.showResult('sort', time),
    foundedIndex: null,
    value: newArray,
  };
};

init(countSortWrapper);

module.exports = {
  countKeysEqual,
  sort,
};
