const prompt = require('prompt-promise');

module.exports = async () => {
  try {
    const count = await prompt('Array count?\n');
    const searchValue = await prompt('Search value?\n');

    prompt.done();

    return {
      count: Number(count),
      searchValue: Number(searchValue),
    };
  } catch (error) {
    console.error(error);
    prompt.finish();
  }
};
