"use client";

import { useState } from "react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import ContactSlideover from "@/components/ContactSlideover";
import Hero from "@/components/sections/Hero";
import Work from "@/components/sections/Work";
import TestimonialsMarquee from "@/components/sections/TestimonialsMarquee";
import About from "@/components/sections/About";
import Skills from "@/components/sections/Skills";
import AllProjects from "@/components/sections/AllProjects";
// import Experience from "@/components/sections/Experience";
import Contact from "@/components/sections/Contact";
import { projects } from "@/data/projects";
import { testimonials } from "@/data/testimonials";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://rohan23-portfolio.vercel.app";

const personJsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Rohan Gawande",
  jobTitle: "Full Stack Developer & SaaS Architect",
  url: siteUrl,
  sameAs: [
    "https://github.com/rohangawande2303",
    "https://linkedin.com/in/rohan-gawande-5821b1145",
  ],
  address: {
    "@type": "PostalAddress",
    addressLocality: "Mumbai",
    addressCountry: "IN",
  },
  knowsAbout: [
    "Next.js",
    "TypeScript",
    "FastAPI",
    "PostgreSQL",
    "Docker",
    "Python",
    "React",
    "Tailwind CSS",
    "Multi-tenancy",
    "RBAC",
  ],
};

export default function HomePage() {
  const [isContactOpen, setIsContactOpen] = useState(false);

  return (
    <div className="relative min-h-screen flex flex-col bg-[var(--background)] text-[var(--text-primary)] transition-colors">
      {/* JSON-LD Person Schema (Strictly NO photo) */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
      />

      {/* Floating Center Navbar (Scroll-spy on Work, About, Skills, Projects, Contact) */}
      <Navbar onOpenContact={() => setIsContactOpen(true)} />

      {/* Main Content Area */}
      <main className="flex-1 w-full max-w-6xl mx-auto px-6 md:px-12">
        {/* Section 01: Hero Section (No photo, abstract code stack, heavy sans + serif italic) */}
        <Hero onOpenContact={() => setIsContactOpen(true)} />

        {/* Section 03: About (Hanging Lanyard ID Card with 3D Flip, Quick Facts, Quote) */}
        <About />

        {/* Section 02: Work (Featured Projects Accordion) */}
        <Work projects={projects} />

        {/* Section 02.5: Testimonials (No nav item, between Work and About) */}
        <TestimonialsMarquee testimonials={testimonials} />


        {/* Section 04: Skills (Periodic Table, 6 Families, Real Logos, Detail Panel) */}
        <Skills />

        {/*
          ═════════════════════════════════════════════════════════════════════
          HOW TO RE-ENABLE THE EXPERIENCE SECTION:
          1. Uncomment the import of Experience above:
             import Experience from "@/components/sections/Experience";
          2. Uncomment the <Experience /> component below.
          3. Add { label: "Experience", id: "experience" } to NAV_ITEMS in src/components/layout/Navbar.tsx
          ═════════════════════════════════════════════════════════════════════
        */}
        {/* <Experience /> */}

        {/* Section 05: All Projects (Complete responsive project archive grid) */}
        <AllProjects projects={projects} />

        {/* Section 06: Contact (Rolling Email Hover Effect, Contact Cards, Action Button) */}
        <Contact onOpenContact={() => setIsContactOpen(true)} />
      </main>

      {/* Footer */}
      <Footer />

      {/* Contact Slideover Modal */}
      <ContactSlideover
        isOpen={isContactOpen}
        onClose={() => setIsContactOpen(false)}
      />
    </div>
  );
}
