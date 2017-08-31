const relax = require('./relax');

describe('Relax function', () => {
  it('Should work', () => {
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
});
