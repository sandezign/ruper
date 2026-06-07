# Rumper Product Direction

This directory is the source of truth for Rumper's product direction. It separates long-term intent from strategic choices, roadmap outcomes, and execution plans.

## Product Hierarchy

```text
Product Vision
→ Product Strategy
→ Strategic Objectives
→ Outcome-Based Roadmap
→ Validation and Execution Plans
```

| Layer | Question answered | Source of truth |
|---|---|---|
| Vision | What future does Rumper want to create? | [Product Vision](vision/product-vision.md) |
| Strategy | Where will Rumper play and how will it win? | [Product Strategy](strategy/product-strategy.md) |
| Roadmap | What outcomes must Rumper achieve next? | [Product Roadmap](roadmap/README.md) |
| Requirements | What customer value and product behavior are required? | [Product Requirements](requirements/README.md) |
| Decisions | Why were important product choices made? | [Product Decisions](decisions/README.md) |

## Supporting Documentation

The roadmap describes outcomes and decision gates. Detailed execution belongs in the relevant supporting area:

| Documentation | Location |
|---|---|
| Positioning and customer value | [`product/requirements`](requirements/README.md) |
| Validation experiments and launch gates | [`business/validation`](../business/validation/README.md) |
| Pricing assumptions and tests | [`business/pricing`](../business/pricing/README.md) |
| Go-to-market execution | [`business/marketing`](../business/marketing/README.md) |
| Concierge delivery and quality control | [`operations`](../operations) |
| Data sources, schemas, and samples | [`data`](../data) |

## Governance

- Review the vision annually or after a fundamental market change.
- Review the product strategy quarterly using customer, business, and operational evidence.
- Review roadmap outcomes monthly during validation and quarterly after repeatability is established.
- Record material changes to segment, positioning, business model, or product boundary in [`product/decisions`](decisions/README.md).
- Progress to a new roadmap horizon only when its decision gate is met. Dates alone do not justify progression.

## Language Convention

Strategic documentation is written in English. Bahasa Indonesia is retained for customer-facing promises, campaign language, calls to action, report labels, and examples.
