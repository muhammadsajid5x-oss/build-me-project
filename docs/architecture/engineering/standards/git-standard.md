# Git Standard

## Branch Strategy

```text
feature/*
      │
      ▼
develop
      │
      ▼
main
```

## Branch Naming

- `feature/navbar`
- `feature/footer`
- `feature/api-auth`
- `bugfix/login-error`
- `hotfix/security-patch`

## Commit Message Examples

### Good

```text
feat: add hero component
fix: resolve navbar alignment issue
docs: update deployment guide
test: add hero component tests
```

### Bad

```text
update stuff
fix
changes
new code
```

## Pull Request Rules

- Create a Pull Request for every feature.
- Ensure CI checks pass.
- Obtain code review approval.
- Resolve comments before merging.
- Merge into `develop` before releasing to `main`.
