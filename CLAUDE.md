# InDemand Agency Landing Page

## Project
Building a VSL landing page for InDemand Agency, targeting US plumbing companies. The design reference is renolaunch.homes — we are matching its design quality, layout patterns, and visual polish, but with InDemand's own branding, logo, and copy. This is NOT a 1:1 clone.

## Stack (locked — do not change)
- Next.js 14 (App Router)
- TypeScript
- Tailwind CSS
- Deployed to Vercel
- Single page site (no routing needed beyond `/`)

## Design reference
Screenshots of renolaunch.homes are in `reference/`. Before building any section, look at the relevant screenshots and match:
- Layout structure and spacing
- Typography hierarchy and font weights
- Color treatment and contrast
- Component style (cards, buttons, dividers, icons)
- Custom illustrations (charts, flow diagrams, comparison blocks)

The goal: someone who has seen renolaunch.homes should recognize this site as being built to the same quality bar — but with InDemand's navy + cyan tech/automation aesthetic instead of renolaunch's palette.

## Brand
- Name: InDemand Agency
- Tagline: Acquisition Systems
- Target audience: US plumbing company owners
- Hero headline: "We Don't Sell You Leads. We Send Buyers."
- Tone: Direct, confident, blue-collar. No corporate fluff. Written for plumbers, not marketers.
- Visual identity: Modern, techy, system/automation feel (NOT generic contractor orange-and-white)

### Logo
- File: `media/indemand-logo.png`
- Use this logo in the top-left of the hero section
- The logo has a dark navy background built in — when placing it on dark navy page sections, it will blend seamlessly. When placing on light sections (if any), wrap it in a dark container or use sufficient padding.

### Colors (pulled directly from the logo — use these exactly)
- **Primary background:** `#0A0F1E` (deep navy, nearly black — main dark background)
- **Accent / CTA:** `#00D4FF` (bright cyan — flowchart color, buttons, highlights, links)
- **Text on dark:** `#FFFFFF` (white)
- **Muted text on dark:** `#8B9AAF` (cool gray-blue for subheads, captions, secondary text)
- **Light section background:** `#0F1729` (slightly lighter navy, for alternating sections — this is a dark theme site, NOT light-mode)
- **Border / divider:** `#1E2A42` (subtle cool navy for card borders and dividers)

### Theme: DARK MODE
This is a dark-themed site throughout. Do not alternate dark and light sections. All sections should use variations of navy backgrounds with white text. The cyan accent is used sparingly for emphasis: CTA buttons, key stat numbers, chart highlights, icons, and hover states. Do NOT use orange anywhere.

## Content sources (read these — do not invent copy)
- `content/landing-copy.md` — all body copy, headlines, section text, bullets
- `content/vsl.md` — Wistia embed code for the hero VSL (horizontal 16:9)
- `media/video testimonials/video testimonial.md` — Wistia embed code for the video testimonial (vertical 9:16)
- `media/image testimonials/` — screenshot testimonial image files (IMG_6388.PNG through IMG_6392.JPG). Display all images in that folder as a responsive grid in the testimonials section: 3 columns on desktop, 2 on tablet, 1 on mobile.

If anything is missing from these files, STOP and ask before inventing placeholder copy.

## Code rules
- Mobile-first responsive. Test every section at 375px, 768px, and 1280px.
- No `<form>` tags. Buttons use onClick handlers only.
- One component per section in `components/`.
- Semantic HTML (section, header, article).
- No external UI libraries beyond Tailwind. No shadcn, no Material, no Bootstrap.
- Icons: use `lucide-react` only, colored in cyan `#00D4FF` or white.
- For custom illustrations (chart comparisons, flow diagrams, the "Everyone Else vs You" block, etc.), build them with HTML/CSS/SVG — do NOT use image placeholders. Use cyan and white on navy backgrounds.
- Subtle cyan glow effects (box-shadow with cyan at low opacity) on hover states and key CTAs to reinforce the tech/automation feel.

## What "done" looks like for each section
1. Matches the layout quality of the reference screenshot
2. Uses the InDemand navy + cyan color system (not renolaunch's colors)
3. Uses real copy from `content/`
4. Fully responsive on mobile
5. No console errors
6. Passes a visual check before moving to the next section

## Workflow
We build in phases. After each phase, STOP and wait for review before continuing. Do not build ahead.
