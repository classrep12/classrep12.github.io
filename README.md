# Harshita Tiwari — Personal Portfolio

A lightweight, accessible, frontend-only personal portfolio website built with semantic HTML5, modern CSS3 (custom properties, Grid, Flexbox), and vanilla ES6+ JavaScript. Features Light/Dark mode, 5 customizable accent themes, live GitHub repository sync with `sessionStorage` caching, lazy-loaded modal demo videos (Google Drive, YouTube, and MP4), and SEO/Schema.org metadata.

## Folder Structure

```text
/
├── index.html                 # Semantic HTML5 document, SEO meta tags & JSON-LD Person schema
├── css/
│   └── style.css              # Design system, Light/Dark variables, 5 accent presets, responsive layouts
├── js/
│   ├── main.js                # PORTFOLIO_CONFIG, theme switcher, typing effect, timeline, contact form
│   └── projects.js            # PROJECTS_CONFIG, GitHub API sync, filtering, Drive/YouTube/MP4 modal player
├── public/
│   └── assets/
│       ├── resume.pdf         # Downloadable resume PDF
│       ├── images/
│       │   ├── favicon.svg    # 64x64 geometric HT monogram
│       │   ├── profile.jpg    # Portrait headshot
│       │   ├── kpilot.png     # KPilot project screenshot
│       │   ├── rf-faultsense.png
│       │   ├── multimedai.png
│       │   └── og-image.png   # Social share preview card
│       └── aistudio/          # Attached demo videos, portraits, screenshots & resume
└── README.md
```

> **Note on static hosting without Vite:** When uploading directly to GitHub Pages without running `npm run build`, move or copy `public/assets/` to `/assets/` at the repository root so relative paths like `assets/resume.pdf` and `assets/aistudio/...` resolve directly.

---

## How to Customize Content

### 1. Personal Details, Skills, Experience & Achievements
Open `js/main.js` and edit the `PORTFOLIO_CONFIG` object at the top of the file:
- `personal`: name, tagline, typing roles, bio, email, GitHub, LinkedIn, resume path.
- `about`: personality trait cards and focus interests.
- `skills`: grouped categories (`AI / ML`, `Development`, `Core CS`, `Tools & Deployment`).
- `timeline`: Experience, Leadership, and Education entries.
- `achievements` & `certifications`: scholarship honors and badges.

### 2. Featured Projects, Live Demos & Demo Videos
Open `js/projects.js` and edit `PROJECTS_CONFIG`:
- `githubUsername`: defaults to `'classrep12'`.
- `featuredProjects`: the 3 pinned projects displayed first.
- `liveUrl`: set a URL string to display the **Live Demo** button, or `''` to hide it.
- `demoVideo`: accepts **Google Drive share links** (`https://drive.google.com/file/d/FILE_ID/view?usp=sharing`), **YouTube links** (`https://youtu.be/ID` or `https://www.youtube.com/watch?v=ID`), or local `.mp4` files (`assets/aistudio/...mp4`). Drive and YouTube URLs are automatically converted to embeddable URLs inside a lazy-loaded 16:9 `<iframe>` when the modal opens.

### 3. Optional Contact Form Backend (Formspree / EmailJS)
By default, the contact form validates inputs client-side and opens a prefilled `mailto:` draft. To send emails silently in the background without opening a mail client, see the commented Formspree / EmailJS snippets inside `initContactForm()` in `js/main.js`.

---

## Recommended Asset & Image Checklist

| Asset | Purpose | Recommended Dimensions & Format |
| :--- | :--- | :--- |
| `assets/images/profile.jpg` | Hero & About portrait | `840 × 1000 px` (4:5 portrait, WebP/JPEG under 180 KB) |
| `assets/images/kpilot.png` | KPilot thumbnail & modal preview | `1280 × 760 px` (16:9.5 landscape, PNG/WebP under 300 KB) |
| `assets/images/rf-faultsense.png` | RF FaultSense thumbnail | `1280 × 760 px` (16:9.5 landscape, PNG/WebP under 300 KB) |
| `assets/images/multimedai.png` | MultiMedAI thumbnail | `1280 × 760 px` (16:9.5 landscape, PNG/WebP under 300 KB) |
| `assets/images/og-image.png` | Open Graph / LinkedIn / X share card | `1200 × 630 px` (PNG/JPEG under 400 KB) |
| `assets/images/favicon.svg` | Browser tab icon | `64 × 64 px` vector SVG |
| `assets/resume.pdf` | Resume download button target | Standard A4 PDF (under 1 MB) |

---

## Deploy for Free

### Option A: GitHub Pages (Recommended)
1. Create a public GitHub repository (for a root domain URL, name it `classrep12.github.io`; otherwise name it `portfolio`).
2. Ensure `index.html`, `css/`, `js/`, and `assets/` (copied from `public/assets/`) are in the root of your `main` branch (or deploy the `dist/` output of `npm run build` via GitHub Actions).
3. Push your files:
   ```bash
   git init
   git add .
   git commit -m "Deploy personal portfolio"
   git branch -M main
   git remote add origin https://github.com/classrep12/classrep12.github.io.git
   git push -u origin main
   ```
4. In GitHub, open **Settings → Pages → Build and deployment → Source: Deploy from a branch**, select `main` and `/ (root)`, and click **Save**. Your site will go live at `https://classrep12.github.io/`.

### Option B: Netlify
1. Log in at [app.netlify.com](https://app.netlify.com/) and click **Add new site → Import an existing project** (or drag and drop the `dist/` folder after `npm run build`).
2. Leave build command empty if deploying plain static files from root (with `assets/` at root), or set build command to `npm run build` and publish directory to `dist`.

### Option C: Vercel
1. Connect your repository at [vercel.com/new](https://vercel.com/new).
2. Vercel auto-detects `vite.config.ts` (`npm run build` → `dist`), or you can deploy as a zero-build static site. Click **Deploy**.
