const betterLinearSearch = require('../../search/better-linear-search');

jest.mock('../../search/init');
jest.mock('../../utils');

describe('Better linear search', () => {
  const array = [0, 1, 2, 3, 4, 5];
  const value = 2;
  const failValue = 10;

  it('Should return index with searched value', () => {
    const result = betterLinearSearch(array, value);

    expect(result.foundedIndex).toBe(2);
  });

  it('Should return value with searched value', () => {
    const result = betterLinearSearch(array, value);

    expect(result.value).toBe(value);
  });

  it('Should return index, when the value doesn\'t founded', () => {
    const result = betterLinearSearch(array, failValue);

    expect(result.foundedIndex).toBe(null);
  });

  it('Should return value, when the value doesn\'t founded', () => {
    const result = betterLinearSearch(array, failValue);

    expect(result.value).toBe(null);
  });
});
