const CreateOrderRepository = require("../../repositories/createOrder/CreateOrderRepository");
const NumberHelper = require("../../helpers/NumberHelper");
const CashbackHelper = require("../../helpers/CashbackHelper");

class CreateOrderService {
  async execute(order) {
    const value = NumberHelper.convertValue(order.value);
    const cashbackPercentage = CashbackHelper.percentageApplied(value);
    const cashbackValue = value * cashbackPercentage;

    const order_return = await CreateOrderRepository.save(
      order,
      cashbackValue,
      cashbackPercentage
    );

    return order_return;
  }
}

module.exports = new CreateOrderService();
