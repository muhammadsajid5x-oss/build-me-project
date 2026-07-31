# Analytics Guide

## Overview

This document defines how user interactions, performance metrics, and business KPIs are measured and tracked.

## Event Architecture & Data Flow

The system processes and tracks telemetry data through the following multi-tier pipeline:

```text
User
   ↓
Frontend
   ↓
API
   ↓
Supabase
   ↓
Python Analytics
   ↓
Admin Dashboard
```

## Events Table Schema Design

To support future telemetry aggregation and analytics processing, the PostgreSQL database (via Drizzle ORM and Supabase) is planned with the following `events` table structure:

- **`id`**: Unique identifier (UUID, Primary Key).
- **`user_id`**: Reference ID identifying the user performing the action (Nullable for anonymous traffic).
- **`event_name`**: String describing the triggered action (e.g., `button_clicked`, `page_view`).
- **`page`**: The route or URL path where the event occurred.
- **`timestamp`**: Exact time the event was recorded (UTC).
- **`metadata`**: JSONB column for storing extensible, event-specific contextual attributes.
