const { Cashback } = require("../../models");
const DateHelper = require("../../helpers/DateHelper");
const NumberHelper = require("../../helpers/NumberHelper");

class CreateCashbackRepository {
  async save(order_id, value, percentage, order) {
    const cashback = await Cashback.create({
      value: NumberHelper.convertValue(value),
      percentage: percentage,
      due_date: DateHelper.dueDate(order.date),
      order_id: order_id,
    })
      .then(function (cashback_create) {
        return cashback_create;
      })
      .catch(function (err) {
        return err;
      });

    return cashback;
  }
}

module.exports = new CreateCashbackRepository();
