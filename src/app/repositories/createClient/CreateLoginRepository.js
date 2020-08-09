const { Login } = require("../../models");

class CreateLoginRepository {
  async save(client_id, request) {
    console.log(client_id, request);
    const login = await Login.create({
      email: request.email,
      password: request.password,
      client_id: client_id,
    }).catch(function (err) {
      console.log(err);
    });

    return login;
  }
}

module.exports = new CreateLoginRepository();
