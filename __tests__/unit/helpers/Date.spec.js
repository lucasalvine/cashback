const DateHelper = require("../../../src/app/helpers/DateHelper");

/* eslint-disable no-undef */
describe("Date Helper", () => {
  it("Converter date to timestamp", () => {
    const date = "2020-02-01";
    const response = DateHelper.convertDate(date);

    expect(response).toEqual(1580515200000);
  });

  it("Give a date, return next month", () => {
    const date = 1580515200000;
    const response = DateHelper.dueDate(date);

    expect(response).toEqual(1583193600000);
  });
});
