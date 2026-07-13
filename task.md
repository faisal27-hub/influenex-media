# Influnex Media — Refinements & Backend Audit Tasks

## Setup, Theme & Workspace Conversion
- [x] Update `index.css` (move dark variables to `:root` block, remove Light Mode variables, remove `scroll-behavior: smooth` from `html`)
- [x] Remove theme toggler utilities and calls from `App.tsx`
- [x] Configure npm workspaces in root `package.json` to link the Vite frontend and Express backend monorepo dependencies
- [x] Update the root `dev` script to run both frontend and backend concurrently
- [x] Update `favicon.svg` to feature the custom purple-cyan iM lettermark

## Component Styles
- [x] Redesign `.section-label` (pill labels) to use sleek tracking-widest text headers with a dot prefix in `index.css`
- [x] Redesign `Navbar.tsx` completely (remove bulky pill container background, elegant tracking, active sliding underline indicator, glassmorphism scroll transition, remove Let's Collaborate links, place logo on left, align navigation links in the exact physical center)
- [x] Implement the custom "iM" branding logo lockup from the screenshot exactly in `Navbar.tsx` and `Footer.tsx` (using SVG vector paths, separator divider lines, and dual-tone typography rules)
- [x] Redesign `Footer.tsx` completely (generous padding, permanently dark, 3 columns: Brand, Contact Us, Follow Us with username handles, and separate horizontal copyright bottom strip with divider, quick links completely removed)
- [x] Refine `Footer.tsx` layout and spacing (constrain description width, make headings elegant and small, add smooth hover translate animations, hide all social usernames/phones, format bottom links with pipes, ensure full mobile responsiveness, place email above location)
- [x] Refine Hero Section (remove extra CTAs, center single "Let's Collaborate" button, restore full gradient pill border, remove arrow icon, remove scroll indicators completely)
- [x] Enlarge Hero Collaborate CTA pill button by 15-20% and amplify glowing backing shadows to increase visibility
- [x] Add premium accordion `FAQSection.tsx` right before the footer (framer-motion height accordion, single-item expansion, luxury dark theme)
- [x] Replace placeholder marquee labels with official, transparent, dark-theme consistent brand partner logo images (Emergent, Packify, Pacdora, Meshy, Suno) while retaining the smooth sliding animation
- [x] Fix BrandMarquee slider to render official company logos locally from `/public/brands/` with original brand colors inside uniform glass cards to ensure perfect visibility against the dark theme
- [x] Position the brand logo on the left and the brand name text on the right (vertically centered) inside each marquee card
- [x] Make all marquee cards fully clickable redirect anchor links (opening in new browser tabs using secure attributes, cursor pointer on hover, and neon backing hover glows)
- [x] Overwrite the previous Pacdora logo with their official, updated brand mark asset
- [x] Replace unstable unicode symbols in Services with monospace `01`, `02` numbering to avoid tofu/empty squares on Windows and other platforms
- [x] Create a dedicated Contact Us page on route path `/contact` (Contact.tsx), displaying the form, direct contact channels, and "Why Collaborate With Us" information
- [x] Add a "Contact" link option inside `Navbar.tsx` pointing to `/contact`
- [x] Migrate all existing CTA redirect link targets to `/contact` across pages (HeroSection, HomeCTA, About, Services)
- [x] Swap database connection error console statements inside `server.js` with clean, non-disruptive "Running in Email-Only Mode." status logs
- [x] Replace static category cards inside `About.tsx` with a premium, auto-changing category showcase slider using local cinematic background loops
- [x] Simplify the Contact form layout inside `Contact.tsx` to include only Name, Email, Company, Phone, Website, and Message/Details
- [x] Update WhatsApp links globally across the website to point to +91 7778977960

## Data Layer & Network
- [x] Update `creators.ts` (append the 5 new Instagram creators with calculated, realistic followers, niches, taglines, and engagement metrics)
- [x] Retrieve actual, high-resolution profile pictures for the 5 new creators from their Instagram accounts and host them locally in `public/`
- [x] Update follower counts, engagement percentages, and views metrics for the 5 new creators inside `creators.ts` to their exact current figures
- [x] Connect Collaborate Campaign Brief form submission route to backend API `/api/contact` with custom validations
- [x] Harden backend contact form API to verify SMTP credentials and throw/log detailed errors to the terminal instead of showing false successes on mail failures
- [x] Update Campaign Budget values inside `Contact.tsx` form options to show USD ($) dollar figures
- [x] Verify spelling corrections (Packify) across all code paths

## Typography & Hierarchy Polish
- [x] Scale down heading sizes globally (e.g. Hero, About, Services, Creators, Collaborate) for a cleaner, professional editorial feel

## Backend Audit & Architecture
- [x] Create missing `backend/src/server.js` Express server configuration
- [x] Load environment variables via `.env` file structure safely
- [x] Integrate security (Helmet), compression, and cross-origin (CORS) rules
- [x] Implement database connection health checks with graceful fallbacks (non-blocking)
- [x] Establish error handling middleware and graceful shutdown processes
- [x] Implement email sending in backend route handler (bypassing database, using Nodemailer SMTP notifications to `influnexmedia.in@gmail.com` and user auto-reply templates)

## Verification
- [x] Run production build `npm run build`
- [x] Verify `npm install` and `npm run dev` startup concurrently without errors
