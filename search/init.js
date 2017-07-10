const utils = require('../utils');

/**
 * The wrapper on search function
 * @param {function} searchFunc
 * @return {Promise.<void>}
 */
module.exports = async searchFunc => {
  const isBinary = searchFunc.name.toLowerCase().indexOf('binary') !== -1;
  const params = await utils.getParams('array', 'value');
  const newArray = utils.createArray(params.count, isBinary);
  const searchResult = searchFunc(newArray, params.value);

  utils.writeLogs('search/success.log', 'search/failure.log', searchResult);
  console.log(searchResult.message);
};
