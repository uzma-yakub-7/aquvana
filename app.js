import express from "express";
import cors from "cors";
import authRoutes from "./auth.routes.js";
import cropsRoutes from "./crops.routes.js";
import passwordResetRoutes from "./passwordReset.routes.js";

const app = express();

app.use(
  cors({
    origin: "http://localhost:5173"
  })
);

app.use(express.json());

app.get("/api/health", (req, res) => {
  res.json({
    success: true,
    message: "AQUVANA API is running."
  });
});

app.use("/api/auth", authRoutes);
app.use("/api/crops", cropsRoutes);
app.use("/api/password-reset", passwordResetRoutes);

export default app;
