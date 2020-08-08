const { Login } = require("../../models");
const RequestError = require("../../helpers/RequestError");

class FindSessionController {
  async store(request, response) {
    const { email, password } = request.body;

    const login = await Login.findOne({ where: { email } });

    if (!login) {
      return RequestError.request_error_file(response);
    }

    if (!login.checkPassword(password)) {
      return RequestError.request_error_password(response);
    }

    return response.json({
      login,
      token: login.generateToken(),
    });
  }
}

module.exports = new FindSessionController();
