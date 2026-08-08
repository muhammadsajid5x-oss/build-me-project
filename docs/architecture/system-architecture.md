# System Architecture

## Overview

The Build Me Project follows a modern full-stack monorepo architecture.

```
React Frontend
      │
      ▼
REST API
      │
      ▼
Node.js + Express
      │
      ▼
Drizzle ORM
      │
      ▼
Supabase PostgreSQL
      │
      ▼
Python Analytics
```

---

## Technology Stack

### Frontend

- React
- TypeScript
- Vite
- Storybook

### Backend

- Node.js
- Express
- TypeScript

### Database

- PostgreSQL
- Drizzle ORM
- Supabase

### DevOps

- GitHub
- TurboRepo
- Vercel

### Testing

- Jest
- Cypress
- Playwright

---

## Application Relationships

Frontend

↓

API Layer

↓

Business Logic

↓

Database

↓

Analytics Service

---

## Data Flow

1. User requests data.
2. React calls REST API.
3. Express processes request.
4. Drizzle queries PostgreSQL.
5. Response returned to frontend.
6. Analytics events are recorded.
