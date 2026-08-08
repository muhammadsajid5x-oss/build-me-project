# Database Standard

## Purpose

This standard governs database design and schema management.

## Database Change Process

```text
Drizzle Schema
      │
      ▼
Migration
      │
      ▼
Supabase
```

## Rules

- All schema changes must be defined in Drizzle ORM.
- Generate migrations before deployment.
- Apply migrations through the migration process only.
- Keep schema definitions under version control.

## Never

- Directly edit the production database.
- Modify tables manually.
- Skip migrations.
