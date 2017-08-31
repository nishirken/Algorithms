const topologicalSort = require('../../topological-sort/topological-sort');
const relax = require('../relax/relax');

/**
 * @param {Array<number>} shortest - array with shortest ways values
 * @param {Array<null | number>} prev - array with prev edges values
 * @param {Array<Object<number, number>>} graph
 * @returns {void}
 */
const dagShortestWay = (shortest, prev, graph) => {
  const topologicalSorted = topologicalSort(graph);

  for (let i = 0; i < graph.length; i++) {
    shortest[i] = Infinity;
    prev[i] = null;
  }
  shortest[0] = 0;
  for (const node of topologicalSorted) {
    for (const adjacentNode in graph[node]) {
      relax(node, Number(adjacentNode), shortest, prev, graph);
    }
  }
};

module.exports = dagShortestWay;
