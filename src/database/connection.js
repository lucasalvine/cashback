const sequelize = require("sequelize");
const path = require("path");

const connection = new sequelize({
  dialect: "sqlite3",
  storage: path.resolve(__dirname, "database.sqlite"),
});

module.exports = connection;

//clients - name, document
//login - client_id, email, password
//shops - code, value, date, client_id.document, status
//cashbacks - shop_id, client_id, cashback
