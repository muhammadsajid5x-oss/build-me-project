# Deployment Guide

## Overview

Instructions for deploying the Build Me platform across environments.

## Environments

- **Development**: Local machines using `develop` branch and local/containerized databases.
- **Staging**: Automated deployments from the `develop` branch for integration testing.
- **Production**: Stable deployments from the `main` branch.

## Prerequisites

- Node.js >= 20.0.0
- pnpm >= 9.0.0
- Valid environment variables configured (see `.env.example`)
