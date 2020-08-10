/* eslint-disable no-undef */
const request = require("supertest");

const app = require("../../../src/app");
const truncate = require("../../utils/truncate");

describe("Create Order", () => {
  beforeAll(async () => {
    const client = {
      name: "Lucas Cunha",
      document: "12345678900",
      email: "lucas@teste.com",
      password: "1234",
    };

    await request(app).post("/clients").send({
      name: client.name,
      document: client.document,
      email: client.email,
      password: client.password,
    });
  });

  afterAll(async () => {
    await truncate();
  });

  it("should create order", async () => {
    const order = {
      code: "1",
      document: "12345678900",
      value: "123.34",
      date: "2020-01-01",
    };

    const response = await request(app).post("/orders").send({
      code: order.code,
      document: order.document,
      value: order.value,
      date: order.date,
    });

    expect(response.status).toBe(201);
    expect(response.text).toContain(order.code);
  });

  it("should not create order, code is already exist", async () => {
    const order = {
      code: "1",
      document: "12345678900",
      value: "123.34",
      date: "2020-01-01",
    };

    const response = await request(app).post("/orders").send({
      code: order.code,
      document: order.document,
      value: order.value,
      date: order.date,
    });

    expect(response.status).toBe(401);
    expect(response.text).toContain("the order. Code must be unique");
  });

  it("should not create order, document cannot find", async () => {
    const order = {
      code: "2",
      document: "00000000012",
      value: "123.34",
      date: "2020-01-01",
    };

    const response = await request(app).post("/orders").send({
      code: order.code,
      document: order.document,
      value: order.value,
      date: order.date,
    });

    expect(response.status).toBe(401);
    expect(response.text).toContain("we didnot find the document");
  });
});
