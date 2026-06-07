# Mini Check Dashboard UI Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Build a read-only, customer-facing Mini Check dashboard prototype that visualizes the fictional Taman Arunika sample report using the approved Category Explorer UI.

**Architecture:** Implement a standalone static prototype in `apps/website`, matching the existing landing-page visual language. Keep report content, styling, and lightweight navigation behavior separated across HTML, CSS, and JS files so the dashboard can later migrate to Next.js without changing the content model.

**Tech Stack:** Static HTML, CSS, vanilla JavaScript, existing DM Sans and Fraunces fonts, local verification with `python3 -m http.server`.

---

## File Structure

- Create `apps/website/mini-check-dashboard.html`
  - Owns semantic document structure, report sections, accessible labels, and static sample content.
- Create `apps/website/mini-check-dashboard.css`
  - Owns all dashboard-specific layout, tokens, responsive behavior, map-style visuals, cards, badges, meters, and tables.
- Create `apps/website/mini-check-dashboard.js`
  - Owns read-only section navigation, keyboard support, and active-section state.
- Modify `apps/website/README.md`
  - Adds the dashboard prototype route and local preview instructions.

Do not modify existing campaign concept pages unless a shared bug blocks dashboard verification.

## Approved Content Values

Use these values consistently across all tasks:

```js
const report = {
  id: "RMP-MINI-SAMPLE-001",
  version: "v0.1",
  date: "7 Juni 2026",
  location: "Perumahan Taman Arunika",
  area: "Bekasi",
  sampleLabel: "Contoh fiktif",
  reportType: "Mini Check",
  score: 68,
  outcome: "Layak dengan catatan",
  recommendation: "Lanjut dengan hati-hati setelah validasi banjir dan akses",
  decisionGate: "Jangan bayar booking fee atau DP sebelum mengecek genangan akses dan jalur keluar-masuk saat jam sibuk.",
};

const categories = [
  { id: "flood", label: "Flood", title: "Ketahanan banjir", score: 56, weight: 30, coverage: 75, confidence: "Data sedang" },
  { id: "commute", label: "Commute", title: "Efisiensi commute", score: 76, weight: 25, coverage: 84, confidence: "Data kuat" },
  { id: "access", label: "Access", title: "Akses fisik dan jalan", score: 60, weight: 15, coverage: 78, confidence: "Data sedang" },
  { id: "amenities", label: "Amenities", title: "Fasilitas esensial", score: 82, weight: 15, coverage: 88, confidence: "Data kuat" },
  { id: "environment", label: "Environment", title: "Kualitas lingkungan", score: 72, weight: 15, coverage: 66, confidence: "Perlu validasi" },
];
```

Weighted contribution check:

```text
(56 × 0.30) + (76 × 0.25) + (60 × 0.15) + (82 × 0.15) + (72 × 0.15) = 67.9 ≈ 68
```

## Task 1: Create the Dashboard HTML Shell

**Files:**
- Create: `apps/website/mini-check-dashboard.html`

- [ ] **Step 1: Create the HTML document with linked assets**

Create `apps/website/mini-check-dashboard.html` with this exact document shell:

```html
<!doctype html>
<html lang="id">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta
      name="description"
      content="Contoh dashboard Mini Check Rumper untuk memvisualisasikan risiko lokasi rumah."
    />
    <title>Rumper Mini Check Dashboard — Contoh Fiktif</title>
    <link rel="preconnect" href="https://fonts.googleapis.com" />
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
    <link
      href="https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;600;700&amp;family=Fraunces:opsz,wght@9..144,600;9..144,700&amp;display=swap"
      rel="stylesheet"
    />
    <link rel="stylesheet" href="mini-check-dashboard.css" />
  </head>
  <body>
    <a class="skip-link" href="#dashboard-main">Lewati ke isi report</a>
    <div class="dashboard-shell">
      <header class="dashboard-header" aria-label="Identitas report">
        <a class="brand" href="index.html" aria-label="Kembali ke halaman Rumper">
          <span class="brand-mark" aria-hidden="true">R</span>
          <span>Rumper</span>
        </a>
        <div class="report-meta" aria-label="Metadata report">
          <span class="status-pill status-sample">Contoh fiktif</span>
          <span>RMP-MINI-SAMPLE-001</span>
          <span>v0.1</span>
          <span>7 Juni 2026</span>
        </div>
      </header>

      <div class="dashboard-frame">
        <nav class="section-nav" aria-label="Navigasi kategori report">
          <button class="section-nav-item is-active" type="button" data-section-target="overview">Overview</button>
          <button class="section-nav-item" type="button" data-section-target="flood">Flood</button>
          <button class="section-nav-item" type="button" data-section-target="commute">Commute</button>
          <button class="section-nav-item" type="button" data-section-target="access">Access</button>
          <button class="section-nav-item" type="button" data-section-target="amenities">Amenities</button>
          <button class="section-nav-item" type="button" data-section-target="environment">Environment</button>
          <button class="section-nav-item" type="button" data-section-target="methodology">Methodology</button>
        </nav>

        <main id="dashboard-main" class="report-canvas">
          <section id="overview" class="report-section is-active" data-section="overview" tabindex="-1"></section>
          <section id="flood" class="report-section" data-section="flood" tabindex="-1"></section>
          <section id="commute" class="report-section" data-section="commute" tabindex="-1"></section>
          <section id="access" class="report-section" data-section="access" tabindex="-1"></section>
          <section id="amenities" class="report-section" data-section="amenities" tabindex="-1"></section>
          <section id="environment" class="report-section" data-section="environment" tabindex="-1"></section>
          <section id="methodology" class="report-section" data-section="methodology" tabindex="-1"></section>
        </main>
      </div>
    </div>
    <script src="mini-check-dashboard.js"></script>
  </body>
</html>
```

- [ ] **Step 2: Verify the blank shell loads**

Run:

```bash
python3 -m http.server 8000 --directory apps/website
```

Open `http://localhost:8000/mini-check-dashboard.html`.

Expected:
- Page loads without 404s for CSS or JS.
- Header and sidebar buttons are visible after CSS is added in Task 2.
- Empty sections are acceptable at this stage.

- [ ] **Step 3: Commit the shell**

```bash
git add apps/website/mini-check-dashboard.html
git commit -m "feat: add mini check dashboard shell"
```

## Task 2: Add Dashboard Styling and Responsive Layout

**Files:**
- Create: `apps/website/mini-check-dashboard.css`

- [ ] **Step 1: Create base tokens and layout styles**

Create `apps/website/mini-check-dashboard.css` with these token, shell, navigation, and responsive rules:

```css
:root {
  --paper: #f7f5ef;
  --paper-2: #ece7da;
  --white: #fffefa;
  --ink: #10282f;
  --muted: #52656a;
  --navy: #102f3a;
  --navy-2: #163f49;
  --lime: #c8f765;
  --amber: #d79a2b;
  --amber-soft: #f7e5bc;
  --red: #c95746;
  --red-soft: #f4ded9;
  --green: #318266;
  --green-soft: #dceee7;
  --line: #d9dfda;
  --shadow: 0 24px 70px rgba(16, 40, 47, 0.14);
  --radius-xl: 28px;
  --radius-lg: 20px;
  --radius-md: 14px;
}

* { box-sizing: border-box; }
html { scroll-behavior: smooth; }
body {
  margin: 0;
  color: var(--ink);
  background: radial-gradient(circle at 82% 4%, rgba(200, 247, 101, 0.18), transparent 26rem), var(--paper);
  font: 16px/1.6 "DM Sans", sans-serif;
}
body::before {
  position: fixed;
  z-index: -1;
  inset: 0;
  background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 180 180' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='.9' numOctaves='2' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='.025'/%3E%3C/svg%3E");
  content: "";
  pointer-events: none;
}
a { color: inherit; }
button { font: inherit; }
:focus-visible { outline: 3px solid var(--lime); outline-offset: 4px; }
.skip-link {
  position: fixed;
  z-index: 100;
  top: 8px;
  left: 8px;
  padding: 10px 14px;
  border-radius: 10px;
  background: var(--white);
  transform: translateY(-150%);
}
.skip-link:focus { transform: translateY(0); }
.dashboard-shell {
  width: min(1400px, calc(100% - 32px));
  margin: 0 auto;
  padding: 22px 0 56px;
}
.dashboard-header {
  position: sticky;
  z-index: 20;
  top: 0;
  display: flex;
  min-height: 72px;
  align-items: center;
  justify-content: space-between;
  gap: 18px;
  padding: 12px 0;
  background: rgba(247, 245, 239, 0.88);
  backdrop-filter: blur(18px);
}
.brand {
  display: inline-flex;
  align-items: center;
  gap: 10px;
  font-family: "Fraunces", serif;
  font-size: 25px;
  font-weight: 700;
  letter-spacing: -0.04em;
  text-decoration: none;
}
.brand-mark {
  display: grid;
  width: 34px;
  height: 34px;
  place-items: center;
  border-radius: 50% 50% 50% 9px;
  color: var(--lime);
  background: var(--navy);
  transform: rotate(-8deg);
}
.report-meta {
  display: flex;
  align-items: center;
  justify-content: flex-end;
  gap: 8px;
  color: var(--muted);
  font-size: 12px;
  font-weight: 700;
  flex-wrap: wrap;
}
.status-pill, .score-pill {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  min-height: 28px;
  padding: 5px 10px;
  border-radius: 999px;
  font-size: 11px;
  font-weight: 800;
}
.status-sample { color: #714900; background: var(--amber-soft); }
.status-warning { color: #714900; background: var(--amber-soft); }
.status-good { color: #155641; background: var(--green-soft); }
.status-danger { color: #7d3025; background: var(--red-soft); }
.dashboard-frame {
  display: grid;
  grid-template-columns: 220px minmax(0, 1fr);
  gap: 22px;
  align-items: start;
}
.section-nav {
  position: sticky;
  top: 92px;
  display: grid;
  gap: 6px;
  padding: 12px;
  border: 1px solid var(--line);
  border-radius: var(--radius-lg);
  background: rgba(255, 254, 250, 0.74);
}
.section-nav-item {
  min-height: 44px;
  padding: 0 12px;
  border: 0;
  border-radius: 12px;
  color: var(--muted);
  background: transparent;
  font-size: 14px;
  font-weight: 800;
  text-align: left;
  cursor: pointer;
}
.section-nav-item:hover,
.section-nav-item.is-active {
  color: var(--ink);
  background: var(--white);
  box-shadow: 0 10px 22px rgba(16, 40, 47, 0.06);
}
.report-canvas {
  min-width: 0;
}
.report-section {
  display: none;
}
.report-section.is-active {
  display: block;
}
@media (max-width: 980px) {
  .dashboard-frame { grid-template-columns: 1fr; }
  .section-nav {
    position: sticky;
    top: 72px;
    z-index: 10;
    display: flex;
    overflow-x: auto;
    border-radius: 999px;
  }
  .section-nav-item {
    flex: 0 0 auto;
    white-space: nowrap;
  }
}
@media (max-width: 640px) {
  .dashboard-shell {
    width: min(100% - 24px, 1400px);
    padding-top: 8px;
  }
  .dashboard-header {
    align-items: flex-start;
    flex-direction: column;
  }
  .report-meta {
    justify-content: flex-start;
  }
}
@media (prefers-reduced-motion: reduce) {
  *, *::before, *::after {
    scroll-behavior: auto !important;
    transition-duration: 0.01ms !important;
  }
}
```

- [ ] **Step 2: Add reusable dashboard component styles**

Append this CSS to the same file:

```css
.panel {
  border: 1px solid var(--line);
  border-radius: var(--radius-xl);
  background: var(--white);
  box-shadow: 0 16px 40px rgba(16, 40, 47, 0.08);
}
.panel-dark {
  position: relative;
  overflow: hidden;
  color: var(--white);
  background: var(--navy);
  border: 0;
}
.panel-dark::before {
  position: absolute;
  inset: 0;
  opacity: 0.14;
  content: "";
  background: radial-gradient(circle at 70% 20%, var(--lime), transparent 34%);
  pointer-events: none;
}
.panel-dark > * { position: relative; }
.overview-grid {
  display: grid;
  grid-template-columns: minmax(0, 1.1fr) minmax(320px, 0.9fr);
  gap: 18px;
}
.page-title {
  margin: 0;
  font-family: "Fraunces", serif;
  font-size: clamp(2.2rem, 4.2vw, 4rem);
  line-height: 0.98;
  letter-spacing: -0.045em;
}
.section-title {
  margin: 0;
  font-family: "Fraunces", serif;
  font-size: clamp(1.9rem, 3vw, 3.1rem);
  line-height: 1;
  letter-spacing: -0.04em;
}
.eyebrow {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  color: var(--green);
  font-size: 12px;
  font-weight: 800;
  letter-spacing: 0.1em;
  text-transform: uppercase;
}
.eyebrow::before {
  width: 8px;
  height: 8px;
  border-radius: 999px;
  background: currentColor;
  content: "";
}
.lead {
  max-width: 690px;
  color: var(--muted);
  font-size: 1rem;
}
.report-hero {
  min-height: 480px;
  padding: clamp(24px, 4vw, 48px);
}
.map-preview {
  position: relative;
  min-height: 280px;
  margin-top: 28px;
  overflow: hidden;
  border-radius: 22px;
  background:
    linear-gradient(135deg, rgba(255, 254, 250, 0.9), rgba(255, 254, 250, 0.2)),
    linear-gradient(135deg, #d9e8e1, #b8cec4);
}
.map-preview::before,
.map-preview::after {
  position: absolute;
  content: "";
}
.map-preview::before {
  width: 120%;
  height: 14px;
  left: -10%;
  top: 58%;
  background: rgba(255, 254, 250, 0.82);
  transform: rotate(-9deg);
  box-shadow: 0 38px 0 rgba(255, 254, 250, 0.66), 0 -42px 0 rgba(255, 254, 250, 0.5);
}
.map-preview::after {
  width: 22px;
  height: 22px;
  left: 56%;
  top: 42%;
  border: 6px solid var(--red);
  border-radius: 50% 50% 50% 0;
  transform: rotate(-45deg);
}
.map-label {
  position: absolute;
  z-index: 2;
  right: 18px;
  bottom: 18px;
  max-width: 230px;
  padding: 12px;
  border-radius: 14px;
  background: rgba(255, 254, 250, 0.92);
  color: var(--ink);
  font-size: 12px;
  font-weight: 700;
}
.score-card {
  padding: 24px;
}
.score-number {
  display: flex;
  align-items: baseline;
  gap: 4px;
  margin: 12px 0 10px;
  font-family: "Fraunces", serif;
  font-size: 70px;
  font-weight: 700;
  line-height: 0.9;
  letter-spacing: -0.06em;
}
.score-number span {
  color: var(--muted);
  font: 800 16px/1 "DM Sans", sans-serif;
}
.meter {
  height: 8px;
  overflow: hidden;
  border-radius: 999px;
  background: #edf0ed;
}
.meter > span {
  display: block;
  width: var(--value, 68%);
  height: 100%;
  background: var(--meter-color, var(--amber));
}
.metric-grid,
.finding-grid {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 14px;
}
.metric-card,
.finding-card,
.evidence-card,
.decision-card {
  padding: 18px;
  border: 1px solid var(--line);
  border-radius: var(--radius-lg);
  background: var(--white);
}
.finding-card {
  border-left: 6px solid var(--amber);
}
.finding-card.supporting {
  border-left-color: var(--green);
}
.card-label {
  display: block;
  margin-bottom: 8px;
  color: var(--muted);
  font-size: 11px;
  font-weight: 800;
  letter-spacing: 0.08em;
  text-transform: uppercase;
}
.card-title {
  margin: 0 0 8px;
  font-size: 1.05rem;
  line-height: 1.25;
}
.card-text {
  margin: 0;
  color: var(--muted);
  font-size: 0.92rem;
}
.category-layout {
  display: grid;
  grid-template-columns: minmax(0, 1.1fr) minmax(320px, 0.9fr);
  gap: 18px;
}
.category-map-panel,
.category-summary-panel,
.method-panel {
  padding: clamp(20px, 3vw, 32px);
}
.evidence-list {
  display: grid;
  gap: 12px;
  margin-top: 16px;
}
.method-table {
  width: 100%;
  border-collapse: collapse;
  font-size: 14px;
}
.method-table th,
.method-table td {
  padding: 13px 10px;
  border-bottom: 1px solid var(--line);
  text-align: left;
  vertical-align: top;
}
.method-table th {
  color: var(--muted);
  font-size: 11px;
  letter-spacing: 0.08em;
  text-transform: uppercase;
}
.method-table td:nth-child(n+2),
.method-table th:nth-child(n+2) {
  text-align: right;
}
.formula-box {
  margin: 16px 0;
  padding: 14px;
  border-radius: 16px;
  background: #e8f3ee;
  color: var(--green);
  font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace;
  font-size: 13px;
  font-weight: 800;
  overflow-x: auto;
}
.section-stack {
  display: grid;
  gap: 18px;
}
@media (max-width: 1040px) {
  .overview-grid,
  .category-layout {
    grid-template-columns: 1fr;
  }
}
@media (max-width: 640px) {
  .metric-grid,
  .finding-grid {
    grid-template-columns: 1fr;
  }
  .report-hero {
    min-height: 0;
  }
  .score-number {
    font-size: 58px;
  }
  .method-table {
    min-width: 680px;
  }
  .method-table-wrap {
    overflow-x: auto;
  }
}
```

- [ ] **Step 3: Verify layout styles**

Run:

```bash
python3 -m http.server 8000 --directory apps/website
```

Open `http://localhost:8000/mini-check-dashboard.html`.

Expected:
- Header uses warm paper and Rumper brand treatment.
- Sidebar is visible on desktop and becomes horizontal on narrower screens.
- No horizontal page overflow except the future methodology table wrapper on mobile.

- [ ] **Step 4: Commit styling**

```bash
git add apps/website/mini-check-dashboard.css
git commit -m "feat: style mini check dashboard layout"
```

## Task 3: Fill Overview and Category Sections

**Files:**
- Modify: `apps/website/mini-check-dashboard.html`

- [ ] **Step 1: Replace the empty Overview section**

Replace:

```html
<section id="overview" class="report-section is-active" data-section="overview" tabindex="-1"></section>
```

with:

```html
<section id="overview" class="report-section is-active" data-section="overview" tabindex="-1">
  <div class="overview-grid">
    <article class="panel panel-dark report-hero">
      <span class="eyebrow" style="color: var(--lime)">Mini Check · Contoh fiktif</span>
      <h1 class="page-title">Perumahan Taman Arunika, Bekasi</h1>
      <p class="lead" style="color: rgba(255,255,255,.72)">
        Contoh dashboard read-only untuk membantu pembeli memahami temuan lokasi, bukti, dan validasi yang perlu dilakukan sebelum booking fee atau DP.
      </p>
      <div class="map-preview" role="img" aria-label="Ilustrasi peta fiktif kandidat lokasi dan sinyal akses yang perlu divalidasi">
        <div class="map-label">Sinyal utama: indikasi genangan di salah satu segmen jalan akses.</div>
      </div>
    </article>

    <aside class="section-stack" aria-label="Ringkasan keputusan">
      <article class="panel score-card">
        <span class="card-label">Temporary Mini Score</span>
        <div class="score-number">68<span>/100</span></div>
        <span class="score-pill status-warning">Layak dengan catatan</span>
        <div class="meter" style="--value: 68%; --meter-color: var(--amber); margin-top: 18px"><span></span></div>
        <p class="card-text" style="margin-top: 14px">
          Skor ini memakai parameter prioritas Mini Check, bukan Full Location Risk Report.
        </p>
      </article>

      <article class="panel decision-card">
        <span class="card-label">Rekomendasi</span>
        <h2 class="card-title">Lanjut dengan hati-hati setelah validasi banjir dan akses.</h2>
        <p class="card-text">
          Jangan bayar booking fee atau DP sebelum mengecek genangan akses dan jalur keluar-masuk saat jam sibuk.
        </p>
      </article>
    </aside>
  </div>

  <div class="finding-grid" style="margin-top: 18px">
    <article class="finding-card">
      <span class="card-label">Temuan utama 01</span>
      <h2 class="card-title">Indikasi genangan pada jalan akses.</h2>
      <p class="card-text">Ada sinyal genangan pada satu segmen akses. Frekuensi, kedalaman, dan durasinya belum terkonfirmasi.</p>
    </article>
    <article class="finding-card">
      <span class="card-label">Temuan utama 02</span>
      <h2 class="card-title">Akses utama memiliki bottleneck.</h2>
      <p class="card-text">Jalur keluar-masuk utama terlihat bergantung pada satu ruas yang perlu diuji saat jam sibuk.</p>
    </article>
    <article class="finding-card supporting">
      <span class="card-label">Faktor pendukung</span>
      <h2 class="card-title">Fasilitas harian relatif mudah dijangkau.</h2>
      <p class="card-text">Kebutuhan dasar seperti minimarket, klinik, dan akses transportasi terindikasi tersedia dalam jangkauan wajar.</p>
    </article>
    <article class="finding-card supporting">
      <span class="card-label">Faktor pendukung</span>
      <h2 class="card-title">Commute masih layak diuji.</h2>
      <p class="card-text">Simulasi awal menunjukkan perjalanan masih dapat dipertimbangkan, dengan catatan bottleneck jam sibuk.</p>
    </article>
  </div>
</section>
```

- [ ] **Step 2: Replace the empty category sections**

Replace the five empty category sections with the following content. Keep each `id`, `data-section`, and `tabindex` unchanged.

```html
<section id="flood" class="report-section" data-section="flood" tabindex="-1">
  <div class="category-layout">
    <article class="panel category-map-panel">
      <span class="eyebrow">Flood</span>
      <h2 class="section-title">Ketahanan banjir</h2>
      <p class="lead">Sinyal awal menunjukkan risiko genangan di akses, tetapi belum ada konfirmasi kedalaman dan durasi.</p>
      <div class="map-preview" role="img" aria-label="Ilustrasi titik genangan pada akses menuju kandidat lokasi">
        <div class="map-label">Access segment A: perlu dicek saat atau setelah hujan deras.</div>
      </div>
    </article>
    <aside class="panel category-summary-panel">
      <span class="card-label">Temporary category score</span>
      <div class="score-number">56<span>/100</span></div>
      <span class="score-pill status-warning">Perlu perhatian</span>
      <div class="metric-grid" style="margin-top: 18px">
        <div class="metric-card"><span class="card-label">Coverage</span><strong>75%</strong></div>
        <div class="metric-card"><span class="card-label">Confidence</span><strong>Data sedang</strong></div>
      </div>
      <div class="evidence-list">
        <article class="evidence-card">
          <h3 class="card-title">Indikasi genangan akses</h3>
          <p class="card-text">Evidence fiktif menunjukkan satu segmen akses pernah tergenang. Validasi warga dan observasi hujan masih wajib.</p>
        </article>
        <article class="evidence-card">
          <h3 class="card-title">Data drainase belum cukup</h3>
          <p class="card-text">Kondisi saluran air tidak dapat dinilai dari data awal. Tandai sebagai missing evidence.</p>
        </article>
      </div>
    </aside>
  </div>
</section>

<section id="commute" class="report-section" data-section="commute" tabindex="-1">
  <div class="category-layout">
    <article class="panel category-map-panel">
      <span class="eyebrow">Commute</span>
      <h2 class="section-title">Efisiensi commute</h2>
      <p class="lead">Perjalanan harian terlihat masih dapat dipertimbangkan, dengan bottleneck yang perlu diuji saat jam sibuk.</p>
      <div class="map-preview" role="img" aria-label="Ilustrasi rute commute fiktif dari kandidat lokasi ke aktivitas utama">
        <div class="map-label">Rute utama: perlu simulasi ulang pagi dan sore.</div>
      </div>
    </article>
    <aside class="panel category-summary-panel">
      <span class="card-label">Temporary category score</span>
      <div class="score-number">76<span>/100</span></div>
      <span class="score-pill status-good">Cukup mendukung</span>
      <div class="metric-grid" style="margin-top: 18px">
        <div class="metric-card"><span class="card-label">Coverage</span><strong>84%</strong></div>
        <div class="metric-card"><span class="card-label">Confidence</span><strong>Data kuat</strong></div>
      </div>
      <div class="evidence-list">
        <article class="evidence-card">
          <h3 class="card-title">Durasi masih dalam rentang wajar</h3>
          <p class="card-text">Simulasi fiktif menunjukkan commute dapat diterima bila bottleneck tidak memburuk.</p>
        </article>
        <article class="evidence-card">
          <h3 class="card-title">Jam sibuk tetap perlu diuji</h3>
          <p class="card-text">Validasi lapangan perlu dilakukan pada waktu berangkat dan pulang kerja.</p>
        </article>
      </div>
    </aside>
  </div>
</section>

<section id="access" class="report-section" data-section="access" tabindex="-1">
  <div class="category-layout">
    <article class="panel category-map-panel">
      <span class="eyebrow">Access</span>
      <h2 class="section-title">Akses fisik dan jalan</h2>
      <p class="lead">Akses utama perlu perhatian karena terlihat bergantung pada satu ruas dengan potensi bottleneck.</p>
      <div class="map-preview" role="img" aria-label="Ilustrasi akses utama dan bottleneck menuju kandidat lokasi">
        <div class="map-label">Single primary access: cek alternatif keluar-masuk dan akses darurat.</div>
      </div>
    </article>
    <aside class="panel category-summary-panel">
      <span class="card-label">Temporary category score</span>
      <div class="score-number">60<span>/100</span></div>
      <span class="score-pill status-warning">Perlu perhatian</span>
      <div class="metric-grid" style="margin-top: 18px">
        <div class="metric-card"><span class="card-label">Coverage</span><strong>78%</strong></div>
        <div class="metric-card"><span class="card-label">Confidence</span><strong>Data sedang</strong></div>
      </div>
      <div class="evidence-list">
        <article class="evidence-card">
          <h3 class="card-title">Jalur alternatif belum jelas</h3>
          <p class="card-text">Jika akses utama terganggu, rute pengganti belum dapat dipastikan dari data awal.</p>
        </article>
        <article class="evidence-card">
          <h3 class="card-title">Bottleneck perlu diuji</h3>
          <p class="card-text">Cek apakah dua mobil dapat berpapasan dan apakah kendaraan darurat dapat masuk.</p>
        </article>
      </div>
    </aside>
  </div>
</section>

<section id="amenities" class="report-section" data-section="amenities" tabindex="-1">
  <div class="category-layout">
    <article class="panel category-map-panel">
      <span class="eyebrow">Amenities</span>
      <h2 class="section-title">Fasilitas esensial</h2>
      <p class="lead">Kebutuhan harian dasar terlihat cukup tersedia untuk tahap screening awal.</p>
      <div class="map-preview" role="img" aria-label="Ilustrasi fasilitas harian di sekitar kandidat lokasi">
        <div class="map-label">Minimarket, klinik, dan fasilitas harian terindikasi dalam jangkauan wajar.</div>
      </div>
    </article>
    <aside class="panel category-summary-panel">
      <span class="card-label">Temporary category score</span>
      <div class="score-number">82<span>/100</span></div>
      <span class="score-pill status-good">Relatif mendukung</span>
      <div class="metric-grid" style="margin-top: 18px">
        <div class="metric-card"><span class="card-label">Coverage</span><strong>88%</strong></div>
        <div class="metric-card"><span class="card-label">Confidence</span><strong>Data kuat</strong></div>
      </div>
      <div class="evidence-list">
        <article class="evidence-card">
          <h3 class="card-title">Fasilitas harian tersedia</h3>
          <p class="card-text">Sinyal fiktif menunjukkan kebutuhan dasar dapat dijangkau tanpa perjalanan panjang.</p>
        </article>
        <article class="evidence-card">
          <h3 class="card-title">Kualitas fasilitas belum dinilai</h3>
          <p class="card-text">Mini Check hanya menilai ketersediaan awal, bukan kualitas detail fasilitas.</p>
        </article>
      </div>
    </aside>
  </div>
</section>

<section id="environment" class="report-section" data-section="environment" tabindex="-1">
  <div class="category-layout">
    <article class="panel category-map-panel">
      <span class="eyebrow">Environment</span>
      <h2 class="section-title">Kualitas lingkungan</h2>
      <p class="lead">Tidak ada red flag kritis terkonfirmasi, tetapi beberapa kondisi lingkungan tetap perlu dicek langsung.</p>
      <div class="map-preview" role="img" aria-label="Ilustrasi kondisi lingkungan sekitar kandidat lokasi">
        <div class="map-label">Validasi lapangan: kebisingan, bau, aktivitas malam, dan keamanan jalan.</div>
      </div>
    </article>
    <aside class="panel category-summary-panel">
      <span class="card-label">Temporary category score</span>
      <div class="score-number">72<span>/100</span></div>
      <span class="score-pill status-warning">Layak dengan catatan</span>
      <div class="metric-grid" style="margin-top: 18px">
        <div class="metric-card"><span class="card-label">Coverage</span><strong>66%</strong></div>
        <div class="metric-card"><span class="card-label">Confidence</span><strong>Perlu validasi</strong></div>
      </div>
      <div class="evidence-list">
        <article class="evidence-card">
          <h3 class="card-title">Tidak ada red flag kritis terkonfirmasi</h3>
          <p class="card-text">Data awal tidak menunjukkan TPA, SUTET, atau industri berat yang langsung berdekatan.</p>
        </article>
        <article class="evidence-card">
          <h3 class="card-title">Coverage terbatas</h3>
          <p class="card-text">Kebisingan, bau, dan keamanan malam harus dicek langsung karena sulit dipastikan dari desk research.</p>
        </article>
      </div>
    </aside>
  </div>
</section>
```

- [ ] **Step 3: Verify category pages**

Run:

```bash
python3 -m http.server 8000 --directory apps/website
```

Open `http://localhost:8000/mini-check-dashboard.html`.

Expected:
- Overview shows location, findings, score, recommendation, and decision gate.
- Each category page shows map preview, score, coverage, confidence, and evidence cards.
- Content is clearly fictional and customer-facing.

- [ ] **Step 4: Commit section content**

```bash
git add apps/website/mini-check-dashboard.html
git commit -m "feat: add mini check dashboard content"
```

## Task 4: Add Methodology Workspace

**Files:**
- Modify: `apps/website/mini-check-dashboard.html`

- [ ] **Step 1: Replace the empty Methodology section**

Replace:

```html
<section id="methodology" class="report-section" data-section="methodology" tabindex="-1"></section>
```

with:

```html
<section id="methodology" class="report-section" data-section="methodology" tabindex="-1">
  <div class="section-stack">
    <article class="panel method-panel">
      <span class="eyebrow">Methodology</span>
      <h2 class="section-title">Cara skor Mini Check dihitung</h2>
      <p class="lead">
        Bagian ini menunjukkan formula, bobot kategori, kontribusi skor, coverage, confidence, dan batasan Mini Check.
      </p>
      <div class="formula-box">
        RLS = (Banjir × 0,30) + (Commute × 0,25) + (Akses × 0,15) + (Fasilitas × 0,15) + (Lingkungan × 0,15)
      </div>
      <div class="method-table-wrap">
        <table class="method-table">
          <caption style="text-align:left; font-weight:800; margin-bottom:10px">Kontribusi skor kategori</caption>
          <thead>
            <tr>
              <th>Kategori</th>
              <th>Skor</th>
              <th>Bobot</th>
              <th>Kontribusi</th>
              <th>Coverage</th>
              <th>Confidence</th>
            </tr>
          </thead>
          <tbody>
            <tr><td>Ketahanan banjir</td><td>56</td><td>30%</td><td>16,8</td><td>75%</td><td>Data sedang</td></tr>
            <tr><td>Efisiensi commute</td><td>76</td><td>25%</td><td>19,0</td><td>84%</td><td>Data kuat</td></tr>
            <tr><td>Akses fisik dan jalan</td><td>60</td><td>15%</td><td>9,0</td><td>78%</td><td>Data sedang</td></tr>
            <tr><td>Fasilitas esensial</td><td>82</td><td>15%</td><td>12,3</td><td>88%</td><td>Data kuat</td></tr>
            <tr><td>Kualitas lingkungan</td><td>72</td><td>15%</td><td>10,8</td><td>66%</td><td>Perlu validasi</td></tr>
          </tbody>
          <tfoot>
            <tr><td><strong>Total</strong></td><td></td><td>100%</td><td><strong>67,9 ≈ 68</strong></td><td></td><td></td></tr>
          </tfoot>
        </table>
      </div>
    </article>

    <div class="metric-grid">
      <article class="panel method-panel">
        <span class="card-label">Interpretasi skor</span>
        <p class="card-text"><strong>80-100:</strong> Relatif kuat</p>
        <p class="card-text"><strong>65-79,99:</strong> Layak dengan catatan</p>
        <p class="card-text"><strong>50-64,99:</strong> Hati-hati</p>
        <p class="card-text"><strong>&lt;50:</strong> Risiko tinggi atau perlu validasi kuat</p>
      </article>
      <article class="panel method-panel">
        <span class="card-label">Batasan Mini Check</span>
        <p class="card-text">
          Mini Check memakai parameter prioritas untuk screening awal. Missing evidence tidak dianggap netral atau baik.
          Hasil ini bukan legal due diligence, inspeksi bangunan, atau jaminan lokasi bebas risiko.
        </p>
      </article>
    </div>
  </div>
</section>
```

- [ ] **Step 2: Verify score math**

Manually check:

```text
16.8 + 19.0 + 9.0 + 12.3 + 10.8 = 67.9
```

Expected:
- Total contribution rounds to the displayed `68/100`.
- Category weights total `100%`.
- The Methodology section states Mini Check limitations.

- [ ] **Step 3: Commit methodology**

```bash
git add apps/website/mini-check-dashboard.html
git commit -m "feat: add mini check scoring methodology"
```

## Task 5: Implement Read-Only Section Navigation

**Files:**
- Create: `apps/website/mini-check-dashboard.js`

- [ ] **Step 1: Add navigation behavior**

Create `apps/website/mini-check-dashboard.js`:

```js
const navButtons = Array.from(document.querySelectorAll("[data-section-target]"));
const sections = Array.from(document.querySelectorAll("[data-section]"));

function activateSection(sectionId, shouldFocus = true) {
  sections.forEach((section) => {
    section.classList.toggle("is-active", section.dataset.section === sectionId);
  });

  navButtons.forEach((button) => {
    const isActive = button.dataset.sectionTarget === sectionId;
    button.classList.toggle("is-active", isActive);
    button.setAttribute("aria-current", isActive ? "page" : "false");
  });

  const activeSection = sections.find((section) => section.dataset.section === sectionId);
  if (activeSection && shouldFocus) activeSection.focus({ preventScroll: false });
}

navButtons.forEach((button) => {
  button.addEventListener("click", () => {
    activateSection(button.dataset.sectionTarget);
  });
});

document.addEventListener("keydown", (event) => {
  if (!["ArrowLeft", "ArrowRight"].includes(event.key)) return;
  const activeIndex = navButtons.findIndex((button) => button.classList.contains("is-active"));
  if (activeIndex === -1) return;
  event.preventDefault();
  const offset = event.key === "ArrowRight" ? 1 : -1;
  const nextIndex = (activeIndex + offset + navButtons.length) % navButtons.length;
  navButtons[nextIndex].focus();
  activateSection(navButtons[nextIndex].dataset.sectionTarget, false);
});

activateSection("overview", false);
```

- [ ] **Step 2: Verify navigation**

Run:

```bash
python3 -m http.server 8000 --directory apps/website
```

Open `http://localhost:8000/mini-check-dashboard.html`.

Expected:
- Clicking each nav item shows the matching section and hides the others.
- Active nav item is visually marked.
- Right and left arrow keys move between sections after a nav button is focused.
- No forms, uploads, or editing controls appear.

- [ ] **Step 3: Commit JS navigation**

```bash
git add apps/website/mini-check-dashboard.js
git commit -m "feat: add mini check dashboard navigation"
```

## Task 6: Update README and Verify End-to-End

**Files:**
- Modify: `apps/website/README.md`

- [ ] **Step 1: Add dashboard prototype documentation**

In `apps/website/README.md`, after the existing HTML Prototype section, add:

```markdown
## Mini Check Dashboard Prototype

`mini-check-dashboard.html` is a read-only customer-facing prototype for visualizing a fictional Mini Check report.

It uses:

- Category Explorer navigation
- finding-led Overview
- map-led category evidence pages
- dedicated Methodology workspace
- the existing Rumper landing-page visual style

Run locally:

```bash
python3 -m http.server 8000 --directory apps/website
```

Then open `http://localhost:8000/mini-check-dashboard.html`.
```

- [ ] **Step 2: Run static verification**

Run:

```bash
python3 -m http.server 8000 --directory apps/website
```

Verify in browser:
- `http://localhost:8000/mini-check-dashboard.html` loads.
- Desktop width around `1440px` shows sidebar and two-column dashboard panels.
- Tablet width around `768px` stacks panels and keeps navigation usable.
- Mobile width around `375px` shows one-column content, horizontal navigation, and 44px touch targets.
- Overview starts with location and findings.
- Category pages are map-led.
- Methodology exposes the formula, weights, contribution table, coverage, confidence, and limitation.
- Fictional sample status is visible.

- [ ] **Step 3: Run file checks**

Run:

```bash
git diff --check
```

Expected:

```text
No output
```

- [ ] **Step 4: Commit docs and final verification**

```bash
git add apps/website/README.md
git commit -m "docs: document mini check dashboard prototype"
```

## Self-Review Checklist

- Spec coverage:
  - Customer-facing read-only dashboard: Tasks 1, 3, and 5.
  - Category Explorer IA: Tasks 1 and 5.
  - Finding-led Overview: Task 3.
  - Map-led category pages: Tasks 2 and 3.
  - Full scoring transparency in Methodology: Task 4.
  - Existing landing-page visual style: Task 2.
  - Mobile readability and accessibility: Tasks 1, 2, 5, and 6.
- Clarity scan:
  - All implementation instructions are concrete and specific.
- Type and selector consistency:
  - JS uses `[data-section-target]` and `[data-section]`, matching the HTML shell.
  - Section IDs and nav target values match exactly: `overview`, `flood`, `commute`, `access`, `amenities`, `environment`, `methodology`.
  - CSS classes referenced by HTML are defined in Task 2.
