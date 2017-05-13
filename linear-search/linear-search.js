const init = require('./init');
const utils = require('../utils');

const linearSearch = (array, searchValue) => {
  const time = process.hrtime();

  for (let i = 0; i < array.length; i++) {
    if (array[i] === searchValue) {
      return `Founded index of value: ${i}, ${utils.calculateTime(time)}`;
    }
  }

  return `Not found, ${utils.calculateTime(time)}`;
};

init(linearSearch);
