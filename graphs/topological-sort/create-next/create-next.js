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

module.exports = createNext;
