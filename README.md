# tashan.co — Founder Reference Site (v1)

## Overview

This repository contains the source code for **tashan.co**, an information-first personal website for **Tashan Bedeau**.

The site functions as Tashan’s **official reference point** — clearly communicating who he is, what he’s building, and how to contact him.  
It is intentionally minimal in scope and complexity, prioritising **clarity, credibility, speed, and accessibility**.

This is **not** a sales funnel, product site, or marketing platform at this stage.

---

## Project Goals (v1)

- Clearly communicate positioning within **10–15 seconds**
- Present projects in a **structured, scannable format**
- Maintain a **calm, premium, founder-led aesthetic**
- Load quickly with minimal assets and scripts
- Provide a clear, visible contact path (`mailto:me@tashan.co`)

---

## Tech Stack

- **HTML5** (semantic, accessible markup)
- **Vanilla CSS** (single stylesheet)
- **Vanilla JavaScript** (single script file)
- **Static deployment via GitHub Pages**

No frameworks, build tools, or dependencies are used.

---

## Site Structure

The v1 implementation is a **single-page scroll** (`index.html`) with clearly defined sections:

- Home
- About
- Projects
- Writing (Coming soon)
- Contact

Navigation uses anchor links to scroll between sections.

---

## File Structure

```plaintext
tashan-co/
├── index.html
├── assets/
│   ├── css/
│   │   └── style.css
│   ├── js/
│   │   └── script.js
│   └── images/
├── README.md
└── .gitignore

## Content Management (How to Update)

### Updating Copy

All site copy is written directly in `index.html`.

Sections are clearly separated and commented to make updates straightforward.  
Text can be edited safely without touching layout or styling.

When updating copy:
- Keep heading levels (`h1–h3`) consistent
- Avoid removing semantic section elements
- Preserve existing spacing and structure where possible

---

### Updating Projects

Projects are currently hard-coded in HTML and grouped under the following headings:

- Active  
- Building  
- Pipeline  
- Ongoing Study Threads  

To update projects:

- Edit the relevant section in `index.html`
- Add, remove, or update project entries directly in the markup
- Keep formatting consistent to preserve visual hierarchy
- Avoid changing heading levels unless necessary (important for accessibility and SEO)

If projects are later moved to their own page, the same structure can be reused.

---

### Writing Section

The Writing section currently displays topic areas with a **“Coming soon”** status line.

When writing content is ready:
- This section can be expanded inline with short posts **or**
- Moved to a dedicated page in a future iteration

No CMS or dynamic rendering is used in v1.

---

## Styling & Design Notes

- Single CSS file: `assets/css/style.css`
- Minimalist layout with generous whitespace
- Strong typographic hierarchy
- One accent colour for links and subtle emphasis
- Lightweight implementation with no heavy animation

Design decisions are intentionally simple to keep the site fast, readable, and easy to maintain.

---

## JavaScript Behaviour

JavaScript is kept minimal and progressive.

Current usage includes:
- Light navigation or interaction enhancements (where applicable)
- Basic UX behaviour only

The site remains fully usable without JavaScript enabled.

---

## Accessibility

Accessibility is a core requirement:

- Semantic HTML structure
- Logical heading order
- Sensible colour contrast
- Keyboard-navigable interactions
- No reliance on motion-heavy effects

Any future updates should preserve these principles.

---

## SEO & Metadata

Basic SEO is implemented directly in `index.html`, including:

- Page title
- Meta description
- Open Graph tags
- Favicon and touch icons

If updating SEO content, edit the `<head>` section of `index.html`.

---

## Deployment

The site is deployed using **GitHub Pages**.

Typical workflow:

1. Push changes to the `main` branch
2. GitHub Pages automatically rebuilds and deploys the site

No build step is required.

---

## Scope Notes

### In Scope (v1)

- Information-only content
- Structured project listings
- Writing topics (no posts yet)
- Single primary contact method (`mailto` link)

### Out of Scope (v1)

- Newsletter or lead capture
- Analytics dashboards or CRM integrations
- Booking flows, payments, or e-commerce
- Heavy animation, video, or large media assets
- Multi-language support

---

## Disclaimer

This site is informational and educational only.  
It does **not** provide medical advice.
