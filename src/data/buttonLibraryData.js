// Comprehensive 30+ Button Taxonomy Database

export const globalKeyframes = `
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

@keyframes neonBorderPulse {
  0%, 100% { border-color: #ec4899; box-shadow: 0 0 15px #ec4899; }
  50% { border-color: #3b82f6; box-shadow: 0 0 15px #3b82f6; }
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

export const buttonCategories = [
  {
    id: "basic",
    name: "01. Essential & Structural Buttons",
    subcategories: [
      {
        name: "Solid & Primary Variants",
        buttons: [
          {
            id: "btn-primary-solid",
            name: "Classic Solid Primary",
            tags: ["Solid", "Primary", "Rounded"],
            html: `<button class="btn-primary-solid">Get Started</button>`,
            css: `.btn-primary-solid {
  background: #4f46e5;
  color: #ffffff;
  font-size: 15px;
  font-weight: 600;
  padding: 12px 28px;
  border-radius: 8px;
  border: none;
  cursor: pointer;
  transition: all 0.2s ease;
  box-shadow: 0 4px 12px rgba(79, 70, 229, 0.3);
}
.btn-primary-solid:hover {
  background: #4338ca;
  transform: translateY(-2px);
  box-shadow: 0 6px 16px rgba(79, 70, 229, 0.4);
}`
          },
          {
            id: "btn-accent-emerald",
            name: "Emerald Accent Button",
            tags: ["Solid", "Accent", "Green"],
            html: `<button class="btn-accent-emerald">Confirm Purchase</button>`,
            css: `.btn-accent-emerald {
  background: #10b981;
  color: #ffffff;
  font-size: 15px;
  font-weight: 600;
  padding: 12px 28px;
  border-radius: 8px;
  border: none;
  cursor: pointer;
  transition: all 0.2s ease;
  box-shadow: 0 4px 12px rgba(16, 185, 129, 0.3);
}
.btn-accent-emerald:hover {
  background: #059669;
  transform: translateY(-2px);
}`
          },
          {
            id: "btn-pill-solid",
            name: "Full Pill Rounded",
            tags: ["Pill", "Rounded-Full", "Smooth"],
            html: `<button class="btn-pill-solid">Explore Features</button>`,
            css: `.btn-pill-solid {
  background: #06b6d4;
  color: #ffffff;
  font-size: 14px;
  font-weight: 600;
  padding: 12px 32px;
  border-radius: 9999px;
  border: none;
  cursor: pointer;
  transition: all 0.25s ease;
  box-shadow: 0 4px 14px rgba(6, 182, 212, 0.35);
}
.btn-pill-solid:hover {
  background: #0891b2;
  transform: scale(1.04);
}`
          },
          {
            id: "btn-cut-corner",
            name: "Architectural Cut Corner",
            tags: ["Geometric", "Sharp", "Modern"],
            html: `<button class="btn-cut-corner">DEPLOY SYSTEM</button>`,
            css: `.btn-cut-corner {
  background: #1e293b;
  color: #38bdf8;
  font-size: 13px;
  font-weight: 700;
  letter-spacing: 1px;
  padding: 14px 30px;
  border: 1px solid #38bdf8;
  clip-path: polygon(12px 0%, 100% 0%, 100% calc(100% - 12px), calc(100% - 12px) 100%, 0% 100%, 0% 12px);
  cursor: pointer;
  transition: all 0.2s ease;
}
.btn-cut-corner:hover {
  background: #38bdf8;
  color: #0f172a;
}`
          }
        ]
      },
      {
        name: "Outline & Ghost Variants",
        buttons: [
          {
            id: "btn-outline-indigo",
            name: "Clean Outline Indigo",
            tags: ["Outline", "Minimal", "Border"],
            html: `<button class="btn-outline-indigo">Learn More</button>`,
            css: `.btn-outline-indigo {
  background: transparent;
  color: #818cf8;
  font-size: 15px;
  font-weight: 600;
  padding: 12px 28px;
  border-radius: 8px;
  border: 2px solid #6366f1;
  cursor: pointer;
  transition: all 0.2s ease;
}
.btn-outline-indigo:hover {
  background: #6366f1;
  color: #ffffff;
  box-shadow: 0 4px 14px rgba(99, 102, 241, 0.4);
}`
          },
          {
            id: "btn-gradient-border",
            name: "Gradient Border Outline",
            tags: ["Gradient", "Border", "Outline"],
            html: `<button class="btn-gradient-border"><span class="inner">Gradient Outline</span></button>`,
            css: `.btn-gradient-border {
  paddings: 2px;
  background: linear-gradient(135deg, #ec4899, #8b5cf6, #3b82f6);
  border-radius: 10px;
  border: none;
  cursor: pointer;
  display: inline-block;
  padding: 2px;
}
.btn-gradient-border .inner {
  background: #0f172a;
  color: #ffffff;
  font-size: 14px;
  font-weight: 600;
  padding: 12px 24px;
  border-radius: 8px;
  display: block;
  transition: background 0.2s ease;
}
.btn-gradient-border:hover .inner {
  background: transparent;
}`
          },
          {
            id: "btn-ghost-minimal",
            name: "Subtle Ghost Button",
            tags: ["Ghost", "Subtle", "Text"],
            html: `<button class="btn-ghost-minimal">Cancel Action</button>`,
            css: `.btn-ghost-minimal {
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
.btn-ghost-minimal:hover {
  background: rgba(148, 163, 184, 0.1);
  color: #f8fafc;
}`
          }
        ]
      },
      {
        name: "Icon & Combo Buttons",
        buttons: [
          {
            id: "btn-icon-label",
            name: "Icon + Label Button",
            tags: ["Icon", "Label", "Flex"],
            html: `<button class="btn-icon-label"><svg class="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M5 12h14M12 5l7 7-7 7"/></svg> Continue Next</button>`,
            css: `.btn-icon-label {
  background: #3b82f6;
  color: #ffffff;
  font-size: 14px;
  font-weight: 600;
  padding: 12px 24px;
  border-radius: 8px;
  border: none;
  cursor: pointer;
  display: inline-flex;
  align-items: center;
  gap: 8px;
  transition: all 0.2s ease;
}
.btn-icon-label .icon {
  width: 18px;
  height: 18px;
  transition: transform 0.2s ease;
}
.btn-icon-label:hover .icon {
  transform: translateX(4px);
}`
          },
          {
            id: "btn-circle-icon",
            name: "Circular Action Icon",
            tags: ["Circle", "Icon-Only", "Action"],
            html: `<button class="btn-circle-icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" width="20" height="20"><path d="M12 5v14M5 12h14"/></svg></button>`,
            css: `.btn-circle-icon {
  width: 48px;
  height: 48px;
  background: #6366f1;
  color: #ffffff;
  border-radius: 50%;
  border: none;
  cursor: pointer;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 4px 14px rgba(99, 102, 241, 0.4);
  transition: all 0.2s ease;
}
.btn-circle-icon:hover {
  transform: rotate(90deg) scale(1.1);
}`
          }
        ]
      }
    ]
  },
  {
    id: "design-systems",
    name: "02. Design Systems & Visual Aesthetics",
    subcategories: [
      {
        name: "Glassmorphism & Neumorphism",
        buttons: [
          {
            id: "btn-glassmorphism",
            name: "Frosted Glassmorphism",
            tags: ["Glassmorphism", "Blur", "Modern"],
            html: `<button class="btn-glassmorphism">Glass Studio</button>`,
            css: `.btn-glassmorphism {
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
.btn-glassmorphism:hover {
  background: rgba(255, 255, 255, 0.16);
  border-color: rgba(255, 255, 255, 0.4);
  transform: translateY(-2px);
}`
          },
          {
            id: "btn-neumorphism-dark",
            name: "Neumorphic Soft Dark",
            tags: ["Neumorphism", "Soft UI", "Tactile"],
            html: `<button class="btn-neumorphism-dark">Press Me</button>`,
            css: `.btn-neumorphism-dark {
  background: #1e2433;
  color: #60a5fa;
  font-size: 15px;
  font-weight: 700;
  padding: 14px 30px;
  border-radius: 12px;
  border: none;
  cursor: pointer;
  box-shadow: 6px 6px 12px #151924, -6px -6px 12px #272f42;
  transition: all 0.2s ease;
}
.btn-neumorphism-dark:active {
  box-shadow: inset 4px 4px 8px #151924, inset -4px -4px 8px #272f42;
}`
          },
          {
            id: "btn-neumorphism-light",
            name: "Neumorphic Soft Light",
            tags: ["Neumorphism", "Light", "Soft"],
            html: `<button class="btn-neumorphism-light">Soft Button</button>`,
            css: `.btn-neumorphism-light {
  background: #e0e5ec;
  color: #334155;
  font-size: 15px;
  font-weight: 700;
  padding: 14px 30px;
  border-radius: 12px;
  border: none;
  cursor: pointer;
  box-shadow: 6px 6px 12px #a3b1c6, -6px -6px 12px #ffffff;
  transition: all 0.2s ease;
}
.btn-neumorphism-light:active {
  box-shadow: inset 4px 4px 8px #a3b1c6, inset -4px -4px 8px #ffffff;
}`
          }
        ]
      },
      {
        name: "Cyberpunk & 3D Tactile",
        buttons: [
          {
            id: "btn-cyberpunk-neon",
            name: "Cyberpunk Neon Glow",
            tags: ["Cyberpunk", "Neon", "Glow"],
            html: `<button class="btn-cyberpunk-neon">CYBER_PUNK</button>`,
            css: `.btn-cyberpunk-neon {
  background: #090a0f;
  color: #ff0055;
  font-size: 14px;
  font-weight: 800;
  letter-spacing: 2px;
  padding: 14px 32px;
  border-radius: 4px;
  border: 2px solid #ff0055;
  box-shadow: 0 0 15px rgba(255, 0, 85, 0.5), inset 0 0 15px rgba(255, 0, 85, 0.2);
  text-shadow: 0 0 8px rgba(255, 0, 85, 0.8);
  cursor: pointer;
  transition: all 0.2s ease;
}
.btn-cyberpunk-neon:hover {
  background: #ff0055;
  color: #000;
  box-shadow: 0 0 25px rgba(255, 0, 85, 0.9);
}`
          },
          {
            id: "btn-3d-elevated",
            name: "3D Elevated Press Down",
            tags: ["3D", "Elevated", "Tactile"],
            html: `<button class="btn-3d-elevated">Push Button</button>`,
            css: `.btn-3d-elevated {
  background: #10b981;
  color: #ffffff;
  font-size: 16px;
  font-weight: 700;
  padding: 14px 30px;
  border-radius: 12px;
  border: none;
  box-shadow: 0 6px 0 #047857, 0 10px 20px rgba(0,0,0,0.3);
  cursor: pointer;
  transition: all 0.1s ease;
  position: relative;
  top: 0;
}
.btn-3d-elevated:hover {
  background: #34d399;
}
.btn-3d-elevated:active {
  top: 4px;
  box-shadow: 0 2px 0 #047857, 0 4px 10px rgba(0,0,0,0.3);
}`
          },
          {
            id: "btn-retro-synthwave",
            name: "Synthwave Retro 80s",
            tags: ["Retro", "Synthwave", "Purple"],
            html: `<button class="btn-retro-synthwave">SYNTHWAVE</button>`,
            css: `.btn-retro-synthwave {
  background: linear-gradient(180deg, #d946ef 0%, #8b5cf6 100%);
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
.btn-retro-synthwave:hover {
  filter: brightness(1.2);
}`
          }
        ]
      }
    ]
  },
  {
    id: "animations",
    name: "03. Interactive Motion & Animations",
    subcategories: [
      {
        name: "Gradients & Shimmers",
        buttons: [
          {
            id: "btn-moving-gradient",
            name: "Flowing Animated Gradient",
            tags: ["Gradient", "Animated", "Flow"],
            html: `<button class="btn-moving-gradient">Flowing Energy</button>`,
            css: `.btn-moving-gradient {
  background: linear-gradient(-45deg, #ec4899, #8b5cf6, #3b82f6, #10b981);
  background-size: 300% 300%;
  animation: gradientShift 6s ease infinite;
  color: #ffffff;
  font-size: 15px;
  font-weight: 700;
  padding: 14px 32px;
  border-radius: 12px;
  border: none;
  cursor: pointer;
  box-shadow: 0 4px 20px rgba(139, 92, 246, 0.4);
  transition: transform 0.2s ease;
}
.btn-moving-gradient:hover {
  transform: scale(1.05);
}`
          },
          {
            id: "btn-shimmer-sweep",
            name: "Shimmer Light Sweep",
            tags: ["Shimmer", "Sweep", "Reflective"],
            html: `<button class="btn-shimmer-sweep"><span>Shiny Upgrade</span></button>`,
            css: `.btn-shimmer-sweep {
  position: relative;
  background: #3b82f6;
  color: #ffffff;
  font-size: 15px;
  font-weight: 600;
  padding: 14px 32px;
  border-radius: 10px;
  border: none;
  overflow: hidden;
  cursor: pointer;
  box-shadow: 0 4px 15px rgba(59, 130, 246, 0.4);
}
.btn-shimmer-sweep::after {
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
            id: "btn-pulse-aura",
            name: "Pulsing Ring Aura",
            tags: ["Pulse", "Aura", "Beacon"],
            html: `<button class="btn-pulse-aura">Live Pulse</button>`,
            css: `.btn-pulse-aura {
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
            id: "btn-glitch-text",
            name: "Glitch Effect Motion",
            tags: ["Glitch", "Cyber", "Motion"],
            html: `<button class="btn-glitch-text">GLITCH_ME</button>`,
            css: `.btn-glitch-text {
  background: #18181b;
  color: #22c55e;
  font-size: 14px;
  font-weight: 800;
  padding: 12px 28px;
  border: 1px solid #22c55e;
  border-radius: 6px;
  cursor: pointer;
}
.btn-glitch-text:hover {
  animation: glitchAnim 0.3s infinite;
  box-shadow: 0 0 12px rgba(34, 197, 94, 0.6);
}`
          }
        ]
      }
    ]
  },
  {
    id: "states",
    name: "04. Feedback, Social & Action States",
    subcategories: [
      {
        name: "Loading & Toggles",
        buttons: [
          {
            id: "btn-loading-state",
            name: "Spinner Loading State",
            tags: ["Loading", "Spinner", "State"],
            html: `<button class="btn-loading-state"><span class="spinner"></span> Processing...</button>`,
            css: `.btn-loading-state {
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
.btn-loading-state .spinner {
  width: 16px;
  height: 16px;
  border: 2px solid #94a3b8;
  border-top-color: transparent;
  border-radius: 50%;
  animation: spin 0.8s linear infinite;
}`
          },
          {
            id: "btn-toggle-switch",
            name: "Interactive Toggle Switch",
            tags: ["Toggle", "Interactive", "Switch"],
            html: `<button class="btn-toggle-switch" onclick="this.classList.toggle('active')"><span class="knob"></span></button>`,
            css: `.btn-toggle-switch {
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
.btn-toggle-switch .knob {
  width: 24px;
  height: 24px;
  background: #ffffff;
  border-radius: 50%;
  display: block;
  transition: transform 0.3s ease;
}
.btn-toggle-switch.active {
  background: #10b981;
}
.btn-toggle-switch.active .knob {
  transform: translateX(28px);
}`
          }
        ]
      },
      {
        name: "Social Brands & Integrations",
        buttons: [
          {
            id: "btn-github-brand",
            name: "GitHub Dark Button",
            tags: ["Social", "GitHub", "Brand"],
            html: `<button class="btn-github-brand"><svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor"><path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/></svg> Continue with GitHub</button>`,
            css: `.btn-github-brand {
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
.btn-github-brand:hover {
  background: #2f363d;
}`
          },
          {
            id: "btn-discord-brand",
            name: "Discord Purple Button",
            tags: ["Social", "Discord", "Brand"],
            html: `<button class="btn-discord-brand"><svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor"><path d="M20.317 4.37a19.791 19.791 0 00-4.885-1.515.074.074 0 00-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 00-5.487 0 12.64 12.64 0 00-.617-1.25.077.077 0 00-.079-.037A19.736 19.736 0 003.677 4.37a.07.07 0 00-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 00.031.057 19.9 19.9 0 005.993 3.03.078.078 0 00.084-.028c.462-.63.874-1.295 1.226-1.994.021-.041.001-.09-.041-.106a13.107 13.107 0 01-1.872-.892.077.077 0 01-.008-.128 10.2 10.2 0 00.372-.292.074.074 0 01.077-.01c3.928 1.793 8.18 1.793 12.061 0a.074.074 0 01.078.01c.12.098.246.198.373.292a.077.077 0 01-.006.127 12.299 12.299 0 01-1.873.892.077.077 0 00-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 00.084.028 19.839 19.839 0 006.002-3.03.077.077 0 00.032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 00-.031-.028zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.946 2.418-2.157 2.418z"/></svg> Join Discord</button>`,
            css: `.btn-discord-brand {
  background: #5865f2;
  color: #ffffff;
  font-size: 14px;
  font-weight: 600;
  padding: 12px 24px;
  border-radius: 8px;
  border: none;
  cursor: pointer;
  display: inline-flex;
  align-items: center;
  gap: 10px;
  transition: background 0.2s ease;
}
.btn-discord-brand:hover {
  background: #4752c4;
}`
          }
        ]
      }
    ]
  }
];
