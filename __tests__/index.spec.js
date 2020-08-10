/* eslint-disable no-undef */
require("./integration/createClient/CreateClient.spec");
require("./integration/createOrder/CreateOrder.spec");
require("./integration/findCashback/FindCashback.spec");
require("./integration/findOrder/FindOrder.spec");
require("./integration/findSession/FindSession.spec");
require("./unit/helpers/Cashback.spec");
require("./unit/helpers/Date.spec");
require("./unit/helpers/Document.spec");
require("./unit/helpers/Email.spec");
require("./unit/helpers/Number.spec");

const truncate = require("./utils/truncate");

afterAll(async () => {
  await truncate();
});
