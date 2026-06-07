# Phase 4 Plan: Assisted Self-Service

**Duration:** 20 weeks
**Capacity:** 200 gross hours; 160 planned hours; 40-hour buffer
**Primary owner:** Founder
**Phase goal:** Prove that a small customer-facing product improves conversion and coordination while final reports remain human-reviewed.

## Phase Constraints

- Maintain a maximum of 8 planned hours per week.
- Build only one end-to-end customer journey.
- Use existing website and workflow patterns where possible.
- Preserve manual fallback for intake, payment, and delivery.
- Do not automate final recommendations.

## Weekly Capacity Model

| Workstream | Hours/week |
|---|---:|
| Customer delivery and support | 2.5 |
| Product discovery, design, and implementation | 4 |
| Product measurement and user feedback | 1 |
| Operations and quality review | 0.5 |
| Unplanned buffer | 2 |

## Month 1: Define and Validate the Smallest Journey

**Objective:** Confirm the specific customer friction the product must solve.

### Priorities

1. Review evidence from Phase 3 customer interviews and operations.
2. Select one primary journey: submit location, explain priorities, choose package, pay, and receive confirmation.
3. Prototype the journey before building.
4. Test comprehension and trust with qualified buyers.

### Deliverables

- Approved customer journey and scope.
- Product requirements and acceptance criteria.
- Prototype or clickable flow.
- Baseline conversion and coordination-time metrics.

### Acceptance Criteria

- The journey solves a measured customer or operational problem.
- Qualified users can complete the prototype without founder explanation.
- Trust, evidence limitations, and human review are clear.

## Month 2: Build Intake and Order Foundation

**Objective:** Allow customers to submit complete, structured orders.

### Priorities

1. Implement self-service location and buyer-priority intake.
2. Add qualification and package recommendation.
3. Add secure order storage and admin visibility.
4. Preserve manual intake fallback.

### Deliverables

- Self-service intake flow.
- Buyer-priority profile.
- Qualification and package recommendation rules.
- Admin order view.
- Analytics for funnel completion.

### Acceptance Criteria

- Customers can submit a usable order without manual clarification in most cases.
- Incomplete or out-of-scope submissions are handled clearly.
- Sensitive customer data is not stored in Git.

## Month 3: Add Payment and Status Communication

**Objective:** Reduce manual coordination between qualified order and report production.

### Priorities

1. Add online payment or a reliable semi-automated payment flow.
2. Confirm order status and expected delivery time.
3. Send necessary progress and clarification messages.
4. Measure abandonment and support requests.

### Deliverables

- Payment workflow.
- Order confirmation and status communication.
- Admin exception handling.
- Funnel and support metrics.

### Acceptance Criteria

- Payment and order state remain consistent.
- Customers understand what happens next.
- Manual coordination time declines.

## Month 4: Add Initial Preview and Report Access

**Objective:** Improve perceived speed while preserving responsible analysis.

### Priorities

1. Provide a limited initial risk preview with explicit limitations.
2. Add human-reviewed report delivery and archive.
3. Add decision-impact follow-up.
4. Test whether the preview improves conversion or trust.

### Deliverables

- Initial risk preview.
- Human review and approval workflow.
- Customer report archive.
- Follow-up and feedback flow.

### Acceptance Criteria

- Preview findings cannot be mistaken for final recommendations.
- Final reports cannot be delivered without human approval.
- Customers can access and understand completed reports.

## Month 5: Stabilize and Evaluate

**Objective:** Decide whether assisted self-service creates enough value to scale.

### Priorities

1. Fix high-impact funnel, support, and quality problems.
2. Compare conversion, coordination time, production time, satisfaction, and decision impact with Phase 3.
3. Document operations and support requirements.
4. Decide whether to scale, revise, or retain the assisted model.

### Deliverables

- Stable v0 customer journey.
- Product and operational scorecard.
- Support and recovery procedures.
- Phase decision record.

## Critical Path

```text
Validated customer friction
→ Tested minimal journey
→ Structured intake and order
→ Payment and status
→ Limited preview and reviewed report
→ Measured conversion and coordination improvement
→ Scale decision
```

## Exit Scorecard

| Evidence | Required threshold |
|---|---:|
| Qualified lead-to-paid conversion | 10-20% |
| Paid reports per month | 8-15 within founder capacity |
| Median production time | Below 60 minutes |
| On-time delivery | At least 95% |
| Satisfaction above 8/10 | At least 80% |
| Decision-impact rate | At least 60% |
| Manual coordination time | Meaningfully reduced |
| Contribution margin | Positive and improving |

## Risks and Mitigations

| Risk | Mitigation |
|---|---|
| Product scope exceeds side-job capacity | Build one journey and defer all adjacent features |
| Customer delivery suffers during development | Cap orders and reserve fixed weekly delivery capacity |
| Preview creates false confidence | Use explicit limitations and require reviewed final output |
| Technical maintenance consumes capacity | Prefer simple architecture and managed services |
| Product does not improve conversion | Compare against the Phase 3 baseline and retain manual fallback |

## Phase Review Checklist

- [ ] The product solves a measured customer or coordination problem.
- [ ] Self-service improves conversion, completion, or coordination time.
- [ ] Human review and evidence quality remain intact.
- [ ] Support and maintenance fit the weekly capacity limit.
- [ ] Phase decision is recorded.
