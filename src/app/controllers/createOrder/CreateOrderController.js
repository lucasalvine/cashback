const CreateOrderService = require("../../services/createOrder/CreateOrderService");
const ResponseError = require("../../helpers/ResponseError");

class CreateOrderController {
  async store(request, response) {
    const { code, value, date, document } = request.body;

    const order = { code, value, date, document };

    const orderCreate = await CreateOrderService.execute(order);

    if (orderCreate.errors) {
      const message = "the order. Code must be unique";
      return ResponseError.response_error_save(response, message);
    }

    if (orderCreate.length === 0) {
      const message = ": we didnot find the document";
      return ResponseError.response_error_save(response, message);
    }

    return response.status(201).json({ ...order });
  }
}

module.exports = new CreateOrderController();
