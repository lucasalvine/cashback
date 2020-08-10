/* eslint-disable no-undef */
const request = require("supertest");

const app = require("../../../src/app");

describe("Create Order", () => {
  it("should create order", async () => {
    const order = {
      code: "1",
      document: "12345678900",
      value: "123.34",
      date: "2020-01-01",
    };

    const client = await request(app).post("/sessions").send({
      email: "lucas@teste.com",
      password: "1234",
    });

    const response = await request(app)
      .post("/orders")
      .set("Authorization", `Bearer ${client.body.token}`)
      .send({
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

    const client = await request(app).post("/sessions").send({
      email: "lucas@teste.com",
      password: "1234",
    });

    const response = await request(app)
      .post("/orders")
      .set("Authorization", `Bearer ${client.body.token}`)
      .send({
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

    const client = await request(app).post("/sessions").send({
      email: "lucas@teste.com",
      password: "1234",
    });

    const response = await request(app)
      .post("/orders")
      .set("Authorization", `Bearer ${client.body.token}`)
      .send({
        code: order.code,
        document: order.document,
        value: order.value,
        date: order.date,
      });

    expect(response.status).toBe(401);
    expect(response.text).toContain("we didnot find the document");
  });

  it("should not create order, invalid token", async () => {
    const order = {
      code: "3",
      document: "12345678900",
      value: "123.34",
      date: "2020-01-01",
    };

    const response = await request(app)
      .post("/orders")
      .set("Authorization", `Bearer abc`)
      .send({
        code: order.code,
        document: order.document,
        value: order.value,
        date: order.date,
      });

    expect(response.status).toBe(401);
    expect(response.text).toContain("Token invalid");
  });

  it("should create order for special client", async () => {
    const order = {
      code: "4",
      document: "15350946056",
      value: "12312.34",
      date: "2020-01-01",
    };

    const client = await request(app).post("/sessions").send({
      email: "special_client@teste.com",
      password: "12345",
    });

    const response = await request(app)
      .post("/orders")
      .set("Authorization", `Bearer ${client.body.token}`)
      .send({
        code: order.code,
        document: order.document,
        value: order.value,
        date: order.date,
      });

    expect(response.status).toBe(201);
    expect(response.text).toContain(order.code);
  });
});
