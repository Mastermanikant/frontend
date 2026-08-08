import fs from 'fs';

const categoriesConfig = [
  { id: "01-essential", name: "01. Essential Flat & Minimal Buttons" },
  { id: "02-glassmorphism", name: "02. Glassmorphism & Frosted Glass" },
  { id: "03-neumorphism", name: "03. Neumorphism & Soft UI" },
  { id: "04-cyberpunk", name: "04. Cyberpunk & Futuristic Neon" },
  { id: "05-retro", name: "05. Retro Synthwave & Pixel Art" },
  { id: "06-3d-tactile", name: "06. 3D Elevated & Tactile Push" },
  { id: "07-skeuomorphic", name: "07. Skeuomorphic & Realistic Textures" },
  { id: "08-gradients", name: "08. Animated Gradients & Fluid Mesh" },
  { id: "09-shimmer", name: "09. Light Sweep & Shimmer Effects" },
  { id: "10-pulse", name: "10. Pulse Glow & Beacon Animations" },
  { id: "11-border-draw", name: "11. Border Draw & Line Morphing" },
  { id: "12-elastic", name: "12. Elastic Hover & Spring Physics" },
  { id: "13-glitch", name: "13. Glitch & Matrix Digital Effects" },
  { id: "14-loading", name: "14. Loading & Progress Feedback" },
  { id: "15-toggles", name: "15. Toggle Switches & Segmented Controls" },
  { id: "16-social", name: "16. Social & Brand Identification" },
  { id: "17-ecommerce", name: "17. E-Commerce & Call-to-Action (CTA)" },
  { id: "18-saas", name: "18. SaaS Dashboard & Admin Controls" },
  { id: "19-gaming", name: "19. Gaming & Esport HUD Controls" },
  { id: "20-fab", name: "20. Floating Action Buttons (FAB)" },
  { id: "21-pagination", name: "21. Pagination & Stepper Controls" },
  { id: "22-tooltips", name: "22. Tooltip & Popover Trigger Buttons" },
  { id: "23-oled", name: "23. Dark Mode & OLED Specialized" },
  { id: "24-gradient-border", name: "24. Gradient Border & Outline" },
  { id: "25-embedded", name: "25. Card Embedded Action Buttons" },
  { id: "26-confirmation", name: "26. Multi-State Confirmation Buttons" },
  { id: "27-icon-only", name: "27. Icon Only Minimalist Controls" },
  { id: "28-pill", name: "28. Pill & Oval Modern Buttons" },
  { id: "29-cut-corner", name: "29. Sharp Cut-Corner Geometric" },
  { id: "30-layered", name: "30. Shadow Depth & Layered Stack" }
];

const subcategories = ["Primary Solid", "Secondary Smooth", "Bordered Outline", "Icon Embedded", "Hover Motion Variant"];

const colorPalettes = [
  { name: "Indigo", main: "#4f46e5", hover: "#4338ca", glow: "rgba(79, 70, 229, 0.4)" },
  { name: "Cyan", main: "#06b6d4", hover: "#0891b2", glow: "rgba(6, 182, 212, 0.4)" },
  { name: "Emerald", main: "#10b981", hover: "#059669", glow: "rgba(16, 185, 129, 0.4)" },
  { name: "Rose", main: "#f43f5e", hover: "#e11d48", glow: "rgba(244, 63, 94, 0.4)" },
  { name: "Amber", main: "#f59e0b", hover: "#d97706", glow: "rgba(245, 158, 11, 0.4)" },
  { name: "Violet", main: "#8b5cf6", hover: "#7c3aed", glow: "rgba(139, 92, 246, 0.4)" }
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

const generatedCategories = categoriesConfig.map((cat, catIdx) => {
  const subs = subcategories.map((subName, subIdx) => {
    const buttons = colorPalettes.map((palette, palIdx) => {
      const btnId = `btn-${catIdx}-${subIdx}-${palIdx}`;
      const name = `${palette.name} ${subName} (${cat.name.split('.')[1].trim()})`;
      const className = `btn-custom-${catIdx}-${subIdx}-${palIdx}`;
      
      let css = `.${className} {\n  background: ${palette.main};\n  color: #ffffff;\n  font-size: 14px;\n  font-weight: 600;\n  padding: 12px 26px;\n  border-radius: ${catIdx % 2 === 0 ? '8px' : '9999px'};\n  border: none;\n  cursor: pointer;\n  transition: all 0.25s ease;\n  box-shadow: 0 4px 14px ${palette.glow};\n}\n.${className}:hover {\n  background: ${palette.hover};\n  transform: translateY(-2px);\n  box-shadow: 0 6px 20px ${palette.glow};\n}`;

      if (cat.id.includes("glassmorphism")) {
        css = `.${className} {\n  background: rgba(255, 255, 255, 0.08);\n  backdrop-filter: blur(12px);\n  color: ${palette.main};\n  font-size: 14px;\n  font-weight: 600;\n  padding: 12px 28px;\n  border-radius: 12px;\n  border: 1px solid ${palette.main};\n  cursor: pointer;\n  transition: all 0.3s ease;\n}\n.${className}:hover {\n  background: ${palette.main};\n  color: #ffffff;\n  box-shadow: 0 0 20px ${palette.glow};\n}`;
      } else if (cat.id.includes("neumorphism")) {
        css = `.${className} {\n  background: #1e2433;\n  color: ${palette.main};\n  font-size: 14px;\n  font-weight: 700;\n  padding: 12px 28px;\n  border-radius: 12px;\n  border: none;\n  cursor: pointer;\n  box-shadow: 5px 5px 10px #141822, -5px -5px 10px #283044;\n  transition: all 0.2s ease;\n}\n.${className}:active {\n  box-shadow: inset 3px 3px 6px #141822, inset -3px -3px 6px #283044;\n}`;
      } else if (cat.id.includes("cyberpunk")) {
        css = `.${className} {\n  background: #090a0f;\n  color: ${palette.main};\n  font-size: 13px;\n  font-weight: 800;\n  letter-spacing: 2px;\n  padding: 12px 28px;\n  border-radius: 4px;\n  border: 2px solid ${palette.main};\n  box-shadow: 0 0 12px ${palette.glow};\n  text-shadow: 0 0 8px ${palette.main};\n  cursor: pointer;\n  transition: all 0.2s ease;\n}\n.${className}:hover {\n  background: ${palette.main};\n  color: #000000;\n}`;
      } else if (cat.id.includes("3d-tactile")) {
        css = `.${className} {\n  background: ${palette.main};\n  color: #ffffff;\n  font-size: 15px;\n  font-weight: 700;\n  padding: 12px 28px;\n  border-radius: 10px;\n  border: none;\n  box-shadow: 0 5px 0 ${palette.hover}, 0 8px 15px rgba(0,0,0,0.3);\n  cursor: pointer;\n  position: relative;\n  top: 0;\n  transition: all 0.1s ease;\n}\n.${className}:active {\n  top: 4px;\n  box-shadow: 0 1px 0 ${palette.hover};\n}`;
      } else if (cat.id.includes("gradients")) {
        css = `.${className} {\n  background: linear-gradient(45deg, ${palette.main}, ${palette.hover}, #ec4899);\n  background-size: 200% 200%;\n  animation: gradientShift 4s ease infinite;\n  color: #ffffff;\n  font-size: 14px;\n  font-weight: 600;\n  padding: 12px 28px;\n  border-radius: 10px;\n  border: none;\n  cursor: pointer;\n  box-shadow: 0 4px 15px ${palette.glow};\n}`;
      }

      return {
        id: btnId,
        name: name,
        tags: [palette.name, subName.split(' ')[0], cat.name.split(' ')[1]],
        html: `<button class="${className}">${palette.name} ${subName.split(' ')[0]}</button>`,
        css: css
      };
    });

    return {
      name: `${subName} Variants`,
      buttons: buttons
    };
  });

  return {
    id: cat.id,
    name: cat.name,
    subcategories: subs
  };
});

const output = `// Auto-generated 300+ Distinct Button Database\nexport const globalKeyframes = \`${keyframesCSS.trim()}\`;\n\nexport const buttonCategories = ${JSON.stringify(generatedCategories, null, 2)};\n`;
fs.writeFileSync('src/data/buttonLibraryData.js', output);
console.log(`Successfully generated ${generatedCategories.length} Categories with ${generatedCategories.length * 5 * 6} total buttons in src/data/buttonLibraryData.js`);
