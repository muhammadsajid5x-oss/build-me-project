# Deployment Guide

## Environment

- Vercel
- GitHub
- Supabase

---

## Environment Variables

DATABASE_URL

SUPABASE_URL

SUPABASE_KEY

API_URL

---

## Deployment Flow

```
Feature Branch

↓

Pull Request

↓

CI Checks

↓

Vercel Preview

↓

Approval

↓

Develop

↓

Staging

↓

Acceptance Testing

↓

Main

↓

Production
```

---

## Rollback Process

1. Open Vercel Dashboard
2. Select previous deployment
3. Promote deployment
4. Verify application
5. Monitor logs

---

## Version Release

Feature

↓

Develop

↓

Release

↓

Production

````markdown
## Environment Separation

Build Me uses separate configuration for each environment.

### Development

Development configuration is used locally.

```text
.env
.env.local
```
````
