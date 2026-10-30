import { projects, clientSites } from "@/data/projects";
import { Project, ClientSite } from "@/types/project";

export async function getProjects(): Promise<Project[]> {
  // Sort projects by order
  return [...projects].sort((a, b) => a.order - b.order);
}

export async function getFeaturedProjects(): Promise<Project[]> {
  const all = await getProjects();
  return all.filter((p) => p.featured);
}

export async function getProjectBySlug(slug: string): Promise<Project | undefined> {
  return projects.find((p) => p.slug === slug);
}

export async function getClientSites(): Promise<ClientSite[]> {
  return clientSites;
}
