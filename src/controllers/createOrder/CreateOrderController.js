const CreateOrderService = require("../../services/createOrder/CreateOrderService");

class CreateOrderController {
  async store(request, response) {
    const { code, value, date, document } = request.body;

    const order = { code, value, date, document };

    await CreateOrderService.execute(order);

    return response.status(200);
  }
}

module.exports = new CreateOrderController();
