const init = require('./init');
const utils = require('../utils');

const linearSearch = (array, searchValue) => {
  const time = process.hrtime();
  const result = {
    algoName: 'Linear search',
    initial: array.length,
  };

  for (let i = 0; i < array.length; i++) {
    if (array[i] === searchValue) {
      return Object.assign({}, result, {
        spentTime: utils.calculateTime(time),
        message: utils.showResult(i, time),
        foundedIndex: i,
        foundedValue: searchValue,
      });
    }
  }

  return Object.assign({}, result, {
    spentTime: utils.calculateTime(time),
    message: utils.showResult(null, time),
    foundedIndex: null,
    foundedValue: null,
  });
};

init(linearSearch);
