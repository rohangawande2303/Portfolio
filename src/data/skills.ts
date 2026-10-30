import { Skill, SkillFamily } from "@/types/skill";

export const skillFamilies: SkillFamily[] = [
  "Languages",
  "Frontend",
  "Backend",
  "Databases",
  "DevOps & Tools",
  "AI & ML",
];

export const skills: Skill[] = [
  // ─── 01. LANGUAGES (01 – 06) ────────────────────────────────────────────────
  {
    number: 1,
    symbol: "Js",
    name: "JavaScript",
    family: "Languages",
    description:
      "Used across interactive frontend interfaces, React applications, and custom client scripts.",
  },
  {
    number: 2,
    symbol: "Ts",
    name: "TypeScript",
    family: "Languages",
    description:
      "Used for strict typing across the multi-tenant CRM, telemedicine app, and client websites.",
  },
  {
    number: 3,
    symbol: "Py",
    name: "Python",
    family: "Languages",
    description:
      "Used in the multi-tenant CRM backend (FastAPI) and the OpenFDA microservice (Flask).",
  },
  {
    number: 4,
    symbol: "Sq",
    name: "SQL",
    family: "Languages",
    description:
      "Used for relational queries, schema-per-tenant isolation, and indexing in PostgreSQL.",
  },
  {
    number: 5,
    symbol: "Ht",
    name: "HTML5",
    family: "Languages",
    description:
      "Used for semantic page layouts, accessible landmarks, and SEO across all client websites.",
  },
  {
    number: 6,
    symbol: "Cs",
    name: "CSS3",
    family: "Languages",
    description:
      "Used for responsive styling, custom animations, and layout design across web projects.",
  },

  // ─── 02. FRONTEND (07 – 17) ─────────────────────────────────────────────────
  {
    number: 7,
    symbol: "Nx",
    name: "Next.js",
    family: "Frontend",
    description:
      "Used for the multi-tenant CRM frontend, telemedicine app, and 6+ client websites.",
  },
  {
    number: 8,
    symbol: "Re",
    name: "React",
    family: "Frontend",
    description:
      "Used for component architecture and interactive state management across web applications.",
  },
  {
    number: 9,
    symbol: "Tw",
    name: "Tailwind CSS",
    family: "Frontend",
    description:
      "Used for utility styling, responsive design, and theme tokens across the CRM and client sites.",
  },
  {
    number: 10,
    symbol: "Sh",
    name: "shadcn/ui",
    family: "Frontend",
    description:
      "Used for accessible Radix-based UI components in the multi-tenant CRM dashboard.",
  },
  {
    number: 11,
    symbol: "Tq",
    name: "TanStack Query",
    family: "Frontend",
    description:
      "Used for server-state caching, optimistic updates, and background refetching in the CRM.",
  },
  {
    number: 12,
    symbol: "Tt",
    name: "TanStack Table",
    family: "Frontend",
    description:
      "Used in the multi-tenant CRM to display leads with 150+ custom attributes.",
  },
  {
    number: 13,
    symbol: "Rf",
    name: "React Hook Form",
    family: "Frontend",
    description:
      "Used for form state and validation across client enquiry forms and CRM lead capture.",
  },
  {
    number: 14,
    symbol: "Zd",
    name: "Zod",
    family: "Frontend",
    description:
      "Used for schema validation of API responses, form inputs, and environment variables.",
  },
  {
    number: 15,
    symbol: "Fm",
    name: "Framer Motion",
    family: "Frontend",
    description:
      "Used for layout transitions, gestures, and UI micro-animations across portfolio projects.",
  },
  {
    number: 16,
    symbol: "Rc",
    name: "Recharts",
    family: "Frontend",
    description:
      "Used for lead-by-status and lead-by-source KPI charts in the CRM dashboard.",
  },
  {
    number: 17,
    symbol: "Lq",
    name: "Shopify (Liquid)",
    family: "Frontend",
    description:
      "Used to build custom sections, collections, and navigation for the GOATWEAR streetwear store.",
  },

  // ─── 03. BACKEND (18 – 30) ──────────────────────────────────────────────────
  {
    number: 18,
    symbol: "Fa",
    name: "FastAPI",
    family: "Backend",
    description:
      "Used to build the async Python backend and REST APIs for the multi-tenant SaaS CRM.",
  },
  {
    number: 19,
    symbol: "No",
    name: "Node.js",
    family: "Backend",
    description:
      "Used as the server runtime for the Healthcare Appointment System and API services.",
  },
  {
    number: 20,
    symbol: "Ex",
    name: "Express.js",
    family: "Backend",
    description:
      "Used for RESTful routing and authentication in the Healthcare Appointment System.",
  },
  {
    number: 21,
    symbol: "Fl",
    name: "Flask",
    family: "Backend",
    description:
      "Used for a separate Python microservice querying medicine data via the OpenFDA API.",
  },
  {
    number: 22,
    symbol: "Ra",
    name: "REST APIs",
    family: "Backend",
    description:
      "Used for stateless client-server communication, JSON contracts, and standard HTTP endpoints.",
  },
  {
    number: 23,
    symbol: "Wh",
    name: "Webhooks",
    family: "Backend",
    description:
      "Used in the CRM for Google Ads, forms, and Zapier/Make with signature verification.",
  },
  {
    number: 24,
    symbol: "Jw",
    name: "JWT Auth",
    family: "Backend",
    description:
      "Used for token authentication and 5-level RBAC enforcement in the CRM and healthcare app.",
  },
  {
    number: 25,
    symbol: "Na",
    name: "NextAuth.js",
    family: "Backend",
    description:
      "Used for session handling, OAuth providers, and route protection in Next.js apps.",
  },
  {
    number: 26,
    symbol: "Pd",
    name: "Pydantic",
    family: "Backend",
    description:
      "Used for data modeling in FastAPI and validating structured outputs from LLMs.",
  },
  {
    number: 27,
    symbol: "Sa",
    name: "SQLAlchemy",
    family: "Backend",
    description:
      "Used in the CRM for PostgreSQL queries, relationships, and tenant-scoped connections.",
  },
  {
    number: 28,
    symbol: "Al",
    name: "Alembic",
    family: "Backend",
    description:
      "Used for safe, version-controlled database migrations in the multi-tenant CRM.",
  },
  {
    number: 29,
    symbol: "Wr",
    name: "WebRTC",
    family: "Backend",
    description:
      "Used for peer-to-peer video consultations in the Healthcare Appointment System.",
  },
  {
    number: 30,
    symbol: "Ws",
    name: "Socket.io",
    family: "Backend",
    description:
      "Used as the WebRTC signaling server and for real-time appointment queues in the healthcare app.",
  },

  // ─── 04. DATABASES (31 – 33) ────────────────────────────────────────────────
  {
    number: 31,
    symbol: "Pg",
    name: "PostgreSQL",
    family: "Databases",
    description:
      "Used with schema-per-client isolation, JSONB attributes, and indexing in the CRM.",
  },
  {
    number: 32,
    symbol: "Fb",
    name: "Firebase",
    family: "Databases",
    description:
      "Used for Firestore and Firebase Auth in the Yoga Booking app and Dry-Food E-Commerce store.",
  },
  {
    number: 33,
    symbol: "Ne",
    name: "Neon",
    family: "Databases",
    description:
      "Used as the serverless PostgreSQL host for the multi-tenant CRM database.",
  },

  // ─── 05. DEVOPS & TOOLS (34 – 50) ───────────────────────────────────────────
  {
    number: 34,
    symbol: "Dk",
    name: "Docker",
    family: "DevOps & Tools",
    description:
      "Used to containerize the multi-tenant CRM frontend and backend services.",
  },
  {
    number: 35,
    symbol: "Dc",
    name: "Docker Compose",
    family: "DevOps & Tools",
    description:
      "Used for local multi-service orchestration of FastAPI, PostgreSQL, and auxiliary tools.",
  },
  {
    number: 36,
    symbol: "Ng",
    name: "Nginx",
    family: "DevOps & Tools",
    description:
      "Used as a reverse proxy, SSL termination, and static asset server on Linux VPS.",
  },
  {
    number: 37,
    symbol: "Le",
    name: "Let's Encrypt SSL",
    family: "DevOps & Tools",
    description:
      "Used for automated TLS/SSL certificate setup and renewal on Linux VPS hosts.",
  },
  {
    number: 38,
    symbol: "Vc",
    name: "Vercel",
    family: "DevOps & Tools",
    description:
      "Used for hosting Next.js frontends, client websites, and automated Git deployments.",
  },
  {
    number: 39,
    symbol: "Rn",
    name: "Render",
    family: "DevOps & Tools",
    description:
      "Used for deploying the FastAPI backend web service for the multi-tenant CRM.",
  },
  {
    number: 40,
    symbol: "Ga",
    name: "GitHub Actions",
    family: "DevOps & Tools",
    description:
      "Used for CI pipelines running automated tests, Pytest, and linting on every push.",
  },
  {
    number: 41,
    symbol: "Db",
    name: "Dependabot",
    family: "DevOps & Tools",
    description:
      "Used for automated vulnerability detection and dependency security alerts.",
  },
  {
    number: 42,
    symbol: "Gt",
    name: "Git",
    family: "DevOps & Tools",
    description:
      "Used for version control, commit history, and branching across all projects.",
  },
  {
    number: 43,
    symbol: "Gh",
    name: "GitHub",
    family: "DevOps & Tools",
    description:
      "Used for repository hosting, pull requests, issue tracking, and CI/CD triggers.",
  },
  {
    number: 44,
    symbol: "Pm",
    name: "Postman",
    family: "DevOps & Tools",
    description:
      "Used for API endpoint testing, request debugging, and environment variables.",
  },
  {
    number: 45,
    symbol: "Lx",
    name: "Linux (VPS)",
    family: "DevOps & Tools",
    description:
      "Used for Ubuntu server administration with SSH, systemd services, UFW, and Docker.",
  },
  {
    number: 46,
    symbol: "Rz",
    name: "Razorpay",
    family: "DevOps & Tools",
    description:
      "Used for payment integration and order verification in the healthcare and e-commerce apps.",
  },
  {
    number: 47,
    symbol: "Tw",
    name: "Twilio",
    family: "DevOps & Tools",
    description:
      "Used for automated SMS medicine reminders in the Healthcare Appointment System.",
  },
  {
    number: 48,
    symbol: "Nm",
    name: "Nodemailer",
    family: "DevOps & Tools",
    description:
      "Used for automated email medicine reminders in the Healthcare Appointment System.",
  },
  {
    number: 49,
    symbol: "Zp",
    name: "Zapier / Make",
    family: "DevOps & Tools",
    description:
      "Used for webhook automation connecting landing page forms to CRM databases.",
  },
  {
    number: 50,
    symbol: "Pt",
    name: "Pytest",
    family: "DevOps & Tools",
    description:
      "Used for automated test suites verifying tenant isolation, RBAC, IDOR, and security in the CRM.",
  },

  // ─── 06. AI & ML (51 – 60) ──────────────────────────────────────────────────
  {
    number: 51,
    symbol: "Gm",
    name: "Gemini API",
    family: "AI & ML",
    description:
      "Used in the CRM for natural-language search, lead summaries, and multilingual drafts.",
  },
  {
    number: 52,
    symbol: "Pe",
    name: "Prompt Engineering",
    family: "AI & ML",
    description:
      "Used to write few-shot prompts and system instructions for CRM summaries and follow-ups.",
  },
  {
    number: 53,
    symbol: "So",
    name: "Structured Outputs",
    family: "AI & ML",
    description:
      "Used to enforce JSON Schema and Pydantic models on Gemini API outputs before use.",
  },
  {
    number: 54,
    symbol: "Lg",
    name: "LLM Guardrails",
    family: "AI & ML",
    description:
      "Used for number-checking against hallucination in weekly AI insights in the CRM.",
  },
  {
    number: 55,
    symbol: "Pi",
    name: "Prompt-Injection Defense",
    family: "AI & ML",
    description:
      "Used in testing and query validation to prevent prompt injection in CRM lead search.",
  },
  {
    number: 56,
    symbol: "Pr",
    name: "PII Redaction",
    family: "AI & ML",
    description:
      "Used so the AI model sees only filters, aggregates, or redacted text, never lead identities.",
  },
  {
    number: 57,
    symbol: "Nq",
    name: "Natural-Language-to-Query",
    family: "AI & ML",
    description:
      "Used to convert conversational questions into validated, role-scoped CRM query filters.",
  },
  {
    number: 58,
    symbol: "Le",
    name: "LLM Evaluation",
    family: "AI & ML",
    description:
      "Used with golden test sets to evaluate natural-language search and translation fidelity.",
  },
  {
    number: 59,
    symbol: "Sl",
    name: "scikit-learn",
    family: "AI & ML",
    description:
      "Used for per-tenant ML lead scoring in the CRM with explainable reasons and rule fallback.",
  },
  {
    number: 60,
    symbol: "Fz",
    name: "Fuzzy Matching",
    family: "AI & ML",
    description:
      "Used with rapidfuzz for duplicate lead detection in the CRM webhook ingestion engine.",
  },
];

/**
 * Core Engineering Concepts for the footer chip list
 */
export const coreConcepts: string[] = [
  "Multi-tenancy",
  "RBAC",
  "System Design",
  "Microservices",
  "Data Modeling",
  "API Security",
  "SDLC",
  "Testing",
  "SEO",
];
