const ResponseError = require("../../helpers/ResponseError");
const FindCashbackService = require("../../services/findCashback/FindCashbackService");

class FindCashbackController {
  index(request, response) {
    const document = request.query.document;

    const cash_by_document = FindCashbackService.execute(document);

    if (!cash_by_document) {
      return ResponseError.response_error_document(response);
    }

    return response.status(201).json({
      cashback_accumulated: cash_by_document,
    });
  }
}

module.exports = new FindCashbackController();
