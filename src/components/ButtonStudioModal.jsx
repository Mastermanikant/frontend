import React, { useState } from 'react';
import { X, Check, Copy, Sliders, Code2, RotateCcw, Palette, Type, Square, Sparkles, Sun, Moon, Laptop, Tablet, Smartphone } from 'lucide-react';

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
  const [stageBg, setStageBg] = useState('dark'); // 'dark' | 'light' | 'grid'

  // Initial code states with annotated CSS comments
  const initialText = btn.html.match(/>([^<]+)</)?.[1] || "Button";
  const [buttonLabel, setButtonLabel] = useState(initialText);
  const [htmlCode, setHtmlCode] = useState(btn.html);

  // Annotated default CSS with clear educational comments
  const annotateCss = (rawCss) => {
    if (rawCss.includes('/*')) return rawCss; // already annotated
    return `/* ============================================ */
/* 1. BUTTON BASE STYLES & TYPOGRAPHY           */
/* ============================================ */
${rawCss
  .replace(/background:\s*([^;]+);/, `  /* Primary Background Color */\n  background: $1;`)
  .replace(/color:\s*([^;]+);/, `  /* Inner Label Text Color */\n  color: $1;`)
  .replace(/font-size:\s*([^;]+);/, `  /* Text Font Size */\n  font-size: $1;`)
  .replace(/font-weight:\s*([^;]+);/, `  /* Text Thickness / Weight */\n  font-weight: $1;`)
  .replace(/padding:\s*([^;]+);/, `  /* Inner Spacing (Top/Bottom Left/Right) */\n  padding: $1;`)
  .replace(/border-radius:\s*([^;]+);/, `  /* Corner Roundness / Curve */\n  border-radius: $1;`)
  .replace(/border:\s*([^;]+);/, `  /* Border Thickness & Line Style */\n  border: $1;`)
  .replace(/box-shadow:\s*([^;]+);/, `  /* Outer Glow & Drop Shadow Effect */\n  box-shadow: $1;`)
  .replace(/clip-path:\s*([^;]+);/, `  /* Geometric Shape Cutting */\n  clip-path: $1;`)}

/* ============================================ */
/* 2. HOVER & PHYSICAL CLICK INTERACTION        */
/* ============================================ */
/* Styling applied when mouse hovers over button */`;
  };

  const [cssCode, setCssCode] = useState(annotateCss(btn.css));

  // Visual Controls States
  const [bgColor, setBgColor] = useState('#6366f1');
  const [textColor, setTextColor] = useState('#ffffff');
  const [borderColor, setBorderColor] = useState('#6366f1');
  const [shadowColor, setShadowColor] = useState('#6366f1');
  const [fontSize, setFontSize] = useState('15px');
  const [fontWeight, setFontWeight] = useState('600');
  const [borderRadius, setBorderRadius] = useState('8px');
  const [borderWidth, setBorderWidth] = useState('0px');
  const [paddingY, setPaddingY] = useState('12px');
  const [paddingX, setPaddingX] = useState('28px');

  const uniqueId = `modal-${btn.id}`;

  // Safe Scoped CSS
  const scopedCss = cssCode
    .replace(/(^|\n|\})\s*button([^{]*)\{/g, `$1 %%SCOPE%% button$2{`)
    .replace(/(^|\n|\})\s*\.([a-zA-Z_-][a-zA-Z0-9_-]*)/g, `$1 %%SCOPE%% .$2`)
    .replace(/%%SCOPE%%/g, `.btn-preview-${uniqueId}`);

  // Convert Hex to RGB
  const hexToRgb = (hex) => {
    let c = hex.replace('#', '');
    if (c.length === 3) c = c.split('').map(x => x + x).join('');
    const num = parseInt(c, 16);
    return { r: (num >> 16) & 255, g: (num >> 8) & 255, b: num & 255 };
  };

  const handleCopy = () => {
    const code = `<!-- HTML Markup -->\n${htmlCode}\n\n/* CSS Styling with Educational Annotations */\n<style>\n${cssCode}\n</style>`;
    navigator.clipboard.writeText(code);
    setIsCopied(true);
    setTimeout(() => setIsCopied(false), 2000);
  };

  const handleReset = () => {
    setButtonLabel(initialText);
    setHtmlCode(btn.html);
    setCssCode(annotateCss(btn.css));
  };

  // Update Label Text
  const handleLabelChange = (val) => {
    setButtonLabel(val);
    const updatedHtml = htmlCode.replace(/>([^<]+)</, `>${val}<`);
    setHtmlCode(updatedHtml);
  };

  // Dynamically Update CSS Properties
  const updateCssProperty = (prop, val) => {
    let newCss = cssCode;

    if (prop === 'background') {
      setBgColor(val);
      const { r, g, b } = hexToRgb(val);
      newCss = newCss
        .replace(/background:\s*#[a-fA-F0-9]{3,6}/g, `background: ${val}`)
        .replace(/rgba\(\s*\d+\s*,\s*\d+\s*,\s*\d+\s*,\s*[\d.]+\s*\)/g, `rgba(${r}, ${g}, ${b}, 0.4)`);
    } else if (prop === 'color') {
      setTextColor(val);
      newCss = newCss.replace(/color:\s*#[a-fA-F0-9]{3,6}/g, `color: ${val}`);
    } else if (prop === 'borderColor') {
      setBorderColor(val);
      newCss = newCss.replace(/border-color:\s*#[a-fA-F0-9]{3,6}/g, `border-color: ${val}`)
                     .replace(/border:\s*(\d+px\s+\w+\s+)#[a-fA-F0-9]{3,6}/g, `border: $1${val}`);
    } else if (prop === 'fontSize') {
      setFontSize(val);
      newCss = newCss.replace(/font-size:\s*\d+px/g, `font-size: ${val}`);
    } else if (prop === 'fontWeight') {
      setFontWeight(val);
      newCss = newCss.replace(/font-weight:\s*\d+/g, `font-weight: ${val}`);
    } else if (prop === 'borderRadius') {
      setBorderRadius(val);
      newCss = newCss.replace(/border-radius:\s*[\d.px%]+/g, `border-radius: ${val}`);
    } else if (prop === 'borderWidth') {
      setBorderWidth(val);
      newCss = newCss.replace(/border:\s*\d+px/g, `border: ${val}`);
    } else if (prop === 'padding') {
      newCss = newCss.replace(/padding:\s*[^;]+/g, `padding: ${val}`);
    }

    setCssCode(newCss);
  };

  return (
    <div className="fixed inset-0 z-[100] bg-black/90 backdrop-blur-md flex flex-col overflow-hidden animate-in fade-in duration-200">
      
      {/* Top Header Bar */}
      <header className="h-16 bg-[#12141c] border-b border-slate-800 px-6 flex items-center justify-between shrink-0">
        <div className="flex items-center space-x-3">
          <div className="w-3 h-3 rounded-full bg-pink-500 animate-pulse" />
          <h2 className="text-lg font-bold text-white tracking-wide">{btn.name} — Live Component Studio</h2>
        </div>

        <div className="flex items-center space-x-3">
          <button 
            onClick={handleReset}
            className="flex items-center space-x-1.5 px-3 py-1.5 bg-slate-800 hover:bg-slate-700 text-slate-300 rounded-lg text-xs font-semibold transition-colors border border-slate-700"
          >
            <RotateCcw className="w-3.5 h-3.5" />
            <span>Reset to Original</span>
          </button>

          <button 
            onClick={handleCopy}
            className="flex items-center space-x-1.5 px-4 py-1.5 bg-indigo-600 hover:bg-indigo-500 text-white rounded-lg text-xs font-bold transition-colors shadow-lg"
          >
            {isCopied ? <Check className="w-4 h-4 text-green-400" /> : <Copy className="w-4 h-4" />}
            <span>{isCopied ? 'Code Copied!' : 'Copy Full Annotated Code'}</span>
          </button>

          <button 
            onClick={onClose}
            className="p-1.5 text-slate-400 hover:text-white bg-slate-800/60 hover:bg-slate-800 rounded-lg transition-colors ml-4"
          >
            <X className="w-5 h-5" />
          </button>
        </div>
      </header>

      {/* Main Split Body: Left Fixed Stage vs Right Studio Sidebar */}
      <div className="flex-1 flex flex-col md:flex-row overflow-hidden">
        
        {/* LEFT PANE: Centered Live Stage (Stays 100% Fixed and Visible!) */}
        <div className="flex-1 flex flex-col bg-[#07080c] relative overflow-hidden border-r border-slate-800">
          
          {/* Subtle Grid Pattern Background */}
          <div className={`absolute inset-0 transition-opacity ${stageBg === 'dark' ? 'bg-[#07080c]' : stageBg === 'light' ? 'bg-slate-200' : 'bg-slate-900'}`}>
            <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGNpcmNsZSBjeD0iMiIgY3k9IjIiIHI9IjIiIGZpbGw9IiMzMzQxNTUiIGZpbGwtb3BhY2l0eT0iMC4yNSIvPjwvc3ZnPg==')]" />
            <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/10 via-transparent to-pink-500/10" />
          </div>

          <style dangerouslySetInnerHTML={{__html: scopedCss}} />

          {/* Centered Rendered Button Container (Fixed in place) */}
          <div className="flex-1 flex items-center justify-center p-12 relative z-10">
            <div className="p-12 border border-slate-800/80 rounded-3xl bg-slate-900/40 backdrop-blur-sm shadow-2xl flex items-center justify-center min-w-[300px] min-h-[200px]">
              <div 
                className={`btn-preview-${uniqueId} transform transition-transform duration-300 hover:scale-105`} 
                dangerouslySetInnerHTML={{__html: htmlCode}} 
              />
            </div>
          </div>

          {/* Stage Controls Footer (Theme Switcher) */}
          <div className="h-12 border-t border-slate-800 bg-[#0f111a]/90 px-6 flex items-center justify-between text-xs text-slate-400 relative z-10">
            <span className="flex items-center font-mono text-indigo-400">
              <Sparkles className="w-3.5 h-3.5 mr-1.5" /> Stage Status: 0ms Real-Time Live Sync
            </span>
            <div className="flex items-center space-x-2">
              <span className="text-[11px] text-slate-500">Stage Background:</span>
              <button 
                onClick={() => setStageBg('dark')} 
                className={`p-1.5 rounded ${stageBg === 'dark' ? 'bg-indigo-600 text-white' : 'hover:bg-slate-800 text-slate-400'}`}
                title="Dark Stage"
              >
                <Moon className="w-3.5 h-3.5" />
              </button>
              <button 
                onClick={() => setStageBg('light')} 
                className={`p-1.5 rounded ${stageBg === 'light' ? 'bg-indigo-600 text-white' : 'hover:bg-slate-800 text-slate-400'}`}
                title="Light Stage"
              >
                <Sun className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        </div>

        {/* RIGHT PANE: Studio Inspector & Code Editor Sidebar */}
        <div className="w-full md:w-[480px] lg:w-[540px] bg-[#12141c] flex flex-col shrink-0 border-l border-slate-800">
          
          {/* Tab Switcher: Visual Inspector vs Code Editor */}
          <div className="flex border-b border-slate-800 bg-[#0c0d12]">
            <button
              onClick={() => setActiveTab('visual')}
              className={`flex-1 py-3.5 px-4 text-xs font-bold uppercase tracking-wider flex items-center justify-center space-x-2 border-b-2 transition-all ${activeTab === 'visual' ? 'border-purple-500 text-purple-400 bg-purple-500/10' : 'border-transparent text-slate-400 hover:text-white'}`}
            >
              <Sliders className="w-4 h-4" />
              <span>Visual Inspector (No-Code)</span>
            </button>
            
            <button
              onClick={() => setActiveTab('code')}
              className={`flex-1 py-3.5 px-4 text-xs font-bold uppercase tracking-wider flex items-center justify-center space-x-2 border-b-2 transition-all ${activeTab === 'code' ? 'border-indigo-500 text-indigo-400 bg-indigo-500/10' : 'border-transparent text-slate-400 hover:text-white'}`}
            >
              <Code2 className="w-4 h-4" />
              <span>Annotated Code Editor</span>
            </button>
          </div>

          {/* TAB 1: VISUAL INSPECTOR (NO-CODE CONTROLS FOR EVERY COMPONENT) */}
          {activeTab === 'visual' && (
            <div className="flex-1 overflow-y-auto p-6 space-y-6 custom-scrollbar">
              
              {/* 1. Button Label Text */}
              <div className="bg-slate-900/60 p-4 rounded-xl border border-slate-800 space-y-2">
                <label className="text-xs font-bold text-slate-300 uppercase tracking-wider block flex items-center">
                  <Type className="w-4 h-4 mr-2 text-indigo-400" /> Button Label Text
                </label>
                <input 
                  type="text" 
                  value={buttonLabel}
                  onChange={(e) => handleLabelChange(e.target.value)}
                  className="w-full bg-[#07080c] border border-slate-700 rounded-lg px-3.5 py-2 text-sm text-white focus:outline-none focus:border-indigo-500 font-medium"
                />
              </div>

              {/* 2. Text Color Control (Swatches + Native Color Picker) */}
              <div className="bg-slate-900/60 p-4 rounded-xl border border-slate-800 space-y-3">
                <div className="flex items-center justify-between">
                  <label className="text-xs font-bold text-slate-300 uppercase tracking-wider flex items-center">
                    <Palette className="w-4 h-4 mr-2 text-pink-400" /> Inner Text Color
                  </label>
                  <span className="text-xs font-mono text-slate-400 uppercase">{textColor}</span>
                </div>

                <div className="flex items-center space-x-2">
                  <div className="flex flex-wrap gap-1.5 flex-1">
                    {PRESET_COLORS.map((c) => (
                      <button
                        key={c.name}
                        onClick={() => updateCssProperty('color', c.hex)}
                        style={{ backgroundColor: c.hex }}
                        className="w-5 h-5 rounded-full border border-white/20 hover:scale-125 transition-transform"
                        title={`Text Color: ${c.name}`}
                      />
                    ))}
                  </div>
                  <div className="relative flex items-center border-l border-slate-700 pl-2">
                    <input 
                      type="color" 
                      value={textColor}
                      onChange={(e) => updateCssProperty('color', e.target.value)}
                      className="w-7 h-7 rounded cursor-pointer border-0 bg-transparent"
                      title="Custom Text Color Picker"
                    />
                  </div>
                </div>
              </div>

              {/* 3. Primary Background Color Control (Swatches + Native Color Picker) */}
              <div className="bg-slate-900/60 p-4 rounded-xl border border-slate-800 space-y-3">
                <div className="flex items-center justify-between">
                  <label className="text-xs font-bold text-slate-300 uppercase tracking-wider flex items-center">
                    <Palette className="w-4 h-4 mr-2 text-indigo-400" /> Button Background Color
                  </label>
                  <span className="text-xs font-mono text-slate-400 uppercase">{bgColor}</span>
                </div>

                <div className="flex items-center space-x-2">
                  <div className="flex flex-wrap gap-1.5 flex-1">
                    {PRESET_COLORS.map((c) => (
                      <button
                        key={c.name}
                        onClick={() => updateCssProperty('background', c.hex)}
                        style={{ backgroundColor: c.hex }}
                        className="w-5 h-5 rounded-full border border-white/20 hover:scale-125 transition-transform"
                        title={`Background Color: ${c.name}`}
                      />
                    ))}
                  </div>
                  <div className="relative flex items-center border-l border-slate-700 pl-2">
                    <input 
                      type="color" 
                      value={bgColor}
                      onChange={(e) => updateCssProperty('background', e.target.value)}
                      className="w-7 h-7 rounded cursor-pointer border-0 bg-transparent"
                      title="Custom Background Color Picker"
                    />
                  </div>
                </div>
              </div>

              {/* 4. Border Color Control (Swatches + Native Color Picker) */}
              <div className="bg-slate-900/60 p-4 rounded-xl border border-slate-800 space-y-3">
                <div className="flex items-center justify-between">
                  <label className="text-xs font-bold text-slate-300 uppercase tracking-wider flex items-center">
                    <Square className="w-4 h-4 mr-2 text-cyan-400" /> Border Line Color
                  </label>
                  <span className="text-xs font-mono text-slate-400 uppercase">{borderColor}</span>
                </div>

                <div className="flex items-center space-x-2">
                  <div className="flex flex-wrap gap-1.5 flex-1">
                    {PRESET_COLORS.map((c) => (
                      <button
                        key={c.name}
                        onClick={() => updateCssProperty('borderColor', c.hex)}
                        style={{ backgroundColor: c.hex }}
                        className="w-5 h-5 rounded-full border border-white/20 hover:scale-125 transition-transform"
                        title={`Border Color: ${c.name}`}
                      />
                    ))}
                  </div>
                  <div className="relative flex items-center border-l border-slate-700 pl-2">
                    <input 
                      type="color" 
                      value={borderColor}
                      onChange={(e) => updateCssProperty('borderColor', e.target.value)}
                      className="w-7 h-7 rounded cursor-pointer border-0 bg-transparent"
                      title="Custom Border Color Picker"
                    />
                  </div>
                </div>
              </div>

              {/* 5. Typography & Size Dropdowns */}
              <div className="bg-slate-900/60 p-4 rounded-xl border border-slate-800 grid grid-cols-2 gap-4">
                <div>
                  <label className="text-xs font-bold text-slate-400 block mb-1">Font Size</label>
                  <select 
                    value={fontSize}
                    onChange={(e) => updateCssProperty('fontSize', e.target.value)}
                    className="w-full bg-[#07080c] border border-slate-700 rounded-lg p-2 text-xs text-white"
                  >
                    <option value="12px">12px Small</option>
                    <option value="14px">14px Medium</option>
                    <option value="16px">16px Large</option>
                    <option value="18px">18px XL</option>
                    <option value="22px">22px 2XL</option>
                  </select>
                </div>

                <div>
                  <label className="text-xs font-bold text-slate-400 block mb-1">Font Weight</label>
                  <select 
                    value={fontWeight}
                    onChange={(e) => updateCssProperty('fontWeight', e.target.value)}
                    className="w-full bg-[#07080c] border border-slate-700 rounded-lg p-2 text-xs text-white"
                  >
                    <option value="400">Regular 400</option>
                    <option value="600">SemiBold 600</option>
                    <option value="700">Bold 700</option>
                    <option value="800">Black 800</option>
                  </select>
                </div>
              </div>

              {/* 6. Shape & Curve Controls */}
              <div className="bg-slate-900/60 p-4 rounded-xl border border-slate-800 grid grid-cols-2 gap-4">
                <div>
                  <label className="text-xs font-bold text-slate-400 block mb-1">Border Radius</label>
                  <select 
                    value={borderRadius}
                    onChange={(e) => updateCssProperty('borderRadius', e.target.value)}
                    className="w-full bg-[#07080c] border border-slate-700 rounded-lg p-2 text-xs text-white"
                  >
                    <option value="0px">Sharp 0px</option>
                    <option value="6px">Small 6px</option>
                    <option value="12px">Medium 12px</option>
                    <option value="9999px">Full Pill</option>
                  </select>
                </div>

                <div>
                  <label className="text-xs font-bold text-slate-400 block mb-1">Border Width</label>
                  <select 
                    value={borderWidth}
                    onChange={(e) => updateCssProperty('borderWidth', e.target.value)}
                    className="w-full bg-[#07080c] border border-slate-700 rounded-lg p-2 text-xs text-white"
                  >
                    <option value="0px">None 0px</option>
                    <option value="1px">Thin 1px</option>
                    <option value="2px">Medium 2px</option>
                    <option value="3px">Thick 3px</option>
                  </select>
                </div>
              </div>

            </div>
          )}

          {/* TAB 2: ANNOTATED CODE EDITOR (WITH EDUCATIONAL COMMENTS) */}
          {activeTab === 'code' && (
            <div className="flex-1 overflow-y-auto p-6 space-y-6 custom-scrollbar">
              
              {/* HTML Editor */}
              <div className="space-y-2">
                <label className="text-xs font-bold text-orange-400 uppercase tracking-wider block">HTML Markup</label>
                <textarea 
                  value={htmlCode}
                  onChange={(e) => setHtmlCode(e.target.value)}
                  className="w-full bg-[#07080c] border border-slate-800 rounded-xl p-3.5 text-xs font-mono text-orange-300 focus:outline-none focus:border-indigo-500 custom-scrollbar resize-y min-h-[90px]"
                  spellCheck="false"
                />
              </div>

              {/* CSS Editor with Educational Comments */}
              <div className="space-y-2">
                <label className="text-xs font-bold text-blue-400 uppercase tracking-wider block flex items-center justify-between">
                  <span>CSS Code (Annotated with Explanatory Comments)</span>
                </label>
                <textarea 
                  value={cssCode}
                  onChange={(e) => setCssCode(e.target.value)}
                  className="w-full bg-[#07080c] border border-slate-800 rounded-xl p-3.5 text-xs font-mono text-blue-300 focus:outline-none focus:border-indigo-500 custom-scrollbar resize-y min-h-[350px] leading-relaxed"
                  spellCheck="false"
                />
              </div>

            </div>
          )}

          {/* Sidebar Footer */}
          <div className="p-4 border-t border-slate-800 bg-[#0c0d12] flex justify-end">
            <button 
              onClick={handleCopy}
              className="w-full py-2.5 bg-indigo-600 hover:bg-indigo-500 text-white rounded-xl text-xs font-bold transition-colors shadow-xl flex items-center justify-center space-x-2"
            >
              {isCopied ? <Check className="w-4 h-4 text-green-400" /> : <Copy className="w-4 h-4" />}
              <span>{isCopied ? 'Code Copied to Clipboard!' : 'Copy Code with CSS Comments'}</span>
            </button>
          </div>

        </div>

      </div>

    </div>
  );
}
