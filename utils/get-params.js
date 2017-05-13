const prompt = require('prompt-promise');

const getArray = async () => {
  const count = await prompt('Array count?\n');

  return count;
};
const getValue = async () => {
  const value = await prompt('Value?\n');

  return value;
};

module.exports = async (firstParam, secondParam) => {
  try {
    const value = secondParam === 'value' ? await getValue() : null;
    const count = firstParam === 'array' ? await getArray() : null;

    prompt.done();

    return {
      count: Number(count),
      value: Number(value),
    };
  } catch (error) {
    console.error(error);
    prompt.finish();
  }
};
