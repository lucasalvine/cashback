const { Client } = require("../../models");
const DocumentHelper = require("../../helpers/DocumentHelper");

class FindClientRepository {
  async findByDocument(client_document) {
    const client = await Client.findAll({
      where: {
        document: DocumentHelper.documentConverter(client_document),
      },
      limit: 1,
    })
      .then(function (client_find) {
        return client_find;
      })
      .catch(function (err) {
        return err;
      });

    return client;
  }
}

module.exports = new FindClientRepository();
