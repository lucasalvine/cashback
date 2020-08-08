const DateHelper = require("../helpers/DateHelper");

module.exports = {
  orderBuilder(order_cashback) {
    const orders = order_cashback.rows;

    return orders.map((orderCashback) => {
      return {
        order_code: orderCashback.order.code,
        order_value: orderCashback.order.value,
        order_data: DateHelper.convertDate(orderCashback.order.date),
        cashback_percentage: orderCashback.percentage * 100,
        cashback_value: orderCashback.value,
        order_status: orderCashback.order.status,
      };
    });
  },
};
