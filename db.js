import dotenv from "dotenv";
import pg from "pg";

dotenv.config({
  path: new URL("../.env", import.meta.url)
});

const { Pool } = pg;

const pool = new Pool({
  connectionString: process.env.DATABASE_URL
});

export default pool;
