const { Order } = require("./src/models");

Order.findAndCountAll({
  offset: 10,
  limit: 10,
}).then((a) => console.log(a));
