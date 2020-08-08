const FindOrderRepository = require("../../repositories/findOrder/FindOrderRepository");

class FindOrderService {
  async execute(page) {
    return await FindOrderRepository.findOrders(page);
  }
}

module.exports = new FindOrderService();
