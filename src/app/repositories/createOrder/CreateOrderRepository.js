const { Order } = require("../../models");
const FindClientRepository = require("../findClient/FindClientRepository");
const DocumentHelper = require("../../helpers/DocumentHelper");
const CreateCashbackRepository = require("../createCashback/CreateCashbackRepository");

class CreateOrderRepository {
  async save(order, cashback_value, cashback_percentage) {
    const documentChecking = DocumentHelper.documentValidator(order.document);

    const client = documentChecking
      ? await FindClientRepository.findByDocument(order.document)
      : false;

    const status =
      order.document === "15350946056" ? "Aprovado" : "Em validação";

    if (client[0] === undefined) return client;

    const create_order = await Order.create({
      code: order.code,
      value: order.value,
      date: order.date,
      document: DocumentHelper.documentConverter(order.document),
      status: status,
    })
      .then(async (newOrder) => {
        const order_id = newOrder.get().id;
        return await CreateCashbackRepository.save(
          order_id,
          cashback_value,
          cashback_percentage,
          order
        );
      })
      .catch(async function (err) {
        return await err;
      });

    return create_order;
  }
}

module.exports = new CreateOrderRepository();
