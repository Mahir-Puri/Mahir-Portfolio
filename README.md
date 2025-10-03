# Netflix-Style Portfolio (React + TS + Tailwind)

A sleek, dark, cinematic portfolio that looks and feels like Netflix — built with React, TypeScript, Vite, Tailwind, and Framer Motion.

## Quick Start
```bash
npm install
npm run dev
```

## Features
- Cinematic, glossy UI, dark gradient background
- Horizontal carousels for projects/achievements/experience (like Netflix rows)
- Glowing, animated hover states on cards
- Click a project to open a dedicated detail page (client-side routing)
- Bio/Profile section
- "Trailer" intro via YouTube/Vimeo iframe (replace with your own link)
- Bold, interactive navigation with smooth scrolling
- Dedicated "Links Hub" (Resume, LinkedIn, GitHub, etc.)
- **Recruiter Mode** toggle: emphasizes relevant skills, featured projects, resume download, and a quick recruiter contact form
- Fully responsive, mobile-first design

## Replace Your Content
- Update **`src/data/projects.ts`** with your projects (cover image, description, tags, etc.).
- Edit **`Profile`** and **`LinksSection`** to include your bio and links.
- Replace the trailer `iframe` URL in **`Hero.tsx`** with your own.
- Put a **resume.pdf** into the **`public`** folder to power the Resume button (or update the link).

## Build
```bash
npm run build
npm run preview
```

## Tech
- React + TypeScript + Vite
- TailwindCSS
- Framer Motion (subtle entrance and hover animations)
- React Router (client-side pages for project details)

---

© 2025 Mahir — Netflix-style portfolio showcase.
