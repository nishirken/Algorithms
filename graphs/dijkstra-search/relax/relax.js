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

module.exports = relax;
