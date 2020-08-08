const { Order } = require("../../models");
const FindClientRepository = require("../findClient/FindClientRepository");
const DocumentHelper = require("../../helpers/DocumentHelper");
const RequestError = require("../../helpers/RequestError");
const { response } = require("express");
const CreateCashbackRepository = require("../createCashback/CreateCashbackRepository");

class CreateOrderRepository {
  async save(order, cashback_value, cashback_percentage) {
    const documentChecking = DocumentHelper.documentValidator(order.document);
    const client = documentChecking
      ? await FindClientRepository.findByDocument(order.document)
      : RequestError.request_error_file(response);

    const status =
      order.document === "15350946056" ? "Aprovado" : "Em validação";

    if (client[0] === undefined)
      return RequestError.request_error_file(response);

    await Order.create({
      code: order.code,
      value: order.value,
      date: order.date,
      document: DocumentHelper.documentConverter(order.document),
      status: status,
    }).then(async (newOrder) => {
      const order_id = newOrder.get().id;
      await CreateCashbackRepository.save(
        order_id,
        cashback_value,
        cashback_percentage,
        order
      );
    });
  }
}

module.exports = new CreateOrderRepository();
