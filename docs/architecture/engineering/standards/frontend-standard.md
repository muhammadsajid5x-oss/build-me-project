# Frontend Development Standard

## Purpose

This standard defines the technologies, structure, and best practices for frontend development in the Build Me Project.

## Required Technologies

- React
- Vite
- TypeScript
- Material UI
- Tailwind CSS
- Storybook

## Component Development Workflow

Every UI component must follow this process:

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
Documentation
```

## Development Rules

- Build reusable components.
- Use TypeScript for all components.
- Keep components small and focused.
- Follow Atomic Design principles.
- Document every component in Storybook.
- Write tests before merging.
- Maintain responsive design.
- Follow accessibility best practices.

## Naming Conventions

- Components: PascalCase (e.g., `HeroCard.tsx`)
- Hooks: camelCase (e.g., `useAuth.ts`)
- Utilities: camelCase
- Constants: UPPER_SNAKE_CASE
