# Git Standards

## Purpose
Define how the team uses Git day to day — branch naming, commits, Pull Requests, and code review expectations. (Branching *strategy* itself — the feature → development → main flow — is documented separately in `branching-strategy.md`.)

## 1. Branch Naming
- `feature/<short-description>` — e.g. `feature/navbar`, `feature/contact-form`
- `fix/<short-description>` — for bug fixes
- `chore/<short-description>` — for non-feature maintenance work

## 2. Commit Standards
- Write clear, short commit messages describing *what* changed and *why*.
- Prefer small, focused commits over one giant commit.
- Suggested format: `type: short description` (e.g. `fix: correct navbar overflow on mobile`)

## 3. Pull Request Standards
Every Pull Request should include:
- A clear title describing the change
- A short description of what was done and why
- Reference to the related requirement/task
- Confirmation that tests were added/updated
- Confirmation that the change was checked locally

## 4. Merge Rules
- No direct pushes to `main` or `development`.
- All changes go through a Pull Request.
- Required CI checks must pass before merge.
- At least one review (AI review + human review) is required before merge.

## 5. Code Review Expectations
Reviewers check for:
- [ ] Requirement met
- [ ] Code quality (naming, structure, simplicity)
- [ ] Tests present and meaningful
- [ ] Security considered
- [ ] Performance considered
- [ ] Analytics considered (if relevant)
- [ ] Documentation updated (if relevant)

## 6. Protected Branches
| Branch | Protection |
|---|---|
| `main` | No direct pushes, PR required, CI required, review required |
| `development` | Appropriate protection per agreed workflow |

## Sign-off Checklist
- [ ] Branch naming convention documented
- [ ] Commit message convention documented
- [ ] Pull Request template/requirements documented
- [ ] Merge rules documented
- [ ] Code review expectations documented
- [ ] Branch protection configured in GitHub
