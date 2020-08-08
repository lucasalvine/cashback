const FindOrderService = require("../../services/findOrder/FindOrderService");
const RequestError = require("../../helpers/RequestError");
const OrderBuilder = require("../../builders/OrderBuilder");

class FindOrderController {
  async index(request, response) {
    const orders = await FindOrderService.execute(request.query.page);

    if (!orders) {
      return RequestError.request_error(response);
    }

    const orders_cashback = JSON.parse(orders);

    if (orders_cashback.rows[0] === undefined) {
      return RequestError.request_error_file(response);
    }

    return response.status(201).json({
      data: OrderBuilder.orderBuilder(orders_cashback),
    });
  }
}

module.exports = new FindOrderController();
