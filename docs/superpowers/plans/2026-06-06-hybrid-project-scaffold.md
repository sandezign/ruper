# Rumper Hybrid Project Scaffold Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Create the approved operations-first hybrid repository structure for Rumper.

**Architecture:** Use a single repository with clear boundaries between the future marketing website, concierge operations, business validation, product documentation, and non-sensitive data assets. Add small README files so every directory has an explicit responsibility and remains tracked.

**Tech Stack:** Markdown documentation, Git ignore rules, environment variable template, future Next.js and Tailwind CSS website.

---

### Task 1: Create Repository Entry Points

**Files:**
- Create: `README.md`
- Create: `.gitignore`
- Create: `.env.example`

- [x] Create a root README explaining the hybrid MVP and repository map.
- [x] Add ignore rules protecting secrets, customer data, generated reports, and Node.js output.
- [x] Add a safe environment variable template for the future Typeform CTA.

### Task 2: Create Operations Workspace

**Files:**
- Create: `operations/*/README.md`

- [x] Create operations directories for orders, research, reports, scoring, quality control, and customer service.
- [x] Add a concise responsibility and data-safety note to each directory.

### Task 3: Create Business, Product, and Data Workspaces

**Files:**
- Create: `business/*/README.md`
- Create: `product/*/README.md`
- Create: `data/*/README.md`

- [x] Create the approved business, product, and data directories.
- [x] Add concise responsibility notes to each directory.

### Task 4: Create Website Placeholder

**Files:**
- Create: `apps/website/README.md`

- [x] Document the website's initial boundary: Bahasa Indonesia marketing pages with a Typeform CTA.
- [x] Explicitly exclude backend, payments, authentication, maps, and automated scoring.

### Task 5: Verify Scaffold

- [x] List the resulting repository tree.
- [x] Confirm ignored customer-data paths and local environment files are excluded.
- [x] Confirm all changes remain inside the Rumper project directory.
