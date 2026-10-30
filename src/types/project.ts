export type ProjectGalleryItem = {
  src: string;
  alt: string;
  caption?: string;
};

export type Project = {
  slug: string;
  order: number;
  title: string;
  category: string; // e.g. "SaaS · Web · AI"
  year: string;
  role: string; // e.g. "Sole developer & Architect"
  summary: string; // 1-2 lines for cards
  description: string; // overview
  longDescription?: string; // extended deep-dive overview
  highlights: string[];
  features?: string[]; // detailed key feature list
  tech: string[];
  image: string; // e.g. /assets/portfolio/<name>.png
  gallery?: ProjectGalleryItem[]; // multiple screenshots for detail page
  duration?: string; // e.g. "4 months", "72 hours"
  challenges?: string[]; // engineering challenges solved
  results?: string[]; // verified outcomes / metrics
  liveUrl?: string;
  githubUrl?: string;
  featured?: boolean;
  hidden?: boolean;
  isClientSite?: boolean;
};

export type ClientSite = {
  title: string;
  client: string;
  url: string;
  image?: string;
  category?: string;
};
