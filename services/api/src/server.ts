import app from "./app";
const PORT = process.env.PORT || 3000;
if (process.env.NODE_ENV !== "production") {
  app.listen(PORT, () => {
    console.log(`API Service running on http://localhost:${PORT}`);
  });
}
export default app;
