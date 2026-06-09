# PRD: Rumper Interactive Dashboard After Location Submit

**Status:** Draft for product discovery and implementation planning  
**Proposed primary route:** `/dashboard/locations/[location_id]` after authenticated location submit  
**Primary language:** Bahasa Indonesia  
**Target stage:** Assisted self-service / future platform validation  
**Related docs:** `STD-SCR-001`, `PRD-intake-form-sebelum-dp.md`, `PRD-report-template-platform.md`, `2026-06-07-mini-check-dashboard-ui-requirements.md`

## 1. Summary

Rumper needs an interactive dashboard that appears after a registered user submits a shortlisted property location. The dashboard gives the user one free preliminary scan with a provisional location score, mapped risk signals, AI explanations, and next actions before booking fee or DP.

The dashboard is a self-service decision workspace. It is not a final human-reviewed audit, legal due diligence, building inspection, or guarantee that a property is safe.

## 2. Contacts

| Role | Owner | Responsibility |
|---|---|---|
| Product owner | Founder / Product Lead | Scope, outcome, priority, and monetization rules |
| Design owner | Product Designer | Dashboard UX, responsive layout, visual trust, and accessibility |
| Engineering owner | Engineering Lead | App architecture, maps, AI integration, data model, and reliability |
| Data owner | Product / Operations | Source registry, map layers, confidence labels, and evidence coverage |
| AI owner | Product / Engineering | AI behavior, prompt boundaries, citations, and safety rules |
| Operations owner | Operations Lead | Human-review boundary, report escalation, and survey-checklist quality |
| Privacy owner | Ditunjuk sebelum launch | Consent, retention, access control, and sensitive-location handling |

## 3. Background

### Context

Rumper currently follows an operations-first path: validate paid buyer-side location-risk audits, structure evidence, then automate only proven value. Existing product documents define the buyer problem, scoring model, intake flow, report workflow, and read-only sample dashboard.

The next product idea is a post-registration experience where the user submits one location and immediately receives a useful preliminary view. The experience should combine:

- interactive map visualization;
- provisional Rumper scoring;
- AI explanations and chat;
- practical next actions;
- paid subscription upgrades for deeper research.

### Why This Is Needed

After submitting a location, users need fast evidence that Rumper understands their decision. A static confirmation page does not create enough value or trust. An interactive dashboard can show immediate progress, explain key location risks, and guide the user toward deeper paid usage.

### Strategic Fit

The dashboard supports Rumper's vision by turning fragmented location signals into understandable buyer-side decision support. It also extends the current roadmap toward assisted self-service, but it must not weaken the strategy principle:

> Build trust first. Automate proven value later.

### Product Boundary

This dashboard provides preliminary decision support. It does not provide:

- final human-reviewed recommendations;
- guaranteed safety, livability, flood-free, or investment outcomes;
- developer, agent, or marketplace recommendations;
- legal, structural, or building-condition due diligence;
- hidden chain-of-thought or unsupported AI claims.

## 4. Objective

### Objective Statement

Help first-time buyers quickly understand the main risks, evidence strength, and next validation actions for a submitted property location.

### Customer Benefit

Users can see a clear initial score, map-based evidence, AI explanations, and a second-survey checklist without waiting for manual follow-up.

### Company Benefit

Rumper can test whether an interactive product increases activation, trust, repeat property scans, and paid subscription conversion.

### Key Results

| Key result | Initial target |
|---|---:|
| Free scan completion after location submit | >= 80% |
| Users who view at least one evidence card | >= 60% |
| Users who open checklist after scan | >= 40% |
| Users who ask at least one AI question | >= 30% |
| Free-to-subscription conversion | >= 10% of activated users |
| Users who save or compare at least two properties after subscribing | >= 50% of subscribers |
| Preliminary result with visible confidence and limitation labels | 100% |
| AI responses with cited dashboard evidence when making factual claims | 100% |
| Privacy or consent violation | 0 |

### Activation Definition

A user is activated when they submit one valid property location and view the preliminary dashboard result containing score, map signals, top risks, and next actions.

## 5. Market Segments

### Primary Segment

First-time homebuyers comparing 2-5 shortlisted homes within the next 1-3 months before booking fee or DP.

They need a repeatable way to understand and compare location risks while discussing the decision with a partner or family.

### Secondary Segments

- Buyer monitoring one chosen home before DP.
- Buyer still exploring nearby alternatives after a first scan.
- Family member or spouse reviewing a shared decision summary.

### Excluded Initial Segments

- Property investors researching many areas.
- Property agents researching homes for clients.
- Developers or seller-side users.
- B2B partner workflows.

## 6. Value Proposition

### Core Value Proposition

Submit a shortlisted property and get an instant preliminary risk workspace that explains what to check before you commit financially.

### Customer Jobs

- Understand whether a submitted location looks broadly safe, mixed, or risky.
- Verify claims such as `bebas banjir`, `strategis`, or `akses mudah`.
- See map-based signals instead of reading scattered sources.
- Ask AI to explain findings in simple language.
- Know what to inspect or ask during the next physical survey.
- Compare several shortlisted homes during a 1-3 month buying window.

### Pains Reduced

- Waiting for manual follow-up before seeing any value.
- Difficulty interpreting raw map and geospatial data.
- Unclear confidence in online claims.
- Forgetting what to validate during site visits.
- Comparing properties using inconsistent criteria.

### Differentiation

| Alternative | What it provides | Rumper dashboard difference |
|---|---|---|
| Google Maps | Location, routes, and nearby places | Turns map signals into buyer-specific risk findings |
| Property portals | Listings and sales information | Checks risk after a property is shortlisted |
| Generic AI chat | Broad answers | Anchors answers to dashboard evidence and uncertainty |
| Manual research | Flexible but fragmented | Provides one score, map, findings, checklist, and saved workspace |
| Human audit | Higher trust, slower delivery | Dashboard gives immediate preliminary value and can lead to deeper products |

## 7. Feature Request Analysis

Feature ideas from the brainstorm and UI reference were grouped by opportunity, not by solution.

| Theme | User problem | Strategic alignment | Impact | Effort | Risk | Priority |
|---|---|---|---|---|---|---|
| Immediate preliminary scan | User needs value right after submitting a location | Very high | High | High | High | P0 |
| Evidence-led interactive map | User needs to understand where risks are located | Very high | High | High | Medium | P0 |
| AI explanation and chat | User needs help interpreting findings | High | High | Medium | High | P0 |
| Provisional score and next actions | User needs a simple decision summary | Very high | High | Medium | High | P0 |
| Second-survey checklist | User needs practical field validation steps | Very high | High | Low | Low | P0 |
| Subscription unlock | User needs ongoing comparison and deeper research | Medium | Medium | Medium | Medium | P1 |
| Monitoring alerts | User needs changes over time | Medium | Medium | High | High | P1 |
| Multi-property comparison | User needs to compare 2-5 homes | High | High | Medium | Medium | P1 |
| Human-reviewed audit upgrade | User needs stronger trust before commitment | High | Medium | Medium | Medium | P2 |

### Top 3 Prioritized Features

#### 1. Preliminary Risk Workspace

**Rationale:** This is the core activation moment. Without a useful first result, maps, AI, subscription, and alerts have weak value.

**Alternative solutions:** show only a status page; send a manual WhatsApp follow-up; show a static report preview.

**High-risk assumptions:**

- Available data can produce a useful preliminary result quickly.
- Users will trust a provisional score if uncertainty is shown clearly.
- The score will not be mistaken for a final recommendation.

**Minimal tests:**

- Prototype with synthetic data and ask target users to explain the result.
- Run concierge reports through the dashboard format manually.
- Measure whether users can identify the top risk and next action without explanation.

#### 2. Evidence-Led Map With Confidence Cards

**Rationale:** Rumper's advantage is evidence over claims. The map makes risks concrete, but every signal must show source, confidence, limitation, and validation action.

**Alternative solutions:** text-only findings; static map screenshot; generic layer toggles without evidence cards.

**High-risk assumptions:**

- Users can understand risk zones and markers without GIS knowledge.
- Map layers are reliable enough for preliminary use.
- The interface will stay readable on mobile.

**Minimal tests:**

- Clickable mockup with 3-5 fictional map signals.
- Mobile usability test at 375px width.
- Ask users which evidence they trust and what still feels unclear.

#### 3. AI Assistant Grounded In Dashboard Evidence

**Rationale:** AI can make complex findings easier to understand and can turn analysis into practical questions for surveys. It should be a guide, not an unconstrained property oracle.

**Alternative solutions:** static FAQ; scripted explanation cards; AI only after subscription.

**High-risk assumptions:**

- AI can avoid unsupported claims.
- Users will understand when AI is explaining evidence versus making a final judgment.
- Usage cost can fit the free trial and subscription model.

**Minimal tests:**

- Limit AI answers to evidence-card citations in the prototype.
- Test refusal and uncertainty responses.
- Track which questions users ask after seeing a preliminary result.

## 8. Solution

### 8.1 Primary User Flow

```text
User registers
→ Submits first shortlisted property
→ Adds primary workplace and basic priorities
→ System generates preliminary scan
→ Dashboard opens with analysis progress
→ User sees provisional score, top risks, map signals, and next actions
→ User asks limited AI questions
→ User opens second-survey checklist
→ User sees subscription prompt
→ Subscriber adds more properties, unlocks deeper map layers, chats more, and receives alerts
```

### 8.2 Information Architecture

| Area | Purpose |
|---|---|
| Submit Location | Capture property link, map pin, area name, primary workplace, and key priorities |
| Analysis Progress | Show what signals are being checked and prevent a blank wait state |
| Overview | Show provisional score, top risks, supporting factors, confidence, and next action |
| Interactive Map | Show property marker, risk signals, zones, layer controls, and evidence popovers |
| Risk Modules | Show five category scores and detailed evidence per category |
| Checklist | Convert findings into second-survey questions and observations |
| AI Assistant | Explain findings, answer grounded questions, and help prepare validation |
| Saved Properties | Let subscribed users manage multiple shortlisted homes |
| Upgrade | Explain subscription value and locked premium capabilities |

### 8.3 UX Requirements

#### Submit Location

- Accept property name or area, Google Maps URL, listing URL, or map pin.
- Ask for primary workplace or activity location.
- Ask 3-5 priority questions only when needed for personalization.
- Show clear loading feedback after submit.
- Prevent duplicate submission.

#### Analysis Progress

- Show user-friendly progress labels such as `Mengecek sinyal banjir`, `Menganalisis akses jalan`, and `Membandingkan commute`.
- Do not expose hidden AI reasoning or chain-of-thought.
- Use skeletons or progressive cards when analysis takes more than 1 second.

#### Overview

- Show `Skor Awal Lokasi` or `Provisional Rumper Score`.
- Show interpretation label using existing RLS bands.
- Show confidence summary and limitation notice.
- Show top 2-3 risks and top 1-2 supporting factors.
- Show one clear next action.
- Label the output as preliminary.

#### Interactive Map

- Show target property marker.
- Support layer toggles for property, flood, commute, road access, facilities, and environment.
- Each marker, zone, or route must open an evidence card.
- Evidence cards must include finding, source summary, confidence, limitation, and validation action.
- Map must have a text summary for accessibility and mobile fallback.

#### Risk Modules

- Use the five Rumper score categories:
  - flood resilience;
  - commute efficiency;
  - physical access and roads;
  - essential facilities;
  - environmental quality and red flags.
- Each module shows score, evidence coverage, confidence, findings, missing information, and validation actions.
- Color must be paired with labels and icons.

#### Checklist

- Generate a second-survey checklist from detected risks and user priorities.
- Group actions into `Ask residents / security`, `Observe directly`, and `Verify with developer / agent`.
- Allow users to copy, share, or save checklist items in a later release.
- Free version may show checklist read-only.

#### AI Assistant

- Free user gets limited AI usage for the first property.
- Subscriber gets expanded AI chat across saved properties.
- AI can explain findings, answer dashboard-grounded questions, suggest survey questions, and summarize trade-offs.
- AI must cite dashboard evidence when making factual claims.
- AI must state uncertainty when evidence is incomplete or conflicting.
- AI must not present a final human-reviewed recommendation.

### 8.4 Monetization Requirements

#### Free Registered User

- Can scan 1 property.
- Receives provisional score and next actions.
- Gets limited AI assistant usage for that property.
- Sees locked previews of premium map layers.
- Can save the scan and return later.
- Cannot add more properties or monitor risk changes.

#### Monthly Subscriber

- Can scan multiple properties within usage limits.
- Can save and compare 2-5 active shortlisted homes.
- Unlocks deeper map layers.
- Gets expanded AI chat across saved properties.
- Receives monitoring alerts for important risk-signal changes.
- Can generate a richer checklist.
- Can export or share a decision summary.

### 8.5 Scoring Requirements

Use `STD-SCR-001` as the scoring foundation.

| Category | Weight |
|---|---:|
| Flood resilience | 30% |
| Commute efficiency | 25% |
| Physical access and roads | 15% |
| Essential facilities | 15% |
| Environmental quality and red flags | 15% |

Each score must show:

- category score;
- evidence coverage;
- confidence label;
- material findings;
- evidence gaps;
- validation actions.

The dashboard must separate:

- score;
- confidence;
- AI interpretation;
- next action;
- final human-reviewed recommendation.

### 8.6 Safety, Trust, And Language Requirements

Use calm, buyer-first language. Do not use fear-based or absolute claims.

Required disclaimer:

> Hasil awal berbasis data yang tersedia dan interpretasi AI. Bukan rekomendasi final atau pengganti survei lokasi.

The interface must avoid:

- `aman`, `bebas risiko`, `pasti banjir`, or similar absolute claims;
- hidden confidence;
- unsupported AI answers;
- final recommendation wording unless human-reviewed;
- showing score without evidence context.

### 8.7 Analytics Requirements

Track events without storing sensitive location details in analytics payloads.

Core events:

- registration completed;
- location submitted;
- preliminary scan started;
- preliminary scan completed;
- evidence card opened;
- risk module opened;
- checklist opened;
- AI question asked;
- upgrade prompt viewed;
- subscription started;
- additional property added;
- alert opened.

### 8.8 Data And Privacy Requirements

- Do not commit customer data, addresses, reports, or secrets to Git.
- Store customer location and priority data only in approved production storage.
- Record consent for AI-assisted analysis and location data use.
- Apply role-based access for customer data.
- Provide deletion or anonymization process before launch.
- Separate customer PII from analytics events where possible.

### 8.9 Non-Functional Requirements

- Initial dashboard shell should load quickly even if analysis continues.
- Important loading states must reserve space to avoid layout shift.
- Map interactions must work with keyboard and have text alternatives.
- Touch targets must be at least `44px`.
- Interface must meet WCAG AA contrast.
- The mobile layout must avoid horizontal scroll.
- AI and map failures must show recoverable error states.

## 9. Release

### Release 0: Clickable Prototype

- Submit-location screen.
- Analysis progress state.
- Dashboard overview.
- Map with fictional risk signals.
- Risk Modules and Checklist tabs.
- Static AI assistant examples.
- Subscription prompt.

Purpose: validate comprehension, trust, and upgrade interest before engineering.

### Release 1: Free Preliminary Scan MVP

- User registration dependency resolved.
- One-property free scan.
- Provisional score.
- Top risks and supporting factors.
- Interactive map with limited layers.
- Evidence cards with confidence and limitations.
- Limited AI assistant grounded in dashboard evidence.
- Second-survey checklist.
- Basic analytics.

### Release 2: Subscription Workspace

- Multiple saved properties.
- Usage limits.
- Deeper map layers.
- Expanded AI chat.
- Comparison summary for 2-5 properties.
- Monitoring alerts.
- Export or share decision summary.

### Release 3: Human-Reviewed Upgrade

- Request human-reviewed audit.
- Admin or analyst review workflow.
- Final recommendation boundary.
- Report export and archive integration.

## 10. Acceptance Criteria

The PRD is satisfied when the designed product can:

1. Accept one valid submitted property location after registration.
2. Show a preliminary dashboard rather than a static confirmation page.
3. Display a provisional score and next action for the free first property.
4. Show risk signals on an interactive map with evidence cards.
5. Explain score, confidence, limitation, and validation actions for every material finding.
6. Provide AI explanations and chat within clear evidence-grounded boundaries.
7. Generate a second-survey checklist from detected risks.
8. Clearly distinguish preliminary AI-assisted output from final human-reviewed recommendations.
9. Offer a monthly subscription path for multiple properties, deeper layers, expanded AI, and alerts.
10. Protect customer location data, consent, and privacy.
