import React, { useState } from 'react';
import { 
  X, Check, Copy, Sliders, Code2, RotateCcw, Palette, Type, Square, Sparkles, 
  Sun, Moon, ArrowRightLeft, Film, Zap, Activity, Repeat, Eye
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

// Global Keyframes for Live Stage Motion
const STUDIO_KEYFRAMES = `
@keyframes gradientShift {
  0% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
  100% { background-position: 0% 50%; }
}
@keyframes pulseGlow {
  0%, 100% { box-shadow: 0 0 10px rgba(99, 102, 241, 0.4); }
  50% { box-shadow: 0 0 35px rgba(99, 102, 241, 0.9), 0 0 50px rgba(236, 72, 153, 0.6); }
}
@keyframes floatBob {
  0%, 100% { transform: translateY(0px); }
  50% { transform: translateY(-8px); }
}
@keyframes heartbeat {
  0%, 100% { transform: scale(1); }
  14% { transform: scale(1.08); }
  28% { transform: scale(1); }
  42% { transform: scale(1.08); }
  70% { transform: scale(1); }
}
@keyframes attentionShake {
  0%, 100% { transform: translateX(0); }
  20%, 60% { transform: translateX(-5px); }
  40%, 80% { transform: translateX(5px); }
}
@keyframes textShimmer {
  0% { background-position: -200% 0; }
  100% { background-position: 200% 0; }
}
@keyframes textRainbow {
  0% { filter: hue-rotate(0deg); }
  100% { filter: hue-rotate(360deg); }
}
@keyframes letterPulse {
  0%, 100% { letter-spacing: 0px; }
  50% { letter-spacing: 4px; }
}
@keyframes neonBorderPulse {
  0%, 100% { border-color: #6366f1; box-shadow: 0 0 10px #6366f1; }
  50% { border-color: #ec4899; box-shadow: 0 0 25px #ec4899; }
}
@keyframes colorCycle {
  0% { background: #6366f1; }
  25% { background: #ec4899; }
  50% { background: #10b981; }
  75% { background: #f59e0b; }
  100% { background: #6366f1; }
}
`;

export default function ButtonStudioModal({ btn, onClose }) {
  const [activeTab, setActiveTab] = useState('visual'); // 'visual' | 'code'
  const [isCopied, setIsCopied] = useState(false);
  const [stageBg, setStageBg] = useState('dark');

  const allButtons = buttonCategories.flatMap(c => c.subcategories.flatMap(s => s.buttons));
  const [selectedBtn, setSelectedBtn] = useState(btn);

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

  // Open Accordion Sub-Panels
  const [openSections, setOpenSections] = useState({
    buttonAnim: true,
    textAnim: true,
    colorAnim: true,
    borderAnim: true,
    hoverPhysics: true,
    content: false,
    dimensions: false,
    typography: false,
    colors: false,
    border: false,
    shadow: false
  });

  const toggleSection = (sec) => {
    setOpenSections(prev => ({ ...prev, [sec]: !prev[sec] }));
  };

  // 1. Content & Text
  const initialText = selectedBtn.html.match(/>([^<]+)</)?.[1] || "Button";
  const [content, setContent] = useState({ label: initialText });

  // 2. Button Animations (Keyframe Motion)
  const [btnAnim, setBtnAnim] = useState({
    type: 'flowing-gradient', // 'none' | 'flowing-gradient' | 'pulse-aura' | 'floating-bob' | 'heartbeat' | 'attention-shake'
    duration: 3,
    easing: 'ease'
  });

  // 3. Text Animations
  const [textAnim, setTextAnim] = useState({
    type: 'none', // 'none' | 'text-shimmer' | 'text-rainbow' | 'letter-pulse'
    duration: 2.5
  });

  // 4. Background Color Animations
  const [colorAnim, setColorAnim] = useState({
    type: 'none', // 'none' | 'color-cycle' | 'glow-surge'
    duration: 4
  });

  // 5. Border Animations
  const [borderAnim, setBorderAnim] = useState({
    type: 'none', // 'none' | 'neon-border-pulse'
    duration: 2
  });

  // 6. Hover & Physics
  const [hoverConfig, setHoverConfig] = useState({
    effect: 'lift', // 'none' | 'lift' | 'scale-up' | 'scale-down' | 'rotate' | 'shimmer'
    speed: 0.25
  });

  // 7. Typography & Styling
  const [typography, setTypography] = useState({ fontSize: 15, fontWeight: 600 });
  const [colors, setColors] = useState({ text: '#ffffff', bg: '#6366f1', bg2: '#ec4899', hoverBg: '#4338ca' });
  const [bgMode, setBgMode] = useState('gradient');
  const [borderStyle, setBorderStyle] = useState('none');
  const [borderRadius, setBorderRadius] = useState(8);

  const uniqueId = `anim-studio-${selectedBtn.id}`;

  // Dynamically Construct Production CSS with Keyframes
  const buildCssCode = () => {
    let css = `/* ============================================ */\n`;
    css += `/* 1. BASE STYLES & TYPOGRAPHY                  */\n`;
    css += `/* ============================================ */\n`;
    css += `.btn-${uniqueId} {\n`;
    css += `  font-size: ${typography.fontSize}px;\n`;
    css += `  font-weight: ${typography.fontWeight};\n`;
    css += `  color: ${colors.text};\n`;
    css += `  padding: 12px 28px;\n`;
    css += `  border-radius: ${borderRadius === 9999 ? '9999px' : `${borderRadius}px`};\n\n`;

    css += `  /* Background & Gradient Settings */\n`;
    if (bgMode === 'gradient') {
      css += `  background: linear-gradient(135deg, ${colors.bg}, ${colors.bg2});\n`;
      if (btnAnim.type === 'flowing-gradient') {
        css += `  background-size: 300% 300%;\n`;
        css += `  animation: gradientShift ${btnAnim.duration}s ${btnAnim.easing} infinite;\n`;
      }
    } else {
      css += `  background: ${colors.bg};\n`;
    }

    if (colorAnim.type === 'color-cycle') {
      css += `  animation: colorCycle ${colorAnim.duration}s ease infinite;\n`;
    }

    // Button Animations
    if (btnAnim.type === 'pulse-aura') {
      css += `  animation: pulseGlow ${btnAnim.duration}s ease infinite;\n`;
    } else if (btnAnim.type === 'floating-bob') {
      css += `  animation: floatBob ${btnAnim.duration}s ease-in-out infinite;\n`;
    } else if (btnAnim.type === 'heartbeat') {
      css += `  animation: heartbeat ${btnAnim.duration}s ease-in-out infinite;\n`;
    } else if (btnAnim.type === 'attention-shake') {
      css += `  animation: attentionShake ${btnAnim.duration}s ease infinite;\n`;
    }

    // Text Animations
    if (textAnim.type === 'text-rainbow') {
      css += `  animation: textRainbow ${textAnim.duration}s linear infinite;\n`;
    } else if (textAnim.type === 'letter-pulse') {
      css += `  animation: letterPulse ${textAnim.duration}s ease-in-out infinite;\n`;
    }

    // Border Animations
    if (borderAnim.type === 'neon-border-pulse') {
      css += `  border: 2px solid ${colors.bg};\n`;
      css += `  animation: neonBorderPulse ${borderAnim.duration}s ease-in-out infinite;\n`;
    } else if (borderStyle !== 'none') {
      css += `  border: 2px ${borderStyle} ${colors.bg};\n`;
    } else {
      css += `  border: none;\n`;
    }

    css += `  cursor: pointer;\n`;
    css += `  transition: all ${hoverConfig.speed}s cubic-bezier(0.4, 0, 0.2, 1);\n`;
    css += `}\n\n`;

    css += `/* ============================================ */\n`;
    css += `/* 2. HOVER & PHYSICAL CLICK MOTION PHYSICS      */\n`;
    css += `/* ============================================ */\n`;
    css += `.btn-${uniqueId}:hover {\n`;
    if (colors.hoverBg) css += `  background: ${colors.hoverBg};\n`;
    if (hoverConfig.effect === 'lift') css += `  transform: translateY(-4px);\n`;
    if (hoverConfig.effect === 'scale-up') css += `  transform: scale(1.08);\n`;
    if (hoverConfig.effect === 'scale-down') css += `  transform: scale(0.95);\n`;
    if (hoverConfig.effect === 'rotate') css += `  transform: rotate(3deg) scale(1.04);\n`;
    css += `}\n`;

    return css;
  };

  const [cssCodeEdited, setCssCodeEdited] = useState(buildCssCode());
  const [htmlCodeEdited, setHtmlCodeEdited] = useState(`<button class="btn-${uniqueId}">${content.label}</button>`);

  const currentCssCode = activeTab === 'code' ? cssCodeEdited : buildCssCode();
  const currentHtmlCode = activeTab === 'code' ? htmlCodeEdited : `<button class="btn-${uniqueId}">${content.label}</button>`;

  const scopedCss = currentCssCode
    .replace(/(^|\n|\})\s*\.btn-anim-studio-([a-zA-Z0-9_-]+)/g, `$1 %%SCOPE%% .btn-anim-studio-$2`)
    .replace(/%%SCOPE%%/g, `.stage-preview-${uniqueId}`);

  const handleCopy = () => {
    const code = `<!-- HTML Markup -->\n${currentHtmlCode}\n\n/* Production Animated CSS Code */\n<style>\n${STUDIO_KEYFRAMES}\n\n${currentCssCode}\n</style>`;
    navigator.clipboard.writeText(code);
    setIsCopied(true);
    setTimeout(() => setIsCopied(false), 2000);
  };

  return (
    <div className="fixed inset-0 z-[100] bg-black/95 backdrop-blur-md flex flex-col overflow-hidden animate-in fade-in duration-200">
      <style dangerouslySetInnerHTML={{__html: STUDIO_KEYFRAMES}} />

      {/* Top Header Bar */}
      <header className="h-16 bg-[#12141c] border-b border-slate-800 px-6 flex items-center justify-between shrink-0">
        
        {/* Archetype Switcher */}
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

        {/* Title */}
        <div className="hidden md:flex items-center space-x-2 text-xs font-bold text-slate-200">
          <Film className="w-4 h-4 text-pink-500 animate-spin" />
          <span>Maximum Animation & Keyframe Physics Studio</span>
        </div>

        {/* Actions */}
        <div className="flex items-center space-x-3">
          <button onClick={() => setBtnAnim({ type: 'flowing-gradient', duration: 3, easing: 'ease' })} className="flex items-center space-x-1 px-3 py-1.5 bg-slate-800 hover:bg-slate-700 text-slate-300 rounded-lg text-xs font-semibold border border-slate-700">
            <RotateCcw className="w-3.5 h-3.5" />
            <span>Reset Motion</span>
          </button>

          <button onClick={handleCopy} className="flex items-center space-x-1.5 px-4 py-1.5 bg-indigo-600 hover:bg-indigo-500 text-white rounded-lg text-xs font-bold shadow-lg">
            {isCopied ? <Check className="w-4 h-4 text-green-400" /> : <Copy className="w-4 h-4" />}
            <span>{isCopied ? 'Copied!' : 'Copy Code with Keyframes'}</span>
          </button>

          <button onClick={onClose} className="p-1.5 text-slate-400 hover:text-white bg-slate-800/60 rounded-lg ml-2">
            <X className="w-5 h-5" />
          </button>
        </div>
      </header>

      {/* Main Body: Left Stage vs Right Animation Controls */}
      <div className="flex-1 flex flex-col md:flex-row overflow-hidden">
        
        {/* LEFT PANE: Centered Fixed Stage (Plays Animations Live in 60 FPS!) */}
        <div className="flex-1 flex flex-col bg-[#07080c] relative overflow-hidden border-r border-slate-800">
          <div className={`absolute inset-0 transition-opacity ${stageBg === 'dark' ? 'bg-[#07080c]' : stageBg === 'light' ? 'bg-slate-200' : 'bg-slate-900'}`}>
            <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGNpcmNsZSBjeD0iMiIgY3k9IjIiIHI9IjIiIGZpbGw9IiMzMzQxNTUiIGZpbGwtb3BhY2l0eT0iMC4yNSIvPjwvc3ZnPg==')]" />
            <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/10 via-transparent to-pink-500/10" />
          </div>

          <style dangerouslySetInnerHTML={{__html: scopedCss}} />

          {/* Centered Rendered Stage */}
          <div className="flex-1 flex items-center justify-center p-12 relative z-10">
            <div className={`stage-preview-${uniqueId} p-12 border border-slate-800/80 rounded-3xl bg-slate-900/40 backdrop-blur-sm shadow-2xl flex items-center justify-center min-w-[320px] min-h-[220px]`}>
              <div dangerouslySetInnerHTML={{__html: currentHtmlCode}} />
            </div>
          </div>

          {/* Stage Footer Status */}
          <div className="h-12 border-t border-slate-800 bg-[#0f111a]/90 px-6 flex items-center justify-between text-xs text-slate-400 relative z-10">
            <span className="flex items-center font-mono text-pink-400 font-bold">
              <Activity className="w-4 h-4 mr-2 text-pink-500 animate-pulse" /> Live Keyframe Motion Playing at 60 FPS
            </span>
            <div className="flex items-center space-x-2">
              <span className="text-[11px] text-slate-500">Stage Background:</span>
              <button onClick={() => setStageBg('dark')} className={`p-1.5 rounded ${stageBg === 'dark' ? 'bg-indigo-600 text-white' : 'hover:bg-slate-800 text-slate-400'}`}><Moon className="w-3.5 h-3.5" /></button>
              <button onClick={() => setStageBg('light')} className={`p-1.5 rounded ${stageBg === 'light' ? 'bg-indigo-600 text-white' : 'hover:bg-slate-800 text-slate-400'}`}><Sun className="w-3.5 h-3.5" /></button>
            </div>
          </div>
        </div>

        {/* RIGHT PANE: Dedicated Animation & Physics Customizer Sidebar */}
        <div className="w-full md:w-[480px] lg:w-[560px] bg-[#12141c] flex flex-col shrink-0 border-l border-slate-800">
          
          <div className="flex border-b border-slate-800 bg-[#0c0d12]">
            <button onClick={() => setActiveTab('visual')} className={`flex-1 py-3.5 px-4 text-xs font-bold uppercase tracking-wider flex items-center justify-center space-x-2 border-b-2 transition-all ${activeTab === 'visual' ? 'border-pink-500 text-pink-400 bg-pink-500/10' : 'border-transparent text-slate-400 hover:text-white'}`}>
              <Film className="w-4 h-4" />
              <span>Animation & Physics Studio</span>
            </button>
            <button onClick={() => setActiveTab('code')} className={`flex-1 py-3.5 px-4 text-xs font-bold uppercase tracking-wider flex items-center justify-center space-x-2 border-b-2 transition-all ${activeTab === 'code' ? 'border-indigo-500 text-indigo-400 bg-indigo-500/10' : 'border-transparent text-slate-400 hover:text-white'}`}>
              <Code2 className="w-4 h-4" />
              <span>Annotated CSS Code</span>
            </button>
          </div>

          {/* TAB 1: MAXIMUM ANIMATION SUB-PANELS */}
          {activeTab === 'visual' && (
            <div className="flex-1 overflow-y-auto p-5 space-y-4 custom-scrollbar">
              
              {/* 🎬 1. BUTTON KEYFRAME MOTION */}
              <div className="bg-slate-900/60 rounded-xl border border-pink-500/30 overflow-hidden">
                <button onClick={() => toggleSection('buttonAnim')} className="w-full p-3.5 bg-[#161925] flex justify-between items-center text-xs font-bold text-slate-200">
                  <span className="flex items-center text-pink-400"><Film className="w-4 h-4 mr-2" /> 01. Button Keyframe Animations</span>
                </button>
                {openSections.buttonAnim && (
                  <div className="p-4 space-y-3 bg-[#0a0b10]">
                    <div>
                      <label className="text-[11px] font-bold text-slate-400 block mb-1">Button Keyframe Motion Type</label>
                      <select value={btnAnim.type} onChange={(e) => setBtnAnim({ ...btnAnim, type: e.target.value })} className="w-full bg-[#12141c] border border-slate-800 rounded-lg p-2 text-xs text-white">
                        <option value="none">None (Static)</option>
                        <option value="flowing-gradient">🌊 Flowing Multi-Color Gradient Shift</option>
                        <option value="pulse-aura">💫 Beacon Pulse Glow Aura</option>
                        <option value="floating-bob">🎈 Floating Smooth Bobbing Up/Down</option>
                        <option value="heartbeat">💓 Heartbeat Scale Pulse</option>
                        <option value="attention-shake">🔔 Attention Wobble Shake</option>
                      </select>
                    </div>

                    <div>
                      <label className="text-[11px] font-bold text-slate-400 block mb-1">Animation Speed / Duration ({btnAnim.duration}s)</label>
                      <input type="range" min="0.5" max="8.0" step="0.5" value={btnAnim.duration} onChange={(e) => setBtnAnim({ ...btnAnim, duration: Number(e.target.value) })} className="w-full" />
                    </div>
                  </div>
                )}
              </div>

              {/* 🔤 2. TEXT ANIMATIONS */}
              <div className="bg-slate-900/60 rounded-xl border border-indigo-500/30 overflow-hidden">
                <button onClick={() => toggleSection('textAnim')} className="w-full p-3.5 bg-[#161925] flex justify-between items-center text-xs font-bold text-slate-200">
                  <span className="flex items-center text-indigo-400"><Type className="w-4 h-4 mr-2" /> 02. Text Animations</span>
                </button>
                {openSections.textAnim && (
                  <div className="p-4 space-y-3 bg-[#0a0b10]">
                    <div>
                      <label className="text-[11px] font-bold text-slate-400 block mb-1">Text Keyframe Motion</label>
                      <select value={textAnim.type} onChange={(e) => setTextAnim({ ...textAnim, type: e.target.value })} className="w-full bg-[#12141c] border border-slate-800 rounded-lg p-2 text-xs text-white">
                        <option value="none">None</option>
                        <option value="text-rainbow">🌈 Text Rainbow Color Cycle</option>
                        <option value="letter-pulse">↔️ Letter Spacing Expand Pulse</option>
                      </select>
                    </div>

                    <div>
                      <label className="text-[11px] font-bold text-slate-400 block mb-1">Text Motion Speed ({textAnim.duration}s)</label>
                      <input type="range" min="0.5" max="6.0" step="0.5" value={textAnim.duration} onChange={(e) => setTextAnim({ ...textAnim, duration: Number(e.target.value) })} className="w-full" />
                    </div>
                  </div>
                )}
              </div>

              {/* 🌈 3. BACKGROUND COLOR ANIMATIONS */}
              <div className="bg-slate-900/60 rounded-xl border border-purple-500/30 overflow-hidden">
                <button onClick={() => toggleSection('colorAnim')} className="w-full p-3.5 bg-[#161925] flex justify-between items-center text-xs font-bold text-slate-200">
                  <span className="flex items-center text-purple-400"><Palette className="w-4 h-4 mr-2" /> 03. Background Color Animations</span>
                </button>
                {openSections.colorAnim && (
                  <div className="p-4 space-y-3 bg-[#0a0b10]">
                    <div>
                      <label className="text-[11px] font-bold text-slate-400 block mb-1">Background Color Morphing</label>
                      <select value={colorAnim.type} onChange={(e) => setColorAnim({ ...colorAnim, type: e.target.value })} className="w-full bg-[#12141c] border border-slate-800 rounded-lg p-2 text-xs text-white">
                        <option value="none">None</option>
                        <option value="color-cycle">🎨 5-Color Smooth Cycle</option>
                      </select>
                    </div>
                  </div>
                )}
              </div>

              {/* 🔲 4. BORDER ANIMATIONS */}
              <div className="bg-slate-900/60 rounded-xl border border-amber-500/30 overflow-hidden">
                <button onClick={() => toggleSection('borderAnim')} className="w-full p-3.5 bg-[#161925] flex justify-between items-center text-xs font-bold text-slate-200">
                  <span className="flex items-center text-amber-400"><Square className="w-4 h-4 mr-2" /> 04. Border Animations</span>
                </button>
                {openSections.borderAnim && (
                  <div className="p-4 space-y-3 bg-[#0a0b10]">
                    <div>
                      <label className="text-[11px] font-bold text-slate-400 block mb-1">Border Keyframe Animation</label>
                      <select value={borderAnim.type} onChange={(e) => setBorderAnim({ ...borderAnim, type: e.target.value })} className="w-full bg-[#12141c] border border-slate-800 rounded-lg p-2 text-xs text-white">
                        <option value="none">None</option>
                        <option value="neon-border-pulse">⚡ Cyber Neon Border Pulse</option>
                      </select>
                    </div>
                  </div>
                )}
              </div>

              {/* 🏃 5. HOVER & PHYSICAL MOTION PHYSICS */}
              <div className="bg-slate-900/60 rounded-xl border border-emerald-500/30 overflow-hidden">
                <button onClick={() => toggleSection('hoverPhysics')} className="w-full p-3.5 bg-[#161925] flex justify-between items-center text-xs font-bold text-slate-200">
                  <span className="flex items-center text-emerald-400"><Sparkles className="w-4 h-4 mr-2" /> 05. Hover & Motion Physics</span>
                </button>
                {openSections.hoverPhysics && (
                  <div className="p-4 space-y-3 bg-[#0a0b10]">
                    <div>
                      <label className="text-[11px] font-bold text-slate-400 block mb-1">Mouse Hover Interaction</label>
                      <select value={hoverConfig.effect} onChange={(e) => setHoverConfig({ ...hoverConfig, effect: e.target.value })} className="w-full bg-[#12141c] border border-slate-800 rounded-lg p-2 text-xs text-white">
                        <option value="none">None</option>
                        <option value="lift">Physical Lift Up (-4px)</option>
                        <option value="scale-up">Scale Up (1.08x)</option>
                        <option value="scale-down">Scale Down (0.95x)</option>
                        <option value="rotate">Rotate Slight (3°)</option>
                      </select>
                    </div>
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
                <label className="text-xs font-bold text-blue-400 uppercase tracking-wider block">CSS Code (With Keyframes & Explanatory Comments)</label>
                <textarea value={currentCssCode} readOnly className="w-full bg-[#07080c] border border-slate-800 rounded-xl p-3.5 text-xs font-mono text-blue-300 resize-y min-h-[350px] leading-relaxed" spellCheck="false" />
              </div>
            </div>
          )}

          {/* Sidebar Footer */}
          <div className="p-4 border-t border-slate-800 bg-[#0c0d12] flex justify-end">
            <button onClick={handleCopy} className="w-full py-2.5 bg-indigo-600 hover:bg-indigo-500 text-white rounded-xl text-xs font-bold shadow-xl flex items-center justify-center space-x-2">
              {isCopied ? <Check className="w-4 h-4 text-green-400" /> : <Copy className="w-4 h-4" />}
              <span>{isCopied ? 'Code Copied!' : 'Copy Production Code with @keyframes'}</span>
            </button>
          </div>

        </div>

      </div>

    </div>
  );
}
