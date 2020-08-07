const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

module.exports = (sequelize, DataTypes) => {
  const Logins = sequelize.define(
    "Logins",
    {
      email: DataTypes.STRING,
      password: DataTypes.VIRTUAL,
      password_hash: DataTypes.STRING,
    },
    {
      hooks: {
        beforeSave: async (login) => {
          if (login.password) {
            login.password_hash = await bcrypt.hash(login.password, 8);
          }
        },
      },
    }
  );

  Logins.prototype.checkPassword = function (password) {
    return bcrypt.compare(password, this.password_hash);
  };

  Logins.prototype.generateToken = function () {
    return jwt.sign({ id: this.id }, process.env.APP_SECRET);
  };

  return Logins;
};
