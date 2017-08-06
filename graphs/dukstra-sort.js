/**
 * Function for relaxing the edge of the graph
 * @param {number} u - prev. node of v
 * @param {number} v - current node of graph
 * @param {Array<number>} shortest - array with shortest ways values
 * @param {Array<null | number>} prev - array with prev edges values
 * @param {Array<Object<number, number>>} graph
 * @returns {void}
 */
const relax = (u, v, shortest, prev, graph) => {
  if (shortest[u] + graph[u][v] < shortest[v]) {
    shortest[v] = shortest[u] + graph[u][v];
    prev[v] = u;
  }
};

/**
 * Search node with min value
 * @param {Array<number>} shortest - array with shortest ways values
 * @param {Array<Object<number, number>>} Q - copy of graph
 * @returns {number}
 */
const searchMinShortest = (shortest, Q) => {
  let min = Infinity;

  for (const i in Q) {
    if (Q[i] && shortest[i] < min) {
      min = i;
    }
  }

  return Number(min);
};

/**
 * Dijkstra search function
 * @param {Array<number>} shortest - array with shortest ways values
 * @param {Array<null | number>} prev - array with prev edges values
 * @param {Array<Object<number, number>>} graph
 * @returns {void}
 */
const DijkstraSearch = (shortest, prev, graph) => {
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

module.exports = {
  relax,
  searchMinShortest,
  DijkstraSearch,
};
