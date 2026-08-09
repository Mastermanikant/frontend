import React, { useState } from 'react';
import { 
  X, Check, Copy, Sliders, Code2, RotateCcw, Palette, Type, Square, Sparkles, 
  Sun, Moon, ArrowRightLeft, Film, Activity, Shuffle, Zap, Orbit
} from 'lucide-react';
import { buttonCategories } from '../data/buttonLibraryData';

const PRESET_COLORS = [
  { name: 'Indigo', hex: '#6366f1' },
  { name: 'Emerald', hex: '#10b981' },
  { name: 'Cyan', hex: '#00d4ff' },
  { name: 'Rose', hex: '#f43f5e' },
  { name: 'Amber', hex: '#f59e0b' },
  { name: 'Violet', hex: '#8b5cf6' },
  { name: 'Cyber Pink', hex: '#ff0055' },
  { name: 'Gold', hex: '#eab308' },
  { name: 'White', hex: '#ffffff' },
  { name: 'Dark', hex: '#0f172a' }
];

// Complete Keyframes with Rotating Conic Border Animations
const LAB_KEYFRAMES = `
@keyframes spinBorder {
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
}
@keyframes sweepBorder {
  0% { transform: translateX(-100%); }
  100% { transform: translateX(100%); }
}
@keyframes neonBorder {
  0%, 100% { opacity: 0.4; filter: blur(2px); }
  50% { opacity: 1; filter: blur(8px); }
}
@keyframes borderPulse {
  0%, 100% { transform: scale(1); opacity: 0.8; }
  50% { transform: scale(1.06); opacity: 0.3; }
}
@keyframes gradientBorder {
  0% { background-position: 0% 0%; }
  100% { background-position: 300% 0%; }
}

@keyframes btnPulse{50%{transform:scale(1.06)}}
@keyframes btnBounce{0%,100%{transform:translateY(0)}50%{transform:translateY(-14px)}}
@keyframes btnShake{0%,100%{transform:translateX(0)}20%{transform:translateX(-8px)}40%{transform:translateX(8px)}60%{transform:translateX(-5px)}80%{transform:translateX(5px)}}
@keyframes btnFloat{50%{transform:translateY(-10px)}}
@keyframes heartbeat{0%,40%,80%,100%{transform:scale(1)}20%,60%{transform:scale(1.08)}}
@keyframes swing{20%{transform:rotate(7deg)}40%{transform:rotate(-5deg)}60%{transform:rotate(3deg)}80%{transform:rotate(-2deg)}}
@keyframes jello{30%{transform:skewX(-10deg) skewY(-5deg)}50%{transform:skewX(7deg) skewY(3deg)}70%{transform:skewX(-3deg)}}
@keyframes wobble{25%{transform:translateX(-8%) rotate(-3deg)}50%{transform:translateX(6%) rotate(2deg)}75%{transform:translateX(-3%) rotate(-1deg)}}
@keyframes rotate360{to{transform:rotate(360deg)}}
@keyframes pop{0%,100%{transform:scale(1)}50%{transform:scale(1.12)}}
@keyframes rubber{30%{transform:scaleX(1.2) scaleY(.8)}60%{transform:scaleX(.85) scaleY(1.15)}}
@keyframes tada{10%,20%{transform:scale(.95) rotate(-3deg)}30%,50%,70%,90%{transform:scale(1.05) rotate(3deg)}40%,60%,80%{transform:scale(1.05) rotate(-3deg)}}
@keyframes bgPulse{50%{background:#8178ff}}
@keyframes bgBreathe{50%{background:#252d72}}
@keyframes rainbow{0%{filter:hue-rotate(0)}100%{filter:hue-rotate(360deg)}}
@keyframes gradientMove{to{background-position:300% 0}}
@keyframes textShimmer{to{background-position:-250% 0}}
@keyframes textRainbow{to{filter:hue-rotate(360deg)}}
@keyframes textWave{0%,100%{transform:translateY(0)}50%{transform:translateY(-7px) rotate(-2deg)}}
@keyframes glitch{0%,100%{transform:translate(0)}25%{transform:translate(-2px,1px)}50%{transform:translate(2px,-1px)}75%{transform:translate(-1px,2px)}}
`;

export default function ButtonStudioModal({ btn, onClose }) {
  const [activeTab, setActiveTab] = useState('visual');
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

  // Open Accordion Sections State
  const [openSections, setOpenSections] = useState({
    rotatingBorder: true, // Opened by default for immediate visibility!
    btnMotion: false,
    bgColorAnim: false,
    textAnim: false,
    hoverPhysics: false,
    multiGradient: false,
    borderStudio: false
  });

  const toggleSection = (sec) => {
    setOpenSections(prev => ({ ...prev, [sec]: !prev[sec] }));
  };

  // 1. Content & Label
  const initialText = selectedBtn.html.match(/>([^<]+)</)?.[1] || "Button";
  const [content, setContent] = useState({ label: initialText });

  // 2. Global Speed Slider
  const [duration, setDuration] = useState(1.5);

  // 3. Rotating Conic Border Animation State
  const [borderAnim, setBorderAnim] = useState('b-spin'); // 'b-spin' (Rotating Conic Beam) | 'b-sweep' | 'b-neon' | 'b-pulse' | 'b-gradient' | 'none'
  const [borderColor, setBorderColor] = useState('#00d4ff'); // Beam Color!

  // 4. Other Motion States
  const [btnMotion, setBtnMotion] = useState('none');
  const [bgColorAnim, setBgColorAnim] = useState('c-gradient');
  const [textAnim, setTextAnim] = useState('none');
  const [hoverEffect, setHoverEffect] = useState('h-lift');

  // 5. Multi-Color Gradient State
  const [gradientConfig, setGradientConfig] = useState({
    enabled: true,
    color1: '#6257ff',
    color2: '#00d4ff',
    color3: '#ff2f92',
    direction: '90deg'
  });

  // 6. Base Typography & Controls
  const [typography, setTypography] = useState({ fontSize: 18, fontWeight: 700 });
  const [colors, setColors] = useState({ text: '#ffffff', bg: '#111522' });
  const [borderRadius, setBorderRadius] = useState(14);

  const uniqueId = `anim-studio-${selectedBtn.id}`;

  // Randomizer
  const handleRandomize = () => {
    const borderAnims = ['b-spin', 'b-sweep', 'b-neon', 'b-pulse', 'b-gradient'];
    const motions = ['a-pulse', 'a-bounce', 'a-float', 'a-heartbeat', 'a-swing'];
    const randColor = PRESET_COLORS[Math.floor(Math.random() * PRESET_COLORS.length)].hex;

    setBorderAnim(borderAnims[Math.floor(Math.random() * borderAnims.length)]);
    setBtnMotion(motions[Math.floor(Math.random() * motions.length)]);
    setBorderColor(randColor);
  };

  // Build Production CSS Code including Rotating Conic Border ::before Pseudo Element!
  const buildCssCode = () => {
    let css = `/* ============================================ */\n`;
    css += `/* 1. BUTTON BASE STYLES & ISOLATION CONTAINER  */\n`;
    css += `/* ============================================ */\n`;
    css += `.btn-${uniqueId} {\n`;
    css += `  --duration: ${duration}s;\n`;
    css += `  font-size: ${typography.fontSize}px;\n`;
    css += `  font-weight: ${typography.fontWeight};\n`;
    css += `  color: ${colors.text};\n`;
    css += `  padding: 14px 34px;\n`;
    css += `  border-radius: ${borderRadius === 9999 ? '9999px' : `${borderRadius}px`};\n`;
    css += `  position: relative;\n`;
    css += `  isolation: isolate;\n`;
    css += `  overflow: visible;\n`;
    css += `  cursor: pointer;\n`;
    css += `  transition: 0.25s ease;\n`;

    if (gradientConfig.enabled) {
      css += `  background: linear-gradient(${gradientConfig.direction}, ${gradientConfig.color1}, ${gradientConfig.color2}, ${gradientConfig.color3});\n`;
      css += `  background-size: 300% 100%;\n`;
    } else {
      css += `  background: ${colors.bg};\n`;
    }
    css += `  border: 2px solid transparent;\n`;
    css += `}\n\n`;

    // 💫 ROTATING CONIC BORDER BEAM ::before PSEUDO ELEMENT RULES!
    css += `/* ============================================ */\n`;
    css += `/* 2. ROTATING CONIC BORDER BEAM ANIMATION      */\n`;
    css += `/* ============================================ */\n`;

    if (borderAnim === 'b-spin') {
      css += `.btn-${uniqueId}::before {\n`;
      css += `  content: "";\n`;
      css += `  position: absolute;\n`;
      css += `  inset: -3px;\n`;
      css += `  border-radius: inherit;\n`;
      css += `  pointer-events: none;\n`;
      css += `  padding: 3px;\n`;
      css += `  background: conic-gradient(from 0deg, transparent 0 60%, ${borderColor} 75%, #ff0055 90%, transparent 98%);\n`;
      css += `  -webkit-mask: linear-gradient(#000 0 0) content-box, linear-gradient(#000 0 0);\n`;
      css += `  -webkit-mask-composite: xor;\n`;
      css += `  mask-composite: exclude;\n`;
      css += `  animation: spinBorder ${duration * 1.5}s linear infinite;\n`;
      css += `  z-index: 2;\n`;
      css += `}\n\n`;
    } else if (borderAnim === 'b-sweep') {
      css += `.btn-${uniqueId}::before {\n`;
      css += `  content: "";\n`;
      css += `  position: absolute;\n`;
      css += `  inset: -3px;\n`;
      css += `  border-radius: inherit;\n`;
      css += `  pointer-events: none;\n`;
      css += `  border: 2px solid transparent;\n`;
      css += `  background: linear-gradient(90deg, transparent, ${borderColor}, transparent) border-box;\n`;
      css += `  -webkit-mask: linear-gradient(#000 0 0) padding-box, linear-gradient(#000 0 0);\n`;
      css += `  -webkit-mask-composite: xor;\n`;
      css += `  mask-composite: exclude;\n`;
      css += `  animation: sweepBorder ${duration * 1.4}s linear infinite;\n`;
      css += `  z-index: 2;\n`;
      css += `}\n\n`;
    } else if (borderAnim === 'b-neon') {
      css += `.btn-${uniqueId}::before {\n`;
      css += `  content: "";\n`;
      css += `  position: absolute;\n`;
      css += `  inset: -3px;\n`;
      css += `  border-radius: inherit;\n`;
      css += `  pointer-events: none;\n`;
      css += `  border: 3px solid ${borderColor};\n`;
      css += `  filter: blur(4px);\n`;
      css += `  animation: neonBorder ${duration}s ease-in-out infinite;\n`;
      css += `  z-index: -1;\n`;
      css += `}\n\n`;
    } else if (borderAnim === 'b-pulse') {
      css += `.btn-${uniqueId}::before {\n`;
      css += `  content: "";\n`;
      css += `  position: absolute;\n`;
      css += `  inset: -4px;\n`;
      css += `  border-radius: inherit;\n`;
      css += `  pointer-events: none;\n`;
      css += `  border: 3px solid ${borderColor};\n`;
      css += `  animation: borderPulse ${duration}s ease-in-out infinite;\n`;
      css += `  z-index: -1;\n`;
      css += `}\n\n`;
    }

    // Button Motion
    if (btnMotion === 'a-pulse') css += `.btn-${uniqueId} { animation: btnPulse ${duration}s ease-in-out infinite; }\n`;
    if (btnMotion === 'a-bounce') css += `.btn-${uniqueId} { animation: btnBounce ${duration}s ease-in-out infinite; }\n`;
    if (btnMotion === 'a-float') css += `.btn-${uniqueId} { animation: btnFloat ${duration}s ease-in-out infinite; }\n`;
    if (btnMotion === 'a-heartbeat') css += `.btn-${uniqueId} { animation: heartbeat ${duration}s ease-in-out infinite; }\n`;

    // Background Color
    if (bgColorAnim === 'c-gradient') css += `.btn-${uniqueId} { animation: gradientMove ${duration * 2}s linear infinite; }\n`;
    if (bgColorAnim === 'c-rainbow') css += `.btn-${uniqueId} { animation: rainbow ${duration * 3}s linear infinite; }\n`;

    // Hover
    css += `\n/* Hover Interaction */\n`;
    if (hoverEffect === 'h-lift') css += `.btn-${uniqueId}:hover { transform: translateY(-8px); box-shadow: 0 18px 35px rgba(0,0,0,0.6); }\n`;
    if (hoverEffect === 'h-scale') css += `.btn-${uniqueId}:hover { transform: scale(1.08); }\n`;

    return css;
  };

  const [cssCodeEdited, setCssCodeEdited] = useState(buildCssCode());
  const [htmlCodeEdited, setHtmlCodeEdited] = useState(`<button class="btn-${uniqueId}"><span class="label">${content.label}</span></button>`);

  const currentCssCode = activeTab === 'code' ? cssCodeEdited : buildCssCode();
  const currentHtmlCode = activeTab === 'code' ? htmlCodeEdited : `<button class="btn-${uniqueId}"><span class="label">${content.label}</span></button>`;

  const scopedCss = currentCssCode
    .replace(/(^|\n|\})\s*\.btn-anim-studio-([a-zA-Z0-9_-]+)/g, `$1 %%SCOPE%% .btn-anim-studio-$2`)
    .replace(/%%SCOPE%%/g, `.stage-preview-${uniqueId}`);

  const handleCopy = () => {
    const code = `<!-- HTML Markup -->\n${currentHtmlCode}\n\n/* Production CSS Code with Rotating Border Beam @keyframes */\n<style>\n${LAB_KEYFRAMES}\n\n${currentCssCode}\n</style>`;
    navigator.clipboard.writeText(code);
    setIsCopied(true);
    setTimeout(() => setIsCopied(false), 2000);
  };

  return (
    <div className="fixed inset-0 z-[100] bg-black/95 backdrop-blur-md flex flex-col overflow-hidden animate-in fade-in duration-200">
      <style dangerouslySetInnerHTML={{__html: LAB_KEYFRAMES}} />

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

        {/* 🎲 Random Combination Button */}
        <button 
          onClick={handleRandomize}
          className="flex items-center space-x-1.5 px-3.5 py-1.5 bg-gradient-to-r from-pink-600 to-purple-600 hover:from-pink-500 hover:to-purple-500 text-white rounded-lg text-xs font-bold shadow-lg transition-all transform hover:scale-105"
        >
          <Shuffle className="w-3.5 h-3.5" />
          <span>🎲 Random Combination</span>
        </button>

        {/* Actions */}
        <div className="flex items-center space-x-3">
          <button onClick={() => { setBorderAnim('none'); setBtnMotion('none'); setBgColorAnim('none'); }} className="flex items-center space-x-1 px-3 py-1.5 bg-slate-800 hover:bg-slate-700 text-slate-300 rounded-lg text-xs font-semibold border border-slate-700">
            <RotateCcw className="w-3.5 h-3.5" />
            <span>Reset</span>
          </button>

          <button onClick={handleCopy} className="flex items-center space-x-1.5 px-4 py-1.5 bg-indigo-600 hover:bg-indigo-500 text-white rounded-lg text-xs font-bold shadow-lg">
            {isCopied ? <Check className="w-4 h-4 text-green-400" /> : <Copy className="w-4 h-4" />}
            <span>{isCopied ? 'Copied!' : 'Copy Code'}</span>
          </button>

          <button onClick={onClose} className="p-1.5 text-slate-400 hover:text-white bg-slate-800/60 rounded-lg ml-2">
            <X className="w-5 h-5" />
          </button>
        </div>
      </header>

      {/* Main Body */}
      <div className="flex-1 flex flex-col md:flex-row overflow-hidden">
        
        {/* LEFT PANE: Centered Stage displaying 360° Rotating Conic Border Beam Live! */}
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
            <span className="flex items-center font-mono text-cyan-400 font-bold">
              <Orbit className="w-4 h-4 mr-2 text-cyan-400 animate-spin" /> Rotating Conic Neon Border Beam Active
            </span>
            <div className="flex items-center space-x-2">
              <span className="text-[11px] text-slate-500">Stage Background:</span>
              <button onClick={() => setStageBg('dark')} className={`p-1.5 rounded ${stageBg === 'dark' ? 'bg-indigo-600 text-white' : 'hover:bg-slate-800 text-slate-400'}`}><Moon className="w-3.5 h-3.5" /></button>
              <button onClick={() => setStageBg('light')} className={`p-1.5 rounded ${stageBg === 'light' ? 'bg-indigo-600 text-white' : 'hover:bg-slate-800 text-slate-400'}`}><Sun className="w-3.5 h-3.5" /></button>
            </div>
          </div>
        </div>

        {/* RIGHT PANE: Customization Controls */}
        <div className="w-full md:w-[480px] lg:w-[560px] bg-[#12141c] flex flex-col shrink-0 border-l border-slate-800">
          
          <div className="flex border-b border-slate-800 bg-[#0c0d12]">
            <button onClick={() => setActiveTab('visual')} className={`flex-1 py-3.5 px-4 text-xs font-bold uppercase tracking-wider flex items-center justify-center space-x-2 border-b-2 transition-all ${activeTab === 'visual' ? 'border-cyan-500 text-cyan-400 bg-cyan-500/10' : 'border-transparent text-slate-400 hover:text-white'}`}>
              <Orbit className="w-4 h-4" />
              <span>Rotating Border & Controls</span>
            </button>
            <button onClick={() => setActiveTab('code')} className={`flex-1 py-3.5 px-4 text-xs font-bold uppercase tracking-wider flex items-center justify-center space-x-2 border-b-2 transition-all ${activeTab === 'code' ? 'border-indigo-500 text-indigo-400 bg-indigo-500/10' : 'border-transparent text-slate-400 hover:text-white'}`}>
              <Code2 className="w-4 h-4" />
              <span>Annotated CSS Code</span>
            </button>
          </div>

          {/* TAB 1: VISUAL CONTROLS */}
          {activeTab === 'visual' && (
            <div className="flex-1 overflow-y-auto p-5 space-y-4 custom-scrollbar">
              
              {/* SPEED & LABEL */}
              <div className="bg-slate-900/60 p-4 rounded-xl border border-slate-800 grid grid-cols-2 gap-4">
                <div>
                  <label className="text-[11px] font-bold text-slate-400 block mb-1">Button Label Text</label>
                  <input type="text" value={content.label} onChange={(e) => setContent({ ...content, label: e.target.value })} className="w-full bg-[#07080c] border border-slate-700 rounded-lg p-2 text-xs text-white" />
                </div>
                <div>
                  <label className="text-[11px] font-bold text-slate-400 block mb-1">Rotation Speed ({duration}s)</label>
                  <input type="range" min="0.3" max="4.0" step="0.1" value={duration} onChange={(e) => setDuration(Number(e.target.value))} className="w-full" />
                </div>
              </div>

              {/* 💫 1. ROTATING CONIC BORDER BEAM PANEL */}
              <div className="bg-slate-900/60 rounded-xl border border-cyan-500/40 overflow-hidden shadow-lg">
                <button onClick={() => toggleSection('rotatingBorder')} className="w-full p-3.5 bg-[#161925] flex justify-between items-center text-xs font-bold text-slate-200">
                  <span className="flex items-center text-cyan-400"><Orbit className="w-4 h-4 mr-2 text-cyan-400 animate-spin" /> 01. Rotating Border Beam System</span>
                </button>
                {openSections.rotatingBorder && (
                  <div className="p-4 space-y-4 bg-[#0a0b10]">
                    <div>
                      <label className="text-[11px] font-bold text-slate-400 block mb-1">Border Rotating Animation Type</label>
                      <select value={borderAnim} onChange={(e) => setBorderAnim(e.target.value)} className="w-full bg-[#12141c] border border-cyan-500/40 rounded-lg p-2 text-xs text-white font-bold">
                        <option value="b-spin">💫 Rotating Conic Neon Border Beam (360° Orbit Around Perimeter)</option>
                        <option value="b-sweep">🌠 Moving Light Beam Border Sweep</option>
                        <option value="b-neon">⚡ Cyber Glowing Neon Border Pulse</option>
                        <option value="b-pulse">💗 Pulsing Scale Border Ring</option>
                        <option value="none">None (Static Border)</option>
                      </select>
                    </div>

                    <div className="space-y-2">
                      <label className="text-[11px] font-bold text-slate-400 block">Rotating Beam Color Swatches & Picker</label>
                      <div className="flex items-center space-x-2">
                        <div className="flex flex-wrap gap-1.5 flex-1">
                          {PRESET_COLORS.map((c) => (
                            <button key={c.name} onClick={() => setBorderColor(c.hex)} style={{ backgroundColor: c.hex }} className="w-5 h-5 rounded-full border border-white/20 hover:scale-125 transition-transform" title={c.name} />
                          ))}
                        </div>
                        <input type="color" value={borderColor} onChange={(e) => setBorderColor(e.target.value)} className="w-7 h-7 rounded cursor-pointer border-0 bg-transparent" title="Pick Custom Beam Color" />
                      </div>
                    </div>
                  </div>
                )}
              </div>

              {/* 🎬 2. BUTTON MOTION ANIMATIONS */}
              <div className="bg-slate-900/60 rounded-xl border border-pink-500/30 overflow-hidden">
                <button onClick={() => toggleSection('btnMotion')} className="w-full p-3.5 bg-[#161925] flex justify-between items-center text-xs font-bold text-slate-200">
                  <span className="flex items-center text-pink-400"><Film className="w-4 h-4 mr-2" /> 02. Button Motion Animations</span>
                </button>
                {openSections.btnMotion && (
                  <div className="p-4 bg-[#0a0b10]">
                    <select value={btnMotion} onChange={(e) => setBtnMotion(e.target.value)} className="w-full bg-[#12141c] border border-slate-800 rounded-lg p-2 text-xs text-white">
                      <option value="none">None</option>
                      <option value="a-pulse">Pulse (breathe)</option>
                      <option value="a-bounce">Bounce (vertical jump)</option>
                      <option value="a-float">Float (smooth levitate)</option>
                      <option value="a-heartbeat">Heartbeat</option>
                    </select>
                  </div>
                )}
              </div>

              {/* 🌈 3. MULTI-COLOR GRADIENT ENGINE */}
              <div className="bg-slate-900/60 rounded-xl border border-purple-500/30 overflow-hidden">
                <button onClick={() => toggleSection('multiGradient')} className="w-full p-3.5 bg-[#161925] flex justify-between items-center text-xs font-bold text-slate-200">
                  <span className="flex items-center text-purple-400"><Palette className="w-4 h-4 mr-2" /> 03. Multi-Color Gradient Engine</span>
                </button>
                {openSections.multiGradient && (
                  <div className="p-4 space-y-3 bg-[#0a0b10]">
                    <div className="grid grid-cols-3 gap-2">
                      <div>
                        <label className="text-[10px] text-slate-400 block mb-1">Color 1</label>
                        <input type="color" value={gradientConfig.color1} onChange={(e) => setGradientConfig({ ...gradientConfig, color1: e.target.value })} className="w-full h-7 rounded border-0 bg-transparent" />
                      </div>
                      <div>
                        <label className="text-[10px] text-slate-400 block mb-1">Color 2</label>
                        <input type="color" value={gradientConfig.color2} onChange={(e) => setGradientConfig({ ...gradientConfig, color2: e.target.value })} className="w-full h-7 rounded border-0 bg-transparent" />
                      </div>
                      <div>
                        <label className="text-[10px] text-slate-400 block mb-1">Color 3</label>
                        <input type="color" value={gradientConfig.color3} onChange={(e) => setGradientConfig({ ...gradientConfig, color3: e.target.value })} className="w-full h-7 rounded border-0 bg-transparent" />
                      </div>
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
                <label className="text-xs font-bold text-blue-400 uppercase tracking-wider block">CSS Code (With Rotating Border Beam Rules & @keyframes)</label>
                <textarea value={currentCssCode} readOnly className="w-full bg-[#07080c] border border-slate-800 rounded-xl p-3.5 text-xs font-mono text-blue-300 resize-y min-h-[350px] leading-relaxed" spellCheck="false" />
              </div>
            </div>
          )}

          {/* Sidebar Footer */}
          <div className="p-4 border-t border-slate-800 bg-[#0c0d12] flex justify-end">
            <button onClick={handleCopy} className="w-full py-2.5 bg-indigo-600 hover:bg-indigo-500 text-white rounded-xl text-xs font-bold shadow-xl flex items-center justify-center space-x-2">
              {isCopied ? <Check className="w-4 h-4 text-green-400" /> : <Copy className="w-4 h-4" />}
              <span>{isCopied ? 'Code Copied!' : 'Copy Code with Rotating Border Beam'}</span>
            </button>
          </div>

        </div>

      </div>

    </div>
  );
}
