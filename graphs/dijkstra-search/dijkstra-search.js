const relax = require('./relax/relax');
const searchMinShortest = require('./search-min-shortest/search-min-shortest');

/**
 * Dijkstra search function
 * @param {Array<number>} shortest - array with shortest ways values
 * @param {Array<null | number>} prev - array with prev edges values
 * @param {Array<Object<number, number>>} graph
 * @returns {void}
 */
const dijkstraSearch = (shortest, prev, graph) => {
  const Q = [];
  let i = 0;

  for (const v in graph) {
    shortest[v] = Infinity;
    prev[v] = null;
    Q[v] = graph[v];
  }
  shortest[0] = 0;

  while (i < Q.length) {
    const u = searchMinShortest(shortest, Q);

    Q[u] = undefined;
    for (const v in graph[u]) {
      relax(u, v, shortest, prev, graph);
    }
    i++;
  }
};

module.exports = dijkstraSearch;
