/* eslint-disable no-undef */
const request = require("supertest");

const app = require("../../../src/app");
const truncate = require("../../utils/truncate");

describe("Create Client", () => {
  beforeAll(async () => {
    await truncate();
  });

  it("should create client", async () => {
    const client = {
      name: "Lucas Cunha",
      document: "12345678900",
      email: "lucas@teste.com",
      password: "1234",
    };

    const response = await request(app).post("/clients").send({
      name: client.name,
      document: client.document,
      email: client.email,
      password: client.password,
    });

    expect(response.status).toBe(201);
    expect(response.text).toContain(client.name);
  });

  it("should not create client, name is empty", async () => {
    const client = {
      name: "",
      document: "12345678900",
      email: "lucas@teste.com",
      password: "1234",
    };

    const response = await request(app).post("/clients").send({
      name: client.name,
      document: client.document,
      email: client.email,
      password: client.password,
    });

    expect(response.status).toBe(401);
    expect(response.text).toContain(
      "Cannot save  check your email, document and name."
    );
  });

  it("should not create client, document is incorrect", async () => {
    const client = {
      name: "Teste",
      document: "123456789000",
      email: "lucas@teste.com",
      password: "1234",
    };

    const response = await request(app).post("/clients").send({
      name: client.name,
      document: client.document,
      email: client.email,
      password: client.password,
    });

    expect(response.status).toBe(401);
    expect(response.text).toContain(
      "Cannot save  check your email, document and name."
    );
  });

  it("should not create client, document is empty", async () => {
    const client = {
      name: "Lucas Cunha",
      document: "",
      email: "lucas@teste.com",
      password: "1234",
    };

    const response = await request(app).post("/clients").send({
      name: client.name,
      document: client.document,
      email: client.email,
      password: client.password,
    });

    expect(response.status).toBe(401);
    expect(response.text).toContain(
      "Cannot save  check your email, document and name."
    );
  });

  it("should not create client, document is already exist", async () => {
    const client = {
      name: "Lucas Cunha",
      document: "12345678900",
      email: "lucas@teste.com",
      password: "1234",
    };

    const response = await request(app).post("/clients").send({
      name: client.name,
      document: client.document,
      email: client.email,
      password: client.password,
    });

    expect(response.status).toBe(401);
    expect(response.text).toContain("Cannot save the document already exists");
  });

  it("should not create client, email is empty", async () => {
    const client = {
      name: "Lucas Cunha",
      document: "12345678900",
      email: "",
      password: "1234",
    };

    const response = await request(app).post("/clients").send({
      name: client.name,
      document: client.document,
      email: client.email,
      password: client.password,
    });

    expect(response.status).toBe(401);
  });

  it("should create client", async () => {
    const client = {
      name: "Special Client",
      document: "15350946056",
      email: "special_client@teste.com",
      password: "12345",
    };

    const response = await request(app).post("/clients").send({
      name: client.name,
      document: client.document,
      email: client.email,
      password: client.password,
    });

    expect(response.status).toBe(201);
    expect(response.text).toContain(client.name);
  });
});
