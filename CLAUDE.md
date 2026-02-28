# CLAUDE.md — Tyler Dial Portfolio Website

## Project Overview

Personal portfolio website for Tyler Dial — AI Engineer, Product Developer, and Social Impact Data Scientist. Built with a workoholics.es-inspired aesthetic featuring scroll-linked animations, dark/light section contrast, and editorial typography.

**Live site:** Deployed via Vercel
**Repo:** https://github.com/tylerdial1818/tyler-portfolio-website

## Tech Stack

- **Framework:** Next.js 16 (App Router, TypeScript strict mode)
- **React:** 19.2.3
- **Styling:** Tailwind CSS v4 (`@import "tailwindcss"` — no tailwind.config, uses `@theme inline` in globals.css)
- **Animations:** Framer Motion 12 + custom requestAnimationFrame scroll animations
- **Blog:** MDX via next-mdx-remote/rsc + gray-matter for frontmatter
- **Fonts:** PP Neue Montreal (local, 4 weights) + Albert Sans & DM Sans (Google Fonts)

## Quick Reference

```bash
npm run dev      # Start dev server (localhost:3000)
npm run build    # Production build
npm run start    # Serve production build
npm run lint     # ESLint
```

## Project Structure

```
src/
├── app/                    # Next.js App Router pages
│   ├── layout.tsx          # Root layout (Google Fonts, metadata)
│   ├── page.tsx            # Homepage — assembles all sections
│   ├── globals.css         # Design tokens, animations, component styles
│   ├── about/page.tsx      # Standalone About page
│   ├── projects/page.tsx   # Standalone Projects page
│   ├── books/page.tsx      # Books page (tabbed: Hall of Fame, Academic, by year)
│   └── blog/
│       ├── page.tsx        # Blog index (server component)
│       └── [slug]/page.tsx # Dynamic MDX blog posts (server component)
├── components/             # React components (all "use client" unless noted)
│   ├── Navigation.tsx      # Fixed nav with scroll-triggered reveal + route links
│   ├── ScrollLogo.tsx      # "Tyler Dial." shrinks from hero heading → nav logo on scroll
│   ├── ScrollPortrait.tsx  # Portrait grows from small circle → full size on scroll
│   ├── Hero.tsx            # Landing spacer + typed text + "AI for Humanity" heading
│   ├── Marquee.tsx         # Infinite scrolling skills ticker
│   ├── Projects.tsx        # Selected Work section (dark theme)
│   ├── About.tsx           # About section with skills table
│   ├── Books.tsx           # Currently reading + recently read
│   ├── Blog.tsx            # Recent blog posts list
│   ├── CTA.tsx             # Connect section with LinkedIn + social links
│   ├── Footer.tsx          # Copyright + live clock
│   ├── FadeIn.tsx          # Framer Motion scroll-reveal wrapper (Intersection Observer)
│   ├── TypedText.tsx       # Character-by-character typing animation
│   ├── StarRating.tsx      # 5-star book rating display
│   ├── CustomCursor.tsx    # Desktop-only cursor effect
│   └── LoadingScreen.tsx   # Loading animation (not used on homepage)
├── data/                   # Static data (no CMS/database)
│   ├── projects.ts         # 4 featured projects with metrics + gradients
│   ├── skills.ts           # Skill categories + marquee items
│   ├── blog.ts             # Blog post metadata
│   ├── books.ts            # Currently reading + recently read
│   └── books-complete.ts   # Full reading history 2021–2026 (291 lines)
├── content/blog/           # MDX blog posts (3 published)
└── lib/mdx.ts              # MDX file loading + frontmatter parsing
```

## Architecture & Patterns

### Styling

Tailwind v4 with CSS custom properties. Design tokens live in `globals.css`:

| Token | Value | Usage |
|-------|-------|-------|
| `--white` | `#ffffff` | Light backgrounds |
| `--ink` | `#0a0a0a` | Text, dark backgrounds |
| `--accent` | `#3b82f6` | Blue accent (links, labels) |
| `--muted` | `rgba(10,10,10,0.4)` | Muted text on light bg |
| `--muted-dark` | `rgba(255,255,255,0.4)` | Muted text on dark bg |
| `--rule` / `--rule-dark` | 10% opacity lines | Borders/dividers |
| `--bg-light` | `#f9f8f5` | Warm off-white sections |

**Important:** Tailwind utility classes for margin/spacing (e.g. `mb-24`) do not reliably apply in this Tailwind v4 setup. Use inline `style={{ marginBottom: "Xrem" }}` for spacing that must take effect.

### Scroll Animations

`ScrollLogo` and `ScrollPortrait` use direct DOM manipulation via refs + `requestAnimationFrame` for 60fps performance. They share a scroll threshold of `vh * 0.6` (60% of viewport height).

- **ScrollLogo:** Fixed position, interpolates font-size/position from hero center → nav top-left
- **ScrollPortrait:** Three phases — grow (0→0.6vh), settle (0.6vh→vh), stay fixed then fade out
- **Navigation:** Nav links and background fade in at 85% of the scroll threshold

These components coordinate via matching scroll thresholds — if you change one, update the others.

### Section Theming

Sections alternate between light and dark themes:
- **Light sections** (Hero, About, Blog): `--white` or `--bg-light` background, `--ink` text
- **Dark sections** (Projects, Books, CTA): `--ink` background, `#fff` text, use `rgba(255,255,255,0.7)` for secondary text

### Component Conventions

- All interactive components are `"use client"`
- Blog pages (`/blog`, `/blog/[slug]`) are server components
- `FadeIn.tsx` (exported as `Reveal`) wraps content for scroll-triggered fade-in via Framer Motion `useInView`
- Navigation uses `Link` from `next/link` for route links, `button` + `scrollIntoView` for same-page scroll targets
- Page padding uses `clamp(2rem, 7vw, 7rem)` stored as `const px` in each section component

### Data Layer

All data is static TypeScript files in `src/data/`. No CMS, no database, no API routes. Blog content is MDX files in `src/content/blog/` parsed at build time.

### Homepage z-index Stacking

The homepage has a layered z-index system for the scroll animations:

| Element | z-index | Notes |
|---------|---------|-------|
| Navigation bar | 100 | Always on top |
| ScrollLogo | 101 | Above nav during animation |
| ScrollPortrait | 99 → 10 | Drops after animation so sections cover it |
| Post-hero sections wrapper | 20 | Covers the fixed portrait as they scroll up |
| Mobile nav overlay | 99 | Full-screen menu |

## Code Style

- TypeScript strict mode — no `any` types
- Inline styles for dynamic/computed values, Tailwind classes for static utility styling
- Easing function used throughout: `cubic-bezier(0.16, 1, 0.3, 1)` — smooth deceleration
- Responsive sizing via `clamp(min, preferred, max)` — avoid fixed breakpoints where possible
- Grid layouts with `repeat(auto-fit, minmax(Xpx, 1fr))` for responsive grids

## Git Workflow

- `main` is the production branch
- Feature branches use descriptive prefixes (e.g. `hp-transitions`, `books-page-standalone`)
- PRs merge feature branches into main
- Do not force-push to main

## Common Tasks

### Adding a new project
Edit `src/data/projects.ts` — add a `Project` object with title, tags, desc, metric, metricLabel, gradient.

### Adding a blog post
1. Create `src/content/blog/your-slug.mdx` with frontmatter (title, date, tag, description, published)
2. Add metadata to `src/data/blog.ts`
3. `published: true` in frontmatter gates visibility

### Adding a book
Edit `src/data/books.ts` (for homepage display) or `src/data/books-complete.ts` (for the full books page).

### Changing design tokens
Edit CSS custom properties in `src/app/globals.css` under `:root` and the `@theme inline` block.
