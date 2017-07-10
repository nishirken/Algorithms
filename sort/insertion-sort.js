const init = require('./init');
const utils = require('../utils');

const insertionSort = array => {
  const newArray = Array.from(array);
  const time = process.hrtime();
  const end = newArray.length - 1;

  for (let i = 1; i <= end; i++) {
    const key = newArray[i];
    let j = i - 1;

    while (j > 0 && newArray[j] > key) {
      newArray[j + 1] = newArray[j];
      j--;
    }
    newArray[j + 1] = key;
  }

  return {
    algoName: 'Insertion sort',
    initial: newArray.length,
    spentTime: utils.calculateTime(time),
    message: utils.showResult('sort', time),
    foundedIndex: null,
    value: newArray,
  };
};

init(insertionSort);

module.exports = insertionSort;
