const { Client } = require("../../models");
const DocumentHelper = require("../../helpers/DocumentHelper");

class FindClientRepository {
  async findByDocument(client_document) {
    const client = await Client.findAll({
      where: {
        document: DocumentHelper.documentConverter(client_document),
      },
    }).catch(function (err) {
      return err;
    });

    return client;
  }
}

module.exports = new FindClientRepository();
