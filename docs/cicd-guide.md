# CI/CD Guide

## Overview

This document outlines the Continuous Integration and Continuous Deployment (CI/CD) pipeline architecture for the Build Me project.

## Pipeline Workflow

1. **Trigger**: Code pushed to feature branches or pull requests opened against `develop` or `main`.
2. **Quality Gates**:
   - Install dependencies (`pnpm install`)
   - Linting (`pnpm lint`)
   - Type-checking (`pnpm type-check`)
   - Unit & Integration Tests (`pnpm test`)
   - Storybook Build (`pnpm storybook:build`)
   - E2E Tests (`pnpm test:e2e`)
3. **Deployment**: Automated deployment to preview or production environments via GitHub Actions and Vercel/Railway upon successful checks.
