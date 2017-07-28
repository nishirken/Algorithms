const selectionSort = require('../../sort/selection-sort');
const insertionSort = require('../../sort/insertion-sort');
const { mergeSort, merge } = require('../../sort/merge-sort');
const { quickSort, partition, swap } = require('../../sort/quick-sort');
const { countKeysEqual, sort } = require('../../sort/count-sort');

jest.mock('../../sort/init');
jest.mock('../../utils');

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

  describe('Quick sort', () => {
    test('Quick sort', () => {
      const initialArray = [0, 2, 1, 7, 11, 3];
      const expectedArray = [0, 1, 2, 3, 7, 11];

      expect(quickSort(initialArray, 0, initialArray.length - 1)).toEqual(expectedArray);
    });

    test('Partition function should return the pivot element of array', () => {
      const initialArray = [0, 2, 12, 1, 7, 11, 3];
      const expectedIndexOfQ = 2;

      expect(partition(initialArray, 0, initialArray.length - 1)).toBe(expectedIndexOfQ);
    });

    test('Swap function', () => {
      const array = [0, 3, 7, 1];
      const i = 1;
      const j = 3;
      const expectedArray = [0, 1, 7, 3];

      swap(array, i, j);
      expect(array).toEqual(expectedArray);
    });
  });

  describe('Count sort', () => {
    test('countKeysEqual function', () => {
      const array = [1, 0, 3, 2, 5, 1];
      const range = 5;
      const expected = [1, 2, 1, 1, 0, 1];

      expect(countKeysEqual(array, range)).toEqual(expected);
    });

    test('Sort function', () => {
      const initialArray = [1, 0, 3, 2, 5, 1];
      const equalArray = [1, 2, 1, 1, 0, 1];
      const expected = [0, 1, 1, 2, 3, 5];

      expect(sort(initialArray, equalArray)).toEqual(expected);
    });
  });
});
