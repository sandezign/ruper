# Universal App Prompt: Rumper — Cek Risiko Lokasi Sebelum DP

**Status:** Tailored build prompt  
**Primary market:** First-time homebuyers in Jabodetabek  
**Primary language:** Bahasa Indonesia  
**Current product stage:** Pre-launch concierge validation  

## Format Analysis

The reference document is best understood as a **universal app build prompt**, not a conventional stakeholder PRD. It combines:

- product vision and target audience;
- learning or decision objective;
- page-level requirements;
- detailed feature behavior;
- design direction;
- generation or processing logic;
- MVP and future scope;
- recommended technology;
- suggested routes, components, and utility functions;
- example output and a clear build goal.

This format is useful for giving an AI builder, designer, or engineering team enough context to create a coherent prototype. However, its original structure assumes that the main product should be automated immediately.

For Rumper, the format needs three important adjustments:

1. **Keep the MVP operations-first.** Rumper must validate real location submissions, paid demand, report usefulness, and delivery economics before building automated analysis.
2. **Separate preliminary results from final recommendations.** Scores, AI explanations, and map signals must show confidence, limitations, and required field validation. Final reports remain human-reviewed.
3. **Protect buyer trust and privacy.** The product must avoid guarantees, unsupported claims, seller-aligned recommendations, and real customer data in prototypes.

The tailored prompt below treats the first build as a focused pre-DP acquisition and concierge-support experience. It keeps the interactive location-risk workspace as a clearly bounded future product.

---

## Universal App Prompt

I want to build Rumper, an independent buyer-side location-risk service that helps first-time homebuyers understand hidden location risks before paying a booking fee or down payment.

The experience should feel calm, trustworthy, evidence-based, mobile-first, and easy to understand. It should help buyers submit a real shortlisted home, explain their concerns, receive useful location-risk findings, and know what to validate next.

For the first MVP, prioritize a lightweight concierge flow supported by a polished website and structured intake. Do not build a fully automated final recommendation system yet. The system should be designed so it can later expand into an assisted self-service location-risk dashboard.

---

## Project Name

Rumper — Cek Risiko Lokasi Sebelum DP

**Brand promise:**

> Lebih yakin sebelum DP.

**Primary campaign message:**

> Rumahnya bagus. Risikonya sudah dicek?

---

## Target Audience

- First-time homebuyer couples in Jabodetabek.
- Buyers with one to three shortlisted homes.
- Buyers expecting to make a booking-fee or down-payment decision within approximately 30 days.
- Commuters who need to understand the real daily travel burden.
- Young families who care about flood resilience, access, facilities, and long-term livability.
- Partners or family members who need a shared, neutral decision document.

The initial product is not designed for property agents, developers, high-volume investors, or buyers without a real candidate location.

---

## Core Decision Objective

Help a buyer understand and validate the most important location risks for a shortlisted home so they can decide with their partner or family without avoidable regret.

Rumper should help buyers:

- check flood and ponding risk signals;
- understand realistic commute time, effort, and transport trade-offs;
- identify road-access limitations and bottlenecks;
- review access to essential facilities;
- identify environmental concerns and local red flags;
- distinguish evidence from marketing claims;
- understand confidence and missing information;
- prepare better questions for a physical site survey;
- decide whether to proceed, proceed with caution, verify further, compare another property, or pause.

Rumper is decision support. It is not a guarantee that a location is safe, flood-free, suitable, or profitable.

---

## Core Features and Pages

### Campaign Landing Page

Create a focused campaign page that explains why buyers should check location risks before paying a booking fee or DP.

Include:

- clear hero message and primary CTA;
- explanation of flood, commute, road access, facilities, and environmental risks;
- buyer-side independence and evidence principles;
- example Mini Check or report preview;
- explanation of confidence labels and limitations;
- simple three-step process;
- FAQ and disclaimers;
- CTA to submit a shortlisted property.

Primary CTA:

`Cek Risiko Lokasi Rumah Saya`

The page should not imply that Rumper is a property marketplace, agent, home inspector, or guarantee provider.

---

### Location Intake Flow

Create a short, mobile-first multi-step form where the buyer can share enough context for Rumper to review the location.

Include fields for:

- full name;
- WhatsApp number;
- property or housing-development name;
- Google Maps or listing link;
- purchase purpose;
- buying stage;
- expected booking-fee or DP timeline;
- primary workplace or activity location;
- usual transport mode;
- main location-risk concerns;
- optional concern details;
- WhatsApp contact consent;
- privacy acknowledgement;
- feedback consent.

The form should:

- show one section per screen;
- show progress;
- validate only the current step;
- preserve answers when moving backward;
- allow exploratory submissions without a specific location;
- clearly label submissions with a usable property reference as candidate-location requests;
- confirm that the request was saved;
- continue the conversation through WhatsApp.

---

### Mini Location Risk Check Result

Create a customer-facing result view or report preview that summarizes the most important initial findings for one submitted location.

The Mini Check should include:

- buyer and location context;
- top supporting signals;
- top concerns;
- evidence summary;
- confidence label for each material finding;
- missing information or evidence gaps;
- practical implication for the buyer;
- field-validation action;
- clear next recommendation;
- disclaimer.

Recommended result labels:

- `Data kuat`
- `Data sedang`
- `Perlu validasi`

Recommended next-action labels:

- `Lanjutkan dengan catatan`
- `Validasi lebih lanjut sebelum memutuskan`
- `Bandingkan kandidat lain`
- `Tunda sampai risiko utama terjawab`

Do not present a preliminary Mini Check as a final human-reviewed recommendation.

---

### Full Location Risk Report

For qualified paid customers, support a structured Full Location Risk Report prepared through the concierge workflow.

The report should cover:

- executive summary;
- buyer priorities and decision context;
- Rumper Location Score;
- category-level findings;
- evidence and confidence labels;
- material risks and red flags;
- recommendation;
- next actions;
- physical-survey checklist;
- source appendix and disclaimer.

The initial report may be produced manually using a controlled template. It does not need automated PDF generation in the first MVP.

---

### Compare Report

For buyers with two or more candidates, provide a consistent side-by-side comparison.

The comparison should:

- apply the same risk categories to every location;
- show score and confidence separately;
- show missing evidence instead of treating it as neutral;
- explain important trade-offs;
- identify which candidate needs more validation;
- avoid selecting a winner without explaining why.

---

## Location-Risk Categories

Use five standard Rumper categories:

### Flood Resilience — 30%

Check:

- flood and ponding indications;
- proximity to rivers or drainage channels;
- topography and drainage context;
- available flood history;
- strength of `bebas banjir` claims;
- evidence gaps that require resident or field validation.

### Commute Efficiency — 25%

Check:

- normal and peak-hour travel time;
- primary transport mode;
- first-mile and last-mile effort;
- major traffic bottlenecks;
- access to public transport;
- daily travel cost and effort;
- fit with the buyer's tolerance.

### Physical Access and Roads — 15%

Check:

- road width and condition;
- entry and exit points;
- single-access risk;
- access to major roads, toll roads, or stations;
- emergency access;
- physical bottlenecks.

### Essential Facilities — 15%

Check:

- healthcare access;
- schools when relevant;
- daily shopping and services;
- public transport access;
- practical travel time to important facilities.

### Environmental Quality and Red Flags — 15%

Check:

- industrial areas;
- waste sites;
- high-voltage infrastructure;
- railway noise;
- pollution;
- local safety concerns;
- other material location-specific disturbances.

Critical red flags must remain visible even when the total score is high.

---

## Rumper Scoring and Confidence Rules

Calculate the provisional or reviewed Rumper Location Score using:

```text
RLS = (Flood Resilience × 0.30)
    + (Commute Efficiency × 0.25)
    + (Physical Access and Roads × 0.15)
    + (Essential Facilities × 0.15)
    + (Environmental Quality and Red Flags × 0.15)
```

Use these interpretation bands:

- `80–100`: Relatif kuat
- `65–79.99`: Layak dengan catatan
- `50–64.99`: Hati-hati
- `Below 50`: Risiko tinggi / perlu validasi kuat

The interface must always separate:

- score;
- evidence confidence;
- analyst or AI interpretation;
- missing information;
- next action;
- final human-reviewed recommendation.

Confidence describes evidence strength, not whether the location is good or bad.

---

## Concierge Processing Logic

The first MVP should process requests in this order:

1. Visitor understands Rumper's pre-DP value proposition.
2. Visitor submits a shortlisted property and buyer context.
3. System saves and classifies the request.
4. Operations verifies the input and confirms the request through WhatsApp.
5. Analyst performs structured desk research.
6. Analyst records evidence, observation date, and confidence.
7. Analyst calculates category scores and Rumper Location Score.
8. Quality reviewer checks claims, evidence, scoring, and wording.
9. Rumper delivers the Mini Check or paid report.
10. Rumper collects feedback and follows up after the buyer's decision deadline.

The workflow must ensure that:

- every material finding has a source or is clearly labeled as an evidence gap;
- every material finding has a confidence label;
- conflicting evidence is documented;
- critical red flags cannot be hidden by a high total score;
- final paid reports pass quality review;
- recommendations do not use unsupported certainty;
- real customer data is never stored in the public code repository.

---

## Recommended MVP Scope

For the first working MVP, build:

- Bahasa Indonesia campaign landing page;
- mobile-first multi-step location intake;
- save submission to a controlled operational tracker;
- WhatsApp handoff after successful submission;
- example Mini Check using fictional data;
- clear report preview and confidence labels;
- basic analytics for CTA, intake start, form completion, and qualified submission;
- concierge operations workflow and quality-control support.

Use manual or semi-manual research and report delivery during the MVP.

Save these features for later:

- customer accounts;
- automated final scoring;
- real-time GIS risk maps;
- AI-generated final recommendations;
- subscription plans;
- saved multi-property workspace;
- monitoring alerts;
- automatic PDF generation;
- broad geographic coverage outside Jabodetabek;
- agent, developer, or B2B workflows.

This keeps the first version aligned with the goal of validating trust, paid demand, decision impact, and operational viability.

---

## Optional Future Interactive Product

After concierge value and workflow bottlenecks are validated, add an assisted self-service decision workspace.

### Preliminary Risk Dashboard

Allow a registered user to:

- submit one shortlisted property;
- see analysis progress;
- view a provisional score;
- inspect mapped risk signals;
- open evidence cards;
- review category-level findings;
- open a second-survey checklist;
- see clear limitations and next actions.

### Evidence-Grounded AI Assistant

The AI assistant may:

- explain dashboard findings in simple language;
- answer questions using visible evidence;
- summarize missing evidence;
- prepare field-survey questions;
- explain trade-offs between saved properties.

The AI assistant must:

- cite dashboard evidence for factual claims;
- state uncertainty;
- avoid unsupported certainty;
- avoid final recommendation wording;
- never expose hidden reasoning.

### Multi-Property Comparison

Allow subscribed users to compare two to five shortlisted homes using the same risk categories and confidence rules.

### Monitoring and Alerts

Later, notify users when important risk signals or evidence change. Always show the source and last-updated date.

---

## Tech Stack Recommended Defaults

### First MVP

- Frontend: Next.js App Router, TypeScript, React, and Tailwind CSS.
- Form storage: controlled submission endpoint connected to Google Sheets or another simple operational tracker.
- Customer communication: WhatsApp handoff.
- Report production: controlled Google Slides, Canva, or document template.
- Analytics: privacy-conscious event tracking without personal or property data.
- Authentication: not required.
- Payment: manual or payment-link based.

### Future Assisted Self-Service

- Database and auth: managed Postgres and secure authentication.
- Maps: provider selected only after data coverage and cost validation.
- AI: evidence-grounded explanation layer with clear safety boundaries.
- File storage: private storage for reports and evidence.
- Payments: managed Indonesian payment provider.

Recommendation: start with the smallest system that supports reliable customer learning. Add infrastructure only when a measured workflow or customer problem justifies it.

---

## Design Preferences

- Primary language: Bahasa Indonesia.
- Tone: calm, independent, clear, and non-alarmist.
- Typography: Plus Jakarta Sans or another highly readable sans-serif.
- Background: warm paper or cream-gray.
- Primary panels: deep navy.
- Primary action accent: lime or teal.
- Amber: caution or validation-required states.
- Red: confirmed danger or high-risk states only.
- Green: supporting or relatively strong states.
- Layout: mobile-first with generous spacing and rounded evidence cards.
- Visual language: maps, report previews, source labels, confidence badges, score cards, and practical checklists.
- Accessibility: WCAG AA contrast, visible keyboard focus, minimum 44px touch targets, and no meaning communicated by color alone.

Do not use generic luxury-property sales imagery. Rumper should feel like an independent buyer-side decision service, not a developer or property portal.

---

## Suggested App Structure

### Pages and Views

- `/` — Main Rumper marketing page.
- `/sebelum-dp` — Focused campaign landing page.
- `/sebelum-dp/intake` — Multi-step location intake.
- `/sample-report` — Fictional Mini Check or Full Report preview.
- `/request/success` — Submission confirmation and WhatsApp continuation.
- `/dashboard/locations/[location_id]` — Future preliminary risk workspace.
- `/compare` — Future multi-property comparison.

### Main Components

- `CampaignHero`
- `RiskCategoryCards`
- `ReportPreview`
- `EvidenceCard`
- `ConfidenceBadge`
- `LocationIntakeForm`
- `IntakeProgress`
- `ConsentFields`
- `SubmissionSuccess`
- `WhatsAppContinuation`
- `RumperScoreCard`
- `RiskFindingCard`
- `SurveyChecklist`
- `DisclaimerPanel`
- `InteractiveRiskMap` — future
- `GroundedAIAssistant` — future

### Core Utility Functions

- `validateCurrentIntakeStep(data, step)`
- `classifyLead(locationFields, buyingContext)`
- `generateLeadId()`
- `saveIntakeSubmission(data)`
- `buildWhatsAppConfirmation(leadId, fullName)`
- `calculateRumperScore(categoryScores)`
- `getScoreInterpretation(score)`
- `validateFindingEvidence(finding)`
- `validateCriticalRedFlags(findings)`
- `generateSurveyChecklist(findings, buyerPriorities)`
- `buildCompareSummary(locations)` — future

---

## Example Mini Check Content

**Example location:** Fictional only  
**Result type:** Preliminary Mini Check  

### Ringkasan Awal

Lokasi memiliki akses yang cukup baik ke jalan utama dan fasilitas harian. Namun, terdapat indikasi genangan di area sekitar dan bukti yang tersedia belum cukup untuk memastikan kondisi pada titik rumah.

### Temuan Utama

**Indikasi genangan di jalan akses**

- Evidence: public map signal and recent community discussion.
- Confidence: `Data sedang`.
- Limitation: evidence is not specific to the exact house.
- Practical implication: access may be disrupted during heavy rain.
- Validation action: ask residents and security about the deepest water level, duration, and affected access roads.

**Commute requires peak-hour validation**

- Evidence: route simulation to the buyer's workplace.
- Confidence: `Data kuat`.
- Limitation: travel time can vary by departure time and incident.
- Practical implication: daily travel effort may exceed the buyer's preferred limit.
- Validation action: test the route on a weekday during the expected departure time.

### Next Action

`Validasi lebih lanjut sebelum memutuskan`

### Disclaimer

This Mini Check is a second opinion based on available location signals. It is not a guarantee that the location is safe or suitable. The buyer should perform a physical survey and verify material findings before making a financial commitment.

---

## Success Measures

The MVP should measure whether Rumper creates real customer and business value.

- At least five qualified real locations submitted during validation.
- At least two to three paid beta customers.
- At least 80% of paid customers rate satisfaction above 8/10.
- At least 60% of paid customers report a changed or validated next action.
- Average Comprehensive report production time below 2.5 hours.
- Every material finding has a confidence label.
- Every delivered final report passes quality control.
- Zero privacy or consent violations.

---

## Build Goal

Build a polished, mobile-first Rumper MVP that helps a first-time homebuyer understand the service, submit a real shortlisted home, continue through WhatsApp, and receive a trustworthy location-risk check before paying a booking fee or down payment.

The first version should validate customer trust, demand, decision impact, and repeatable delivery. The underlying structure should be flexible enough to support a future interactive dashboard, evidence-grounded AI explanations, and multi-property comparison without presenting preliminary automation as a final recommendation.
