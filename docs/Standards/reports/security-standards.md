# Security Standards

## Purpose
Basic, non-negotiable security rules for the Build Me project.

## 1. Core Rules
- Never commit secrets (passwords, API keys, tokens) to GitHub.
- Validate all input, on both frontend and backend.
- Protect personal/sensitive data at all times.
- Protect APIs — never expose an unauthenticated endpoint that shouldn't be.
- Check permissions on every request that touches protected data.
- Use safe, standard authentication methods.
- Check dependencies regularly for known vulnerabilities.
- Run automated security tests as part of CI.
- Fix serious/critical security problems before release — never ship with a known critical issue.

## 2. Authentication and Authorisation

| Concept | Question it answers |
|---|---|
| Authentication | Who is the user? |
| Authorisation | What is the user allowed to do? |

Both must be enforced server-side; frontend checks are for UX only and are never a substitute for backend enforcement.

## 3. Backend Security Baseline
- Secure HTTP headers
- Input validation and sanitisation
- Authentication on all protected routes
- Authorisation checks per resource/action
- Rate limiting where appropriate
- Safe, non-leaking error responses
- Secrets managed through environment variables, never hard-coded
- Secure handling of all API requests

## 4. Frontend Security Baseline
- No secrets of any kind in frontend code
- All API communication over secure channels
- Input validation before submission
- Secure handling of authentication tokens/sessions
- Safe handling of user data in the browser
- Enforced access control on protected UI routes
- Safe, non-revealing error states

## 5. Automated Security Testing

| Tool | Purpose |
|---|---|
| SuperTest | Automated API-level security checks (auth, authorisation, input handling) |
| OWASP ZAP | Automated security scanning of the application/API |

These run as part of the `security.yml` CI workflow.

## 6. Secrets Management
- Store secrets in the hosting platform's environment variable system (never in code or `.vscode` settings).
- Never copy production secrets into development or staging.
- Rotate credentials if ever accidentally exposed.

## Sign-off Checklist
- [ ] Core security rules documented and communicated
- [ ] Authentication foundation in place
- [ ] Authorisation foundation in place
- [ ] Backend security baseline implemented
- [ ] Frontend security baseline implemented
- [ ] SuperTest security tests running in CI
- [ ] OWASP ZAP scanning configured in CI
- [ ] Secrets management process confirmed (no secrets in code)
