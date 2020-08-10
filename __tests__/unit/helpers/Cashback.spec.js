/* eslint-disable no-undef */
const CashbackHelper = require("../../../src/app/helpers/CashbackHelper");

describe("Cashback Helper", () => {
  it("Order under $1000", () => {
    const orderValue = 999;
    const response = CashbackHelper.percentageApplied(orderValue);

    expect(response).toEqual("0.1");
  });

  it("Order between $1000 and $1500", () => {
    const orderValue = 1499;
    const response = CashbackHelper.percentageApplied(orderValue);

    expect(response).toEqual("0.15");
  });

  it("Order over $1500", () => {
    const orderValue = 1501;
    const response = CashbackHelper.percentageApplied(orderValue);

    expect(response).toEqual("0.2");
  });
});
