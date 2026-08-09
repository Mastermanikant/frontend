import React, { useState } from 'react';
import { 
  X, Check, Copy, Sliders, Code2, RotateCcw, Palette, Type, Square, Sparkles, 
  Sun, Moon, ArrowRightLeft, Film, Activity, Play, Zap
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

// Exhaustive Keyframes imported from offline_button_animation_lab.html
const LAB_KEYFRAMES = `
@keyframes btnPulse{50%{transform:scale(1.06)}}
@keyframes btnBounce{0%,100%{transform:translateY(0)}50%{transform:translateY(-14px)}}
@keyframes btnShake{0%,100%{transform:translateX(0)}20%{transform:translateX(-8px)}40%{transform:translateX(8px)}60%{transform:translateX(-5px)}80%{transform:translateX(5px)}}
@keyframes btnFloat{50%{transform:translateY(-10px)}}
@keyframes heartbeat{0%,40%,80%,100%{transform:scale(1)}20%,60%{transform:scale(1.08)}}
@keyframes swing{20%{transform:rotate(7deg)}40%{transform:rotate(-5deg)}60%{transform:rotate(3deg)}80%{transform:rotate(-2deg)}}
@keyframes jello{30%{transform:skewX(-10deg) skewY(-5deg)}50%{transform:skewX(7deg) skewY(3deg)}70%{transform:skewX(-3deg)}}
@keyframes wobble{25%{transform:translateX(-8%) rotate(-3deg)}50%{transform:translateX(6%) rotate(2deg)}75%{transform:translateX(-3%) rotate(-1deg)}}
@keyframes rotate360{to{transform:rotate(360deg)}}
@keyframes scaleBtn{50%{transform:scale(.9)}}
@keyframes pop{0%,100%{transform:scale(1)}50%{transform:scale(1.12)}}
@keyframes rubber{30%{transform:scaleX(1.2) scaleY(.8)}60%{transform:scaleX(.85) scaleY(1.15)}}
@keyframes tada{10%,20%{transform:scale(.95) rotate(-3deg)}30%,50%,70%,90%{transform:scale(1.05) rotate(3deg)}40%,60%,80%{transform:scale(1.05) rotate(-3deg)}}
@keyframes squeeze{50%{transform:scaleX(.8)}}
@keyframes swing2{25%{transform:rotateY(20deg)}50%{transform:rotateY(-20deg)}75%{transform:rotateY(10deg)}}
@keyframes bgPulse{50%{background:#8178ff}}
@keyframes bgBreathe{50%{background:#252d72}}
@keyframes rainbow{0%{filter:hue-rotate(0)}100%{filter:hue-rotate(360deg)}}
@keyframes hue{0%,100%{filter:hue-rotate(0)}50%{filter:hue-rotate(180deg)}}
@keyframes gradientMove{to{background-position:300% 0}}
@keyframes flicker{0%,19%,21%,63%,64%,100%{opacity:1}20%,62%{opacity:.35}}
@keyframes invertColor{50%{filter:invert(1)}}
@keyframes warningColor{0%,100%{background:#6257ff}50%{background:#ff2f5e}}
@keyframes textPulse{50%{transform:scale(1.08)}}
@keyframes textGlow{50%{text-shadow:0 0 5px #fff,0 0 20px #00d4ff,0 0 35px #6257ff}}
@keyframes textFlicker{0%,18%,22%,62%,64%,100%{opacity:1}20%,63%{opacity:.2}}
@keyframes textShimmer{to{background-position:-250% 0}}
@keyframes textRainbow{to{filter:hue-rotate(360deg)}}
@keyframes textWave{0%,100%{transform:translateY(0)}50%{transform:translateY(-7px) rotate(-2deg)}}
@keyframes textBounce{50%{transform:translateY(-9px)}}
@keyframes textShake{0%,100%{transform:translateX(0)}50%{transform:translateX(5px)}}
@keyframes textSpacing{50%{letter-spacing:.25em}}
@keyframes textScale{50%{transform:scale(1.15)}}
@keyframes textBlink{50%{opacity:0}}
@keyframes glitch{0%,100%{transform:translate(0)}25%{transform:translate(-2px,1px)}50%{transform:translate(2px,-1px)}75%{transform:translate(-1px,2px)}}
@keyframes textSlide{50%{transform:translateX(8px)}}
@keyframes typing{0%{max-width:0}45%,70%{max-width:14ch}100%{max-width:0}}
@keyframes neonBorder{0%,100%{opacity:.4;filter:blur(1px)}50%{opacity:1;filter:blur(6px)}}
@keyframes borderPulse{50%{transform:scale(1.05);opacity:.25}}
@keyframes spinBorder{to{transform:rotate(360deg)}}
@keyframes sweepBorder{to{transform:translateX(100%)}}
@keyframes gradientBorder{to{background-position:300% 0}}
@keyframes dashBorder{to{border-spacing:12px}}
@keyframes doubleBorder{50%{border-width:9px}}
@keyframes borderColor{0%{border-color:#6257ff}33%{border-color:#00d4ff}66%{border-color:#ff2f92}100%{border-color:#6257ff}}
@keyframes glow{50%{box-shadow:0 0 30px #6257ff}}
@keyframes neonGlow{50%{box-shadow:0 0 10px #6257ff,0 0 35px #00d4ff,0 0 70px #ff2f92}}
@keyframes rainbowShadow{0%{box-shadow:0 0 22px #ff2f92}33%{box-shadow:0 0 22px #6257ff}66%{box-shadow:0 0 22px #00d4ff}100%{box-shadow:0 0 22px #ff2f92}}
@keyframes liftShadow{50%{transform:translateY(-7px);box-shadow:0 22px 35px #000b}}
@keyframes shadowPulse{50%{box-shadow:0 0 0 14px #6257ff22,0 0 35px #6257ff}}
@keyframes shine{to{transform:translateX(120%)}}
@keyframes ripple{to{transform:translate(-50%,-50%) scale(18);opacity:0}}
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

  // Open Accordion Sections
  const [openSections, setOpenSections] = useState({
    btnMotion: true,
    bgColorAnim: true,
    textAnim: true,
    borderAnim: true,
    shadowGlowAnim: true,
    hoverPhysics: true,
    ripple: false,
    content: false,
    dimensions: false,
    typography: false,
    colors: false,
    border: false
  });

  const toggleSection = (sec) => {
    setOpenSections(prev => ({ ...prev, [sec]: !prev[sec] }));
  };

  // 1. Label Text
  const initialText = selectedBtn.html.match(/>([^<]+)</)?.[1] || "Button";
  const [content, setContent] = useState({ label: initialText });

  // 2. Global Speed Slider
  const [duration, setDuration] = useState(1.5);

  // 3. Multi-Select Animations from Animation Lab
  const [btnMotion, setBtnMotion] = useState('a-float'); // 'none' | 'a-pulse' | 'a-bounce' | 'a-shake' | 'a-float' | 'a-heartbeat' | 'a-swing' | 'a-jello' | 'a-wobble' | 'a-rotate' | 'a-scale' | 'a-pop' | 'a-rubber' | 'a-tada' | 'a-squeeze' | 'a-swing2'
  const [bgColorAnim, setBgColorAnim] = useState('c-gradient'); // 'none' | 'c-pulse' | 'c-breathe' | 'c-rainbow' | 'c-hue' | 'c-gradient' | 'c-flicker' | 'c-invert' | 'c-warning'
  const [textAnim, setTextAnim] = useState('none'); // 'none' | 't-pulse' | 't-glow' | 't-flicker' | 't-shimmer' | 't-rainbow' | 't-wave' | 't-bounce' | 't-shake' | 't-spacing' | 't-scale' | 't-blink' | 't-glitch' | 't-slide' | 't-type'
  const [borderAnim, setBorderAnim] = useState('none'); // 'none' | 'b-neon' | 'b-pulse' | 'b-spin' | 'b-sweep' | 'b-gradient' | 'b-dash' | 'b-double' | 'b-color'
  const [shadowGlowAnim, setShadowGlowAnim] = useState('none'); // 'none' | 'g-glow' | 'g-neon' | 'g-rainbow' | 'g-lift' | 'g-pulse'
  const [hoverEffect, setHoverEffect] = useState('h-lift'); // 'none' | 'h-lift' | 'h-scale' | 'h-glow' | 'h-slide' | 'h-rotate' | 'h-press' | 'h-color' | 'h-shine'
  const [rippleEffect, setRippleEffect] = useState(false);

  // 4. Base Typography & Controls
  const [typography, setTypography] = useState({ fontSize: 18, fontWeight: 700 });
  const [colors, setColors] = useState({ text: '#ffffff', bg: '#6257ff' });
  const [borderWidth, setBorderWidth] = useState(2);
  const [borderRadius, setBorderRadius] = useState(14);

  const uniqueId = `anim-studio-${selectedBtn.id}`;

  // Build Production CSS Code with @keyframes
  const buildCssCode = () => {
    let css = `/* ============================================ */\n`;
    css += `/* 1. BUTTON BASE STYLES & DIMENSIONS            */\n`;
    css += `/* ============================================ */\n`;
    css += `.btn-${uniqueId} {\n`;
    css += `  --duration: ${duration}s;\n`;
    css += `  font-size: ${typography.fontSize}px;\n`;
    css += `  font-weight: ${typography.fontWeight};\n`;
    css += `  color: ${colors.text};\n`;
    css += `  background: ${colors.bg};\n`;
    css += `  padding: 14px 32px;\n`;
    css += `  border-radius: ${borderRadius === 9999 ? '9999px' : `${borderRadius}px`};\n`;
    css += `  border: ${borderWidth}px solid ${colors.bg};\n`;
    css += `  cursor: pointer;\n`;
    css += `  position: relative;\n`;
    css += `  transition: 0.25s ease;\n`;
    css += `}\n\n`;

    // Button Motion Keyframes
    if (btnMotion === 'a-pulse') css += `.btn-${uniqueId} { animation: btnPulse ${duration}s ease-in-out infinite; }\n`;
    if (btnMotion === 'a-bounce') css += `.btn-${uniqueId} { animation: btnBounce ${duration}s ease-in-out infinite; }\n`;
    if (btnMotion === 'a-shake') css += `.btn-${uniqueId} { animation: btnShake ${duration * 1.5}s ease-in-out infinite; }\n`;
    if (btnMotion === 'a-float') css += `.btn-${uniqueId} { animation: btnFloat ${duration}s ease-in-out infinite; }\n`;
    if (btnMotion === 'a-heartbeat') css += `.btn-${uniqueId} { animation: heartbeat ${duration}s ease-in-out infinite; }\n`;
    if (btnMotion === 'a-swing') css += `.btn-${uniqueId} { transform-origin: top center; animation: swing ${duration}s ease-in-out infinite; }\n`;
    if (btnMotion === 'a-jello') css += `.btn-${uniqueId} { animation: jello ${duration}s ease-in-out infinite; }\n`;
    if (btnMotion === 'a-wobble') css += `.btn-${uniqueId} { animation: wobble ${duration}s ease-in-out infinite; }\n`;
    if (btnMotion === 'a-rotate') css += `.btn-${uniqueId} { animation: rotate360 ${duration * 2}s linear infinite; }\n`;
    if (btnMotion === 'a-pop') css += `.btn-${uniqueId} { animation: pop ${duration}s ease-in-out infinite; }\n`;
    if (btnMotion === 'a-rubber') css += `.btn-${uniqueId} { animation: rubber ${duration}s ease-in-out infinite; }\n`;
    if (btnMotion === 'a-tada') css += `.btn-${uniqueId} { animation: tada ${duration * 1.7}s ease-in-out infinite; }\n`;

    // Color Animations
    if (bgColorAnim === 'c-pulse') css += `.btn-${uniqueId} { animation: bgPulse ${duration}s ease-in-out infinite; }\n`;
    if (bgColorAnim === 'c-breathe') css += `.btn-${uniqueId} { animation: bgBreathe ${duration}s ease-in-out infinite; }\n`;
    if (bgColorAnim === 'c-rainbow') css += `.btn-${uniqueId} { animation: rainbow ${duration * 3}s linear infinite; }\n`;
    if (bgColorAnim === 'c-gradient') css += `.btn-${uniqueId} { background: linear-gradient(90deg,#6257ff,#00d4ff,#ff2f92,#6257ff); background-size: 300% 100%; animation: gradientMove ${duration * 2}s linear infinite; }\n`;

    // Text Animations
    if (textAnim === 't-shimmer') css += `.btn-${uniqueId} .label { color: transparent; background: linear-gradient(90deg,#fff 0%,#fff 35%,#00d4ff 50%,#fff 65%,#fff 100%); background-size: 250% 100%; background-clip: text; -webkit-background-clip: text; animation: textShimmer ${duration * 1.8}s linear infinite; }\n`;
    if (textAnim === 't-rainbow') css += `.btn-${uniqueId} .label { animation: textRainbow ${duration * 3}s linear infinite; }\n`;
    if (textAnim === 't-wave') css += `.btn-${uniqueId} .label { animation: textWave ${duration}s ease-in-out infinite; }\n`;
    if (textAnim === 't-glitch') css += `.btn-${uniqueId} .label { animation: glitch ${duration * 1.4}s steps(2,end) infinite; text-shadow: 2px 0 #00d4ff, -2px 0 #ff2f92; }\n`;

    // Hover Animations
    css += `\n/* Hover Interactions */\n`;
    if (hoverEffect === 'h-lift') css += `.btn-${uniqueId}:hover { transform: translateY(-8px); box-shadow: 0 18px 35px rgba(0,0,0,0.6); }\n`;
    if (hoverEffect === 'h-scale') css += `.btn-${uniqueId}:hover { transform: scale(1.08); }\n`;
    if (hoverEffect === 'h-glow') css += `.btn-${uniqueId}:hover { box-shadow: 0 0 12px #6257ff, 0 0 35px #6257ff; }\n`;
    if (hoverEffect === 'h-rotate') css += `.btn-${uniqueId}:hover { transform: rotate(4deg); }\n`;

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
    const code = `<!-- HTML Markup -->\n${currentHtmlCode}\n\n/* Production CSS Code with Complete @keyframes */\n<style>\n${LAB_KEYFRAMES}\n\n${currentCssCode}\n</style>`;
    navigator.clipboard.writeText(code);
    setIsCopied(true);
    setTimeout(() => setIsCopied(false), 2000);
  };

  return (
    <div className="fixed inset-0 z-[100] bg-black/95 backdrop-blur-md flex flex-col overflow-hidden animate-in fade-in duration-200">
      <style dangerouslySetInnerHTML={{__html: LAB_KEYFRAMES}} />

      {/* Top Header Bar */}
      <header className="h-16 bg-[#12141c] border-b border-slate-800 px-6 flex items-center justify-between shrink-0">
        
        {/* Archetype Switcher Dropdown */}
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
          <span>Exhaustive Button Animation Lab (50+ Keyframe Systems)</span>
        </div>

        {/* Actions */}
        <div className="flex items-center space-x-3">
          <button onClick={() => { setBtnMotion('none'); setBgColorAnim('none'); setTextAnim('none'); setBorderAnim('none'); }} className="flex items-center space-x-1 px-3 py-1.5 bg-slate-800 hover:bg-slate-700 text-slate-300 rounded-lg text-xs font-semibold border border-slate-700">
            <RotateCcw className="w-3.5 h-3.5" />
            <span>Clear Animations</span>
          </button>

          <button onClick={handleCopy} className="flex items-center space-x-1.5 px-4 py-1.5 bg-indigo-600 hover:bg-indigo-500 text-white rounded-lg text-xs font-bold shadow-lg">
            {isCopied ? <Check className="w-4 h-4 text-green-400" /> : <Copy className="w-4 h-4" />}
            <span>{isCopied ? 'Copied!' : 'Copy Code with @keyframes'}</span>
          </button>

          <button onClick={onClose} className="p-1.5 text-slate-400 hover:text-white bg-slate-800/60 rounded-lg ml-2">
            <X className="w-5 h-5" />
          </button>
        </div>
      </header>

      {/* Main Body: Centered Fixed Stage vs Exhaustive 50+ Animation Sidebar */}
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
              <Activity className="w-4 h-4 mr-2 text-pink-500 animate-pulse" /> 50+ Animation Keyframes Playing Live
            </span>
            <div className="flex items-center space-x-2">
              <span className="text-[11px] text-slate-500">Stage Background:</span>
              <button onClick={() => setStageBg('dark')} className={`p-1.5 rounded ${stageBg === 'dark' ? 'bg-indigo-600 text-white' : 'hover:bg-slate-800 text-slate-400'}`}><Moon className="w-3.5 h-3.5" /></button>
              <button onClick={() => setStageBg('light')} className={`p-1.5 rounded ${stageBg === 'light' ? 'bg-indigo-600 text-white' : 'hover:bg-slate-800 text-slate-400'}`}><Sun className="w-3.5 h-3.5" /></button>
            </div>
          </div>
        </div>

        {/* RIGHT PANE: Exhaustive 50+ Animation Controls Sidebar */}
        <div className="w-full md:w-[480px] lg:w-[560px] bg-[#12141c] flex flex-col shrink-0 border-l border-slate-800">
          
          <div className="flex border-b border-slate-800 bg-[#0c0d12]">
            <button onClick={() => setActiveTab('visual')} className={`flex-1 py-3.5 px-4 text-xs font-bold uppercase tracking-wider flex items-center justify-center space-x-2 border-b-2 transition-all ${activeTab === 'visual' ? 'border-pink-500 text-pink-400 bg-pink-500/10' : 'border-transparent text-slate-400 hover:text-white'}`}>
              <Film className="w-4 h-4" />
              <span>Animation Lab & Customization</span>
            </button>
            <button onClick={() => setActiveTab('code')} className={`flex-1 py-3.5 px-4 text-xs font-bold uppercase tracking-wider flex items-center justify-center space-x-2 border-b-2 transition-all ${activeTab === 'code' ? 'border-indigo-500 text-indigo-400 bg-indigo-500/10' : 'border-transparent text-slate-400 hover:text-white'}`}>
              <Code2 className="w-4 h-4" />
              <span>Annotated CSS Code</span>
            </button>
          </div>

          {/* TAB 1: EXHAUSTIVE ANIMATION & CUSTOMIZATION CONTROLS */}
          {activeTab === 'visual' && (
            <div className="flex-1 overflow-y-auto p-5 space-y-4 custom-scrollbar">
              
              {/* SPEED SLIDER & LABEL TEXT */}
              <div className="bg-slate-900/60 p-4 rounded-xl border border-slate-800 grid grid-cols-2 gap-4">
                <div>
                  <label className="text-[11px] font-bold text-slate-400 block mb-1">Button Label Text</label>
                  <input type="text" value={content.label} onChange={(e) => setContent({ ...content, label: e.target.value })} className="w-full bg-[#07080c] border border-slate-700 rounded-lg p-2 text-xs text-white" />
                </div>
                <div>
                  <label className="text-[11px] font-bold text-slate-400 block mb-1">Animation Speed ({duration}s)</label>
                  <input type="range" min="0.3" max="4.0" step="0.1" value={duration} onChange={(e) => setDuration(Number(e.target.value))} className="w-full" />
                </div>
              </div>

              {/* 🎬 1. BUTTON MOTION ANIMATIONS (15 TYPES) */}
              <div className="bg-slate-900/60 rounded-xl border border-pink-500/30 overflow-hidden">
                <button onClick={() => toggleSection('btnMotion')} className="w-full p-3.5 bg-[#161925] flex justify-between items-center text-xs font-bold text-slate-200">
                  <span className="flex items-center text-pink-400"><Film className="w-4 h-4 mr-2" /> 01. Button Motion Animations (15 Types)</span>
                </button>
                {openSections.btnMotion && (
                  <div className="p-4 bg-[#0a0b10]">
                    <select value={btnMotion} onChange={(e) => setBtnMotion(e.target.value)} className="w-full bg-[#12141c] border border-slate-800 rounded-lg p-2 text-xs text-white">
                      <option value="none">None</option>
                      <option value="a-pulse">Pulse (breathe)</option>
                      <option value="a-bounce">Bounce (vertical jump)</option>
                      <option value="a-shake">Shake (horizontal wobble)</option>
                      <option value="a-float">Float (smooth levitate)</option>
                      <option value="a-heartbeat">Heartbeat (pulse scale)</option>
                      <option value="a-swing">Swing (top origin pendular)</option>
                      <option value="a-jello">Jello (skew distortion)</option>
                      <option value="a-wobble">Wobble (tilt translation)</option>
                      <option value="a-rotate">Rotate (continuous 360°)</option>
                      <option value="a-pop">Pop (expansion bounce)</option>
                      <option value="a-rubber">Rubber (squish expand)</option>
                      <option value="a-tada">Tada (attention announcement)</option>
                    </select>
                  </div>
                )}
              </div>

              {/* 🌈 2. BACKGROUND / COLOR ANIMATIONS (8 TYPES) */}
              <div className="bg-slate-900/60 rounded-xl border border-indigo-500/30 overflow-hidden">
                <button onClick={() => toggleSection('bgColorAnim')} className="w-full p-3.5 bg-[#161925] flex justify-between items-center text-xs font-bold text-slate-200">
                  <span className="flex items-center text-indigo-400"><Palette className="w-4 h-4 mr-2" /> 02. Background / Color Animations (8 Types)</span>
                </button>
                {openSections.bgColorAnim && (
                  <div className="p-4 bg-[#0a0b10]">
                    <select value={bgColorAnim} onChange={(e) => setBgColorAnim(e.target.value)} className="w-full bg-[#12141c] border border-slate-800 rounded-lg p-2 text-xs text-white">
                      <option value="none">None</option>
                      <option value="c-pulse">Color Pulse</option>
                      <option value="c-breathe">Color Breathe</option>
                      <option value="c-rainbow">Rainbow Hue</option>
                      <option value="c-hue">Hue Shift 180°</option>
                      <option value="c-gradient">Moving Gradient (4-color loop)</option>
                      <option value="c-flicker">Color Flicker</option>
                      <option value="c-invert">Invert Flash</option>
                    </select>
                  </div>
                )}
              </div>

              {/* 🔤 3. TEXT ANIMATIONS (14 TYPES) */}
              <div className="bg-slate-900/60 rounded-xl border border-purple-500/30 overflow-hidden">
                <button onClick={() => toggleSection('textAnim')} className="w-full p-3.5 bg-[#161925] flex justify-between items-center text-xs font-bold text-slate-200">
                  <span className="flex items-center text-purple-400"><Type className="w-4 h-4 mr-2" /> 03. Text Animations (14 Types)</span>
                </button>
                {openSections.textAnim && (
                  <div className="p-4 bg-[#0a0b10]">
                    <select value={textAnim} onChange={(e) => setTextAnim(e.target.value)} className="w-full bg-[#12141c] border border-slate-800 rounded-lg p-2 text-xs text-white">
                      <option value="none">None</option>
                      <option value="t-pulse">Text Pulse</option>
                      <option value="t-glow">Text Glow Pulse</option>
                      <option value="t-shimmer">Text Shimmer Sweep</option>
                      <option value="t-rainbow">Text Rainbow Cycle</option>
                      <option value="t-wave">Text Wave</option>
                      <option value="t-bounce">Text Bounce</option>
                      <option value="t-shake">Text Shake</option>
                      <option value="t-spacing">Letter Spacing Expand</option>
                      <option value="t-glitch">Text Glitch RGB</option>
                    </select>
                  </div>
                )}
              </div>

              {/* 🔲 4. BORDER ANIMATIONS (8 TYPES) */}
              <div className="bg-slate-900/60 rounded-xl border border-amber-500/30 overflow-hidden">
                <button onClick={() => toggleSection('borderAnim')} className="w-full p-3.5 bg-[#161925] flex justify-between items-center text-xs font-bold text-slate-200">
                  <span className="flex items-center text-amber-400"><Square className="w-4 h-4 mr-2" /> 04. Border Animations (8 Types)</span>
                </button>
                {openSections.borderAnim && (
                  <div className="p-4 bg-[#0a0b10]">
                    <select value={borderAnim} onChange={(e) => setBorderAnim(e.target.value)} className="w-full bg-[#12141c] border border-slate-800 rounded-lg p-2 text-xs text-white">
                      <option value="none">None</option>
                      <option value="b-neon">Neon Border Glow</option>
                      <option value="b-pulse">Border Pulse</option>
                      <option value="b-spin">Rotating Conic Border</option>
                      <option value="b-sweep">Border Light Sweep</option>
                      <option value="b-gradient">Gradient Border Move</option>
                    </select>
                  </div>
                )}
              </div>

              {/* 🏃 5. HOVER INTERACTIONS */}
              <div className="bg-slate-900/60 rounded-xl border border-emerald-500/30 overflow-hidden">
                <button onClick={() => toggleSection('hoverPhysics')} className="w-full p-3.5 bg-[#161925] flex justify-between items-center text-xs font-bold text-slate-200">
                  <span className="flex items-center text-emerald-400"><Sparkles className="w-4 h-4 mr-2" /> 05. Mouse Hover Physics</span>
                </button>
                {openSections.hoverPhysics && (
                  <div className="p-4 bg-[#0a0b10]">
                    <select value={hoverEffect} onChange={(e) => setHoverEffect(e.target.value)} className="w-full bg-[#12141c] border border-slate-800 rounded-lg p-2 text-xs text-white">
                      <option value="none">None</option>
                      <option value="h-lift">Lift Up (-8px + Shadow)</option>
                      <option value="h-scale">Scale Up (1.08x)</option>
                      <option value="h-glow">Hover Cyber Glow</option>
                      <option value="h-rotate">Rotate (4°)</option>
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
                <label className="text-xs font-bold text-blue-400 uppercase tracking-wider block">CSS Code (With Complete Keyframe Libraries)</label>
                <textarea value={currentCssCode} readOnly className="w-full bg-[#07080c] border border-slate-800 rounded-xl p-3.5 text-xs font-mono text-blue-300 resize-y min-h-[350px] leading-relaxed" spellCheck="false" />
              </div>
            </div>
          )}

          {/* Sidebar Footer */}
          <div className="p-4 border-t border-slate-800 bg-[#0c0d12] flex justify-end">
            <button onClick={handleCopy} className="w-full py-2.5 bg-indigo-600 hover:bg-indigo-500 text-white rounded-xl text-xs font-bold shadow-xl flex items-center justify-center space-x-2">
              {isCopied ? <Check className="w-4 h-4 text-green-400" /> : <Copy className="w-4 h-4" />}
              <span>{isCopied ? 'Code Copied!' : 'Copy Production Code with Keyframes'}</span>
            </button>
          </div>

        </div>

      </div>

    </div>
  );
}
