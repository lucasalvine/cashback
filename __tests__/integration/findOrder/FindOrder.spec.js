/* eslint-disable no-undef */
const request = require("supertest");

const app = require("../../../src/app");

describe("Find Order", () => {
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
