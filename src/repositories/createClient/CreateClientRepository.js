const { Client } = require("../../models");
const CreateLoginRepository = require("./CreateLoginRepository");
const DocumentHelper = require("../../helpers/DocumentHelper");

class CreateClientRepository {
  async save(client) {
    await Client.create({
      name: client.name,
      document: DocumentHelper.documentConverter(client.document),
    })
      .then(async (newClient) => {
        const id = newClient.get().id;
        await CreateLoginRepository.save(id, client);
      })
      .catch((err) => {
        return "Something wrong" + err;
      });
  }
}

module.exports = new CreateClientRepository();
