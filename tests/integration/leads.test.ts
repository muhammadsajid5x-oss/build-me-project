import express, { Request, Response } from "express";
import request from "supertest";

const app = express();
app.use(express.json());

app.post("/api/v1/leads", (req: Request, res: Response) => {
  const { name, email } = req.body;
  if (!name || !email) {
    return res.status(400).json({ error: "Name and email required" });
  }
  return res.status(201).json({ id: "lead-123", name, email, status: "new" });
});

describe("POST /api/v1/leads Integration Test", () => {
  it("creates a new lead and returns 201 Created", async () => {
    const res = await request(app)
      .post("/api/v1/leads")
      .send({ name: "Sajid Rao", email: "sajid@example.com" });

    expect(res.status).toBe(201);
    expect(res.body).toHaveProperty("id");
    expect(res.body.status).toBe("new");
  });

  it("returns 400 Bad Request when payload is incomplete", async () => {
    const res = await request(app)
      .post("/api/v1/leads")
      .send({ name: "Sajid" });

    expect(res.status).toBe(400);
  });
});
