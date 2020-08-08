const FindOrderService = require("../../services/findOrder/FindOrderService");
const RequestError = require("../../helpers/RequestError");

class FindOrderController {
  async index(response) {
    const orders = FindOrderService.execute();

    if (!orders) {
      RequestError.request_error(response);
    }
  }
}

module.exports = new FindOrderController();
