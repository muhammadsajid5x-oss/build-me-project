import express from "express";
import cors from "cors";
const app = express();
const PORT = process.env.PORT || 3000;
app.use(cors());
app.use(express.json());
// Dummy leads store matching @build-me/types contract
const leads = [
    {
        id: "123e4567-e89b-12d3-a456-426614174000",
        name: "Jane Doe",
        email: "jane.doe@example.com",
        source: "website",
        status: "new",
        createdAt: new Date().toISOString(),
    },
];
// POST /api/v1/leads
app.post("/api/v1/leads", (req, res) => {
    const { name, email, source = "website" } = req.body;
    const newLead = {
        id: crypto.randomUUID(),
        name,
        email,
        source,
        status: "new",
        createdAt: new Date().toISOString(),
    };
    leads.push(newLead);
    res.status(201).json(newLead);
});
// GET /api/v1/leads
app.get("/api/v1/leads", (_req, res) => {
    res.status(200).json(leads);
});
app.listen(PORT, () => {
    console.log(`🚀 API Service running on http://localhost:${PORT}`);
});
