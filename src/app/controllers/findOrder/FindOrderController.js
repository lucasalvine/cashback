const FindOrderService = require("../../services/findOrder/FindOrderService");
const ResponseError = require("../../helpers/ResponseError");
const OrderBuilder = require("../../builders/OrderBuilder");

class FindOrderController {
  async index(request, response) {
    const orders = await FindOrderService.execute(request.query.page);

    if (!orders) {
      return ResponseError.response_error_save(response);
    }

    const ordersCashback = JSON.parse(orders);

    if (ordersCashback.rows[0] === undefined) {
      return ResponseError.response_error_file(response);
    }

    return response.status(201).json({
      data: OrderBuilder.orderBuilder(ordersCashback),
    });
  }
}

module.exports = new FindOrderController();
