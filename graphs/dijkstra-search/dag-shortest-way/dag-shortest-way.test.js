jest.mock('../../topological-sort/topological-sort', () => () => [0, 1, 2, 5, 6, 3, 4, 7, 8, 9]);
const dagShortestWay = require('./dag-shortest-way');

describe('Search shortest way', () => {
  test('DagShortestPaths function', () => {
    const graph = [
      { 1: 1, 2: 3 },
      { 5: 2, 6: 1, 3: 1 },
      { 3: 4 },
      { 7: 1, 4: 2 },
      { 8: 3, 9: 1 },
      {},
      {},
      {},
      {},
      {},
    ];
    const initialShortest = [];
    const initialPrev = [];
    const expectedShortest = [0, 1, 3, 2, 4, 3, 2, 3, 7, 5];
    const expectedPrev = [null, 0, 0, 1, 3, 1, 1, 3, 4, 4];

    dagShortestWay(initialShortest, initialPrev, graph);
    expect(initialShortest).toEqual(expectedShortest);
    expect(initialPrev).toEqual(expectedPrev);
  });
});
