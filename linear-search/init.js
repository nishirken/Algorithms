const utils = require('../utils');

module.exports = async searchFunc => {
  const params = await utils.getParams('array', 'value');
  const newArray = utils.createArray(params.count);
  const searchResult = searchFunc(newArray, params.searchValue);

  utils.writeLogs('linear-search/success.log', 'linear-search/failure.log', searchResult);
  console.log(searchResult.message);
};
