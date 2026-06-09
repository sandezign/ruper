# Post-Registration AI Map Dashboard UI Requirements

**Status:** Revised to follow post-registration AI map dashboard requirement  
**Date:** 2026-06-07  
**Primary user:** First-time homebuyer comparing 2-5 shortlisted homes  
**Primary language:** Bahasa Indonesia  
**Visual direction:** Existing Rumper landing-page style  
**Primary source:** `docs/superpowers/specs/2026-06-07-post-registration-ai-map-dashboard-design.md`  
**Related PRD:** `product/requirements/PRD-interactive-dashboard-after-location-submit.md`

## 1. Objective

Create the first post-registration product dashboard for Rumper: an interactive
decision workspace where a registered buyer submits one shortlisted property and
receives a free preliminary scan with map visualization, provisional scoring,
AI explanation, and next actions.

The dashboard must create immediate value after registration without presenting
AI output as a final human-reviewed recommendation.

## 2. Product Positioning

Use the **Decision Workspace** approach.

The dashboard is not a generic GIS explorer, a static PDF report, or an open
AI chat product. The map provides evidence, AI explains the evidence, and the
dashboard turns findings into a practical buyer decision workflow.

Required warning:

> Hasil awal berbasis data yang tersedia dan interpretasi AI. Bukan rekomendasi
> final atau pengganti survei lokasi.

## 3. Primary Journey

```text
Register
→ Submit first shortlisted property
→ Add workplace and basic priorities
→ See analysis progress
→ Receive free preliminary scan
→ Review provisional score, risks, map signals, AI explanation, and next actions
→ Ask limited AI questions
→ Open second-survey checklist
→ See subscription prompt
→ Subscriber can add, compare, monitor, and ask deeper AI questions
```

## 4. User And Access Model

### Free Registered User

- Can scan one property.
- Receives provisional score and next actions.
- Can inspect visible map signals and evidence cards.
- Gets limited AI assistant usage for that property.
- Can open a read-only second-survey checklist.
- Sees locked previews of premium map layers.
- Can save the scan and return later.
- Cannot add more properties, compare properties, monitor changes, or use
  expanded AI chat.

### Monthly Subscriber

- Can scan multiple properties within usage limits.
- Can save and compare 2-5 active shortlisted homes.
- Unlocks deeper map layers.
- Gets expanded AI chat across saved properties.
- Receives monitoring alerts for important risk-signal changes.
- Can generate a richer checklist.
- Can export or share a decision summary.

## 5. Information Architecture

| Area | Purpose |
|---|---|
| Submit Location | Capture property link, map pin, area name, primary workplace, and priorities |
| Analysis Progress | Show scan progress and prevent a blank wait state |
| Overview | Show provisional score, top risks, supporting factors, confidence, and next action |
| Interactive Map | Show property marker, risk signals, zones, layer controls, and evidence popovers |
| Risk Modules | Show five category scores and evidence per category |
| Checklist | Convert findings into second-survey questions and observations |
| AI Assistant | Explain findings and answer evidence-grounded questions |
| Saved Properties | Show free property limit and subscriber multi-property workspace |
| Upgrade | Explain subscription value and locked premium capabilities |

Release 0 should implement these as a clickable prototype using fictional data.
Release 1 can connect the same structure to real user, property, scoring, map,
AI, and entitlement services.

## 6. Dashboard Requirements

### Decision Header

Show:

- property name and location;
- provisional Rumper Score;
- interpretation label using existing RLS bands;
- confidence summary;
- one clear next action;
- preliminary-result warning.

The header must not call the score final, verified, guaranteed, or
human-reviewed.

### Interactive Risk Map

Show:

- target property marker;
- flood and ponding signals;
- commute and transport access;
- physical road access;
- essential facilities;
- environmental quality and red flags;
- visible locked preview markers for premium layers where relevant.

Selecting a signal opens an evidence card containing:

- finding;
- source summary;
- confidence label;
- limitation;
- practical implication;
- validation action.

Safety-critical limitations and warnings must never be hidden behind a paywall.

### Priority Findings

Show:

- top supporting factors;
- top concerns;
- missing or weak evidence;
- AI-generated plain-language explanation;
- distinction between evidence, AI interpretation, and unknown information.

### Risk Modules

Use the five Rumper score categories:

- flood resilience;
- commute efficiency;
- physical access and roads;
- essential facilities;
- environmental quality and red flags.

Each module shows:

- score;
- evidence coverage;
- confidence label;
- material findings;
- missing information;
- validation actions.

### Checklist

Generate a second-survey checklist from detected risks and user priorities.

Group actions into:

- `Tanya warga / security`;
- `Observasi langsung`;
- `Verifikasi ke developer / agent`.

Release 0 and free-user views may show the checklist as read-only.

### AI Assistant

The assistant can:

- explain map signals and scores;
- answer dashboard-grounded questions;
- prepare survey questions;
- summarize missing evidence;
- explain score changes when evidence changes;
- summarize trade-offs between saved properties for subscribers.

The assistant must:

- cite dashboard evidence when making factual claims;
- state uncertainty when evidence is incomplete or conflicting;
- refuse unsupported certainty;
- avoid final recommendation wording unless a human-reviewed audit exists.

The assistant must not:

- present preliminary findings as verified facts;
- hide missing or conflicting evidence;
- guarantee that a property is safe or suitable;
- issue a final Rumper recommendation;
- expose hidden reasoning or chain-of-thought.

## 7. Scoring Requirements

Use `STD-SCR-001` category weights:

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

The dashboard must visibly separate:

- score;
- confidence;
- AI interpretation;
- next action;
- final human-reviewed recommendation.

## 8. Monetization Requirements

Free users should see a subscription path after receiving value from the first
scan, not before.

Suggested upgrade message:

> Bandingkan sampai 5 kandidat rumah, buka layer risiko lanjutan, dan tanya AI
> lebih dalam sebelum kamu booking fee atau DP.

Locked previews may show premium value, but the interface must still reveal
safety-critical limitations and preliminary-result warnings.

## 9. Failure States

The dashboard must handle:

- incomplete map data by showing partial results and missing-data notes;
- AI generation failure by still showing scores and evidence cards;
- scoring failure by showing missing inputs and recovery action;
- premium access failure by preserving the scan and showing billing/support
  recovery;
- stale monitoring data by showing last update timestamp.

## 10. Visual Direction

Follow the existing Rumper landing-page style:

- warm paper background;
- deep navy primary panels;
- lime accent for primary highlights;
- amber for caution and validation-required states;
- red only for danger or confirmed high-risk states;
- green for supporting or verified-positive states;
- editorial typography aligned with the current site direction;
- generous spacing and rounded cards;
- report-card and map-preview visual language;
- calm, trustworthy, non-alarmist tone.

The dashboard should feel like an extension of the Rumper decision-support
brand, not a generic analytics or GIS product.

## 11. Accessibility And Responsive Requirements

- Use semantic headings with one `h1`.
- Ensure WCAG AA contrast.
- Do not rely on color alone for warning, confidence, status, or locked state.
- Provide keyboard focus states for navigation, map signals, layer toggles, AI
  prompt examples, and evidence popovers.
- Provide text summaries for map markers and layers.
- Keep touch targets at least `44px`.
- Avoid horizontal page scroll on mobile.
- Use skeletons or progressive cards when analysis takes more than 1 second.
- Reserve loading-state space to avoid layout shift.
- Respect reduced-motion preferences.

## 12. Release 0 Prototype Scope

The first implementation should be a clickable prototype with fictional data:

- submit-location screen;
- analysis progress state;
- dashboard overview;
- interactive-looking map with fictional risk signals;
- risk modules;
- second-survey checklist;
- static AI assistant examples;
- subscription prompt and locked premium layer previews.

Release 0 must not store real customer data, call external AI, use real
addresses, or imply automated final recommendation.

## 13. Acceptance Criteria

The dashboard requirements are satisfied when:

1. The first journey starts after registration and scans one submitted property.
2. The free scan includes provisional score and next actions.
3. The dashboard uses map signals with evidence cards.
4. Each material finding shows confidence, limitation, and validation action.
5. AI behavior is explicitly evidence-grounded and bounded.
6. The checklist is generated from detected risks and user priorities.
7. The interface distinguishes preliminary AI-assisted output from final
   human-reviewed recommendations.
8. The subscription path unlocks multiple properties, deeper layers, expanded
   AI, monitoring, and alerts.
9. Scoring preserves Rumper category weights and uncertainty principles.
10. The prototype uses fictional data only and protects real customer privacy.

