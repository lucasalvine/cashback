const CreateClientRepository = require("../../repositories/createClient/CreateClientRepository");
const EmailHelper = require("../../helpers/EmailHelper");
const DocumentHelper = require("../../helpers/DocumentHelper");

class CreateClientService {
  async execute(request) {
    const emailChecking = EmailHelper.emailValidator(request.email);
    const documentChecking = DocumentHelper.documentValidator(request.document);
    const emptyName = request.name.trim() ? true : false;

    if (emailChecking && documentChecking && emptyName)
      return await CreateClientRepository.save(request);

    return false;
  }
}

module.exports = new CreateClientService();
