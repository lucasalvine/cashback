const FindLoginRepository = require("../../repositories/findLogin/FindLoginRepository");
class FindLoginService {
  async execute(request) {
    return await FindLoginRepository.findByEmail(request);
  }
}

module.exports = new FindLoginService();
