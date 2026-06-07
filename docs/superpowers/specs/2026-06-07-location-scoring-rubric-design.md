# Rumper Location Scoring Rubric Design

**Status:** Approved for specification  
**Date:** 2026-06-07  
**Primary standard:** `STD-SCR-001`  
**Applies to:** Mini Check, Full Location Risk Report, and Compare Report

## 1. Objective

Create a detailed and repeatable scoring rubric for the five Rumper Location
Score categories. The rubric must reduce differences between analysts without
presenting uncertain desk-research results as precise facts.

The resulting scoring system must:

- produce an objective location score that does not change based on the
  customer's preferences;
- keep customer suitability and the final recommendation separate from the
  objective score;
- support detailed research for Full and Compare Reports;
- support a smaller priority-parameter set for Mini Checks;
- expose missing data, weak evidence, and critical red flags;
- remain explainable to analysts, reviewers, and customers.

## 2. Approved Design Decisions

| Decision area | Approved decision |
|---|---|
| Base scoring scale | Each sub-parameter is scored from `1` to `5` |
| Published score | Category and total scores are converted to `0-100` |
| Customer preferences | Do not affect the objective score |
| Missing evidence | Marked `Not Scored`; no neutral or conservative default |
| Rubric depth | Detailed, approximately 8-12 sub-parameters per category |
| Report tiers | Mini uses priority parameters; Full and Compare use the complete rubric |
| Sub-parameter weights | Weighted according to impact |
| Critical risks | Use critical override rules in addition to weighted scoring |
| Recommended model | Weighted anchors plus critical overrides |

## 3. Scoring Architecture

### 3.1 Analytical Layers

The report must keep these layers separate:

1. **Evidence:** source-backed observations and known limitations.
2. **Sub-parameter assessment:** an anchor score of `1-5` or `Not Scored`.
3. **Category score:** weighted result converted to `0-100`.
4. **Rumper Location Score:** weighted result from the five category scores.
5. **Suitability assessment:** fit against the customer's stated needs.
6. **Recommendation:** decision guidance based on score, confidence, evidence
   gaps, critical red flags, and customer context.

A suitability concern may change the recommendation without changing the
objective category score or RLS.

### 3.2 Anchor Conversion

| Anchor | Converted score | General interpretation |
|---:|---:|---|
| 1 | 20 | Critical or materially adverse condition |
| 2 | 40 | High-risk or substantially limiting condition |
| 3 | 60 | Mixed condition or material issue requiring validation |
| 4 | 80 | Generally supporting condition with manageable limitations |
| 5 | 100 | Strong supporting condition with no material issue found |

The rubric must define category-specific anchors. Analysts may not infer a
score only from the general interpretation above.

### 3.3 Category Score Formula

```text
Category Score =
  sum(anchor score x included sub-parameter weight)
  / sum(included sub-parameter weight)
  x 20
```

Only scored sub-parameters are included in the numerator and denominator.
Final category scores are rounded to a maximum of two decimal places.

### 3.4 Overall RLS Formula

The existing `STD-SCR-001` category weights remain unchanged:

```text
RLS = (Flood Resilience x 0.30)
    + (Commute Efficiency x 0.25)
    + (Physical Access and Roads x 0.15)
    + (Essential Amenities x 0.15)
    + (Environmental Quality and Red Flags x 0.15)
```

All five category scores must be publishable before an overall RLS can be
published.

## 4. Rubric Composition

Each of the five category rubrics must contain approximately 8-12
sub-parameters. Every sub-parameter definition must include:

- unique ID and name;
- assessment purpose;
- impact-based weight;
- whether it is required for Mini Check;
- accepted evidence and minimum evidence requirement;
- anchors `1-5` with observable conditions;
- `Not Scored` conditions;
- critical red-flag conditions;
- analyst notes and common interpretation errors;
- recommended field-validation action when relevant.

Weights inside each category must total `100%`. Full and Compare Reports use
all applicable sub-parameters. Mini Checks use the designated priority
sub-parameters and critical-red-flag screening.

## 5. Evidence and Coverage Rules

### 5.1 Evidence Gap

A sub-parameter must be marked `Not Scored` when the available evidence cannot
support one anchor with reasonable confidence. Analysts must not use `3`,
another neutral value, or a conservative value as a substitute for missing
evidence.

Every `Not Scored` record must state:

- what evidence is missing;
- why available evidence is insufficient;
- whether the gap could materially change the score;
- the recommended validation action.

### 5.2 Category Coverage

Coverage is measured using impact weights, not the count of sub-parameters.

```text
Category Coverage =
  sum(weights of scored sub-parameters)
  / sum(weights of all applicable sub-parameters)
  x 100
```

| Coverage | Publication rule |
|---:|---|
| `80-100%` | Publish category score normally, subject to confidence and override rules |
| `60-79.99%` | Publish with a visible limited-coverage warning |
| Below `60%` | Do not publish a numeric category score |

Critical-red-flag screening is mandatory even when coverage is below the
publication threshold.

### 5.3 Evidence Quality and Confidence

Each scored sub-parameter must have a confidence label consistent with
`STD-SCR-001`. Category confidence must consider:

- weighted evidence coverage;
- evidence source quality;
- geographic relevance to the candidate property;
- evidence recency;
- conflicts between sources;
- dependence on proxy evidence.

High coverage does not automatically mean strong confidence.

## 6. Critical Override Rules

Weighted averages must not hide critical conditions.

When a category-specific critical red flag is confirmed or strongly indicated:

1. The finding, evidence, confidence, and expected impact must be recorded.
2. The affected category score is capped at `40/100`.
3. The overall recommendation must be at least
   `Verify further before deciding`.
4. The RLS may still be published if all categories meet coverage rules, but
   the critical warning must be visible beside the score.
5. A specific field-validation or mitigation action is mandatory.

If evidence of a possible critical red flag is conflicting or weak, do not
apply the confirmed-red-flag cap automatically. Mark the conflict, lower
confidence, and require validation. Operations Lead approval is required to
remove an override after it has been applied.

## 7. Report-Tier Rules

### 7.1 Mini Check

Mini Check uses:

- priority sub-parameters designated in each category rubric;
- mandatory critical-red-flag screening;
- the same anchors, evidence rules, and coverage calculation as the complete
  rubric.

Mini Check may publish a category score only when its priority-parameter
coverage reaches the required threshold. The report must identify that the
result uses the Mini parameter set and is not equivalent to a Full Report.

### 7.2 Full Location Risk Report

Full Report uses all applicable sub-parameters in all five categories. All
evidence gaps, coverage limitations, category overrides, and suitability
observations must be disclosed.

### 7.3 Compare Report

Compare Report uses the complete rubric. Every candidate must use:

- the same applicable sub-parameters;
- the same anchor definitions;
- the same research cutoff date or a disclosed exception;
- comparable evidence depth.

If one candidate has materially lower coverage, the comparison must identify
the imbalance and must not present missing evidence as a neutral result.

## 8. Category Rubric Documents

The implementation will produce one detailed rubric for each existing
`STD-SCR-001` category:

1. Flood resilience.
2. Commute efficiency.
3. Physical access and roads.
4. Essential amenities.
5. Environmental quality and red flags.

Category rubrics may use different sub-parameter structures, anchor language,
and critical rules. They must share the scoring architecture, evidence rules,
coverage rules, and worksheet format defined in this design.

## 9. Analyst Worksheet

The standard worksheet must contain at least:

| Field | Purpose |
|---|---|
| Report ID and location ID | Trace assessment to the correct case |
| Report tier | Select Mini, Full, or Compare |
| Category and sub-parameter ID | Apply the correct rubric |
| Applicable / not applicable | Exclude genuinely irrelevant factors with rationale |
| Priority for Mini | Identify the Mini parameter set |
| Weight | Calculate category coverage and score |
| Evidence references | Link observations to sources |
| Anchor score or `Not Scored` | Record the assessment |
| Anchor rationale | Explain why the selected anchor fits |
| Confidence | Describe evidence strength |
| Critical flag | Trigger override review |
| Validation action | State what must be checked next |
| Reviewer decision | Approve or return the assessment |

`Not Applicable` and `Not Scored` are different:

- `Not Applicable` means the factor genuinely does not apply to the location.
- `Not Scored` means the factor applies, but evidence is insufficient.

`Not Applicable` requires reviewer approval and is excluded from the applicable
weight denominator. `Not Scored` remains in the applicable weight denominator
for coverage calculation.

## 10. Consistency and Calibration Guidance

### 10.1 Analyst Rules

- Select the anchor whose observable conditions are best supported by
  evidence.
- Do not award intermediate decimal anchors.
- Do not improve a score because a risk may be mitigated later; document the
  mitigation separately.
- Do not reduce an objective score because the location is unsuitable for one
  customer; record suitability separately.
- When evidence supports conditions across two anchors, use the more
  conservative anchor and explain the ambiguity.
- Escalate conflicting material evidence instead of silently selecting one
  source.

### 10.2 Calibration Process

Before operational use:

1. At least two analysts independently score the same three anonymous
   locations.
2. Reviewers compare sub-parameter anchors, category scores, evidence gaps,
   confidence, and overrides.
3. Every anchor difference greater than one level must be discussed.
4. Ambiguous anchors must be revised before the rubric is approved.
5. Record calibration decisions as examples in the relevant category rubric.

During validation, repeat calibration monthly and whenever:

- a recurring disagreement appears;
- a new material source type is introduced;
- a critical-red-flag definition changes;
- report feedback reveals misleading scoring.

## 11. Quality-Control Requirements

A score worksheet passes review only when:

- the correct report-tier parameter set was used;
- every applicable sub-parameter is scored or marked `Not Scored`;
- evidence and rationale support each selected anchor;
- category weights and coverage are calculated correctly;
- publication thresholds are respected;
- confidence reflects evidence quality, not the score result;
- critical override rules are applied when required;
- suitability and recommendation remain separate from objective scoring;
- Compare Report candidates use comparable methods;
- required validation actions are specific and actionable.

## 12. Planned Deliverables

The implementation phase will create:

1. A master scoring-rubric standard extending `STD-SCR-001`.
2. Five detailed category rubric documents.
3. A reusable analyst worksheet template.
4. Analyst calibration and consistency guidance.
5. Updates to research and quality-control documentation where necessary.

## 13. Acceptance Criteria

The rubric system is ready for pilot use when:

1. Each category contains 8-12 weighted sub-parameters totaling `100%`.
2. Every sub-parameter defines anchors `1-5`, evidence requirements,
   `Not Scored` conditions, and critical rules.
3. Mini priority parameters are explicitly identified.
4. Full and Compare Reports use the complete applicable rubric.
5. Missing evidence never receives a default score.
6. Coverage and publication rules can be calculated from the worksheet.
7. Confirmed critical red flags trigger category caps and recommendation
   constraints.
8. Objective scoring remains separate from customer suitability.
9. Two analysts can independently apply the rubric to calibration cases.
10. Quality reviewers can trace every published score to evidence and an
    approved anchor.

