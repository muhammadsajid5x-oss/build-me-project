# Rollback Guide

## Overview

Disaster recovery and rollback procedures for failed deployments, code regressions, or critical production bugs.

## 1. Vercel Rollback (Redeploy a Previous Deployment)

If a production deployment introduces a frontend or serverless regression:

1. Navigate to the **Vercel Dashboard** for your project.
2. Go to the **Deployments** tab.
3. Locate the last known stable deployment that passed all quality checks.
4. Click the three dots (`...`) next to that deployment and select **Rollback** (or promote the deployment to production).
5. Verify that the production URL serves the stable version correctly.

## 2. Git Rollback (Git Revert)

If a merged commit introduced a bug on `main` or `develop` and needs to be undone cleanly via version control:

1. Identify the offending commit hash using git history:
   ```bash
   git log --inline
   ```
