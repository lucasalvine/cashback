const { Cashback } = require("./src/models");

Cashback.findAll({ include: "order" }).then((a) => {
  console.log(JSON.stringify(a));
  console.log(a.order);
});
