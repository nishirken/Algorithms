const init = require('./init');
const utils = require('../utils');

const selectionSort = array => {
  const newArray = Array.from(array);
  const time = process.hrtime();
  const end = newArray.length - 1;
  let smallest = 0;

  for (let i = 0; i < end; i++) {
    smallest = i;

    for (let j = i + 1; j <= end; j++) {
      if (newArray[j] < newArray[smallest]) {
        smallest = j;
      }
    }

    const temp = newArray[i];

    newArray[i] = newArray[smallest];
    newArray[smallest] = temp;
  }

  return {
    algoName: 'Selection sort',
    initial: newArray.length,
    spentTime: utils.calculateTime(time),
    message: utils.showResult('sort', time),
    foundedIndex: null,
    value: newArray,
  };
};

selectionSort([0, 3, 1, 4, 2]);

module.exports = selectionSort;
