/**
 * ============================================================================
 * PROJECTS MODULE & CONFIG — Harshita Tiwari Portfolio
 * ============================================================================
 * Edit `PROJECTS_CONFIG` below to customize featured projects, demo video
 * links (Google Drive, YouTube, or local .mp4), live URLs, and offline fallback
 * repositories.
 */

export const PROJECTS_CONFIG = {
  githubUsername: 'classrep12',
  cacheKey: 'ht_portfolio_github_repos_v2',
  cacheTtlMs: 15 * 60 * 1000, // 15 minutes in sessionStorage
  initialVisibleCount: 6,

  /**
   * 3 Featured Projects (Always rendered first, in exact order).
   * - `liveUrl`: Set to URL string if deployed, or '' to hide "Live Demo".
   * - `demoVideo`: Supports Google Drive share links (e.g.
   *   "https://drive.google.com/file/d/FILE_ID/view?usp=sharing"),
   *   YouTube links ("https://youtu.be/ID" or "https://www.youtube.com/watch?v=ID"),
   *   or local MP4 files ("assets/aistudio/...mp4"). Leave '' if none.
   */
  featuredProjects: [
    {
      id: 'kpilot',
      repoName: 'kpilot',
      name: 'KPilot: AI-Powered Weekly KPI Analytics Platform',
      category: 'AI/ML',
      categories: ['AI/ML', 'Web', 'Python'],
      description:
        'Full-stack KPI analytics platform processing 96 records across 8 weeks, 3 brands, and 4 business metrics to automate weekly executive performance reviews and PDF reporting.',
      bullets: [
        'Engineered deterministic Pandas analytics for target attainment, week-over-week trends, and Red/Amber/Green classification with configurable validation thresholds.',
        'Integrated Gemini API with Pydantic-validated structured outputs generating brand-wise summaries, ranked risks, and follow-ups with owner roles, deadlines, and priorities.',
        'Built 4 FastAPI REST endpoints for CSV ingestion, KPI computation, AI review generation, and multi-page ReportLab PDF export.',
        'Delivered interactive React + Recharts dashboards deployed on Vercel with FastAPI backend on Render and environment-based CORS configuration.',
      ],
      stack: ['Python', 'FastAPI', 'Pandas', 'React', 'Gemini API', 'Pydantic', 'Recharts', 'ReportLab'],
      language: 'Python',
      thumbnail: 'assets/aistudio/kpilot_image_3e6d07ed.png',
      githubUrl: 'https://github.com/classrep12/kpilot',
      liveUrl: 'https://kpilot-chi.vercel.app/',
      demoVideo: '',
      stars: 0,
      forks: 0,
      featured: true,
    },
    {
      id: 'rf-faultsense',
      repoName: 'RF-Antenna-Fault-Detection',
      name: 'RF FaultSense: Full-Stack RF Antenna Fault Detection System',
      category: 'AI/ML',
      categories: ['AI/ML', 'Web', 'Python'],
      description:
        'Machine learning diagnostic platform using Balanced Random Forest (83.09% accuracy) to classify multi-class RF antenna faults from 13 geometry, material, and S-parameter features.',
      bullets: [
        'Trained and evaluated a Balanced Random Forest classifier achieving 83.09% accuracy across 8 RF antenna fault classes.',
        'Designed FastAPI REST endpoints supporting single-sample manual prediction, batch CSV inference, confidence scores, and top-3 fault recommendations.',
        'Built a responsive React.js + Vite + Tailwind CSS dashboard featuring sample data loading, confidence visualizations, and annotated CSV download.',
      ],
      stack: ['FastAPI', 'React.js', 'Vite', 'Tailwind CSS', 'Random Forest', 'Python', 'Scikit-learn'],
      language: 'Python',
      thumbnail: 'assets/aistudio/rffaultsense_image_ae14189b.png',
      githubUrl: 'https://github.com/classrep12/RF-Antenna-Fault-Detection',
      liveUrl: '',
      // Replace with your Google Drive share URL anytime, e.g.:
      // "https://drive.google.com/file/d/YOUR_DRIVE_FILE_ID/view?usp=sharing"
      demoVideo: 'assets/aistudio/Antenna_Fault_Analysis_797fa931.mp4',
      stars: 0,
      forks: 0,
      featured: true,
    },
    {
      id: 'multimedai',
      repoName: 'MultimedAI-Project',
      name: 'MultiMedAI: Medical Imaging AI Analysis Platform',
      category: 'AI/ML',
      categories: ['AI/ML', 'Web', 'Python'],
      description:
        'Full-stack diagnostic support platform combining PyTorch YOLOv8-Seg tumor detection and segmentation with MedGemma/Gemini structured clinical observations and multi-system code mapping.',
      bullets: [
        'Built a YOLOv8-Seg brain tumor detection and segmentation pipeline for automated MRI localization achieving 83% validation accuracy.',
        'Combined PyTorch computer vision inference with MedGemma/Gemini interpretation for structured radiological observations and confidence scoring.',
        'Developed a React + TypeScript clinical interface and FastAPI backend supporting scan upload, archive history, code mappings (ICD-10/11, Ayush), and PDF report export.',
      ],
      stack: ['PyTorch', 'YOLOv8-Seg', 'FastAPI', 'React', 'TypeScript', 'MedGemma', 'Gemini API'],
      language: 'TypeScript',
      thumbnail: 'assets/aistudio/multimedAI_image_a0810320.png',
      githubUrl: 'https://github.com/classrep12/MultimedAI-Project',
      liveUrl: '',
      // Replace with your Google Drive share URL anytime, e.g.:
      // "https://drive.google.com/file/d/YOUR_DRIVE_FILE_ID/view?usp=sharing"
      demoVideo: 'assets/aistudio/MultimedAI_Demo__1__9e2c1212.mp4',
      stars: 0,
      forks: 0,
      featured: true,
    },
  ],

  /**
   * Additional curated GitHub projects shown after the 3 featured projects
   * (also used as offline fallback when GitHub API is unreachable).
   * All other repositories—including the separate `MultiMedAI` repo—are excluded.
   */
  fallbackRepos: [
    {
      id: 'indecent-memes-classification',
      repoName: 'IndecentMemes-Classification',
      name: 'IndecentMemes Classification: Multimodal Hateful Meme Detection',
      category: 'AI/ML',
      categories: ['AI/ML', 'Python'],
      description:
        'Multimodal vision-language and deep learning research pipeline comparing TF-IDF + SVM, ViT, BiLSTM + ResNet50, VGG, EfficientNet-B0 + CLIP, and Early/Late Fusion for hateful & indecent meme classification.',
      bullets: [
        'Performed visual and textual exploratory data analysis (KID-VLM) across multimodal meme datasets to study sarcastic and implicit hate cues.',
        'Benchmarked classical NLP + vision baselines (TF-IDF + SVM + ViT) against deep multimodal architectures (BiLSTM + ResNet50, VGG, EfficientNet-B0 + CLIP).',
        'Implemented Early and Late multimodal fusion pipelines in Jupyter Notebooks alongside structured experimental evaluation.',
      ],
      stack: ['Python', 'PyTorch', 'CLIP', 'ViT', 'ResNet50', 'EfficientNet-B0', 'BiLSTM', 'TF-IDF'],
      language: 'Jupyter Notebook',
      thumbnail: 'assets/aistudio/Indeccent_memes_photo_39f91107.png',
      githubUrl: 'https://github.com/classrep12/IndecentMemes-Classification',
      liveUrl: '',
      demoVideo: '',
      stars: 0,
      forks: 0,
      featured: false,
    },
    {
      id: 'sakhi-support-bot',
      repoName: 'sakhi-support-bot',
      name: 'Sakhi Support Bot: Safe Digital Companion & AI Counseling Platform',
      category: 'Web',
      categories: ['AI/ML', 'Web'],
      description:
        'Safe digital companion and supportive web platform for women facing emotional distress, harassment, or isolation—offering AI-powered counseling, anonymous mental health support, peer connection, health resources, and emergency helpline access.',
      bullets: [
        'Built an accessible full-stack web platform featuring an AI-powered support chatbot, anonymous story sharing, and curated women’s health resources.',
        'Integrated quick-access safety controls including direct helpline calling and an Emergency Exit safeguard for user privacy.',
        'Deployed live on Render for instant community and underserved-user access across desktop and mobile devices.',
      ],
      stack: ['JavaScript', 'HTML/CSS', 'Node.js', 'AI Chatbot', 'Mental Health Tech', 'Render'],
      language: 'JavaScript',
      thumbnail: 'assets/aistudio/Sakhi_Support_Bot_image_b3bf43bb.png',
      githubUrl: 'https://github.com/classrep12/sakhi-support-bot',
      liveUrl: 'https://sakhi-support-bot-3.onrender.com/',
      demoVideo: '',
      stars: 0,
      forks: 0,
      featured: false,
    },
  ],
};

/**
 * Converts a Google Drive share link, YouTube URL, or local MP4 path into
 * an embed-ready video descriptor.
 *
 * Examples supported:
 *  - https://drive.google.com/file/d/FILE_ID/view?usp=sharing -> https://drive.google.com/file/d/FILE_ID/preview
 *  - https://drive.google.com/open?id=FILE_ID -> https://drive.google.com/file/d/FILE_ID/preview
 *  - https://www.youtube.com/watch?v=VIDEO_ID -> https://www.youtube.com/embed/VIDEO_ID
 *  - https://youtu.be/VIDEO_ID -> https://www.youtube.com/embed/VIDEO_ID
 *  - assets/aistudio/Antenna_Fault_Analysis_797fa931.mp4 -> direct <video>
 */
export function getEmbedVideoInfo(rawUrl) {
  if (!rawUrl || typeof rawUrl !== 'string') return null;
  const url = rawUrl.trim();
  if (!url) return null;

  // Google Drive: /file/d/<id>/... or ?id=<id>
  if (url.includes('drive.google.com')) {
    const fileMatch = url.match(/\/file\/d\/([a-zA-Z0-9_-]+)/);
    const idParamMatch = url.match(/[?&]id=([a-zA-Z0-9_-]+)/);
    const fileId = fileMatch ? fileMatch[1] : idParamMatch ? idParamMatch[1] : null;
    if (fileId) {
      return {
        type: 'iframe',
        embedUrl: `https://drive.google.com/file/d/${fileId}/preview`,
        originalUrl: url,
        fallbackLabel: 'Open in Drive',
      };
    }
  }

  // YouTube: watch?v=<id>, youtu.be/<id>, /embed/<id>, /shorts/<id>
  if (url.includes('youtube.com') || url.includes('youtu.be')) {
    let videoId = null;
    if (url.includes('youtu.be/')) {
      const m = url.match(/youtu\.be\/([a-zA-Z0-9_-]+)/);
      videoId = m ? m[1] : null;
    } else if (url.includes('/embed/')) {
      const m = url.match(/\/embed\/([a-zA-Z0-9_-]+)/);
      videoId = m ? m[1] : null;
    } else if (url.includes('/shorts/')) {
      const m = url.match(/\/shorts\/([a-zA-Z0-9_-]+)/);
      videoId = m ? m[1] : null;
    } else {
      const m = url.match(/[?&]v=([a-zA-Z0-9_-]+)/);
      videoId = m ? m[1] : null;
    }
    if (videoId) {
      return {
        type: 'iframe',
        embedUrl: `https://www.youtube.com/embed/${videoId}`,
        originalUrl: url,
        fallbackLabel: 'Open on YouTube',
      };
    }
  }

  // Local MP4 / WebM video asset
  if (/\.(mp4|webm|ogg)(\?.*)?$/i.test(url)) {
    return {
      type: 'video',
      embedUrl: url,
      originalUrl: url,
      fallbackLabel: 'Open Video File',
    };
  }

  return null;
}

/**
 * Classifies a GitHub repository into one of the filter categories.
 */
function classifyGitHubRepo(repo) {
  const haystack = `${repo.name} ${repo.description || ''} ${(repo.topics || []).join(' ')} ${repo.language || ''}`.toLowerCase();
  const categories = [];

  if (/\b(ai|ml|machine[- ]?learning|deep[- ]?learning|pytorch|yolo|gemini|llm|nlp|vision|medgemma|scikit|random[- ]?forest|bert|kpi)\b/.test(haystack)) {
    categories.push('AI/ML');
  }
  if (/\b(react|typescript|javascript|html|css|tailwind|vite|next|frontend|web|portfolio|fastapi)\b/.test(haystack)) {
    categories.push('Web');
  }
  if ((repo.language || '').toLowerCase() === 'python' || /\bpython\b/.test(haystack)) {
    categories.push('Python');
  }
  if (categories.length === 0) {
    categories.push('Other');
  }

  return {
    primary: categories[0],
    all: categories,
  };
}

/**
 * Formats repository slug names into readable titles.
 */
function formatRepoTitle(name) {
  return name
    .replace(/[-_]+/g, ' ')
    .replace(/\b\w/g, (ch) => ch.toUpperCase());
}

/**
 * Escapes HTML special characters to prevent XSS from external API strings.
 */
function escapeHtml(str) {
  return String(str ?? '')
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');
}

/**
 * Fetches GitHub repositories with sessionStorage caching and fallback support.
 */
async function fetchGitHubRepos() {
  const { githubUsername, cacheKey, cacheTtlMs } = PROJECTS_CONFIG;

  // Check sessionStorage cache first
  try {
    const cachedRaw = sessionStorage.getItem(cacheKey);
    if (cachedRaw) {
      const cached = JSON.parse(cachedRaw);
      if (cached && Array.isArray(cached.repos) && Date.now() - cached.timestamp < cacheTtlMs) {
        return { repos: cached.repos, source: 'cache' };
      }
    }
  } catch {
    /* Ignore sessionStorage issues */
  }

  const endpoint = `https://api.github.com/users/${encodeURIComponent(githubUsername)}/repos?sort=updated&per_page=100`;
  const response = await fetch(endpoint, {
    headers: { Accept: 'application/vnd.github+json' },
  });

  if (!response.ok) {
    throw new Error(`GitHub API returned ${response.status}`);
  }

  const rawRepos = await response.json();
  if (!Array.isArray(rawRepos)) {
    throw new Error('Unexpected GitHub API payload');
  }

  const filtered = rawRepos.filter(
    (repo) => !repo.fork && repo.name.toLowerCase() !== githubUsername.toLowerCase()
  );

  try {
    sessionStorage.setItem(
      cacheKey,
      JSON.stringify({ timestamp: Date.now(), repos: filtered })
    );
  } catch {
    /* Ignore quota errors */
  }

  return { repos: filtered, source: 'live' };
}

/**
 * Merges live GitHub metadata strictly for the 5 allowed projects (the 3 featured
 * projects first, followed by IndecentMemes-Classification and sakhi-support-bot).
 * All other repositories—including the duplicate `MultiMedAI` repo—are excluded.
 */
function buildProjectList(apiRepos) {
  const { featuredProjects, fallbackRepos } = PROJECTS_CONFIG;
  const repoMap = new Map();

  for (const repo of apiRepos) {
    repoMap.set(repo.name.toLowerCase(), repo);
  }

  const allowedProjects = [...featuredProjects, ...fallbackRepos];

  return allowedProjects.map((project) => {
    const liveMatch = repoMap.get(project.repoName.toLowerCase());
    return {
      ...project,
      stars: liveMatch ? liveMatch.stargazers_count || 0 : project.stars || 0,
      forks: liveMatch ? liveMatch.forks_count || 0 : project.forks || 0,
      updatedAt: liveMatch ? liveMatch.updated_at : '',
    };
  });
}

/**
 * Initializes the Projects section: skeletons, GitHub sync, filters, search,
 * Show More toggle, and accessible Modal with lazy video loading.
 */
export function initProjects() {
  const gridEl = document.getElementById('projects-grid');
  const statusEl = document.getElementById('projects-status-note');
  const filterContainer = document.getElementById('project-filters');
  const searchInput = document.getElementById('project-search');
  const emptyEl = document.getElementById('projects-empty');
  const resetBtn = document.getElementById('reset-project-filters');
  const moreWrapEl = document.getElementById('projects-more-wrap');
  const moreBtnEl = document.getElementById('show-more-projects');

  // Modal elements
  const modalOverlay = document.getElementById('project-modal');
  const modalDialog = document.getElementById('modal-dialog');
  const modalCloseBtn = document.getElementById('modal-close-btn');
  const modalMeta = document.getElementById('modal-meta');
  const modalTitle = document.getElementById('modal-title');
  const modalVideoSection = document.getElementById('modal-video-section');
  const modalVideoContainer = document.getElementById('modal-video-container');
  const modalVideoFallback = document.getElementById('modal-video-fallback');
  const modalScreenshotWrap = document.getElementById('modal-screenshot-wrap');
  const modalScreenshot = document.getElementById('modal-screenshot');
  const modalDescription = document.getElementById('modal-description');
  const modalHighlightsWrap = document.getElementById('modal-highlights-wrap');
  const modalBullets = document.getElementById('modal-bullets');
  const modalStack = document.getElementById('modal-stack');
  const modalActions = document.getElementById('modal-actions');

  if (!gridEl) return;

  let allProjects = [];
  let activeFilter = 'All';
  let searchQuery = '';
  let showAll = false;
  let lastFocusedTrigger = null;

  function renderSkeletons(count = 3) {
    gridEl.innerHTML = Array.from({ length: count })
      .map(
        () => `
        <article class="card-surface skeleton-card" aria-hidden="true">
          <div class="skeleton-box skeleton-thumb"></div>
          <div class="skeleton-content">
            <div class="skeleton-box skeleton-line skeleton-line--short"></div>
            <div class="skeleton-box skeleton-line skeleton-line--title"></div>
            <div class="skeleton-box skeleton-line"></div>
            <div class="skeleton-box skeleton-line"></div>
          </div>
        </article>`
      )
      .join('');
  }

  function getFilteredProjects() {
    const q = searchQuery.trim().toLowerCase();
    return allProjects.filter((project) => {
      const matchesFilter =
        activeFilter === 'All' ||
        project.category === activeFilter ||
        (Array.isArray(project.categories) && project.categories.includes(activeFilter));

      if (!matchesFilter) return false;
      if (!q) return true;

      const searchable = [
        project.name,
        project.description,
        project.language,
        ...(project.stack || []),
        ...(project.bullets || []),
      ]
        .join(' ')
        .toLowerCase();

      return searchable.includes(q);
    });
  }

  function renderProjects() {
    const filtered = getFilteredProjects();
    const limit = PROJECTS_CONFIG.initialVisibleCount;

    if (filtered.length === 0) {
      gridEl.innerHTML = '';
      emptyEl.hidden = false;
      moreWrapEl.hidden = true;
      return;
    }

    emptyEl.hidden = true;

    const visibleProjects = showAll ? filtered : filtered.slice(0, limit);
    if (filtered.length > limit) {
      moreWrapEl.hidden = false;
      moreBtnEl.textContent = showAll
        ? 'Show Fewer Projects'
        : `Show More Projects (${filtered.length - limit} more)`;
    } else {
      moreWrapEl.hidden = true;
    }

    gridEl.innerHTML = visibleProjects
      .map((project, index) => {
        const kickerParts = [
          project.featured ? 'Featured Project' : project.category,
          project.language,
        ].filter(Boolean);

        const stackSummary = (project.stack || []).slice(0, 6).join(' · ');
        const hasVideo = Boolean(getEmbedVideoInfo(project.demoVideo));
        const isFlagship = index === 0 && visibleProjects.length > 1;

        return `
          <article
            class="card-surface project-card${isFlagship ? ' project-card--flagship' : ''}"
            data-project-id="${escapeHtml(project.id)}"
            tabindex="0"
            aria-label="Inspect ${escapeHtml(project.name)}"
            style="animation-delay: ${Math.min(index * 45, 240)}ms"
          >
            <div class="project-card__media">
              ${
                project.thumbnail
                  ? `<img
                      src="${escapeHtml(project.thumbnail)}"
                      alt="${escapeHtml(project.name)} preview"
                      width="640"
                      height="380"
                      loading="lazy"
                      referrerpolicy="no-referrer"
                      class="project-card__img"
                      onerror="this.style.display='none'; this.nextElementSibling.style.display='flex';"
                    />`
                  : ''
              }
              <div class="image-fallback" style="${project.thumbnail ? 'display: none;' : 'display: flex;'}" aria-hidden="true">
                <span class="image-fallback__initials">${escapeHtml(project.language || 'AI')}</span>
                <span class="image-fallback__label">${escapeHtml(project.repoName)}</span>
              </div>
              ${
                hasVideo
                  ? `<span class="media-video-cue" aria-hidden="true">
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><polygon points="6 4 20 12 6 20 6 4"></polygon></svg>
                      <span>Video Walkthrough</span>
                    </span>`
                  : ''
              }
            </div>

            <div class="project-card__body">
              <p class="project-card__kicker">${escapeHtml(kickerParts.join(' · '))}</p>
              <h3 class="project-card__title">${escapeHtml(project.name)}</h3>
              <p class="project-card__desc">${escapeHtml(project.description)}</p>

              <div class="project-card__meta">
                <p class="project-card__stack">${escapeHtml(stackSummary)}</p>

                <div class="project-card__stats-row">
                  <div class="project-card__counts tabular-nums">
                    <span title="GitHub stars">&#9733; ${project.stars}</span>
                    <span aria-hidden="true">·</span>
                    <span title="GitHub forks">Forks ${project.forks}</span>
                  </div>

                  <div class="project-card__actions">
                    <a
                      href="${escapeHtml(project.githubUrl)}"
                      target="_blank"
                      rel="noopener noreferrer"
                      class="btn btn-secondary btn-sm"
                      data-stop-card-open
                    >GitHub</a>
                    ${
                      project.liveUrl
                        ? `<a
                            href="${escapeHtml(project.liveUrl)}"
                            target="_blank"
                            rel="noopener noreferrer"
                            class="btn btn-primary btn-sm"
                            data-stop-card-open
                          >Live Demo</a>`
                        : ''
                    }
                    ${
                      hasVideo
                        ? `<button
                            type="button"
                            class="btn btn-primary btn-sm"
                            data-watch-demo="${escapeHtml(project.id)}"
                          >Watch Demo</button>`
                        : ''
                    }
                  </div>
                </div>
              </div>
            </div>
          </article>
        `;
      })
      .join('');
  }

  function openModal(projectId, focusVideo = false) {
    const project = allProjects.find((p) => p.id === projectId);
    if (!project || !modalOverlay) return;

    lastFocusedTrigger = document.activeElement;

    const metaParts = [
      project.featured ? 'Featured Case Study' : project.category,
      project.language,
      `${project.stars} stars`,
    ].filter(Boolean);

    modalMeta.textContent = metaParts.join(' · ');
    modalTitle.textContent = project.name;
    modalDescription.textContent = project.description;
    modalStack.textContent = (project.stack || []).join(' · ');

    // Bullets
    if (Array.isArray(project.bullets) && project.bullets.length > 0) {
      modalHighlightsWrap.hidden = false;
      modalBullets.innerHTML = project.bullets.map((b) => `<li>${escapeHtml(b)}</li>`).join('');
    } else {
      modalHighlightsWrap.hidden = true;
      modalBullets.innerHTML = '';
    }

    // Demo Video (loaded lazily ONLY when modal opens)
    const videoInfo = getEmbedVideoInfo(project.demoVideo);
    modalVideoContainer.innerHTML = '';
    modalVideoFallback.innerHTML = '';

    if (videoInfo) {
      modalVideoSection.hidden = false;
      modalScreenshotWrap.hidden = true;

      if (videoInfo.type === 'iframe') {
        const iframe = document.createElement('iframe');
        iframe.src = videoInfo.embedUrl;
        iframe.title = `${project.name} demo video`;
        iframe.loading = 'lazy';
        iframe.allow = 'autoplay; fullscreen';
        iframe.allowFullscreen = true;
        modalVideoContainer.appendChild(iframe);
      } else {
        const video = document.createElement('video');
        video.src = videoInfo.embedUrl;
        video.controls = true;
        video.playsInline = true;
        video.preload = 'metadata';
        if (project.thumbnail) {
          video.poster = project.thumbnail;
        }
        modalVideoContainer.appendChild(video);
      }

      modalVideoFallback.innerHTML = `
        <span>Demo Walkthrough Video</span>
        <a href="${escapeHtml(videoInfo.originalUrl)}" target="_blank" rel="noopener noreferrer" class="text-link">
          ${escapeHtml(videoInfo.fallbackLabel)}
        </a>
      `;
    } else {
      modalVideoSection.hidden = true;
      if (project.thumbnail) {
        modalScreenshotWrap.hidden = false;
        modalScreenshot.src = project.thumbnail;
        modalScreenshot.alt = `${project.name} interface screenshot`;
      } else {
        modalScreenshotWrap.hidden = true;
      }
    }

    // Footer action links
    const actionLinks = [
      `<a href="${escapeHtml(project.githubUrl)}" target="_blank" rel="noopener noreferrer" class="btn btn-secondary">View Repository on GitHub</a>`,
    ];
    if (project.liveUrl) {
      actionLinks.unshift(
        `<a href="${escapeHtml(project.liveUrl)}" target="_blank" rel="noopener noreferrer" class="btn btn-primary">Open Live Demo</a>`
      );
    }
    modalActions.innerHTML = actionLinks.join('');

    modalOverlay.hidden = false;
    document.body.style.overflow = 'hidden';

    requestAnimationFrame(() => {
      if (focusVideo && !modalVideoSection.hidden) {
        modalVideoSection.scrollIntoView({ block: 'nearest' });
      }
      modalDialog.focus();
    });
  }

  function closeModal() {
    if (!modalOverlay || modalOverlay.hidden) return;

    // Remove iframe src & stop video playback immediately
    const activeIframe = modalVideoContainer.querySelector('iframe');
    if (activeIframe) {
      activeIframe.src = '';
    }
    const activeVideo = modalVideoContainer.querySelector('video');
    if (activeVideo) {
      activeVideo.pause();
      activeVideo.removeAttribute('src');
      activeVideo.load();
    }
    modalVideoContainer.innerHTML = '';

    modalOverlay.hidden = true;
    document.body.style.overflow = '';

    if (lastFocusedTrigger && typeof lastFocusedTrigger.focus === 'function') {
      lastFocusedTrigger.focus();
    }
  }

  // Filter buttons
  if (filterContainer) {
    filterContainer.addEventListener('click', (event) => {
      const btn = event.target.closest('.filter-btn');
      if (!btn) return;
      activeFilter = btn.dataset.filter || 'All';
      showAll = false;

      filterContainer.querySelectorAll('.filter-btn').forEach((item) => {
        const selected = item === btn;
        item.classList.toggle('is-active', selected);
        item.setAttribute('aria-selected', String(selected));
      });

      renderProjects();
    });
  }

  // Search input
  if (searchInput) {
    searchInput.addEventListener('input', (event) => {
      searchQuery = event.target.value || '';
      showAll = false;
      renderProjects();
    });
  }

  // Reset filters
  if (resetBtn) {
    resetBtn.addEventListener('click', () => {
      activeFilter = 'All';
      searchQuery = '';
      showAll = false;
      if (searchInput) searchInput.value = '';
      if (filterContainer) {
        filterContainer.querySelectorAll('.filter-btn').forEach((item) => {
          const isAll = item.dataset.filter === 'All';
          item.classList.toggle('is-active', isAll);
          item.setAttribute('aria-selected', String(isAll));
        });
      }
      renderProjects();
    });
  }

  // Show more toggle
  if (moreBtnEl) {
    moreBtnEl.addEventListener('click', () => {
      showAll = !showAll;
      renderProjects();
    });
  }

  // Delegated card click & Watch Demo button
  gridEl.addEventListener('click', (event) => {
    if (event.target.closest('[data-stop-card-open]')) return;

    const watchBtn = event.target.closest('[data-watch-demo]');
    if (watchBtn) {
      event.stopPropagation();
      openModal(watchBtn.dataset.watchDemo, true);
      return;
    }

    const card = event.target.closest('.project-card');
    if (card && card.dataset.projectId) {
      openModal(card.dataset.projectId, false);
    }
  });

  gridEl.addEventListener('keydown', (event) => {
    if (event.key !== 'Enter' && event.key !== ' ') return;
    if (event.target.closest('a, button')) return;
    const card = event.target.closest('.project-card');
    if (card && card.dataset.projectId) {
      event.preventDefault();
      openModal(card.dataset.projectId, false);
    }
  });

  // Modal close handlers & focus trap
  if (modalCloseBtn) {
    modalCloseBtn.addEventListener('click', closeModal);
  }
  if (modalOverlay) {
    modalOverlay.addEventListener('click', (event) => {
      if (event.target === modalOverlay) {
        closeModal();
      }
    });
  }

  document.addEventListener('keydown', (event) => {
    if (!modalOverlay || modalOverlay.hidden) return;

    if (event.key === 'Escape') {
      event.preventDefault();
      closeModal();
      return;
    }

    if (event.key === 'Tab') {
      const focusable = modalDialog.querySelectorAll(
        'a[href], button:not([disabled]), textarea, input, select, [tabindex]:not([tabindex="-1"])'
      );
      if (focusable.length === 0) return;

      const first = focusable[0];
      const last = focusable[focusable.length - 1];

      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first.focus();
      }
    }
  });

  // Initial load sequence
  renderSkeletons(3);
  fetchGitHubRepos()
    .then(({ repos, source }) => {
      allProjects = buildProjectList(repos);
      if (statusEl) {
        statusEl.textContent =
          source === 'cache'
            ? `Synced ${allProjects.length} projects (cached)`
            : `Synced ${allProjects.length} projects from GitHub`;
      }
      renderProjects();
    })
    .catch(() => {
      allProjects = [
        ...PROJECTS_CONFIG.featuredProjects,
        ...PROJECTS_CONFIG.fallbackRepos,
      ];
      if (statusEl) {
        statusEl.textContent =
          'Showing featured & offline curated projects (GitHub live sync unavailable).';
      }
      renderProjects();
    });
}
