import { ExperienceItem } from "@/types/experience";

export const experienceItems: ExperienceItem[] = [
  {
    id: "freelance-developer",
    type: "work",
    role: "Freelance Full Stack Developer",
    company: "Self-Employed",
    period: "2024 – Present",
    location: "Mumbai, India (Remote)",
    bullets: [
      "Delivered 10+ live projects for clients across real estate, e-commerce, food, wellness, digital marketing and construction materials, handling the full cycle independently: requirements, design, development, testing, deployment and maintenance.",
      "Built and maintained 6 lead-generation websites for real estate, consultancy, marketing and RMC businesses, with enquiry forms, responsive design and SEO.",
      "Communicated directly with clients to translate business goals into working software, and supported products after launch.",
      "Deployed and maintained applications on Vercel and VPS servers with Docker, Nginx and SSL.",
    ],
    tags: [
      "Next.js",
      "FastAPI",
      "PostgreSQL",
      "Docker",
      "Tailwind CSS",
      "Nginx",
      "VPS",
    ],
  },
  {
    id: "education-bca",
    type: "education",
    role: "Bachelor of Computer Applications (BCA)",
    company: "Degree Program",
    period: "2026",
    location: "Mumbai, India",
    bullets: [
      "Computer applications and software engineering foundation with practical emphasis on database design, web architecture, and full-stack development.",
      "Independently engineered end-to-end applications including the Multi-Tenant Real Estate CRM and Healthcare Appointment Telemedicine System.",
    ],
    tags: ["Software Engineering", "Relational Databases", "Web Architecture"],
  },
];
