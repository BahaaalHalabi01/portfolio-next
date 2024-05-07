import { defineConfig } from "drizzle-kit";

console.log(process.env.DB_URL)

if (!process.env.DB_URL) throw new Error("please provide db url");

export default defineConfig({
  schema: "./db/schema.ts",
  out: "./drizzle",
  driver: "turso",
  dbCredentials: {
    url: process.env.DB_URL,
    // authToken: process.env.DB_AUTH_TOKEN
  },
});
