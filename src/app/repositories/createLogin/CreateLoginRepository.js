const { Login } = require("../../models");

class CreateLoginRepository {
  async save(client_id, request) {
    const login = await Login.create({
      email: request.email,
      password: request.password,
      client_id: client_id,
    })
      .then(function (loginCreate) {
        return loginCreate;
      })
      .catch(function (err) {
        return err;
      });

    return login;
  }
}

module.exports = new CreateLoginRepository();
