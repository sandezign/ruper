# Phase 3 Plan: Semi-Automation

**Duration:** 16 weeks
**Capacity:** 160 gross hours; 128 planned hours; 32-hour buffer
**Primary owner:** Founder
**Phase goal:** Reduce delivery effort and increase capacity by automating only measured, repetitive workflow bottlenecks.

## Phase Constraints

- Customer delivery remains the first priority.
- Maximum automation investment: 4 planned hours per week.
- Automate one workflow stage at a time.
- Every automation must retain a human-review checkpoint.
- No customer-facing self-service product during this phase.

## Weekly Capacity Model

| Workstream | Hours/week |
|---|---:|
| Customer delivery and quality control | 3 |
| Automation and internal tooling | 3 |
| Evidence-library and data structuring | 1 |
| Metrics and workflow review | 1 |
| Unplanned buffer | 2 |

## Month 1: Structure the Workflow and Data

**Objective:** Create reliable internal inputs before automating outputs.

### Priorities

1. Select the highest-cost recurring bottleneck from Phase 2.
2. Define structured records for orders, customer priorities, locations, evidence, findings, scores, and report sections.
3. Standardize naming, confidence labels, and review states.
4. Establish a baseline for time, quality, and rework.

### Deliverables

- Prioritized automation backlog with expected time savings.
- Structured evidence and finding schema.
- Standardized reusable report components.
- Baseline workflow metrics.
- Human-review and exception rules.

### Acceptance Criteria

- The selected bottleneck occurs frequently enough to justify automation.
- Structured records can represent completed reports without losing important context.
- Every automated output has an accountable human reviewer.

## Month 2: Automate One Proven Bottleneck

**Objective:** Demonstrate measurable time savings on one workflow stage.

### Candidate Bottlenecks

- Repeated evidence lookup and reuse.
- Score calculation and consistency checks.
- Report-section assembly.
- Order-status and customer-update messages.
- Quality-control completeness checks.

### Deliverables

- First internal automation.
- Before-and-after time comparison.
- Error and exception log.
- Updated SOP and fallback procedure.

### Acceptance Criteria

- The automation reduces median handling time for the selected stage.
- Output quality is equal to or better than the manual baseline.
- The founder can complete the task manually when the automation fails.

## Month 3: Expand Reuse and Internal Visibility

**Objective:** Improve report production using structured evidence and workflow visibility.

### Priorities

1. Build a searchable or filterable evidence library.
2. Add internal order and production visibility.
3. Automate a second bottleneck only if the first is stable.
4. Track evidence reuse and quality-control failures.

### Deliverables

- Reusable evidence-library workflow.
- Internal production dashboard or tracker.
- Second automation only when justified.
- Monthly operational scorecard.

### Acceptance Criteria

- Eligible reports reuse evidence without weakening relevance or confidence.
- Current order status and bottlenecks are visible in one place.
- Quality-control failures remain stable or decline.

## Month 4: Stabilize and Decide Productization

**Objective:** Determine whether customer-facing self-service solves a proven problem.

### Priorities

1. Stabilize internal tooling and documentation.
2. Measure production time, margin, quality, and decision impact.
3. Interview customers about intake, payment, status, and report-access friction.
4. Define the smallest justified self-service scope.

### Deliverables

- Stable internal workflow and recovery procedure.
- Phase performance report.
- Customer-facing problem evidence.
- Phase 4 scope recommendation.
- Phase decision record.

### Acceptance Criteria

- Internal automation has demonstrated sustained value.
- A specific customer-facing friction justifies Phase 4 investment.
- Phase 4 scope excludes unvalidated features.

## Critical Path

```text
Measured bottleneck
→ Structured data and workflow
→ One internal automation
→ Verified time saving and quality
→ Stable evidence reuse
→ Proven customer-facing problem
→ Phase 4 decision
```

## Exit Scorecard

| Evidence | Required threshold |
|---|---:|
| Median report production time | Below 90 minutes, trending toward 60 |
| On-time delivery | At least 90% |
| Satisfaction above 8/10 | At least 80% |
| Decision-impact rate | At least 60% |
| Evidence reuse | Increasing on eligible reports |
| Contribution margin | Positive or clearly improving |
| Quality-control failure rate | Stable or decreasing |

## Risks and Mitigations

| Risk | Mitigation |
|---|---|
| Tool building replaces customer learning | Reserve at least three hours weekly for customer delivery |
| Automation targets an infrequent task | Require time and recurrence evidence before building |
| Structured data loses important nuance | Preserve analyst notes and human-review fields |
| Internal tools become difficult to maintain | Prefer simple, replaceable tools and documented fallbacks |
| Quality declines invisibly | Compare decision impact, satisfaction, and QC failures to Phase 2 baseline |

## Phase Review Checklist

- [ ] Each automation maps to a measured bottleneck.
- [ ] Before-and-after time and quality evidence exists.
- [ ] Human review and fallback procedures are documented.
- [ ] Customer-facing friction has been validated.
- [ ] Smallest justified Phase 4 scope is defined.
- [ ] Phase decision is recorded.
