module.exports = {
  percentageApplied(value) {
    if (value < 1000) return process.env.ORDER_VALUE_UNDER_THOUSAND;
    if (value >= 1000 && value <= 1500)
      return process.env.ORDER_VALUE_BETWEEN_THOUSAND_AND_FIVE;
    return process.env.ORDER_VALUE_OVER_FIVE;
  },
};
