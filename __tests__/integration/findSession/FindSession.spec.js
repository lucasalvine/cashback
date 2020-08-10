/* eslint-disable no-undef */
const request = require("supertest");

const app = require("../../../src/app");
const truncate = require("../../utils/truncate");

describe("Find Session", () => {
  afterAll(async () => {
    await truncate();
  });

  it("should authenticate with valid credentials", async () => {
    const response = await request(app)
      .post("/sessions")
      .send({ email: "lucas@teste.com", password: "1234" });

    expect(response.status).toBe(201);
  });

  it("should not authenticate with valid credentialsr", async () => {
    const response = await request(app)
      .post("/sessions")
      .send({ email: "lucas@teste.com", password: "123456" });

    expect(response.status).toBe(401);
  });

  it("should return jwt token when authenticated", async () => {
    const response = await request(app).post("/sessions").send({
      email: "lucas@teste.com",
      password: "1234",
    });

    expect(response.body).toHaveProperty("token");
  });
});
