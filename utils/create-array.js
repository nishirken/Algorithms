module.exports = (count, binary) => {
  const newArray = [];

  for (let i = 0; i < count; i++) {
    const newItem = binary ? i : Math.floor(Math.random() * count);

    newArray[i] = newItem;
  }

  return newArray;
};
