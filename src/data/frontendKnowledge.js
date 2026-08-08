// Comprehensive Frontend Knowledge Master Database (Hindi & English)

export const categories = [
  { id: "all", name: "सभी कैटेगरीज (All Terms)", icon: "Sparkles" },
  { id: "philosophy", name: "1. Design Philosophy", icon: "Compass" },
  { id: "architecture", name: "2. Design System Architecture", icon: "Layers" },
  { id: "layouts", name: "3. Layout Systems", icon: "Grid" },
  { id: "spacing", name: "4. Spacing & Rhythm", icon: "MoveHorizontal" },
  { id: "typography", name: "5. Typography & Fonts", icon: "Type" },
  { id: "color", name: "6. Color Science & Schemes", icon: "Palette" },
  { id: "shadows", name: "7. Shadows & Depth", icon: "Box" },
  { id: "motion", name: "11. Motion Design & Transitions", icon: "Zap" },
  { id: "states", name: "12. Interaction States", icon: "MousePointer" },
  { id: "micro", name: "21. Microinteractions", icon: "Fingerprint" },
  { id: "css", name: "22. Advanced CSS Effects", icon: "Code2" },
  { id: "polish", name: "26. Visual Polish & Glows", icon: "Wand2" },
  { id: "inspiration", name: "30. Top Inspiration Sources", icon: "Award" }
];

export const backgroundThemes = [
  { id: 'aurora', name: '🌌 Aurora Flow', class: 'bg-theme-aurora' },
  { id: 'mesh', name: '🎨 Mesh Gradient', class: 'bg-theme-mesh' },
  { id: 'cyberpunk', name: '⚡ Cyberpunk Neon', class: 'bg-theme-cyberpunk' },
  { id: 'bento', name: '🍱 Bento Dot Grid', class: 'bg-theme-bento' },
  { id: 'glass', name: '🍷 Liquid Glass', class: 'bg-theme-glass' },
  { id: 'neumorphism', name: '🪨 Soft Neumorph', class: 'bg-theme-neumorphism' },
  { id: 'hyperdrive', name: '🚀 Hyperdrive Stars', class: 'bg-theme-hyperdrive' },
  { id: 'matrix', name: '🟢 Matrix Code Rain', class: 'bg-theme-matrix' },
  { id: 'sunset', name: '🌅 Sunset Synthwave', class: 'bg-theme-sunset' },
  { id: 'emerald', name: '❇️ Emerald Cyber', class: 'bg-theme-emerald' },
  { id: 'oled', name: '⬛ OLED Pure Dark', class: 'bg-theme-oled' },
  { id: 'prism', name: '🌈 Prism Spectrum', class: 'bg-theme-prism' },
  { id: 'cosmic', name: '🪐 Cosmic Nebula', class: 'bg-theme-cosmic' },
  { id: 'blueprint', name: '📐 Blueprint Grid', class: 'bg-theme-blueprint' },
  { id: 'holographic', name: '💿 Holographic Foil', class: 'bg-theme-holographic' },
  { id: 'lava', name: '🌋 Lava Fluid Glow', class: 'bg-theme-lava' },
  { id: 'midnight', name: '🌙 Midnight Velvet', class: 'bg-theme-midnight' },
  { id: 'toxic', name: '☣️ Toxic Hazard', class: 'bg-theme-toxic' },
  { id: 'vaporwave', name: '🌴 Vaporwave Retro', class: 'bg-theme-vaporwave' },
  { id: 'golden', name: '🪙 Golden Luxe', class: 'bg-theme-golden' },
];

export const popularFonts = [
  {
    id: "plus-jakarta",
    name: "Plus Jakarta Sans",
    family: "'Plus Jakarta Sans', sans-serif",
    category: "Modern Sans-Serif (SaaS Standard)",
    bestFor: "Linear, Vercel & Stripe style clean dashboards",
    sampleText: "Modern SaaS Interface Typography"
  },
  {
    id: "outfit",
    name: "Outfit Font",
    family: "'Outfit', sans-serif",
    category: "Geometric Display",
    bestFor: "Hero Headings & High-Impact Titles",
    sampleText: "Build Immersive Vibe Coding Products"
  },
  {
    id: "fira-code",
    name: "Fira Code Monospace",
    family: "'Fira Code', monospace",
    category: "Code & Monospace",
    bestFor: "AI Prompts, Code Blocks & Terminal Windows",
    sampleText: "const vibeCoding = () => true;"
  },
  {
    id: "roboto",
    name: "Roboto / Inter",
    family: "-apple-system, BlinkMacSystemFont, sans-serif",
    category: "Universal UI Standard",
    bestFor: "High readability body text & mobile apps",
    sampleText: "Universal Readability across all Devices"
  }
];

// Master A to Z Frontend Learning Curriculum
export const frontendAZCurriculum = [
  {
    topic: "HTML5 Semantics & Accessibility (A11y)",
    icon: "Code",
    description: "Semantic elements (main, nav, article, section) and WAI-ARIA roles for universal screen reader access.",
    libs: ["HTML5", "WAI-ARIA", "Axe-core"],
    codeSnippet: `<button aria-label="Submit Form" role="button" className="btn-primary">\n  <span>Submit</span>\n</button>`
  },
  {
    topic: "Modern CSS Layout Architecture",
    icon: "Layout",
    description: "Flexbox, CSS Grid 2.0, Subgrid, and Container Queries (@container) for hyper-responsive UIs.",
    libs: ["Vanilla CSS", "TailwindCSS v3.4", "CSS Grid"],
    codeSnippet: `container-type: inline-size;\n@container (min-width: 400px) {\n  .card { flex-direction: row; }\n}`
  },
  {
    topic: "Design Tokens & CSS Variables",
    icon: "Palette",
    description: "Single-source-of-truth color, spacing, radius, and typography tokens that change the entire UI theme dynamically.",
    libs: ["Style Dictionary", "CSS Custom Properties", "Tailwind Config"],
    codeSnippet: `:root {\n  --accent-primary: #00f2fe;\n  --radius-card: 16px;\n}`
  },
  {
    topic: "Advanced Styling Paradigms",
    icon: "Sparkles",
    description: "Glassmorphism, Neumorphism, Claymorphism, Conic Gradients, Backdrop Filters & SVG Filter Masks.",
    libs: ["CSS backdrop-filter", "conic-gradient", "SVG filters"],
    codeSnippet: `backdrop-filter: blur(16px);\nbackground: rgba(255,255,255,0.08);\nborder: 1px solid rgba(255,255,255,0.15);`
  },
  {
    topic: "Motion Design & Spring Physics",
    icon: "Zap",
    description: "Declarative spring physics, gesture tracking, layout animations, and scroll-driven timelines.",
    libs: ["Framer Motion", "GSAP", "CSS Keyframes", "Web Animations API"],
    codeSnippet: `<motion.div whileHover={{ scale: 1.05 }} transition={{ type: 'spring', stiffness: 400 }}>`
  },
  {
    topic: "Interactive Canvas & 3D Web",
    icon: "Box",
    description: "HTML5 Canvas 2D particle systems, WebGL shaders, Three.js 3D cards, and dynamic mouse glow trails.",
    libs: ["HTML5 Canvas API", "Three.js", "WebGL", "PixiJS"],
    codeSnippet: `ctx.arc(x, y, radius, 0, Math.PI * 2);\nctx.fillStyle = 'rgba(0,242,254,0.6)';\nctx.fill();`
  },
  {
    topic: "Performance & GPU Acceleration",
    icon: "Cpu",
    description: "Hardware acceleration via transform: translate3d(0,0,0), will-change property, INP optimization & layout containment.",
    libs: ["Lighthouse", "Web Vitals API", "Chrome DevTools"],
    codeSnippet: `transform: translateZ(0);\nwill-change: transform, opacity;\ncontain: layout style;`
  }
];
