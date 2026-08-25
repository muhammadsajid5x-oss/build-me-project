# Review Standards

## Purpose
Define the process every piece of code goes through before it is merged.

## 1. Review Flow

```
Build
 ↓
Self-check
 ↓
AI review
 ↓
Human review
 ↓
Automated checks
 ↓
Merge
```

## 2. Self-Check (before requesting review)
- [ ] The code builds successfully
- [ ] The code runs locally without errors
- [ ] Relevant tests were added or updated
- [ ] The change matches the original requirement

## 3. AI Review
Ask AI to check the code for:
- Bugs
- Security problems
- Poor naming
- Duplicate code
- Overly complex code
- Missing error handling
- Missing tests
- Performance problems
- Accessibility problems
- Type problems

The Technology Owner decides what actually needs to change based on AI's findings.

## 4. Human Review Checklist
- [ ] Requirement met
- [ ] Code quality is good (naming, structure, readability)
- [ ] Tests are present and meaningful
- [ ] Security has been checked
- [ ] Performance has been considered
- [ ] Analytics has been considered (if relevant)
- [ ] Documentation has been updated (if relevant)

## 5. Automated Checks
Before merge, CI must confirm:
- Linting passes
- Type checking passes
- Build succeeds
- Unit tests pass
- Integration tests pass
- API tests pass
- E2E tests pass (where relevant)

## 6. Merge Rule
A Pull Request may only be merged once:
- AI review has been addressed
- Human review has approved
- All required automated checks are green

## Sign-off Checklist
- [ ] Review flow documented and communicated to the team
- [ ] Self-check checklist in use
- [ ] AI review step embedded in the process
- [ ] Human review checklist in use
- [ ] Automated checks required before merge (enforced in GitHub branch protection)
