const CreateOrderRepository = require("../../repositories/createOrder/CreateOrderRepository");
const NumberHelper = require("../../helpers/NumberHelper");
const CashbackHelper = require("../../helpers/CashbackHelper");

class CreateOrderService {
  async execute(order) {
    const value = NumberHelper.convertValue(order.value);
    const cashback_percentage = CashbackHelper.percentageApplied(value);
    const cashback_value = value * cashback_percentage;

    const order_return = await CreateOrderRepository.save(
      order,
      cashback_value,
      cashback_percentage
    );

    return order_return;
  }
}

module.exports = new CreateOrderService();
