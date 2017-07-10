const utils = require('../utils');

/**
 * The wrapper on search function
 * @param {function} sortFunc
 * @return {Promise.<void>}
 */
module.exports = async sortFunc => {
  const params = await utils.getParams('array');
  const newArray = utils.createArray(params.count);
  const sortResult = sortFunc(newArray, params.value);

  sortResult.value = [];
  utils.writeLogs('sort/success.log', 'sort/failure.log', sortResult);
  console.log(sortResult.message);
};
