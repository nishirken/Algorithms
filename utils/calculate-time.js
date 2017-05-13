module.exports = timeCount => {
  const diff = process.hrtime(timeCount);

  return `spent time is: ${diff[0] + diff[1] / 1e9} s`;
};
