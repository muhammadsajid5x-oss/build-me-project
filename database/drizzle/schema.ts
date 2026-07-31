import { pgTable, uuid, text, timestamp, jsonb } from "drizzle-orm/pg-core";

export const eventsTable = pgTable("events", {
  id: uuid("id").defaultRandom().primaryKey(),
  userId: uuid("user_id"), // Links to users table if applicable
  eventName: text("event_name").notNull(),
  page: text("page"),
  timestamp: timestamp("timestamp", { withTimezone: true })
    .defaultNow()
    .notNull(),
  metadata: jsonb("metadata"), // Stores flexible event-specific payloads
});
