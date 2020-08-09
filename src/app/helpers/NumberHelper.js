module.exports = {
  convertValue(value) {
    const value_float = parseFloat(value);
    return value_float.toFixed(2);
  },
};
