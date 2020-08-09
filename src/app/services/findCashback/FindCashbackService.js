const FindClientRepository = require("../../repositories/findClient/FindClientRepository");
const FindCashbackRepository = require("../../repositories/findCashback/FindCashbackRepository");
const DocumentHelper = require("../../helpers/DocumentHelper");

class FindCashbackService {
  async execute(document) {
    const validate_document = DocumentHelper.documentValidator(document)
      ? await FindClientRepository.findByDocument(document)
      : false;

    if (validate_document[0] === undefined) return false;

    return await FindCashbackRepository.findCash(document);
  }
}

module.exports = new FindCashbackService();
