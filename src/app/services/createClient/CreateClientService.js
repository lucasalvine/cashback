const CreateClientRepository = require("../../repositories/createClient/CreateClientRepository");
const EmailHelper = require("../../helpers/EmailHelper");
const DocumentHelper = require("../../helpers/DocumentHelper");

class CreateClientService {
  async execute(request) {
    const emailChecking = EmailHelper.emailValidator(request.email);
    const documentChecking = DocumentHelper.documentValidator(request.document);

    if (emailChecking && documentChecking)
      return await CreateClientRepository.save(request);
  }
}

module.exports = new CreateClientService();
