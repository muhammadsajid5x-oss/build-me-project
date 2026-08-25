# Deployment Standards

## Purpose
Define how code moves safely from a feature branch through to production.

## 1. Deployment Flow

```
Feature
 ↓
CI
 ↓
Development
 ↓
Staging
 ↓
Product Acceptance
 ↓
Production
```

## 2. Environments

| Environment | Purpose | Connected Branch |
|---|---|---|
| Development | Build and first-check features | `development` |
| Staging / Pre-Production | Check a release candidate before go-live | `main` |
| Production | The real, live product | `main` (after acceptance) |

## 3. Product Acceptance Gate

Product Acceptance is **not** a Technology-only decision. The Epic separates *technical readiness* from *Product Acceptance*.

**Technology confirms:**
- The feature is built correctly
- Tests pass
- Security checks pass
- Performance is acceptable
- A rollback path exists

**Product Ownership confirms:**
- Product requirements are met
- UX is acceptable
- Business needs are met
- Compliance requirements are met

Technology does **not** declare a feature "product-accepted." Technology declares it **technically ready**.

## 4. Pre-Deployment Checklist
- [ ] Build succeeds
- [ ] All required tests pass
- [ ] Environment variables confirmed for the target environment
- [ ] Security checks passed
- [ ] Database changes (if any) reviewed and migration-tested
- [ ] Analytics events (if any) verified
- [ ] Monitoring/alerts in place
- [ ] Rollback path confirmed
- [ ] Deployment checklist completed

## 5. Rollback Standard
Every deployment must have a confirmed rollback path before it goes to Production, including consideration of database recovery where schema changes are involved.

## 6. Automatic Deployment
- Feature branches deploy automatically to Preview environments via CI/CD.
- Merges to `development` deploy automatically to the Development environment.
- Merges to `main` (after Product Acceptance) deploy to Production.

## Sign-off Checklist
- [ ] Deployment flow documented
- [ ] Environments created and connected to the correct branches
- [ ] Product Acceptance gate clearly defined and agreed with Product Ownership
- [ ] Pre-deployment checklist in use
- [ ] Rollback process defined and tested
- [ ] Automatic deployment configured in CI/CD
