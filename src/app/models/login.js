const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

module.exports = (sequelize, DataTypes) => {
  const Login = sequelize.define(
    "Login",
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

  Login.associate = function (models) {
    Login.belongsTo(models.Client, {
      foreignKey: "client_id",
      as: "client",
      onDelete: "CASCADE",
    });
  };

  Login.prototype.checkPassword = function (password) {
    return bcrypt.compare(password, this.password_hash);
  };

  Login.prototype.generateToken = function () {
    return jwt.sign({ id: this.id }, process.env.APP_SECRET);
  };

  return Login;
};
