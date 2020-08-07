const { Login } = require("../../models");

class CreateLoginRepository {
  async save(client_id, request) {
    await Login.create({
      email: request.email,
      password: request.password,
      client_id: client_id,
    });
  }
}

module.exports = new CreateLoginRepository();
