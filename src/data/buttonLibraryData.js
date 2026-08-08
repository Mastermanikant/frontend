// Auto-generated Unique Structural Button Database (No Color Duplicates!)
export const globalKeyframes = `@keyframes gradientShift {
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
}`;

export const buttonCategories = [
  {
    "id": "01-essential",
    "name": "01. Essential & Structural Shapes",
    "subcategories": [
      {
        "name": "Structural Geometry",
        "buttons": [
          {
            "id": "btn-struct-solid-primary",
            "name": "Classic Solid Primary",
            "tags": [
              "Solid",
              "Standard",
              "Primary"
            ],
            "html": "<button class=\"btn-struct-solid-primary\">Get Started</button>",
            "css": ".btn-struct-solid-primary {\n  background: #6366f1;\n  color: #ffffff;\n  font-size: 15px;\n  font-weight: 600;\n  padding: 12px 28px;\n  border-radius: 8px;\n  border: none;\n  cursor: pointer;\n  transition: all 0.2s ease;\n  box-shadow: 0 4px 12px rgba(99, 102, 241, 0.3);\n}\n.btn-struct-solid-primary:hover {\n  transform: translateY(-2px);\n  box-shadow: 0 6px 16px rgba(99, 102, 241, 0.4);\n}"
          },
          {
            "id": "btn-struct-full-pill",
            "name": "Full Pill Rounded",
            "tags": [
              "Pill",
              "Rounded-Full",
              "Smooth"
            ],
            "html": "<button class=\"btn-struct-full-pill\">Explore Platform</button>",
            "css": ".btn-struct-full-pill {\n  background: #6366f1;\n  color: #ffffff;\n  font-size: 14px;\n  font-weight: 600;\n  padding: 12px 32px;\n  border-radius: 9999px;\n  border: none;\n  cursor: pointer;\n  transition: all 0.25s ease;\n  box-shadow: 0 4px 14px rgba(99, 102, 241, 0.35);\n}\n.btn-struct-full-pill:hover {\n  transform: scale(1.04);\n}"
          },
          {
            "id": "btn-struct-cut-corner",
            "name": "Architectural Cut Corner",
            "tags": [
              "Geometric",
              "Clip-Path",
              "Sharp"
            ],
            "html": "<button class=\"btn-struct-cut-corner\">DEPLOY SYSTEM</button>",
            "css": ".btn-struct-cut-corner {\n  background: #0f172a;\n  color: #6366f1;\n  font-size: 13px;\n  font-weight: 700;\n  letter-spacing: 1px;\n  padding: 14px 30px;\n  border: 1px solid #6366f1;\n  clip-path: polygon(12px 0%, 100% 0%, 100% calc(100% - 12px), calc(100% - 12px) 100%, 0% 100%, 0% 12px);\n  cursor: pointer;\n  transition: all 0.2s ease;\n}\n.btn-struct-cut-corner:hover {\n  background: #6366f1;\n  color: #ffffff;\n}"
          },
          {
            "id": "btn-struct-outline-minimal",
            "name": "Clean Outline Border",
            "tags": [
              "Outline",
              "Border",
              "Minimal"
            ],
            "html": "<button class=\"btn-struct-outline-minimal\">View Documentation</button>",
            "css": ".btn-struct-outline-minimal {\n  background: transparent;\n  color: #6366f1;\n  font-size: 15px;\n  font-weight: 600;\n  padding: 12px 28px;\n  border-radius: 8px;\n  border: 2px solid #6366f1;\n  cursor: pointer;\n  transition: all 0.2s ease;\n}\n.btn-struct-outline-minimal:hover {\n  background: #6366f1;\n  color: #ffffff;\n}"
          },
          {
            "id": "btn-struct-ghost-text",
            "name": "Subtle Ghost Text",
            "tags": [
              "Ghost",
              "Subtle",
              "Text"
            ],
            "html": "<button class=\"btn-struct-ghost-text\">Cancel Operation</button>",
            "css": ".btn-struct-ghost-text {\n  background: transparent;\n  color: #94a3b8;\n  font-size: 15px;\n  font-weight: 500;\n  padding: 12px 24px;\n  border-radius: 8px;\n  border: none;\n  cursor: pointer;\n  transition: all 0.2s ease;\n}\n.btn-struct-ghost-text:hover {\n  background: rgba(148, 163, 184, 0.1);\n  color: #f8fafc;\n}"
          }
        ]
      }
    ]
  },
  {
    "id": "02-design-systems",
    "name": "02. Design Systems & Visual Aesthetics",
    "subcategories": [
      {
        "name": "Visual System Styles",
        "buttons": [
          {
            "id": "btn-style-glassmorphism",
            "name": "Frosted Glassmorphism",
            "tags": [
              "Glassmorphism",
              "Backdrop-Blur",
              "Translucent"
            ],
            "html": "<button class=\"btn-style-glassmorphism\">Glass Studio</button>",
            "css": ".btn-style-glassmorphism {\n  background: rgba(255, 255, 255, 0.08);\n  backdrop-filter: blur(12px);\n  -webkit-backdrop-filter: blur(12px);\n  color: #ffffff;\n  font-size: 15px;\n  font-weight: 600;\n  padding: 14px 32px;\n  border-radius: 14px;\n  border: 1px solid rgba(255, 255, 255, 0.2);\n  cursor: pointer;\n  transition: all 0.3s ease;\n  box-shadow: 0 8px 32px 0 rgba(0, 0, 0, 0.3);\n}\n.btn-style-glassmorphism:hover {\n  background: rgba(255, 255, 255, 0.16);\n  border-color: rgba(255, 255, 255, 0.4);\n  transform: translateY(-2px);\n}"
          },
          {
            "id": "btn-style-neumorphism-dark",
            "name": "Neumorphic Soft Dark",
            "tags": [
              "Neumorphism",
              "Soft-UI",
              "Tactile"
            ],
            "html": "<button class=\"btn-style-neumorphism-dark\">Press Soft</button>",
            "css": ".btn-style-neumorphism-dark {\n  background: #1e2433;\n  color: #6366f1;\n  font-size: 15px;\n  font-weight: 700;\n  padding: 14px 30px;\n  border-radius: 12px;\n  border: none;\n  cursor: pointer;\n  box-shadow: 6px 6px 12px #151924, -6px -6px 12px #272f42;\n  transition: all 0.2s ease;\n}\n.btn-style-neumorphism-dark:active {\n  box-shadow: inset 4px 4px 8px #151924, inset -4px -4px 8px #272f42;\n}"
          },
          {
            "id": "btn-style-cyberpunk-neon",
            "name": "Cyberpunk Neon Glow",
            "tags": [
              "Cyberpunk",
              "Neon",
              "Glow"
            ],
            "html": "<button class=\"btn-style-cyberpunk-neon\">CYBER_NEON</button>",
            "css": ".btn-style-cyberpunk-neon {\n  background: #090a0f;\n  color: #6366f1;\n  font-size: 14px;\n  font-weight: 800;\n  letter-spacing: 2px;\n  padding: 14px 32px;\n  border-radius: 4px;\n  border: 2px solid #6366f1;\n  box-shadow: 0 0 15px rgba(99, 102, 241, 0.5), inset 0 0 15px rgba(99, 102, 241, 0.2);\n  text-shadow: 0 0 8px rgba(99, 102, 241, 0.8);\n  cursor: pointer;\n  transition: all 0.2s ease;\n}\n.btn-style-cyberpunk-neon:hover {\n  background: #6366f1;\n  color: #000000;\n  box-shadow: 0 0 25px rgba(99, 102, 241, 0.9);\n}"
          },
          {
            "id": "btn-style-3d-elevated",
            "name": "3D Elevated Press Down",
            "tags": [
              "3D",
              "Elevated",
              "Push"
            ],
            "html": "<button class=\"btn-style-3d-elevated\">Push Down</button>",
            "css": ".btn-style-3d-elevated {\n  background: #6366f1;\n  color: #ffffff;\n  font-size: 16px;\n  font-weight: 700;\n  padding: 14px 30px;\n  border-radius: 12px;\n  border: none;\n  box-shadow: 0 6px 0 #4338ca, 0 10px 20px rgba(0,0,0,0.3);\n  cursor: pointer;\n  transition: all 0.1s ease;\n  position: relative;\n  top: 0;\n}\n.btn-style-3d-elevated:active {\n  top: 4px;\n  box-shadow: 0 2px 0 #4338ca, 0 4px 10px rgba(0,0,0,0.3);\n}"
          },
          {
            "id": "btn-style-retro-synthwave",
            "name": "Synthwave Retro 80s",
            "tags": [
              "Synthwave",
              "Retro",
              "80s"
            ],
            "html": "<button class=\"btn-style-retro-synthwave\">SYNTHWAVE</button>",
            "css": ".btn-style-retro-synthwave {\n  background: linear-gradient(180deg, #d946ef 0%, #6366f1 100%);\n  color: #ffffff;\n  font-size: 14px;\n  font-weight: 800;\n  letter-spacing: 3px;\n  padding: 14px 30px;\n  border-radius: 6px;\n  border: 2px solid #f472b6;\n  box-shadow: 0 4px 0 #7e22ce, 0 0 20px rgba(217, 70, 239, 0.6);\n  cursor: pointer;\n  transition: all 0.15s ease;\n}\n.btn-style-retro-synthwave:hover {\n  filter: brightness(1.2);\n}"
          }
        ]
      }
    ]
  },
  {
    "id": "03-animations",
    "name": "03. Interactive Motion & Animations",
    "subcategories": [
      {
        "name": "Keyframe & Hover Physics",
        "buttons": [
          {
            "id": "btn-anim-flowing-gradient",
            "name": "Flowing Moving Gradient",
            "tags": [
              "Gradient",
              "Flowing",
              "Keyframe"
            ],
            "html": "<button class=\"btn-anim-flowing-gradient\">Flowing Energy</button>",
            "css": ".btn-anim-flowing-gradient {\n  background: linear-gradient(-45deg, #ec4899, #6366f1, #3b82f6, #10b981);\n  background-size: 300% 300%;\n  animation: gradientShift 6s ease infinite;\n  color: #ffffff;\n  font-size: 15px;\n  font-weight: 700;\n  padding: 14px 32px;\n  border-radius: 12px;\n  border: none;\n  cursor: pointer;\n  box-shadow: 0 4px 20px rgba(99, 102, 241, 0.4);\n  transition: transform 0.2s ease;\n}\n.btn-anim-flowing-gradient:hover {\n  transform: scale(1.05);\n}"
          },
          {
            "id": "btn-anim-shimmer-sweep",
            "name": "Shimmer Light Sweep",
            "tags": [
              "Shimmer",
              "Sweep",
              "Reflective"
            ],
            "html": "<button class=\"btn-anim-shimmer-sweep\"><span>Shiny Sweep</span></button>",
            "css": ".btn-anim-shimmer-sweep {\n  position: relative;\n  background: #6366f1;\n  color: #ffffff;\n  font-size: 15px;\n  font-weight: 600;\n  padding: 14px 32px;\n  border-radius: 10px;\n  border: none;\n  overflow: hidden;\n  cursor: pointer;\n  box-shadow: 0 4px 15px rgba(99, 102, 241, 0.4);\n}\n.btn-anim-shimmer-sweep::after {\n  content: '';\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  background: linear-gradient(90deg, transparent, rgba(255,255,255,0.4), transparent);\n  animation: shimmerSweep 2.5s infinite;\n}"
          },
          {
            "id": "btn-anim-pulse-aura",
            "name": "Pulsing Ring Aura",
            "tags": [
              "Pulse",
              "Aura",
              "Beacon"
            ],
            "html": "<button class=\"btn-anim-pulse-aura\">Live Pulse</button>",
            "css": ".btn-anim-pulse-aura {\n  background: #6366f1;\n  color: #ffffff;\n  font-size: 15px;\n  font-weight: 600;\n  padding: 14px 32px;\n  border-radius: 10px;\n  border: none;\n  cursor: pointer;\n  animation: pulseGlow 2s infinite;\n}"
          },
          {
            "id": "btn-anim-glitch-text",
            "name": "Glitch Digital Effect",
            "tags": [
              "Glitch",
              "Digital",
              "Matrix"
            ],
            "html": "<button class=\"btn-anim-glitch-text\">GLITCH_ME</button>",
            "css": ".btn-anim-glitch-text {\n  background: #18181b;\n  color: #6366f1;\n  font-size: 14px;\n  font-weight: 800;\n  padding: 12px 28px;\n  border: 1px solid #6366f1;\n  border-radius: 6px;\n  cursor: pointer;\n}\n.btn-anim-glitch-text:hover {\n  animation: glitchAnim 0.3s infinite;\n  box-shadow: 0 0 12px rgba(99, 102, 241, 0.6);\n}"
          }
        ]
      }
    ]
  },
  {
    "id": "04-states",
    "name": "04. Feedback & Action States",
    "subcategories": [
      {
        "name": "State Transitions",
        "buttons": [
          {
            "id": "btn-state-loading-spinner",
            "name": "Spinner Loading State",
            "tags": [
              "Loading",
              "Spinner",
              "State"
            ],
            "html": "<button class=\"btn-state-loading-spinner\"><span class=\"spinner\"></span> Processing...</button>",
            "css": ".btn-state-loading-spinner {\n  background: #334155;\n  color: #94a3b8;\n  font-size: 14px;\n  font-weight: 600;\n  padding: 12px 28px;\n  border-radius: 8px;\n  border: 1px solid #475569;\n  cursor: wait;\n  display: inline-flex;\n  align-items: center;\n  gap: 10px;\n}\n.btn-state-loading-spinner .spinner {\n  width: 16px;\n  height: 16px;\n  border: 2px solid #94a3b8;\n  border-top-color: transparent;\n  border-radius: 50%;\n  animation: spin 0.8s linear infinite;\n}"
          },
          {
            "id": "btn-state-toggle-switch",
            "name": "Interactive Toggle Switch",
            "tags": [
              "Toggle",
              "Switch",
              "Active"
            ],
            "html": "<button class=\"btn-state-toggle-switch\" onclick=\"this.classList.toggle('active')\"><span class=\"knob\"></span></button>",
            "css": ".btn-state-toggle-switch {\n  width: 60px;\n  height: 32px;\n  background: #334155;\n  border-radius: 9999px;\n  border: none;\n  cursor: pointer;\n  position: relative;\n  transition: background 0.3s ease;\n  padding: 4px;\n}\n.btn-state-toggle-switch .knob {\n  width: 24px;\n  height: 24px;\n  background: #ffffff;\n  border-radius: 50%;\n  display: block;\n  transition: transform 0.3s ease;\n}\n.btn-state-toggle-switch.active {\n  background: #6366f1;\n}\n.btn-state-toggle-switch.active .knob {\n  transform: translateX(28px);\n}"
          },
          {
            "id": "btn-state-github-social",
            "name": "GitHub Dark Social",
            "tags": [
              "Social",
              "GitHub",
              "Brand"
            ],
            "html": "<button class=\"btn-state-github-social\"><svg viewBox=\"0 0 24 24\" width=\"18\" height=\"18\" fill=\"currentColor\"><path d=\"M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z\"/></svg> Continue with GitHub</button>",
            "css": ".btn-state-github-social {\n  background: #24292e;\n  color: #ffffff;\n  font-size: 14px;\n  font-weight: 600;\n  padding: 12px 24px;\n  border-radius: 8px;\n  border: 1px solid #444d56;\n  cursor: pointer;\n  display: inline-flex;\n  align-items: center;\n  gap: 10px;\n  transition: background 0.2s ease;\n}\n.btn-state-github-social:hover {\n  background: #2f363d;\n}"
          }
        ]
      }
    ]
  }
];
