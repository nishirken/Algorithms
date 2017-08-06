const { createInDegree, createNext, createLinearOrdering } =
  require('../../graphs/topological-sort');
const { relax, searchMinShortest, dukstraSearch } = require('../../graphs/dukstra-sort');

describe('Graphs', () => {
  describe('Topological sort', () => {
    const graph = Object.freeze({
      0: [2],
      1: [3],
      2: [5, 6],
      3: [6, 7, 4],
      4: [8, 9],
      5: [],
      6: [],
      7: [],
      8: [],
      9: [],
    });
    const expectedInDegree = () => [0, 0, 1, 1, 1, 1, 2, 1, 1, 1];
    const expectedNext = () => [0, 1];

    test('inDegree function', () => {
      expect(createInDegree(graph)).toEqual(expectedInDegree());
    });

    test('next function', () => {
      expect(createNext(expectedInDegree())).toEqual(expectedNext());
    });

    /**
     * There are more than one correct result of topological sort,
     * In this case we go from left to right in a graph traversal
     */
    test('createLinearOrdering function', () => {
      const expectedOrder = [0, 1, 2, 3, 5, 6, 7, 4, 8, 9];

      expect(createLinearOrdering(graph, expectedNext(), expectedInDegree())).toEqual(expectedOrder);
    });
  });

  describe('Search shortest way', () => {
    test('Relax function', () => {
      const graph = [
        { 1: 1, 2: 1 },
        { 3: 3, 4: 2 },
        {},
        {},
        {},
      ];
      const shortest = [0, Infinity, Infinity, Infinity, Infinity];
      const prev = [null, null, null, null, null];
      const shortestAfterRelax = [0, 1, Infinity, Infinity, Infinity];
      const prevAfterRelax = [null, 0, null, null, null];

      relax(0, 1, shortest, prev, graph);
      expect(shortest).toEqual(shortestAfterRelax);
      expect(prev).toEqual(prevAfterRelax);
    });

    test('searchMinShortest function', () => {
      const shortest = [0, 1, 1, 4, 3];
      const Q = [
        undefined,
        { 3: 3, 4: 2 },
        {},
        {},
        {},
      ];

      expect(searchMinShortest(shortest, Q)).toBe(1);
    });

    test('Dijkstra search', () => {
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

      dukstraSearch(initialShortest, initialPrev, graph);
      expect(initialShortest).toEqual(expectedShortest);
      expect(initialPrev).toEqual(expectedPrev);
    });
  });
});
