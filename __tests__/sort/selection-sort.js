const selectionSort = require('../../sort/selection-sort');

describe('Selection sort algorythm', () => {
  it('Should return sorted array', () => {
    const initialArray = [0, 3, 1, 4, 2];
    const expectedArray = [0, 1, 2, 3, 4];

    expect(selectionSort(initialArray).value).toEqual(expectedArray);
  });
});
