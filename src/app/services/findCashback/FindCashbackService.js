const FindClientRepository = require("../../repositories/findClient/FindClientRepository");
const FindCashbackRepository = require("../../repositories/findCashback/FindCashbackRepository");

class FindCashbackService {
  async execute(document) {
    const validate_document = await FindClientRepository.findByDocument(
      document
    );

    if (!validate_document) return false;

    return await FindCashbackRepository.findCash(document);
  }
}

module.exports = new FindCashbackService();
