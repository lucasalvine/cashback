const EmailHelper = require("../../../src/app/helpers/EmailHelper");

/* eslint-disable no-undef */
describe("Email Helper", () => {
  it("Email is true", () => {
    const email = "teste@teste.com";
    const response = EmailHelper.emailValidator(email);

    expect(response).toBe(true);
  });

  it("Email is false", () => {
    const email = "testeteste.com";
    const response = EmailHelper.emailValidator(email);

    expect(response).toBe(false);
  });
});
