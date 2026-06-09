# Post-Registration AI Map Dashboard Design

**Status:** Approved design for implementation planning  
**Date:** 2026-06-07  
**Primary user:** First-time homebuyer comparing 2-5 shortlisted homes  
**Primary language:** Bahasa Indonesia  
**Product stage:** Future customer-facing assisted self-service product  

## 1. Objective

Design the first post-registration product experience for Rumper: an interactive
decision workspace where a registered buyer submits one shortlisted property and
receives a free preliminary scan with map visualization, AI explanation,
provisional score, and next actions.

The product should create immediate value after registration while preserving
Rumper's buyer-first, evidence-based positioning. It must not present AI output
as a final human-reviewed recommendation.

## 2. Existing Context

This design builds on the existing Rumper strategy and documentation:

- Rumper helps first-time homebuyers in Jabodetabek evaluate location risks
  before booking fee or DP.
- Current roadmap starts with validation and concierge delivery, then moves to
  internal semi-automation and assisted self-service.
- The approved scoring model uses five weighted categories: flood resilience,
  commute efficiency, physical access and roads, essential facilities, and
  environmental quality or red flags.
- Existing report and dashboard requirements emphasize confidence labels,
  evidence limitations, and clear separation between score and recommendation.

This design intentionally extends the roadmap toward a subscription-based
self-service dashboard. It should be implemented only after enough validation
evidence supports customer-facing automation.

## 3. Product Direction

Use the **Decision Workspace** approach.

The first release should not be a generic GIS explorer or open-ended AI chat
product. The map provides evidence, AI makes the evidence understandable, and
the dashboard turns findings into an actionable buying decision.

Primary journey:

```text
Register
→ Add first shortlisted property
→ Answer personalization questions
→ Receive free preliminary scan
→ Review provisional score, risks, and next actions
→ Ask limited AI questions
→ Subscribe
→ Add and compare more properties
→ Unlock deeper map layers and AI chat
→ Receive monitoring alerts
```

## 4. Target Subscriber

The primary subscriber is a first-time buyer actively comparing 2-5 homes within
the next 1-3 months.

This user needs:

- a clear first scan to build trust;
- a way to compare multiple shortlisted homes;
- AI help to understand trade-offs;
- map layers that explain location risks visually;
- monitoring and alerts while the decision remains active.

The product is not optimized first for investors, agents, or broad area
research.

## 5. Brainstormed Feature Ideas

### Product Manager Perspective

1. One free preliminary property scan after registration.
2. Monthly subscription for multiple shortlisted properties.
3. Upgrade trigger after free scan showing premium comparison and monitoring
   value.
4. Saved property workspace for 2-5 active candidates.
5. Decision-impact follow-up to measure whether the scan changed or validated
   the buyer's next action.

### Product Designer Perspective

1. Decision header with provisional score, confidence, and next action.
2. Interactive risk map with evidence cards tied to visible location signals.
3. Priority findings that separate supporting factors, concerns, and missing
   information.
4. Personalized survey checklist for physical validation.
5. Locked premium layer previews that show value without hiding safety-critical
   limitations.

### Software Engineer Perspective

1. Free-scan entitlement service linked to user and property records.
2. Risk signal engine for flood, commute, access, facilities, and environmental
   layers.
3. Provisional scoring engine using the existing Rumper category weights.
4. AI explanation layer grounded in stored evidence and scan outputs.
5. Monitoring and alert pipeline for saved properties and changing risk signals.

## 6. Prioritized Ideas

### 1. Free Preliminary Scan

The first registered property receives a free scan with provisional score and
next actions.

Reasoning: This is the fastest path to showing value and validating whether
buyers trust Rumper enough to use the product after registration.

Assumptions to test:

- Buyers are willing to submit a real property after registration.
- A preliminary score creates enough value without replacing paid product value.
- The warning that the result is not final is understood.

### 2. Decision Dashboard With Interactive Map

The dashboard combines score, map signals, priority findings, and validation
actions.

Reasoning: A buyer needs decision clarity, not a pile of spatial data. The map
should support the decision rather than become the product's center of gravity.

Assumptions to test:

- Users understand evidence cards tied to map signals.
- Users inspect at least one material map signal after receiving a score.
- The layout works on mobile.

### 3. Evidence-Grounded AI Assistant

The AI explains findings, answers property questions, and suggests validation
actions using dashboard evidence.

Reasoning: AI is strongest as a translation and guidance layer. It should make
evidence easier to use, not invent unsupported conclusions.

Assumptions to test:

- Users ask useful follow-up questions after the scan.
- AI answers improve comprehension and trust.
- Users notice uncertainty and evidence limitations when shown clearly.

### 4. Monthly Subscription Workspace

Subscribers can scan multiple properties, unlock deeper map layers, use expanded
AI chat, compare saved homes, and receive monitoring alerts.

Reasoning: A monthly model fits buyers comparing several candidates over weeks.
It gives the product recurring value beyond one report.

Assumptions to test:

- Buyers have enough active comparison behavior to justify monthly payment.
- Monitoring and expanded AI are perceived as recurring value.
- Usage limits can control cost without harming trust.

### 5. Monitoring And Alerts

Saved properties can receive alerts when new evidence, layer updates, or
important signal changes are detected.

Reasoning: Monitoring creates a reason to return during the 1-3 month decision
window.

Assumptions to test:

- Meaningful alerts can be generated without false urgency.
- Users return after receiving an alert.
- Alerts support decisions without creating fear-based behavior.

## 7. Dashboard Structure

### Decision Header

Show:

- property name and location;
- provisional Rumper Score;
- next action, such as `Perlu validasi sebelum lanjut`;
- confidence level;
- preliminary-result warning.

### Interactive Risk Map

Show markers and overlays for:

- flood and ponding signals;
- commute and transport access;
- physical road access;
- essential facilities;
- environmental quality and red flags.

Selecting a signal opens:

- evidence summary;
- confidence label;
- limitation;
- practical implication;
- suggested validation action.

Premium layers are visible as locked previews for free users, but safety-critical
limitations must never be hidden behind a paywall.

### Priority Findings

Show:

- top supporting factors;
- top concerns;
- missing or weak evidence;
- AI-generated plain-language explanation;
- distinction between evidence, AI interpretation, and unknown information.

### Next Actions

Show:

- personalized survey checklist;
- questions to ask residents, security, developer, or local businesses;
- risks that should be resolved before booking fee or DP;
- suggested next decision gate.

### AI Assistant

Free users receive limited questions for the first scanned property. Subscribers
receive expanded AI chat across saved properties.

The assistant can:

- explain map signals and scores;
- compare trade-offs between saved properties;
- prepare survey questions;
- summarize missing evidence;
- explain why a score changed after new input or evidence.

### Saved Properties

Free users can save one scanned property. Subscribers can save and compare 2-5
active shortlisted homes, subject to usage limits.

## 8. Scoring And AI Behavior

The free scan produces a **Provisional Rumper Score** using the existing five
weighted categories.

| Category | Weight |
|---|---:|
| Flood resilience | 30% |
| Commute efficiency | 25% |
| Physical access and roads | 15% |
| Essential facilities | 15% |
| Environmental quality and red flags | 15% |

Each category displays:

- score;
- evidence coverage;
- confidence level;
- important findings;
- missing information;
- recommended validation actions.

The AI may:

- explain scores and mapped signals in simple language;
- answer questions using evidence available inside the dashboard;
- suggest survey questions and next actions;
- explain why a score changed;
- summarize trade-offs between saved properties.

The AI must not:

- present preliminary findings as verified facts;
- hide missing or conflicting evidence;
- guarantee that a property is safe or suitable;
- issue a human-reviewed or final Rumper recommendation;
- answer unsupported questions without clearly stating uncertainty.

Required label:

> Hasil awal berbasis data yang tersedia dan interpretasi AI. Bukan rekomendasi
> final atau pengganti survei lokasi.

## 9. Free And Subscription Model

### Free Registered User

The free registered user can:

- scan one property;
- receive provisional score and next actions;
- use limited AI assistant questions for that property;
- view locked previews of premium map layers;
- save the scan and return later.

The free user cannot:

- add more properties;
- compare properties;
- monitor risk changes;
- access deeper map layers;
- use expanded AI chat.

### Monthly Subscriber

The monthly subscriber can:

- scan multiple properties within usage limits;
- save and compare 2-5 active shortlisted homes;
- unlock deeper map layers;
- use expanded AI chat across saved properties;
- receive monitoring alerts when important risk signals change;
- generate a richer survey checklist;
- export or share a decision summary.

Suggested upgrade message:

> Bandingkan sampai 5 kandidat rumah, buka layer risiko lanjutan, dan tanya AI
> lebih dalam sebelum kamu booking fee atau DP.

## 10. Architecture And Data Flow

Use a simple, auditable flow:

```text
Registered user
→ Property submission
→ Geocoding and map context
→ Risk-signal retrieval
→ Provisional scoring
→ AI explanation generation
→ Dashboard result
→ Subscription unlock for more scans, layers, chat, monitoring
```

Core product areas:

| Area | Responsibility |
|---|---|
| User Account | Registration, free-scan entitlement, subscription status |
| Property Workspace | Saved properties, address or map link, priorities, scan status |
| Risk Signal Engine | Flood, commute, access, facility, and red-flag signals |
| Scoring Engine | Provisional category and overall score calculation |
| AI Explanation Layer | Evidence-grounded explanation, chat, and next actions |
| Map Layer Viewer | Visual signals, confidence, and premium layer access |
| Monitoring And Alerts | Important signal changes for saved properties |

## 11. Failure Handling

- If map data is incomplete, show partial results instead of blocking the user.
- If AI generation fails, still show raw scores and evidence cards.
- If scoring cannot be calculated, show missing inputs and ask the user to
  complete them.
- If premium access fails, preserve the scan and show a billing or support
  recovery path.
- If monitoring data is stale, show the last update timestamp and do not imply
  active surveillance.

## 12. Trust, Privacy, And Safety

- Every score must show confidence and missing data.
- Every AI answer should be grounded in saved property evidence.
- The product should log when AI output, scores, or risk signals were generated.
- The dashboard must never call the free scan a final audit.
- Customer addresses, contact information, and real property submissions must
  not be committed to the repository.
- Premium locks must not hide risk limitations or safety-critical warnings.
- Recommendation language must remain calm and non-alarmist.

## 13. Validation And Testing

Product success metrics:

- free scan completion rate;
- percentage of users who understand the provisional warning;
- percentage of users who review at least one map signal;
- AI question usage after the scan;
- upgrade conversion to monthly subscription;
- number of saved properties per subscriber;
- comparison or monitoring usage among subscribers;
- user-reported decision impact.

Quality checks:

- score calculation matches existing Rumper weights;
- every category has confidence, coverage, and missing-data notes;
- AI answers cite dashboard evidence or state uncertainty;
- premium locks do not hide safety-critical limitations;
- users can still understand the result when map or AI data is partial.

Technical testing:

- free-scan entitlement allows one property only;
- subscription access unlocks multiple scans, premium layers, deeper AI chat,
  and monitoring;
- scoring handles missing category data, low confidence, and conflicting
  signals;
- dashboard works if AI explanation fails;
- saved scans remain accessible if payment status is delayed;
- privacy rules prevent real customer or property data from entering Git.

## 14. Out Of Scope For First Release

- Final human-reviewed Rumper audit delivery.
- Property marketplace or listing search.
- Agent, investor, or partner dashboard.
- Native mobile application.
- Automated guarantee that a property is safe or suitable.
- Fully automated final recommendation.
- Public API for third-party property analysis.

## 15. Acceptance Criteria

The design is ready for implementation planning when:

1. The first journey starts after registration and scans one submitted property.
2. The free scan includes provisional score and next actions.
3. AI behavior is explicitly limited to evidence-grounded explanation and
   guidance.
4. The subscription model unlocks multiple properties, deeper layers, expanded
   AI chat, monitoring, and alerts.
5. The dashboard separates preliminary findings from final reviewed
   recommendations.
6. The design preserves Rumper's scoring weights, confidence labels, and
   uncertainty principles.
7. Validation metrics measure decision clarity and subscription value, not only
   feature usage.
