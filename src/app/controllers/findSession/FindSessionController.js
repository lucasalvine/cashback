const { Login } = require("../../models");
const ResponseError = require("../../helpers/ResponseError");

class FindSessionController {
  async store(request, response) {
    const { email, password } = request.body;

    const login = await Login.findOne({ where: { email } });

    if (!login) {
      return ResponseError.response_error_file(response);
    }

    if (!(await login.checkPassword(password))) {
      return ResponseError.response_error_password(response);
    }

    return response.json({
      login,
      token: login.generateToken(),
    });
  }
}

module.exports = new FindSessionController();
