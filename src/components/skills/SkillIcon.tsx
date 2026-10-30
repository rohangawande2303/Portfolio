import React from "react";
import {
  SiJavascript,
  SiTypescript,
  SiPython,
  SiPostgresql,
  SiHtml5,
  SiCss,
  SiNextdotjs,
  SiReact,
  SiTailwindcss,
  SiShadcnui,
  SiReactquery,
  SiReacttable,
  SiReacthookform,
  SiZod,
  SiFramer,
  SiShopify,
  SiFastapi,
  SiNodedotjs,
  SiExpress,
  SiFlask,
  SiJsonwebtokens,
  SiPydantic,
  SiSqlalchemy,
  SiWebrtc,
  SiSocketdotio,
  SiFirebase,
  SiNeon,
  SiDocker,
  SiNginx,
  SiLetsencrypt,
  SiVercel,
  SiRender,
  SiGithubactions,
  SiDependabot,
  SiGit,
  SiGithub,
  SiPostman,
  SiLinux,
  SiRazorpay,
  SiZapier,
  SiPytest,
  SiGooglegemini,
  SiScikitlearn,
} from "react-icons/si";
import {
  Database,
  BarChart3,
  Globe,
  Radio,
  Shield,
  PhoneCall,
  Mail,
  Cpu,
  Braces,
  ShieldCheck,
  ShieldAlert,
  EyeOff,
  Binary,
  LineChart,
  Filter,
  Layers,
  GitBranch,
} from "lucide-react";

interface SkillIconProps {
  name: string;
  className?: string;
  size?: number;
}

export default function SkillIcon({ name, className = "", size = 16 }: SkillIconProps) {
  const iconProps = { className, size };

  switch (name) {
    // Languages
    case "JavaScript":
      return <SiJavascript {...iconProps} />;
    case "TypeScript":
      return <SiTypescript {...iconProps} />;
    case "Python":
      return <SiPython {...iconProps} />;
    case "SQL":
      return <Database {...iconProps} />;
    case "HTML5":
      return <SiHtml5 {...iconProps} />;
    case "CSS3":
      return <SiCss {...iconProps} />;

    // Frontend
    case "Next.js":
      return <SiNextdotjs {...iconProps} />;
    case "React":
      return <SiReact {...iconProps} />;
    case "Tailwind CSS":
      return <SiTailwindcss {...iconProps} />;
    case "shadcn/ui":
      return <SiShadcnui {...iconProps} />;
    case "TanStack Query":
      return <SiReactquery {...iconProps} />;
    case "TanStack Table":
      return <SiReacttable {...iconProps} />;
    case "React Hook Form":
      return <SiReacthookform {...iconProps} />;
    case "Zod":
      return <SiZod {...iconProps} />;
    case "Framer Motion":
      return <SiFramer {...iconProps} />;
    case "Recharts":
      return <BarChart3 {...iconProps} />;
    case "Shopify (Liquid)":
      return <SiShopify {...iconProps} />;

    // Backend
    case "FastAPI":
      return <SiFastapi {...iconProps} />;
    case "Node.js":
      return <SiNodedotjs {...iconProps} />;
    case "Express.js":
      return <SiExpress {...iconProps} />;
    case "Flask":
      return <SiFlask {...iconProps} />;
    case "REST APIs":
      return <Globe {...iconProps} />;
    case "Webhooks":
      return <Radio {...iconProps} />;
    case "JWT Auth":
      return <SiJsonwebtokens {...iconProps} />;
    case "NextAuth.js":
      return <Shield {...iconProps} />;
    case "Pydantic":
      return <SiPydantic {...iconProps} />;
    case "SQLAlchemy":
      return <SiSqlalchemy {...iconProps} />;
    case "Alembic":
      return <GitBranch {...iconProps} />;
    case "WebRTC":
      return <SiWebrtc {...iconProps} />;
    case "Socket.io":
      return <SiSocketdotio {...iconProps} />;

    // Databases
    case "PostgreSQL":
      return <SiPostgresql {...iconProps} />;
    case "Firebase":
      return <SiFirebase {...iconProps} />;
    case "Neon":
      return <SiNeon {...iconProps} />;

    // DevOps & Tools
    case "Docker":
      return <SiDocker {...iconProps} />;
    case "Docker Compose":
      return <Layers {...iconProps} />;
    case "Nginx":
      return <SiNginx {...iconProps} />;
    case "Let's Encrypt SSL":
      return <SiLetsencrypt {...iconProps} />;
    case "Vercel":
      return <SiVercel {...iconProps} />;
    case "Render":
      return <SiRender {...iconProps} />;
    case "GitHub Actions":
      return <SiGithubactions {...iconProps} />;
    case "Dependabot":
      return <SiDependabot {...iconProps} />;
    case "Git":
      return <SiGit {...iconProps} />;
    case "GitHub":
      return <SiGithub {...iconProps} />;
    case "Postman":
      return <SiPostman {...iconProps} />;
    case "Linux (VPS)":
      return <SiLinux {...iconProps} />;
    case "Razorpay":
      return <SiRazorpay {...iconProps} />;
    case "Twilio":
      return <PhoneCall {...iconProps} />;
    case "Nodemailer":
      return <Mail {...iconProps} />;
    case "Zapier / Make":
      return <SiZapier {...iconProps} />;
    case "Pytest":
      return <SiPytest {...iconProps} />;

    // AI & ML
    case "Gemini API":
      return <SiGooglegemini {...iconProps} />;
    case "Prompt Engineering":
      return <Cpu {...iconProps} />;
    case "Structured Outputs":
      return <Braces {...iconProps} />;
    case "LLM Guardrails":
      return <ShieldCheck {...iconProps} />;
    case "Prompt-Injection Defense":
      return <ShieldAlert {...iconProps} />;
    case "PII Redaction":
      return <EyeOff {...iconProps} />;
    case "Natural-Language-to-Query":
      return <Binary {...iconProps} />;
    case "LLM Evaluation":
      return <LineChart {...iconProps} />;
    case "scikit-learn":
      return <SiScikitlearn {...iconProps} />;
    case "Fuzzy Matching":
      return <Filter {...iconProps} />;

    default:
      return <Cpu {...iconProps} />;
  }
}
