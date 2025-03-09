import { defineConfig } from "drizzle-kit";
import dotenv from "dotenv";

// Load environment variables from .env file if not already loaded
dotenv.config();

if (!process.env.DATABASE_URL) {
  throw new Error("DATABASE_URL is not defined. Ensure the database URL is provided.");
}

export default defineConfig({
  out: "./migrations", // Directory for the generated migration files
  schema: "./shared/schema.ts", // Path to the schema file
  dialect: "postgresql", // Database dialect (e.g., postgresql, mysql, etc.)
  dbCredentials: {
    url: process.env.DATABASE_URL, // Database connection URL
  },
});
