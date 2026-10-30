import { Project, ClientSite } from "@/types/project";

/**
 * ═════════════════════════════════════════════════════════════════════════════
 * COPY-PASTE PROJECT TEMPLATE
 * ═════════════════════════════════════════════════════════════════════════════
 * When adding a new project, copy this template block, paste it into the
 * `projects` array below, and fill in the details. Every field is explained:
 *
 * {
 *   slug: "my-project-slug",           // Unique URL slug: will create /work/my-project-slug
 *   order: 1,                          // Display order number (lower numbers appear first)
 *   title: "Project Title",            // Full human-readable project title
 *   category: "SaaS · Web · AI",       // 2-3 word category badge
 *   year: "2025",                      // Year built (or date range e.g. "2024 - 2025")
 *   role: "Sole Developer & Architect",// Your role on this project
 *   duration: "3 months",              // [OPTIONAL] Project duration e.g. "4 months", "72 hours"
 *   summary: "Short 1-line overview.", // Shown on project cards and previews
 *   description: "Full overview...",   // Paragraph overview of the project
 *   longDescription: "Detailed...",    // [OPTIONAL] Extended deep-dive text for detail page
 *   highlights: [                      // 3-6 quick bullet points
 *     "Feature or architecture highlight 1",
 *     "Feature or architecture highlight 2",
 *   ],
 *   features: [                        // [OPTIONAL] Detailed bullet points for key features section
 *     "Detailed feature 1",
 *     "Detailed feature 2",
 *   ],
 *   challenges: [                      // [OPTIONAL] Key engineering hurdles solved
 *     "Challenge 1 and how it was solved",
 *   ],
 *   results: [                         // [OPTIONAL] Verified business/technical results
 *     "Outcome or production metric",
 *   ],
 *   tech: [                            // Tech stack badges
 *     "Next.js", "TypeScript", "Tailwind CSS", "PostgreSQL"
 *   ],
 *   image: "/assets/portfolio/cover.png", // Main cover image (put in public/assets/portfolio/ or public/images/projects/<slug>/)
 *   gallery: [                         // [OPTIONAL] Screenshot gallery for lightbox
 *     // { src: "/images/projects/<slug>/shot1.png", alt: "Dashboard view", caption: "Main dashboard" },
 *   ],
 *   liveUrl: "https://example.com",    // [OPTIONAL] Live production URL (omit if none)
 *   githubUrl: "https://github.com/..",// [OPTIONAL] Source code URL (omit if private)
 *   featured: true,                    // Set true to show in the featured Work accordion on homepage
 *   isClientSite: false,               // Set true if this is a commissioned client website (shows "Client" badge)
 *   hidden: false,                     // Set true to hide everywhere (detail page, all grids)
 * }
 * ═════════════════════════════════════════════════════════════════════════════
 */

export const projects: Project[] = [
  // ─── 01. FLAGSHIP: MULTI-TENANT REAL ESTATE CRM (SAAS) ──────────────────────
  {
    slug: "real-estate-crm-saas",
    order: 1,
    title: "Multi-Tenant Real Estate CRM (SaaS)",
    category: "SaaS · Web · AI",
    year: "2026",
    role: "Sole Developer & Architect",
    duration: "4 months",
    summary:
      "Enterprise multi-tenant CRM featuring schema-per-client PostgreSQL isolation, 5-level RBAC, webhook automations, and privacy-first Gemini AI.",
    description:
      "Architected and built an enterprise-grade multi-tenant CRM tailored for real estate developers and sales agencies. Features schema-per-client PostgreSQL database isolation for strict tenant data security, JWT authentication with 5-level hierarchical RBAC (Agency, Developer, BD Manager, Sales Executive, Call Center), and middleware-enforced tenant validation. Includes a high-throughput webhook engine with HMAC signature verification, duplicate detection, and rate limiting for Google Ads, website lead forms, and Zapier/Make. Integrates a privacy-first Gemini AI layer for natural-language lead searching with validated filters, executive summaries, localized multilingual follow-up drafts (English, Hindi, Marathi), and per-tenant ML lead scoring.",
    longDescription:
      "A complete enterprise multi-tenant CRM engineered from requirements gathering to cloud deployment. Designed specifically to solve data isolation and lead management challenges faced by real estate developers and channel sales partners. Built with Next.js 15, FastAPI, and PostgreSQL with per-client schema partitioning. Includes role-based security layers, webhook lead ingestion from multiple ad networks, and a localized AI assistant running on strict privacy guardrails.",
    highlights: [
      "PostgreSQL schema-per-client data isolation with middleware-enforced tenant validation",
      "JWT authentication with 5-level hierarchical RBAC and IDOR protection",
      "High-throughput webhook engine (Google Ads, forms, Zapier/Make) with HMAC signatures",
      "Hybrid SQL + JSONB data model handling 150+ lead attributes and 219-column Excel import/export",
      "Privacy-first Gemini AI: NL query search, summary generation, and localized follow-up drafts",
      "Comprehensive Pytest test suite for tenant isolation, RBAC permissions, and IDOR vulnerabilities",
    ],
    features: [
      "Schema-per-client PostgreSQL database isolation ensuring each developer's data is fully separated",
      "JWT authentication and a 5-level RBAC hierarchy with project-scoped permissions and header-spoofing prevention",
      "High-throughput webhook engine for Google Ads, website forms, and Zapier/Make with signature verification and rate limiting",
      "Hybrid SQL + JSONB data model supporting 150+ lead attributes without schema migrations",
      "Standardized 219-column Excel import/export pipeline with validation using Pandas and OpenPyXL",
      "Privacy-first Gemini AI layer where the model sees only filters, aggregates, or redacted text, never lead identities",
      "Natural-language lead search that converts questions into validated filter queries run with role scoping",
      "AI lead summaries, weekly insights with number-checking against hallucination, and follow-up drafts in English, Hindi, and Marathi",
      "Per-tenant ML lead scoring (scikit-learn) with explainable reasons and rule-based fallback",
      "Pytest test suite covering tenant isolation, RBAC, IDOR, and security run on every push through GitHub Actions",
    ],
    challenges: [
      "Architecting schema-per-tenant PostgreSQL connection routing without exhausting connection limits",
      "Enforcing strict PII redaction and JSON schema validation to prevent LLM hallucinations and prompt injection",
      "Standardizing 219-column Excel datasets with varying regional formats into a clean relational database model",
    ],
    results: [
      "Sole developer owning requirements, UI/UX, database architecture, backend APIs, testing, and deployment",
      "Zero-leakage multi-tenancy verified through comprehensive automated Pytest test suites",
      "Dockerized microservices deployed on Vercel, Render, and Neon with automated CI/CD via GitHub Actions",
    ],
    tech: [
      "Next.js 15",
      "TypeScript",
      "FastAPI",
      "PostgreSQL",
      "Docker",
      "Gemini API",
      "Tailwind CSS",
      "Neon",
      "GitHub Actions",
    ],
    // Main project cover image
    image: "/assets/portfolio/crm/1.png",
    // Additional project screenshots
    gallery: [
      {
        src: "/assets/portfolio/crm/2.png",
        alt: "CRM dashboard screenshot",
        caption: "CRM Dashboard",
      },
      {
        src: "/assets/portfolio/crm/3.png",
        alt: "CRM lead management screenshot",
        caption: "Lead Management",
      },
      {
        src: "/assets/portfolio/crm/4.png",
        alt: "CRM analytics screenshot",
        caption: "Analytics",
      },
      {
        src: "/assets/portfolio/crm/5.png",
        alt: "CRM interface screenshot",
        caption: "CRM Interface",
      },
    ],
    // TODO: Add high-resolution screenshots to public/images/projects/real-estate-crm-saas/
    featured: true,
    liveUrl: "https://multi-tenant-real-estate-crm.vercel.app",
    githubUrl: "https://github.com/rohangawande2303/Multi-Tenant-Real-Estate-CRM",
  },

  // ─── 02. FLAGSHIP: HEALTHCARE APPOINTMENT SYSTEM WITH TELEMEDICINE ───────────
  {
    slug: "healthcare-telemedicine",
    order: 2,
    title: "Healthcare Appointment System with Telemedicine",
    category: "Full Stack · WebRTC · HealthTech",
    year: "2026",
    role: "Full Stack Developer",
    duration: "2 weeks",
    summary:
      "Telemedicine & clinical scheduling platform with encrypted WebRTC consultations, live queue synchronization, and OpenFDA safety checks.",
    description:
      "Engineered an end-to-end healthcare platform connecting patients and medical specialists. Features peer-to-peer WebRTC video consultations with encrypted signaling, real-time live appointment queue tracking via Socket.io, dynamic slot scheduling across Patient, Doctor, and Admin dashboards, Razorpay payment processing, and SMS/Email reminders via Twilio and Nodemailer. Built a dedicated Flask microservice that queries the OpenFDA database to verify prescription safety and flag dangerous drug interactions before consultations.",
    longDescription:
      "Built end to end as sole developer covering requirements, database design, backend microservices, patient/doctor dashboards, and external integrations. The system solves clinic wait-time uncertainty with real-time queue visibility and allows remote medical consultations with peer-to-peer WebRTC streaming.",
    highlights: [
      "Peer-to-peer encrypted WebRTC video consultation rooms with responsive media controls",
      "Real-time live queue and appointment slot synchronization powered by Socket.io",
      "Flask microservice integrated with OpenFDA API for automated drug interaction screening",
      "Secure Razorpay payment integration with automated invoice and receipt dispatch",
      "Multi-channel reminders via Twilio SMS and Nodemailer email pipelines",
    ],
    features: [
      "Patient, Doctor, and Admin dashboards with JWT, bcrypt, and role-based access control",
      "Real-time appointment booking with live slot availability, rescheduling, and cancellation",
      "Live queue position visibility for patients via Socket.io/WebSockets",
      "Peer-to-peer video consultations using WebRTC with a Socket.io signaling server",
      "Integrated Razorpay for order creation, payment verification, receipts, and refunds",
      "Automated SMS (Twilio) and email (Nodemailer) medicine reminders using node-cron",
      "Dedicated Python Flask microservice for medicine information and adverse event checks via OpenFDA API",
      "Verified-review system limited strictly to patients with completed consultations",
    ],
    challenges: [
      "Managing robust WebRTC peer connections and signaling across varying network conditions and NAT traversal",
      "Preventing double-booking race conditions during high-volume appointment slot reservations",
    ],
    results: [
      "End-to-end delivery of 3 role dashboards, payment processing, WebRTC streaming, and microservices",
    ],
    tech: [
      "Next.js",
      "Node.js",
      "Express",
      "Flask",
      "PostgreSQL",
      "WebRTC",
      "Socket.io",
      "Razorpay",
      "Twilio",
      "Tailwind CSS",
    ],
    image: "/assets/portfolio/Health-app/1.png",
    // TODO: Add high-resolution screenshots to public/images/projects/healthcare-telemedicine/
    gallery: [
      {
        src: "/assets/portfolio/Health-app/1.png",
        alt: "Dashboard screenshot",
        caption: "Dashboard",
      },
      {
        src: "/assets/portfolio/Health-app/2.png",
        alt: "Doctor list screenshot",
        caption: "Doctor list",
      },
      {
        src: "/assets/portfolio/Health-app/3.png",
        alt: "Video call screenshot",
        caption: "Video call",
      },
      {
        src: "/assets/portfolio/Health-app/4.png",
        alt: "Reminder feature screenshot",
        caption: "Reminder feature",
      },
      {
        src: "/assets/portfolio/Health-app/5.png",
        alt: "Appointment list screenshot",
        caption: "Appointment list",
      },

    ],
    featured: true,
    liveUrl: "https://healthcare-appointment-system-tau.vercel.app/",
    githubUrl: "https://github.com/rohangawande2303/healthcare-appointment-system",
  },

  // ─── 03. FLAGSHIP: GOATWEAR SHOPIFY STORE ───────────────────────────────────
  {
    slug: "goatwear-streetwear-store",
    order: 3,
    title: "GOATWEAR Streetwear Store",
    category: "E-Commerce · Liquid · Headless",
    year: "2026",
    role: "Shopify Developer & Designer",
    duration: "2 weeks",
    summary:
      "High-converting bespoke Shopify storefront created for a fast-growing Indian streetwear fashion brand.",
    description:
      "Designed and developed a custom Shopify storefront using Liquid, Tailwind CSS, and modern JavaScript. Built for mobile shopping experiences, interactive drop lookbooks, dynamic collection filtering, custom size guides, and an elevated cart drawer with upsell triggers. Streamlined localized Indian payment flows including UPI and Cash on Delivery.",
    longDescription:
      "Engineered from scratch to elevate an Indian streetwear brand beyond generic Shopify templates. Worked directly with the client on brand identity, lookbook animations, typography, and checkout flows optimized for high-traffic drops.",
    highlights: [
      "Custom Shopify Liquid theme engineered from scratch for high-performance drops",
      "Sub-second page speeds with optimized image rendering and asset delivery",
      "Bespoke interactive lookbooks and animated size selection drawers",
      "Integrated Indian payment options (UPI, NetBanking, Cards) and WhatsApp order notifications",
    ],
    features: [
      "Custom-designed Shopify storefront tailored for an Indian streetwear brand",
      "Bespoke homepage sections, lookbooks, navigation, and product organization",
      "Mobile-first responsive UX optimized for rapid checkout and drop launches",
      "Third-party integrations with payment gateways, logistics, and notification tools",
    ],
    challenges: [
      "Customizing Shopify Liquid templates while maintaining fast mobile load times during product drop spikes",
    ],
    results: [
      "Collaborated directly with client on requirements, testing, launch, and post-launch maintenance",
    ],
    tech: ["Shopify", "Liquid", "JavaScript", "Tailwind CSS", "Shopify APIs"],
    image: "/assets/portfolio/goatwear/1.png",
    // TODO: Add high-resolution screenshots to public/images/projects/goatwear-streetwear-store/
    gallery: [],
    featured: true,
    liveUrl: "https://aamhi-khandeshi.vercel.app/",
    githubUrl: "https://github.com/rohangawande2303/Food-app-Aamhi-Khandeshi-",
  },

  // ─── 04. FOOD ORDERING APP (AAMHI KHANDESHI) ────────────────────────────────
  {
    slug: "food-ordering-app",
    order: 4,
    title: "Food Ordering App (Aamhi Khandeshi)",
    category: "E-Commerce · Web App",
    year: "2024",
    role: "Sole Developer",
    duration: "2 months",
    summary:
      "Regional dry-food e-commerce platform with real-time Firebase inventory, Clerk authentication, and Razorpay checkout.",
    description:
      "Developed a full-featured e-commerce platform dedicated to authentic regional delicacies. Features server-side rendering for top SEO visibility, Clerk authentication with 2FA, real-time product inventory and order synchronization with Firebase Firestore, Razorpay payment gateway integration supporting UPI/Cards/NetBanking, and a custom administrative dashboard for tracking sales and fulfillment.",
    highlights: [
      "Real-time product inventory and order management powered by Firebase Firestore",
      "Secure Razorpay checkout supporting all major payment instruments (UPI, Cards, NetBanking)",
      "Dedicated admin control panel for instant catalog and order dispatch updates",
      "Mobile-first responsive UI built with Tailwind CSS and Next.js SSR for SEO",
    ],
    features: [
      "Full-stack store delivering UI/UX for desktop and mobile, product pages, cart, and checkout flow",
      "Firebase Auth and Firestore database for user accounts, products, and order histories",
      "Razorpay payment gateway integration with automated payment verification",
      "Admin dashboard for product catalog management and fulfillment tracking",
    ],
    tech: ["Next.js", "Tailwind CSS", "Firebase", "Razorpay"],
    image: "/assets/portfolio/food-ordering-app.png",
    gallery: [
      {
        src: "/assets/portfolio/food-ordering-app.png",
        alt: "Food Ordering App Home and Catalog",
        caption: "Product catalog and ordering flow",
      },
      {
        src: "/assets/portfolio/food-ordering/2.png",
        alt: "Food Ordering App Home and Catalog",
        caption: "Product catalog and ordering flow",
      },
      {
        src: "/assets/portfolio/food-ordering/3.png",
        alt: "Food Ordering App Home and Catalog",
        caption: "Product catalog and ordering flow",
      },
      {
        src: "/assets/portfolio/food-ordering/4.png",
        alt: "Food Ordering App Home and Catalog",
        caption: "Product catalog and ordering flow",
      },
      {
        src: "/assets/portfolio/food-ordering/5.png",
        alt: "Food Ordering App Home and Catalog",
        caption: "Product catalog and ordering flow",
      }
    ],
    featured: true,
    liveUrl: "https://aamhi-khandeshi.vercel.app/",
    githubUrl: "https://github.com/rohangawande2303/Food-app-Aamhi-Khandeshi-",
  },

  // ─── 05. YOGA APPOINTMENT BOOKING WEB APP ───────────────────────────────────
  {
    slug: "appointment-app",
    order: 5,
    title: "Yoga Appointment Booking App",
    category: "Web App · Booking · Auth",
    year: "2024",
    role: "Full Stack Developer",
    duration: "1.5 months",
    summary:
      "Mobile-app-style yoga class booking platform with Firebase Auth, Google OAuth, and instructor schedule dashboards.",
    description:
      "Engineered a full-stack yoga appointment booking web application featuring Google OAuth authentication, teacher schedules, real-time booking slots, and a comprehensive administrative dashboard for user and appointment management.",
    highlights: [
      "Google OAuth integration with protected student and instructor routes",
      "Real-time appointment slot availability tracking powered by Firebase",
      "Comprehensive administrative dashboard for class schedules and analytics",
      "Mobile-first app UI with smooth booking workflows and instant feedback",
    ],
    features: [
      "Mobile-app-style booking platform planned from user flow to deployment and post-launch updates",
      "Firebase Authentication and Firestore data models for users, classes, and bookings",
      "Responsive layout optimized for mobile smartphones and desktop screens",
    ],
    tech: ["Next.js", "Tailwind CSS", "Firebase", "Google Auth"],
    image: "/assets/portfolio/yoga.png",
    gallery: [
      {
        src: "/assets/portfolio/yoga.png",
        alt: "Yoga Appointment Booking Interface",
        caption: "Appointment scheduling and slot selection view",
      },
    ],
    featured: true,
    liveUrl: "https://yoga-appointment-app-luz6.vercel.app/auth/login",
    githubUrl: "https://github.com/rohangawande2303/Yoga-appointment-app",
  },

  // ─── 06. DIGITAL MARKETING AGENCY (SOCIAL PULSE) ────────────────────────────
  {
    slug: "social-pulse-agency",
    order: 6,
    title: "Digital Marketing App (Social Pulse Agency)",
    category: "Agency · Web · Lead Gen",
    year: "2024",
    role: "Developer & UI/UX Designer",
    duration: "3 weeks",
    summary:
      "High-conversion agency web platform with automated lead generation pipelines, Calendly booking, and full SEO ranking.",
    description:
      "Designed and developed a corporate web application focused on client acquisition for a creative marketing agency. Built with Next.js and TypeScript for rapid page delivery and SEO ranking, styled with Tailwind CSS, and enhanced with Framer Motion animations. Integrated lead capture forms syncing to Google Sheets and Calendly for instant client consultation scheduling.",
    highlights: [
      "Seamless Calendly appointment scheduling embedded for discovery calls",
      "Automated lead generation capture triggering real-time spreadsheet updates",
      "SEO best practices implemented with Google Analytics and Search Console tracking",
      "Fluid interactive transitions and micro-animations with Motion",
    ],
    features: [
      "Multi-page website for a digital marketing agency with Home, About, and dedicated service pages",
      "High-converting inquiry forms routing prospective client data directly to Google Sheets",
      "Fully responsive architecture with Google Analytics setup and metadata SEO",
    ],
    tech: ["Next.js", "TypeScript", "Tailwind CSS", "Motion", "Calendly", "SEO"],
    image: "/assets/portfolio/social-pulse-agency/1.png",
    gallery: [
      {
        src: "/assets/portfolio/social-pulse-agency.png",
        alt: "Social Pulse Agency Hero Section",
        caption: "Hero Section – Digital marketing agency introduction",
      },
      {
        src: "/assets/portfolio/social-pulse-agency/2.png",
        alt: "Social Pulse Agency About Section",
        caption: "About Us – Agency overview, vision, and expertise",
      },
      {
        src: "/assets/portfolio/social-pulse-agency/3.png",
        alt: "Social Pulse Agency Client Showcase",
        caption: "Our Clients – Brands and businesses we've worked with",
      },
      {
        src: "/assets/portfolio/social-pulse-agency/4.png",
        alt: "Social Pulse Agency Services",
        caption: "Our Services – Digital marketing solutions and expertise",
      },
      {
        src: "/assets/portfolio/social-pulse-agency/5.png",
        alt: "Social Pulse Agency Testimonials",
        caption: "Testimonials – Client feedback and experiences",
      },
      {
        src: "/assets/portfolio/social-pulse-agency/6.png",
        alt: "Social Pulse Agency India Project Map",
        caption: "Our Reach – Map showcasing live and completed projects across India",
      },
    ],
    featured: false,
    isClientSite: true,
    liveUrl: "https://www.socialpulseagency.in/",
    githubUrl: "https://github.com/rohangawande2303/social-pulse-agency",
  },

  // ─── LANDMARK ARISTO ────────────────────────────────────────────────────────
  {
    slug: "landmark-aristo",
    order: 7,
    title: "Landmark Aristo",
    category: "Landing page · Real Estate",
    year: "2026",
    role: "UI/UX and Front-end Developer",
    duration: "Project Based",
    summary:
      "Premium residential real estate landing page showcasing luxury homes with an elegant user experience and conversion-focused enquiry sections.",
    description:
      "Developed a premium real estate landing page for Landmark Group's Landmark Aristo project. Focused on presenting the property's luxury positioning through an elegant visual experience, structured project information, and strategically placed enquiry sections to help prospective homebuyers explore the development and connect with the sales team.",
    highlights: [
      "Developed a premium digital presence aligned with the project's luxury residential positioning",
      "Designed visually engaging sections to showcase project details and residential offerings",
      "Integrated strategically positioned enquiry sections to encourage prospective buyer inquiries",
      "Responsive layout optimized for seamless browsing across desktop, tablet, and mobile devices",
    ],
    features: [
      "Luxury-focused landing page design with premium visual presentation",
      "Structured property information and residential project highlights",
      "Enquiry-focused sections for prospective homebuyers",
      "Responsive and user-friendly interface across devices",
    ],
    tech: ["Next.js", "TypeScript", "Tailwind CSS", "UI/UX", "SEO"],
    image: "/assets/portfolio/landmark/1.png",
    gallery: [
      {
        src: "/assets/portfolio/landmark/1.png",
        alt: "Landmark Aristo Hero Section",
        caption: "Hero Section – Luxury residential project introduction",
      },
      {
        src: "/assets/portfolio/landmark/2.png",
        alt: "Landmark Aristo Project Overview",
        caption: "About the Project – Residential development overview",
      },
      {
        src: "/assets/portfolio/landmark/3.png",
        alt: "Landmark Aristo Amenities",
        caption: "Amenities – Lifestyle facilities and shared amenities",
      },
      {
        src: "/assets/portfolio/landmark/4.png",
        alt: "Landmark Aristo Interior Amenities",
        caption: "Interior Amenities – Premium in-home features and facilities",
      },
      {
        src: "/assets/portfolio/landmark/5.png",
        alt: "Landmark Aristo Floor Plans",
        caption: "Floor Plans – Residential layouts and configurations",
      },
      {
        src: "/assets/portfolio/landmark/6.png",
        alt: "Landmark Aristo Location",
        caption: "Location – Project location and connectivity highlights",
      },
      {
        src: "/assets/portfolio/landmark/7.png",
        alt: "Landmark Aristo Contact Form",
        caption: "Contact – Property enquiry and lead generation form",
      },
    ],
    featured: false,
    isClientSite: true,
    liveUrl: "https://www.landmarkaristo.com/",
    githubUrl: "https://github.com/landmarkaristo/Landmark-aristo",
  },

  // ─── SSL BELLAGIO ───────────────────────────────────────────────────────────
  {
    slug: "ssl-bellagio",
    order: 8,
    title: "SSL Bellagio",
    category: "Landing page· Real Estate",
    year: "2026",
    role: "UI/UX and Front-end Developer",
    duration: "Project Based",
    summary:
      "Premium residential real estate landing page designed to showcase SSL Bellagio's luxury towers through an engaging and enquiry-focused digital experience.",
    description:
      "Developed a premium real estate landing page for SSL Realty's SSL Bellagio project. Created a polished digital experience highlighting the residential development, presenting its key property information through an organized layout, attractive visual sections, and enquiry-focused user journeys designed to connect interested buyers with the sales team.",
    highlights: [
      "Created a premium digital presence for SSL Bellagio's residential tower development",
      "Designed engaging visual sections to communicate the project's premium positioning",
      "Structured property information to help prospective buyers explore the development",
      "Implemented responsive layouts and enquiry-focused user experiences across devices",
    ],
    features: [
      "Premium residential project landing page with modern visual presentation",
      "Dedicated sections for project information and residential highlights",
      "Enquiry-focused user journey for prospective property buyers",
      "Responsive interface optimized for desktop, tablet, and mobile devices",
    ],
    tech: ["Next.js", "TypeScript", "Tailwind CSS", "UI/UX", "SEO"],
    image: "/assets/portfolio/bellagio/1.png",
    gallery: [
      {
        src: "/assets/portfolio/bellagio/1.png",
        alt: "SSL Bellagio Hero Section",
        caption: "Hero Section – Premium residential towers introduction",
      },
      {
        src: "/assets/portfolio/bellagio/2.png",
        alt: "SSL Bellagio Project Overview",
        caption: "About the Project – Residential development overview",
      },
      {
        src: "/assets/portfolio/bellagio/3.png",
        alt: "SSL Bellagio Amenities",
        caption: "Amenities – Lifestyle facilities and recreational spaces",
      },
      {
        src: "/assets/portfolio/bellagio/4.png",
        alt: "SSL Bellagio Floor Plans",
        caption: "Floor Plans – Residential layouts and configurations",
      },
      {
        src: "/assets/portfolio/bellagio/5.png",
        alt: "SSL Bellagio Contact Form",
        caption: "Contact – Property enquiry and lead generation form",
      },
    ],
    featured: false,
    isClientSite: true,
    liveUrl: "https://www.sslbellagio.com/",
    githubUrl: "https://github.com/sslbellagio/bellagio-website",
  },

  // ─── 09. HUBTOWN TRADE CENTRE ───────────────────────────────────────────────
  {
    slug: "trade-centre",
    order: 9,
    title: "Hubtown Trade Centre",
    category: "Commercial Real Estate · Landing Page",
    year: "2025",
    role: "Full Stack Developer",
    duration: "72 hours",
    summary:
      "Conversion-focused commercial property landing page built in 3 days with PPC-optimized SEO and Google Sheets lead capture.",
    description:
      "Delivered an urgent commercial real estate landing page in 72 hours to support active Google Ads and PPC marketing campaigns. Managed the full lifecycle from design to deployment, including direct lead integration into Google Sheets and CRM pipelines, resulting in consistent customer conversion.",
    highlights: [
      "Designed and deployed in 72 hours for active Google Ads PPC campaigns",
      "Automated lead capture routing inquiries directly to CRM and Google Sheets",
      "Conversion-oriented design with sticky call-to-actions and mobile optimization",
      "Google Analytics tracking and SEO optimization for top campaign performance",
    ],
    features: [
      "Commercial real estate website built specifically to generate qualified leads from Google Ads",
      "Sticky enquiry bars, interactive brochure downloads, and instant sales alerts",
    ],
    tech: ["Next.js", "TypeScript", "Tailwind CSS", "UI/UX", "SEO", "Google Sheets Integration"],
    image: "/assets/portfolio/trade-centre.png",
    gallery: [
      {
        src: "/assets/portfolio/trade-centre.png",
        alt: "Hubtown Trade Centre Landing Page",
        caption: "Commercial space overview and lead capture form",
      },
    ],
    featured: false,
    isClientSite: true,
    liveUrl: "https://www.hubtowntradecentre.com/",
    githubUrl: "https://github.com/hubtown-tradecentre/Trade-centre",
  },

  // ─── 10. BEQUBE CONSULTANCY ────────────────────────────────────────────────
  {
    slug: "beqube",
    order: 10,
    title: "Beqube Consultancy Website",
    category: "Consultancy · Web",
    year: "2025",
    role: "Sole Developer & Designer",
    duration: "2 weeks",
    summary:
      "Multi-page consultancy platform showcasing corporate advisory services, client portfolios, and automated inquiry sync.",
    description:
      "Created a comprehensive multi-page website for Beqube Consultancy to establish a commanding digital presence. Handled UI/UX design, custom animations with Motion, automated inquiry collection via Google Sheets, and full technical SEO setup.",
    highlights: [
      "Multi-page platform highlighting corporate advisory services and client testimonials",
      "Automated inquiry collection with Google Sheets integration for lead tracking",
      "Fluid interactive transitions and micro-animations with Motion",
      "End-to-end delivery: UI/UX, development, SEO, and deployment",
    ],
    features: [
      "Website for a real estate consultancy firm with multi-page service descriptions and lead forms",
      "Automated spreadsheet sync for incoming prospective client requests",
    ],
    tech: ["Next.js", "TypeScript", "Tailwind CSS", "Motion", "SEO", "Google Sheets Integration"],
    image: "/assets/portfolio/beqube.png",
    gallery: [
      {
        src: "/assets/portfolio/beqube.png",
        alt: "Beqube Consultancy Website",
        caption: "Corporate advisory overview and client testimonials",
      },
    ],
    featured: false,
    isClientSite: true,
    liveUrl: "https://beqube-website.vercel.app/",
    githubUrl: "https://github.com/beqube/beqube_website",
  },

  // ─── 11. KD RMC LLP ────────────────────────────────────────────────────────
  {
    slug: "kd-rmc-llp",
    order: 11,
    title: "KD RMC LLP ",
    category: "Industrial · Construction Materials",
    year: "2025",
    role: "Full Stack Developer & SysAdmin",
    duration: "1 month",
    summary:
      "Industrial brand web platform for a major ready-mix concrete enterprise, complete with domain management, SEO, and deployment.",
    description:
      "Designed and launched a bespoke corporate website for KD RMC LLP, a leading Ready Mix Concrete manufacturer. Handled everything from brand-aligned UI design and subtle animations to technical SEO, domain configuration, and cloud hosting.",
    highlights: [
      "End-to-end delivery: industrial UI/UX, responsive coding, SEO, and cloud deployment",
      "Clean industrial brand aesthetics tailored for B2B infrastructure clients",
      "Subtle animations with Motion providing a modern feel to an industrial enterprise",
      "Domain setup, DNS routing, and Let's Encrypt SSL management",
    ],
    features: [
      "Business website with lead generation for a cement RMC (ready-mix concrete) plant",
      "Product specification sheets, plant capability showcases, and quotation requests",
      "DNS configuration and SSL termination on Linux VPS",
    ],
    tech: ["Next.js", "Motion", "Custom CSS", "UI/UX", "SEO", "Deployment", "Domain Management"],
    image: "/assets/portfolio/kd-rmc-llp.png",
    gallery: [
      {
        src: "/assets/portfolio/kd-rmc-llp.png",
        alt: "KD RMC LLP Corporate Site",
        caption: "Industrial concrete product line and contact channels",
      },
    ],
    featured: false,
    isClientSite: true,
    liveUrl: "https://www.kdrmcllp.in/",
    githubUrl: "https://github.com/kdrmcllp/KD-RMC-LLP-website",
  },

  // {
  //   slug: "real-estate",
  //   order: 13,
  //   title: "Real Estate App (Aarav Realty)",
  //   category: "Real Estate · Web",
  //   year: "2024",
  //   role: "Full Stack Developer",
  //   duration: "1 month",
  //   summary:
  //     "Comprehensive property listing platform with image galleries, neighborhood filter, and automated lead alerts.",
  //   description:
  //     "Engineered an interactive real estate platform showcasing residential and commercial properties. Includes responsive image galleries for every listing, automated email alerts upon lead form submission, and an intuitive property filter system built with Next.js and Tailwind CSS.",
  //   highlights: [
  //     "High-resolution interactive image galleries for residential & commercial properties",
  //     "Automated lead capture with instant email notifications for real estate brokers",
  //     "Responsive search filters by location, budget, and property specifications",
  //     "Optimized user journey with clear calls to action and fast mobile browsing",
  //   ],
  //   features: [
  //     "Independently designed, built, deployed, and maintained real estate website to showcase properties",
  //     "Enquiry capture forms and property presentations with mobile-first responsiveness",
  //   ],
  //   tech: ["Next.js", "Tailwind CSS", "UI/UX", "SEO"],
  //   image: "/assets/portfolio/aarav-realty.png",
  //   gallery: [
  //     {
  //       src: "/assets/portfolio/aarav-realty.png",
  //       alt: "Aarav Realty Property Showcase",
  //       caption: "Residential listing and floor plan overview",
  //     },
  //   ],
  //   featured: false,
  //   isClientSite: true,
  //   liveUrl: "https://www.aaravrealty.in/",
  //   githubUrl: "https://github.com/rohangawande2303/aarav-realty",
  // },

  // ─── 08. RUTU GROUP (SSL BELLAGIO) ──────────────────────────────────────────
  {
    slug: "rutu-group",
    order: 12,
    title: "Rutu Group Website",
    category: "Corporate · Real Estate",
    year: "2024",
    role: "Sole Developer & Designer",
    duration: "1 month",
    summary:
      "Corporate web presence for a legacy real estate developer (45+ years) with automated Google Sheets lead routing.",
    description:
      "Designed and developed the corporate web platform for Rutu Group. Created all wireframes, mockups, and the final production interface from scratch. Engineered dedicated showcase pages for ongoing and completed townships, with location maps, amenity highlights, and automated Google Sheets lead capture.",
    highlights: [
      "Complete UI/UX wireframes, branding mockups, and production code built solo",
      "Dedicated township pages with high-res imagery, floor plans, and amenities",
      "Integrated contact forms syncing inquiries directly to sales Google Sheets",
      "Fast SSR page loads with Next.js and responsive layouts with Tailwind CSS",
    ],
    features: [
      "Real estate website with property presentation, township showcases, and enquiry forms",
      "Google Sheets integration routing leads in real-time to the sales management team",
    ],
    tech: ["Next.js", "Tailwind CSS", "UI/UX", "SEO", "Google Sheets Integration"],
    image: "/assets/portfolio/rutu-group.png",
    gallery: [
      {
        src: "/assets/portfolio/rutu-group.png",
        alt: "Rutu Group Website",
        caption: "Township showcase and enquiry modal",
      },
    ],
    featured: false,
    isClientSite: true,
    liveUrl: "https://rutu-group.vercel.app/",
    githubUrl: "https://github.com/Rutugroup/Rutu-group",
  },

  // ─── HIDDEN HISTORICAL CLONES (hidden: true, excluded from display) ─────────
  {
    slug: "e-commerce-app",
    order: 14,
    title: "Furniture E-Commerce App (Comfy Sloth)",
    category: "E-Commerce · React · Stripe",
    year: "2023",
    role: "Frontend Developer",
    summary:
      "Full-featured online furniture store with GitHub OAuth, dynamic product filtering, cart management, and Stripe checkout.",
    description:
      "Developed a complete furniture e-commerce store with React, Styled Components, Stripe, and Auth0.",
    highlights: [
      "Secure user authentication via Auth0 with GitHub OAuth login",
      "Stripe payment gateway integration supporting multi-currency checkout",
      "Dynamic catalog filters for price range, product category, and colors",
    ],
    tech: ["React", "Styled Components", "Stripe", "Auth0"],
    image: "/assets/portfolio/E-commerce.jpg",
    featured: false,
    hidden: true,
    liveUrl: "https://react-course-comfy-sloth-store.netlify.app/",
    githubUrl: "https://github.com/rohangawande2303/e-commerce-app",
  },
  {
    slug: "disney-app",
    order: 15,
    title: "Disney+ Streaming Clone",
    category: "Web App · Media · Streaming",
    year: "2023",
    role: "Frontend Developer",
    summary:
      "Interactive entertainment streaming interface replicating Disney+ content channels, trailers, and responsive media slider.",
    description:
      "Developed a faithful clone of the Disney+ streaming interface with React and React Router.",
    highlights: [
      "Component-based interactive UI replicating Disney's content delivery magic",
      "Seamless client-side page transitions mimicking the official platform",
      "Responsive media sliders and animated brand portal cards",
    ],
    tech: ["React.js", "React Router", "CSS", "JavaScript"],
    image: "/assets/portfolio/Disney-clone.jpg.png",
    featured: false,
    hidden: true,
    liveUrl: "https://disney-clone-project.netlify.app/",
    githubUrl: "https://github.com/rohangawande2303/Disney-clone",
  },
];

/**
 * Client Websites data (kept for reference)
 */
export const clientSites: ClientSite[] = [
  {
    title: "Landmark Aristo",
    client: "Landmark Group",
    url: "https://www.landmarkaristo.com/",
    image: "/assets/portfolio/aarav-realty.png",
    category: "Luxury Residential",
  },
  {
    title: "SSL Bellagio",
    client: "SSL Realty",
    url: "https://www.sslbellagio.com/",
    image: "/assets/portfolio/rutu-group.png",
    category: "Premium Towers",
  },
  {
    title: "Hubtown Trade Centre",
    client: "Hubtown Group",
    url: "https://www.hubtowntradecentre.com/",
    image: "/assets/portfolio/trade-centre.png",
    category: "Commercial Spaces",
  },
  {
    title: "BeQube Consultancy",
    client: "BeQube Advisory",
    url: "https://beqube-website.vercel.app/",
    image: "/assets/portfolio/beqube.png",
    category: "Corporate Advisory",
  },
  {
    title: "Social Pulse Agency",
    client: "Social Pulse",
    url: "https://www.socialpulseagency.in/",
    image: "/assets/portfolio/social-pulse-agency.png",
    category: "Digital Agency",
  },
  {
    title: "KD RMC LLP",
    client: "KD RMC",
    url: "https://www.kdrmcllp.in/",
    image: "/assets/portfolio/kd-rmc-llp.png",
    category: "Ready-Mix Concrete",
  },
];
