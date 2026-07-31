# Observability Guide

## Overview

This guide outlines the logging, monitoring, and tracing standards for the application to ensure high availability and rapid incident response.

## Core Pillars

1. **Logging**: Structured JSON logs capturing request payloads, timestamps, error codes, and user context.
2. **Metrics**: Real-time tracking of CPU usage, memory consumption, HTTP request latency (p95/p99), and error rates.
3. **Tracing**: Distributed request tracing across microservices and external APIs (e.g., Supabase and Vercel).

## Vercel Monitoring Setup

For each project (Web, Admin, and API), observability and deployment health are verified through the Vercel Dashboard:

1. Open the **Vercel Dashboard**.
2. Select the specific project.
3. Navigate to **Settings** and verify that the GitHub repository is connected.
4. Under **Deployments**, confirm access to:
   - **Build Logs**: To inspect compilation output, dependencies, and build errors.
   - **Runtime Logs**: To monitor execution logs and serverless function behavior.
   - **Deployment History**: To track release versions and manage rollbacks.

## Additional Tools & Dashboards

- **Vercel Analytics**: Monitors serverless function performance, deployment health, and edge requests.
- **Supabase Dashboard**: Tracks database connection pool usage, active queries, and storage limits.

## Performance Monitoring Standards

Performance, responsiveness, and web vitals are measured and audited using:

- **Chrome DevTools**: For local network analysis, runtime performance profiling, and memory leak inspection.
- **Lighthouse**: For automated auditing of performance, accessibility, SEO, and progressive web apps during development.
- **PageSpeed Insights**: For measuring real-world field data and laboratory performance of your production deployment.
