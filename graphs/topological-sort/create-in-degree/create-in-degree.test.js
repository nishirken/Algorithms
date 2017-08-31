const createInDegree = require('./create-in-degree');

describe('Create in degree function', () => {
  it('Should work', () => {
    const graph = [
      { 1: null, 2: null },
      { 3: null, 4: null },
      {},
      {},
      { 5: null, 6: null },
      {},
      { 7: null },
      {},
    ];
    const expectedInDegree = [0, 1, 1, 1, 1, 1, 1, 1];

    expect(createInDegree(graph)).toEqual(expectedInDegree);
  });
});

