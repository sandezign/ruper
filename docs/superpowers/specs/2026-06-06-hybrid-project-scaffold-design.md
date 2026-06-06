# Rumper Hybrid Project Scaffold Design

## Purpose

Create an operations-first repository for Rumper's 30-day concierge MVP, supported by a lightweight custom marketing website. The repository must help validate willingness to pay before investing in a full location-risk platform.

## Scope

The first milestone includes:

- A complete concierge operations workspace.
- A Bahasa Indonesia marketing website area using Next.js and Tailwind CSS.
- Typeform as the primary order call-to-action.
- Business validation, marketing, pricing, product, and data documentation areas.
- Clear expansion points for later automation and the interactive platform.

The first milestone excludes:

- A custom backend or database.
- Authentication and customer accounts.
- Payment integration.
- Automated location scoring.
- Interactive risk maps.
- Customer personal data committed to Git.

## Repository Structure

```text
.
├── apps/
│   └── website/
├── operations/
│   ├── orders/
│   ├── research/
│   ├── reports/
│   ├── scoring/
│   ├── quality-control/
│   └── customer-service/
├── business/
│   ├── validation/
│   ├── marketing/
│   └── pricing/
├── product/
│   ├── requirements/
│   ├── roadmap/
│   └── decisions/
├── data/
│   ├── source-registry/
│   ├── schemas/
│   └── samples/
├── docs/
│   └── superpowers/
│       ├── specs/
│       └── plans/
├── .env.example
├── .gitignore
└── README.md
```

## Directory Responsibilities

- `apps/website`: Next.js and Tailwind marketing website. Initially contains no order processing; its main CTA links to Typeform.
- `operations`: Repeatable procedures and templates for producing and delivering location audit reports.
- `business`: Commercial assumptions, validation gates, marketing activities, and pricing.
- `product`: Product requirements, roadmap, and recorded decisions.
- `data`: Source registry, reusable schemas, and anonymous sample data only.
- `docs/superpowers`: Approved designs and implementation plans.

## Safety Rules

- Never commit customer names, contact information, addresses, payment details, or completed customer reports.
- Store secrets in local environment files, never in committed files.
- Keep source attribution and confidence labels with every research finding.
- Treat automated platform capabilities as future work until validation gates justify them.

## Initial Success Condition

The repository clearly communicates where every concierge-MVP artifact belongs, protects customer data by default, and is ready for the operations kit and marketing website to be developed incrementally.
