const DateHelper = require("../helpers/DateHelper");

module.exports = {
  orderBuilder(order_cashback) {
    const orders = order_cashback.rows;

    return orders.map((orderCashback) => {
      return {
        orderCode: orderCashback.order.code,
        orderValue: orderCashback.order.value,
        orderData: DateHelper.convertDate(orderCashback.order.date),
        cashbackPercentage: orderCashback.percentage * 100,
        cashbackValue: orderCashback.value,
        orderStatus: orderCashback.order.status,
      };
    });
  },
};
