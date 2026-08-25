# Coding Standards

## Purpose
Simple, consistent rules for how code is written across the Build Me project.

## 1. Naming
- Use clear, descriptive names — avoid abbreviations that aren't obvious.
- Components: `PascalCase` (e.g. `UserCard`)
- Functions/variables: `camelCase` (e.g. `getUserProfile`)
- Constants: `UPPER_SNAKE_CASE` (e.g. `MAX_RETRY_COUNT`)
- Files: match the naming style of what they export (component files in `PascalCase`, utility files in `camelCase` or `kebab-case`)

## 2. File Structure
- Follow the agreed monorepo structure (`apps/`, `services/`, `packages/`, `database/`, `tests/`).
- Keep related files close together (component + its test + its story).
- One clear responsibility per file — avoid files that do too many unrelated things.

## 3. Functions
- Keep functions small and focused on one task.
- Prefer pure functions where possible (same input → same output, no hidden side effects).
- Avoid deeply nested logic — extract into smaller named functions.

## 4. Components
- Keep components focused on presentation; move business logic into hooks/services where possible.
- Reuse shared components from `packages/ui` instead of duplicating UI patterns.
- Provide sensible default props where appropriate.

## 5. Types
- Use TypeScript types/interfaces for all public function signatures and component props.
- Share types across frontend and backend using `packages/types` — never redefine the same shape twice.
- Avoid `any`; use precise or generic types instead.

## 6. Error Handling
- Never silently swallow errors.
- Handle expected errors (validation, not-found) explicitly and distinctly from unexpected errors.
- Provide clear, safe error messages (no leaking of internals or secrets).

## 7. Comments
- Write self-explanatory code first; use comments to explain *why*, not *what*.
- Remove commented-out dead code before merging.

## 8. Core Principles
The team follows:
- **Clean Code** — code should be easy to read and understand.
- **SOLID** — well-structured, maintainable object/module design.
- **DRY** (Don't Repeat Yourself) — reuse instead of duplicating logic.
- **KISS** (Keep It Simple) — avoid unnecessary complexity.

## Sign-off Checklist
- [ ] Naming conventions agreed and documented
- [ ] File structure rules agreed
- [ ] Function and component conventions agreed
- [ ] Type-sharing approach agreed
- [ ] Error-handling approach agreed
- [ ] Commenting approach agreed
- [ ] Clean Code / SOLID / DRY / KISS acknowledged by the team
