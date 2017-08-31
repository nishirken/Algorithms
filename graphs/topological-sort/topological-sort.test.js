jest.mock('./create-in-degree/create-in-degree', () => () => [0, 1, 1, 1, 1, 1, 1, 1]);
jest.mock('./create-next/create-next', () => () => [0]);
const topologicalSort = require('./topological-sort');

describe('Topological sort', () => {
  it('Should work', () => {
    /**
     * There are more than one correct result of topological sort,
     * In this case we go from left to right in a graph traversal
     */
    const graph = [
      { 1: null, 2: null },
      { 3: null, 4: null },
      {},
      {},
      { 5: null, 6: null },
      {},
      { 7: null },
      {},
    ];
    const expectedOrder = [0, 1, 2, 3, 4, 5, 6, 7];

    expect(topologicalSort(graph)).toEqual(expectedOrder);
  });
});
