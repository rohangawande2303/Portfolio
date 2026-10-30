# Deployment & Launch Guide — Rohan Gawande Portfolio (2026 Revamp)

This guide provides end-to-end instructions for deploying the modernized Next.js 16 (App Router) portfolio to Vercel, configuring environment variables, verifying Google Analytics tracking, and performing the final launch QA.

---

## 1. Pre-Deployment Summary

- **Current Git Branch**: `revamp-2026`
- **Target Production Branch**: `main`
- **Framework**: Next.js 16.4.3 (App Router, Turbopack, React 19, Tailwind CSS v4)
- **Node.js Target**: Node.js 20.x or 22.x LTS (configured automatically by Vercel)
- **Static Prerendering**: 17 static pages generated at build time (`/`, `/_not-found`, `/opengraph-image`, `/robots.txt`, `/sitemap.xml`, and 11 `/work/[slug]` case studies).

---

## 2. Step-by-Step Vercel Deployment

### Step 1: Merge `revamp-2026` into `main`

Verify that all changes are committed on `revamp-2026`, then merge into `main`:

```bash
# 1. Ensure working directory is clean
git status

# 2. Switch to main branch
git checkout main

# 3. Pull latest remote main (if applicable)
git pull origin main

# 4. Merge the revamp branch
git merge revamp-2026

# 5. Push to GitHub
git push origin main
```

*(Alternatively, you can open a Pull Request from `revamp-2026` to `main` on GitHub and click "Merge pull request".)*

---

### Step 2: Import Project on Vercel

1. Log in to [Vercel](https://vercel.com).
2. Click **"Add New..."** > **"Project"**.
3. Select your repository: `rohangawande2303/Portfolio` (or your GitHub account).
4. Vercel will automatically detect **Next.js**. Ensure the following settings:
   - **Framework Preset**: Next.js
   - **Root Directory**: `./`
   - **Build Command**: `npm run build`
   - **Output Directory**: `.next` (default)
   - **Install Command**: `npm install` (default)

---

### Step 3: Configure Environment Variables on Vercel

Before hitting deploy (or under **Settings > Environment Variables** on Vercel), add the following environment variables for **Production**, **Preview**, and **Development**:

| Variable Name | Value | Purpose |
|---|---|---|
| `NEXT_PUBLIC_CONTACT_ENDPOINT` | `https://script.google.com/macros/s/AKfycbyefKfO-DfucLmJlHw9rTTzef0hHtt_e4aqIc3gOhEp-4fR5YA4Uj9oHTGEm66B_hWQ/exec` | Google Apps Script Web App URL for receiving contact inquiries straight to your Gmail. |
| `NEXT_PUBLIC_SITE_URL` | `https://rohangawande.com` (or your live Vercel domain, e.g. `https://rohan23-portfolio.vercel.app`) | Sets metadataBase, OpenGraph canonical tags, and sitemap.xml URLs. |

Click **Save**.

---

### Step 4: Configure Custom Domain

1. In the Vercel Dashboard, navigate to **Project Settings > Domains**.
2. Enter your custom domain (e.g. `rohangawande.com` and `www.rohangawande.com`).
3. Add the required DNS records at your domain registrar (GoDaddy, Namecheap, Cloudflare, etc.):
   - **Apex / Root Domain (`@`)**:
     - Type: `A`
     - Name: `@`
     - Value: `76.76.21.21`
   - **Subdomain (`www`)**:
     - Type: `CNAME`
     - Name: `www`
     - Value: `cname.vercel-dns.com`
4. Vercel will automatically issue a free SSL/TLS certificate (Let's Encrypt).

---

### Step 5: Verify Google Analytics (`G-EKCZSW6Q1B`)

1. Once the deployment finishes, open your live domain in an incognito window: `https://rohangawande.com`.
2. Open your [Google Analytics Dashboard](https://analytics.google.com/).
3. Navigate to **Reports > Realtime**.
4. You should see **1 Active User in the last 30 minutes** navigating between `/` and `/work/[slug]`.
5. Measurement ID configured: `G-EKCZSW6Q1B` (loaded via Next.js `next/script` with `lazyOnload` for optimal TBT/performance).

---

## 3. Legacy Files & Cleanup Instructions

### Regarding `_legacy_pages/`
- **Current Status**: The legacy Pages Router files are moved to `_legacy_pages/` at the repository root.
- **Build Safety**: The Next.js 16 App Router compiles only `src/app` and completely ignores `_legacy_pages/`. It has **0 effect** on production bundle size or build execution.
- **When to Delete**: Once your live Vercel production deployment is verified and you are completely satisfied with the site, you can safely delete the legacy folder by running:
  ```bash
  git rm -rf _legacy_pages
  git commit -m "chore: delete legacy Next.js 12 pages backup"
  git push origin main
  ```

### Unused Files in `public/assets/`
The following legacy media files are not referenced anywhere in the new `src/` codebase:
- `public/assets/contact-us.jpg` (~1.14 MB) — Replaced by the vector/code-based contact interface.
- `public/assets/experience/` (11 icon images: `css.png`, `html.png`, `javascript.png`, `node.png`, `react.png`, `tailwind.png`, `typescript.webp`, etc.) — Replaced by the Periodic Table SVG vector icons (`react-icons` and `SkillIcon.tsx`).
- `public/vercel.svg` — Default Next.js boilerplate asset.

*Note: The duplicate resume in `public/resume/` has already been permanently deleted. The single source of truth is `public/Rohan-Gawande-Resume.pdf`.*

---

## 4. Final Launch QA Checklist

Use this checklist before and immediately after going live:

### Visual & Layout QA
- [ ] **Viewport 375px (Mobile)**: Zero horizontal scroll bar, comfortable font sizes, no overlapping elements.
- [ ] **Viewport 768px (Tablet)**: Responsive 2-column project grids, smooth navigation pill.
- [ ] **Viewport 1024px (Small Desktop)**: Periodic Table displayed in full responsive grid.
- [ ] **Viewport 1440px (Large Desktop)**: Centered container (max-w-6xl), clean margins, high-density aesthetics.
- [ ] **Dark & Light Mode**:
  - [ ] Dark theme background `#0B0B0F`, text `#F5F2EA`, accent `#7C83FF`.
  - [ ] Light theme background `#FBF7E9`, text `#1B1F3B`, accent `#1B1F3B`.
  - [ ] Contrast ratio meets WCAG AA standards (> 4.5:1) in both themes.
  - [ ] Theme choice persists across navigation and page refreshes.

### Functionality & Interactivity
- [ ] **Hero Section**: Monogram RG watermark with soft scroll parallax; 3 floating glass cards with smooth mouse parallax. No photo of Rohan anywhere on the site.
- [ ] **Work Accordion**:
  - [ ] Keyboard navigation (Arrow keys move between cards, Enter/Space expands).
  - [ ] Visual mockups display cleanly.
  - [ ] "Live demo", "Source code", and "Case study" buttons work properly.
- [ ] **About Section & ID Card**:
  - [ ] ID card physics lazy-loaded via `next/dynamic`.
  - [ ] Flips on hover on desktop; flips on tap on mobile; flips with Enter/Space keyboard.
- [ ] **Skills Periodic Table**:
  - [ ] 6 family filter buttons filter the periodic table tiles.
  - [ ] Hovering (or tapping on mobile) displays the factual "What I use it for" detail panel.
- [ ] **All Projects Section**:
  - [ ] Displays all completed systems in responsive grid.
  - [ ] Clicking card navigates to `/work/[slug]`.
  - [ ] Child action buttons (Live demo, GitHub) open external links without triggering parent card click.
- [ ] **Case Study Pages (`/work/[slug]`)**:
  - [ ] Breadcrumb "Back to all projects" returns smoothly.
  - [ ] Screenshot gallery lightbox opens on click; Esc, arrow keys, and swipe navigate images.
  - [ ] Previous and Next project links navigate between case studies.
- [ ] **Contact Section & Slideover**:
  - [ ] "Copy email" button copies `rohangawande2303@gmail.com` to clipboard and shows temporary "Copied!" feedback.
  - [ ] Direct email, phone (`+91 9967653844`), LinkedIn, and GitHub links all open correctly.
  - [ ] "Start a project" button opens `ContactSlideover`.
  - [ ] Submitting the contact form posts to Google Apps Script endpoint and shows success notification.
- [ ] **Resume Downloads**:
  - [ ] All "Resume" download links across Navbar, Hero, About, and Footer point to `/Rohan-Gawande-Resume.pdf`.

### Accessibility & Performance
- [ ] **Focus Rings**: Visible focus rings (`focus-visible:ring-2 focus-visible:ring-[#7C83FF]`) present on all interactive elements.
- [ ] **Touch Targets**: All buttons, links, and toggles meet minimum 44px tap targets.
- [ ] **Prefers Reduced Motion**: When `prefers-reduced-motion` is enabled in system settings:
  - [ ] Preloader animation skips.
  - [ ] Custom cursor is disabled.
  - [ ] Lenis smooth scroll reverts to native scroll.
  - [ ] ID card drag physics and sway are disabled.
  - [ ] Watermark scroll parallax and Hero mouse parallax are disabled.
- [ ] **SEO & Metadata**:
  - [ ] Title tags and meta descriptions present on every page.
  - [ ] OpenGraph image generated dynamically at `/opengraph-image`.
  - [ ] `/robots.txt` and `/sitemap.xml` resolve with HTTP 200.
  - [ ] Google Analytics (`G-EKCZSW6Q1B`) receives pageview hits.
