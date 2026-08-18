# MAHIRFLIX: Mahir Puri's Portfolio (React + TS + Tailwind)

A Netflix-inspired portfolio site: dark cinematic UI, horizontal content rows, and a Recruiter Mode for fast scanning. Built with React, TypeScript, Vite, Tailwind, and Framer Motion.

## Quick Start
```bash
npm install
npm run dev
```

## Structure
- `src/data/content.ts`: single source of truth for experience, projects, skills, education, recognition, community, and contact info. Edit copy here.
- `src/context/AppMode.tsx`: Recruiter Mode + reduced-motion state, shared via context.
- `src/components/`: section components (Hero, ExperienceSection, FeaturedProjectsSection, AdditionalProjectsSection, SkillsSection, EducationSection, CommunitySection, AboutSection, ContactSection) plus shared UI (Navbar, Carousel, Card, ProjectCover, icons, CommandPalette).
- `src/pages/`: routed detail views (`/project/:slug`, `/experience/:slug`); `/hackathon/:slug` redirects into `/project/:slug` for backward compatibility with older links.

## Features
- Cinematic dark UI with Netflix-style content rows and hover states
- Professional Experience section (cards, expandable to full detail pages)
- Featured Projects + categorized Additional Projects rows, each with a structured detail page (problem, architecture, engineering decisions, testing, outcome, what I learned)
- A hand-drawn architecture diagram on the RTPN detail page, showing the actual ledger/Kafka/dead-letter flow
- **Recruiter Mode**: condenses the page to the highest-signal content (GPA, availability, resume, and the 3 most relevant projects) and reduces decorative motion
- Command palette (press `/` or `Cmd+K` / `Ctrl+K`) for jumping to any section or project
- Per-route page titles and Open Graph tags on project and experience detail pages
- A print stylesheet, since portfolios get printed more often than you'd expect
- Build provenance (commit + build date) in the footer, sourced from git at build time
- Respects `prefers-reduced-motion`; visible keyboard focus states throughout
- Fully responsive with a mobile nav menu

## Editing Content
Almost everything on the site is driven by `src/data/content.ts`. Update experience, projects, skills, education, recognition, or contact info there rather than in individual components; the components just render it.

To add a project: add an entry to `featuredProjects` or the relevant row in `additionalProjectRows`, following the existing `Project` shape (slug, title, oneLiner, status, year, tech, github, optional demo, and a `detail` object with whichever of problem/why/architecture/decision/reliability/testing/outcome/learned actually apply). Omit fields you don't have real content for.

Put a **resume.pdf** into `public/` to power the Resume button.

## Build
```bash
npm run build
npm run preview
```

## Tech
- React + TypeScript + Vite
- TailwindCSS
- Framer Motion (entrance and hover animations, disabled under reduced motion / Recruiter Mode)
- React Router (client-side routing for project and experience detail pages)

---

© Mahir Puri, MAHIRFLIX.
