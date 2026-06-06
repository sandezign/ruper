# Rumper Hybrid Concierge MVP Design

**Status:** Approved design  
**Date:** 2026-06-06  
**Primary market:** First-time home buyers in Jabodetabek  
**Primary language:** Bahasa Indonesia

## 1. Objective

Build an operations-first foundation for Rumper's 30-day concierge MVP, supported by a lightweight custom marketing website.

The first milestone validates whether buyers will pay for an independent location-risk audit. It does not build the future automated location-risk platform.

## 2. Product Boundary

### Included

- Complete concierge operations kit
- Bahasa Indonesia marketing landing page
- Next.js App Router and Tailwind CSS
- Typeform as the primary order channel
- Basic, Comprehensive, and Dual-Location service packages
- Rumper Location Score V1 documentation and worksheet
- Standardized research, quality-control, delivery, and feedback workflows
- Anonymous sample data and report examples
- Clear expansion points for later automation

### Excluded

- Custom order form
- Customer authentication
- Customer or order database
- Payment integration
- Automated scoring
- Interactive risk maps
- Customer order tracking portal
- Automated PDF generation
- Full location-risk web application

## 3. Delivery Priorities

1. Complete concierge operations kit
2. Marketing landing page
3. Documentation for future automation and platform evolution

The operations kit is the working product during the validation sprint. The landing page exists to explain the service and direct qualified visitors to Typeform.

## 4. Repository Structure

```text
rumper/
├── apps/
│   └── website/                 # Next.js and Tailwind marketing website
├── operations/
│   ├── orders/                  # Order tracker templates; no real customer data
│   ├── research/                # Research procedures and source checklists
│   ├── reports/                 # Report outline and reusable report content
│   ├── scoring/                 # Rumper Location Score V1
│   ├── quality-control/         # Accuracy and pre-delivery checks
│   └── customer-service/        # WhatsApp and email templates
├── business/
│   ├── validation/              # 30-day validation gates and metrics
│   ├── marketing/               # Campaign and content plans
│   └── pricing/                 # Packages and pricing assumptions
├── product/
│   ├── requirements/            # Product context and requirements
│   ├── roadmap/                 # Concierge-to-platform roadmap
│   └── decisions/               # Product and architecture decisions
├── data/
│   ├── source-registry/         # Data sources and confidence ratings
│   ├── schemas/                 # Standard research data formats
│   └── samples/                 # Anonymous example data only
├── docs/
│   └── superpowers/
│       ├── specs/
│       └── plans/
├── .env.example
├── .gitignore
└── README.md
```

## 5. Concierge Operations Kit

### Order Tracking

Provide a CSV template that tracks:

- Internal order ID
- Package
- Order and payment status
- Candidate location count
- Research owner
- Order time and 48-hour delivery deadline
- Current workflow stage
- Delivery status
- Feedback status and satisfaction score

Real customer records must not be committed. The repository contains only templates and anonymous samples.

### Research

Provide standardized procedures and checklists for:

- Input verification
- Flood history and geographic risk
- Commute simulation
- Physical access and road conditions
- Essential facilities
- Environmental red flags
- Source recording and confidence assessment

Each finding records its source, observation date, evidence, confidence label, and analyst notes.

### Scoring

Document Rumper Location Score V1 using the approved business-plan weights:

| Dimension | Weight |
|---|---:|
| Flood resilience | 30% |
| Commute efficiency | 25% |
| Physical access and roads | 15% |
| Essential amenities | 15% |
| Environmental quality / red flags | 15% |

Each dimension receives a score from 1 to 5. The final score uses:

```text
RLS = (Flood × 6) + (Commute × 5) + (Physical Access × 3)
    + (Amenities × 3) + (Environmental Quality × 3)
```

Labels:

- 80-100: Green, low risk / highly recommended
- 55-79: Yellow, recommended with notes / moderate risk
- Below 55: Red, requires deeper evaluation / high risk

The worksheet must keep the score separate from analyst recommendations and disclose evidence confidence.

### Reports

Provide:

- A 15-page master report outline
- Required sections per service package
- A Dual-Location comparison structure
- Reusable Bahasa Indonesia copy
- Clear disclaimers and validation prompts

The initial report remains a manually prepared PDF using Google Slides or Canva.

### Quality Control

The pre-delivery review verifies:

- Required research is complete
- Scores match recorded evidence
- Sources and observation dates are present
- Confidence labels are justified
- Claims and recommendations are distinguishable
- Personal data is handled appropriately
- Report package requirements are satisfied
- Filename and delivery details are correct

### Customer Service

Provide Bahasa Indonesia templates for:

- Order acknowledgment
- Payment confirmation
- Missing-information request
- Progress update
- Report delivery
- Consultation scheduling
- Feedback request sent three days after delivery

### Validation

Track the four business-plan validation gates:

1. At least 10 paid Comprehensive or Dual-Location reports during the launch period
2. Customer acquisition cost below Rp150,000 with average order value of at least Rp300,000
3. Average Comprehensive report production time below 2.5 hours
4. At least 80% of paid customers rate satisfaction above 8/10

## 6. Operations Workflow

```text
Typeform order
→ Add order to tracker
→ Verify inputs and payment
→ Conduct standardized research
→ Calculate RLS score
→ Complete quality-control review
→ Produce and deliver PDF report
→ Collect feedback and update validation metrics
```

Each stage has a clear checklist and completion condition. The tracker is the operational source of truth during the concierge MVP.

## 7. Landing Page

### Purpose

Explain Rumper's independent location-audit service, establish trust, show the report's value, and send visitors to Typeform.

### Content Sections

1. Sticky navigation with primary `Pesan Audit Lokasi` CTA
2. Hero with sample Rumper Score dashboard
3. Common hidden location risks
4. Example report and analysis categories
5. Three-step service workflow
6. Data sources, confidence labels, and independence policy
7. Basic, Comprehensive, and Dual-Location pricing
8. FAQ and clear service limitations
9. Final Typeform CTA

### Technical Design

- Next.js App Router
- Tailwind CSS
- Reusable landing-page components
- Content and pricing separated from presentation components
- Typeform URL configured using an environment variable
- Provider-independent CTA click analytics hook
- Static marketing content with no backend dependency

## 8. Visual Direction

Use a combined **Independent Location Auditor + Risk Dashboard** direction.

### Brand Character

- Independent
- Calm
- Evidence-based
- Buyer-first
- Professional without appearing institutional or intimidating

### Visual System

- Plus Jakarta Sans typography
- Deep navy for trust and structure
- Teal for primary actions
- Cream-gray neutral surfaces
- Amber, red, and green only for labeled risk states
- Map crops, report previews, evidence cards, source labels, and score visuals
- No generic developer-sales imagery

### Interaction and Accessibility

- Mobile-first layout
- Maximum desktop content width around 1200px
- Minimum 44px interactive targets
- Visible keyboard focus states
- Minimum WCAG AA text contrast
- Risk states pair color with text and icons
- Subtle 150-300ms transitions
- Reduced-motion support
- Sequential heading hierarchy and descriptive image alternative text

## 9. Data and Privacy Rules

- Never commit real customer data, coordinates, contact information, or payment details.
- Store only blank templates and explicitly anonymous samples.
- Record source URLs, publication or observation dates, and confidence labels for research findings.
- Treat each score as decision support, not a guarantee.
- Display limitations and encourage field validation in reports and website copy.

## 10. Error Handling

### Operations

- Incomplete Typeform submissions remain in an `awaiting_information` state.
- Unverified payments remain in an `awaiting_payment` state.
- Missing or weak evidence lowers the finding's confidence label and requires a report note.
- Conflicting sources are documented rather than silently resolved.
- Reports cannot move to delivery until the quality-control checklist passes.

### Website

- Missing Typeform configuration disables the order CTA and shows a contact fallback.
- External Typeform links open predictably and remain keyboard accessible.
- Analytics failures must never block navigation to Typeform.

## 11. Testing and Verification

### Operations Kit

- Validate scoring formulas against worked examples.
- Verify all service packages map to explicit report requirements.
- Walk one anonymous sample order through every workflow stage.
- Confirm ignored files prevent real customer data from being committed.

### Website

- Test all Typeform CTAs.
- Test 375px mobile, tablet, and desktop layouts.
- Verify keyboard navigation, focus visibility, heading hierarchy, and contrast.
- Verify reduced-motion behavior.
- Confirm no backend or customer data is required.

## 12. Future Evolution

After the validation gates pass, prioritize automation based on measured operational bottlenecks:

1. Semi-automated order and workflow tracking
2. Structured research database
3. Automated report generation
4. Repeatable data integrations
5. Interactive customer-facing location-risk platform

Automation decisions must be driven by validated demand and observed production time, not by the long-term platform vision alone.
