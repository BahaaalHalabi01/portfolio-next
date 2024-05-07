import {
  sqliteTable,
  text,
} from "drizzle-orm/sqlite-core";

export const projects = sqliteTable("projects", {
  id: text("id").primaryKey(),
  title: text("title").notNull(),
  description: text("description").notNull(),
  stack: text("stack", { mode: "json" }).notNull().$type<string[]>(),
  url: text("url").notNull(),
  img: text("img").notNull(),
});
