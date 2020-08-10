const CreateClientService = require("../../services/createClient/CreateClientService");
const ResponseError = require("../../helpers/ResponseError");

class createClient {
  async store(request, response) {
    const { name, document, email, password } = request.body;
    const client = { name, document, email, password };

    const clientId = await CreateClientService.execute(client);

    if (!clientId) {
      const message = " check your email, document and name.";
      return ResponseError.response_error_save(response, message);
    }

    if (clientId.errors) {
      const message = "the document already exists";
      return ResponseError.response_error_save(response, message);
    }

    return response.status(201).json({ ...client });
  }
}

module.exports = new createClient();
