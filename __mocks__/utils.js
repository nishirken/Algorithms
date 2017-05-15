module.exports = {
  calculateTime: jest.fn(time => time),
  showResult: jest.fn((index, time) => {
    return {
      index,
      time,
    };
  }),
};
