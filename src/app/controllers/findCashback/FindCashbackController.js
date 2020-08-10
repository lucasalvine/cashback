const ResponseError = require("../../helpers/ResponseError");
const FindCashbackService = require("../../services/findCashback/FindCashbackService");

class FindCashbackController {
  async index(request, response) {
    const document = request.query.document;

    const cashByDocument =
      !document || !document.trim()
        ? false
        : await FindCashbackService.execute(document);

    if (!cashByDocument) {
      return ResponseError.response_error_document(response);
    }

    return response.status(201).json({
      document: document,
      cashback_accumulated: cashByDocument.body,
    });
  }
}

module.exports = new FindCashbackController();
