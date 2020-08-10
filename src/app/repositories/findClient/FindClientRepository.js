const { Client } = require("../../models");
const DocumentHelper = require("../../helpers/DocumentHelper");

class FindClientRepository {
  async findByDocument(clientDocument) {
    const client = await Client.findAll({
      where: {
        document: DocumentHelper.documentConverter(clientDocument),
      },
      limit: 1,
    })
      .then(function (clientFind) {
        return clientFind;
      })
      .catch(function (err) {
        return err;
      });

    return client;
  }
}

module.exports = new FindClientRepository();
