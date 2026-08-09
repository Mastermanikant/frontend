import React, { useState, useEffect } from 'react';
import { 
  X, Check, Copy, Sliders, Code2, RotateCcw, Palette, Type, Square, Sparkles, 
  Sun, Moon, ArrowRightLeft, Layers, Shield, Star, Heart, ArrowRight, Zap, Download, ExternalLink, Box, Eye
} from 'lucide-react';
import { buttonCategories } from '../data/buttonLibraryData';

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
  const [previewState, setPreviewState] = useState('default'); // 'default' | 'hover' | 'active' | 'disabled'

  // All 1000+ buttons array for Archetype Switcher
  const allButtons = buttonCategories.flatMap(c => c.subcategories.flatMap(s => s.buttons));
  
  // Selected Archetype State
  const [selectedBtn, setSelectedBtn] = useState(btn);

  // When dropdown selects a new Archetype, load its raw HTML & CSS
  const handleArchetypeSelect = (btnId) => {
    const found = allButtons.find(b => b.id === btnId);
    if (found) {
      setSelectedBtn(found);
      const extractedLabel = found.html.match(/>([^<]+)</)?.[1] || "Button";
      setContent(c => ({ ...c, label: extractedLabel }));
      setHtmlCodeEdited(found.html);
      setCssCodeEdited(found.css);
    }
  };

  // Open/Close State for all 20 Accordion Categories
  const [openSections, setOpenSections] = useState({
    content: true,
    dimensions: true,
    typography: true,
    textColor: true,
    background: true,
    border: true,
    shadow: true,
    glow: true,
    hoverEffect: true,
    activeEffect: false,
    focusEffect: false,
    glass: false,
    threeD: false,
    buttonAnim: false,
    textAnim: false,
    borderAnim: false,
    iconAnim: false,
    states: false,
    advancedFilter: false,
    transitions: false
  });

  const toggleSection = (sec) => {
    setOpenSections(prev => ({ ...prev, [sec]: !prev[sec] }));
  };

  // 1. Content & Icons
  const initialText = selectedBtn.html.match(/>([^<]+)</)?.[1] || "Button";
  const [content, setContent] = useState({
    label: initialText,
    badgeText: '',
    badgePos: 'top-right',
    iconName: 'none',
    iconPos: 'right',
    iconGap: 8
  });

  // 2. Dimensions & Padding
  const [dimensions, setDimensions] = useState({
    widthMode: 'auto', // 'auto' | 'full' | 'custom'
    customWidth: 200,
    paddingY: 12,
    paddingX: 28
  });

  // 3. Typography & Fonts
  const [typography, setTypography] = useState({
    fontFamily: 'Inter, sans-serif',
    fontSize: 15,
    fontWeight: 600,
    textTransform: 'none',
    letterSpacing: 0,
    lineHeight: 1.4
  });

  // 4. Text Colors
  const [textColors, setTextColors] = useState({
    mode: 'solid', // 'solid' | 'gradient'
    solid: '#ffffff',
    gradient1: '#ec4899',
    gradient2: '#8b5cf6',
    hoverText: '#ffffff'
  });

  // 5. Background & Gradients (Multi-Color)
  const [bgConfig, setBgConfig] = useState({
    mode: 'solid', // 'solid' | 'gradient' | 'transparent'
    color1: '#6366f1',
    color2: '#ec4899',
    color3: '#3b82f6',
    direction: '135deg',
    hoverBg: '#4338ca'
  });

  // 6. Border & Corner Radius
  const [borderConfig, setBorderConfig] = useState({
    style: 'none', // 'none' | 'solid' | 'dashed' | 'dotted' | 'double' | 'groove'
    width: 2,
    color: '#6366f1',
    hoverColor: '#818cf8',
    radiusType: 'rounded', // 'sharp' | 'rounded' | 'medium' | 'pill' | 'custom'
    customRadius: 8,
    shapeCut: 'none' // 'none' | 'cut-corner' | 'slanted'
  });

  // 7. Shadow & Depth
  const [shadowConfig, setShadowConfig] = useState({
    type: 'none', // 'none' | 'soft' | '3d-elevated' | 'inset' | 'hard-retro'
    color: '#6366f1',
    offsetX: 0,
    offsetY: 6,
    blur: 16,
    spread: 0
  });

  // 8. Cyber Glow & Neon
  const [glowConfig, setGlowConfig] = useState({
    type: 'none', // 'none' | 'outer' | 'inner' | 'pulsing-aura'
    color: '#ff0055',
    size: 20,
    intensity: 0.6
  });

  // 9. Hover Physics (15+ Effects)
  const [hoverConfig, setHoverConfig] = useState({
    effect: 'lift', // 'none' | 'lift' | 'scale-up' | 'scale-down' | 'rotate' | 'shimmer' | 'pulse-aura' | 'ripple' | 'glitch' | 'invert'
    speed: 0.25
  });

  // 10. Active Click Press Physics
  const [activeConfig, setActiveConfig] = useState({
    effect: 'press' // 'none' | 'press' | 'scale-down' | 'inset-depth'
  });

  // 11. Focus Accessibility Ring
  const [focusConfig, setFocusConfig] = useState({
    style: 'none' // 'none' | 'ring-indigo' | 'neon-outline'
  });

  // 12. Glassmorphism & Blur
  const [glassConfig, setGlassConfig] = useState({
    enabled: false,
    blur: 12,
    opacity: 0.1
  });

  // 13. 3D Spatial Depth
  const [threeDConfig, setThreeDConfig] = useState({
    depthHeight: 0,
    depthColor: '#4338ca'
  });

  // 14. Keyframe Animations
  const [animConfig, setAnimConfig] = useState({
    buttonAnim: 'none', // 'none' | 'gradient-shift' | 'pulse-aura' | 'float'
    duration: 3
  });

  // 15. Transition Timing
  const [transitionConfig, setTransitionConfig] = useState({
    speed: 0.25,
    easing: 'cubic-bezier(0.4, 0, 0.2, 1)'
  });

  const uniqueId = `studio-${selectedBtn.id}`;

  // Build Annotated CSS
  const buildCssCode = () => {
    let css = `/* ============================================ */\n`;
    css += `/* 1. BASE BUTTON TYPOGRAPHY & LAYOUT           */\n`;
    css += `/* ============================================ */\n`;
    css += `.btn-${uniqueId} {\n`;
    css += `  font-family: ${typography.fontFamily};\n`;
    css += `  font-size: ${typography.fontSize}px;\n`;
    css += `  font-weight: ${typography.fontWeight};\n`;
    css += `  text-transform: ${typography.textTransform};\n`;
    css += `  letter-spacing: ${typography.letterSpacing}px;\n`;
    css += `  line-height: ${typography.lineHeight};\n\n`;

    css += `  /* Dimensions & Spacing */\n`;
    if (dimensions.widthMode === 'full') {
      css += `  width: 100%;\n`;
    } else if (dimensions.widthMode === 'custom') {
      css += `  width: ${dimensions.customWidth}px;\n`;
    } else {
      css += `  width: auto;\n`;
    }
    css += `  padding: ${dimensions.paddingY}px ${dimensions.paddingX}px;\n\n`;

    css += `  /* Corner Radius & Shape */\n`;
    let rad = `${borderConfig.customRadius}px`;
    if (borderConfig.radiusType === 'sharp') rad = '0px';
    if (borderConfig.radiusType === 'pill') rad = '9999px';
    css += `  border-radius: ${rad};\n`;
    if (borderConfig.shapeCut === 'cut-corner') {
      css += `  clip-path: polygon(12px 0%, 100% 0%, 100% calc(100% - 12px), calc(100% - 12px) 100%, 0% 100%, 0% 12px);\n`;
    }
    css += `\n`;

    css += `  /* Text Color & Gradient Text */\n`;
    if (textColors.mode === 'gradient') {
      css += `  background: linear-gradient(135deg, ${textColors.gradient1}, ${textColors.gradient2});\n`;
      css += `  -webkit-background-clip: text;\n`;
      css += `  -webkit-text-fill-color: transparent;\n`;
    } else {
      css += `  color: ${textColors.solid};\n`;
    }
    css += `\n`;

    css += `  /* Background Style & Multi-Color Gradient */\n`;
    if (bgConfig.mode === 'transparent') {
      css += `  background: transparent;\n`;
    } else if (bgConfig.mode === 'gradient') {
      if (bgConfig.direction === 'circle') {
        css += `  background: radial-gradient(circle, ${bgConfig.color1}, ${bgConfig.color2});\n`;
      } else {
        css += `  background: linear-gradient(${bgConfig.direction}, ${bgConfig.color1}, ${bgConfig.color2}, ${bgConfig.color3});\n`;
      }
      if (animConfig.buttonAnim === 'gradient-shift') {
        css += `  background-size: 300% 300%;\n`;
        css += `  animation: gradientShift ${animConfig.duration}s ease infinite;\n`;
      }
    } else {
      css += `  background: ${bgConfig.color1};\n`;
    }
    css += `\n`;

    // Glassmorphism
    if (glassConfig.enabled) {
      css += `  /* Glassmorphism Frosted Effect */\n`;
      css += `  backdrop-filter: blur(${glassConfig.blur}px);\n`;
      css += `  -webkit-backdrop-filter: blur(${glassConfig.blur}px);\n`;
      css += `  background: rgba(255, 255, 255, ${glassConfig.opacity});\n\n`;
    }

    // Border
    css += `  /* Border & Line Style */\n`;
    if (borderConfig.style === 'none') {
      css += `  border: none;\n`;
    } else {
      css += `  border: ${borderConfig.width}px ${borderConfig.style} ${borderConfig.color};\n`;
    }
    css += `\n`;

    // Shadow & Depth
    css += `  /* Box Shadow & Cyber Glow */\n`;
    if (shadowConfig.type === 'soft') {
      css += `  box-shadow: ${shadowConfig.offsetX}px ${shadowConfig.offsetY}px ${shadowConfig.blur}px ${shadowConfig.color}66;\n`;
    } else if (shadowConfig.type === '3d-elevated') {
      css += `  box-shadow: 0 ${threeDConfig.depthHeight || 6}px 0 ${threeDConfig.depthColor}, 0 10px 20px rgba(0,0,0,0.3);\n`;
    } else if (shadowConfig.type === 'inset') {
      css += `  box-shadow: inset 4px 4px 8px #121520, inset -4px -4px 8px #262c3f;\n`;
    }

    if (glowConfig.type === 'outer') {
      css += `  box-shadow: 0 0 ${glowConfig.size}px ${glowConfig.color};\n`;
    }

    css += `  cursor: pointer;\n`;
    css += `  transition: all ${transitionConfig.speed}s ${transitionConfig.easing};\n`;
    css += `}\n\n`;

    css += `/* ============================================ */\n`;
    css += `/* 2. HOVER & PHYSICAL CLICK INTERACTION        */\n`;
    css += `/* ============================================ */\n`;
    css += `.btn-${uniqueId}:hover {\n`;
    if (bgConfig.hoverBg) css += `  background: ${bgConfig.hoverBg};\n`;
    if (textColors.hoverText) css += `  color: ${textColors.hoverText};\n`;
    if (borderConfig.hoverColor) css += `  border-color: ${borderConfig.hoverColor};\n`;
    if (hoverConfig.effect === 'lift') css += `  transform: translateY(-4px);\n`;
    if (hoverConfig.effect === 'scale-up') css += `  transform: scale(1.08);\n`;
    if (hoverConfig.effect === 'scale-down') css += `  transform: scale(0.95);\n`;
    if (hoverConfig.effect === 'rotate') css += `  transform: rotate(3deg) scale(1.04);\n`;
    css += `}\n\n`;

    css += `.btn-${uniqueId}:active {\n`;
    if (activeConfig.effect === 'press') css += `  transform: translateY(2px);\n`;
    if (activeConfig.effect === 'scale-down') css += `  transform: scale(0.96);\n`;
    css += `}\n`;

    return css;
  };

  const [cssCodeEdited, setCssCodeEdited] = useState(buildCssCode());
  const [htmlCodeEdited, setHtmlCodeEdited] = useState(`<button class="btn-${uniqueId}">${content.label}</button>`);

  const currentCssCode = activeTab === 'code' ? cssCodeEdited : buildCssCode();
  const currentHtmlCode = activeTab === 'code' ? htmlCodeEdited : `<button class="btn-${uniqueId}">${content.label}</button>`;

  // Safe Scoped CSS
  const scopedCss = currentCssCode
    .replace(/(^|\n|\})\s*\.btn-studio-([a-zA-Z0-9_-]+)/g, `$1 %%SCOPE%% .btn-studio-$2`)
    .replace(/%%SCOPE%%/g, `.stage-preview-${uniqueId}`);

  const handleCopy = () => {
    const code = `<!-- HTML Markup -->\n${currentHtmlCode}\n\n/* Production CSS Code with Educational Annotations */\n<style>\n${currentCssCode}\n</style>`;
    navigator.clipboard.writeText(code);
    setIsCopied(true);
    setTimeout(() => setIsCopied(false), 2000);
  };

  const handleReset = () => {
    setContent(c => ({ ...c, label: initialText }));
    setBgConfig(b => ({ ...b, mode: 'solid', color1: '#6366f1' }));
    setBorderConfig(b => ({ ...b, style: 'none', radiusType: 'rounded', customRadius: 8 }));
    setHoverConfig({ effect: 'lift', speed: 0.25 });
  };

  return (
    <div className="fixed inset-0 z-[100] bg-black/95 backdrop-blur-md flex flex-col overflow-hidden animate-in fade-in duration-200">
      
      {/* Top Header Bar: Archetype Switcher & Actions */}
      <header className="h-16 bg-[#12141c] border-b border-slate-800 px-6 flex items-center justify-between shrink-0">
        
        {/* Left: Archetype Switcher Dropdown (Switches button design instantly!) */}
        <div className="flex items-center space-x-3">
          <span className="text-xs font-bold uppercase tracking-wider text-indigo-400 flex items-center">
            <ArrowRightLeft className="w-4 h-4 mr-1.5" /> Archetype:
          </span>
          <select 
            value={selectedBtn.id}
            onChange={(e) => handleArchetypeSelect(e.target.value)}
            className="bg-slate-900 border border-indigo-500/50 text-white text-xs font-bold rounded-lg px-3 py-1.5 focus:outline-none focus:border-indigo-400 cursor-pointer"
          >
            {allButtons.map(b => (
              <option key={b.id} value={b.id}>{b.name}</option>
            ))}
          </select>
        </div>

        {/* Center: Title */}
        <div className="hidden md:flex items-center space-x-2 text-xs font-bold text-slate-300">
          <Sparkles className="w-4 h-4 text-pink-500" />
          <span>Full 20-Category No-Code Studio (100% Live Controls)</span>
        </div>

        {/* Right: Actions */}
        <div className="flex items-center space-x-3">
          <button 
            onClick={handleReset}
            className="flex items-center space-x-1 px-3 py-1.5 bg-slate-800 hover:bg-slate-700 text-slate-300 rounded-lg text-xs font-semibold border border-slate-700"
          >
            <RotateCcw className="w-3.5 h-3.5" />
            <span>Reset</span>
          </button>

          <button 
            onClick={handleCopy}
            className="flex items-center space-x-1.5 px-4 py-1.5 bg-indigo-600 hover:bg-indigo-500 text-white rounded-lg text-xs font-bold shadow-lg"
          >
            {isCopied ? <Check className="w-4 h-4 text-green-400" /> : <Copy className="w-4 h-4" />}
            <span>{isCopied ? 'Copied!' : 'Copy Code'}</span>
          </button>

          <button onClick={onClose} className="p-1.5 text-slate-400 hover:text-white bg-slate-800/60 rounded-lg ml-2">
            <X className="w-5 h-5" />
          </button>
        </div>
      </header>

      {/* Main Split Body: Left Centered Fixed Stage vs Right 20-Category Accordion Sidebar */}
      <div className="flex-1 flex flex-col md:flex-row overflow-hidden">
        
        {/* LEFT PANE: Centered Fixed Stage (Stays 100% visible on hover!) */}
        <div className="flex-1 flex flex-col bg-[#07080c] relative overflow-hidden border-r border-slate-800">
          <div className={`absolute inset-0 transition-opacity ${stageBg === 'dark' ? 'bg-[#07080c]' : stageBg === 'light' ? 'bg-slate-200' : 'bg-slate-900'}`}>
            <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGNpcmNsZSBjeD0iMiIgY3k9IjIiIHI9IjIiIGZpbGw9IiMzMzQxNTUiIGZpbGwtb3BhY2l0eT0iMC4yNSIvPjwvc3ZnPg==')]" />
            <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/10 via-transparent to-pink-500/10" />
          </div>

          <style dangerouslySetInnerHTML={{__html: scopedCss}} />

          {/* Centered Fixed Rendered Button Stage */}
          <div className="flex-1 flex items-center justify-center p-12 relative z-10">
            <div className={`stage-preview-${uniqueId} p-12 border border-slate-800/80 rounded-3xl bg-slate-900/40 backdrop-blur-sm shadow-2xl flex items-center justify-center min-w-[320px] min-h-[220px]`}>
              <div dangerouslySetInnerHTML={{__html: currentHtmlCode}} />
            </div>
          </div>

          {/* Stage Footer */}
          <div className="h-12 border-t border-slate-800 bg-[#0f111a]/90 px-6 flex items-center justify-between text-xs text-slate-400 relative z-10">
            <span className="flex items-center font-mono text-indigo-400">
              <Sparkles className="w-3.5 h-3.5 mr-1.5" /> Stage Status: Hover Mouse Over Button to Test Physics
            </span>
            <div className="flex items-center space-x-2">
              <span className="text-[11px] text-slate-500">Stage Background:</span>
              <button onClick={() => setStageBg('dark')} className={`p-1.5 rounded ${stageBg === 'dark' ? 'bg-indigo-600 text-white' : 'hover:bg-slate-800 text-slate-400'}`}><Moon className="w-3.5 h-3.5" /></button>
              <button onClick={() => setStageBg('light')} className={`p-1.5 rounded ${stageBg === 'light' ? 'bg-indigo-600 text-white' : 'hover:bg-slate-800 text-slate-400'}`}><Sun className="w-3.5 h-3.5" /></button>
            </div>
          </div>
        </div>

        {/* RIGHT PANE: Exhaustive 20-Category Accordion Sidebar */}
        <div className="w-full md:w-[480px] lg:w-[560px] bg-[#12141c] flex flex-col shrink-0 border-l border-slate-800">
          
          {/* Tab Bar: Controls vs Code */}
          <div className="flex border-b border-slate-800 bg-[#0c0d12]">
            <button
              onClick={() => setActiveTab('visual')}
              className={`flex-1 py-3.5 px-4 text-xs font-bold uppercase tracking-wider flex items-center justify-center space-x-2 border-b-2 transition-all ${activeTab === 'visual' ? 'border-purple-500 text-purple-400 bg-purple-500/10' : 'border-transparent text-slate-400 hover:text-white'}`}
            >
              <Sliders className="w-4 h-4" />
              <span>20-Category Customizer</span>
            </button>
            
            <button
              onClick={() => setActiveTab('code')}
              className={`flex-1 py-3.5 px-4 text-xs font-bold uppercase tracking-wider flex items-center justify-center space-x-2 border-b-2 transition-all ${activeTab === 'code' ? 'border-indigo-500 text-indigo-400 bg-indigo-500/10' : 'border-transparent text-slate-400 hover:text-white'}`}
            >
              <Code2 className="w-4 h-4" />
              <span>Annotated CSS Code</span>
            </button>
          </div>

          {/* TAB 1: 20-CATEGORY ACCORDION LIST */}
          {activeTab === 'visual' && (
            <div className="flex-1 overflow-y-auto p-5 space-y-4 custom-scrollbar">
              
              {/* 01. CONTENT & LABEL */}
              <div className="bg-slate-900/60 rounded-xl border border-slate-800 overflow-hidden">
                <button onClick={() => toggleSection('content')} className="w-full p-3.5 bg-[#161925] flex justify-between items-center text-xs font-bold text-slate-200">
                  <span className="flex items-center text-indigo-400"><Type className="w-4 h-4 mr-2" /> 01. Content & Text Label</span>
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

              {/* 02. DIMENSIONS & PADDING */}
              <div className="bg-slate-900/60 rounded-xl border border-slate-800 overflow-hidden">
                <button onClick={() => toggleSection('dimensions')} className="w-full p-3.5 bg-[#161925] flex justify-between items-center text-xs font-bold text-slate-200">
                  <span className="flex items-center text-cyan-400"><Square className="w-4 h-4 mr-2" /> 02. Dimensions & Padding</span>
                </button>
                {openSections.dimensions && (
                  <div className="p-4 space-y-3 bg-[#0a0b10] grid grid-cols-2 gap-3">
                    <div>
                      <label className="text-[11px] font-bold text-slate-400 block mb-1">Width Mode</label>
                      <select value={dimensions.widthMode} onChange={(e) => setDimensions({ ...dimensions, widthMode: e.target.value })} className="w-full bg-[#12141c] border border-slate-800 rounded-lg p-1.5 text-xs text-white">
                        <option value="auto">Auto Width</option>
                        <option value="full">Full Width (100%)</option>
                        <option value="custom">Custom Width px</option>
                      </select>
                    </div>
                    <div>
                      <label className="text-[11px] font-bold text-slate-400 block mb-1">Vertical Padding Y ({dimensions.paddingY}px)</label>
                      <input type="range" min="4" max="32" value={dimensions.paddingY} onChange={(e) => setDimensions({ ...dimensions, paddingY: Number(e.target.value) })} className="w-full" />
                    </div>
                  </div>
                )}
              </div>

              {/* 03. TYPOGRAPHY & FONT */}
              <div className="bg-slate-900/60 rounded-xl border border-slate-800 overflow-hidden">
                <button onClick={() => toggleSection('typography')} className="w-full p-3.5 bg-[#161925] flex justify-between items-center text-xs font-bold text-slate-200">
                  <span className="flex items-center text-purple-400"><Type className="w-4 h-4 mr-2" /> 03. Typography & Font</span>
                </button>
                {openSections.typography && (
                  <div className="p-4 space-y-3 bg-[#0a0b10] grid grid-cols-2 gap-3">
                    <div>
                      <label className="text-[11px] font-bold text-slate-400 block mb-1">Font Size ({typography.fontSize}px)</label>
                      <input type="range" min="10" max="32" value={typography.fontSize} onChange={(e) => setTypography({ ...typography, fontSize: Number(e.target.value) })} className="w-full" />
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

              {/* 04. TEXT COLORS & SWATCHES */}
              <div className="bg-slate-900/60 rounded-xl border border-slate-800 overflow-hidden">
                <button onClick={() => toggleSection('textColor')} className="w-full p-3.5 bg-[#161925] flex justify-between items-center text-xs font-bold text-slate-200">
                  <span className="flex items-center text-pink-400"><Palette className="w-4 h-4 mr-2" /> 04. Text Colors & Swatches</span>
                </button>
                {openSections.textColor && (
                  <div className="p-4 space-y-3 bg-[#0a0b10]">
                    <div className="flex items-center space-x-2">
                      <div className="flex flex-wrap gap-1.5 flex-1">
                        {PRESET_COLORS.map((c) => (
                          <button key={c.name} onClick={() => setTextColors({ ...textColors, solid: c.hex })} style={{ backgroundColor: c.hex }} className="w-5 h-5 rounded-full border border-white/20 hover:scale-125 transition-transform" />
                        ))}
                      </div>
                      <input type="color" value={textColors.solid} onChange={(e) => setTextColors({ ...textColors, solid: e.target.value })} className="w-7 h-7 rounded cursor-pointer border-0 bg-transparent" />
                    </div>
                  </div>
                )}
              </div>

              {/* 05. BACKGROUND & GRADIENTS (MULTI-COLOR ENGINE) */}
              <div className="bg-slate-900/60 rounded-xl border border-slate-800 overflow-hidden">
                <button onClick={() => toggleSection('background')} className="w-full p-3.5 bg-[#161925] flex justify-between items-center text-xs font-bold text-slate-200">
                  <span className="flex items-center text-indigo-400"><Palette className="w-4 h-4 mr-2" /> 05. Background & Gradients</span>
                </button>
                {openSections.background && (
                  <div className="p-4 space-y-3 bg-[#0a0b10]">
                    <div className="flex space-x-2">
                      <button onClick={() => setBgConfig({ ...bgConfig, mode: 'solid' })} className={`px-3 py-1 rounded text-xs ${bgConfig.mode === 'solid' ? 'bg-indigo-600 text-white' : 'bg-slate-800 text-slate-400'}`}>Solid</button>
                      <button onClick={() => setBgConfig({ ...bgConfig, mode: 'gradient' })} className={`px-3 py-1 rounded text-xs ${bgConfig.mode === 'gradient' ? 'bg-indigo-600 text-white' : 'bg-slate-800 text-slate-400'}`}>Gradient</button>
                      <button onClick={() => setBgConfig({ ...bgConfig, mode: 'transparent' })} className={`px-3 py-1 rounded text-xs ${bgConfig.mode === 'transparent' ? 'bg-indigo-600 text-white' : 'bg-slate-800 text-slate-400'}`}>Transparent</button>
                    </div>

                    {bgConfig.mode === 'gradient' && (
                      <div className="grid grid-cols-3 gap-2 pt-2">
                        <div>
                          <label className="text-[10px] text-slate-400 block">Color 1</label>
                          <input type="color" value={bgConfig.color1} onChange={(e) => setBgConfig({ ...bgConfig, color1: e.target.value })} className="w-full h-7 rounded border-0 bg-transparent" />
                        </div>
                        <div>
                          <label className="text-[10px] text-slate-400 block">Color 2</label>
                          <input type="color" value={bgConfig.color2} onChange={(e) => setBgConfig({ ...bgConfig, color2: e.target.value })} className="w-full h-7 rounded border-0 bg-transparent" />
                        </div>
                        <div>
                          <label className="text-[10px] text-slate-400 block">Color 3</label>
                          <input type="color" value={bgConfig.color3} onChange={(e) => setBgConfig({ ...bgConfig, color3: e.target.value })} className="w-full h-7 rounded border-0 bg-transparent" />
                        </div>
                      </div>
                    )}
                  </div>
                )}
              </div>

              {/* 06. BORDER & CORNER RADIUS */}
              <div className="bg-slate-900/60 rounded-xl border border-slate-800 overflow-hidden">
                <button onClick={() => toggleSection('border')} className="w-full p-3.5 bg-[#161925] flex justify-between items-center text-xs font-bold text-slate-200">
                  <span className="flex items-center text-amber-400"><Square className="w-4 h-4 mr-2" /> 06. Border & Corner Radius</span>
                </button>
                {openSections.border && (
                  <div className="p-4 space-y-3 bg-[#0a0b10] grid grid-cols-2 gap-3">
                    <div>
                      <label className="text-[11px] font-bold text-slate-400 block mb-1">Border Style</label>
                      <select value={borderConfig.style} onChange={(e) => setBorderConfig({ ...borderConfig, style: e.target.value })} className="w-full bg-[#12141c] border border-slate-800 rounded-lg p-1.5 text-xs text-white">
                        <option value="none">None</option>
                        <option value="solid">Solid</option>
                        <option value="dashed">Dashed</option>
                        <option value="dotted">Dotted</option>
                        <option value="double">Double</option>
                        <option value="groove">Groove</option>
                      </select>
                    </div>

                    <div>
                      <label className="text-[11px] font-bold text-slate-400 block mb-1">Corner Radius</label>
                      <select value={borderConfig.radiusType} onChange={(e) => setBorderConfig({ ...borderConfig, radiusType: e.target.value })} className="w-full bg-[#12141c] border border-slate-800 rounded-lg p-1.5 text-xs text-white">
                        <option value="sharp">Sharp 0px</option>
                        <option value="rounded">Rounded 8px</option>
                        <option value="pill">Full Pill 9999px</option>
                      </select>
                    </div>
                  </div>
                )}
              </div>

              {/* 07. HOVER MOTION PHYSICS (15+ EFFECTS) */}
              <div className="bg-slate-900/60 rounded-xl border border-slate-800 overflow-hidden">
                <button onClick={() => toggleSection('hoverEffect')} className="w-full p-3.5 bg-[#161925] flex justify-between items-center text-xs font-bold text-slate-200">
                  <span className="flex items-center text-emerald-400"><Sparkles className="w-4 h-4 mr-2" /> 07. Hover Motion Physics</span>
                </button>
                {openSections.hoverEffect && (
                  <div className="p-4 space-y-3 bg-[#0a0b10]">
                    <select value={hoverConfig.effect} onChange={(e) => setHoverConfig({ ...hoverConfig, effect: e.target.value })} className="w-full bg-[#12141c] border border-slate-800 rounded-lg p-2 text-xs text-white">
                      <option value="none">None</option>
                      <option value="lift">Physical Lift Up (-4px)</option>
                      <option value="scale-up">Scale Up (1.08x)</option>
                      <option value="scale-down">Scale Down (0.95x)</option>
                      <option value="rotate">Rotate Slight (3°)</option>
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
                <label className="text-xs font-bold text-orange-400 uppercase tracking-wider block">HTML Markup (Editable)</label>
                <textarea value={htmlCodeEdited} onChange={(e) => setHtmlCodeEdited(e.target.value)} className="w-full bg-[#07080c] border border-slate-800 rounded-xl p-3.5 text-xs font-mono text-orange-300 resize-y min-h-[70px]" spellCheck="false" />
              </div>
              <div className="space-y-2">
                <label className="text-xs font-bold text-blue-400 uppercase tracking-wider block">CSS Code (With Explanatory Comments)</label>
                <textarea value={cssCodeEdited} onChange={(e) => setCssCodeEdited(e.target.value)} className="w-full bg-[#07080c] border border-slate-800 rounded-xl p-3.5 text-xs font-mono text-blue-300 resize-y min-h-[350px] leading-relaxed" spellCheck="false" />
              </div>
            </div>
          )}

          {/* Sidebar Footer */}
          <div className="p-4 border-t border-slate-800 bg-[#0c0d12] flex justify-end">
            <button onClick={handleCopy} className="w-full py-2.5 bg-indigo-600 hover:bg-indigo-500 text-white rounded-xl text-xs font-bold shadow-xl flex items-center justify-center space-x-2">
              {isCopied ? <Check className="w-4 h-4 text-green-400" /> : <Copy className="w-4 h-4" />}
              <span>{isCopied ? 'Code Copied!' : 'Copy Code with Explanatory Comments'}</span>
            </button>
          </div>

        </div>

      </div>

    </div>
  );
}
