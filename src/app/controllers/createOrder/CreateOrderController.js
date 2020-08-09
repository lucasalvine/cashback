const CreateOrderService = require("../../services/createOrder/CreateOrderService");
const ResponseError = require("../../helpers/ResponseError");

class CreateOrderController {
  async store(request, response) {
    const { code, value, date, document } = request.body;

    const order = { code, value, date, document };

    const order_create = await CreateOrderService.execute(order);

    console.log("!!", order_create);

    if (order_create.errors) {
      const message = "the order. Code must be unique";
      return ResponseError.response_error_save(response, message);
    }

    if (order_create.length === 0) {
      const message = ": we didnot find the document";
      return ResponseError.response_error_save(response, message);
    }

    return response.status(201).json({ ...order });
  }
}

module.exports = new CreateOrderController();
