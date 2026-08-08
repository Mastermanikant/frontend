import React, { useState } from 'react';
import { Check, Copy, Code2, Play, RotateCcw, EyeOff, Eye, ChevronUp, ChevronDown } from 'lucide-react';

export default function ButtonEditorCard({ btn, openSandbox }) {
  const [htmlCode, setHtmlCode] = useState(btn.html);
  const [cssCode, setCssCode] = useState(btn.css);
  const [isExpanded, setIsExpanded] = useState(false);
  const [isCopied, setIsCopied] = useState(false);
  
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

  return (
    <div className="bg-slate-900/50 border border-slate-800/90 hover:border-indigo-500/40 rounded-2xl overflow-hidden flex flex-col shadow-xl transition-all duration-300 group">
      
      {/* Live Preview Box (Stays visible at the top during live CSS editing) */}
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
        
        {/* Title, Tags, and Main Action Bar */}
        <div className="flex justify-between items-start mb-3">
          {showMeta ? (
            <div>
              <h3 className="font-bold text-base text-slate-100 flex items-center">
                {btn.name}
                {isModified && <span className="ml-2 w-2 h-2 rounded-full bg-amber-400" title="Modified" />}
              </h3>
              
              {/* Tags */}
              <div className="flex flex-wrap gap-1.5 mt-2">
                {btn.tags?.map((tag, i) => (
                  <span key={i} className="text-[10px] font-mono px-2 py-0.5 rounded bg-slate-800 text-slate-400 border border-slate-700/50">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ) : (
            <span className="text-xs font-mono text-indigo-400 flex items-center">
              [Focus CSS Mode] {btn.name}
            </span>
          )}
          
          <div className="flex space-x-1.5 shrink-0 ml-2">
            <button 
              onClick={() => openSandbox({ name: btn.name, html: htmlCode, css: cssCode })}
              className="flex items-center space-x-1 px-2.5 py-1.5 bg-pink-500/10 hover:bg-pink-500/20 text-pink-400 rounded-lg text-xs font-semibold transition-colors border border-pink-500/20"
              title="Full Screen IDE Sandbox with iframe isolation"
            >
              <Play className="w-3.5 h-3.5" />
              <span>Full Sandbox</span>
            </button>

            <button 
              onClick={() => setIsExpanded(!isExpanded)}
              className={`flex items-center space-x-1 px-2.5 py-1.5 rounded-lg text-xs font-semibold transition-colors border ${isExpanded ? 'bg-indigo-600 text-white border-indigo-500' : 'bg-slate-800 hover:bg-slate-700 text-slate-300 border-slate-700'}`}
              title="Quick inline HTML & CSS editor"
            >
              <Code2 className="w-3.5 h-3.5" />
              <span>{isExpanded ? 'Hide Editor' : 'Quick Edit'}</span>
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

        {/* Expandable Live Editor Drawer */}
        {isExpanded && (
          <div className="mt-3 space-y-3 pt-3 border-t border-slate-800 animate-in fade-in slide-in-from-top-2 duration-200">
            
            {/* Focus Sub-Controls: Allows shrinking Title or HTML to keep CSS right under preview */}
            <div className="flex items-center justify-between bg-slate-950 p-2 rounded-lg border border-slate-800/80 text-[11px] text-slate-400">
              <span className="font-semibold text-slate-300">Live Editor Layout:</span>
              <div className="flex space-x-2">
                <button 
                  onClick={() => setShowMeta(!showMeta)} 
                  className={`px-2 py-0.5 rounded text-[10px] ${!showMeta ? 'bg-indigo-500/20 text-indigo-400 border border-indigo-500/30' : 'hover:bg-slate-800'}`}
                >
                  {showMeta ? 'Hide Title' : 'Show Title'}
                </button>
                <button 
                  onClick={() => setShowHtmlEditor(!showHtmlEditor)} 
                  className={`px-2 py-0.5 rounded text-[10px] ${!showHtmlEditor ? 'bg-indigo-500/20 text-indigo-400 border border-indigo-500/30' : 'hover:bg-slate-800'}`}
                >
                  {showHtmlEditor ? 'Hide HTML Box' : 'Show HTML Box'}
                </button>
              </div>
            </div>

            {/* Live HTML Section (Can be collapsed to focus purely on CSS) */}
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

            {/* Live CSS Section (Always visible for real-time CSS tweaking) */}
            <div className="space-y-1">
              <div className="flex justify-between items-center">
                <span className="text-[10px] font-bold text-indigo-400 uppercase tracking-wider">Live CSS (Instant Preview Sync)</span>
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
              <span className="text-[10px] text-slate-500 italic">Changes reflect live in preview above</span>
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
