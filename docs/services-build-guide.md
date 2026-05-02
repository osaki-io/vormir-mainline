# Service Pages — Developer Guide

## Workflow (Read This First)

**Clone → Compare/Reduce → Update Copy**

When creating a new service page, follow this exact order:

1. **Clone the reference page** (`webflow.astro`) — copy all 5 component files with new names
2. **Compare & reduce** — look at the cloned components vs. what the new service actually needs. Remove sections the new page doesn't have (e.g., no FAQ, no "Our Work", no "With Every Build" prose). Keep layout, spacing, and structure identical to the reference.
3. **Build and verify** — the page compiles and renders with placeholder copy
4. **Update copy** — swap in real headings, descriptions, icons, and labels from the content doc
5. **Build again** — final verification

### Common Mistake

Skipping step 2 and copying everything blindly — including sections the new service page doesn't need. Or worse: redesigning components during step 1 instead of cloning the structure faithfully. Clone the layout first, then decide what to remove, then write copy.

---

## Quick Start

To add a new service page (e.g., `/services/hubspot`):

1. **Copy the page file**: Duplicate `src/pages/services/webflow.astro`
2. **Rename imports**: Point to your service-specific components
3. **Create components**: Copy and modify the 5 blocks in `src/components/blocks/`
4. **Update content**: Change headings, copy, icons, and labels
5. **Add route**: The file path becomes the URL automatically

---

## Page Structure

Every service page follows this exact layout:

```astro
<DefaultLayout title={`Service Name — ${SITE_TITLE}`} description={SITE_DESCRIPTION}>
  <Background className="via-muted to-muted/80">
    <ServiceHero />
    <ServiceCards />
  </Background>
  <PlatformBenefits />
  <Background variant="bottom">
    <ProcessSteps />
    <ServiceCTA />
  </Background>
</DefaultLayout>
```

### Background Wrappers

- **Top gradient** (`via-muted to-muted/80`): Wraps Hero + Services cards
- **White break**: PlatformBenefits sits outside for contrast
- **Bottom gradient** (`variant="bottom"`): Wraps Process + CTA
- The gradient transitions from white → light tint → white, creating visual sections

---

## Component Breakdown

| # | Component | File | Purpose | Reusable? |
|---|---|---|---|---|
| 1 | **ServiceHero** | `webflow-hero.tsx` | H1, subhead, breadcrumb, primary CTA | ❌ Service-specific |
| 2 | **ServiceCards** | `webflow-services.tsx` | 4-5 service offering cards | ❌ Service-specific |
| 3 | **PlatformBenefits** | `why-webflow.tsx` | 6-item icon list (why this platform) | ❌ Service-specific |
| 4 | **ProcessSteps** | `how-we-work.tsx` | 5-step horizontal grid | ✅ Copy-paste OK |
| 5 | **ServiceCTA** | `lets-talk.tsx` | H2 + 2 buttons (contact + explore work) | ✅ Copy-paste OK |

### Naming Convention

Use the service name as prefix:
- `hubspot-hero.tsx` → `HubspotHero`
- `hubspot-services.tsx` → `HubspotServices`
- `why-hubspot.tsx` → `WhyHubspot`
- Keep `how-we-work.tsx` and `lets-talk.tsx` shared if process/CTA is identical

---

## What to Change Per Service

### 1. Hero (`{service}-hero.tsx`)
- Page title (H1)
- Subheading paragraph
- Breadcrumb label
- Primary CTA button text/link

### 2. Service Cards (`{service}-services.tsx`)
- Card titles and descriptions
- Icons (from `lucide-react`)
- Links (href values)
- Usually 4-5 cards, last one can span full width if odd number

### 3. Platform Benefits (`why-{service}.tsx`)
- Section label (e.g., "WHY WEBFLOW" → "WHY HUBSPOT")
- Heading
- 6 benefit items with icons
- Keep the same layout: icon + title + one-line description

### 4. Process Steps (`how-we-work.tsx`)
- Typically reusable as-is
- Change step titles/descriptions if service workflow differs
- Keep 5 steps for consistency

### 5. CTA (`lets-talk.tsx`)
- Typically reusable as-is
- Change H2 question (e.g., "Have a Webflow project?" → "Have a HubSpot project?")
- Buttons usually stay the same: "Contact us" + "Explore our work"

---

## Copy Requirements Per Section

Based on `/services/webflow` — here's exactly what content you need for each section:

### Section 1: Hero (`{service}-hero.tsx`)

| Element | Length | Example |
|---|---|---|
| Breadcrumb label | 2-3 words | "Webflow Development" |
| H1 | 5-8 words | "Webflow sites built to convert." |
| Subheading | 1-2 sentences | "Design, development, migration, integrations, and ongoing management — from a certified Webflow partner with 100+ builds delivered." |
| Primary CTA | 2 words | "Book a call" |
| Trust badges | 2-3 items | "100+ builds", "Certified partner" |

**Rules:**
- H1 must include service name
- Subheading: problem → solution → credibility
- One primary CTA only
- Optional: secondary CTA ("View pricing", "See work")

---

### Section 2: Service Cards (`{service}-services.tsx`)

| Element | Count | Length per item |
|---|---|---|
| Cards | 4-5 | — |
| Card title | — | 2-4 words |
| Card description | — | 1 short sentence (8-12 words) |
| Card link | — | href to sub-page or # |

**Example cards:**
```
1. Design & Development
   "Custom builds around conversion. Integrations included."

2. CMS & Dynamic Content
   "Structured content management your team can publish without dev tickets."

3. Migration to Webflow
   "From WordPress, Wix, Squarespace. SEO preserved."

4. AI-Native Builds
   "AEO, structured data, AI search, and automated workflows."

5. Management & Support
   "Ongoing updates, monitoring, and team training."
```

**Rules:**
- Descriptions must fit in 2 lines on mobile
- Last card spans full width if odd number (5 cards → 2+2+1)
- Each card needs a unique icon from `lucide-react`
- Links can be `#` if sub-pages don't exist yet

---

### Section 3: Platform Benefits (`why-{service}.tsx`)

| Element | Length | Example |
|---|---|---|
| Dashed line label | 2 words uppercase | "WHY WEBFLOW" |
| H2 | 10-12 words | "Webflow is the right platform for teams that move fast." |
| Benefit items | 6 | Icon + 2-3 word title + 1 line description |

**Example benefits:**
```
1. Visual CMS
   "Publish content without dev tickets."

2. No plugins
   "Native features. No conflicts or breakage."

3. Built-in hosting
   "CDN, SSL, backups included."

4. SEO & speed
   "Clean HTML. Fast loads. No trade-offs."

5. Scales with you
   "5 pages to 500. Same workflow."

6. AI-ready
   "AEO, structured data, AI search built-in."
```

**Rules:**
- Benefits answer "why this platform?" not "what features?"
- Each description is ONE line, max 10 words
- Use periods for sentence fragments, no periods for phrases
- Mix technical and business benefits (3+3)

---

### Section 4: Process Steps (`how-we-work.tsx`)

| Element | Count | Length |
|---|---|---|
| Dashed line label | — | 2 words uppercase ("OUR PROCESS") |
| H2 | — | 3-4 words ("How We Work") |
| Subheading | — | 1 sentence |
| Steps | 5 | Number + 1 word title + 1 line description |

**Example steps:**
```
01. Discovery
    "Learn your business and audit what exists."

02. Design
    "Wireframes and visuals before any code is written."

03. Build
    "Weekly updates in Webflow. No surprises at the end."

04. Launch
    "QA, SEO, analytics. Go live with confidence."

05. Manage
    "Ongoing support or handoff with team training."
```

**Rules:**
- Generic enough to apply to most services
- Change step 3 tool name if service-specific (e.g., "in HubSpot")
- Keep titles to 1 word for visual consistency
- Descriptions max 12 words

---

### Section 5: CTA (`lets-talk.tsx`)

| Element | Length | Example |
|---|---|---|
| Dashed line label | 2 words uppercase | "LET'S TALK" |
| H2 | 6-8 words | "Have a Webflow project in mind?" |
| Subheading | 1-2 sentences | "Book a 30-minute call to talk through what you're building. Or send us a project brief and we'll come back with a plan and a quote." |
| Primary button | 2 words | "Contact us" |
| Secondary button | 3 words | "Explore our work" |

**Rules:**
- H2 must include service name
- Subheading: offer a call OR a brief (gives options)
- Primary button → `/contact`
- Secondary button → `/work`
- Keep identical across services, only change H2

---

## Total Copy Count

For one service page, you need:

- **1** H1 (hero)
- **1** hero subheading
- **4-5** card titles + descriptions
- **1** benefits H2
- **6** benefit titles + descriptions
- **1** process H2 + subheading
- **5** step titles + descriptions
- **1** CTA H2 + subheading

**≈ 25-30 pieces of copy total.**

---

## Shared Components (Don't Duplicate)

These are imported, not copied:

- `DefaultLayout` — navbar + footer
- `Background` — gradient wrapper
- `DashedLine` — section separator with label
- `Button`, `Card`, `Badge` — UI primitives
- Icons from `lucide-react`

---

## Files to Create for New Service

Example: adding `/services/hubspot`

```
src/
  pages/
    services/
      hubspot.astro          ← new page
  components/
    blocks/
      hubspot-hero.tsx       ← new
      hubspot-services.tsx   ← new
      why-hubspot.tsx        ← new
      how-we-work.tsx        ← shared (or copy if different)
      lets-talk.tsx          ← shared (or copy if different)
```

---

## Page Template (Copy-Paste)

```astro
---
import { SITE_TITLE, SITE_DESCRIPTION } from '../../consts';

import { Background } from '@/components/background';
import { ServiceHero } from '@/components/blocks/service-hero';
import { ServiceCards } from '@/components/blocks/service-cards';
import { PlatformBenefits } from '@/components/blocks/platform-benefits';
import { ProcessSteps } from '@/components/blocks/process-steps';
import { ServiceCTA } from '@/components/blocks/service-cta';
import DefaultLayout from '@/layouts/DefaultLayout.astro';
---

<DefaultLayout title={`Service Name — ${SITE_TITLE}`} description={SITE_DESCRIPTION}>
  <Background className="via-muted to-muted/80">
    <ServiceHero />
    <ServiceCards />
  </Background>
  <PlatformBenefits />
  <Background variant="bottom">
    <ProcessSteps />
    <ServiceCTA />
  </Background>
</DefaultLayout>
```

---

## Content Checklist

Before shipping a new service page:

- [ ] Hero H1 mentions the service name
- [ ] Breadcrumb shows correct path: `Services > Service Name`
- [ ] Service cards have realistic descriptions and links
- [ ] Platform benefits explain WHY this platform (not just features)
- [ ] Process steps match actual workflow
- [ ] CTA heading asks a service-specific question
- [ ] All buttons link to real pages
- [ ] Dashed line labels are visible on mobile (`max-md:hidden` removed)
- [ ] Label backgrounds match section backgrounds
- [ ] Page builds without errors (`npm run build`)

---

## Tips

- Keep copy concise — one line per card, one sentence per benefit
- Use the same 5-step process for all services unless workflow truly differs
- The CTA section can stay identical across services — just change the H2
- If a service has fewer/more offerings, adjust card grid (2-col vs spanning)
- Always test mobile — gradient sections can hide text if colors mismatch
