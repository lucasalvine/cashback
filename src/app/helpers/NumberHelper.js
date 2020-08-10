module.exports = {
  convertValue(value) {
    const valueFloat = parseFloat(value);
    return valueFloat.toFixed(2);
  },
};
