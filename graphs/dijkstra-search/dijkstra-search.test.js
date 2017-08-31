const dijkstraSearch = require('./dijkstra-search');

describe('Dijkstra search', () => {
  it('Should work', () => {
    const graph = [
      { 1: 1, 2: 1 },
      { 3: 3, 4: 2 },
      {},
      {},
      {},
    ];
    const initialShortest = [];
    const initialPrev = [];
    const expectedShortest = [0, 1, 1, 4, 3];
    const expectedPrev = [null, 0, 0, 1, 1];

    dijkstraSearch(initialShortest, initialPrev, graph);
    expect(initialShortest).toEqual(expectedShortest);
    expect(initialPrev).toEqual(expectedPrev);
  });
});
