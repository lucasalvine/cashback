/* eslint-disable no-undef */
const request = require("supertest");

const app = require("../../../src/app");
const { Login } = require("../../../src/app/models");

const truncate = require("../../utils/truncate");

describe("Authentication", () => {
  beforeEach(async () => {
    await truncate();
  });

  it("should authenticate with valid credentials", async () => {
    const login = await Login.create({
      email: "lucas@teste.com",
      password: "1234",
      client_id: 1,
    });

    const response = await request(app).post("/sessions").send({
      email: login.email,
      password: "123456",
    });

    expect(response.status).toBe(201);
  });
});
