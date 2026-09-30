import express from "express";
import pool from "./db.js";

const router = express.Router();

router.get("/:id", async (req, res) => {
  try {
    const result = await pool.query(
      "SELECT * FROM crops WHERE id = $1",
      [req.params.id]
    );

    if (result.rows.length === 0) {
      return res.status(404).json({
        success: false,
        message: "Crop not found."
      });
    }

    res.json({
      success: true,
      crop: result.rows[0]
    });
  } catch (error) {
    console.error("Error fetching crop:", error);

    res.status(500).json({
      success: false,
      message: "Failed to fetch crop."
    });
  }
});

router.get("/", async (req, res) => {
  try {
    const result = await pool.query(
      "SELECT * FROM crops ORDER BY name ASC"
    );

    res.json({
      success: true,
      crops: result.rows
    });
  } catch (error) {
    console.error("Error fetching crops:", error);

    res.status(500).json({
      success: false,
      message: "Failed to fetch crops."
    });
  }
});

export default router;