const { Login } = require("../../models/");

class FindLoginRepository {
  async findByEmail(email) {
    const user = Login.findAll({ where: { email } });

    return user;
  }
}

module.exports = new FindLoginRepository();
