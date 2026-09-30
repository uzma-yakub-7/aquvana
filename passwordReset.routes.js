
import express from "express";
import crypto from "crypto";
import bcrypt from "bcryptjs";
import pool from "./db.js";
import fs from "fs/promises";
import path from "path";

const router = express.Router();

const demoCredentialsPath = path.join(
  process.cwd(),
  "demo-credentials.json"
);

router.post("/forgot-password", async (req, res) => {
  try {
    const { email } = req.body;

    if (!email) {
      return res.status(400).json({
        success: false,
        message: "Email is required."
      });
    }

    const normalizedEmail = email.trim().toLowerCase();

    const userResult = await pool.query(
      "SELECT id, email FROM users WHERE email = $1",
      [normalizedEmail]
    );

    if (userResult.rows.length === 0) {
      return res.json({
        success: true,
        message: "If an account exists, a reset link has been generated."
      });
    }

    const user = userResult.rows[0];

    const token = crypto.randomBytes(32).toString("hex");

    await pool.query(
      `DELETE FROM password_reset_tokens
       WHERE user_id = $1`,
      [user.id]
    );

    await pool.query(
      `INSERT INTO password_reset_tokens
       (user_id, token, expires_at)
       VALUES ($1, $2, NOW() + INTERVAL '15 minutes')`,
      [user.id, token]
    );

    const resetLink =
      `http://localhost:5173/reset-password/${token}`;

    console.log("");
    console.log("========================================");
    console.log("AQUVANA PASSWORD RESET LINK");
    console.log(resetLink);
    console.log("This link expires in 15 minutes.");
    console.log("========================================");
    console.log("");

    return res.json({
      success: true,
      message: "Password reset link generated."
    });
  } catch (error) {
    console.error("Forgot password error:", error);

    return res.status(500).json({
      success: false,
      message: "Something went wrong."
    });
  }
});

router.post("/reset-password", async (req, res) => {
  try {
    const { token, password } = req.body;

    if (!token || !password) {
      return res.status(400).json({
        success: false,
        message: "Token and new password are required."
      });
    }

    if (password.length < 6) {
      return res.status(400).json({
        success: false,
        message: "Password must be at least 6 characters."
      });
    }

    const tokenResult = await pool.query(
      `SELECT user_id
       FROM password_reset_tokens
       WHERE token = $1
       AND expires_at > NOW()`,
      [token]
    );

    if (tokenResult.rows.length === 0) {
      return res.status(400).json({
        success: false,
        message: "This reset link is invalid or has expired."
      });
    }

    const userId = tokenResult.rows[0].user_id;

    const userResult = await pool.query(
      `SELECT email
       FROM users
       WHERE id = $1`,
      [userId]
    );

    if (userResult.rows.length === 0) {
      return res.status(404).json({
        success: false,
        message: "User account not found."
      });
    }

    const userEmail = userResult.rows[0].email;

    const passwordHash = await bcrypt.hash(password, 12);

    await pool.query(
      `UPDATE users
       SET password_hash = $1,
           updated_at = NOW()
       WHERE id = $2`,
      [passwordHash, userId]
    );

    const demoFile = await fs.readFile(
      demoCredentialsPath,
      "utf8"
    );

    const demoData = JSON.parse(demoFile);

    const demoAccount = demoData.accounts.find(
      (account) => account.email === userEmail
    );

    if (demoAccount) {
      demoAccount.password = password;

      await fs.writeFile(
        demoCredentialsPath,
        JSON.stringify(demoData, null, 2),
        "utf8"
      );
    }

    await pool.query(
      `DELETE FROM password_reset_tokens
       WHERE token = $1`,
      [token]
    );

    return res.json({
      success: true,
      message: "Password reset successfully."
    });
  } catch (error) {
    console.error("Reset password error:", error);

    return res.status(500).json({
      success: false,
      message: "Something went wrong while resetting the password."
    });
  }
});

export default router;

