/**
 * ============================================================================
 * MAIN PORTFOLIO CONTROLLER & CONFIG — Harshita Tiwari
 * ============================================================================
 * Edit `PORTFOLIO_CONFIG` below to update any personal details, skills,
 * timeline items, achievements, certifications, or contact links.
 */

import { initProjects } from './projects.js';

export const PORTFOLIO_CONFIG = {
  personal: {
    name: 'Harshita Tiwari',
    tagline: 'AI Generalist | Full-Stack AI Applications | Software Developer | ML Engineer',
    kicker: 'AI Generalist · Full-Stack AI Applications · Delhi, India',
    typingRoles: [
      'AI/ML Engineer',
      'Full-Stack Developer',
      'FastAPI + React Builder',
      'Problem Solver',
    ],
    bio: 'B.Tech Information Technology student at IGDTUW (graduating 2027) who builds full-stack AI applications, integrates LLMs and machine learning models, and creates data-driven automation workflows. Skilled in Python, FastAPI, React and end-to-end deployment.',
    location: 'Delhi, India',
    email: 'harshtit948@gmail.com',
    github: 'https://github.com/classrep12',
    githubUsername: 'classrep12',
    linkedin: 'https://www.linkedin.com/in/harshitatiwari948/',
    resumeUrl: 'assets/resume.pdf',
    languages: ['English', 'Hindi'],
    availabilityNote:
      'Open to Software Engineering, AI/ML and Data opportunities. Happy to connect with recruiters, professionals, alumni and teams.',
  },

  about: {
    traits: [
      { label: 'Curious learner', icon: 'compass' },
      { label: 'Hands-on builder', icon: 'wrench' },
      { label: 'Team leader', icon: 'users' },
      { label: 'Mentor-minded', icon: 'heart' },
      { label: 'Research-oriented', icon: 'microscope' },
      { label: 'Impact-driven', icon: 'target' },
    ],
    interests: [
      'AI for healthcare',
      'Computer vision',
      'LLM applications',
      'Automation',
      'Women in tech',
      'Sustainability',
    ],
  },

  skills: [
    {
      category: 'AI / ML',
      icon: 'brain',
      summary: 'Deep learning, computer vision, NLP, and structured LLM pipelines.',
      appliedIn: 'MultiMedAI · KPilot · RF FaultSense · CCRAS & BEL',
      items: [
        { name: 'PyTorch & YOLOv8', level: 'Applied', pct: 0.88 },
        { name: 'Scikit-learn & Random Forest', level: 'Applied', pct: 0.88 },
        { name: 'LLM Integration & Gemini API', level: 'Production', pct: 0.92 },
        { name: 'Computer Vision & NLP (BERT)', level: 'Applied', pct: 0.85 },
        { name: 'Prompt Engineering', level: 'Production', pct: 0.9 },
        { name: 'Pandas & NumPy', level: 'Production', pct: 0.92 },
      ],
    },
    {
      category: 'Development',
      icon: 'code',
      summary: 'End-to-end REST APIs, typed React frontends, and responsive UI.',
      appliedIn: 'KPilot · RF FaultSense · MultiMedAI · Sakhi Bot',
      items: [
        { name: 'Python & FastAPI', level: 'Production', pct: 0.93 },
        { name: 'React.js & TypeScript', level: 'Production', pct: 0.88 },
        { name: 'JavaScript (ES6+) & HTML/CSS', level: 'Production', pct: 0.9 },
        { name: 'REST APIs & Pydantic', level: 'Production', pct: 0.9 },
        { name: 'Tailwind CSS', level: 'Applied', pct: 0.86 },
        { name: 'Java & SQL', level: 'Strong', pct: 0.84 },
      ],
    },
    {
      category: 'Core CS',
      icon: 'cpu',
      summary: 'Algorithmic problem solving and systems engineering foundations.',
      appliedIn: 'IGDTUW B.Tech IT · Stanford Code in Place · Codess.Cafe',
      items: [
        { name: 'Data Structures & Algorithms', level: 'Strong', pct: 0.88 },
        { name: 'Object-Oriented Programming (OOP)', level: 'Strong', pct: 0.9 },
        { name: 'Database Management Systems (DBMS)', level: 'Strong', pct: 0.86 },
        { name: 'Operating Systems', level: 'Core', pct: 0.82 },
        { name: 'Computer Networks', level: 'Core', pct: 0.82 },
      ],
    },
    {
      category: 'Tools & Deployment',
      icon: 'terminal',
      summary: 'Experimentation, version control, automation, and cloud shipping.',
      appliedIn: 'Vercel & Render Production · BEL RF Workflows',
      items: [
        { name: 'Git & GitHub', level: 'Daily', pct: 0.92 },
        { name: 'VS Code & Jupyter Notebook', level: 'Daily', pct: 0.94 },
        { name: 'Google Colab', level: 'Applied', pct: 0.88 },
        { name: 'Vercel & Render Deployment', level: 'Production', pct: 0.88 },
        { name: 'Advanced Excel', level: 'Applied', pct: 0.86 },
      ],
    },
  ],

  timeline: [
    // Experience (Internships)
    {
      type: 'experience',
      categoryLabel: 'Internship',
      period: 'Jun 2026 – Jul 2026',
      role: 'Software & AI Intern',
      organization: 'Bharat Electronics Limited (BEL), Ghaziabad',
      bullets: [
        'Analyzed VNA measurements, ATP test reports and RF parameters to build data-driven antenna fault analysis workflows.',
        'Automated RF test-data analysis and reporting with advanced Excel, reducing repetitive manual processing.',
        'Developed a machine learning prototype for RF fault prediction from antenna performance parameters to support automated testing.',
      ],
    },
    {
      type: 'experience',
      categoryLabel: 'Internship',
      period: 'Feb 2026 – Jul 2026',
      role: "Vice Chancellor's Intern",
      organization: 'IGDTUW (Registrar and Director, Planning Office)',
      note: 'Supported institutional planning, administrative analytics, and cross-departmental coordination directly with university leadership.',
    },
    {
      type: 'experience',
      categoryLabel: 'Internship',
      period: 'Dec 2025 – Jan 2026',
      role: 'AI & Machine Learning Intern',
      organization: 'CCRAS, Ministry of Ayush, Delhi',
      bullets: [
        'Developed a medical imaging pipeline for MRI and X-ray analysis using deep learning for automated diagnostic assistance.',
        'Built a Brain Tumor Detection and Segmentation pipeline using YOLOv8-Seg on MRI scans, achieving 83% validation accuracy.',
        'Optimized preprocessing, training and inference workflows and integrated predictions with MedGemma for structured reporting.',
      ],
    },
    // Leadership & Fellowships
    {
      type: 'leadership',
      categoryLabel: 'Fellowship',
      period: 'Aug 2025 – Jan 2026',
      role: 'Millennium Fellow 2025',
      organization: 'Millennium Campus Network & UNAI',
      note: 'Selected for a global social-impact leadership cohort advancing United Nations Academic Impact initiatives.',
    },
    {
      type: 'leadership',
      categoryLabel: 'Community',
      period: 'Oct 2025 – Jan 2026',
      role: 'Mentee',
      organization: 'Codess.Cafe',
      note: 'Collaborated with peers and industry mentors on competitive programming, core CS, and engineering interview readiness.',
    },
    {
      type: 'leadership',
      categoryLabel: 'Leadership',
      period: 'Sep 2025 – May 2026',
      role: 'R&D Team Lead',
      organization: 'E-Cell IGDTUW',
      note: 'Led research and product development initiatives (earlier served as R&D Core Aug–Sep 2025 and R&D Team Coordinator Nov 2024–Aug 2025).',
    },
    {
      type: 'leadership',
      categoryLabel: 'Leadership',
      period: 'Sep 2024 – May 2026',
      role: 'Outreach Core Member',
      organization: 'GreenSphere IGDTUW',
      note: 'Drove campus sustainability outreach, environmental campaigns, and collaborative student programs.',
    },
    {
      type: 'leadership',
      categoryLabel: 'Community',
      period: 'Apr 2025 – Jun 2025',
      role: 'Mentee',
      organization: 'Code; Without Barriers',
      note: 'Completed cloud, AI, and career readiness mentorship with Microsoft-backed women-in-tech community.',
    },
    {
      type: 'experience',
      categoryLabel: 'Internship',
      period: 'Jun 2024 – Jul 2024',
      role: 'Python and Machine Learning Intern',
      organization: 'Centre of Excellence – AI, IGDTUW',
      note: 'Built foundational Python and supervised machine learning workflows with hands-on model evaluation.',
    },
    // Education
    {
      type: 'education',
      categoryLabel: 'Education',
      period: 'Aug 2023 – May 2027',
      role: 'B.Tech, Information Technology',
      organization: 'Indira Gandhi Delhi Technical University for Women (IGDTUW)',
      note: 'CGPA: 8.05 / 10 · Focus on AI/ML, Software Engineering, DSA, OOP, DBMS, OS, and Computer Networks.',
    },
    {
      type: 'education',
      categoryLabel: 'Education',
      period: '2021 – 2022',
      role: 'Senior Secondary (Class 12, PCM)',
      organization: 'RPVV IP Extension, CBSE',
      note: 'Aggregate Score: 92.6%',
    },
    {
      type: 'education',
      categoryLabel: 'Education',
      period: '2019 – 2020',
      role: 'High School (Class 10)',
      organization: 'SKV Pkt B Mayur Vihar Phase 2',
      note: 'Completed secondary education with strong foundation in Mathematics and Science.',
    },
  ],

  achievements: [
    {
      title: "Top 150 out of 48K+ — IET India Scholarship Award '26",
      meta: 'Regional Round Presenter · Institution of Engineering and Technology · 2026',
      description:
        'Shortlisted among the top 150 engineering undergraduates nationwide out of 48,000+ applicants after rigorous STEM diagnostic assessments; presented an applied engineering solution to the regional jury.',
      icon: 'award',
    },
    {
      title: 'Reliance Foundation Undergraduate Scholar',
      meta: 'National Merit-cum-Means Scholarship · Cohort 2023',
      description:
        'Awarded the Reliance Foundation Undergraduate Scholarship after clearing a competitive national aptitude test, recognizing academic excellence in B.Tech Information Technology at IGDTUW.',
      icon: 'award',
    },
    {
      title: 'Amazon Future Engineer Scholar',
      meta: 'Amazon CS & Engineering Scholarship · 2023',
      description:
        'Selected among top women computer science undergraduates across India for academic merit and leadership potential, receiving scholarship support, industry mentorship, and engineering community access.',
      icon: 'award',
    },
    {
      title: 'Stage 2 Selection — All India Women Start-a-thon (AIWS)',
      meta: 'National Women Entrepreneurship & Innovation Challenge',
      description:
        'Advanced to Stage 2 of the national startup competition, building a viable venture proposal through structured ideation, problem discovery, and business-model mentoring.',
      icon: 'sparkles',
    },
    {
      title: 'Millennium Fellow, Class of 2025',
      meta: 'United Nations Academic Impact (UNAI) & Millennium Campus Network',
      description:
        'Selected for the global semester-long leadership fellowship advancing UN Sustainable Development Goals (SDG 4: Quality Education & SDG 10: Reduced Inequalities) through campus impact initiatives at IGDTUW.',
      icon: 'globe',
    },
    {
      title: 'Stanford Code in Place Student Fellow',
      meta: 'Stanford University · CS106A Python Cohort · 2026',
      description:
        'Accepted into Stanford University’s human-centered global CS106A Python programming fellowship, participating in live weekly sections with international peers and Stanford section leaders.',
      icon: 'code',
    },
    {
      title: 'R&D Lead, E-Cell IGDTUW',
      meta: 'Entrepreneurship Cell Leadership · 2025–2026',
      description:
        'Progressed from R&D Team Coordinator and R&D Core Member to R&D Team Lead, driving startup research, innovation sprints, and technical program strategy across IGDTUW’s Entrepreneurship Cell.',
      icon: 'users',
    },
  ],

  certifications: [
    {
      title: 'AWS Educate: Introduction to Generative AI',
      issuer: 'Amazon Web Services (Training Badge)',
    },
    {
      title: 'Introducing Generative AI with AWS',
      issuer: 'AWS / Udacity',
    },
    {
      title: 'Python and Machine Learning',
      issuer: 'Centre of Excellence – AI, IGDTUW',
    },
    {
      title: 'ATF 2024: Stage 2 Candidate',
      issuer: 'AlgoUniversity Technology Fellowship',
    },
    {
      title: 'SEEK: Self-directed Emotional learning for Empathy and Kindness',
      issuer: 'UNESCO MGIEP',
    },
  ],
};

/* ==========================================================================
   Inline SVG Icon Library (Zero external icon runtime needed)
   ========================================================================== */
const ICONS = {
  compass: `<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><circle cx="12" cy="12" r="10"></circle><polygon points="16.24 7.76 14.12 14.12 7.76 16.24 9.88 9.88 16.24 7.76"></polygon></svg>`,
  wrench: `<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"></path></svg>`,
  users: `<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M22 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path></svg>`,
  heart: `<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"></path></svg>`,
  microscope: `<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M6 18h8"></path><path d="M3 22h18"></path><path d="M14 22a7 7 0 1 0 0-14h-1"></path><path d="M9 14h2"></path><path d="M9 12a2 2 0 0 1-2-2V6h6v4a2 2 0 0 1-2 2Z"></path><path d="M12 6V3a1 1 0 0 0-1-1H9a1 1 0 0 0-1 1v3"></path></svg>`,
  target: `<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><circle cx="12" cy="12" r="10"></circle><circle cx="12" cy="12" r="6"></circle><circle cx="12" cy="12" r="2"></circle></svg>`,
  brain: `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M12 5a3 3 0 1 0-5.997.125 4 4 0 0 0-2.526 5.77 4 4 0 0 0 .556 6.588A4 4 0 1 0 12 18Z"></path><path d="M12 5a3 3 0 1 1 5.997.125 4 4 0 0 1 2.526 5.77 4 4 0 0 1-.556 6.588A4 4 0 1 1 12 18Z"></path><path d="M15 13a4.5 4.5 0 0 1-3-4 4.5 4.5 0 0 1-3 4"></path></svg>`,
  code: `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><polyline points="16 18 22 12 16 6"></polyline><polyline points="8 6 2 12 8 18"></polyline></svg>`,
  cpu: `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><rect width="16" height="16" x="4" y="4" rx="2"></rect><rect width="6" height="6" x="9" y="9" rx="1"></rect><path d="M15 2v2"></path><path d="M15 20v2"></path><path d="M2 15h2"></path><path d="M2 9h2"></path><path d="M20 15h2"></path><path d="M20 9h2"></path><path d="M9 2v2"></path><path d="M9 20v2"></path></svg>`,
  terminal: `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><polyline points="4 17 10 11 4 5"></polyline><line x1="12" x2="20" y1="19" y2="19"></line></svg>`,
  award: `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><circle cx="12" cy="8" r="6"></circle><path d="M15.477 12.89 17 22l-5-3-5 3 1.523-9.11"></path></svg>`,
  sparkles: `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="m12 3-1.9 5.8a2 2 0 0 1-1.3 1.3L3 12l5.8 1.9a2 2 0 0 1 1.3 1.3L12 21l1.9-5.8a2 2 0 0 1 1.3-1.3L21 12l-5.8-1.9a2 2 0 0 1-1.3-1.3L12 3Z"></path></svg>`,
  globe: `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><circle cx="12" cy="12" r="10"></circle><path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20"></path><path d="M2 12h20"></path></svg>`,
  badge: `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z"></path><path d="m9 12 2 2 4-4"></path></svg>`,
  mail: `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><rect width="20" height="16" x="2" y="4" rx="2"></rect><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path></svg>`,
  mapPin: `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"></path><circle cx="12" cy="10" r="3"></circle></svg>`,
  github: `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"></path><path d="M9 18c-4.51 2-5-2-7-2"></path></svg>`,
  linkedin: `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect width="4" height="12" x="2" y="9"></rect><circle cx="4" cy="4" r="2"></circle></svg>`,
  copy: `<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><rect width="14" height="14" x="8" y="8" rx="2" ry="2"></rect><path d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2"></path></svg>`,
};

const ACCENT_HEX = {
  violet: '5b46f6',
  teal: '0d9488',
  cobalt: '2563eb',
  emerald: '059669',
  rose: 'e11d48',
};

let toastTimer = null;
function showToast(message) {
  const toastEl = document.getElementById('toast');
  if (!toastEl) return;
  toastEl.textContent = message;
  toastEl.hidden = false;
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => {
    toastEl.hidden = true;
  }, 2600);
}

/* ==========================================================================
   Theme & 5-Preset Accent Switcher
   ========================================================================== */
function initThemeAndAccent() {
  const root = document.documentElement;
  const themeBtn = document.getElementById('theme-toggle');
  const metaThemeColor = document.getElementById('meta-theme-color');
  const accentBtn = document.getElementById('accent-toggle-btn');
  const accentPopover = document.getElementById('accent-popover');
  const swatches = document.querySelectorAll('[data-accent-choice]');

  function applyTheme(theme) {
    root.setAttribute('data-theme', theme);
    if (themeBtn) {
      themeBtn.setAttribute('aria-pressed', String(theme === 'dark'));
      themeBtn.setAttribute(
        'aria-label',
        theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'
      );
    }
    try {
      localStorage.setItem('portfolio-theme', theme);
    } catch {
      /* Ignore storage failure */
    }
  }

  function applyAccent(accent) {
    root.setAttribute('data-accent', accent);
    swatches.forEach((swatch) => {
      swatch.classList.toggle('is-selected', swatch.dataset.accentChoice === accent);
    });
    if (metaThemeColor) {
      metaThemeColor.setAttribute('content', `#${ACCENT_HEX[accent] || ACCENT_HEX.violet}`);
    }
    try {
      localStorage.setItem('portfolio-accent', accent);
    } catch {
      /* Ignore storage failure */
    }
  }

  const initialTheme = root.getAttribute('data-theme') || 'light';
  const initialAccent = root.getAttribute('data-accent') || 'violet';
  applyTheme(initialTheme);
  applyAccent(initialAccent);

  if (themeBtn) {
    themeBtn.addEventListener('click', () => {
      const next = root.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
      applyTheme(next);
    });
  }

  if (accentBtn && accentPopover) {
    accentBtn.addEventListener('click', (event) => {
      event.stopPropagation();
      const isOpen = !accentPopover.hidden;
      accentPopover.hidden = isOpen;
      accentBtn.setAttribute('aria-expanded', String(!isOpen));
    });

    swatches.forEach((swatch) => {
      swatch.addEventListener('click', () => {
        const chosen = swatch.dataset.accentChoice;
        if (chosen) {
          applyAccent(chosen);
          accentPopover.hidden = true;
          accentBtn.setAttribute('aria-expanded', 'false');
        }
      });
    });

    document.addEventListener('click', (event) => {
      if (!accentPopover.hidden && !event.target.closest('#accent-picker')) {
        accentPopover.hidden = true;
        accentBtn.setAttribute('aria-expanded', 'false');
      }
    });

    document.addEventListener('keydown', (event) => {
      if (event.key === 'Escape' && !accentPopover.hidden) {
        accentPopover.hidden = true;
        accentBtn.setAttribute('aria-expanded', 'false');
        accentBtn.focus();
      }
    });
  }
}

/* ==========================================================================
   Lightweight Typing Effect
   ========================================================================== */
function initTypingEffect() {
  const el = document.getElementById('typing-role');
  const roles = PORTFOLIO_CONFIG.personal.typingRoles;
  if (!el || !Array.isArray(roles) || roles.length === 0) return;

  const prefersReducedMotion =
    window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (prefersReducedMotion) {
    el.textContent = roles[0];
    return;
  }

  let roleIndex = 0;
  let charIndex = roles[0].length;
  let isDeleting = true;

  function tick() {
    const currentRole = roles[roleIndex];
    if (isDeleting) {
      charIndex = Math.max(0, charIndex - 1);
      el.textContent = currentRole.slice(0, charIndex);
      if (charIndex === 0) {
        isDeleting = false;
        roleIndex = (roleIndex + 1) % roles.length;
        setTimeout(tick, 320);
        return;
      }
      setTimeout(tick, 42);
    } else {
      charIndex = Math.min(currentRole.length, charIndex + 1);
      el.textContent = currentRole.slice(0, charIndex);
      if (charIndex === currentRole.length) {
        isDeleting = true;
        setTimeout(tick, 1700);
        return;
      }
      setTimeout(tick, 72);
    }
  }

  setTimeout(tick, 1800);
}

/* ==========================================================================
   Render Static & Config-Driven Sections
   ========================================================================== */
function renderAboutTraits() {
  const grid = document.getElementById('traits-grid');
  if (!grid) return;

  grid.innerHTML = PORTFOLIO_CONFIG.about.traits
    .map(
      (trait) => `
      <div class="trait-card">
        ${ICONS[trait.icon] || ICONS.target}
        <span>${trait.label}</span>
      </div>`
    )
    .join('');

  const interestsEl = document.getElementById('interests-list');
  if (interestsEl) {
    interestsEl.textContent = PORTFOLIO_CONFIG.about.interests.join(' · ');
  }
}

function renderSkills() {
  const grid = document.getElementById('skills-grid');
  if (!grid) return;

  const flipIcon = `<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M21 12a9 9 0 0 0-9-9 9.75 9.75 0 0 0-6.74 2.74L3 8"></path><path d="M3 3v5h5"></path><path d="M3 12a9 9 0 0 0 9 9 9.75 9.75 0 0 0 6.74-2.74L21 16"></path><path d="M16 16h5v5"></path></svg>`;

  grid.innerHTML = PORTFOLIO_CONFIG.skills
    .map(
      (group) => `
      <div
        class="skill-flip-card"
        role="button"
        tabindex="0"
        aria-pressed="false"
        aria-label="${group.category} skills — click or hover to flip for proficiency breakdown"
      >
        <div class="skill-flip-card__inner">
          <!-- Front Face: Clear Overview -->
          <div class="card-surface skill-face skill-face--front">
            <div class="skill-face__top">
              <div class="skill-category__header">
                <span class="skill-category__icon">${ICONS[group.icon] || ICONS.code}</span>
                <div>
                  <h3 class="skill-category__title">${group.category}</h3>
                  <p class="skill-category__count tabular-nums">${group.items.length} core skills</p>
                </div>
              </div>
              <span class="skill-flip-hint" aria-hidden="true">
                ${flipIcon}
                <span>Details</span>
              </span>
            </div>

            <p class="skill-face__summary">${group.summary}</p>

            <ul class="skill-front-grid">
              ${group.items
                .map(
                  (skill) => `
                <li class="skill-front-item">
                  <span class="skill-front-item__name">${skill.name}</span>
                  <span class="skill-front-item__level">${skill.level}</span>
                </li>`
                )
                .join('')}
            </ul>
          </div>

          <!-- Back Face: Proficiency Bars & Applied Context -->
          <div class="card-surface skill-face skill-face--back">
            <div class="skill-face__top">
              <div class="skill-category__header">
                <span class="skill-category__icon">${ICONS[group.icon] || ICONS.code}</span>
                <div>
                  <h3 class="skill-category__title">${group.category}</h3>
                  <p class="skill-category__count">Proficiency &amp; Usage</p>
                </div>
              </div>
              <span class="skill-flip-hint" aria-hidden="true">
                ${flipIcon}
                <span>Overview</span>
              </span>
            </div>

            <div class="skill-list">
              ${group.items
                .map(
                  (skill) => `
                <div class="skill-item">
                  <div class="skill-item__row">
                    <span class="skill-item__name">${skill.name}</span>
                    <span class="skill-item__level tabular-nums">${Math.round(skill.pct * 100)}% · ${skill.level}</span>
                  </div>
                  <div class="skill-bar" aria-hidden="true">
                    <div class="skill-bar__fill" style="--skill-scale: ${skill.pct};"></div>
                  </div>
                </div>`
                )
                .join('')}
            </div>

            <p class="skill-face__applied">
              <strong>Applied in:</strong> ${group.appliedIn}
            </p>
          </div>
        </div>
      </div>`
    )
    .join('');

  const supportsHover =
    window.matchMedia && window.matchMedia('(hover: hover) and (pointer: fine)').matches;

  grid.querySelectorAll('.skill-flip-card').forEach((card) => {
    function toggleFlip() {
      if (supportsHover && card.matches(':hover')) {
        const forcedFront = card.classList.toggle('is-force-front');
        card.classList.toggle('is-flipped', !forcedFront);
        card.setAttribute('aria-pressed', String(!forcedFront));
      } else {
        card.classList.remove('is-force-front');
        const next = card.classList.toggle('is-flipped');
        card.setAttribute('aria-pressed', String(next));
      }
    }

    card.addEventListener('click', toggleFlip);
    card.addEventListener('keydown', (event) => {
      if (event.key === 'Enter' || event.key === ' ') {
        event.preventDefault();
        toggleFlip();
      }
    });

    if (supportsHover) {
      card.addEventListener('mouseleave', () => {
        card.classList.remove('is-force-front');
      });
    }
  });
}

function initTimeline() {
  const container = document.getElementById('timeline-container');
  const tabsWrap = document.getElementById('timeline-tabs');
  if (!container) return;

  let currentFilter = 'all';

  function renderTimeline() {
    const items = PORTFOLIO_CONFIG.timeline.filter((item) =>
      currentFilter === 'all' ? true : item.type === currentFilter
    );

    container.innerHTML = items
      .map(
        (item) => `
        <article class="timeline-item">
          <span class="timeline-marker" aria-hidden="true"></span>
          <div class="card-surface timeline-card">
            <p class="timeline-card__meta tabular-nums">${item.categoryLabel} · ${item.period}</p>
            <h3 class="timeline-card__role">${item.role}</h3>
            <p class="timeline-card__org">${item.organization}</p>
            ${
              Array.isArray(item.bullets)
                ? `<ul class="timeline-card__bullets">${item.bullets
                    .map((b) => `<li>${b}</li>`)
                    .join('')}</ul>`
                : `<p class="timeline-card__note">${item.note || ''}</p>`
            }
          </div>
        </article>`
      )
      .join('');
  }

  if (tabsWrap) {
    tabsWrap.addEventListener('click', (event) => {
      const btn = event.target.closest('[data-timeline-filter]');
      if (!btn) return;
      currentFilter = btn.dataset.timelineFilter || 'all';

      tabsWrap.querySelectorAll('[data-timeline-filter]').forEach((item) => {
        const selected = item === btn;
        item.classList.toggle('is-active', selected);
        item.setAttribute('aria-selected', String(selected));
      });

      renderTimeline();
    });
  }

  renderTimeline();
}

function renderAchievementsAndCertifications() {
  const achGrid = document.getElementById('achievements-grid');
  const certGrid = document.getElementById('certifications-grid');

  if (achGrid) {
    achGrid.innerHTML = PORTFOLIO_CONFIG.achievements
      .map(
        (item) => `
        <article class="card-surface credential-card">
          <span class="credential-card__icon">${ICONS[item.icon] || ICONS.award}</span>
          <div class="credential-card__body">
            <h4 class="credential-card__title">${item.title}</h4>
            <p class="credential-card__meta">${item.meta}</p>
            ${item.description ? `<p class="credential-card__desc">${item.description}</p>` : ''}
          </div>
        </article>`
      )
      .join('');
  }

  if (certGrid) {
    certGrid.innerHTML = PORTFOLIO_CONFIG.certifications
      .map(
        (cert) => `
        <article class="card-surface credential-card">
          <span class="credential-card__icon">${ICONS.badge}</span>
          <div>
            <h4 class="credential-card__title">${cert.title}</h4>
            <p class="credential-card__meta">${cert.issuer}</p>
          </div>
        </article>`
      )
      .join('');
  }
}

function renderContactInfo() {
  const grid = document.getElementById('contact-info-grid');
  if (!grid) return;

  const { email, linkedin, github, location, languages } = PORTFOLIO_CONFIG.personal;

  grid.innerHTML = `
    <div class="card-surface contact-card">
      <div class="contact-card__left">
        <span class="contact-card__icon">${ICONS.mail}</span>
        <div>
          <span class="contact-card__label">Email</span>
          <a href="mailto:${email}" class="contact-card__value">${email}</a>
        </div>
      </div>
      <button type="button" class="icon-btn" id="copy-email-btn" aria-label="Copy email address" title="Copy email">
        ${ICONS.copy}
      </button>
    </div>

    <a href="${linkedin}" target="_blank" rel="noopener noreferrer" class="card-surface contact-card">
      <div class="contact-card__left">
        <span class="contact-card__icon">${ICONS.linkedin}</span>
        <div>
          <span class="contact-card__label">LinkedIn</span>
          <span class="contact-card__value">linkedin.com/in/harshitatiwari948</span>
        </div>
      </div>
      <span class="text-link">Connect</span>
    </a>

    <a href="${github}" target="_blank" rel="noopener noreferrer" class="card-surface contact-card">
      <div class="contact-card__left">
        <span class="contact-card__icon">${ICONS.github}</span>
        <div>
          <span class="contact-card__label">GitHub</span>
          <span class="contact-card__value">github.com/classrep12</span>
        </div>
      </div>
      <span class="text-link">Follow</span>
    </a>

    <div class="card-surface contact-card">
      <div class="contact-card__left">
        <span class="contact-card__icon">${ICONS.mapPin}</span>
        <div>
          <span class="contact-card__label">Location &amp; Languages</span>
          <span class="contact-card__value">${location} · ${languages.join(', ')}</span>
        </div>
      </div>
    </div>
  `;

  const copyBtn = document.getElementById('copy-email-btn');
  if (copyBtn) {
    copyBtn.addEventListener('click', async () => {
      try {
        await navigator.clipboard.writeText(email);
        showToast('Email copied to clipboard');
      } catch {
        showToast(`Email: ${email}`);
      }
    });
  }
}

/* ==========================================================================
   Navigation, Mobile Drawer, Scroll Progress & Observers
   ========================================================================== */
function initMobileDrawer() {
  const openBtn = document.getElementById('mobile-menu-btn');
  const closeBtn = document.getElementById('mobile-close-btn');
  const drawer = document.getElementById('mobile-drawer');
  const backdrop = document.getElementById('mobile-backdrop');
  const links = document.querySelectorAll('.mobile-nav-link');

  if (!openBtn || !drawer || !backdrop) return;

  function openMenu() {
    drawer.hidden = false;
    backdrop.hidden = false;
    drawer.setAttribute('aria-hidden', 'false');
    openBtn.setAttribute('aria-expanded', 'true');
    document.body.style.overflow = 'hidden';
    requestAnimationFrame(() => {
      drawer.classList.add('is-open');
      if (closeBtn) closeBtn.focus();
    });
  }

  function closeMenu() {
    drawer.classList.remove('is-open');
    drawer.setAttribute('aria-hidden', 'true');
    openBtn.setAttribute('aria-expanded', 'false');
    document.body.style.overflow = '';
    setTimeout(() => {
      if (!drawer.classList.contains('is-open')) {
        drawer.hidden = true;
        backdrop.hidden = true;
      }
    }, 280);
    openBtn.focus();
  }

  openBtn.addEventListener('click', openMenu);
  if (closeBtn) closeBtn.addEventListener('click', closeMenu);
  backdrop.addEventListener('click', closeMenu);
  links.forEach((link) => link.addEventListener('click', closeMenu));

  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape' && !drawer.hidden) {
      closeMenu();
    }
  });
}

function initScrollEffects() {
  const progressBar = document.getElementById('scroll-progress-bar');
  const backToTop = document.getElementById('back-to-top');
  const navLinks = document.querySelectorAll('.primary-nav .nav-link');
  const sections = document.querySelectorAll('main section[id]');

  function updateScrollUi() {
    const docHeight = document.documentElement.scrollHeight - window.innerHeight;
    const progress = docHeight > 0 ? Math.min(1, Math.max(0, window.scrollY / docHeight)) : 0;
    if (progressBar) {
      progressBar.style.transform = `scaleX(${progress})`;
    }
    if (backToTop) {
      backToTop.hidden = window.scrollY < 420;
    }
  }

  window.addEventListener('scroll', updateScrollUi, { passive: true });
  updateScrollUi();

  if (backToTop) {
    backToTop.addEventListener('click', () => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }

  // Active nav link highlighting via IntersectionObserver
  if ('IntersectionObserver' in window && navLinks.length > 0) {
    const sectionObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          const id = entry.target.getAttribute('id');
          navLinks.forEach((link) => {
            link.classList.toggle('is-active', link.dataset.section === id);
          });
        });
      },
      { rootMargin: '-35% 0px -55% 0px' }
    );

    sections.forEach((section) => sectionObserver.observe(section));
  }

  // Scroll Reveal + Skill Bar Animation + Count-Up Stats
  const revealEls = document.querySelectorAll('.reveal');
  const prefersReduced =
    window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  function animateCountUp(el) {
    if (el.dataset.counted) return;
    el.dataset.counted = 'true';

    const target = parseFloat(el.dataset.countTo || '0');
    const decimals = parseInt(el.dataset.decimals || '0', 10);
    const suffix = el.dataset.suffix || '';

    if (prefersReduced) {
      el.textContent = `${target.toFixed(decimals)}${suffix}`;
      return;
    }

    const duration = 900;
    const startTime = performance.now();

    function step(now) {
      const elapsed = Math.min(1, (now - startTime) / duration);
      const eased = 1 - Math.pow(1 - elapsed, 3);
      const current = target * eased;
      el.textContent = `${current.toFixed(decimals)}${suffix}`;
      if (elapsed < 1) {
        requestAnimationFrame(step);
      } else {
        el.textContent = `${target.toFixed(decimals)}${suffix}`;
      }
    }

    requestAnimationFrame(step);
  }

  if ('IntersectionObserver' in window && !prefersReduced) {
    const revealObserver = new IntersectionObserver(
      (entries, observer) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          entry.target.classList.add('is-revealed');

          if (entry.target.id === 'skills') {
            entry.target.classList.add('skills-visible');
          }

          if (entry.target.id === 'about') {
            entry.target.querySelectorAll('[data-count-to]').forEach(animateCountUp);
          }

          observer.unobserve(entry.target);
        });
      },
      { threshold: 0.12 }
    );

    revealEls.forEach((el) => revealObserver.observe(el));
  } else {
    revealEls.forEach((el) => {
      el.classList.add('is-revealed');
      if (el.id === 'skills') el.classList.add('skills-visible');
    });
  }
}

/* ==========================================================================
   Contact Form Validation + mailto Fallback
   ========================================================================== */
function initContactForm() {
  const form = document.getElementById('contact-form');
  const successBox = document.getElementById('contact-success');
  if (!form) return;

  const fields = {
    name: document.getElementById('contact-name'),
    email: document.getElementById('contact-email'),
    subject: document.getElementById('contact-subject'),
    message: document.getElementById('contact-message'),
  };

  const errors = {
    name: document.getElementById('error-name'),
    email: document.getElementById('error-email'),
    subject: document.getElementById('error-subject'),
    message: document.getElementById('error-message'),
  };

  function setFieldError(key, msg) {
    if (fields[key]) {
      fields[key].setAttribute('aria-invalid', msg ? 'true' : 'false');
    }
    if (errors[key]) {
      errors[key].textContent = msg;
    }
  }

  function validateForm() {
    let isValid = true;
    const nameVal = fields.name.value.trim();
    const emailVal = fields.email.value.trim();
    const subjectVal = fields.subject.value.trim();
    const messageVal = fields.message.value.trim();

    if (nameVal.length < 2) {
      setFieldError('name', 'Please enter your name (at least 2 characters).');
      isValid = false;
    } else {
      setFieldError('name', '');
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(emailVal)) {
      setFieldError('email', 'Please enter a valid email address.');
      isValid = false;
    } else {
      setFieldError('email', '');
    }

    if (subjectVal.length < 3) {
      setFieldError('subject', 'Please provide a brief subject.');
      isValid = false;
    } else {
      setFieldError('subject', '');
    }

    if (messageVal.length < 10) {
      setFieldError('message', 'Please write a short message (at least 10 characters).');
      isValid = false;
    } else {
      setFieldError('message', '');
    }

    return isValid;
  }

  Object.keys(fields).forEach((key) => {
    fields[key].addEventListener('input', () => {
      if (errors[key] && errors[key].textContent) {
        setFieldError(key, '');
      }
    });
  });

  form.addEventListener('submit', (event) => {
    event.preventDefault();
    if (!validateForm()) return;

    const nameVal = fields.name.value.trim();
    const emailVal = fields.email.value.trim();
    const subjectVal = fields.subject.value.trim();
    const messageVal = fields.message.value.trim();

    /*
     * OPTIONAL BACKENDLESS FORM INTEGRATIONS:
     * ------------------------------------------------------------------------
     * 1) Formspree:
     *    await fetch('https://formspree.io/f/YOUR_FORM_ID', {
     *      method: 'POST',
     *      headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
     *      body: JSON.stringify({ name: nameVal, email: emailVal, subject: subjectVal, message: messageVal }),
     *    });
     *
     * 2) EmailJS:
     *    emailjs.send('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', {
     *      from_name: nameVal, reply_to: emailVal, subject: subjectVal, message: messageVal,
     *    });
     * ------------------------------------------------------------------------
     * Default below uses a zero-setup mailto: link so it works everywhere offline/online.
     */
    const recipient = PORTFOLIO_CONFIG.personal.email;
    const mailBody = `Hi Harshita,\n\n${messageVal}\n\n— ${nameVal} (${emailVal})`;
    const mailtoHref = `mailto:${encodeURIComponent(recipient)}?subject=${encodeURIComponent(
      `[Portfolio] ${subjectVal}`
    )}&body=${encodeURIComponent(mailBody)}`;

    if (successBox) {
      successBox.hidden = false;
    }
    showToast('Opening your email client...');
    window.location.href = mailtoHref;
    form.reset();
  });
}

/* ==========================================================================
   Verified Resume PDF Download (Prevents HTML/Auth Redirect Corruption)
   ========================================================================== */
function isValidPdfBytes(bytes) {
  return (
    bytes instanceof Uint8Array &&
    bytes.length > 1024 &&
    bytes[0] === 0x25 && // %
    bytes[1] === 0x50 && // P
    bytes[2] === 0x44 && // D
    bytes[3] === 0x46 && // F
    bytes[4] === 0x2d    // -
  );
}

async function resolveVerifiedResumeBytes(primaryHref) {
  const candidates = [
    primaryHref,
    PORTFOLIO_CONFIG.personal.resumeUrl,
    'assets/resume.pdf',
    'assets/aistudio/resume_0bc914de.pdf',
  ].filter((url, idx, arr) => url && arr.indexOf(url) === idx);

  for (const url of candidates) {
    try {
      const response = await fetch(url, {
        credentials: 'same-origin',
        cache: 'no-store',
      });
      if (!response.ok) continue;
      const buffer = await response.arrayBuffer();
      const bytes = new Uint8Array(buffer);
      if (isValidPdfBytes(bytes)) {
        return bytes;
      }
    } catch {
      /* Try next candidate or embedded fallback */
    }
  }

  const { getResumePdfBytes } = await import('./resume-fallback.js');
  return getResumePdfBytes();
}

function triggerPdfBlobDownload(bytes, filename) {
  const blob = new Blob([bytes], { type: 'application/pdf' });
  const blobUrl = URL.createObjectURL(blob);

  const link = document.createElement('a');
  link.href = blobUrl;
  link.download = filename;
  link.rel = 'noopener';
  link.style.display = 'none';
  document.body.appendChild(link);
  link.click();
  link.remove();

  // Keep Object URL alive long enough for mobile/desktop download managers to finish reading
  window.setTimeout(() => {
    URL.revokeObjectURL(blobUrl);
  }, 60000);
}

function initResumeDownloads() {
  const resumeLinks = document.querySelectorAll('a[download][href*="resume.pdf"]');
  if (!resumeLinks.length) return;

  let isDownloading = false;

  resumeLinks.forEach((anchor) => {
    anchor.addEventListener('click', async (event) => {
      if (event.metaKey || event.ctrlKey || event.shiftKey || event.altKey || event.button !== 0) {
        return;
      }
      event.preventDefault();
      if (isDownloading) return;

      isDownloading = true;
      const filename = anchor.getAttribute('download') || 'Harshita_Tiwari_Resume.pdf';
      const href = anchor.getAttribute('href') || PORTFOLIO_CONFIG.personal.resumeUrl;

      try {
        showToast('Preparing resume PDF...');
        const pdfBytes = await resolveVerifiedResumeBytes(href);
        if (!isValidPdfBytes(pdfBytes)) {
          throw new Error('Invalid PDF byte stream');
        }
        triggerPdfBlobDownload(pdfBytes, filename);
        showToast('Downloading Harshita_Tiwari_Resume.pdf');
      } catch {
        // Last-resort native link fallback
        window.location.href = href;
      } finally {
        isDownloading = false;
      }
    });
  });
}

/* ==========================================================================
   Bootstrap Application
   ========================================================================== */
function bootstrapPortfolio() {
  const yearEl = document.getElementById('footer-year');
  if (yearEl) {
    yearEl.textContent = String(new Date().getFullYear());
  }

  initThemeAndAccent();
  initTypingEffect();
  renderAboutTraits();
  renderSkills();
  initTimeline();
  renderAchievementsAndCertifications();
  renderContactInfo();
  initMobileDrawer();
  initScrollEffects();
  initResumeDownloads();
  initContactForm();
  initProjects();
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', bootstrapPortfolio);
} else {
  bootstrapPortfolio();
}
