const CreateClientService = require("../../services/createClient/CreateClientService");

class createClient {
  async store(request, response) {
    const { name, document, email, password } = request.body;
    const client = { name, document, email, password };

    const client_id = await CreateClientService.execute(client).catch(function (
      err
    ) {
      console.log(err);
      return response.status(401).json({ message: "Cannot save the client." });
    });

    if (!client_id) {
      return response.status(401).json({ message: "Cannot save the client." });
    }

    return response.status(201).json({ ...client });
  }
}

module.exports = new createClient();
