/* eslint-disable no-undef */
const request = require("supertest");

const app = require("../../../src/app");
const truncate = require("../../utils/truncate");

describe("Find Cashback", () => {
  beforeAll(async () => {
    await request(app).post("/clients").send({
      name: "Lucas Cunha",
      document: "12345678900",
      email: "lucas@teste.com",
      password: "1234",
    });

    await request(app).post("/orders").send({
      code: "1",
      document: "12345678900",
      value: "123.34",
      date: "2020-01-01",
    });
  });

  afterAll(async () => {
    await truncate();
  });

  it("should find cashback accumulated", async () => {
    const response = await request(app).get(
      "/cashback_accumulated?document=12345678900"
    );

    expect(response.status).toBe(201);
  });

  it("should not find cashback accumulated, document not find", async () => {
    const response = await request(app).get(
      "/cashback_accumulated?document=12345678911"
    );

    expect(response.status).toBe(401);
    expect(response.text).toContain(
      "Cannot find the cashback with this document"
    );
  });

  it("should not find cashback accumulated, document is empty", async () => {
    const response = await request(app).get("/cashback_accumulated?document");

    expect(response.status).toBe(401);
    expect(response.text).toContain(
      "Cannot find the cashback with this document"
    );
  });
});
