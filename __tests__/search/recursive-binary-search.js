const getSearchResult = require('../../search/recursive-binary-search');

jest.mock('../../search/init');
jest.mock('../../utils');

describe('Recursive binary search', () => {
  const array = [0, 1, 2, 3, 4, 5];
  const value = 2;
  const failValue = 10;

  it('Should return index with searched value', () => {
    const result = getSearchResult(array, value, 0, array.length - 1);

    expect(result).toBe(2);
  });

  it('Should return index, when the value doesn\'t founded', () => {
    const result = getSearchResult(array, failValue, 0, array.length - 1);

    expect(result).toBe(null);
  });
});
