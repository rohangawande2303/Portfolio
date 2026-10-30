export type SkillFamily =
  | "Languages"
  | "Frontend"
  | "Backend"
  | "Databases"
  | "DevOps & Tools"
  | "AI & ML";

export type Skill = {
  number: number;
  symbol: string;
  name: string;
  family: SkillFamily;
  description: string; // One-line "what I use it for" strictly from resume
};
