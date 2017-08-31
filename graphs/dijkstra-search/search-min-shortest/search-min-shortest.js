/**
 * Search node with min value
 * @param {Array<number>} shortest - array with shortest ways values
 * @param {Array<Object<number, number>>} Q - copy of graph
 * @returns {number}
 */
const searchMinShortest = (shortest, Q) => {
  let min = Infinity;
  let node = 0;

  for (const i in Q) {
    if (Q[i] && shortest[i] < min) {
      min = shortest[i];
      node = i;
    }
  }

  return Number(node);
};

module.exports = searchMinShortest;
