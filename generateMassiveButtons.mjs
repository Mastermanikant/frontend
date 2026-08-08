import fs from 'fs';

const uniqueButtonTemplates = [
  // Category 01: Essential & Structural
  {
    catId: "01-essential",
    catName: "01. Essential & Structural Shapes",
    subName: "Structural Geometry",
    buttons: [
      {
        id: "btn-struct-solid-primary",
        name: "Classic Solid Primary",
        tags: ["Solid", "Standard", "Primary"],
        html: `<button class="btn-struct-solid-primary">Get Started</button>`,
        css: `.btn-struct-solid-primary {
  background: #6366f1;
  color: #ffffff;
  font-size: 15px;
  font-weight: 600;
  padding: 12px 28px;
  border-radius: 8px;
  border: none;
  cursor: pointer;
  transition: all 0.2s ease;
  box-shadow: 0 4px 12px rgba(99, 102, 241, 0.3);
}
.btn-struct-solid-primary:hover {
  transform: translateY(-2px);
  box-shadow: 0 6px 16px rgba(99, 102, 241, 0.4);
}`
      },
      {
        id: "btn-struct-full-pill",
        name: "Full Pill Rounded",
        tags: ["Pill", "Rounded-Full", "Smooth"],
        html: `<button class="btn-struct-full-pill">Explore Platform</button>`,
        css: `.btn-struct-full-pill {
  background: #6366f1;
  color: #ffffff;
  font-size: 14px;
  font-weight: 600;
  padding: 12px 32px;
  border-radius: 9999px;
  border: none;
  cursor: pointer;
  transition: all 0.25s ease;
  box-shadow: 0 4px 14px rgba(99, 102, 241, 0.35);
}
.btn-struct-full-pill:hover {
  transform: scale(1.04);
}`
      },
      {
        id: "btn-struct-cut-corner",
        name: "Architectural Cut Corner",
        tags: ["Geometric", "Clip-Path", "Sharp"],
        html: `<button class="btn-struct-cut-corner">DEPLOY SYSTEM</button>`,
        css: `.btn-struct-cut-corner {
  background: #0f172a;
  color: #6366f1;
  font-size: 13px;
  font-weight: 700;
  letter-spacing: 1px;
  padding: 14px 30px;
  border: 1px solid #6366f1;
  clip-path: polygon(12px 0%, 100% 0%, 100% calc(100% - 12px), calc(100% - 12px) 100%, 0% 100%, 0% 12px);
  cursor: pointer;
  transition: all 0.2s ease;
}
.btn-struct-cut-corner:hover {
  background: #6366f1;
  color: #ffffff;
}`
      },
      {
        id: "btn-struct-outline-minimal",
        name: "Clean Outline Border",
        tags: ["Outline", "Border", "Minimal"],
        html: `<button class="btn-struct-outline-minimal">View Documentation</button>`,
        css: `.btn-struct-outline-minimal {
  background: transparent;
  color: #6366f1;
  font-size: 15px;
  font-weight: 600;
  padding: 12px 28px;
  border-radius: 8px;
  border: 2px solid #6366f1;
  cursor: pointer;
  transition: all 0.2s ease;
}
.btn-struct-outline-minimal:hover {
  background: #6366f1;
  color: #ffffff;
}`
      },
      {
        id: "btn-struct-ghost-text",
        name: "Subtle Ghost Text",
        tags: ["Ghost", "Subtle", "Text"],
        html: `<button class="btn-struct-ghost-text">Cancel Operation</button>`,
        css: `.btn-struct-ghost-text {
  background: transparent;
  color: #94a3b8;
  font-size: 15px;
  font-weight: 500;
  padding: 12px 24px;
  border-radius: 8px;
  border: none;
  cursor: pointer;
  transition: all 0.2s ease;
}
.btn-struct-ghost-text:hover {
  background: rgba(148, 163, 184, 0.1);
  color: #f8fafc;
}`
      }
    ]
  },

  // Category 02: Design Systems
  {
    catId: "02-design-systems",
    catName: "02. Design Systems & Visual Aesthetics",
    subName: "Visual System Styles",
    buttons: [
      {
        id: "btn-style-glassmorphism",
        name: "Frosted Glassmorphism",
        tags: ["Glassmorphism", "Backdrop-Blur", "Translucent"],
        html: `<button class="btn-style-glassmorphism">Glass Studio</button>`,
        css: `.btn-style-glassmorphism {
  background: rgba(255, 255, 255, 0.08);
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);
  color: #ffffff;
  font-size: 15px;
  font-weight: 600;
  padding: 14px 32px;
  border-radius: 14px;
  border: 1px solid rgba(255, 255, 255, 0.2);
  cursor: pointer;
  transition: all 0.3s ease;
  box-shadow: 0 8px 32px 0 rgba(0, 0, 0, 0.3);
}
.btn-style-glassmorphism:hover {
  background: rgba(255, 255, 255, 0.16);
  border-color: rgba(255, 255, 255, 0.4);
  transform: translateY(-2px);
}`
      },
      {
        id: "btn-style-neumorphism-dark",
        name: "Neumorphic Soft Dark",
        tags: ["Neumorphism", "Soft-UI", "Tactile"],
        html: `<button class="btn-style-neumorphism-dark">Press Soft</button>`,
        css: `.btn-style-neumorphism-dark {
  background: #1e2433;
  color: #6366f1;
  font-size: 15px;
  font-weight: 700;
  padding: 14px 30px;
  border-radius: 12px;
  border: none;
  cursor: pointer;
  box-shadow: 6px 6px 12px #151924, -6px -6px 12px #272f42;
  transition: all 0.2s ease;
}
.btn-style-neumorphism-dark:active {
  box-shadow: inset 4px 4px 8px #151924, inset -4px -4px 8px #272f42;
}`
      },
      {
        id: "btn-style-cyberpunk-neon",
        name: "Cyberpunk Neon Glow",
        tags: ["Cyberpunk", "Neon", "Glow"],
        html: `<button class="btn-style-cyberpunk-neon">CYBER_NEON</button>`,
        css: `.btn-style-cyberpunk-neon {
  background: #090a0f;
  color: #6366f1;
  font-size: 14px;
  font-weight: 800;
  letter-spacing: 2px;
  padding: 14px 32px;
  border-radius: 4px;
  border: 2px solid #6366f1;
  box-shadow: 0 0 15px rgba(99, 102, 241, 0.5), inset 0 0 15px rgba(99, 102, 241, 0.2);
  text-shadow: 0 0 8px rgba(99, 102, 241, 0.8);
  cursor: pointer;
  transition: all 0.2s ease;
}
.btn-style-cyberpunk-neon:hover {
  background: #6366f1;
  color: #000000;
  box-shadow: 0 0 25px rgba(99, 102, 241, 0.9);
}`
      },
      {
        id: "btn-style-3d-elevated",
        name: "3D Elevated Press Down",
        tags: ["3D", "Elevated", "Push"],
        html: `<button class="btn-style-3d-elevated">Push Down</button>`,
        css: `.btn-style-3d-elevated {
  background: #6366f1;
  color: #ffffff;
  font-size: 16px;
  font-weight: 700;
  padding: 14px 30px;
  border-radius: 12px;
  border: none;
  box-shadow: 0 6px 0 #4338ca, 0 10px 20px rgba(0,0,0,0.3);
  cursor: pointer;
  transition: all 0.1s ease;
  position: relative;
  top: 0;
}
.btn-style-3d-elevated:active {
  top: 4px;
  box-shadow: 0 2px 0 #4338ca, 0 4px 10px rgba(0,0,0,0.3);
}`
      },
      {
        id: "btn-style-retro-synthwave",
        name: "Synthwave Retro 80s",
        tags: ["Synthwave", "Retro", "80s"],
        html: `<button class="btn-style-retro-synthwave">SYNTHWAVE</button>`,
        css: `.btn-style-retro-synthwave {
  background: linear-gradient(180deg, #d946ef 0%, #6366f1 100%);
  color: #ffffff;
  font-size: 14px;
  font-weight: 800;
  letter-spacing: 3px;
  padding: 14px 30px;
  border-radius: 6px;
  border: 2px solid #f472b6;
  box-shadow: 0 4px 0 #7e22ce, 0 0 20px rgba(217, 70, 239, 0.6);
  cursor: pointer;
  transition: all 0.15s ease;
}
.btn-style-retro-synthwave:hover {
  filter: brightness(1.2);
}`
      }
    ]
  },

  // Category 03: Animations & Motion
  {
    catId: "03-animations",
    catName: "03. Interactive Motion & Animations",
    subName: "Keyframe & Hover Physics",
    buttons: [
      {
        id: "btn-anim-flowing-gradient",
        name: "Flowing Moving Gradient",
        tags: ["Gradient", "Flowing", "Keyframe"],
        html: `<button class="btn-anim-flowing-gradient">Flowing Energy</button>`,
        css: `.btn-anim-flowing-gradient {
  background: linear-gradient(-45deg, #ec4899, #6366f1, #3b82f6, #10b981);
  background-size: 300% 300%;
  animation: gradientShift 6s ease infinite;
  color: #ffffff;
  font-size: 15px;
  font-weight: 700;
  padding: 14px 32px;
  border-radius: 12px;
  border: none;
  cursor: pointer;
  box-shadow: 0 4px 20px rgba(99, 102, 241, 0.4);
  transition: transform 0.2s ease;
}
.btn-anim-flowing-gradient:hover {
  transform: scale(1.05);
}`
      },
      {
        id: "btn-anim-shimmer-sweep",
        name: "Shimmer Light Sweep",
        tags: ["Shimmer", "Sweep", "Reflective"],
        html: `<button class="btn-anim-shimmer-sweep"><span>Shiny Sweep</span></button>`,
        css: `.btn-anim-shimmer-sweep {
  position: relative;
  background: #6366f1;
  color: #ffffff;
  font-size: 15px;
  font-weight: 600;
  padding: 14px 32px;
  border-radius: 10px;
  border: none;
  overflow: hidden;
  cursor: pointer;
  box-shadow: 0 4px 15px rgba(99, 102, 241, 0.4);
}
.btn-anim-shimmer-sweep::after {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(90deg, transparent, rgba(255,255,255,0.4), transparent);
  animation: shimmerSweep 2.5s infinite;
}`
      },
      {
        id: "btn-anim-pulse-aura",
        name: "Pulsing Ring Aura",
        tags: ["Pulse", "Aura", "Beacon"],
        html: `<button class="btn-anim-pulse-aura">Live Pulse</button>`,
        css: `.btn-anim-pulse-aura {
  background: #6366f1;
  color: #ffffff;
  font-size: 15px;
  font-weight: 600;
  padding: 14px 32px;
  border-radius: 10px;
  border: none;
  cursor: pointer;
  animation: pulseGlow 2s infinite;
}`
      },
      {
        id: "btn-anim-glitch-text",
        name: "Glitch Digital Effect",
        tags: ["Glitch", "Digital", "Matrix"],
        html: `<button class="btn-anim-glitch-text">GLITCH_ME</button>`,
        css: `.btn-anim-glitch-text {
  background: #18181b;
  color: #6366f1;
  font-size: 14px;
  font-weight: 800;
  padding: 12px 28px;
  border: 1px solid #6366f1;
  border-radius: 6px;
  cursor: pointer;
}
.btn-anim-glitch-text:hover {
  animation: glitchAnim 0.3s infinite;
  box-shadow: 0 0 12px rgba(99, 102, 241, 0.6);
}`
      }
    ]
  },

  // Category 04: Feedback & Action States
  {
    catId: "04-states",
    catName: "04. Feedback & Action States",
    subName: "State Transitions",
    buttons: [
      {
        id: "btn-state-loading-spinner",
        name: "Spinner Loading State",
        tags: ["Loading", "Spinner", "State"],
        html: `<button class="btn-state-loading-spinner"><span class="spinner"></span> Processing...</button>`,
        css: `.btn-state-loading-spinner {
  background: #334155;
  color: #94a3b8;
  font-size: 14px;
  font-weight: 600;
  padding: 12px 28px;
  border-radius: 8px;
  border: 1px solid #475569;
  cursor: wait;
  display: inline-flex;
  align-items: center;
  gap: 10px;
}
.btn-state-loading-spinner .spinner {
  width: 16px;
  height: 16px;
  border: 2px solid #94a3b8;
  border-top-color: transparent;
  border-radius: 50%;
  animation: spin 0.8s linear infinite;
}`
      },
      {
        id: "btn-state-toggle-switch",
        name: "Interactive Toggle Switch",
        tags: ["Toggle", "Switch", "Active"],
        html: `<button class="btn-state-toggle-switch" onclick="this.classList.toggle('active')"><span class="knob"></span></button>`,
        css: `.btn-state-toggle-switch {
  width: 60px;
  height: 32px;
  background: #334155;
  border-radius: 9999px;
  border: none;
  cursor: pointer;
  position: relative;
  transition: background 0.3s ease;
  padding: 4px;
}
.btn-state-toggle-switch .knob {
  width: 24px;
  height: 24px;
  background: #ffffff;
  border-radius: 50%;
  display: block;
  transition: transform 0.3s ease;
}
.btn-state-toggle-switch.active {
  background: #6366f1;
}
.btn-state-toggle-switch.active .knob {
  transform: translateX(28px);
}`
      },
      {
        id: "btn-state-github-social",
        name: "GitHub Dark Social",
        tags: ["Social", "GitHub", "Brand"],
        html: `<button class="btn-state-github-social"><svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor"><path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/></svg> Continue with GitHub</button>`,
        css: `.btn-state-github-social {
  background: #24292e;
  color: #ffffff;
  font-size: 14px;
  font-weight: 600;
  padding: 12px 24px;
  border-radius: 8px;
  border: 1px solid #444d56;
  cursor: pointer;
  display: inline-flex;
  align-items: center;
  gap: 10px;
  transition: background 0.2s ease;
}
.btn-state-github-social:hover {
  background: #2f363d;
}`
      }
    ]
  }
];

const keyframesCSS = `
@keyframes gradientShift {
  0% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
  100% { background-position: 0% 50%; }
}

@keyframes shimmerSweep {
  0% { transform: translateX(-100%); }
  100% { transform: translateX(100%); }
}

@keyframes pulseGlow {
  0% { box-shadow: 0 0 0 0 rgba(99, 102, 241, 0.7); }
  70% { box-shadow: 0 0 0 15px rgba(99, 102, 241, 0); }
  100% { box-shadow: 0 0 0 0 rgba(99, 102, 241, 0); }
}

@keyframes spin {
  to { transform: rotate(360deg); }
}

@keyframes glitchAnim {
  0% { transform: translate(0); }
  20% { transform: translate(-2px, 2px); }
  40% { transform: translate(-2px, -2px); }
  60% { transform: translate(2px, 2px); }
  80% { transform: translate(2px, -2px); }
  100% { transform: translate(0); }
}
`;

const generatedCategories = uniqueButtonTemplates.map((cat) => {
  return {
    id: cat.catId,
    name: cat.catName,
    subcategories: [
      {
        name: cat.subName,
        buttons: cat.buttons
      }
    ]
  };
});

const output = `// Auto-generated Unique Structural Button Database (No Color Duplicates!)\nexport const globalKeyframes = \`${keyframesCSS.trim()}\`;\n\nexport const buttonCategories = ${JSON.stringify(generatedCategories, null, 2)};\n`;
fs.writeFileSync('src/data/buttonLibraryData.js', output);
console.log(`Successfully generated ${generatedCategories.length} Categories with zero color duplicates in src/data/buttonLibraryData.js`);
