const { Client } = require("../../models");
const CreateLoginRepository = require("../createLogin/CreateLoginRepository");
const DocumentHelper = require("../../helpers/DocumentHelper");

class CreateClientRepository {
  async save(client) {
    const create_client = await Client.create({
      name: client.name,
      document: DocumentHelper.documentConverter(client.document),
    })
      .then(async function (newClient) {
        const id = newClient.get().id;
        return await CreateLoginRepository.save(id, client);
      })
      .catch(function (err) {
        return err;
      });

    return create_client;
  }
}

module.exports = new CreateClientRepository();
