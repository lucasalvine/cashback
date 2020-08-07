const CreateClientService = require("../../services/createClient/CreateClientService");

class createClient {
  async store(request, response) {
    const { name, document } = request.body;
    const client = { name, document };

    try {
      await CreateClientService.execute(client);
      return response.status(201).json({ message: "Client save sucessfully" });
    } catch {
      return response.status(401).json({ message: "Cannot save client" });
    }
  }
}

module.exports = new createClient();
