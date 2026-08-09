import React, { useState } from 'react';
import { X, Check, Copy, Sliders, Code2, RotateCcw, Palette, Type, Square, Sparkles, Sun, Moon, Zap, Settings, ArrowRightLeft } from 'lucide-react';
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
  const [editorMode, setEditorMode] = useState('simple'); // 'simple' | 'advanced'
  const [activeTab, setActiveTab] = useState('visual'); // 'visual' | 'code'
  const [isCopied, setIsCopied] = useState(false);
  const [stageBg, setStageBg] = useState('dark');
  
  // Selected Archetype (Allows switching button type inside Studio!)
  const [currentArchetype, setCurrentArchetype] = useState(btn.id);

  // Initial Label Text
  const initialText = btn.html.match(/>([^<]+)</)?.[1] || "Button";
  const [buttonLabel, setButtonLabel] = useState(initialText);

  // Multi-Color Gradient Engine State
  const [gradientConfig, setGradientConfig] = useState({
    type: 'linear',
    color1: '#6366f1',
    color2: '#ec4899',
    color3: '#3b82f6',
    direction: '135deg' // '90deg' | '180deg' | '135deg' | 'circle'
  });

  // Border Studio State
  const [borderConfig, setBorderConfig] = useState({
    style: 'none', // 'none' | 'solid' | 'dashed' | 'dotted' | 'double' | 'groove'
    width: 2,
    color: '#6366f1',
    radius: 8, // 0 | 6 | 12 | 20 | 9999
    animation: 'none' // 'none' | 'line-draw' | 'neon-pulse'
  });

  // Maximum Hover & Motion Physics State
  const [motionConfig, setMotionConfig] = useState({
    hoverEffect: 'lift', // 'none' | 'lift' | 'scale-up' | 'scale-down' | 'rotate' | 'shimmer' | 'pulse-aura' | 'glitch' | 'glow-surge'
    activeEffect: 'press', // 'none' | 'press' | 'scale-down'
    shadowType: 'none', // 'none' | 'soft' | '3d-elevated' | 'inset' | 'neon-outer'
    shadowColor: '#6366f1'
  });

  // Typography & Colors
  const [colors, setColors] = useState({
    text: '#ffffff',
    bg: '#6366f1',
    hoverBg: '#4338ca',
    hoverText: '#ffffff'
  });
  const [typography, setTypography] = useState({
    fontSize: 15,
    fontWeight: 600,
    textTransform: 'none',
    letterSpacing: 0
  });
  const [bgStyleMode, setBgStyleMode] = useState('solid'); // 'solid' | 'gradient' | 'transparent'

  const uniqueId = `studio-${currentArchetype}`;

  // Dynamically Generate Production CSS
  const buildCssCode = () => {
    let css = `/* ============================================ */\n`;
    css += `/* 1. BUTTON BASE STYLES & TYPOGRAPHY           */\n`;
    css += `/* ============================================ */\n`;
    css += `.btn-${uniqueId} {\n`;
    css += `  /* Typography & Font Settings */\n`;
    css += `  font-size: ${typography.fontSize}px;\n`;
    css += `  font-weight: ${typography.fontWeight};\n`;
    css += `  text-transform: ${typography.textTransform};\n`;
    css += `  letter-spacing: ${typography.letterSpacing}px;\n`;
    css += `  color: ${colors.text};\n\n`;

    css += `  /* Inner Spacing (Padding) & Dimensions */\n`;
    css += `  padding: 12px 28px;\n`;
    css += `  border-radius: ${borderConfig.radius === 9999 ? '9999px' : `${borderConfig.radius}px`};\n\n`;

    css += `  /* Background & Gradient Engine */\n`;
    if (bgStyleMode === 'transparent') {
      css += `  background: transparent;\n`;
    } else if (bgStyleMode === 'gradient') {
      if (gradientConfig.direction === 'circle') {
        css += `  background: radial-gradient(circle, ${gradientConfig.color1}, ${gradientConfig.color2});\n`;
      } else {
        css += `  background: linear-gradient(${gradientConfig.direction}, ${gradientConfig.color1}, ${gradientConfig.color2}, ${gradientConfig.color3});\n`;
      }
    } else {
      css += `  background: ${colors.bg};\n`;
    }
    css += `\n`;

    css += `  /* Border & Outline Configuration */\n`;
    if (borderConfig.style === 'none') {
      css += `  border: none;\n`;
    } else {
      css += `  border: ${borderConfig.width}px ${borderConfig.style} ${borderConfig.color};\n`;
    }
    css += `\n`;

    css += `  /* Shadow & Glow Effects */\n`;
    if (motionConfig.shadowType === 'soft') {
      css += `  box-shadow: 0 4px 15px rgba(99, 102, 241, 0.4);\n`;
    } else if (motionConfig.shadowType === '3d-elevated') {
      css += `  box-shadow: 0 6px 0 ${colors.hoverBg}, 0 10px 20px rgba(0,0,0,0.3);\n`;
    } else if (motionConfig.shadowType === 'neon-outer') {
      css += `  box-shadow: 0 0 20px ${motionConfig.shadowColor};\n`;
    }

    if (motionConfig.hoverEffect === 'pulse-aura') {
      css += `  animation: pulseGlow 2s infinite;\n`;
    } else if (motionConfig.hoverEffect === 'shimmer') {
      css += `  position: relative;\n  overflow: hidden;\n`;
    }

    css += `  cursor: pointer;\n`;
    css += `  transition: all 0.25s cubic-bezier(0.4, 0, 0.2, 1);\n`;
    css += `}\n\n`;

    css += `/* ============================================ */\n`;
    css += `/* 2. HOVER & CLICK MOTION PHYSICS               */\n`;
    css += `/* ============================================ */\n`;
    css += `.btn-${uniqueId}:hover {\n`;
    if (colors.hoverBg) css += `  background: ${colors.hoverBg};\n`;
    if (colors.hoverText) css += `  color: ${colors.hoverText};\n`;
    if (motionConfig.hoverEffect === 'lift') css += `  transform: translateY(-4px);\n`;
    if (motionConfig.hoverEffect === 'scale-up') css += `  transform: scale(1.08);\n`;
    if (motionConfig.hoverEffect === 'scale-down') css += `  transform: scale(0.95);\n`;
    if (motionConfig.hoverEffect === 'rotate') css += `  transform: rotate(3deg) scale(1.04);\n`;
    css += `}\n\n`;

    css += `.btn-${uniqueId}:active {\n`;
    if (motionConfig.activeEffect === 'press') css += `  transform: translateY(2px);\n`;
    if (motionConfig.activeEffect === 'scale-down') css += `  transform: scale(0.96);\n`;
    css += `}\n`;

    return css;
  };

  const [cssCodeEdited, setCssCodeEdited] = useState(buildCssCode());
  const [htmlCodeEdited, setHtmlCodeEdited] = useState(`<button class="btn-${uniqueId}">${buttonLabel}</button>`);

  const currentCssCode = activeTab === 'code' ? cssCodeEdited : buildCssCode();
  const currentHtmlCode = activeTab === 'code' ? htmlCodeEdited : `<button class="btn-${uniqueId}">${buttonLabel}</button>`;

  // Safe Scoped CSS
  const scopedCss = currentCssCode
    .replace(/(^|\n|\})\s*\.btn-studio-([a-zA-Z0-9_-]+)/g, `$1 %%SCOPE%% .btn-studio-$2`)
    .replace(/%%SCOPE%%/g, `.stage-preview-${uniqueId}`);

  const handleCopy = () => {
    const code = `<!-- HTML Markup -->\n${currentHtmlCode}\n\n/* Production CSS Code */\n<style>\n${currentCssCode}\n</style>`;
    navigator.clipboard.writeText(code);
    setIsCopied(true);
    setTimeout(() => setIsCopied(false), 2000);
  };

  const handleReset = () => {
    setButtonLabel(initialText);
    setBgStyleMode('solid');
    setMotionConfig({ hoverEffect: 'lift', activeEffect: 'press', shadowType: 'none', shadowColor: '#6366f1' });
    setBorderConfig({ style: 'none', width: 2, color: '#6366f1', radius: 8, animation: 'none' });
  };

  return (
    <div className="fixed inset-0 z-[100] bg-black/95 backdrop-blur-md flex flex-col overflow-hidden animate-in fade-in duration-200">
      
      {/* Top Header Bar with Archetype Switcher & Mode Selector */}
      <header className="h-16 bg-[#12141c] border-b border-slate-800 px-6 flex items-center justify-between shrink-0">
        
        {/* Left: Archetype Switcher Dropdown */}
        <div className="flex items-center space-x-3">
          <span className="text-xs font-bold uppercase tracking-wider text-indigo-400 flex items-center">
            <ArrowRightLeft className="w-4 h-4 mr-1.5" /> Archetype:
          </span>
          <select 
            value={currentArchetype}
            onChange={(e) => setCurrentArchetype(e.target.value)}
            className="bg-slate-900 border border-indigo-500/40 text-white text-xs font-bold rounded-lg px-3 py-1.5 focus:outline-none focus:border-indigo-400"
          >
            {buttonCategories.flatMap(c => c.subcategories.flatMap(s => s.buttons)).map(b => (
              <option key={b.id} value={b.id}>{b.name}</option>
            ))}
          </select>
        </div>

        {/* Center: Mode Switcher (Simple vs Advanced Studio) */}
        <div className="flex bg-slate-950 p-1 rounded-xl border border-slate-800">
          <button 
            onClick={() => setEditorMode('simple')}
            className={`px-3 py-1 rounded-lg text-xs font-bold transition-all flex items-center space-x-1 ${editorMode === 'simple' ? 'bg-indigo-600 text-white shadow-md' : 'text-slate-400 hover:text-white'}`}
          >
            <Zap className="w-3.5 h-3.5 mr-1" />
            <span>⚡ Simple Mode</span>
          </button>

          <button 
            onClick={() => setEditorMode('advanced')}
            className={`px-3 py-1 rounded-lg text-xs font-bold transition-all flex items-center space-x-1 ${editorMode === 'advanced' ? 'bg-purple-600 text-white shadow-md' : 'text-slate-400 hover:text-white'}`}
          >
            <Settings className="w-3.5 h-3.5 mr-1" />
            <span>🛠️ Advanced Mode (Full Control)</span>
          </button>
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

      {/* Main Split Body: Left Centered Fixed Stage vs Right Controls Sidebar */}
      <div className="flex-1 flex flex-col md:flex-row overflow-hidden">
        
        {/* LEFT PANE: Centered Fixed Stage (Stays 100% visible on hover!) */}
        <div className="flex-1 flex flex-col bg-[#07080c] relative overflow-hidden border-r border-slate-800">
          <div className={`absolute inset-0 transition-opacity ${stageBg === 'dark' ? 'bg-[#07080c]' : stageBg === 'light' ? 'bg-slate-200' : 'bg-slate-900'}`}>
            <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGNpcmNsZSBjeD0iMiIgY3k9IjIiIHI9IjIiIGZpbGw9IiMzMzQxNTUiIGZpbGwtb3BhY2l0eT0iMC4yNSIvPjwvc3ZnPg==')]" />
            <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/10 via-transparent to-purple-500/10" />
          </div>

          <style dangerouslySetInnerHTML={{__html: scopedCss}} />

          {/* Centered Rendered Button Stage */}
          <div className="flex-1 flex items-center justify-center p-12 relative z-10">
            <div className={`stage-preview-${uniqueId} p-12 border border-slate-800/80 rounded-3xl bg-slate-900/40 backdrop-blur-sm shadow-2xl flex items-center justify-center min-w-[320px] min-h-[220px]`}>
              <div dangerouslySetInnerHTML={{__html: currentHtmlCode}} />
            </div>
          </div>

          {/* Stage Footer */}
          <div className="h-12 border-t border-slate-800 bg-[#0f111a]/90 px-6 flex items-center justify-between text-xs text-slate-400 relative z-10">
            <span className="flex items-center font-mono text-indigo-400">
              <Sparkles className="w-3.5 h-3.5 mr-1.5" /> Stage Status: Mouse Hover Reflects Live Motion Effect
            </span>
            <div className="flex items-center space-x-2">
              <span className="text-[11px] text-slate-500">Stage Background:</span>
              <button onClick={() => setStageBg('dark')} className={`p-1.5 rounded ${stageBg === 'dark' ? 'bg-indigo-600 text-white' : 'hover:bg-slate-800 text-slate-400'}`}><Moon className="w-3.5 h-3.5" /></button>
              <button onClick={() => setStageBg('light')} className={`p-1.5 rounded ${stageBg === 'light' ? 'bg-indigo-600 text-white' : 'hover:bg-slate-800 text-slate-400'}`}><Sun className="w-3.5 h-3.5" /></button>
            </div>
          </div>
        </div>

        {/* RIGHT PANE: Controls Sidebar */}
        <div className="w-full md:w-[480px] lg:w-[560px] bg-[#12141c] flex flex-col shrink-0 border-l border-slate-800">
          
          {/* Tab Navigation: Controls vs Code */}
          <div className="flex border-b border-slate-800 bg-[#0c0d12]">
            <button
              onClick={() => setActiveTab('visual')}
              className={`flex-1 py-3.5 px-4 text-xs font-bold uppercase tracking-wider flex items-center justify-center space-x-2 border-b-2 transition-all ${activeTab === 'visual' ? 'border-purple-500 text-purple-400 bg-purple-500/10' : 'border-transparent text-slate-400 hover:text-white'}`}
            >
              <Sliders className="w-4 h-4" />
              <span>{editorMode === 'simple' ? '⚡ Simple Controls' : '🛠️ Full Control Studio'}</span>
            </button>
            
            <button
              onClick={() => setActiveTab('code')}
              className={`flex-1 py-3.5 px-4 text-xs font-bold uppercase tracking-wider flex items-center justify-center space-x-2 border-b-2 transition-all ${activeTab === 'code' ? 'border-indigo-500 text-indigo-400 bg-indigo-500/10' : 'border-transparent text-slate-400 hover:text-white'}`}
            >
              <Code2 className="w-4 h-4" />
              <span>Annotated CSS Code</span>
            </button>
          </div>

          {/* TAB 1: VISUAL CONTROLS */}
          {activeTab === 'visual' && (
            <div className="flex-1 overflow-y-auto p-6 space-y-6 custom-scrollbar">
              
              {/* MODE 1: SIMPLE QUICK CONTROLS */}
              {editorMode === 'simple' && (
                <div className="space-y-6 animate-in fade-in duration-200">
                  <div className="bg-slate-900/60 p-4 rounded-xl border border-slate-800 space-y-2">
                    <label className="text-xs font-bold text-slate-300 uppercase tracking-wider block">Button Label Text</label>
                    <input type="text" value={buttonLabel} onChange={(e) => setButtonLabel(e.target.value)} className="w-full bg-[#07080c] border border-slate-700 rounded-lg p-2.5 text-sm text-white" />
                  </div>

                  <div className="bg-slate-900/60 p-4 rounded-xl border border-slate-800 space-y-3">
                    <label className="text-xs font-bold text-slate-300 uppercase tracking-wider block">Primary Color Swatches</label>
                    <div className="flex items-center space-x-2">
                      <div className="flex flex-wrap gap-1.5 flex-1">
                        {PRESET_COLORS.map((c) => (
                          <button key={c.name} onClick={() => setColors({ ...colors, bg: c.hex })} style={{ backgroundColor: c.hex }} className="w-6 h-6 rounded-full border border-white/20 hover:scale-125 transition-transform" />
                        ))}
                      </div>
                      <input type="color" value={colors.bg} onChange={(e) => setColors({ ...colors, bg: e.target.value })} className="w-7 h-7 rounded cursor-pointer border-0 bg-transparent" />
                    </div>
                  </div>

                  <div className="bg-slate-900/60 p-4 rounded-xl border border-slate-800 grid grid-cols-2 gap-4">
                    <div>
                      <label className="text-xs font-bold text-slate-400 block mb-1">Corner Shape</label>
                      <select value={borderConfig.radius} onChange={(e) => setBorderConfig({ ...borderConfig, radius: Number(e.target.value) })} className="w-full bg-[#07080c] border border-slate-700 rounded-lg p-2 text-xs text-white">
                        <option value="0">Sharp 0px</option>
                        <option value="8">Rounded 8px</option>
                        <option value="9999">Full Pill</option>
                      </select>
                    </div>

                    <div>
                      <label className="text-xs font-bold text-slate-400 block mb-1">Hover Physics</label>
                      <select value={motionConfig.hoverEffect} onChange={(e) => setMotionConfig({ ...motionConfig, hoverEffect: e.target.value })} className="w-full bg-[#07080c] border border-slate-700 rounded-lg p-2 text-xs text-white">
                        <option value="none">None</option>
                        <option value="lift">Physical Lift Up</option>
                        <option value="scale-up">Scale Up 1.08x</option>
                        <option value="shimmer">Shimmer Sweep</option>
                      </select>
                    </div>
                  </div>
                </div>
              )}

              {/* MODE 2: ADVANCED FULL CONTROL STUDIO */}
              {editorMode === 'advanced' && (
                <div className="space-y-6 animate-in fade-in duration-200">
                  
                  {/* MULTI-COLOR GRADIENT ENGINE */}
                  <div className="bg-slate-900/60 p-4 rounded-xl border border-purple-500/30 space-y-4">
                    <div className="flex justify-between items-center border-b border-slate-800 pb-2">
                      <span className="text-xs font-bold text-purple-400 uppercase tracking-wider flex items-center">
                        <Palette className="w-4 h-4 mr-1.5" /> Multi-Color Gradient Engine
                      </span>
                      <button onClick={() => setBgStyleMode(bgStyleMode === 'gradient' ? 'solid' : 'gradient')} className={`px-2 py-0.5 rounded text-[10px] ${bgStyleMode === 'gradient' ? 'bg-purple-600 text-white' : 'bg-slate-800 text-slate-400'}`}>
                        {bgStyleMode === 'gradient' ? 'Gradient Active' : 'Enable Gradient'}
                      </button>
                    </div>

                    {bgStyleMode === 'gradient' && (
                      <>
                        <div className="grid grid-cols-3 gap-2">
                          <div>
                            <label className="text-[10px] font-bold text-slate-400 block mb-1">Color 1</label>
                            <input type="color" value={gradientConfig.color1} onChange={(e) => setGradientConfig({ ...gradientConfig, color1: e.target.value })} className="w-full h-7 rounded cursor-pointer border-0 bg-transparent" />
                          </div>
                          <div>
                            <label className="text-[10px] font-bold text-slate-400 block mb-1">Color 2</label>
                            <input type="color" value={gradientConfig.color2} onChange={(e) => setGradientConfig({ ...gradientConfig, color2: e.target.value })} className="w-full h-7 rounded cursor-pointer border-0 bg-transparent" />
                          </div>
                          <div>
                            <label className="text-[10px] font-bold text-slate-400 block mb-1">Color 3</label>
                            <input type="color" value={gradientConfig.color3} onChange={(e) => setGradientConfig({ ...gradientConfig, color3: e.target.value })} className="w-full h-7 rounded cursor-pointer border-0 bg-transparent" />
                          </div>
                        </div>

                        <div>
                          <label className="text-[10px] font-bold text-slate-400 block mb-1">Gradient Direction</label>
                          <select value={gradientConfig.direction} onChange={(e) => setGradientConfig({ ...gradientConfig, direction: e.target.value })} className="w-full bg-[#07080c] border border-slate-700 rounded-lg p-2 text-xs text-white">
                            <option value="90deg">Horizontal (Left to Right 90°)</option>
                            <option value="180deg">Vertical (Top to Bottom 180°)</option>
                            <option value="135deg">Diagonal (135°)</option>
                            <option value="circle">Radial Center Circle</option>
                          </select>
                        </div>
                      </>
                    )}
                  </div>

                  {/* EXHAUSTIVE BORDER & OUTLINE STUDIO */}
                  <div className="bg-slate-900/60 p-4 rounded-xl border border-amber-500/30 space-y-4">
                    <span className="text-xs font-bold text-amber-400 uppercase tracking-wider block border-b border-slate-800 pb-2 flex items-center">
                      <Square className="w-4 h-4 mr-1.5" /> Border & Outline Studio
                    </span>

                    <div className="grid grid-cols-2 gap-3">
                      <div>
                        <label className="text-[10px] font-bold text-slate-400 block mb-1">Border Line Style</label>
                        <select value={borderConfig.style} onChange={(e) => setBorderConfig({ ...borderConfig, style: e.target.value })} className="w-full bg-[#07080c] border border-slate-700 rounded-lg p-2 text-xs text-white">
                          <option value="none">None</option>
                          <option value="solid">Solid</option>
                          <option value="dashed">Dashed</option>
                          <option value="dotted">Dotted</option>
                          <option value="double">Double</option>
                          <option value="groove">Groove</option>
                        </select>
                      </div>

                      <div>
                        <label className="text-[10px] font-bold text-slate-400 block mb-1">Border Width ({borderConfig.width}px)</label>
                        <input type="range" min="1" max="8" value={borderConfig.width} onChange={(e) => setBorderConfig({ ...borderConfig, width: Number(e.target.value) })} className="w-full" />
                      </div>
                    </div>

                    <div className="flex items-center justify-between">
                      <span className="text-[11px] font-bold text-slate-400">Border Color</span>
                      <input type="color" value={borderConfig.color} onChange={(e) => setBorderConfig({ ...borderConfig, color: e.target.value })} className="w-6 h-6 rounded cursor-pointer border-0 bg-transparent" />
                    </div>
                  </div>

                  {/* MAXIMUM HOVER & MOTION PHYSICS (15+ EFFECTS) */}
                  <div className="bg-slate-900/60 p-4 rounded-xl border border-emerald-500/30 space-y-4">
                    <span className="text-xs font-bold text-emerald-400 uppercase tracking-wider block border-b border-slate-800 pb-2 flex items-center">
                      <Sparkles className="w-4 h-4 mr-1.5" /> Maximum Hover & Motion Physics (15+ Effects)
                    </span>

                    <div>
                      <label className="text-[10px] font-bold text-slate-400 block mb-1">Hover Animation Physics</label>
                      <select value={motionConfig.hoverEffect} onChange={(e) => setMotionConfig({ ...motionConfig, hoverEffect: e.target.value })} className="w-full bg-[#07080c] border border-slate-700 rounded-lg p-2 text-xs text-white">
                        <option value="none">None</option>
                        <option value="lift">Physical Lift Up (-4px)</option>
                        <option value="scale-up">Scale Up (1.08x)</option>
                        <option value="scale-down">Scale Down (0.95x)</option>
                        <option value="rotate">Rotate Slight (3°)</option>
                        <option value="shimmer">Shimmer Light Sweep</option>
                        <option value="pulse-aura">Pulsing Ring Aura</option>
                      </select>
                    </div>

                    <div>
                      <label className="text-[10px] font-bold text-slate-400 block mb-1">Active / Click Press Effect</label>
                      <select value={motionConfig.activeEffect} onChange={(e) => setMotionConfig({ ...motionConfig, activeEffect: e.target.value })} className="w-full bg-[#07080c] border border-slate-700 rounded-lg p-2 text-xs text-white">
                        <option value="none">None</option>
                        <option value="press">3D Push Down (+2px)</option>
                        <option value="scale-down">Scale Down (0.96x)</option>
                      </select>
                    </div>
                  </div>

                </div>
              )}

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
                <label className="text-xs font-bold text-blue-400 uppercase tracking-wider block">CSS Code (With Educational Comments)</label>
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
