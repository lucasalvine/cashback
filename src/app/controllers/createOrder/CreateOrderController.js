const CreateOrderService = require("../../services/createOrder/CreateOrderService");
const ResponseError = require("../../helpers/ResponseError");

class CreateOrderController {
  async store(request, response) {
    const { code, value, date, document } = request.body;

    const order = { code, value, date, document };

    const order_create = await CreateOrderService.execute(order);

    if (order_create.errors) {
      const message = "the order";
      return ResponseError.response_error_save(response, message);
    }

    //TODO
    if (order_create[0] === undefined)
      return ResponseError.response_error_save(response);

    return response.status(201).json({ ...order });
  }
}

module.exports = new CreateOrderController();
