const NumberHelper = require("../../../src/app/helpers/NumberHelper");

/* eslint-disable no-undef */
describe("Number Helper", () => {
  it("Number has too many decimals", () => {
    const number = "1928.992834748";
    const response = NumberHelper.convertValue(number);

    expect(response).toBe("1928.99");
  });
});
