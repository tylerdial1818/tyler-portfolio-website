# Homepage Refresh Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Rebuild the homepage around the provided high-contrast editorial design handoff while preserving the existing Tyler Dial scroll-logo and portrait intro.

**Architecture:** Keep the existing Next.js component boundaries, but replace the homepage visual language and section implementations with the handoff system. Add focused motion utilities for Lenis smooth scrolling and scroll reveals, and keep the fixed intro animation isolated in `ScrollLogo` and `ScrollPortrait`.

**Tech Stack:** Next.js 16, React 19, TypeScript, Tailwind v4/global CSS, `next/image`, Framer Motion, Lenis, Playwright-driven screenshot capture for project thumbnails.

---

### Task 1: Generate Live Project Screenshots

**Files:**
- Create/update: `tyler-portfolio-website/public/images/project-ml-illustrated-live.png`
- Create/update: `tyler-portfolio-website/public/images/project-retain-live.png`
- Create/update: `tyler-portfolio-website/public/images/project-housing-pulse-live.png`
- Create/update: `tyler-portfolio-website/public/images/project-social-impact-live.png`

- [ ] Verify screenshot assets are currently missing with `test -f` commands.
- [ ] Use browser automation to capture 1440x1080 screenshots from the four live project URLs.
- [ ] Verify all four files exist and are non-empty.

### Task 2: Global Design Tokens and Motion Utilities

**Files:**
- Modify: `tyler-portfolio-website/src/app/globals.css`
- Create: `tyler-portfolio-website/src/components/SmoothScroll.tsx`
- Create: `tyler-portfolio-website/src/components/Reveal.tsx`

- [ ] Add handoff tokens: white/black, muted, line, accent `#1f3bff`, max width, pad, mono stack.
- [ ] Add reusable editorial classes for sections, labels, display headings, rows, tags, buttons, marquee, and reduced motion.
- [ ] Add Lenis smooth scrolling with cleanup and reduced-motion fallback.
- [ ] Add reveal component using Framer Motion with reduced-motion-safe visible state.

### Task 3: Preserve Intro, Refit Nav and Hero

**Files:**
- Modify: `tyler-portfolio-website/src/app/page.tsx`
- Modify: `tyler-portfolio-website/src/components/Navigation.tsx`
- Modify: `tyler-portfolio-website/src/components/Hero.tsx`
- Modify: `tyler-portfolio-website/src/components/ScrollLogo.tsx`
- Modify: `tyler-portfolio-website/src/components/ScrollPortrait.tsx`

- [ ] Keep `ScrollLogo` and `ScrollPortrait` mounted before nav/hero.
- [ ] Remove duplicate nav brand on homepage; animated logo remains the brand.
- [ ] Convert nav links to handoff mono uppercase links and section anchors.
- [ ] Keep the first full-screen spacer for the scroll runway.
- [ ] Convert post-runway hero content to editorial split copy while reserving the portrait column.

### Task 4: Rebuild Homepage Sections

**Files:**
- Modify: `tyler-portfolio-website/src/components/Marquee.tsx`
- Modify: `tyler-portfolio-website/src/components/Projects.tsx`
- Modify: `tyler-portfolio-website/src/components/About.tsx`
- Modify: `tyler-portfolio-website/src/components/Books.tsx`
- Modify: `tyler-portfolio-website/src/components/Blog.tsx`
- Modify: `tyler-portfolio-website/src/components/CTA.tsx`
- Modify: `tyler-portfolio-website/src/components/Footer.tsx`
- Modify data files only where needed for handoff copy.

- [ ] Replace one-row skills marquee with two large opposing rows.
- [ ] Build pinned horizontal selected-work track on desktop and vertical fallback under 880px/reduced motion.
- [ ] Use live screenshot images in project cards.
- [ ] Rebuild About, Books, Writing, and Contact as editorial bordered rows.
- [ ] Fold footer copy into the inverted contact section and prevent duplicate footer noise.

### Task 5: Verify

**Files:**
- No intended code edits unless verification finds issues.

- [ ] Run `npm run lint`.
- [ ] Run `npm run build`.
- [ ] Start local dev server.
- [ ] Use browser screenshots at desktop and mobile sizes.
- [ ] Verify intro scroll behavior, nav/header, screenshots, horizontal projects, mobile fallback, and contact section.

