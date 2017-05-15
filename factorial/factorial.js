const utils = require('../utils');

/**
 * Recursive factorial function
 * @param {number} value - current factorial step
 * @return {number} next factorial step
 */
const getFactorial = value => {
  if (value === 0) {
    return 1;
  }

  return value * getFactorial(value - 1);
};

/**
 * Calculating run time of getFactorial function
 * @param {number} value - for search
 * @return {object}
 */
const calculateTime = value => {
  const time = process.hrtime();
  const factorial = getFactorial(value);

  return {
    algoName: 'Factorial',
    initial: null,
    foundedIndex: null,
    spentTime: utils.calculateTime(time),
    message: utils.showResult(factorial, time),
    value: factorial,
  };
};

/**
 * Factorial function wrapper
 * @return {Promise.<void>}
 */
const init = async () => {
  try {
    const params = await utils.getParams(null, 'value');
    const result = calculateTime(params.value);

    result.initial = params.value;

    utils.writeLogs('factorial/success.log', 'factorial/failure.log', result);
    console.log(result.message);
  } catch (error) {
    console.error(error);
  }
};

init();
