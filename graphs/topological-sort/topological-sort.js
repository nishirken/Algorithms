const createInDegree = require('./create-in-degree/create-in-degree');
const createNext = require('./create-next/create-next');

/**
 * Function for create linearOrdering array
 * @param {Object<string, Array<number>>} graph
 * @returns {Array<number>} linearOrdering array
 */
const topologicalSort = graph => {
  const linearOrder = [];
  const inDegreeArray = createInDegree(graph);
  const nextArray = createNext(inDegreeArray);
  let i = 0;

  while (i < nextArray.length) {
    const node = nextArray[i];

    delete nextArray[i];
    linearOrder.push(node);
    for (const adjacentNodeIndex in graph[node]) {
      const numbered = Number(adjacentNodeIndex);

      inDegreeArray[numbered]--;
      if (inDegreeArray[numbered] === 0) {
        nextArray.push(numbered);
      }
    }
    i++;
  }

  return linearOrder;
};

module.exports = topologicalSort;
