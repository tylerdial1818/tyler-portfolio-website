# CLAUDE.md — Tyler Dial Portfolio Website

## Project Overview

Personal portfolio website for Tyler Dial, a data scientist and AI engineer. Single-page
scrolling design with a separate blog section. Styled after high-end agency sites
(workoholics.es inspiration). Features scroll-driven animations, a typed text hero,
rotating descriptions, book-spine cards, and Framer Motion reveal-on-scroll throughout.

---

## Tech Stack (exact versions from package.json)

| Package               | Version       |
| --------------------- | ------------- |
| next                  | 16.1.6        |
| react / react-dom     | 19.2.3        |
| framer-motion         | ^12.33.0      |
| gray-matter           | ^4.0.3        |
| next-mdx-remote       | ^5.0.0        |
| tailwindcss           | ^4            |
| @tailwindcss/postcss  | ^4            |
| typescript            | ^5            |
| eslint                | ^9            |
| eslint-config-next    | 16.1.6        |

- **Tailwind v4** — uses `@import "tailwindcss"` and `@theme inline` in globals.css (no `tailwind.config.ts`)
- **PostCSS** config is in `postcss.config.mjs` using `@tailwindcss/postcss`
- **Path alias**: `@/*` → `./src/*` (tsconfig.json)

---

## File Tree

```
tyler-portfolio-website/
├── public/
│   ├── fonts/
│   │   ├── PPNeueMontreal-Bold.otf
│   │   ├── PPNeueMontreal-Light.otf
│   │   ├── PPNeueMontreal-Medium.otf
│   │   └── PPNeueMontreal-Regular.otf
│   ├── images/
│   │   └── portrait.jpg
│   ├── file.svg
│   ├── globe.svg
│   ├── next.svg
│   ├── vercel.svg
│   └── window.svg
├── src/
│   ├── app/
│   │   ├── blog/
│   │   │   ├── [slug]/
│   │   │   │   └── page.tsx          # Individual blog post (SSG with MDXRemote)
│   │   │   └── page.tsx              # Blog index listing
│   │   ├── favicon.ico
│   │   ├── globals.css               # All design tokens, @font-face, keyframes, utility classes
│   │   ├── layout.tsx                # RootLayout — loads Albert Sans + DM Sans from Google Fonts
│   │   └── page.tsx                  # Homepage — "use client", assembles all sections
│   ├── components/
│   │   ├── About.tsx                 # About + skills toolkit grid
│   │   ├── Blog.tsx                  # Blog preview section on homepage
│   │   ├── Books.tsx                 # Book shelf (spines + recently-read list)
│   │   ├── CTA.tsx                   # "Let's connect" call-to-action + social links
│   │   ├── CustomCursor.tsx          # Custom cursor ring+dot (desktop only, unused in page.tsx)
│   │   ├── FadeIn.tsx                # <Reveal> component — Framer Motion scroll-triggered fade-up
│   │   ├── Footer.tsx                # Copyright + live clock
│   │   ├── Hero.tsx                  # Hero section: TypedText tagline, large heading, RotatingText
│   │   ├── LoadingScreen.tsx         # Animated loading screen (unused in page.tsx)
│   │   ├── Marquee.tsx              # Infinite horizontal scroll ticker
│   │   ├── Navigation.tsx           # Fixed top nav — shows on scroll, mobile hamburger
│   │   ├── Projects.tsx             # Project cards grid with gradient backgrounds + metrics
│   │   ├── ScrollLogo.tsx           # "Tyler Dial." logo that shrinks from hero-center → nav corner
│   │   ├── ScrollPortrait.tsx       # Portrait image that grows/moves on scroll then fades
│   │   ├── StarRating.tsx           # Star rating display (unused — Books.tsx uses inline stars)
│   │   └── TypedText.tsx            # Typewriter effect with blinking cursor
│   ├── content/
│   │   └── blog/
│   │       ├── bayesian-optimization-visual-guide.mdx
│   │       ├── duckdb-wasm-dashboards.mdx
│   │       └── notebooks-production-ml.mdx
│   ├── data/
│   │   ├── blog.ts                  # blogPosts[] — title, tag, date, slug
│   │   ├── books.ts                 # currentlyReading[] + recentlyRead[] with ratings
│   │   ├── projects.ts             # projects[] — title, tags, desc, metric, gradient
│   │   └── skills.ts               # skills[] (label/value pairs) + marqueeItems[]
│   └── lib/
│       └── mdx.ts                   # getAllPosts() + getPostBySlug() — reads src/content/blog/*.mdx
├── eslint.config.mjs
├── next-env.d.ts
├── next.config.ts                   # Empty (default Next config)
├── package.json
├── postcss.config.mjs
└── tsconfig.json
```

---

## Homepage Sections (scroll order)

The homepage is `src/app/page.tsx` ("use client"). Sections render in this order:

| #  | Section             | Component / File                      | Anchor ID     | Background          |
| -- | ------------------- | ------------------------------------- | ------------- | ------------------- |
| 0  | Scroll Logo         | `ScrollLogo.tsx` (fixed overlay)      | —             | transparent (fixed) |
| 0  | Scroll Portrait     | `ScrollPortrait.tsx` (fixed overlay)  | —             | transparent (fixed) |
| 0  | Navigation          | `Navigation.tsx` (fixed top bar)      | —             | transparent → white |
| 1  | Hero                | `Hero.tsx` (two `<section>`s)         | `#hero`       | `var(--white)` / `#ffffff`      |
| 2  | Marquee             | `Marquee.tsx`                         | —             | inherited (white bg) |
| 3  | Projects            | `Projects.tsx`                        | `#projects`   | `var(--ink)` / `#0a0a0a`       |
| 4  | About               | `About.tsx`                           | `#about`      | inherited (white bg) |
| 5  | Books               | `Books.tsx`                           | `#books`      | `var(--ink)` / `#0a0a0a`       |
| 6  | Blog                | `Blog.tsx`                            | `#blog`       | inherited (white bg) |
| 7  | CTA                 | `CTA.tsx`                             | `#connect`    | `var(--ink)` / `#0a0a0a`       |
| 8  | Footer              | `Footer.tsx`                          | —             | `var(--white)` / `#ffffff`      |

Sections wrapped in a `<div style={{ position: "relative", zIndex: 20 }}>` from Marquee onward, so they scroll over the fixed ScrollPortrait.

---

## Color Palette

### CSS Custom Properties (globals.css `:root`)

| Variable          | Value                        | Usage                        |
| ----------------- | ---------------------------- | ---------------------------- |
| `--white`         | `#ffffff`                    | Page background, nav bg      |
| `--ink`           | `#0a0a0a`                    | Primary text, dark sections  |
| `--accent`        | `#3b82f6` (Tailwind blue-500)| Links, tags, typed cursor, accent dot on logo |
| `--accent-soft`   | `rgba(59, 130, 246, 0.08)`   | "Currently" badge bg         |
| `--muted`         | `rgba(10, 10, 10, 0.4)`      | Body text on light bg        |
| `--muted-dark`    | `rgba(255, 255, 255, 0.4)`   | Body text on dark bg         |
| `--rule`          | `rgba(10, 10, 10, 0.1)`      | Borders/dividers on light    |
| `--rule-dark`     | `rgba(255, 255, 255, 0.1)`   | Borders/dividers on dark     |
| `--bg-light`      | `#f9f8f5`                    | Body background (warm off-white) |

### Tailwind Theme Tokens (`@theme inline` in globals.css)

Mapped 1:1 to CSS vars above: `--color-white`, `--color-ink`, `--color-accent`,
`--color-accent-soft`, `--color-muted`, `--color-muted-dark`, `--color-rule`, `--color-rule-dark`.

Use in Tailwind classes as: `text-accent`, `bg-ink`, `border-rule`, etc.

### Project Card Gradients (src/data/projects.ts)

Each project has a unique `gradient` string used as inline `background`:
- Churn Model: `linear-gradient(135deg, #1a1a2e 0%, #16213e 50%, #0f3460 100%)`
- Sentiment Engine: `linear-gradient(135deg, #0d1117 0%, #161b22 50%, #1c2333 100%)`
- Portfolio Suite: `linear-gradient(135deg, #1a1a1a 0%, #2d2d2d 50%, #1e293b 100%)`
- Geospatial Platform: `linear-gradient(135deg, #0c1821 0%, #1b2838 50%, #0f2027 100%)`

### Book Spine Colors (src/data/books.ts)

- `#2a3444` (Designing Data-Intensive Applications)
- `#3b2d50` (The Art of Statistics)
- `#1e3d3f` (Thinking in Systems)

---

## Typography

### Fonts Loaded

1. **PP Neue Montreal** — loaded via `@font-face` in `globals.css` from `/fonts/PPNeueMontreal-*.otf`
   - Weights: 300 (Light), 400 (Regular), 500 (Medium), 700 (Bold)
   - Used as `font-family: 'PP Neue Montreal'` via `var(--font-display)` and `var(--font-body)`

2. **Albert Sans** — loaded via `next/font/google` in `layout.tsx`
   - Variable: `--font-display`
   - Weights: 300, 400, 500, 600, 700, 800

3. **DM Sans** — loaded via `next/font/google` in `layout.tsx`
   - Variable: `--font-body`
   - Weights: 300, 400, 500

**Note**: `@theme inline` in globals.css overrides `--font-display` and `--font-body` to
`"PP Neue Montreal"`, so the PP Neue Montreal `@font-face` declarations take priority over
the Google Fonts loaded in `layout.tsx`. The Google Fonts serve as system fallbacks.

### Tailwind Font Classes

- `font-display` → PP Neue Montreal (headings, labels, logo)
- `font-body` → PP Neue Montreal (body text)

### Typography Patterns

- **Section eyebrow labels**: `uppercase`, `fontSize: "0.62rem"`, `letterSpacing: "0.2em"`, `color: var(--accent)`
- **Section headings**: `font-display font-[800]` or `font-[900]`, `clamp(2.5rem, 5.5vw, 5rem)` to `clamp(3rem, 6vw, 6rem)`, `letterSpacing: "-0.04em"` to `"-0.05em"`
- **Body text**: `font-light` (300), `fontSize: "1.15rem"`, `lineHeight: 1.8-1.9`, `color: var(--muted)`
- **Tags/badges**: `fontSize: "0.7rem"`, `letterSpacing: "0.08-0.12em"`, uppercase
- **Nav links**: `text-[0.78rem]`, color `var(--accent)`

---

## Animation Patterns

### CSS Keyframes (globals.css)

| Name           | Effect                              | Usage                      |
| -------------- | ----------------------------------- | -------------------------- |
| `heroIn`       | translateY(50px) → 0, fade in      | (defined, not actively used) |
| `marquee`      | translateX(0) → translateX(-50%)    | `Marquee.tsx` infinite scroll |
| `fadeInUp`     | translateY(80px) → 0, fade in      | `.animate-fade-in-up`     |
| `fadeIn`       | opacity 0 → 1                      | `.animate-fade-in`        |
| `scaleIn`      | scale(0.95) → 1, fade in           | `.animate-scale-in`       |
| `scrollPulse`  | scaleY(1) → 0.6 → 1, pulse opacity | Scroll indicator line      |
| `blink`        | opacity blink at 50%                | TypedText cursor           |

### Stagger Delay Classes

`.delay-100` through `.delay-600` (increments of 100ms) — for use with `animate-fade-in-up` etc.

### Framer Motion (FadeIn.tsx → `<Reveal>`)

- `initial`: `{ opacity: 0, y: 50 }`
- `animate` (when in view): `{ opacity: 1, y: 0 }`
- `transition`: `duration: 1`, ease `[0.16, 1, 0.3, 1]` (custom cubic-bezier)
- Trigger: `useInView({ once: true, amount: 0.08 })`
- Accepts `delay` prop for staggering

### Scroll-Driven Animations (vanilla JS in useEffect)

- **ScrollLogo.tsx**: Logo shrinks from hero-center (10vw clamped) to nav-corner (16.8px) over
  60% of viewport height. Uses cubic ease-in-out. Controls `fontSize`, `top`, `left`, `letterSpacing`.
- **ScrollPortrait.tsx**: Portrait grows from 48px circle → 390x546px rounded rect, moves from
  corner → center → content position, then fades out. Three phases over 1 viewport height.

### CSS Transition Utility Classes (globals.css)

| Class             | Effect                                          |
| ----------------- | ----------------------------------------------- |
| `.proj-card`      | translateY(-6px) on hover, image scale(1.03)    |
| `.portfolio-item` | translateY(-16px) on hover, image scale(1.08)   |
| `.skill-row`      | Subtle background change on hover               |
| `.blog-item`      | Title → accent color, arrow slides ↗ on hover   |
| `.book-spine`     | translateY(-10px) rotate(-1.5deg) on hover      |
| `.bk-row`         | Title → accent color on hover                   |
| `.cta-btn`        | Fills ink bg, white text, wider letter-spacing   |
| `.mobile-nav`     | translateX(100%) → 0 slide-in                   |
| `.reveal`         | CSS-only scroll reveal (translateY(60px) → 0)   |
| `.text-hover-accent` | Color transitions to accent on hover          |
| `.link-glow`      | Blur glow pseudo-element on hover               |
| `.magnetic`       | Quick transform transition for magnetic effects  |

All hover transitions use `cubic-bezier(0.16, 1, 0.3, 1)` — the project's signature easing curve.

---

## Key UI Components

### `<Reveal>` (FadeIn.tsx)
Wraps any content for scroll-triggered reveal. Used in almost every section.
```tsx
<Reveal delay={0.2}>
  <h2>...</h2>
</Reveal>
```

### `<TypedText>` (TypedText.tsx)
Typewriter effect that cycles through an array of strings. Types at 80ms/char, deletes at 40ms/char,
pauses 2s between strings. Used in Hero for the tagline.
```tsx
<TypedText texts={["AI ENGINEER & PRODUCT DEVELOPER", "SOCIAL IMPACT DATA SCIENTIST"]} />
```

### `<Marquee>` (Marquee.tsx)
Infinite horizontal scroll ticker. Accepts `items: string[]` and `speed` (default 35s).
Items are repeated 4x for seamless loop.

### `<ScrollLogo>` (ScrollLogo.tsx)
Fixed-position "Tyler Dial." text that animates from large centered hero position to small
nav-corner position on scroll. Blue accent dot on the period.

### `<ScrollPortrait>` (ScrollPortrait.tsx)
Fixed portrait image with three-phase scroll animation (grow → settle → fade).
Hidden on mobile (< 768px). Uses `/images/portrait.jpg`.

### `<StarRating>` (StarRating.tsx)
Renders filled/empty star characters. `rating` prop for filled count, `max` default 5.
Currently unused — `Books.tsx` has inline star rendering.

### `<CustomCursor>` (CustomCursor.tsx)
Custom cursor with outer ring (14px, accent border) and inner dot (4px, accent fill).
Scales 2.5x on interactive elements. Desktop only (>1023px). Not imported in `page.tsx`.

### `<LoadingScreen>` (LoadingScreen.tsx)
Animated loading overlay with percentage counter and progress bar. Uses Framer Motion
`AnimatePresence`. Not imported in `page.tsx`.

---

## Data Files

### `src/data/projects.ts`
```ts
interface Project {
  title: string;
  tags: string[];      // tech stack tags displayed as pills
  desc: string;        // short description
  metric: string;      // e.g. "94%", "10k/m"
  metricLabel: string; // e.g. "accuracy", "throughput"
  gradient: string;    // CSS gradient for card background
}
```
Export: `projects: Project[]` (4 items)

### `src/data/skills.ts`
```ts
interface Skill { label: string; value: string; }
```
Exports: `skills: Skill[]` (5 rows), `marqueeItems: string[]` (6 items)

### `src/data/books.ts`
```ts
interface CurrentBook { title: string; author: string; color: string; progress: number; }
interface ReadBook { title: string; author: string; rating: number; }
```
Exports: `currentlyReading: CurrentBook[]` (3 books), `recentlyRead: ReadBook[]` (6 books)

### `src/data/blog.ts`
```ts
interface BlogPost { title: string; tag: string; date: string; slug: string; }
```
Export: `blogPosts: BlogPost[]` (3 posts) — used for homepage preview list

---

## Blog System

Two parallel systems:

1. **Homepage preview** (`Blog.tsx`): reads from `src/data/blog.ts` static array. Links to `/blog/[slug]`.
2. **Full blog pages** (`/blog` and `/blog/[slug]`): reads `.mdx` files from `src/content/blog/` using
   `src/lib/mdx.ts`. Parses frontmatter with `gray-matter`, renders with `next-mdx-remote/rsc`.

### MDX Frontmatter Schema
```yaml
title: "Post Title"
date: "2025-01-15"
tag: "Engineering"
description: "Short description for meta tags."
published: true
```

### Adding a New Blog Post
1. Create `src/content/blog/your-slug.mdx` with the frontmatter above
2. Add a matching entry to `src/data/blog.ts` → `blogPosts[]` for the homepage preview
3. Set `published: true` in frontmatter for the post to appear on `/blog`

---

## Adding a New Project

Edit `src/data/projects.ts` and add an object to the `projects` array:
```ts
{
  title: "Project Name",
  tags: ["Tech1", "Tech2"],
  desc: "One-liner description.",
  metric: "99%",
  metricLabel: "accuracy",
  gradient: "linear-gradient(135deg, #hex1 0%, #hex2 50%, #hex3 100%)",
}
```
Project cards currently use a placeholder image (`/images/portrait.jpg` at 10% opacity).
To add real screenshots, update the `<Image>` src in `Projects.tsx`.

---

## Dev Commands

```bash
npm run dev      # Start Next.js dev server (http://localhost:3000)
npm run build    # Production build
npm run start    # Start production server
npm run lint     # Run ESLint
```

---

## Deployment

- **next.config.ts** is empty (default Next.js config)
- No environment variables or `.env` files
- Ready for Vercel deployment out of the box (Next.js 16 + App Router)
- Static blog pages are generated at build time via `generateStaticParams()`

---

## Architecture Notes

- `page.tsx` (homepage) is `"use client"` — the entire homepage is client-rendered
- Blog pages (`/blog` and `/blog/[slug]`) are server components (no `"use client"`)
- All homepage section components are `"use client"` for scroll/animation hooks
- Responsive padding uses the pattern `clamp(2rem, 7vw, 7rem)` stored in local `px` const
- Max content width is `1600px` via `max-w-[1600px] mx-auto`
- Section vertical rhythm: `10rem` to `12rem` padding top/bottom
- The global easing curve is `cubic-bezier(0.16, 1, 0.3, 1)` — used in both CSS and Framer Motion
- `CustomCursor.tsx` and `LoadingScreen.tsx` exist but are not imported in the current `page.tsx`

---

## Style Conventions

- Inline `style={{}}` is heavily used alongside Tailwind classes (hybrid approach)
- CSS custom properties are referenced via `var(--name)` in inline styles
- Tailwind classes handle layout (flex, grid, position) and spacing
- Inline styles handle colors, font sizes, and animation-specific properties
- Section eyebrow/heading patterns are consistent — copy from existing sections when adding new ones
