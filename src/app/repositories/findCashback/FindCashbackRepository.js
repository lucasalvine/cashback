const BoticarioCashbackProvider = require("../../providers/implementations/BoticarioCashbackProvider");
const DocumentHelper = require("../../helpers/DocumentHelper");

class FindCashbackRepository {
  async findCash(document) {
    const documentConverter = DocumentHelper.documentConverter(document);

    return await BoticarioCashbackProvider.getCashBackAccumulated(
      documentConverter
    );
  }
}

module.exports = new FindCashbackRepository();
