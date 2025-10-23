// src/data/projects.tsx


export const projects = [
  {
    title: "UVSD — Satellite Data Backend",
    slug: "satellite-data-backend",
    cover: "/satimage.jpg",
    description:
      "Python backend that ingests radio packets, reassembles binary images, and logs telemetry reliably.",
    tags: ["Python", "PyTest", "Data Pipelines"],
    featured: true,
    link: "https://github.com/UVicSatelliteDesign/COMP_SLIP-GS",
    repo: "https://github.com/UVicSatelliteDesign/COMP_SLIP-GS",
    details: `
      <p>
        I designed and built the backend that listens to our ground-station feed, parses raw radio frames,
        and reconstructs complete images alongside time-aligned telemetry. I implemented offset-aware
        reassembly so out-of-order packets still land in the right place, and I wrote clear logs so the
        team could debug quickly after each pass. I created a predictable storage layout for images,
        CSV telemetry, and metadata so files are easy to find, and I shipped a lightweight pytest suite
        that hits edge cases before field tests. I documented setup, failure modes, and run steps so new
        contributors could get productive without hand-holding.
      </p>
    `,
  },
  {
    title: "Smart Fall Prevention System",
    slug: "smart-fall-prevention",
    cover: "/image2.jpg",
    description:
      "Flask + Raspberry Pi Pico system that detects falls in near real time; dashboard and alerts.",
    tags: ["Flask", "Raspberry Pi Pico", "MicroPython"],
    featured: true,
    details: `
      <p>
        I wired a Raspberry Pi Pico to stream sensor data and wrote a Flask service that scores events
        in real time. I built a small dashboard to visualize status and history, and I added alerts so
        responses happen quickly when thresholds are crossed. I tuned the logic with simulated falls,
        trimmed false positives, and documented the hardware–software protocol so anyone can extend it.
      </p>
    `,
  },
  {
    title: "TrafficTongue — Honking Detection",
    slug: "traffic-tongue",
    cover: "/image1.jpg",
    description:
      "Audio analysis + edge ML to classify honk types and visualize city hotspots.",
    tags: ["TensorFlow", "Python", "Embedded", "Node.js"],
    details: `
      <p>
        I built the audio capture pipeline, trained a basic classifier to separate honks from ambient
        noise, and pushed the model to run on a small device for edge testing. I prototyped a simple
        web view that shows live detections and location heatmaps so a city team could spot patterns.
      </p>
    `,
  },
  {
    title: "AI Job Applier — Resume/Cover Letter Automation",
    slug: "ai-job-applier",
    cover: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=1640&auto=format&fit=crop",
    description:
      "End-to-end application flow: tailored resumes/CLs, auto-fill, reply tracking, analytics.",
    tags: ["FastAPI", "React", "PostgreSQL", "Docker"],
    link: "https://github.com/Mahir-Puri/AI-JOB-applier-Backend",   
    repo: "https://github.com/Mahir-Puri/AI-JOB-applier-Backend",
    details: `
      <p>
        I put together a small system that generates targeted resumes and cover letters, fills common
        application forms, and tracks replies. I am adding a simple analytics view to see conversion and
        follow-ups, and I am containerizing the stack so I can run it anywhere without breaking dependencies.
      </p>
    `,
  },
  {
    title: "DevSwipe — GitHub Discovery",
    slug: "devswipe",
    cover: "/tinder.png",
    description:
      "Swipe UX to surface interesting repos quickly.",
    tags: ["Flask", "SQLite", "GitHub API", "CI/CD"],
    link: "https://github.com/Mahir-Puri/devswipe",   
    repo: "https://github.com/Mahir-Puri/devswipe",
    details: `
      <p>
        I am building a Tinder-style interface for exploring repos. I set up a small SQLite schema for saved
        picks, wired up GitHub’s API, and added simple filters so results feel relevant. I handled auth,
        sessions, and basic CI so the app stays stable as I iterate.
      </p>
    `,
  },
];

export const achievements = [
  {
    title: "Certificate of Achievement — UVic Math & Stats",
    description: "Recognized by the department.",
    cover: "https://images.unsplash.com/photo-1523580846011-d3a5bc25702b?q=80&w=1640&auto=format&fit=crop",
  },
  {
    title: "Entrance Scholarship for Academic Excellence — UVic",
    description: "Awarded on entry.",
    cover: "scholar.jpg",
  },
  {
    title: "PRAYAS Youth Impact Award",
    description: "Community service recognition.",
    cover: "https://images.unsplash.com/photo-1491438590914-bc09fcaaf77a?q=80&w=1640&auto=format&fit=crop",
  },
];

export const experiences = [
  {
    title: "Voting Information Officer — UVSS, UVIC",
    slug: "uvss-voting-officer",
    cover: "/vote.jpg",
    description:
      "Front-line election operations for 5,000+ students: records, eligibility, and turnout.",
    meta: "Mar 2025 • Victoria, BC",
    tags: ["Operations", "Customer Service", "Records"],
    details: `
      <p>
        I checked IDs, issued ballots, and reconciled counts with zero discrepancies. I kept lines
        moving during peak hours, handled eligibility questions calmly, and handed off end-of-day
        summaries so the next team always knew the status. I learned to stay steady when the room is busy.
      </p>
    `,
  },
  {
    title: "Self-Checkout Assistant — Walmart",
    slug: "walmart-self-checkout",
    cover: "/walmart.jpg",
    description:
      "Customer support across 6–12 kiosks during rush; exceptions, payments, and loss prevention.",
    meta: "Oct 2025- Present • Victoria, BC",
    tags: ["Customer Service", "POS", "Loss Prevention", "Teamwork"],
    details: `
      <p>
        I monitor multiple kiosks, clear age checks and price mismatches, and helpcustomers
        through payment or scanning issues so the lane keeps moving. I verify receipts respectfully,
        escalate issues when needed, and restock supplies to keep the area clean and fast.
      </p>
    `,
  },

  export const hackathons = [
  {
    title: "Studium — Mini Typed Language (UVEC)",
    slug: "studium-uvec",
    cover: "/studium.jpg", // put this image in /public
    description:
      "Lark (LALR) grammar → AST visitor interpreter with scoped runtime and --explain mode.",
    tags: ["Python", "Lark", "LALR", "Interpreter", "CLI"],
    details: `
      <ul>
        <li>Grammar & parsing: Lark (LALR) → parse tree → AST.</li>
        <li>Engine: visitor-based executor; scoped env, type checks.</li>
        <li>Semantics: short-circuit bools, %, int↔double coercions, friendly errors.</li>
        <li>DX: CLI + debug parse-tree; small sanity programs for fast iteration.</li>
        <li><code>--explain</code>: narrates branches, loop counts, assignments in plain language.</li>
      </ul>
    `,
    link: "https://github.com/Mahir-Puri/Studium-UVEC-2025", 
    repo: "https://github.com/Mahir-Puri/Studium-UVEC-2025", 
  },
];
