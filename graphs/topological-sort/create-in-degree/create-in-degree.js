/**
 * Function for create array with in-degree nodes,
 * @param {Object<string, Array<number>>} graph
 * @returns {Array<number>} in-degree array
 */
const createInDegree = graph => {
  const inDegree = new Array(Object.keys(graph).length);

  for (let i = 0; i < inDegree.length; i++) {
    inDegree[i] = 0;
  }

  for (const node in graph) {
    for (const adjacentNodeIndex in graph[node]) {
      inDegree[adjacentNodeIndex]++;
    }
  }

  return inDegree;
};

module.exports = createInDegree;

