// Centralized, typed content for the portfolio.
// Update copy here: components read from this file, nothing is duplicated.

export type ProjectStatus = 'Completed' | 'Ongoing' | 'Incoming'

export interface ProjectDetailSections {
  problem?: string
  why?: string
  architecture?: string
  decision?: string
  reliability?: string
  testing?: string
  outcome?: string
  learned?: string
}

export interface Project {
  slug: string
  title: string
  oneLiner: string
  status: ProjectStatus
  year: string
  category: string
  tech: string[]
  github: string | null
  demo?: string
  recruiterPriority?: boolean
  detail: ProjectDetailSections
}

export const featuredProjects: Project[] = [
  {
    slug: 'rtpn-payments-network',
    title: 'RTPN: Real-Time Payments Network Simulator',
    oneLiner:
      'A simulated real-time payments network with a double-entry ledger, a Kafka message rail, and a read-only AI agent for querying settlement state.',
    status: 'Completed',
    year: '2026',
    category: 'Featured',
    tech: ['Java', 'Spring Boot', 'Kafka', 'PostgreSQL', 'Docker'],
    github: 'https://github.com/Mahir-Puri/rtpn-payment-rail',
    recruiterPriority: true,
    detail: {
      problem:
        'Payment rails have to guarantee balance correctness even when requests arrive concurrently from multiple institutions and messages get retried.',
      why: 'I wanted to understand how real-time gross settlement systems stay consistent under concurrent load, and how message queues get used safely in financial infrastructure.',
      architecture:
        'A Spring Boot service exposes payment endpoints backed by a double-entry ledger in PostgreSQL. A Kafka message rail carries payment events between simulated institutions, with consumer retries and dead-letter handling for messages that repeatedly fail. A read-only AI operations agent built with Anthropic tool-use lets engineers query payment state in plain language without touching the settlement write path.',
      decision:
        'Debit and credit entries are idempotency-keyed, so a retried or duplicated message cannot double-apply a payment. That preserves balance invariants under concurrent requests.',
      reliability:
        'Concurrent multi-institution traffic can interleave in ways that risk double-processing or lost updates. The idempotency-keyed ledger and the Kafka retry and dead-letter path are meant to catch and isolate that class of failure.',
      testing:
        'I built a Python simulator that generates concurrent multi-institution traffic and checks reconciliation after each run.',
      outcome: 'Zero ledger inconsistencies across the test runs I defined.',
      learned:
        'How much of "correctness" in a payments system comes down to idempotency keys and retry design, not the happy path.',
    },
  },
  {
    slug: 'anchor-durable-runtime',
    title: 'Anchor: Durable Agent Runtime',
    oneLiner:
      'A durable runtime for agent workflows that resumes interrupted work without duplicating side effects, using event-sourced replay.',
    status: 'Completed',
    year: '2026',
    category: 'Featured',
    tech: ['Python', 'FastAPI', 'PostgreSQL', 'DynamoDB', 'SQS'],
    github: 'https://github.com/Mahir-Puri/anchor-runtime',
    recruiterPriority: true,
    detail: {
      problem:
        'Long-running workflows can be interrupted mid-task by a crash, restart, or timeout. Naive retries risk repeating side effects that already completed.',
      why: 'I wanted to understand event sourcing and idempotent side-effect handling well enough to build a runtime that survives failure, not just one that works on the happy path.',
      architecture:
        'A FastAPI control plane exposes workflow status, replay triggers, and side-effect logs. Two persistence backends are supported: PostgreSQL for local development, and DynamoDB plus SQS for cloud deployment.',
      decision:
        'Workflows are event-sourced and side effects are recorded so they are not repeated on replay. That lets an interrupted workflow resume from its event log instead of restarting from scratch.',
      reliability:
        'The hard case is a workflow interrupted after a side effect has fired but before that fact is durably recorded. Replay has to reconstruct state without re-triggering that effect.',
      testing:
        '69 automated tests cover process termination, replay, and state recovery.',
      outcome:
        'Interrupted workflows resume without duplicating completed operations, validated by the test suite above.',
      learned:
        'How much design work goes into making "resume" safe, versus just making it possible.',
    },
  },
  {
    slug: 'ballast-inference-autoscaler',
    title: 'Ballast: Kubernetes Inference Autoscaler',
    oneLiner:
      'A Kubernetes operator that autoscales LLM-serving deployments on pending and in-flight requests per replica, instead of CPU.',
    status: 'Ongoing',
    year: '2026',
    category: 'Featured',
    tech: ['Go', 'Kubernetes', 'controller-runtime', 'Helm', 'RBAC'],
    github: 'https://github.com/Mahir-Puri/ballast',
    detail: {
      problem:
        'CPU-based autoscaling does not reflect how LLM inference workloads actually saturate. A replica can sit CPU-idle while its request queue backs up, so CPU-based autoscaling reacts too late.',
      why: 'I wanted to learn how Kubernetes operators and controllers work by building one that addresses a real scaling problem for inference workloads.',
      architecture:
        'A Go operator built on controller-runtime introduces a custom InferenceService CRD. The controller watches pending and in-flight request counts per replica and is being built to drive scaling decisions from that signal instead of CPU, with scale-down stabilization and rolling model updates as the target design.',
      decision:
        'I chose per-replica request pressure as the scaling signal instead of CPU or memory, since request queueing is what actually determines whether an LLM-serving replica is saturated.',
      testing:
        'envtest integration tests exercise the controller against a real Kubernetes API server. A Docker Compose stack with a FastAPI mock server allows GPU-free local testing without a real model or cluster.',
      learned:
        'This project is still in progress, so I am tracking what is implemented versus planned carefully rather than describing the finished design as done.',
    },
  },
  {
    slug: 'marmotsat-ground-station-backend',
    title: 'MARMOTSat Ground Station Backend',
    oneLiner:
      "Binary telemetry processing for UVic's satellite ground station, with offset-based reassembly for fragmented and out-of-order packets.",
    status: 'Completed',
    year: 'Jan 2025 – Sept 2025',
    category: 'Featured',
    tech: ['Python', 'FastAPI', 'Pytest'],
    github: 'https://github.com/UVicSatelliteDesign/COMP_SLIP-GS',
    detail: {
      problem:
        'Radio transmissions from the ground station arrive as fragmented, duplicate, incomplete, and out-of-order binary packets that need to be reassembled into complete images and telemetry.',
      why: "I built this for UVic's satellite engineering team so we could recover usable data from real, imperfect radio passes instead of only clean lab conditions.",
      architecture:
        'A Python backend listens to the ground-station feed, parses raw radio frames, and reconstructs images alongside time-aligned telemetry, with a predictable storage layout for images, CSV telemetry, and metadata.',
      decision:
        'I designed offset-aware packet reassembly so packets that arrive out of order still land in the correct position in the final image, instead of assuming packets arrive in sequence.',
      reliability:
        'Field passes are noisy: packets can be dropped, duplicated, or arrive in the wrong order, so reassembly has to be defensive rather than assuming a clean stream.',
      testing:
        'I wrote a pytest suite covering duplicate, incomplete, and out-of-order packet cases using recorded logs and synthetic edge cases, and expanded coverage to cut regressions by 50%.',
      outcome:
        'The team can reconstruct images and telemetry from real ground passes, with clear logs for debugging after each pass.',
      learned:
        'How much reliability work in an RF pipeline is really about defensive parsing and good logging, not the parsing logic itself.',
    },
  },
  {
    slug: 'adversary-llm-security-harness',
    title: 'Adversary: LLM Security Testing Harness',
    oneLiner:
      '19 automated security probes across six attack categories, scored by an injection-hardened LLM judge with severity-gated CI.',
    status: 'Completed',
    year: '2026',
    category: 'Featured',
    tech: ['Python', 'GitHub Actions', 'LLM-as-judge'],
    github: 'https://github.com/Mahir-Puri/adversary',
    recruiterPriority: true,
    detail: {
      problem:
        'LLM-integrated applications can be vulnerable to prompt injection, data exfiltration, jailbreaks, tool misuse, and system-prompt leakage, and these failure modes are easy to miss with manual testing.',
      why: 'I wanted a repeatable way to test for these failure modes automatically, as part of CI, instead of one-off manual red-teaming.',
      architecture:
        'A harness runs 19 automated probes across six attack categories against a target LLM integration, then scores responses using an LLM-as-judge.',
      decision:
        'The judge itself had to be hardened against injection, since a judge that can be manipulated by the same attacks it is scoring is not trustworthy.',
      reliability:
        'A judge that is not calibrated against human labels can systematically over- or under-report vulnerabilities, so I calibrated it against human-labeled examples before trusting its output.',
      testing:
        "The judge's outputs were checked against human labels, and CI is severity-gated so a merge is blocked when probes surface high-severity findings.",
      outcome:
        '100% detection on the defined injected test set. That is a test-set result, not a general security guarantee.',
      learned:
        'How much of practical LLM security testing is judge design and calibration, not just writing attack prompts.',
    },
  },
]

export interface ProjectRow {
  title: string
  items: Project[]
}

export const additionalProjectRows: ProjectRow[] = [
  {
    title: 'Distributed Systems',
    items: [
      {
        slug: 'distributed-token-bucket-rate-limiter',
        title: 'Distributed Token Bucket Rate Limiter',
        oneLiner:
          "A distributed API rate limiter using an atomic Redis Lua script so concurrent service instances can't overshoot the quota.",
        status: 'Completed',
        year: '2026',
        category: 'Distributed Systems',
        tech: ['Java', 'Spring Boot', 'Redis', 'Lua', 'Testcontainers'],
        github: null,
        detail: {
          problem:
            'A rate limiter shared across multiple concurrent service instances needs to check and decrement a quota atomically, or two instances can race and both approve requests that together exceed the limit.',
          architecture:
            'A Spring Boot service backs its rate-limiting decisions with a Redis Lua script, using the Lettuce client, so the check-and-decrement happens atomically inside Redis instead of as separate round trips from the application.',
          decision:
            'I moved the check-and-decrement logic into a single Lua script executed atomically by Redis, rather than doing a read-then-write from the application, which is the usual source of race conditions in rate limiters.',
          testing:
            'Integration tests run against a live Redis instance via Testcontainers rather than a mock, so the atomicity guarantees are tested against real Redis behavior.',
          outcome:
            'Zero quota overshoots under 150+ concurrent clients in the load tests I defined.',
        },
      },
      {
        slug: 'shopify-flash-sale-engine',
        title: 'Shopify Flash Sale Engine',
        oneLiner:
          'A concurrency-focused commerce backend that prevents overselling during flash-sale traffic using atomic Redis reservations.',
        status: 'Ongoing',
        year: '2026',
        category: 'Distributed Systems',
        tech: ['Ruby on Rails', 'Redis', 'Lua', 'Sidekiq', 'PostgreSQL'],
        github: 'https://github.com/Mahir-Puri/shopify-flash-sale-engine',
        detail: {
          problem:
            'Flash sales create a burst of concurrent checkout requests for limited inventory, which is exactly the condition where naive stock checks let a store oversell.',
          architecture:
            'A Rails 7 backend uses an atomic Redis Lua reservation path for inventory holds, a stateless service design, HMAC-verified webhooks, and idempotent ingestion so retried webhook deliveries do not get processed twice.',
          decision:
            'Inventory reservations happen through a single atomic Lua script in Redis rather than a database row lock, since it holds up better under high concurrent request volume.',
          reliability:
            'Retried webhooks are a normal part of how commerce platforms behave under load, so ingestion has to be idempotent or the same order event can be processed more than once.',
          testing:
            'I load-tested the reservation path with simultaneous checkout requests and verified webhook idempotency under duplicate deliveries.',
          outcome:
            'So far, zero oversells under 150+ simultaneous checkout requests and zero duplicate webhook processing in the test scenarios I have run.',
        },
      },
    ],
  },
  {
    title: 'Backend & Data',
    items: [
      {
        slug: 'flowforge',
        title: 'FlowForge',
        oneLiner:
          'A low-latency C++ engine that flags unusual options sweep and volume-to-open-interest activity, with Python bindings.',
        status: 'Ongoing',
        year: '2026',
        category: 'Backend & Data',
        tech: ['C++', 'Python', 'pybind11', 'CMake'],
        github: 'https://github.com/Mahir-Puri/flowforge',
        detail: {
          problem:
            'Spotting unusual options-flow activity (sweeps, abnormal volume relative to open interest) in real time means processing a high-volume stream without allocation overhead getting in the way.',
          architecture:
            'A C++ core handles detection on a low-allocation processing path with configurable thresholds, exposed to Python through pybind11 bindings, alongside a benchmark harness.',
          decision:
            'Keeping the hot path low-allocation in C++ and exposing it to Python via bindings, rather than writing the whole thing in Python, was a deliberate tradeoff between iteration speed and processing overhead.',
          testing:
            'Unit tests cover threshold boundaries, zero open-interest cases, ratio edge cases, and minimum-size conditions.',
          learned:
            'Benchmarking is still in progress, so I am not publishing performance numbers until that work is complete.',
        },
      },
      {
        slug: 'ai-job-applier',
        title: 'AI Job Applier',
        oneLiner:
          'An end-to-end job application flow: tailored resumes and cover letters, auto-fill, and reply tracking.',
        status: 'Ongoing',
        year: '2025',
        category: 'Backend & Data',
        tech: ['FastAPI', 'React', 'PostgreSQL', 'Docker'],
        github: 'https://github.com/Mahir-Puri/AI-JOB-applier-Backend',
        detail: {
          problem:
            'Applying to many roles individually means repeating the same tailoring work (resume, cover letter, form fields) over and over.',
          architecture:
            'A FastAPI backend generates targeted resumes and cover letters, fills common application forms, and tracks replies, with a React frontend and a PostgreSQL store.',
          decision:
            'I am containerizing the stack with Docker so it runs the same way locally as it will in any deployment environment.',
          learned:
            'This project is still evolving. I am adding an analytics view for conversion and follow-ups next.',
        },
      },
    ],
  },
  {
    title: 'Security',
    items: [
      {
        slug: 'securedoc-cloud-platform',
        title: 'SecureDoc Cloud Platform',
        oneLiner:
          'A serverless document-processing platform with Terraform-provisioned infrastructure and automated deployment validation.',
        status: 'Completed',
        year: 'April 2026',
        category: 'Security',
        tech: ['AWS Lambda', 'S3', 'API Gateway', 'IAM', 'Terraform'],
        github: null,
        detail: {
          problem:
            'Serverless document processing needs infrastructure that is reproducible and access-scoped by default, not configured by hand in a console.',
          architecture:
            'The platform runs on AWS Lambda, S3, and API Gateway, with IAM policies scoped to least privilege and environment-scoped secrets.',
          decision:
            'All infrastructure is provisioned through Terraform rather than manual console changes, so environments are reproducible and reviewable.',
          testing:
            'Automated regression and validation gates run before deployment to catch configuration or infrastructure regressions early.',
          outcome:
            'Infrastructure changes go through the same validation gates as application code before they reach an environment.',
        },
      },
      {
        slug: 'cybersci-national-cybersecurity-competition',
        title: 'CyberSci National Cybersecurity Competition',
        oneLiner:
          'A national CTF spanning Linux investigation, network recon, cryptography, steganography, OSINT, and reverse engineering.',
        status: 'Completed',
        year: '2025',
        category: 'Security',
        tech: ['Python', 'Linux', 'Cryptography', 'OSINT', 'Binary Analysis'],
        github: null,
        detail: {
          problem:
            'CyberSci is a national capture-the-flag competition with challenges across Linux investigation, network reconnaissance, cryptography, steganography, OSINT, and binary reverse engineering, all under time pressure.',
          decision:
            'I wrote Python scripts to automate multi-stage decoding tasks instead of working through repetitive steps by hand, which mattered given the time constraints.',
          outcome:
            'Completed as a team entry. It was a good test of investigative problem-solving, security fundamentals, and automation under time pressure.',
        },
      },
    ],
  },
  {
    title: 'Infrastructure & Tooling',
    items: [
      {
        slug: 'streamdeck-operations-console',
        title: 'Streamdeck: Real-Time Operations Console',
        oneLiner:
          'A real-time operations dashboard visualizing streaming system activity and latency distributions across payments, commerce, and telemetry.',
        status: 'Ongoing',
        year: '2026',
        category: 'Infrastructure & Tooling',
        tech: ['React', 'TypeScript', 'Vite', 'Three.js', 'WebSockets'],
        github: null,
        detail: {
          problem:
            'Understanding how a streaming system is behaving in real time (latency, event movement, reconnects) is hard to reason about from logs alone.',
          architecture:
            'A React and TypeScript frontend built with Vite renders hand-drawn p50, p95, and p99 latency charts and visualizes event movement, connected over WebSockets.',
          decision:
            'Rendering loops are kept separate from React state, and events are modeled with discriminated unions, so high-frequency updates do not fight the component render cycle.',
          reliability:
            'The dashboard has to handle reconnects and replay gracefully, since a dropped WebSocket connection should not lose or duplicate the operational picture it is showing.',
        },
      },
      {
        slug: 'devswipe',
        title: 'DevSwipe',
        oneLiner: 'A swipe-based interface for discovering interesting GitHub repositories quickly.',
        status: 'Ongoing',
        year: '2025',
        category: 'Infrastructure & Tooling',
        tech: ['Flask', 'SQLite', 'GitHub API', 'CI/CD'],
        github: 'https://github.com/Mahir-Puri/devswipe',
        detail: {
          problem: 'Browsing GitHub for interesting repositories one search at a time is slow and easy to lose track of.',
          architecture:
            "A Flask backend wires up GitHub's API with a small SQLite schema for saved picks and simple filters to keep results relevant.",
          decision: 'I handled auth, sessions, and a basic CI pipeline early so the app stays stable while I keep iterating on it.',
        },
      },
    ],
  },
  {
    title: 'Embedded & Hardware',
    items: [
      {
        slug: 'smart-fall-prevention',
        title: 'Smart Fall Prevention System',
        oneLiner: 'A Flask and Raspberry Pi Pico system that detects falls in near real time, with a dashboard and alerts.',
        status: 'Completed',
        year: '2024',
        category: 'Embedded & Hardware',
        tech: ['Flask', 'Raspberry Pi Pico', 'MicroPython'],
        github: null,
        detail: {
          problem: 'Falls need to be detected and flagged quickly, without waiting on someone to notice.',
          architecture:
            'A Raspberry Pi Pico streams sensor data to a Flask service that scores events in real time, with a small dashboard to visualize status and history and alerts when thresholds are crossed.',
          testing: 'I tuned the detection logic with simulated falls and trimmed false positives before relying on live thresholds.',
          learned: 'How much of a real-time embedded system comes down to tuning thresholds against real noisy sensor data, not the initial logic.',
        },
      },
      {
        slug: 'traffictongue',
        title: 'TrafficTongue: Honking Detection',
        oneLiner: 'Audio analysis and edge ML to classify honk types and visualize city hotspots.',
        status: 'Completed',
        year: '2024',
        category: 'Embedded & Hardware',
        tech: ['TensorFlow', 'Python', 'Embedded', 'Node.js'],
        github: null,
        detail: {
          problem: 'Understanding honking patterns in a city requires classifying audio events at the edge, not just recording raw audio.',
          architecture:
            'An audio capture pipeline feeds a classifier trained to separate honks from ambient noise, running on a small device for edge testing, with a simple web view showing live detections and location heatmaps.',
        },
      },
    ],
  },
  {
    title: 'Earlier Builds',
    items: [
      {
        slug: 'studium-uvec',
        title: 'Studium: Mini Typed Language',
        oneLiner: 'A Lark (LALR) grammar into an AST visitor interpreter, with a scoped runtime and an --explain mode.',
        status: 'Completed',
        year: '2025',
        category: 'Earlier Builds',
        tech: ['Python', 'Lark', 'LALR', 'Interpreter', 'CLI'],
        github: 'https://github.com/Mahir-Puri/Studium-UVEC-2025',
        detail: {
          problem: 'Building a small teaching-first interpreter meant handling parsing, scoping, and type coercions clearly enough to explain each step.',
          architecture:
            'A Lark (LALR) grammar produces a parse tree that becomes an AST, executed by a visitor-based engine with a scoped environment and type checks. Semantics include short-circuit booleans, a modulo operator, and int-to-double coercions.',
          decision:
            'The --explain flag narrates branches, loops, and assignments as the program runs, which was the actual point of the project: making interpretation legible, not just correct.',
          learned: 'How much of language design is really about giving useful, specific error messages.',
        },
      },
    ],
  },
]

export const allProjects: Project[] = [
  ...featuredProjects,
  ...additionalProjectRows.flatMap((row) => row.items),
]

export interface Experience {
  slug: string
  title: string
  org: string
  orgSub: string
  dates: string
  location: string
  status: 'Incoming' | 'Completed'
  tech: string[]
  summaryPoints: string[]
  extraPoints: string[]
}

export const experiences: Experience[] = [
  {
    slug: 'rbc-real-time-payments-cloud',
    title: 'Returning Software Engineering Co-op',
    org: 'Royal Bank of Canada',
    orgSub: 'Commercial Core Banking & Payments Technology',
    dates: 'September 2026 – December 2026',
    location: 'Toronto, ON',
    status: 'Incoming',
    tech: ['Java', 'Spring Boot', 'OpenShift', 'Payments'],
    summaryPoints: [
      "Selected to return to RBC's Real-Time Payments Cloud Team to support Java and Spring Boot payment APIs on OpenShift within production-critical financial infrastructure.",
      'Expected to build reusable service components for real-time integrations across payment systems.',
      'The role emphasizes automated testing, pair programming, peer review, and reliable Agile delivery.',
    ],
    extraPoints: [
      "The team supports RBC's Unified Global Payment Platform and the modernization of Canadian real-time payment infrastructure.",
    ],
  },
  {
    slug: 'rbc-global-security-cyber-tech',
    title: 'AI & Software Engineer Co-op',
    org: 'Royal Bank of Canada',
    orgSub: 'Global Security, Cyber Technology Office',
    dates: 'January 2026 – April 2026',
    location: 'Toronto, ON',
    status: 'Completed',
    tech: ['Python', 'PySpark', 'Databricks', 'Delta Lake', 'FastAPI', 'GraphQL', 'SQL'],
    summaryPoints: [
      'Architected Medallion ETL pipelines on Azure Databricks with PySpark and Delta Lake, integrating 4 enterprise security sources across 500+ applications.',
      'Root-caused an SCD Type 2 phantom-update defect by tracing Databricks job logs and Delta transaction history.',
      'Built FastAPI and GraphQL service layers exposing normalized security data; contributed to 69% faster remediation and eliminated 96+ hours of monthly overhead through automated reporting.',
      'Placed 3rd in the RBC Global Security Student Innovation Challenge, presenting the platform architecture to Directors, Senior Directors, and the Chief Security Officer.',
    ],
    extraPoints: [
      'Implemented incremental loading, schema validation, and data-quality gates across the pipeline.',
      'Designed SQL models tracking vulnerability counts, SLA breaches, and risk scores.',
      'Served as primary technical contact for 3–4 internal application teams, coordinating data delivery.',
      'Participated in peer code reviews and documented system behavior in Confluence.',
    ],
  },
]

export const education = {
  school: 'University of Victoria',
  degree: 'Bachelor of Software Engineering (B.Seng)',
  dates: 'September 2024 – December 2028',
  gpa: '4.0 / 4.0',
  coursework: [
    'Data Structures & Algorithms',
    'Distributed Systems',
    'Database Systems',
    'Object-Oriented Design',
    'Software Testing',
    'Statistics',
  ],
}

export interface Recognition {
  title: string
  org: string
  year: string
}

export const recognitions: Recognition[] = [
  { title: '3rd Place', org: 'RBC Global Security Student Innovation Challenge', year: '2026' },
  { title: 'Certificate of Achievement', org: 'UVic Mathematics & Statistics', year: '2025' },
  { title: 'Scholarship for Academic Excellence', org: 'University of Victoria', year: '2024' },
]

export interface CommunityItem {
  title: string
  period?: string
  description: string
}

export const community: CommunityItem[] = [
  {
    title: 'RBC Technology and Operations Community Lead',
    description: 'Helped organize and lead community engagement within RBC Technology and Operations.',
  },
  {
    title: 'Sewa UVic Student Management Committee',
    description: 'Member of the student management committee for Sewa UVic.',
  },
  {
    title: 'PRAYAS Volunteer Educator',
    period: '2019 – 2024',
    description: 'Taught underprivileged children, with a focus on consistency, patience, and making learning accessible.',
  },
]

export interface SkillGroup {
  title: string
  items: string[]
}

export const skillGroups: SkillGroup[] = [
  { title: 'Languages', items: ['Python', 'Java', 'Go', 'SQL', 'Bash'] },
  {
    title: 'Backend, APIs & Storage',
    items: ['FastAPI', 'Spring Boot', 'GraphQL', 'REST APIs', 'PostgreSQL', 'DynamoDB', 'MongoDB', 'MySQL'],
  },
  {
    title: 'Data & Streaming',
    items: ['Kafka', 'PySpark', 'Azure Databricks', 'Delta Lake', 'ETL/ELT pipelines', 'SCD Type 2', 'Schema validation'],
  },
  {
    title: 'Cloud & Infrastructure',
    items: ['Kubernetes', 'controller-runtime', 'Helm', 'RBAC', 'Docker', 'AWS', 'OpenShift', 'Terraform', 'GitHub Actions'],
  },
  {
    title: 'Testing & Reliability',
    items: ['Pytest', 'JUnit', 'Testcontainers', 'envtest', 'Integration testing', 'Event-sourced replay', 'Idempotent processing', 'Root-cause analysis'],
  },
  { title: 'AI-Assisted Development', items: ['Claude Code', 'Anthropic tool-use agents'] },
]

export const currentlyNote =
  "Right now: building Ballast's scaling logic and the Shopify flash-sale reservation path, and getting ready for the Real-Time Payments Cloud Team co-op this fall."

export const contactInfo = {
  email: 'mahirpuri.17@gmail.com',
  linkedin: 'https://www.linkedin.com/in/mahir-puri/',
  github: 'https://github.com/Mahir-Puri',
  availability: 'Winter 2027 software engineering internships',
  message: "I'm looking for Winter 2027 software engineering internships. If my experience looks relevant to your team, I'd love to talk.",
}
