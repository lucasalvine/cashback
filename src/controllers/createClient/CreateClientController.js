const CreateClientService = require("../../services/createClient/CreateClientService");
const RequestError = require("../../helpers/RequestError");

class createClient {
  async store(request, response) {
    const { name, document, email, password } = request.body;
    const client = { name, document, email, password };

    const client_id = await CreateClientService.execute(client).catch(
      function () {
        return RequestError.request_error_save(response);
      }
    );

    if (!client_id) {
      return RequestError.request_error_save(response);
    }

    return response.status(201).json({ ...client });
  }
}

module.exports = new createClient();
