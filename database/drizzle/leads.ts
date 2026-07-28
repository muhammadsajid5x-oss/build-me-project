import { pgTable, uuid, text, timestamp } from "drizzle-orm/pg-core";

export const leads = pgTable("leads", {
  id: uuid("id").primaryKey().defaultRandom(),
  name: text("name").notNull(),
  email: text("email").notNull(),
  source: text("source").default("website").notNull(),
  status: text("status").default("new").notNull(),
  createdAt: timestamp("created_at").defaultNow().notNull(),
});
