const { Order } = require("../../models");
const FindClientRepository = require("../findClient/FindClientRepository");
const DocumentHelper = require("../../helpers/DocumentHelper");

class CreateOrderRepository {
  async save(order) {
    const documentChecking = DocumentHelper.documentValidator(order.document);
    const client = documentChecking
      ? await FindClientRepository.findByDocument(order.document)
      : "Cannot find client with this document";

    const status =
      order.document === "15350946056" ? "Aprovado" : "Em validação";

    if (client[0] === undefined) return "Cannot find the client";

    await Order.create({
      code: order.code,
      value: order.value,
      date: order.date,
      document: DocumentHelper.documentConverter(order.document),
      status: status,
    });
  }
}

module.exports = new CreateOrderRepository();
