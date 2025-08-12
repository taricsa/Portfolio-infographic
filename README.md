### Professional Infographic — Next.js template

Minimal, PWA-ready, and editable “professional infographic” page with optional AI AMA and intro-email generator. Built for non-coders: all content lives in JSON files, editable directly in GitHub.
[![Watch the video](https://img.youtube.com/vi/Pgb5YKe7TaE/maxresdefault.jpg)](https://youtu.be/Pgb5YKe7TaE)
---

## Overview
- **What it is**: A Next.js template for building a personal “professional infographic” page with AI-powered AMA and intro-email generator.
- **Who it’s for**: Non-coders and makers who want a beautiful, editable, and performant site with minimal friction.
- **Tech**: Next.js 15+ (App Router, Server Components by default), TypeScript (strict), Tailwind CSS, shadcn/ui, pnpm, PWA-ready.

## Features
- **Core sections**: Career Goal, Who I Am, Core Strengths, Proven Impact (KPIs), Ideal Industry Focus, How You Can Help (CTA), The Culture I Want to Build (Must-Haves/Must-Nots).
- **AI tools (optional)**: AMA and Intro Email generator (Gemini). Auto-hidden if no API key is set.
- **Theming**: Tailwind-based, gradient accents, dark-first design.
- **Accessibility**: Headless UI Dialog with scrollable content and keyboard navigation.
- **PWA**: Manifest, icons, offline-ready (optional).
- **SEO**: Metadata, sitemap, OpenGraph.

## Quickstart (no-code)
- **One‑click deploy**:
  
  [Deploy with Vercel](https://vercel.com/new/clone?repository-url=https%3A%2F%2Fgithub.com%2Fyour-username%2Fprofessional-infographic&project-name=professional-infographic&repository-name=professional-infographic)

- **GitHub fork path**:
  - Click “Use this template” on GitHub.
  - Edit text by updating JSON files directly in GitHub under `data/` (no local dev required).
  - Set environment variables in Vercel Project → Settings → Environment Variables.

- **Local (optional)**:
  - Prereqs: Node 18+, pnpm
  - Commands:
    - `pnpm install`
    - `pnpm dev`
    - `pnpm build && pnpm start`

## Installation
- Require pnpm
  - `pnpm i`
  - `pnpm dev`
- Do not use npm/yarn to avoid lockfile conflicts.

## Configuration
All editable content lives in JSON files so non-coders can edit via GitHub UI.

Recommended files:
- `data/site.json` — site-wide settings (name, title, description, accent colors, toggles).
- `data/resume-context.json` — source-of-truth for AMA/email prompts.
- `data/strengths.json` — array of strengths.
- `data/metrics.json` — KPI cards for “Proven Impact”.
- `data/industries.json` — list of industry focus cards.
- `data/values.json` — mustHaves and mustNots lists.

### What to edit

| Section | File | Keys |
|---|---|---|
| Career Goal | `data/site.json`, `data/resume-context.json` | `title`, `description`, `summary` |
| Who I Am | `data/site.json`, `data/resume-context.json` | `name`, `description`, `summary` |
| Core Strengths | `data/strengths.json` | Array of `{ title, description }` |
| Proven Impact (KPIs) | `data/metrics.json` | Array of `{ value, label, note }` |
| Ideal Industry Focus | `data/industries.json` | Array of `{ title, description }` |
| How You Can Help (CTA) | `data/site.json` | `cta.enableIntroButton`, `cta.introButtonLabel` |
| The Culture I Want to Build | `data/values.json` | `mustHaves[]`, `mustNots[]` |
| AI: AMA & Intro Email | `data/site.json`, `data/resume-context.json` | `ai.enableAma`, `ai.enableIntroEmail`, resume context |

### `data/site.json` (example)
```json
{
  "name": "Your Name",
  "title": "Human-Centered Systems Leader",
  "description": "Brief tagline goes here.",
  "accent": {
    "gradientFrom": "#004AAD",
    "gradientTo": "#24CCFF"
  },
  "ai": {
    "enableAma": true,
    "enableIntroEmail": true
  },
  "cta": {
    "enableIntroButton": true,
    "introButtonLabel": "Draft a Warm Intro Email"
  }
}
```

### `data/resume-context.json` (schema)
```json
{
  "summary": "string",
  "skills": {
    "productLeadership": ["string"],
    "technicalAcumen": ["string"],
    "executiveLeadership": ["string"]
  },
  "experience": [
    {
      "title": "string",
      "company": "string",
      "period": "string",
      "description": "string"
    }
  ],
  "education": [
    { "degree": "string", "school": "string", "year": "string" }
  ],
  "certifications": ["string"],
  "projects": [
    { "name": "string", "description": "string" }
  ]
}
```

### `data/strengths.json` (example)
```json
[
  {
    "title": "Architecting Operating Systems",
    "description": "Design bespoke systems that reduce friction and increase clarity."
  },
  {
    "title": "Strategy to Execution",
    "description": "Translate strategy into roadmaps and OKRs that empower teams."
  }
]
```

### `data/metrics.json` (example)
```json
[
  { "value": "+38%", "label": "ARR Uplift", "note": "AI-led initiatives at Vendasta" },
  { "value": "+32%", "label": "Sales Conversion", "note": "AI-driven Lead Scoring" },
  { "value": "10,000+", "label": "Paying Users", "note": "Scaled ClickSitter from 0-to-1" }
]
```

### `data/industries.json` (example)
```json
[
  { "title": "EdTech", "description": "Democratize learning and unlock human potential." },
  { "title": "HealthTech", "description": "Improve access to care and patient outcomes." },
  { "title": "FinTech for Wellness", "description": "Foster financial security and reduce stress." },
  { "title": "Sustainability", "description": "Solve critical environmental challenges." }
]
```

### `data/values.json` (example)
```json
{
  "mustHaves": [
    "Autonomy & outcome-driven work",
    "Radical candor & trust",
    "Empowered leadership",
    "Inclusive & high-performing teams",
    "Efficient systems & deep work"
  ],
  "mustNots": [
    "Micromanagement & feature factories",
    "Gossip & lack of accountability",
    "Rigid, top-down structures",
    "\"Bro culture\" & in-groups",
    "Performative culture"
  ]
}
```

## Environment Variables
- Required only if AI features are enabled

```bash
NEXT_PUBLIC_GEMINI_API_KEY=your_key_here
```

- Create `.env.local` for local dev and add the same key in Vercel project settings.
- If the key is missing, the AI features are automatically hidden/disabled.

## Theming and Styling
- Tailwind CSS for all styling with utility classes.
- Change accent gradient: update `data/site.json` → `accent.gradientFrom` and `accent.gradientTo`.
- Fonts: configure via Tailwind and Next/font.
- Components: use shadcn/ui for primitives. To add more components later:

```bash
pnpm dlx shadcn@latest add button input card textarea dialog
```

## Accessibility
- Headless UI Dialogs with backdrop behind the scroll container.
- Use `overflow-y-auto` containers and `max-h-[70vh]` panel content to enable scrolling.
- Keyboard: ESC to close, Tab/Shift+Tab to navigate; ensure focus outlines and color contrast.

## PWA
- Files included:
  - `public/manifest.webmanifest`
  - `public/icons/icon-192.svg`, `public/icons/icon-512.svg`, `public/icons/maskable.svg`
- Verify installability with Lighthouse (Chrome DevTools → Lighthouse → PWA).
- Replace icons by dropping new SVG/PNGs into `public/icons/` and updating the manifest if sizes/types change.

## SEO
- Metadata strategy: set title/description from `data/site.json` and expose OpenGraph tags.
- Sitemap: recommended `next-sitemap` with scripts (see example below) or custom `app/sitemap.ts`.
- Social preview image: place your image under `public/og-image.png` and wire it in metadata.

```json
// next-sitemap.config.js (example)
{
  "siteUrl": "https://your-domain.com",
  "generateRobotsTxt": true
}
```

## Content Editing (non-coders)
1. Go to GitHub → `data/` → edit JSON files → commit.
2. Vercel redeploys automatically from your main branch.

## AI Features (optional)
- Get a Gemini API key: create a key in your Google AI Studio account.
- Paste it in Vercel Project Settings or in `.env.local` as `NEXT_PUBLIC_GEMINI_API_KEY`.
- Privacy: prompts are generated from `data/resume-context.json`.
- Disable AI: set `ai.enableAma` and/or `ai.enableIntroEmail` to `false` in `data/site.json`, or simply don’t set the API key.

## Deployment
- Vercel recommended.
  - Build command: `pnpm build`
  - Install command: `pnpm install`
  - Output: Next.js (default)
- Self-host:
  - `pnpm build && pnpm start`

## Scripts
- `pnpm dev` — run locally
- `pnpm build` — production build
- `pnpm start` — serve production
- `pnpm lint` — ESLint
- `pnpm format` — Prettier

## Quality and Tooling
- TypeScript strict mode.
- ESLint and Prettier recommended.
- Optional: lightweight Playwright tests for modals and keyboard navigation.

## Contributing
Please read `CONTRIBUTING.md` and `CODE_OF_CONDUCT.md`.

## Troubleshooting
- Missing API key → AI buttons hidden.
- Build fails on Vercel → ensure Node 18+ and pnpm are used.
- Styles not applied → ensure Tailwind content paths are correct.

## License
MIT — see `LICENSE` for details.


