export interface ExperienceItem {
  id: string;
  type: "work" | "education";
  role: string;
  company: string;
  period: string;
  location: string;
  bullets: string[];
  tags?: string[];
}
