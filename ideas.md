# David Mohammed Portfolio — Design Brief

## Three Stylistic Approaches

**Approach A — "Cyber Command Center"** (probability: 0.07)
Dark military-tech aesthetic with grid overlays and terminal-style typography. Feels like a war room dashboard.

**Approach B — "Obsidian Executive"** (probability: 0.04)
Ultra-premium dark portfolio matching Mo-Blind.com exactly — deep navy/black backgrounds, teal (#1AD1B5) and purple (#855DF6) accent gradients, sharp editorial typography. Feels like a top-tier SaaS executive's personal brand.

**Approach C — "Signal & Noise"** (probability: 0.03)
Brutalist editorial with raw typographic hierarchy, stark contrast, and monochrome with a single electric accent.

---

## Chosen Approach: B — "Obsidian Executive"

### Design Movement
Dark-mode executive portfolio inspired by Mo-Blind.com's visual language — premium SaaS meets cybersecurity professional.

### Core Principles
1. **Exact color fidelity** to Mo-Blind.com: `#0A0D14` background, `#1AD1B5` teal, `#855DF6` purple
2. **Asymmetric editorial layout** — full-width hero with left-anchored type, sidebar-style resume section
3. **Gradient text as signature** — teal-to-purple gradient on key headings mirrors Mo-Blind.com's hero
4. **Data-forward design** — stats, metrics, and achievements presented as visual callouts

### Color Philosophy
Deep navy-black (`#0A0D14`) as the canvas communicates authority and technical depth. Teal (`#1AD1B5`) signals innovation and forward motion. Purple (`#855DF6`) adds creative intelligence. Together they form a brand that is simultaneously analytical and visionary.

### Layout Paradigm
Single-page vertical scroll with sticky top navigation. Sections alternate between full-bleed dark panels and slightly lighter card grids. The resume section uses a two-column split: timeline on left, details on right.

### Signature Elements
1. Teal-to-purple gradient text on section headings
2. Glowing teal border-left on timeline entries
3. Dark glass-morphism cards with subtle teal border glow on hover

### Interaction Philosophy
Smooth scroll with section fade-in on viewport entry. Cards lift with subtle shadow on hover. Navigation highlights active section.

### Animation
- Entrance: `opacity: 0 → 1` + `translateY(20px → 0)` at 300ms ease-out, staggered 60ms per item
- Hover: card `translateY(-4px)` + teal glow shadow at 200ms
- Nav: active indicator slides with 150ms ease-out

### Typography System
- Display: **Plus Jakarta Sans** 700/800 — bold, modern, matches Mo-Blind.com
- Body: **Inter** 400/500 — clean, readable
- Mono: **JetBrains Mono** — for tech tags and code-style labels

### Brand Essence
"The AI Project Manager who ships results, not just reports." — for enterprise leaders who need a trusted technical partner.
Personality: **Authoritative. Precise. Forward-thinking.**

### Brand Voice
Headlines: Direct, metric-driven ("17 Years. 3,000 Deployments. $12M Managed.")
CTAs: Action-oriented ("Download Resume", "View on GitHub", "Connect on LinkedIn")
No filler: Never "Welcome to my portfolio" — open with impact.

### Wordmark & Logo
Geometric "DM" monogram — two overlapping angular letters forming a diamond-like mark, rendered in teal-to-purple gradient.

### Signature Brand Color
`#1AD1B5` — Mo-Blind teal. Unmistakably this brand.

---

## Style Decisions
- The **DM monogram is the primary brand mark everywhere**; Mo-Blind branding may appear only as an employer/client credential and must never dominate the hero or global identity.
- Portfolio pages should use an **executive briefing rhythm**: sparse, high-impact section openings and metric-led summaries first, with dense resume bullets reserved for the dedicated resume area.
- The signature visual motif is **angular DM/diamond geometry with teal-to-purple edge glow**, repeated consistently across hero framing, timeline accents, section dividers, and key cards.

### Original Style Decisions
- Use `Plus Jakarta Sans` + `Inter` font pairing throughout
- Gradient: `linear-gradient(135deg, #1AD1B5, #855DF6)` for headings and accents
- Background: `#0A0D14` primary, `#0D1321` secondary panels
- Cards: `rgba(255,255,255,0.03)` with `1px solid rgba(26,209,181,0.15)` border
- Hover glow: `box-shadow: 0 0 20px rgba(26,209,181,0.2)`
