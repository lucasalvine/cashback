const { Cashback } = require("../../models");
const { Order } = require("../../models");

class FindOrderRepository {
  async findOrders(page) {
    const cashbackOrder = await Cashback.findAndCountAll({
      include: "order",
      limit: 5,
      offset: parseInt(page),
    });

    return JSON.stringify(cashbackOrder);
  }

  async findOne(document) {
    const documentOrder = await Order.findAll({
      where: { document: document },
      limit: 1,
    })
      .then(function (order) {
        return order;
      })
      .catch(function (err) {
        return err;
      });

    return documentOrder;
  }
}

module.exports = new FindOrderRepository();
