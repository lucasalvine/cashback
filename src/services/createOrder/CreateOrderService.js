const CreateOrderRepository = require("../../repositories/createOrder/CreateOrderRepository");

class CreateOrderService {
  async execute(request) {
    await CreateOrderRepository.save(request);
  }
}

module.exports = new CreateOrderService();
