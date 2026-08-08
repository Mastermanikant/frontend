import React, { useState } from 'react';
import { Check, Copy, Sliders, Play, Palette } from 'lucide-react';
import ButtonStudioModal from './ButtonStudioModal';

export default function ButtonEditorCard({ btn }) {
  const [isStudioOpen, setIsStudioOpen] = useState(false);
  const [isCopied, setIsCopied] = useState(false);

  const uniqueId = btn.id;

  // Safe Scoped CSS
  const scopedCss = btn.css
    .replace(/(^|\n|\})\s*button([^{]*)\{/g, `$1 %%SCOPE%% button$2{`)
    .replace(/(^|\n|\})\s*\.([a-zA-Z_-][a-zA-Z0-9_-]*)/g, `$1 %%SCOPE%% .$2`)
    .replace(/%%SCOPE%%/g, `.btn-preview-${uniqueId}`);

  const handleCopy = () => {
    const code = `<!-- HTML -->\n${btn.html}\n\n/* CSS */\n<style>\n${btn.css}\n</style>`;
    navigator.clipboard.writeText(code);
    setIsCopied(true);
    setTimeout(() => setIsCopied(false), 2000);
  };

  return (
    <div className="bg-slate-900/50 border border-slate-700/80 hover:border-indigo-500/60 rounded-2xl overflow-hidden flex flex-col shadow-xl transition-all duration-300 group hover:shadow-indigo-500/10">
      
      {/* Live Preview Box with Crisp Visible Border */}
      <div className="p-8 flex flex-col items-center justify-center min-h-[160px] border-b border-slate-800/90 relative overflow-hidden bg-[#0a0b10]">
         <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGNpcmNsZSBjeD0iMiIgY3k9IjIiIHI9IjIiIGZpbGw9IiMzMzQxNTUiIGZpbGwtb3BhY2l0eT0iMC4xNSIvPjwvc3ZnPg==')] opacity-60" />
         <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/5 via-transparent to-purple-500/5" />
         
         <style dangerouslySetInnerHTML={{__html: scopedCss}} />
         
         <div 
           className={`btn-preview-${uniqueId} relative z-10 flex items-center justify-center w-full h-full transform transition-transform duration-300 group-hover:scale-105`} 
           dangerouslySetInnerHTML={{__html: btn.html}} 
         />
      </div>

      {/* Card Info & Action Bar */}
      <div className="p-5 flex-1 flex flex-col bg-[#12141c]/90">
        <div className="flex justify-between items-start mb-3">
          <div className="flex-1 min-w-0 pr-2">
            <h3 className="font-bold text-base text-slate-100 truncate">{btn.name}</h3>
            <div className="flex flex-wrap gap-1.5 mt-1.5">
              {btn.tags?.map((tag, i) => (
                <span key={i} className="text-[10px] font-mono px-2 py-0.5 rounded bg-slate-800 text-slate-400 border border-slate-700/60 truncate">
                  {tag}
                </span>
              ))}
            </div>
          </div>

          <div className="flex space-x-1.5 shrink-0">
            <button 
              onClick={() => setIsStudioOpen(true)}
              className="flex items-center space-x-1.5 px-3 py-1.5 bg-indigo-600 hover:bg-indigo-500 text-white rounded-lg text-xs font-bold transition-all shadow-md"
              title="Open Fullscreen Studio with side-by-side fixed preview"
            >
              <Sliders className="w-3.5 h-3.5" />
              <span>Customize</span>
            </button>

            <button 
              onClick={handleCopy}
              className="flex items-center space-x-1 px-2.5 py-1.5 bg-slate-800 hover:bg-slate-700 text-slate-300 rounded-lg text-xs font-semibold transition-colors border border-slate-700"
              title="Copy Code"
            >
              {isCopied ? <Check className="w-3.5 h-3.5 text-green-400" /> : <Copy className="w-3.5 h-3.5" />}
              <span>{isCopied ? 'Copied' : 'Copy'}</span>
            </button>
          </div>
        </div>
      </div>

      {/* Fullscreen Side-by-Side Studio Modal */}
      {isStudioOpen && (
        <ButtonStudioModal 
          btn={btn} 
          onClose={() => setIsStudioOpen(false)} 
        />
      )}
    </div>
  );
}
