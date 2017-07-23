const init = require('./init');
const utils = require('../utils');

const swap = (items, firstIndex, secondIndex) => {
  const temp = items[firstIndex];

  items[firstIndex] = items[secondIndex];
  items[secondIndex] = temp;
};

const partition = (items, left, right) => {
  const pivot = items[Math.floor((right + left) / 2)];

  let i = left;
  let j = right;

  while (i <= j) {
    while (items[i] < pivot) {
      i++;
    }

    while (items[j] > pivot) {
      j--;
    }

    if (i <= j) {
      swap(items, i, j);
      i++;
      j--;
    }
  }

  return i;
};

const quickSort = (array, left, right) => {
  let index = null;

  if (array.length > 1) {
    index = partition(array, left, right);
    if (left < index - 1) {
      quickSort(array, left, index - 1);
    }
    if (index < right) {
      quickSort(array, index, right);
    }
  }

  return array;
};

const quickSortWrapper = array => {
  const newArray = Array.from(array);
  const time = process.hrtime();

  quickSort(newArray, 0, newArray.length - 1);

  return {
    algoName: 'Merge sort',
    initial: newArray.length,
    spentTime: utils.calculateTime(time),
    message: utils.showResult('sort', time),
    foundedIndex: null,
    value: newArray,
  };
};

init(quickSortWrapper);

module.exports = {
  quickSort,
  partition,
  swap,
};
