import { Metadata } from "next";
import { notFound } from "next/navigation";
import { getProjects, getProjectBySlug } from "@/lib/projects";
import ProjectDetailView from "@/components/work/ProjectDetailView";

interface PageProps {
  params: Promise<{ slug: string }>;
}

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://rohan23-portfolio.vercel.app";

// ─── 01. STATIC PARAMS GENERATION ───
export async function generateStaticParams() {
  const all = await getProjects();
  return all
    .filter((p) => !p.hidden)
    .map((p) => ({
      slug: p.slug,
    }));
}

// ─── 02. DYNAMIC METADATA ───
export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = await getProjectBySlug(slug);

  if (!project || project.hidden) {
    return {
      title: "Project Not Found — Rohan Gawande",
    };
  }

  const pageTitle = `${project.title} — Rohan Gawande`;
  const pageDesc = project.summary;
  const canonicalUrl = `${siteUrl}/work/${project.slug}`;

  return {
    title: pageTitle,
    description: pageDesc,
    alternates: {
      canonical: canonicalUrl,
    },
    openGraph: {
      title: pageTitle,
      description: pageDesc,
      url: canonicalUrl,
      type: "article",
      siteName: "Rohan Gawande Portfolio",
    },
    twitter: {
      card: "summary_large_image",
      title: pageTitle,
      description: pageDesc,
    },
  };
}

// ─── 03. DETAIL PAGE COMPONENT ───
export default async function ProjectPage({ params }: PageProps) {
  const { slug } = await params;
  const project = await getProjectBySlug(slug);

  if (!project || project.hidden) {
    notFound();
  }

  // Calculate previous and next non-hidden projects
  const allProjects = (await getProjects()).filter((p) => !p.hidden);
  const currentIndex = allProjects.findIndex((p) => p.slug === project.slug);
  const prevProject = currentIndex > 0 ? allProjects[currentIndex - 1] : undefined;
  const nextProject =
    currentIndex < allProjects.length - 1 ? allProjects[currentIndex + 1] : undefined;

  // JSON-LD CreativeWork Schema (strictly NO person photos)
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "CreativeWork",
    name: project.title,
    headline: project.title,
    description: project.summary,
    author: {
      "@type": "Person",
      name: "Rohan Gawande",
      jobTitle: "Full Stack Developer",
      url: siteUrl,
    },
    datePublished: project.year,
    keywords: project.tech.join(", "),
    url: `${siteUrl}/work/${project.slug}`,
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <ProjectDetailView
        project={project}
        prevProject={prevProject}
        nextProject={nextProject}
      />
    </>
  );
}
