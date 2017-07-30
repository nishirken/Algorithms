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
    for (const adjacentNode of graph[node]) {
      inDegree[adjacentNode]++;
    }
  }

  return inDegree;
};

/**
 * Function for create array with zero-degree nodes,
 * @param {Array<number>} inDegreeArray
 * @returns {Array<number>} next array
 */
const createNext = inDegreeArray => {
  const next = [];

  for (const node in inDegreeArray) {
    if (inDegreeArray[node] === 0) {
      next.push(Number(node));
    }
  }

  return next;
};

/**
 * Function for create linearOrdering array
 * @param {Object<string, Array<number>>} graph
 * @param {Array<number>} nextArray with zero-degree nodes
 * @param {Array<number>} inDegreeArray with in-degree nodes
 * @returns {Array<number>} linearOrdering array
 */
const createLinearOrdering = (graph, nextArray, inDegreeArray) => {
  const linearOrder = [];
  let i = 0;

  while (i < nextArray.length) {
    const node = nextArray[i];

    delete nextArray[i];
    linearOrder.push(node);
    for (const adjacentNode of graph[node]) {
      inDegreeArray[adjacentNode]--;
      if (inDegreeArray[adjacentNode] === 0) {
        nextArray.push(adjacentNode);
      }
    }
    i++;
  }

  return linearOrder;
};

module.exports = {
  createInDegree,
  createNext,
  createLinearOrdering,
};
