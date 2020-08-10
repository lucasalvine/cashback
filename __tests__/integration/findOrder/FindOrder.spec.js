/* eslint-disable no-undef */
const request = require("supertest");

const app = require("../../../src/app");
const truncate = require("../../utils/truncate");

describe("Find Order", () => {
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

  it("should order return", async () => {
    const response = await request(app).get("/orders?page=0");

    expect(response.status).toBe(201);
  });

  it("should not returns order", async () => {
    const response = await request(app).get("/orders?page=3");

    expect(response.status).toBe(401);
    expect(response.text).toContain("Cannot find the register");
  });
});
