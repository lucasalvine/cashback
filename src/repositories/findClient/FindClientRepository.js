const { Client } = require("../../models");
const DocumentHelper = require("../../helpers/DocumentHelper");

class FindClientRepository {
  async findOne(client_document) {
    const client = await Client.findAll({
      where: {
        document: DocumentHelper.documentConverter(client_document),
      },
    });

    return client;
  }
}

module.exports = new FindClientRepository();
