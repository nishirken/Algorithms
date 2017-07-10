const selectionSort = require('../../sort/selection-sort');
const insertionSort = require('../../sort/insertion-sort');
const { mergeSort, merge } = require('../../sort/merge-sort');

describe('Sort algorithms', () => {
  test('Selection sort', () => {
    const initialArray = [0, 3, 1, 4, 2];
    const expectedArray = [0, 1, 2, 3, 4];

    expect(selectionSort(initialArray).value).toEqual(expectedArray);
  });

  test('Insertion sort', () => {
    const initialArray = [0, 3, 1, 4, 2, 9, 10, 1, 1, 13];
    const expectedArray = [0, 1, 1, 1, 2, 3, 4, 9, 10, 13];

    expect(insertionSort(initialArray).value).toEqual(expectedArray);
  });

  test('Merge sort', () => {
    const initialArray = [0, 2, 1, 7, 11, 3];
    const expectedArray = [0, 1, 2, 3, 7, 11];

    expect(mergeSort(initialArray, 0, initialArray.length - 1)).toEqual(expectedArray);
  });

  test('Merge function', () => {
    const firstArray = [1, 2, 4];
    const secondArray = [3, 4, 6];
    const mergedArray = [1, 2, 3, 4, 4, 6];

    expect(merge(firstArray, secondArray)).toEqual(mergedArray);
  });
});
