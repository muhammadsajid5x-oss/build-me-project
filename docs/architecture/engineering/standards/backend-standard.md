# Backend Development Standard

## Purpose

This standard defines the backend architecture and development practices.

## Required Technologies

- Node.js
- Express
- TypeScript
- REST APIs

## API Development Workflow

```text
Postman Contract
      │
      ▼
Implementation
      │
      ▼
Automated Test
```

## Development Rules

- Follow REST principles.
- Validate all inputs.
- Use proper HTTP status codes.
- Implement centralized error handling.
- Keep controllers lightweight.
- Place business logic in services.
- Write automated tests for all endpoints.
