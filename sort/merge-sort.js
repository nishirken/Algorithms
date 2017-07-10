const init = require('./init');
const utils = require('../utils');

const merge = (leftArray, rightArray) => {
  const result = [];
  let il = 0,
    ir = 0;

  while (il < leftArray.length && ir < rightArray.length) {
    if (leftArray[il] < rightArray[ir]) {
      result.push(leftArray[il++]);
    } else {
      result.push(rightArray[ir++]);
    }
  }

  return result.concat(leftArray.slice(il)).concat(rightArray.slice(ir));
};

const mergeSort = array => {
  if (array.length < 2) {
    return array;
  }

  const mid = Math.floor(array.length / 2);
  const left = array.slice(0, mid);
  const right = array.slice(mid);

  return merge(mergeSort(left), mergeSort(right));
};

const mergeSortWrapper = array => {
  const newArray = Array.from(array);
  const time = process.hrtime();

  mergeSort(newArray);

  return {
    algoName: 'Merge sort',
    initial: newArray.length,
    spentTime: utils.calculateTime(time),
    message: utils.showResult('sort', time),
    foundedIndex: null,
    value: newArray,
  };
};

init(mergeSortWrapper);

module.exports = {
  mergeSort,
  merge,
};
