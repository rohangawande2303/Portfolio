# 📘 Portfolio Editing & Maintenance Guide

Welcome to your portfolio codebase! This guide is written in clear, simple English so anyone can easily add projects, update skills, change copy, or deploy updates without needing to dive deep into complex code.

---

## 🗺️ 1. Map of "Where Is What"

| What you want to change | File to edit | Notes |
| :--- | :--- | :--- |
| **All Projects & Case Studies** | `src/data/projects.ts` | **Single source of truth** for homepage accordion, All Projects grid, and `/work/[slug]` pages. |
| **Skills & Periodic Table** | `src/data/skills.ts` | 60 skills across 6 families, symbols, and "what I use it for" lines. |
| **Testimonials / Endorsements** | `src/data/testimonials.ts` | Quotes, author names, roles, and client company avatars. |
| **Experience Timeline** | `src/data/experience.ts` | Work experience bullets & degree info *(currently hidden on homepage)*. |
| **Hero Headline & Stats** | `src/components/sections/Hero.tsx` | Main greeting, taglines, and animated counter numbers. |
| **About Me & Monogram ID** | `src/components/sections/About.tsx`<br>`src/components/about/LanyardCard.tsx` | Bio text, Quick Facts, and 3D Developer ID card checklist. |
| **Contact Info (Email, Phone)** | `src/components/sections/Contact.tsx`<br>`src/components/ContactSlideover.tsx` | Email address, phone number, location, and inquiry form. |
| **Resume PDF Download** | `public/Rohan-Gawande-Resume.pdf` | Replace this file whenever you have an updated resume. |
| **Contact Form Endpoint & Site URL** | `.env.local` | `NEXT_PUBLIC_CONTACT_ENDPOINT`<br>`NEXT_PUBLIC_SITE_URL` |

---

## 🚀 2. How to Add a New Project

Adding a project takes just **3 simple steps**:

### Step 1: Put your screenshot images in the `public` folder
1. Create a folder for your project screenshots:
   ```
   public/images/projects/your-project-slug/
   ```
2. Put your main cover image and screenshots inside it (e.g. `cover.png`, `dashboard.png`).

### Step 2: Open `src/data/projects.ts` and paste the template
Copy this template block and paste it inside the `projects = [...]` list:

```typescript
{
  slug: "my-new-app",                      // Unique URL: will create /work/my-new-app
  order: 1,                               // Number that controls order (1 = first)
  title: "My Awesome Web Platform",       // Full project name
  category: "SaaS · Web · AI",            // Category badge
  year: "2025",                           // Year or date range
  role: "Sole Developer & Architect",     // Your role
  duration: "3 months",                   // [Optional] How long it took
  summary: "A 1-line description shown on preview cards.",
  description: "A detailed paragraph explaining what the product does and why it was built.",
  longDescription: "Extended deep-dive text shown on the dedicated case study page.",
  highlights: [
    "Key architectural achievement 1",
    "Key architectural achievement 2",
    "Security, performance, or database highlight 3",
  ],
  features: [
    "Detailed feature description 1",
    "Detailed feature description 2",
  ],
  challenges: [
    "Engineering challenge you faced and how you solved it",
  ],
  results: [
    "Production outcome, performance metric, or verified delivery",
  ],
  tech: ["Next.js", "TypeScript", "FastAPI", "PostgreSQL", "Tailwind CSS"],
  image: "/images/projects/my-new-app/cover.png",
  gallery: [
    {
      src: "/images/projects/my-new-app/dashboard.png",
      alt: "Dashboard view",
      caption: "Interactive user analytics dashboard"
    },
  ],
  liveUrl: "https://my-app.vercel.app",   // [Optional] Omit or leave blank if not live
  githubUrl: "https://github.com/...",    // [Optional] Omit or leave blank if private
  featured: true,                         // Set true to show in the top Work accordion
  isClientSite: false,                    // Set true if it's a commissioned client site
  hidden: false,                          // Set false to show, true to hide
}
```

### Step 3: Test and build
Run `npm run build` in your terminal. Next.js will automatically generate the new page at `/work/my-new-app` and include it in the sitemap!

---

## ✏️ 3. How to Edit, Remove, Hide, or Reorder Projects

All of these actions are done in `src/data/projects.ts`:

- **To EDIT a project:** Simply find the project by its `title` or `slug` and edit the text.
- **To REMOVE a project:** Delete its curly-bracket `{ ... }` block from `src/data/projects.ts`.
- **To temporarily HIDE a project:** Add `hidden: true,` to its block. It will disappear from the homepage, the All Projects grid, and won't generate a detail page.
- **To REORDER projects:** Change the `order` number (e.g. `order: 1` appears before `order: 2`).
- **To SHOW in the top Work accordion:** Set `featured: true,`. The top accordion showcases your top featured projects.
- **To mark as a Client Website:** Set `isClientSite: true,`. This automatically adds a stylish `"Client"` badge to the project card.

---

## 🔄 4. How to Bring Back the Experience Section

The Experience section is currently hidden while keeping all code intact. To bring it back:

1. Open `src/app/page.tsx`:
   - Uncomment the import:
     ```typescript
     import Experience from "@/components/sections/Experience";
     ```
   - Uncomment the `<Experience />` tag:
     ```tsx
     <Experience />
     ```
2. Open `src/components/layout/Navbar.tsx`:
   - Add `{ label: "Experience", id: "experience" }` back into `NAV_ITEMS`:
     ```typescript
     const NAV_ITEMS = [
       { label: "Work", id: "work" },
       { label: "About", id: "about" },
       { label: "Skills", id: "skills" },
       { label: "Experience", id: "experience" },
       { label: "Projects", id: "projects" },
       { label: "Contact", id: "contact" },
     ];
     ```
3. Run `npm run build` to verify.

---

## 💻 5. Running, Building, and Deploying

### Run locally on your computer:
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) in your browser. Any changes you make in `src/data/` will update instantly!

### Verify production build (Zero errors guarantee):
```bash
npm run build
```
This builds the site with Next.js 16 (Turbopack) and validates all TypeScript types, static pages, and redirects.

### Deploying your updates:
Once `npm run build` succeeds, commit and push your changes to GitHub:
```bash
git add .
git commit -m "Update projects and content"
git push origin revamp-2026
```
If your repository is connected to **Vercel**, Vercel will automatically build and publish the live site within ~60 seconds!
