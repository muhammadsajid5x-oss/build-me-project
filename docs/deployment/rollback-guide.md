````markdown
# Build Me Rollback Guide

## 8.17 Rollback Strategy & Recovery

### Option 1 — Vercel Rollback (Fast Application Recovery)

If a production issue occurs:

1. Open Vercel Dashboard $\rightarrow$ Deployments.
2. Select previous known-good deployment.
3. Promote to Production.

### Option 2 — Git Rollback

Execute a safe reversal commit:

```bash
git revert HEAD
git push
```
````

### Option 3 — Database Migration Recovery

Database schema changes are managed through Drizzle migrations.

Migration files are stored in:

```text
database/migrations
```
