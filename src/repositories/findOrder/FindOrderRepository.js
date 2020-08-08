const { Order } = require("../../models");

class FindOrderRepository {
  async findOrders() {
    await Order.findAndCountAll();
  }
}

module.exports = new FindOrderRepository();
