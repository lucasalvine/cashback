const FindOrderRepository = require("../../repositories/findOrder/FindOrderRepository");

class FindOrderService {
  async execute() {
    FindOrderRepository.findOrders();
  }
}

module.exports = new FindOrderService();
