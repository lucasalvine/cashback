const { Login } = require("../../models");

class FindSessionController {
  async store(request, response) {
    const { email, password } = request.body;

    const login = await Login.findOne({ where: { email } });

    console.log(login);

    if (!login) {
      return response.status(401).json({ message: "Login not found" });
    }

    if (!login.checkPassword(password)) {
      return response.status(401).json({ message: "Incorrect password" });
    }

    return response.json({
      login,
      token: login.generateToken(),
    });
  }
}

module.exports = new FindSessionController();
