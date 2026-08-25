# Testing Standards

## Purpose
Define what must be tested, when tests are required, and which tools are used for each type of test.

## 1. Tools by Test Type

| Test Type | Tool(s) |
|---|---|
| Unit | Jest (JS/TS), pytest (Python) |
| Component | Storybook + Jest |
| Integration | Jest + SuperTest, pytest |
| API | SuperTest |
| End-to-End (E2E) | Cypress |
| Performance | k6 |
| Security | OWASP ZAP + API security tests (SuperTest) |

**Note:** Postman is not part of this foundation — SuperTest provides automated API testing that plugs directly into CI.

## 2. What Must Be Tested
- Happy paths (expected normal use)
- Error paths (invalid input, failures)
- Empty states
- Loading states
- Edge cases
- Security cases (auth, permissions, invalid access)
- Complete user journeys (for E2E)

## 3. When Tests Are Required
- Every new feature must include unit tests for its logic.
- Every new/changed API endpoint must include SuperTest coverage.
- Every new shared UI component must include a Storybook story and Jest test.
- Any user-facing journey must have Cypress coverage.
- Performance-sensitive changes must be checked with k6.
- Any change touching authentication, authorisation, or data handling must be checked with OWASP ZAP / security tests.

## 4. Naming
- Test files sit alongside or in a parallel `tests/` folder matching the code they test.
- Test names should describe the behaviour being tested, not the implementation (e.g. `"returns 404 when user not found"`).

## 5. Running Tests

| Where | How |
|---|---|
| Locally | `pnpm test` (JS/TS), `pytest` (Python) |
| In CI | Automatically on every push / Pull Request |

## 6. Central Testing Structure

```
tests/
├── api/
├── integration/
├── e2e/
├── performance/
├── security/
└── analytics/
```

The structure reflects *what* is being tested; the tools listed above support each area.

## 7. Test Coverage Principle
Do not chase a coverage percentage for its own sake. Ask: **"Are the important things tested?"**

## Sign-off Checklist
- [ ] Jest configured and running
- [ ] pytest configured and running
- [ ] Storybook + Jest component testing working
- [ ] SuperTest API testing working
- [ ] Cypress E2E testing working
- [ ] k6 performance testing configured
- [ ] OWASP ZAP security testing configured
- [ ] Test folder structure created
- [ ] All tests wired into CI
