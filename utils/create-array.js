module.exports = count => {
  const newArray = [];

  for (let i = 0; i < count; i++) {
    newArray[i] = Math.floor(Math.random() * count);
  }

  return newArray;
};
