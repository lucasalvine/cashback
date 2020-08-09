const CreateClientService = require("../../services/createClient/CreateClientService");
const ResponseError = require("../../helpers/ResponseError");

class createClient {
  async store(request, response) {
    const { name, document, email, password } = request.body;
    const client = { name, document, email, password };

    const client_id = await CreateClientService.execute(client);

    if (client_id.errors) {
      const message = "the document already exists";
      return ResponseError.response_error_save(response, message);
    }

    //TODO
    /*     if (client_id[0] === undefined) {
      const message = "the name is empty";
      return ResponseError.response_error_save(response, message);
    } */

    return response.status(201).json({ ...client });
  }
}

module.exports = new createClient();