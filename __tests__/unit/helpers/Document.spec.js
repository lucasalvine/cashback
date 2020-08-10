const DocumentHelper = require("../../../src/app/helpers/DocumentHelper");

/* eslint-disable no-undef */
describe("Document Helper", () => {
  it("Document validator is true", () => {
    const document = "12312312390";
    const response = DocumentHelper.documentValidator(document);

    expect(response).toBe(true);
  });

  it("Document validator is false", () => {
    const document = "1231231239099";
    const response = DocumentHelper.documentValidator(document);

    expect(response).toBe(false);
  });

  it("Document return cpf converter", () => {
    const document = "123..456.789-00";
    const response = DocumentHelper.documentConverter(document);

    expect(response).toEqual("12345678900");
  });
});
