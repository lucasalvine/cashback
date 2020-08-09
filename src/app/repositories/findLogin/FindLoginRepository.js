const { Login } = require("../../../models");

class FindLoginRepository {
  async findByEmail(email) {
    return Login.findAll({ where: { email } });
  }
}

module.exports = new FindLoginRepository();
