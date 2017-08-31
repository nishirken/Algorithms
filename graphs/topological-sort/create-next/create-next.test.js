const createNext = require('./create-next');

describe('Create next function', () => {
  it('Should work', () => {
    const expectedInDegree = [0, 1, 1, 1, 1, 1, 1, 1];
    const expectedNext = [0];

    expect(createNext(expectedInDegree)).toEqual(expectedNext);
  });
});
