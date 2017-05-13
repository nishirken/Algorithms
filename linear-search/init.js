const utils = require('../utils');

module.exports = async searchFunc => {
  const params = await utils.getParams();
  const newArray = utils.createArray(params.count);

  console.log(searchFunc(newArray, params.searchValue));
};
