import React, { useState } from 'react';
import { Check, Copy, Code2, Play, RotateCcw, Sliders, Palette, Type, Square, Sparkles, ChevronDown, ChevronUp } from 'lucide-react';

const PRESET_COLORS = [
  { name: 'Indigo', hex: '#6366f1' },
  { name: 'Emerald', hex: '#10b981' },
  { name: 'Cyan', hex: '#06b6d4' },
  { name: 'Rose', hex: '#f43f5e' },
  { name: 'Amber', hex: '#f59e0b' },
  { name: 'Violet', hex: '#8b5cf6' },
  { name: 'Cyber Pink', hex: '#ff0055' },
  { name: 'Gold', hex: '#eab308' }
];

export default function ButtonEditorCard({ btn, openSandbox }) {
  const [htmlCode, setHtmlCode] = useState(btn.html);
  const [cssCode, setCssCode] = useState(btn.css);
  
  // Controls Visibility States
  const [isInspectorOpen, setIsInspectorOpen] = useState(false);
  const [isCodeEditorOpen, setIsCodeEditorOpen] = useState(false);
  const [isCopied, setIsCopied] = useState(false);
  const [showMeta, setShowMeta] = useState(true);
  const [showHtmlEditor, setShowHtmlEditor] = useState(true);

  // Extract initial text label from HTML
  const initialText = btn.html.match(/>([^<]+)</)?.[1] || "Button";
  const [buttonLabel, setButtonLabel] = useState(initialText);

  // Inspector Component States
  const [bgColor, setBgColor] = useState('#6366f1');
  const [textColor, setTextColor] = useState('#ffffff');
  const [fontSize, setFontSize] = useState('15px');
  const [fontWeight, setFontWeight] = useState('600');
  const [borderRadius, setBorderRadius] = useState('8px');
  const [borderWidth, setBorderWidth] = useState('0px');
  const [borderColor, setBorderColor] = useState('#6366f1');

  const uniqueId = btn.id;

  // Safe CSS Scoping
  const scopedCss = cssCode
    .replace(/(^|\n|\})\s*button([^{]*)\{/g, `$1 %%SCOPE%% button$2{`)
    .replace(/(^|\n|\})\s*\.([a-zA-Z_-][a-zA-Z0-9_-]*)/g, `$1 %%SCOPE%% .$2`)
    .replace(/%%SCOPE%%/g, `.btn-preview-${uniqueId}`);

  const isModified = htmlCode !== btn.html || cssCode !== btn.css;

  // Always copy latest code
  const handleCopy = () => {
    const code = `<style>\n${cssCode}\n</style>\n\n${htmlCode}`;
    navigator.clipboard.writeText(code);
    setIsCopied(true);
    setTimeout(() => setIsCopied(false), 2000);
  };

  const handleReset = () => {
    setHtmlCode(btn.html);
    setCssCode(btn.css);
    setButtonLabel(initialText);
  };

  // Convert Hex to RGB for box-shadows
  const hexToRgb = (hex) => {
    let c = hex.replace('#', '');
    if (c.length === 3) c = c.split('').map(x => x + x).join('');
    const num = parseInt(c, 16);
    return {
      r: (num >> 16) & 255,
      g: (num >> 8) & 255,
      b: num & 255
    };
  };

  // Update Button Label in HTML live
  const handleLabelChange = (newLabel) => {
    setButtonLabel(newLabel);
    const updatedHtml = htmlCode.replace(/>([^<]+)</, `>${newLabel}<`);
    setHtmlCode(updatedHtml);
  };

  // Update CSS properties dynamically from Inspector Controls
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
    } else if (prop === 'borderColor') {
      setBorderColor(val);
      newCss = newCss.replace(/border:\s*(\d+px\s+\w+\s+)#[a-fA-F0-9]{3,6}/g, `border: $1${val}`);
    }
    setCssCode(newCss);
  };

  return (
    <div className="bg-slate-900/50 border border-slate-800/90 hover:border-indigo-500/40 rounded-2xl overflow-hidden flex flex-col shadow-xl transition-all duration-300 group">
      
      {/* Live Preview Stage */}
      <div className="p-8 flex flex-col items-center justify-center min-h-[160px] border-b border-slate-800/80 relative overflow-hidden bg-[#0a0b10]">
         <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGNpcmNsZSBjeD0iMiIgY3k9IjIiIHI9IjIiIGZpbGw9IiMzMzQxNTUiIGZpbGwtb3BhY2l0eT0iMC4xNSIvPjwvc3ZnPg==')] opacity-60" />
         <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/5 via-transparent to-purple-500/5" />
         
         <style dangerouslySetInnerHTML={{__html: scopedCss}} />
         
         <div 
           className={`btn-preview-${uniqueId} relative z-10 flex items-center justify-center w-full h-full transform transition-transform duration-300 group-hover:scale-105`} 
           dangerouslySetInnerHTML={{__html: htmlCode}} 
         />
      </div>

      {/* Meta & Controls Header Bar */}
      <div className="p-5 flex-1 flex flex-col bg-[#12141c]/90">
        
        <div className="flex flex-col gap-3 mb-3">
          <div className="flex justify-between items-center gap-2">
            {showMeta ? (
              <div className="flex-1 min-w-0 pr-2">
                <h3 className="font-bold text-base text-slate-100 truncate flex items-center">
                  <span className="truncate">{btn.name}</span>
                  {isModified && <span className="ml-2 w-2 h-2 shrink-0 rounded-full bg-amber-400" title="Modified" />}
                </h3>
                <div className="flex flex-wrap gap-1.5 mt-1.5">
                  {btn.tags?.slice(0, 3).map((tag, i) => (
                    <span key={i} className="text-[10px] font-mono px-2 py-0.5 rounded bg-slate-800 text-slate-400 border border-slate-700/50 truncate max-w-[100px]">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            ) : (
              <div className="flex items-center shrink-0">
                <span className="text-[11px] font-mono text-indigo-400 font-semibold bg-indigo-500/10 px-2 py-1 rounded border border-indigo-500/20">
                  [Focus Mode]
                </span>
              </div>
            )}
            
            <div className="flex space-x-1.5 shrink-0">
              <button 
                onClick={() => setIsInspectorOpen(!isInspectorOpen)}
                className={`flex items-center space-x-1 px-2.5 py-1.5 rounded-lg text-xs font-semibold transition-colors border ${isInspectorOpen ? 'bg-purple-600 text-white border-purple-500' : 'bg-purple-500/10 hover:bg-purple-500/20 text-purple-400 border-purple-500/20'}`}
                title="Visual Component Inspector & No-Code Controls"
              >
                <Sliders className="w-3.5 h-3.5" />
                <span>Visual Inspector</span>
              </button>

              <button 
                onClick={() => setIsCodeEditorOpen(!isCodeEditorOpen)}
                className={`flex items-center space-x-1 px-2.5 py-1.5 rounded-lg text-xs font-semibold transition-colors border ${isCodeEditorOpen ? 'bg-indigo-600 text-white border-indigo-500' : 'bg-slate-800 hover:bg-slate-700 text-slate-300 border-slate-700'}`}
                title="Quick inline HTML & CSS code editor"
              >
                <Code2 className="w-3.5 h-3.5" />
                <span>{isCodeEditorOpen ? 'Hide Code' : 'Edit Code'}</span>
              </button>

              <button 
                onClick={handleCopy}
                className="flex items-center space-x-1 px-2.5 py-1.5 bg-indigo-500/10 hover:bg-indigo-500/20 text-indigo-400 rounded-lg text-xs font-semibold transition-colors border border-indigo-500/20"
                title="Copy current edited code"
              >
                {isCopied ? <Check className="w-3.5 h-3.5 text-green-400" /> : <Copy className="w-3.5 h-3.5" />}
                <span>{isCopied ? 'Copied' : 'Copy'}</span>
              </button>
            </div>
          </div>

          {/* Quick Color Swatches Bar */}
          <div className="flex items-center justify-between bg-slate-950 p-2 rounded-xl border border-slate-800/80">
            <span className="text-[11px] font-semibold text-slate-400 flex items-center">
              <Palette className="w-3.5 h-3.5 mr-1.5 text-indigo-400" /> Color:
            </span>
            
            <div className="flex items-center space-x-1.5">
              <div className="flex space-x-1">
                {PRESET_COLORS.map((c) => (
                  <button
                    key={c.name}
                    onClick={() => updateCssProperty('background', c.hex)}
                    style={{ backgroundColor: c.hex }}
                    className="w-4 h-4 rounded-full border border-white/20 hover:scale-125 transition-transform"
                    title={c.name}
                  />
                ))}
              </div>
              <div className="relative flex items-center border-l border-slate-800 pl-1.5">
                <input 
                  type="color" 
                  value={bgColor}
                  onChange={(e) => updateCssProperty('background', e.target.value)}
                  className="w-5 h-5 rounded cursor-pointer border-0 bg-transparent"
                  title="Pick Custom Background Color"
                />
              </div>
            </div>
          </div>

        </div>

        {/* --- NO-CODE VISUAL INSPECTOR CONTROL PANEL --- */}
        {isInspectorOpen && (
          <div className="mt-3 bg-[#0a0b10] border border-purple-500/30 rounded-xl p-4 space-y-4 animate-in fade-in zoom-in-95 duration-200">
            
            <div className="flex items-center justify-between border-b border-slate-800 pb-2">
              <span className="text-xs font-bold text-purple-400 uppercase tracking-wider flex items-center">
                <Sparkles className="w-3.5 h-3.5 mr-1.5" /> Visual Component Controls (No-Code)
              </span>
              {isModified && (
                <button onClick={handleReset} className="flex items-center text-[10px] text-amber-400 hover:underline">
                  <RotateCcw className="w-3 h-3 mr-1" /> Reset All
                </button>
              )}
            </div>

            {/* 1. Label Text Input */}
            <div>
              <label className="text-[11px] font-bold text-slate-400 uppercase tracking-wide block mb-1">Button Label Text</label>
              <input 
                type="text" 
                value={buttonLabel}
                onChange={(e) => handleLabelChange(e.target.value)}
                className="w-full bg-[#12141c] border border-slate-800 rounded-lg px-3 py-1.5 text-xs text-white focus:outline-none focus:border-purple-500"
              />
            </div>

            {/* 2. Typography Controls (Font Size, Font Weight, Text Color) */}
            <div className="grid grid-cols-3 gap-2">
              <div>
                <label className="text-[10px] font-semibold text-slate-400 block mb-1">Font Size</label>
                <select 
                  value={fontSize} 
                  onChange={(e) => updateCssProperty('fontSize', e.target.value)}
                  className="w-full bg-[#12141c] border border-slate-800 rounded-lg p-1.5 text-xs text-slate-200"
                >
                  <option value="12px">12px Small</option>
                  <option value="14px">14px Normal</option>
                  <option value="16px">16px Medium</option>
                  <option value="18px">18px Large</option>
                  <option value="20px">20px XL</option>
                </select>
              </div>

              <div>
                <label className="text-[10px] font-semibold text-slate-400 block mb-1">Font Weight</label>
                <select 
                  value={fontWeight} 
                  onChange={(e) => updateCssProperty('fontWeight', e.target.value)}
                  className="w-full bg-[#12141c] border border-slate-800 rounded-lg p-1.5 text-xs text-slate-200"
                >
                  <option value="400">Regular 400</option>
                  <option value="600">SemiBold 600</option>
                  <option value="700">Bold 700</option>
                  <option value="800">Black 800</option>
                </select>
              </div>

              <div>
                <label className="text-[10px] font-semibold text-slate-400 block mb-1">Text Color</label>
                <div className="flex items-center space-x-1.5 bg-[#12141c] border border-slate-800 rounded-lg p-1">
                  <input 
                    type="color" 
                    value={textColor}
                    onChange={(e) => updateCssProperty('color', e.target.value)}
                    className="w-5 h-5 rounded cursor-pointer border-0 bg-transparent"
                  />
                  <span className="text-[10px] font-mono text-slate-300">{textColor}</span>
                </div>
              </div>
            </div>

            {/* 3. Shape & Border Controls (Border Radius, Border Width, Border Color) */}
            <div className="grid grid-cols-3 gap-2">
              <div>
                <label className="text-[10px] font-semibold text-slate-400 block mb-1">Border Radius</label>
                <select 
                  value={borderRadius} 
                  onChange={(e) => updateCssProperty('borderRadius', e.target.value)}
                  className="w-full bg-[#12141c] border border-slate-800 rounded-lg p-1.5 text-xs text-slate-200"
                >
                  <option value="0px">Sharp 0px</option>
                  <option value="6px">Rounded 6px</option>
                  <option value="12px">Medium 12px</option>
                  <option value="9999px">Full Pill</option>
                </select>
              </div>

              <div>
                <label className="text-[10px] font-semibold text-slate-400 block mb-1">Border Width</label>
                <select 
                  value={borderWidth} 
                  onChange={(e) => updateCssProperty('borderWidth', e.target.value)}
                  className="w-full bg-[#12141c] border border-slate-800 rounded-lg p-1.5 text-xs text-slate-200"
                >
                  <option value="0px">None 0px</option>
                  <option value="1px">Thin 1px</option>
                  <option value="2px">Medium 2px</option>
                  <option value="3px">Thick 3px</option>
                </select>
              </div>

              <div>
                <label className="text-[10px] font-semibold text-slate-400 block mb-1">Border Color</label>
                <div className="flex items-center space-x-1.5 bg-[#12141c] border border-slate-800 rounded-lg p-1">
                  <input 
                    type="color" 
                    value={borderColor}
                    onChange={(e) => updateCssProperty('borderColor', e.target.value)}
                    className="w-5 h-5 rounded cursor-pointer border-0 bg-transparent"
                  />
                  <span className="text-[10px] font-mono text-slate-300">{borderColor}</span>
                </div>
              </div>
            </div>

            <div className="text-[10px] text-slate-500 italic text-right">
              All visual changes automatically rewrite the HTML & CSS code below!
            </div>
          </div>
        )}

        {/* --- INLINE CODE EDITOR DRAWER --- */}
        {isCodeEditorOpen && (
          <div className="mt-3 space-y-3 pt-3 border-t border-slate-800 animate-in fade-in slide-in-from-top-2 duration-200">
            <div className="flex items-center justify-between bg-slate-950 p-2 rounded-lg border border-slate-800/80 text-[11px] text-slate-400">
              <span className="font-semibold text-slate-300">Editor Focus:</span>
              <div className="flex space-x-2">
                <button 
                  onClick={() => setShowMeta(!showMeta)} 
                  className={`px-2 py-0.5 rounded text-[10px] ${!showMeta ? 'bg-indigo-500/20 text-indigo-400 border border-indigo-500/30' : 'hover:bg-slate-800'}`}
                >
                  {showMeta ? 'Hide Header' : 'Show Header'}
                </button>
                <button 
                  onClick={() => setShowHtmlEditor(!showHtmlEditor)} 
                  className={`px-2 py-0.5 rounded text-[10px] ${!showHtmlEditor ? 'bg-indigo-500/20 text-indigo-400 border border-indigo-500/30' : 'hover:bg-slate-800'}`}
                >
                  {showHtmlEditor ? 'Hide HTML Box' : 'Show HTML Box'}
                </button>
              </div>
            </div>

            {showHtmlEditor && (
              <div className="space-y-1">
                <div className="flex justify-between items-center">
                  <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">Live HTML</span>
                  {isModified && (
                    <button onClick={handleReset} className="flex items-center text-[10px] text-amber-400 hover:underline">
                      <RotateCcw className="w-3 h-3 mr-1" /> Reset Code
                    </button>
                  )}
                </div>
                <textarea 
                  className="w-full bg-[#07080c] border border-slate-800 rounded-lg p-2.5 text-xs font-mono text-orange-300 focus:outline-none focus:border-indigo-500 custom-scrollbar resize-y min-h-[60px]"
                  value={htmlCode}
                  onChange={(e) => setHtmlCode(e.target.value)}
                  spellCheck="false"
                />
              </div>
            )}

            <div className="space-y-1">
              <div className="flex justify-between items-center">
                <span className="text-[10px] font-bold text-indigo-400 uppercase tracking-wider">Live CSS (Instant Sync)</span>
                {!showHtmlEditor && isModified && (
                  <button onClick={handleReset} className="flex items-center text-[10px] text-amber-400 hover:underline">
                    <RotateCcw className="w-3 h-3 mr-1" /> Reset Code
                  </button>
                )}
              </div>
              <textarea 
                className="w-full bg-[#07080c] border border-slate-800 rounded-lg p-2.5 text-xs font-mono text-blue-300 focus:outline-none focus:border-indigo-500 custom-scrollbar resize-y min-h-[130px]"
                value={cssCode}
                onChange={(e) => setCssCode(e.target.value)}
                spellCheck="false"
              />
            </div>

            <div className="flex justify-between items-center pt-2 border-t border-slate-800/60">
              <span className="text-[10px] text-slate-500 italic">Syncs 0ms live in preview above</span>
              <button 
                onClick={handleCopy}
                className="flex items-center space-x-1.5 px-3 py-1.5 bg-indigo-600 hover:bg-indigo-500 text-white rounded-lg text-xs font-semibold transition-colors shadow-lg"
              >
                {isCopied ? <Check className="w-3.5 h-3.5 text-green-400" /> : <Copy className="w-3.5 h-3.5" />}
                <span>{isCopied ? 'Code Copied!' : 'Copy Full Code'}</span>
              </button>
            </div>
          </div>
        )}

      </div>
    </div>
  );
}
