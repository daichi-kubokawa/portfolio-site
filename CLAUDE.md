# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev      # Start development server at localhost:3000
npm run build    # Production build
npm run lint     # Run ESLint
```

There are no tests in this project.

## Architecture

Next.js 16 App Router portfolio site for UI/UX designer Daichi Kubokawa. React 19, TypeScript, Tailwind CSS v4, Framer Motion.

### Pages

- `/` — Home (Hero, Works list, About preview)
- `/about` — About page (hero, strengths, skills, CTA)
- `/links` — Simple link tree page
- Work detail pages likely driven by dynamic routing under `app/works/[slug]/`

### Component organization

```
components/
  layout/          # Header, Footer — rendered in root layout
  sections/
    Top/           # Sections for the home page
    About/         # Sections for the about page
    WorkDetail/    # Sections for work case study pages
  FadeInOnScroll   # Wraps sections for scroll-triggered fade-in (Framer Motion)
  BackToTopButton  # Floating scroll-to-top button
```

Each component lives in its own folder with a co-located `.module.css` file.

### Work data system

Portfolio works are defined as typed TypeScript objects in `data/works/*.ts` and re-exported from `data/works/index.ts`. The `Work` type in `types/work.ts` is the single source of truth for the content schema:

- `WorkContent` is a discriminated union: `WorkContentText | WorkContentImage`
- `WorkSummary` holds structured metadata (role, tools, time, challenge, solution, links)
- `WorkTextValue` allows per-value font selection (`"sans"` for Japanese, `"en"` for Inter)

To add a new work: create `data/works/<slug>.ts`, export it, and add it to the `works` array in `data/works/index.ts`.

### Styling

Global CSS is imported in `app/globals.css` in this order:

1. `styles/tokens.css` — CSS custom properties (colors, spacing, typography, breakpoints)
2. `styles/base.css` — element resets and defaults
3. `styles/layout.css` — `.container` and `.containerHeader` utility classes
4. `styles/utilities.css` — shared utility classes (e.g., `fontEn`, `fontSans`)

Components use CSS Modules for scoped styles. Design tokens from `tokens.css` are used via `var(--token-name)` throughout. Tailwind is configured but design system is primarily token-based.

Breakpoints: `≤1023px` tablet, `≤767px` mobile.

### Page transitions

`app/template.tsx` wraps every page with a Framer Motion fade+slide animation. This is a Next.js `template.tsx` (not `layout.tsx`), so it re-mounts on every navigation, triggering the animation.

### Fonts & icons

Fonts are loaded in `app/fonts.ts` via `next/font/google` and applied as CSS variables:
- `--font-sans` → Noto Sans JP (Japanese body text)
- `--font-en` → Inter (English/numeric text)
- Material Symbols Outlined is loaded via a `<link>` in the root layout and used as icon font with class `material-symbols-outlined`
