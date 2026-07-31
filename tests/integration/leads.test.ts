import { TextEncoder, TextDecoder } from "util";
global.TextEncoder = TextEncoder as typeof global.TextEncoder;
global.TextDecoder = TextDecoder as typeof global.TextDecoder;

import { describe, it, expect } from "@jest/globals";
import express, { Request, Response } from "express";
import request from "supertest";

const app = express();
app.use(express.json());

app.post("/api/v1/leads", (req: Request, res: Response) => {
  const { name, email } = req.body;
  if (!name || !email) {
    return res.status(400).json({ error: "Missing required fields" });
  }
  return res.status(201).json({ id: "123", name, email, status: "new" });
});

describe("POST /api/v1/leads", () => {
  it("should create a new lead and return 201 Created", async () => {
    const res = await request(app)
      .post("/api/v1/leads")
      .send({ name: "John Doe", email: "john@example.com" });

    expect(res.status).toBe(201);
    expect(res.body).toHaveProperty("id");
    expect(res.body.status).toBe("new");
  });

  it("should return 400 Bad Request when payload is incomplete", async () => {
    const res = await request(app)
      .post("/api/v1/leads")
      .send({ name: "Incomplete Doe" });

    expect(res.status).toBe(400);
  });
});
