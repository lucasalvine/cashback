/* eslint-disable no-undef */
require("./integration/createClient/CreateClient.spec");
require("./integration/createOrder/CreateOrder.spec");
require("./integration/findCashback/FindCashback.spec");
require("./integration/findOrder/FindOrder.spec");
require("./integration/findSession/FindSession.spec");

const truncate = require("./utils/truncate");

afterAll(async () => {
  await truncate();
});
