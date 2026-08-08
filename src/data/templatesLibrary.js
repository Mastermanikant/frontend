import { DEFAULT_STYLE } from './componentLibrary';

export const TEMPLATE_CATEGORIES = [
  'All',
  'SaaS & AI',
  'Portfolio / Personal',
  'Agency',
  'E-Commerce',
  'Course & Blog',
  'Business & Services'
];

export const TEMPLATES = [
  // ── 1. SAAS & AI (4 Types) ─────────────────────────────────────────────
  {
    id: 'tpl-ai-saas',
    name: 'AI Image & Text Generator SaaS',
    category: 'SaaS & AI',
    thumbnailBg: 'from-purple-950 via-slate-900 to-indigo-950',
    description: 'Next-gen AI image and prompt generator landing page with glowing CTA and feature cards.',
    elements: [
      { id: 't1-h', type: 'text', text: 'Generate Next-Gen UI with Artificial Intelligence', x: 40, y: 40, style: { fontSize: '32px', color: '#ffffff', fontFamily: 'Inter', fontWeight: 'bold' } },
      { id: 't1-sub', type: 'text', text: 'Transform text prompts into production-grade React & Tailwind code in seconds.', x: 40, y: 90, style: { fontSize: '14px', color: '#94a3b8', fontFamily: 'Inter', fontWeight: 'normal' } },
      { id: 't1-b1', type: 'button', componentId: 'btn-conic-laser', text: '🚀 Launch AI Studio Free', x: 40, y: 140, style: { ...DEFAULT_STYLE, bgColor1: '#06b6d4', bgColor2: '#9333ea' } },
      { id: 't1-b2', type: 'button', componentId: 'btn-social-github', text: 'Star on GitHub ⭐️', x: 270, y: 140, style: { ...DEFAULT_STYLE } }
    ]
  },
  {
    id: 'tpl-cloud-analytics',
    name: 'Real-Time Cloud Analytics Platform',
    category: 'SaaS & AI',
    thumbnailBg: 'from-cyan-950 via-slate-900 to-blue-950',
    description: 'High-throughput real-time data metrics dashboard landing page with neon charts.',
    elements: [
      { id: 't2-h', type: 'text', text: 'Unified Cloud Metrics & Telemetry Engine', x: 40, y: 40, style: { fontSize: '32px', color: '#38bdf8', fontFamily: 'Montserrat', fontWeight: 'bold' } },
      { id: 't2-sub', type: 'text', text: 'Monitor 10M+ events per second with sub-millisecond query latency.', x: 40, y: 90, style: { fontSize: '14px', color: '#94a3b8', fontFamily: 'Inter', fontWeight: 'normal' } },
      { id: 't2-b1', type: 'button', componentId: 'btn-glow-pulse', text: 'Start 14-Day Free Trial', x: 40, y: 140, style: { ...DEFAULT_STYLE, glowColor: '#38bdf8', bgColor1: '#0284c7', bgColor2: '#0369a1' } }
    ]
  },
  {
    id: 'tpl-dev-api',
    name: 'Developer API & Gateway Hub',
    category: 'SaaS & AI',
    thumbnailBg: 'from-slate-950 via-zinc-900 to-slate-900',
    description: 'Dark terminal-style landing page built specifically for developer tools and API products.',
    elements: [
      { id: 't3-h', type: 'text', text: 'The Programmable Infrastructure API', x: 40, y: 40, style: { fontSize: '30px', color: '#4ade80', fontFamily: 'Fira Code', fontWeight: 'bold' } },
      { id: 't3-sub', type: 'text', text: 'curl -X POST https://api.devhub.com/v1/deploy', x: 40, y: 85, style: { fontSize: '13px', color: '#a7f3d0', fontFamily: 'Fira Code', fontWeight: 'normal' } },
      { id: 't3-b1', type: 'button', componentId: 'btn-cyberpunk', text: 'READ DOCUMENTATION →', x: 40, y: 130, style: { ...DEFAULT_STYLE, bgColor1: '#22c55e', borderColor: '#4ade80' } }
    ]
  },
  {
    id: 'tpl-cyber-sec',
    name: 'Cyber Security & Zero Trust Suite',
    category: 'SaaS & AI',
    thumbnailBg: 'from-emerald-950 via-slate-950 to-teal-950',
    description: 'Enterprise zero-trust network security dashboard landing page with matrix effects.',
    elements: [
      { id: 't4-h', type: 'text', text: 'Autonomous Zero-Trust Cloud Security', x: 40, y: 40, style: { fontSize: '32px', color: '#2dd4bf', fontFamily: 'Oswald', fontWeight: 'bold' } },
      { id: 't4-b1', type: 'button', componentId: 'btn-3d-push', text: '🛡️ Request Security Audit', x: 40, y: 110, style: { ...DEFAULT_STYLE, bgColor1: '#0d9488', bgColor2: '#115e59' } }
    ]
  },

  // ── 2. PORTFOLIO / PERSONAL (4 Types) ──────────────────────────────────
  {
    id: 'tpl-dev-portfolio',
    name: '3D Developer & Vibe Portfolio',
    category: 'Portfolio / Personal',
    thumbnailBg: 'from-cyan-950 via-slate-900 to-emerald-950',
    description: 'Cyberpunk glassmorphic portfolio layout for full-stack developers and UI architects.',
    elements: [
      { id: 't5-h', type: 'text', text: 'Hi, I am Manikant — Senior UI Architect', x: 40, y: 40, style: { fontSize: '30px', color: '#38bdf8', fontFamily: 'Oswald', fontWeight: 'bold' } },
      { id: 't5-sub', type: 'text', text: 'Building $50K SaaS Web Applications, Design Systems, and High-Performance Frontend Labs.', x: 40, y: 85, style: { fontSize: '13px', color: '#cbd5e1', fontFamily: 'Inter', fontWeight: 'normal' } },
      { id: 't5-b1', type: 'button', componentId: 'btn-cyberpunk', text: 'VIEW PROJECTS [2026]', x: 40, y: 135, style: { ...DEFAULT_STYLE, bgColor1: '#facc15', borderColor: '#ff2a85' } }
    ]
  },
  {
    id: 'tpl-minimal-arch',
    name: 'Minimalist Design Architect Portfolio',
    category: 'Portfolio / Personal',
    thumbnailBg: 'from-stone-900 via-zinc-950 to-neutral-900',
    description: 'Clean serif luxury portfolio for architects, product designers, and visual strategists.',
    elements: [
      { id: 't6-h', type: 'text', text: 'Timeless Product Design & Spatial Experiences', x: 40, y: 40, style: { fontSize: '32px', color: '#f5f5f4', fontFamily: 'Playfair Display', fontWeight: 'bold' } },
      { id: 't6-sub', type: 'text', text: 'Crafting minimalist digital products with intentional typography and negative space.', x: 40, y: 90, style: { fontSize: '14px', color: '#a8a29e', fontFamily: 'Merriweather', fontWeight: 'normal' } },
      { id: 't6-b1', type: 'button', componentId: 'btn-social-google', text: 'Contact Designer', x: 40, y: 140, style: { ...DEFAULT_STYLE } }
    ]
  },
  {
    id: 'tpl-creator-hub',
    name: 'Content Creator & Influencer Hub',
    category: 'Portfolio / Personal',
    thumbnailBg: 'from-pink-950 via-purple-950 to-slate-900',
    description: 'Vibrant link-in-bio style personal brand website for YouTubers, podcasters and creators.',
    elements: [
      { id: 't7-h', type: 'text', text: 'Alex Rivers — Tech YouTuber & Educator', x: 40, y: 40, style: { fontSize: '32px', color: '#f472b6', fontFamily: 'Poppins', fontWeight: 'bold' } },
      { id: 't7-b1', type: 'button', componentId: 'btn-glow-pulse', text: '📺 Subscribe on YouTube (500K)', x: 40, y: 100, style: { ...DEFAULT_STYLE, glowColor: '#ec4899', bgColor1: '#db2777', bgColor2: '#be185d' } },
      { id: 't7-b2', type: 'button', componentId: 'btn-social-github', text: '🎙 Listen to Weekly Podcast', x: 40, y: 155, style: { ...DEFAULT_STYLE } }
    ]
  },
  {
    id: 'tpl-freelancer-showcase',
    name: 'Full-Stack Freelancer Showcase',
    category: 'Portfolio / Personal',
    thumbnailBg: 'from-blue-950 via-slate-900 to-indigo-950',
    description: 'Conversion-focused personal portfolio layout designed to land high-paying client contracts.',
    elements: [
      { id: 't8-h', type: 'text', text: 'I Build High-Converting Web Apps for Startups', x: 40, y: 40, style: { fontSize: '30px', color: '#60a5fa', fontFamily: 'Inter', fontWeight: 'bold' } },
      { id: 't8-b1', type: 'button', componentId: 'btn-conic-laser', text: '💼 Hire Me For Your Next Project', x: 40, y: 105, style: { ...DEFAULT_STYLE, bgColor1: '#2563eb', bgColor2: '#4f46e5' } }
    ]
  },

  // ── 3. AGENCY (3 Types) ────────────────────────────────────────────────
  {
    id: 'tpl-agency-bento',
    name: 'Bento Grid Creative Agency',
    category: 'Agency',
    thumbnailBg: 'from-pink-950 via-slate-900 to-rose-950',
    description: 'Modern agency layout with bento grid cards, typography hierarchy and interactive callouts.',
    elements: [
      { id: 't9-h', type: 'text', text: 'We Craft Digital Products People Love', x: 40, y: 40, style: { fontSize: '34px', color: '#f43f5e', fontFamily: 'Montserrat', fontWeight: '900' } },
      { id: 't9-b1', type: 'button', componentId: 'btn-glow-pulse', text: 'Book 15-Min Strategy Call', x: 40, y: 110, style: { ...DEFAULT_STYLE, glowColor: '#ff2a85', bgColor1: '#ec4899', bgColor2: '#f43f5e' } }
    ]
  },
  {
    id: 'tpl-web3-studio',
    name: 'Web3 & Blockchain Innovation Studio',
    category: 'Agency',
    thumbnailBg: 'from-violet-950 via-slate-950 to-purple-950',
    description: 'Futuristic neon purple web3 agency template for dApps, smart contracts, and NFT platforms.',
    elements: [
      { id: 't10-h', type: 'text', text: 'Architecting Decentralized Protocols', x: 40, y: 40, style: { fontSize: '32px', color: '#c084fc', fontFamily: 'Righteous', fontWeight: 'bold' } },
      { id: 't10-b1', type: 'button', componentId: 'btn-cyberpunk', text: 'EXPLORE PROTOCOLS →', x: 40, y: 110, style: { ...DEFAULT_STYLE, bgColor1: '#a855f7', borderColor: '#c084fc' } }
    ]
  },
  {
    id: 'tpl-growth-agency',
    name: 'Performance Marketing & Scale Agency',
    category: 'Agency',
    thumbnailBg: 'from-emerald-950 via-slate-900 to-green-950',
    description: 'Data-driven agency layout focused on conversion rate optimization and paid growth.',
    elements: [
      { id: 't11-h', type: 'text', text: 'Scale Your ARR From $1M to $10M+', x: 40, y: 40, style: { fontSize: '32px', color: '#34d399', fontFamily: 'Oswald', fontWeight: 'bold' } },
      { id: 't11-b1', type: 'button', componentId: 'btn-3d-push', text: '📈 Get Free Growth Audit', x: 40, y: 110, style: { ...DEFAULT_STYLE, bgColor1: '#059669', bgColor2: '#047857' } }
    ]
  },

  // ── 4. E-COMMERCE (3 Types) ────────────────────────────────────────────
  {
    id: 'tpl-ecommerce-store',
    name: 'Modern Web3 E-Commerce Store',
    category: 'E-Commerce',
    thumbnailBg: 'from-amber-950 via-slate-900 to-yellow-950',
    description: 'High-converting product showcase store template with instant checkout CTA buttons.',
    elements: [
      { id: 't12-h', type: 'text', text: 'Minimalist Wireless Noise-Canceling Headphones', x: 40, y: 40, style: { fontSize: '28px', color: '#fef08a', fontFamily: 'Playfair Display', fontWeight: 'bold' } },
      { id: 't12-sub', type: 'text', text: '$299.00 — Free Worldwide Express Shipping Included', x: 40, y: 85, style: { fontSize: '14px', color: '#eab308', fontFamily: 'Inter', fontWeight: 'bold' } },
      { id: 't12-b1', type: 'button', componentId: 'btn-3d-push', text: '🛒 Add To Cart Instant', x: 40, y: 130, style: { ...DEFAULT_STYLE, bgColor1: '#eab308', bgColor2: '#ca8a04', textColor: '#000000' } }
    ]
  },
  {
    id: 'tpl-luxury-boutique',
    name: 'Luxury Fashion & Apparel Boutique',
    category: 'E-Commerce',
    thumbnailBg: 'from-stone-950 via-neutral-900 to-zinc-950',
    description: 'High-end editorial fashion storefront with minimalist typography and hero slider.',
    elements: [
      { id: 't13-h', type: 'text', text: 'Autumn / Winter Collection 2026', x: 40, y: 40, style: { fontSize: '32px', color: '#ffffff', fontFamily: 'Playfair Display', fontWeight: 'bold' } },
      { id: 't13-b1', type: 'button', componentId: 'btn-conic-laser', text: 'Explore Collection', x: 40, y: 105, style: { ...DEFAULT_STYLE, bgColor1: '#1c1917', bgColor2: '#44403c' } }
    ]
  },
  {
    id: 'tpl-digital-marketplace',
    name: 'Digital Assets & UI Kit Marketplace',
    category: 'E-Commerce',
    thumbnailBg: 'from-blue-950 via-slate-950 to-cyan-950',
    description: 'SaaS marketplace layout for selling 3D assets, icons, templates, and UI components.',
    elements: [
      { id: 't14-h', type: 'text', text: 'Premium 3D UI Assets & Icon Packs', x: 40, y: 40, style: { fontSize: '32px', color: '#38bdf8', fontFamily: 'Inter', fontWeight: 'bold' } },
      { id: 't14-b1', type: 'button', componentId: 'btn-glow-pulse', text: '⚡ Get Unlimited Pass ($99)', x: 40, y: 105, style: { ...DEFAULT_STYLE, glowColor: '#00f2fe', bgColor1: '#0284c7', bgColor2: '#0369a1' } }
    ]
  },

  // ── 5. COURSE & BLOG (3 Types) ─────────────────────────────────────────
  {
    id: 'tpl-masterclass-course',
    name: 'Frontend Masterclass & Video Academy',
    category: 'Course & Blog',
    thumbnailBg: 'from-red-950 via-slate-950 to-orange-950',
    description: 'High-converting course sales page with curriculum preview and enrollment badges.',
    elements: [
      { id: 't15-h', type: 'text', text: 'Master Full-Stack Frontend Engineering (2026)', x: 40, y: 40, style: { fontSize: '30px', color: '#f87171', fontFamily: 'Montserrat', fontWeight: 'bold' } },
      { id: 't15-sub', type: 'text', text: '120+ HD Video Modules, 15 Real-World SaaS Projects, Private Discord.', x: 40, y: 85, style: { fontSize: '13px', color: '#fca5a5', fontFamily: 'Inter', fontWeight: 'normal' } },
      { id: 't15-b1', type: 'button', componentId: 'btn-3d-push', text: '🎓 Enroll Now (50% Off)', x: 40, y: 135, style: { ...DEFAULT_STYLE, bgColor1: '#dc2626', bgColor2: '#991b1b' } }
    ]
  },
  {
    id: 'tpl-tech-blog',
    name: 'Modern AI & Tech Media Blog',
    category: 'Course & Blog',
    thumbnailBg: 'from-slate-950 via-teal-950 to-slate-900',
    description: 'Editorial blog layout with featured articles, newsletter subscription and category tags.',
    elements: [
      { id: 't16-h', type: 'text', text: 'The Future of Web Development & GenAI', x: 40, y: 40, style: { fontSize: '30px', color: '#2dd4bf', fontFamily: 'Georgia', fontWeight: 'bold' } },
      { id: 't16-b1', type: 'button', componentId: 'btn-glow-pulse', text: '✉️ Subscribe To Weekly Newsletter', x: 40, y: 105, style: { ...DEFAULT_STYLE, glowColor: '#2dd4bf', bgColor1: '#0d9488', bgColor2: '#0f766e' } }
    ]
  },

  // ── 6. BUSINESS & SERVICES (3 Types) ───────────────────────────────────
  {
    id: 'tpl-restaurant-bistro',
    name: 'Modern Gourmet Restaurant & Bistro',
    category: 'Business & Services',
    thumbnailBg: 'from-amber-950 via-stone-900 to-orange-950',
    description: 'Warm luxury restaurant landing page with interactive menu items and table reservation CTA.',
    elements: [
      { id: 't17-h', type: 'text', text: 'Authentic Fine Dining & Artisanal Cocktails', x: 40, y: 40, style: { fontSize: '30px', color: '#fbbf24', fontFamily: 'Playfair Display', fontWeight: 'bold' } },
      { id: 't17-b1', type: 'button', componentId: 'btn-conic-laser', text: '🍷 Reserve A Table Online', x: 40, y: 105, style: { ...DEFAULT_STYLE, bgColor1: '#d97706', bgColor2: '#b45309' } }
    ]
  },
  {
    id: 'tpl-healthcare-clinic',
    name: 'Telemedicine & Health Clinic Portal',
    category: 'Business & Services',
    thumbnailBg: 'from-sky-950 via-slate-900 to-cyan-950',
    description: 'Clean medical and wellness clinic landing page with instant appointment booking CTA.',
    elements: [
      { id: 't18-h', type: 'text', text: '24/7 Virtual Healthcare & Specialist Care', x: 40, y: 40, style: { fontSize: '30px', color: '#38bdf8', fontFamily: 'Inter', fontWeight: 'bold' } },
      { id: 't18-b1', type: 'button', componentId: 'btn-3d-push', text: '🩺 Book Instant Doctor Consultation', x: 40, y: 105, style: { ...DEFAULT_STYLE, bgColor1: '#0284c7', bgColor2: '#0369a1' } }
    ]
  }
];
