const searchMinShortest = require('./search-min-shortest');

describe('Search min shortest', () => {
  it('Should work', () => {
    const shortest = [6, 2, 1, 4, 3];
    const Q = [
      {},
      { 3: 3, 4: 2 },
      { 2: 1, 1: 2 },
      {},
      {},
    ];

    expect(searchMinShortest(shortest, Q)).toBe(2);
  });
});

