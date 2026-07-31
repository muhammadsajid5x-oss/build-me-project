# Recovery Guide & Disaster Recovery Plan

This guide outlines the standard operating procedures for recovering infrastructure, application deployments, and database state in the event of an incident within the `build-me-project` monorepo.

---

## 1. Deployment Recovery (Vercel)

If a production deployment introduces critical regressions or crashes:

1. Open the [Vercel Dashboard](https://vercel.com).
2. Navigate to your project and select the **Deployments** tab.
3. Locate the last known stable deployment from the deployment history.
4. Click the options menu (`...`) next to that deployment and select **Promote to Production**.
5. Verify that the production environment stabilizes and health check endpoints respond correctly.

---

## 2. Git Recovery

If a faulty commit reaches the main integration or production branch and needs to be safely rolled back:

1. Revert the problematic commit locally or directly on the branch:
   ```bash
   git revert HEAD
   git push origin develop
   ```
