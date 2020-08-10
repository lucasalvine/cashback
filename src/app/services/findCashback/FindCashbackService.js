const FindCashbackRepository = require("../../repositories/findCashback/FindCashbackRepository");
const DocumentHelper = require("../../helpers/DocumentHelper");
const FindOrderRepository = require("../../repositories/findOrder/FindOrderRepository");

class FindCashbackService {
  async execute(document) {
    const validateDocument = DocumentHelper.documentValidator(document)
      ? await FindOrderRepository.findOne(document)
      : false;

    if (validateDocument[0] === undefined) return false;

    return await FindCashbackRepository.findCash(document);
  }
}

module.exports = new FindCashbackService();
