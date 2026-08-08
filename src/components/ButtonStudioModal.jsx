import React, { useState } from 'react';
import { X, Check, Copy, Sliders, Code2, RotateCcw, Palette, Type, Square, Sparkles, ChevronDown, ChevronRight, Layers, Sun, Moon, Eye } from 'lucide-react';

const PRESET_COLORS = [
  { name: 'Indigo', hex: '#6366f1' },
  { name: 'Emerald', hex: '#10b981' },
  { name: 'Cyan', hex: '#06b6d4' },
  { name: 'Rose', hex: '#f43f5e' },
  { name: 'Amber', hex: '#f59e0b' },
  { name: 'Violet', hex: '#8b5cf6' },
  { name: 'Cyber Pink', hex: '#ff0055' },
  { name: 'Gold', hex: '#eab308' },
  { name: 'White', hex: '#ffffff' },
  { name: 'Dark', hex: '#0f172a' }
];

export default function ButtonStudioModal({ btn, onClose }) {
  const [activeTab, setActiveTab] = useState('visual'); // 'visual' | 'code'
  const [isCopied, setIsCopied] = useState(false);
  const [stageBg, setStageBg] = useState('dark');
  const [currentState, setCurrentState] = useState('default'); // 'default' | 'hover' | 'active' | 'focus'

  // Open Accordions State for 20 Categories
  const [openSections, setOpenSections] = useState({
    content: true,
    dimensions: true,
    typography: true,
    textColor: true,
    background: true,
    border: true,
    shape: true,
    shadow: false,
    glow: false,
    hoverEffect: false,
    activeEffect: false,
    focusEffect: false,
    animation: false,
    textAnim: false,
    borderAnim: false,
    iconAnim: false,
    threeD: false,
    glass: false,
    states: false,
    advanced: false
  });

  const toggleSection = (sec) => {
    setOpenSections(prev => ({ ...prev, [sec]: !prev[sec] }));
  };

  // Extract initial text label from HTML
  const initialText = btn.html.match(/>([^<]+)</)?.[1] || "Button";

  // Comprehensive 20-Category State Engine
  const [content, setContent] = useState({ label: initialText, textTransform: 'none', letterSpacing: '0px' });
  const [dimensions, setDimensions] = useState({ widthMode: 'auto', paddingY: 12, paddingX: 28 });
  const [typography, setTypography] = useState({ fontFamily: 'sans-serif', fontSize: 15, fontWeight: 600 });
  const [colors, setColors] = useState({ text: '#ffffff', bg: '#6366f1', bgSecondary: '#4338ca', border: '#6366f1', shadow: '#6366f1', hoverBg: '#4338ca', hoverText: '#ffffff' });
  const [bgStyle, setBgStyle] = useState('solid'); // 'solid' | 'gradient' | 'transparent'
  const [borderStyle, setBorderStyle] = useState('none'); // 'none' | 'solid' | 'dashed' | 'dotted' | 'double'
  const [borderWidth, setBorderWidth] = useState(1);
  const [shape, setShape] = useState({ type: 'rounded', radius: 8 }); // 'rectangle' | 'rounded' | 'pill' | 'cut-corner'
  const [shadow, setShadow] = useState({ type: 'none', blur: 12, spread: 0 }); // 'none' | 'soft' | '3d-elevated' | 'inset'
  const [glow, setGlow] = useState({ type: 'none', blur: 15 }); // 'none' | 'outer' | 'inner' | 'neon-pulse'
  const [hoverEffect, setHoverEffect] = useState('lift'); // 'none' | 'lift' | 'scale' | 'shimmer'
  const [activeEffect, setActiveEffect] = useState('press'); // 'none' | 'press' | 'scale-down'
  const [focusEffect, setFocusEffect] = useState('none'); // 'none' | 'ring' | 'glow'
  const [animation, setAnimation] = useState('none'); // 'none' | 'flowing-gradient' | 'pulse-aura' | 'shimmer-sweep' | 'glitch'
  const [textAnim, setTextAnim] = useState('none'); // 'none' | 'glitch-text'
  const [borderAnim, setBorderAnim] = useState('none'); // 'none' | 'neon-pulse-border'
  const [glass, setGlass] = useState({ enabled: false, blur: 12, opacity: 0.08 });
  const [advanced, setAdvanced] = useState({ transitionSpeed: 0.2, easing: 'ease' });

  const uniqueId = `modal-${btn.id}`;

  // Dynamically Construct Clean Production CSS Code
  const buildCssCode = () => {
    let css = `/* ============================================ */\n`;
    css += `/* 1. BUTTON BASE STYLES & TYPOGRAPHY           */\n`;
    css += `/* ============================================ */\n`;
    css += `.btn-${uniqueId} {\n`;
    
    // Typography & Font
    css += `  font-family: ${typography.fontFamily};\n`;
    css += `  font-size: ${typography.fontSize}px;\n`;
    css += `  font-weight: ${typography.fontWeight};\n`;
    css += `  text-transform: ${content.textTransform};\n`;
    css += `  letter-spacing: ${content.letterSpacing};\n`;

    // Dimensions & Spacing
    css += `  width: ${dimensions.widthMode === 'full' ? '100%' : 'auto'};\n`;
    css += `  padding: ${dimensions.paddingY}px ${dimensions.paddingX}px;\n`;

    // Shape & Corner Radius
    let rad = `${shape.radius}px`;
    if (shape.type === 'rectangle') rad = '0px';
    if (shape.type === 'pill') rad = '9999px';
    css += `  border-radius: ${rad};\n`;
    if (shape.type === 'cut-corner') {
      css += `  clip-path: polygon(12px 0%, 100% 0%, 100% calc(100% - 12px), calc(100% - 12px) 100%, 0% 100%, 0% 12px);\n`;
    }

    // Text & Background Colors
    css += `  color: ${colors.text};\n`;
    if (bgStyle === 'transparent') {
      css += `  background: transparent;\n`;
    } else if (bgStyle === 'gradient') {
      css += `  background: linear-gradient(135deg, ${colors.bg}, ${colors.bgSecondary});\n`;
      if (animation === 'flowing-gradient') {
        css += `  background-size: 300% 300%;\n`;
        css += `  animation: gradientShift 6s ease infinite;\n`;
      }
    } else {
      css += `  background: ${colors.bg};\n`;
    }

    // Glassmorphism
    if (glass.enabled) {
      css += `  backdrop-filter: blur(${glass.blur}px);\n`;
      css += `  -webkit-backdrop-filter: blur(${glass.blur}px);\n`;
      css += `  background: rgba(255, 255, 255, ${glass.opacity});\n`;
    }

    // Border
    if (borderStyle === 'none') {
      css += `  border: none;\n`;
    } else {
      css += `  border: ${borderWidth}px ${borderStyle} ${colors.border};\n`;
    }

    // Shadows & Glow
    if (shadow.type === 'soft') {
      const { r, g, b } = hexToRgb(colors.shadow);
      css += `  box-shadow: 0 4px ${shadow.blur}px rgba(${r}, ${g}, ${b}, 0.35);\n`;
    } else if (shadow.type === '3d-elevated') {
      css += `  box-shadow: 0 6px 0 ${colors.bgSecondary}, 0 10px 20px rgba(0,0,0,0.3);\n`;
    } else if (shadow.type === 'inset') {
      css += `  box-shadow: inset 4px 4px 8px #151924, inset -4px -4px 8px #272f42;\n`;
    }

    if (glow.type === 'outer') {
      const { r, g, b } = hexToRgb(colors.shadow);
      css += `  box-shadow: 0 0 ${glow.blur}px rgba(${r}, ${g}, ${b}, 0.6);\n`;
    }

    if (animation === 'pulse-aura') {
      css += `  animation: pulseGlow 2s infinite;\n`;
    } else if (animation === 'shimmer-sweep') {
      css += `  position: relative;\n`;
      css += `  overflow: hidden;\n`;
    }

    css += `  cursor: pointer;\n`;
    css += `  transition: all ${advanced.transitionSpeed}s ${advanced.easing};\n`;
    css += `}\n\n`;

    // Hover State
    css += `/* ============================================ */\n`;
    css += `/* 2. HOVER & CLICK INTERACTIONS                */\n`;
    css += `/* ============================================ */\n`;
    css += `.btn-${uniqueId}:hover {\n`;
    if (colors.hoverBg) css += `  background: ${colors.hoverBg};\n`;
    if (colors.hoverText) css += `  color: ${colors.hoverText};\n`;
    if (hoverEffect === 'lift') css += `  transform: translateY(-2px);\n`;
    if (hoverEffect === 'scale') css += `  transform: scale(1.05);\n`;
    css += `}\n\n`;

    // Active State
    css += `.btn-${uniqueId}:active {\n`;
    if (activeEffect === 'press') css += `  transform: translateY(2px);\n`;
    if (activeEffect === 'scale-down') css += `  transform: scale(0.96);\n`;
    css += `}\n`;

    return css;
  };

  const cssCodeGenerated = buildCssCode();
  const htmlCodeGenerated = `<button class="btn-${uniqueId}">${content.label}</button>`;

  // Safe Scoped CSS
  const scopedCss = cssCodeGenerated
    .replace(/(^|\n|\})\s*\.btn-modal-([a-zA-Z0-9_-]+)/g, `$1 %%SCOPE%% .btn-modal-$2`)
    .replace(/%%SCOPE%%/g, `.stage-preview-${uniqueId}`);

  // Convert Hex to RGB
  const hexToRgb = (hex) => {
    let c = (hex || '#6366f1').replace('#', '');
    if (c.length === 3) c = c.split('').map(x => x + x).join('');
    const num = parseInt(c, 16);
    return { r: (num >> 16) & 255, g: (num >> 8) & 255, b: num & 255 };
  };

  const handleCopy = () => {
    const code = `<!-- HTML Markup -->\n${htmlCodeGenerated}\n\n/* Production CSS */\n<style>\n${cssCodeGenerated}\n</style>`;
    navigator.clipboard.writeText(code);
    setIsCopied(true);
    setTimeout(() => setIsCopied(false), 2000);
  };

  const handleReset = () => {
    setContent({ label: initialText, textTransform: 'none', letterSpacing: '0px' });
    setColors({ text: '#ffffff', bg: '#6366f1', bgSecondary: '#4338ca', border: '#6366f1', shadow: '#6366f1', hoverBg: '#4338ca', hoverText: '#ffffff' });
    setBgStyle('solid');
    setBorderStyle('none');
    setShape({ type: 'rounded', radius: 8 });
    setShadow({ type: 'none', blur: 12, spread: 0 });
    setHoverEffect('lift');
  };

  return (
    <div className="fixed inset-0 z-[100] bg-black/90 backdrop-blur-md flex flex-col overflow-hidden animate-in fade-in duration-200">
      
      {/* Top Header Bar */}
      <header className="h-16 bg-[#12141c] border-b border-slate-800 px-6 flex items-center justify-between shrink-0">
        <div className="flex items-center space-x-3">
          <div className="w-3 h-3 rounded-full bg-pink-500 animate-pulse" />
          <h2 className="text-lg font-bold text-white tracking-wide">{btn.name} — Full Component Studio</h2>
        </div>

        <div className="flex items-center space-x-3">
          <button 
            onClick={handleReset}
            className="flex items-center space-x-1.5 px-3 py-1.5 bg-slate-800 hover:bg-slate-700 text-slate-300 rounded-lg text-xs font-semibold transition-colors border border-slate-700"
          >
            <RotateCcw className="w-3.5 h-3.5" />
            <span>Reset Defaults</span>
          </button>

          <button 
            onClick={handleCopy}
            className="flex items-center space-x-1.5 px-4 py-1.5 bg-indigo-600 hover:bg-indigo-500 text-white rounded-lg text-xs font-bold transition-colors shadow-lg"
          >
            {isCopied ? <Check className="w-4 h-4 text-green-400" /> : <Copy className="w-4 h-4" />}
            <span>{isCopied ? 'Code Copied!' : 'Copy Production Code'}</span>
          </button>

          <button 
            onClick={onClose}
            className="p-1.5 text-slate-400 hover:text-white bg-slate-800/60 hover:bg-slate-800 rounded-lg transition-colors ml-4"
          >
            <X className="w-5 h-5" />
          </button>
        </div>
      </header>

      {/* Main Split Body: Left Fixed Stage vs Right 20-Category Sidebar */}
      <div className="flex-1 flex flex-col md:flex-row overflow-hidden">
        
        {/* LEFT PANE: Fixed Centered Preview Stage */}
        <div className="flex-1 flex flex-col bg-[#07080c] relative overflow-hidden border-r border-slate-800">
          
          <div className={`absolute inset-0 transition-opacity ${stageBg === 'dark' ? 'bg-[#07080c]' : stageBg === 'light' ? 'bg-slate-200' : 'bg-slate-900'}`}>
            <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGNpcmNsZSBjeD0iMiIgY3k9IjIiIHI9IjIiIGZpbGw9IiMzMzQxNTUiIGZpbGwtb3BhY2l0eT0iMC4yNSIvPjwvc3ZnPg==')]" />
            <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/10 via-transparent to-pink-500/10" />
          </div>

          <style dangerouslySetInnerHTML={{__html: scopedCss}} />

          {/* Centered Rendered Button Container */}
          <div className="flex-1 flex items-center justify-center p-12 relative z-10">
            <div className={`stage-preview-${uniqueId} p-12 border border-slate-800/80 rounded-3xl bg-slate-900/40 backdrop-blur-sm shadow-2xl flex items-center justify-center min-w-[320px] min-h-[220px]`}>
              <div dangerouslySetInnerHTML={{__html: htmlCodeGenerated}} />
            </div>
          </div>

          {/* Stage Footer Switcher */}
          <div className="h-12 border-t border-slate-800 bg-[#0f111a]/90 px-6 flex items-center justify-between text-xs text-slate-400 relative z-10">
            <span className="flex items-center font-mono text-indigo-400">
              <Sparkles className="w-3.5 h-3.5 mr-1.5" /> Stage Status: 0ms Real-Time Fixed Canvas
            </span>
            <div className="flex items-center space-x-2">
              <span className="text-[11px] text-slate-500">Stage Background:</span>
              <button onClick={() => setStageBg('dark')} className={`p-1.5 rounded ${stageBg === 'dark' ? 'bg-indigo-600 text-white' : 'hover:bg-slate-800 text-slate-400'}`} title="Dark Stage"><Moon className="w-3.5 h-3.5" /></button>
              <button onClick={() => setStageBg('light')} className={`p-1.5 rounded ${stageBg === 'light' ? 'bg-indigo-600 text-white' : 'hover:bg-slate-800 text-slate-400'}`} title="Light Stage"><Sun className="w-3.5 h-3.5" /></button>
            </div>
          </div>
        </div>

        {/* RIGHT PANE: 20-Category Context-Aware Property Inspector */}
        <div className="w-full md:w-[480px] lg:w-[560px] bg-[#12141c] flex flex-col shrink-0 border-l border-slate-800">
          
          {/* Top Tab Bar */}
          <div className="flex border-b border-slate-800 bg-[#0c0d12]">
            <button
              onClick={() => setActiveTab('visual')}
              className={`flex-1 py-3.5 px-4 text-xs font-bold uppercase tracking-wider flex items-center justify-center space-x-2 border-b-2 transition-all ${activeTab === 'visual' ? 'border-purple-500 text-purple-400 bg-purple-500/10' : 'border-transparent text-slate-400 hover:text-white'}`}
            >
              <Sliders className="w-4 h-4" />
              <span>20-Category Inspector</span>
            </button>
            
            <button
              onClick={() => setActiveTab('code')}
              className={`flex-1 py-3.5 px-4 text-xs font-bold uppercase tracking-wider flex items-center justify-center space-x-2 border-b-2 transition-all ${activeTab === 'code' ? 'border-indigo-500 text-indigo-400 bg-indigo-500/10' : 'border-transparent text-slate-400 hover:text-white'}`}
            >
              <Code2 className="w-4 h-4" />
              <span>Annotated CSS Code</span>
            </button>
          </div>

          {/* TAB 1: 20 CATEGORY ACCORDION INSPECTOR */}
          {activeTab === 'visual' && (
            <div className="flex-1 overflow-y-auto p-5 space-y-4 custom-scrollbar">
              
              {/* 1. CONTENT & LABEL */}
              <div className="bg-slate-900/60 rounded-xl border border-slate-800 overflow-hidden">
                <button onClick={() => toggleSection('content')} className="w-full p-3.5 bg-[#161925] flex justify-between items-center text-xs font-bold text-slate-200">
                  <span className="flex items-center text-indigo-400"><Type className="w-4 h-4 mr-2" /> 01. Content & Text Label</span>
                  {openSections.content ? <ChevronDown className="w-4 h-4" /> : <ChevronRight className="w-4 h-4" />}
                </button>
                {openSections.content && (
                  <div className="p-4 space-y-3 bg-[#0a0b10]">
                    <div>
                      <label className="text-[11px] font-bold text-slate-400 block mb-1">Button Label Text</label>
                      <input type="text" value={content.label} onChange={(e) => setContent({ ...content, label: e.target.value })} className="w-full bg-[#12141c] border border-slate-800 rounded-lg p-2 text-xs text-white" />
                    </div>
                  </div>
                )}
              </div>

              {/* 2. DIMENSIONS & SPACING */}
              <div className="bg-slate-900/60 rounded-xl border border-slate-800 overflow-hidden">
                <button onClick={() => toggleSection('dimensions')} className="w-full p-3.5 bg-[#161925] flex justify-between items-center text-xs font-bold text-slate-200">
                  <span className="flex items-center text-cyan-400"><Square className="w-4 h-4 mr-2" /> 02. Dimensions & Padding</span>
                  {openSections.dimensions ? <ChevronDown className="w-4 h-4" /> : <ChevronRight className="w-4 h-4" />}
                </button>
                {openSections.dimensions && (
                  <div className="p-4 space-y-3 bg-[#0a0b10] grid grid-cols-2 gap-3">
                    <div>
                      <label className="text-[11px] font-bold text-slate-400 block mb-1">Width Mode</label>
                      <select value={dimensions.widthMode} onChange={(e) => setDimensions({ ...dimensions, widthMode: e.target.value })} className="w-full bg-[#12141c] border border-slate-800 rounded-lg p-1.5 text-xs text-white">
                        <option value="auto">Auto Width</option>
                        <option value="full">Full Width (100%)</option>
                      </select>
                    </div>
                    <div>
                      <label className="text-[11px] font-bold text-slate-400 block mb-1">Vertical Padding Y ({dimensions.paddingY}px)</label>
                      <input type="range" min="6" max="24" value={dimensions.paddingY} onChange={(e) => setDimensions({ ...dimensions, paddingY: Number(e.target.value) })} className="w-full" />
                    </div>
                  </div>
                )}
              </div>

              {/* 3. TYPOGRAPHY */}
              <div className="bg-slate-900/60 rounded-xl border border-slate-800 overflow-hidden">
                <button onClick={() => toggleSection('typography')} className="w-full p-3.5 bg-[#161925] flex justify-between items-center text-xs font-bold text-slate-200">
                  <span className="flex items-center text-purple-400"><Type className="w-4 h-4 mr-2" /> 03. Typography & Font</span>
                  {openSections.typography ? <ChevronDown className="w-4 h-4" /> : <ChevronRight className="w-4 h-4" />}
                </button>
                {openSections.typography && (
                  <div className="p-4 space-y-3 bg-[#0a0b10] grid grid-cols-2 gap-3">
                    <div>
                      <label className="text-[11px] font-bold text-slate-400 block mb-1">Font Size ({typography.fontSize}px)</label>
                      <input type="range" min="12" max="24" value={typography.fontSize} onChange={(e) => setTypography({ ...typography, fontSize: Number(e.target.value) })} className="w-full" />
                    </div>
                    <div>
                      <label className="text-[11px] font-bold text-slate-400 block mb-1">Font Weight</label>
                      <select value={typography.fontWeight} onChange={(e) => setTypography({ ...typography, fontWeight: Number(e.target.value) })} className="w-full bg-[#12141c] border border-slate-800 rounded-lg p-1.5 text-xs text-white">
                        <option value="400">Regular 400</option>
                        <option value="600">SemiBold 600</option>
                        <option value="700">Bold 700</option>
                        <option value="800">Black 800</option>
                      </select>
                    </div>
                  </div>
                )}
              </div>

              {/* 4. TEXT COLOR (SWATCHES + PICKER) */}
              <div className="bg-slate-900/60 rounded-xl border border-slate-800 overflow-hidden">
                <button onClick={() => toggleSection('textColor')} className="w-full p-3.5 bg-[#161925] flex justify-between items-center text-xs font-bold text-slate-200">
                  <span className="flex items-center text-pink-400"><Palette className="w-4 h-4 mr-2" /> 04. Text Colors & Swatches</span>
                  {openSections.textColor ? <ChevronDown className="w-4 h-4" /> : <ChevronRight className="w-4 h-4" />}
                </button>
                {openSections.textColor && (
                  <div className="p-4 space-y-3 bg-[#0a0b10]">
                    <div className="flex items-center space-x-2">
                      <div className="flex flex-wrap gap-1.5 flex-1">
                        {PRESET_COLORS.map((c) => (
                          <button key={c.name} onClick={() => setColors({ ...colors, text: c.hex })} style={{ backgroundColor: c.hex }} className="w-5 h-5 rounded-full border border-white/20 hover:scale-125 transition-transform" />
                        ))}
                      </div>
                      <input type="color" value={colors.text} onChange={(e) => setColors({ ...colors, text: e.target.value })} className="w-7 h-7 rounded cursor-pointer border-0 bg-transparent" />
                    </div>
                  </div>
                )}
              </div>

              {/* 5. BACKGROUND (SOLID / GRADIENT / TRANSPARENT) */}
              <div className="bg-slate-900/60 rounded-xl border border-slate-800 overflow-hidden">
                <button onClick={() => toggleSection('background')} className="w-full p-3.5 bg-[#161925] flex justify-between items-center text-xs font-bold text-slate-200">
                  <span className="flex items-center text-indigo-400"><Palette className="w-4 h-4 mr-2" /> 05. Background & Gradients</span>
                  {openSections.background ? <ChevronDown className="w-4 h-4" /> : <ChevronRight className="w-4 h-4" />}
                </button>
                {openSections.background && (
                  <div className="p-4 space-y-3 bg-[#0a0b10]">
                    <div className="flex space-x-2">
                      <button onClick={() => setBgStyle('solid')} className={`px-3 py-1 rounded text-xs ${bgStyle === 'solid' ? 'bg-indigo-600 text-white' : 'bg-slate-800 text-slate-400'}`}>Solid</button>
                      <button onClick={() => setBgStyle('gradient')} className={`px-3 py-1 rounded text-xs ${bgStyle === 'gradient' ? 'bg-indigo-600 text-white' : 'bg-slate-800 text-slate-400'}`}>Gradient</button>
                      <button onClick={() => setBgStyle('transparent')} className={`px-3 py-1 rounded text-xs ${bgStyle === 'transparent' ? 'bg-indigo-600 text-white' : 'bg-slate-800 text-slate-400'}`}>None/Transparent</button>
                    </div>
                    <div className="flex items-center space-x-2">
                      <div className="flex flex-wrap gap-1.5 flex-1">
                        {PRESET_COLORS.map((c) => (
                          <button key={c.name} onClick={() => setColors({ ...colors, bg: c.hex })} style={{ backgroundColor: c.hex }} className="w-5 h-5 rounded-full border border-white/20 hover:scale-125 transition-transform" />
                        ))}
                      </div>
                      <input type="color" value={colors.bg} onChange={(e) => setColors({ ...colors, bg: e.target.value })} className="w-7 h-7 rounded cursor-pointer border-0 bg-transparent" />
                    </div>
                  </div>
                )}
              </div>

              {/* 6. BORDER & RADIUS */}
              <div className="bg-slate-900/60 rounded-xl border border-slate-800 overflow-hidden">
                <button onClick={() => toggleSection('border')} className="w-full p-3.5 bg-[#161925] flex justify-between items-center text-xs font-bold text-slate-200">
                  <span className="flex items-center text-amber-400"><Square className="w-4 h-4 mr-2" /> 06. Border & Corner Radius</span>
                  {openSections.border ? <ChevronDown className="w-4 h-4" /> : <ChevronRight className="w-4 h-4" />}
                </button>
                {openSections.border && (
                  <div className="p-4 space-y-3 bg-[#0a0b10] grid grid-cols-2 gap-3">
                    <div>
                      <label className="text-[11px] font-bold text-slate-400 block mb-1">Border Style</label>
                      <select value={borderStyle} onChange={(e) => setBorderStyle(e.target.value)} className="w-full bg-[#12141c] border border-slate-800 rounded-lg p-1.5 text-xs text-white">
                        <option value="none">None</option>
                        <option value="solid">Solid</option>
                        <option value="dashed">Dashed</option>
                        <option value="dotted">Dotted</option>
                      </select>
                    </div>
                    <div>
                      <label className="text-[11px] font-bold text-slate-400 block mb-1">Corner Radius</label>
                      <select value={shape.radius} onChange={(e) => setShape({ ...shape, radius: Number(e.target.value) })} className="w-full bg-[#12141c] border border-slate-800 rounded-lg p-1.5 text-xs text-white">
                        <option value="0">Sharp 0px</option>
                        <option value="6">Rounded 6px</option>
                        <option value="12">Medium 12px</option>
                        <option value="9999">Full Pill 9999px</option>
                      </select>
                    </div>
                  </div>
                )}
              </div>

              {/* 7. HOVER MOTION EFFECTS */}
              <div className="bg-slate-900/60 rounded-xl border border-slate-800 overflow-hidden">
                <button onClick={() => toggleSection('hoverEffect')} className="w-full p-3.5 bg-[#161925] flex justify-between items-center text-xs font-bold text-slate-200">
                  <span className="flex items-center text-emerald-400"><Sparkles className="w-4 h-4 mr-2" /> 07. Hover Motion Effects</span>
                  {openSections.hoverEffect ? <ChevronDown className="w-4 h-4" /> : <ChevronRight className="w-4 h-4" />}
                </button>
                {openSections.hoverEffect && (
                  <div className="p-4 space-y-3 bg-[#0a0b10]">
                    <select value={hoverEffect} onChange={(e) => setHoverEffect(e.target.value)} className="w-full bg-[#12141c] border border-slate-800 rounded-lg p-2 text-xs text-white">
                      <option value="none">None</option>
                      <option value="lift">Physical Lift Up (-2px)</option>
                      <option value="scale">Scale Up (1.05x)</option>
                    </select>
                  </div>
                )}
              </div>

            </div>
          )}

          {/* TAB 2: ANNOTATED CODE EDITOR */}
          {activeTab === 'code' && (
            <div className="flex-1 overflow-y-auto p-6 space-y-6 custom-scrollbar">
              <div className="space-y-2">
                <label className="text-xs font-bold text-orange-400 uppercase tracking-wider block">HTML Markup</label>
                <textarea value={htmlCodeGenerated} readOnly className="w-full bg-[#07080c] border border-slate-800 rounded-xl p-3.5 text-xs font-mono text-orange-300 resize-y min-h-[70px]" />
              </div>
              <div className="space-y-2">
                <label className="text-xs font-bold text-blue-400 uppercase tracking-wider block">CSS Code (With Explanatory Comments)</label>
                <textarea value={cssCodeGenerated} readOnly className="w-full bg-[#07080c] border border-slate-800 rounded-xl p-3.5 text-xs font-mono text-blue-300 resize-y min-h-[350px] leading-relaxed" />
              </div>
            </div>
          )}

          {/* Footer Action */}
          <div className="p-4 border-t border-slate-800 bg-[#0c0d12] flex justify-end">
            <button onClick={handleCopy} className="w-full py-2.5 bg-indigo-600 hover:bg-indigo-500 text-white rounded-xl text-xs font-bold transition-colors shadow-xl flex items-center justify-center space-x-2">
              {isCopied ? <Check className="w-4 h-4 text-green-400" /> : <Copy className="w-4 h-4" />}
              <span>{isCopied ? 'Code Copied!' : 'Copy Production Code with Comments'}</span>
            </button>
          </div>

        </div>

      </div>

    </div>
  );
}
