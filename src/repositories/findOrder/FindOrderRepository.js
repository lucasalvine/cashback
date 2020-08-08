const { Cashback } = require("../../models");

class FindOrderRepository {
  async findOrders(page) {
    const cashback_order = await Cashback.findAndCountAll({
      include: "order",
      limit: 5,
      offset: parseInt(page),
    });

    return JSON.stringify(cashback_order);
  }
}

module.exports = new FindOrderRepository();
