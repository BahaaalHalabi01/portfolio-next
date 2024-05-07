import { createClient } from "@libsql/client";
import { drizzle } from "drizzle-orm/libsql";
import * as schema from "./schema";

if (!process.env.DB_URL)
  throw new Error("Please provide Database configuration");

export const client = createClient({
  url: process.env.DB_URL,
  // authToken: process.env.DB_TOKEN,
});

const db = drizzle(client, {
  schema,
});

export default db;
