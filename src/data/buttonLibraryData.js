// Comprehensive Structured Button Library Database

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

@keyframes neonBorder {
  0%, 100% { border-color: #ec4899; box-shadow: 0 0 10px #ec4899; }
  50% { border-color: #3b82f6; box-shadow: 0 0 10px #3b82f6; }
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
}
.btn-primary-solid:active {
  transform: translateY(0);
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
  box-shadow: 0 6px 20px rgba(6, 182, 212, 0.5);
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
  background: rgba(255, 255, 255, 0.07);
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);
  color: #ffffff;
  font-size: 15px;
  font-weight: 600;
  padding: 14px 32px;
  border-radius: 14px;
  border: 1px solid rgba(255, 255, 255, 0.18);
  cursor: pointer;
  transition: all 0.3s ease;
  box-shadow: 0 8px 32px 0 rgba(0, 0, 0, 0.3);
}
.btn-glassmorphism:hover {
  background: rgba(255, 255, 255, 0.15);
  border-color: rgba(255, 255, 255, 0.35);
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
          }
        ]
      }
    ]
  },
  {
    id: "states",
    name: "04. Feedback & Action States",
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
      }
    ]
  }
];
