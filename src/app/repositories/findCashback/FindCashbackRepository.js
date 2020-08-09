const BoticarioCashbackProvider = require("../../providers/implementations/BoticarioCashbackProvider");
const DocumentHelper = require("../../helpers/DocumentHelper");

class FindCashbackRepository {
  async findCash(document) {
    const document_converter = DocumentHelper.documentConverter(document);

    console.log(
      await BoticarioCashbackProvider.getCashBackAccumulated(document_converter)
    );

    return await BoticarioCashbackProvider.getCashBackAccumulated(
      document_converter
    );
  }
}

module.exports = new FindCashbackRepository();
