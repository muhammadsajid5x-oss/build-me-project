# Build Me Engineering Standards

**Version:** 1.0
**Project:** Build Me
**Owner:** Engineering Team
**Last Updated:** August 2026

---

# Purpose

The Build Me Engineering Standards define the principles, practices, and workflows that guide how the product is designed, developed, tested, deployed, and maintained.

These standards ensure:

- Consistent code quality
- Reusable architecture
- Reliable deployments
- Strong security practices
- High software quality
- Effective team collaboration
- Reduced technical debt

---

# 1. Development Principles

The Build Me Project follows these engineering principles throughout the software development lifecycle.

## Quality First

Quality is built into every stage of development rather than added at the end.

- Prioritize maintainable code.
- Prevent defects through reviews and testing.
- Deliver production-ready features.

---

## Automate Repetitive Work

Automation improves consistency and reduces manual effort.

Examples:

- Automated builds
- Continuous Integration (CI)
- Automated testing
- Automatic deployments
- Code formatting
- Linting

---

## Test Before Release

Every feature must be verified before deployment.

Required testing includes:

- Unit Testing
- Integration Testing
- End-to-End Testing

No feature should reach production without successful test validation.

---

## Document Decisions

Important technical decisions must be documented to preserve project knowledge and simplify future maintenance.

Examples:

- Architecture decisions
- API contracts
- Database schema updates
- Deployment procedures

---

## Keep Solutions Simple

Prefer simple, readable, and maintainable implementations over unnecessary complexity.

Follow:

- KISS (Keep It Simple, Stupid)
- DRY (Don't Repeat Yourself)
- SOLID Principles
- Clean Code Practices

---

# 2. Coding Standards

## TypeScript Rules

All frontend and backend code must use TypeScript.

### Preferred

```typescript
interface UserProfile {
  name: string;
  email: string;
}
```

### Avoid

```typescript
let data: any;
```

Always:

- Prefer interfaces and types.
- Avoid `any`.
- Use strict typing.
- Enable TypeScript strict mode.

---

## Naming Standards

### Components

Use **PascalCase**

Examples

- HeroSection.tsx
- Navbar.tsx
- LeadCard.tsx
- Footer.tsx

---

### Functions

Use **camelCase**

Examples

- getUserProfile()
- submitLead()
- calculateRevenue()

---

### Variables

Use **camelCase**

Examples

- customerName
- totalRevenue
- currentUser

---

### Constants

Use **UPPER_SNAKE_CASE**

Examples

- API_URL
- MAX_RETRIES
- DEFAULT_TIMEOUT

---

### File Naming

| Item       | Convention       |
| ---------- | ---------------- |
| Components | PascalCase       |
| Hooks      | camelCase        |
| Utilities  | camelCase        |
| Constants  | UPPER_SNAKE_CASE |
| Assets     | kebab-case       |

---

# 3. Component Standards

Build Me follows **Component-Driven Development (CDD)**.

Every UI element must be implemented as a reusable component.

## Component Library

```text
packages/ui/
│
├── Avatar
├── Button
├── Card
├── Divider
├── Footer
├── Hero
├── ImpactCard
├── MetricItem
├── Navbar
├── QuickActionCard
└── SocialIcon
```

## Component Rules

Every component must:

- Be reusable
- Be modular
- Have a single responsibility
- Support responsive layouts
- Be documented
- Be tested
- Follow accessibility best practices

Avoid placing large UI implementations directly inside page files.

---

# 4. Storybook Standards

Storybook is the project's **UI Source of Truth**.

Every reusable component must follow this workflow.

```text
Component
      │
      ▼
Storybook Story
      │
      ▼
Test
      │
      ▼
Application Usage
```

Example

```text
Button.tsx

↓

Button.stories.tsx

↓

Button.test.tsx

↓

Used inside Hero.tsx
```

Storybook is required for:

- Visual validation
- Documentation
- Component development
- UI consistency

---

# 5. API Development Standards

Build Me follows an **API-First Development** approach.

Development workflow:

```text
Requirement
      │
      ▼
Postman Contract
      │
      ▼
API Test
      │
      ▼
Backend Development
      │
      ▼
Frontend Integration
```

Every API must define:

- Endpoint
- HTTP Method
- Request Body
- Response Body
- Validation Rules
- Error Handling
- Authentication Requirements
- Authorization Rules
- Test Cases

### Example Response

```json
{
  "success": true,
  "data": {}
}
```

### Example Error

```json
{
  "message": "Invalid request."
}
```

---

# 6. Database Standards

Database modifications must follow a controlled migration workflow.

```text
Drizzle Schema
      │
      ▼
Migration
      │
      ▼
Supabase Database
```

## Rules

- Define schemas using Drizzle ORM.
- Generate migration files.
- Commit migrations to Git.
- Deploy migrations through the release process.

### Never

- Modify production tables manually.
- Edit production data directly.
- Skip migrations.

Drizzle ORM is the **Database Source of Truth**.

---

# 7. Testing Standards

Testing is mandatory for every feature.

## Unit Testing

**Tool**

- Jest

Used for:

- Functions
- Components
- Utilities
- Business Logic

---

## API Testing

**Tool**

- Postman

Used for:

- API Contracts
- Request Validation
- Integration Validation

---

## End-to-End Testing

**Tool**

- Cypress

Used for:

- User Journeys
- Navigation
- Authentication
- Forms
- Feature Validation

---

Every feature must successfully pass:

```text
Unit Test

+

API Test

+

End-to-End Test
```

before deployment.

---

# 8. Git Standards

## Branch Strategy

```text
main
 │
Production

develop
 │
Staging

feature/*
 │
Development
```

## Branch Naming

Examples

- feature/navbar
- feature/footer
- feature/authentication
- bugfix/mobile-menu

---

## Commit Standards

### Good

```text
feat: add hero component

fix: correct mobile navbar issue

docs: update deployment guide

test: add authentication tests
```

### Avoid

```text
update

changes

fix

stuff
```

---

## Pull Request Rules

Every Pull Request must:

- Pass CI
- Pass automated tests
- Receive code review approval
- Resolve review comments
- Include updated documentation when applicable

---

# 9. Deployment Standards

Deployment follows the Build Me DevSecOps pipeline.

```text
Feature Branch
      │
      ▼
Pull Request
      │
      ▼
CI Pipeline
      │
      ▼
Tests
      │
      ▼
Storybook Build
      │
      ▼
Cypress
      │
      ▼
Vercel Preview
      │
      ▼
Peer Review
      │
      ▼
Develop
      │
      ▼
Staging
      │
      ▼
Product Acceptance
      │
      ▼
Compliance Acceptance
      │
      ▼
Main
      │
      ▼
Production
```

Deployment Rules

- All automated tests must pass.
- Preview deployment must be verified.
- Code review approval is mandatory.
- Only approved code reaches production.
- Monitor deployments after release.

---

# 10. Security Standards

Security is everyone's responsibility.

Security expectations:

- Store secrets using environment variables.
- Never commit API keys or credentials.
- Validate all user inputs.
- Protect authenticated routes.
- Apply authorization checks.
- Keep dependencies updated.
- Review vulnerabilities regularly.
- Follow secure coding practices.
- Use HTTPS for production environments.

---

# Engineering Operating Model

The Build Me engineering lifecycle follows a standardized workflow.

```text
Plan
      │
      ▼
Design
      │
      ▼
Develop
      │
      ▼
Review
      │
      ▼
Test
      │
      ▼
Deploy
      │
      ▼
Monitor
      │
      ▼
Maintain
      │
      ▼
Improve
```

---

# Quality Checklist

Before merging any feature, verify that:

- Development principles are followed.
- TypeScript standards are satisfied.
- Components are reusable.
- Storybook documentation exists.
- API contracts are documented.
- Database migrations are created.
- Unit, API, and E2E tests pass.
- Security requirements are met.
- Documentation is updated.
- CI pipeline succeeds.

---

# Conclusion

The Build Me Engineering Standards provide a unified engineering framework for the project. By following these standards, the team ensures consistent development practices, reusable architecture, reliable testing, secure deployments, maintainable code, and high-quality software delivery. These standards serve as the foundation for the Build Me engineering operating model and support continuous improvement throughout the DevSecOps lifecycle.
