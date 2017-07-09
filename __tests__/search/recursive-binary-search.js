const recursiveBinarySearch = require('../../search/recursive-binary-search');

jest.mock('../../search/init');
jest.mock('../../utils');

describe('Recursive binary search', () => {
  const array = [0, 1, 2, 3, 4, 5];
  const value = 2;
  const failValue = 10;

  it('Should return index with searched value', () => {
    const result = recursiveBinarySearch(array, value);

    expect(result.foundedIndex).toBe(value);
  });

  it('Should return value with searched value', () => {
    const result = recursiveBinarySearch(array, value);

    expect(result.foundedValue).toBe(value);
  });

  it('Should return index, when the value doesn\'t founded', () => {
    const result = recursiveBinarySearch(array, failValue);

    expect(result.foundedIndex).toBe(null);
  });

  it('Should return value, when the value doesn\'t founded', () => {
    const result = recursiveBinarySearch(array, failValue);

    expect(result.foundedValue).toBe(null);
  });
});
