import React, { useState } from 'react';
import { Check, Copy, Code2, Play, RotateCcw, Palette } from 'lucide-react';

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
  const [isExpanded, setIsExpanded] = useState(false);
  const [isCopied, setIsCopied] = useState(false);
  const [selectedColor, setSelectedColor] = useState('#6366f1');

  // Custom sub-shrink controls for live CSS focused editing
  const [showMeta, setShowMeta] = useState(true);
  const [showHtmlEditor, setShowHtmlEditor] = useState(true);

  const uniqueId = btn.id;

  // Safe CSS Scoping using a placeholder to avoid double-prefixing
  const scopedCss = cssCode
    .replace(/(^|\n|\})\s*button([^{]*)\{/g, `$1 %%SCOPE%% button$2{`)
    .replace(/(^|\n|\})\s*\.([a-zA-Z_-][a-zA-Z0-9_-]*)/g, `$1 %%SCOPE%% .$2`)
    .replace(/%%SCOPE%%/g, `.btn-preview-${uniqueId}`);

  const isModified = htmlCode !== btn.html || cssCode !== btn.css;

  // Always copy the latest edited htmlCode and cssCode!
  const handleCopy = () => {
    const code = `<style>\n${cssCode}\n</style>\n\n${htmlCode}`;
    navigator.clipboard.writeText(code);
    setIsCopied(true);
    setTimeout(() => setIsCopied(false), 2000);
  };

  const handleReset = () => {
    setHtmlCode(btn.html);
    setCssCode(btn.css);
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

  // Dynamically update CSS colors when user picks a preset or custom color picker
  const handleColorChange = (newHex) => {
    setSelectedColor(newHex);
    const { r, g, b } = hexToRgb(newHex);

    // Replace background, border-color, and color hexes with new hex
    let updated = cssCode
      .replace(/background:\s*#[a-fA-F0-9]{3,6}/g, `background: ${newHex}`)
      .replace(/border-color:\s*#[a-fA-F0-9]{3,6}/g, `border-color: ${newHex}`)
      .replace(/border:\s*(\d+px\s+\w+\s+)#[a-fA-F0-9]{3,6}/g, `border: $1${newHex}`)
      .replace(/rgba\(\s*\d+\s*,\s*\d+\s*,\s*\d+\s*,\s*[\d.]+\s*\)/g, `rgba(${r}, ${g}, ${b}, 0.4)`);

    setCssCode(updated);
  };

  return (
    <div className="bg-slate-900/50 border border-slate-800/90 hover:border-indigo-500/40 rounded-2xl overflow-hidden flex flex-col shadow-xl transition-all duration-300 group">
      
      {/* Live Preview Box */}
      <div className="p-8 flex flex-col items-center justify-center min-h-[160px] border-b border-slate-800/80 relative overflow-hidden bg-[#0a0b10]">
         <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGNpcmNsZSBjeD0iMiIgY3k9IjIiIHI9IjIiIGZpbGw9IiMzMzQxNTUiIGZpbGwtb3BhY2l0eT0iMC4xNSIvPjwvc3ZnPg==')] opacity-60" />
         <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/5 via-transparent to-purple-500/5" />
         
         <style dangerouslySetInnerHTML={{__html: scopedCss}} />
         
         <div 
           className={`btn-preview-${uniqueId} relative z-10 flex items-center justify-center w-full h-full transform transition-transform duration-300 group-hover:scale-105`} 
           dangerouslySetInnerHTML={{__html: htmlCode}} 
         />
      </div>

      {/* Meta & Controls Area */}
      <div className="p-5 flex-1 flex flex-col bg-[#12141c]/90">
        
        {/* Title, Color Picker Controls & Main Action Bar */}
        <div className="flex flex-col gap-3 mb-3">
          
          <div className="flex justify-between items-center gap-2">
            {showMeta ? (
              <div className="flex-1 min-w-0 pr-2">
                <h3 className="font-bold text-base text-slate-100 truncate flex items-center">
                  <span className="truncate">{btn.name}</span>
                  {isModified && <span className="ml-2 w-2 h-2 shrink-0 rounded-full bg-amber-400" title="Modified" />}
                </h3>
                
                {/* Tags */}
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
                onClick={() => openSandbox({ name: btn.name, html: htmlCode, css: cssCode })}
                className="flex items-center space-x-1 px-2.5 py-1.5 bg-pink-500/10 hover:bg-pink-500/20 text-pink-400 rounded-lg text-xs font-semibold transition-colors border border-pink-500/20"
                title="Full Screen IDE Sandbox"
              >
                <Play className="w-3.5 h-3.5" />
                <span className="hidden sm:inline">Sandbox</span>
              </button>

              <button 
                onClick={() => setIsExpanded(!isExpanded)}
                className={`flex items-center space-x-1 px-2.5 py-1.5 rounded-lg text-xs font-semibold transition-colors border ${isExpanded ? 'bg-indigo-600 text-white border-indigo-500' : 'bg-slate-800 hover:bg-slate-700 text-slate-300 border-slate-700'}`}
                title="Quick inline HTML & CSS editor"
              >
                <Code2 className="w-3.5 h-3.5" />
                <span>{isExpanded ? 'Hide' : 'Edit'}</span>
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

          {/* Color Picker & Preset Color Dropdown Bar */}
          <div className="flex items-center justify-between bg-slate-950 p-2 rounded-xl border border-slate-800/80">
            <span className="text-[11px] font-semibold text-slate-400 flex items-center">
              <Palette className="w-3.5 h-3.5 mr-1.5 text-indigo-400" /> Color:
            </span>
            
            <div className="flex items-center space-x-1.5">
              {/* Preset Color Swatches */}
              <div className="flex space-x-1">
                {PRESET_COLORS.map((c) => (
                  <button
                    key={c.name}
                    onClick={() => handleColorChange(c.hex)}
                    style={{ backgroundColor: c.hex }}
                    className="w-4 h-4 rounded-full border border-white/20 hover:scale-125 transition-transform"
                    title={c.name}
                  />
                ))}
              </div>

              {/* Native Color Picker Input */}
              <div className="relative flex items-center border-l border-slate-800 pl-1.5">
                <input 
                  type="color" 
                  value={selectedColor}
                  onChange={(e) => handleColorChange(e.target.value)}
                  className="w-5 h-5 rounded cursor-pointer border-0 bg-transparent"
                  title="Pick Custom HEX Color"
                />
              </div>
            </div>
          </div>

        </div>

        {/* Expandable Live Editor Drawer */}
        {isExpanded && (
          <div className="mt-2 space-y-3 pt-3 border-t border-slate-800 animate-in fade-in slide-in-from-top-2 duration-200">
            
            {/* Focus Sub-Controls */}
            <div className="flex items-center justify-between bg-slate-950 p-2 rounded-lg border border-slate-800/80 text-[11px] text-slate-400">
              <span className="font-semibold text-slate-300">Layout Focus:</span>
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

            {/* Live HTML Section */}
            {showHtmlEditor && (
              <div className="space-y-1">
                <div className="flex justify-between items-center">
                  <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">Live HTML</span>
                  {isModified && (
                    <button 
                      onClick={handleReset}
                      className="flex items-center text-[10px] text-amber-400 hover:underline transition-colors"
                    >
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

            {/* Live CSS Section */}
            <div className="space-y-1">
              <div className="flex justify-between items-center">
                <span className="text-[10px] font-bold text-indigo-400 uppercase tracking-wider">Live CSS (Instant Sync)</span>
                {!showHtmlEditor && isModified && (
                  <button 
                    onClick={handleReset}
                    className="flex items-center text-[10px] text-amber-400 hover:underline transition-colors"
                  >
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

            {/* Bottom Action Row */}
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
