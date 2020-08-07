const CreateClientRepository = require("../../repositories/createClient/CreateClientRepository");

class CreateClientService {
  async execute(request) {
    await CreateClientRepository.save(request);
  }
}

module.exports = new CreateClientService();
