import React, { useState, useEffect } from 'react';
import { buttonLibraryData, globalKeyframes } from '../data/buttonLibraryData';
import { Check, Copy, Code2, ChevronDown, ChevronUp, Play } from 'lucide-react';
import InteractiveSandboxModal from './InteractiveSandboxModal';

export default function ButtonLibraryDemo() {
  const [copiedIndex, setCopiedIndex] = useState(null);
  const [expandedCode, setExpandedCode] = useState({});
  const [sandboxData, setSandboxData] = useState(null);
  const [previewUrl, setPreviewUrl] = useState('');

  const toggleCode = (id) => {
    setExpandedCode(prev => ({ ...prev, [id]: !prev[id] }));
  };

  const handleCopy = (html, css, index) => {
    const fullCode = `<!-- HTML -->\n${html}\n\n/* CSS */\n${css}`;
    navigator.clipboard.writeText(fullCode);
    setCopiedIndex(index);
    setTimeout(() => setCopiedIndex(null), 2000);
  };

  const openSandbox = (btn) => {
    setSandboxData({ name: btn.name, html: btn.html, css: btn.css });
  };

  return (
    <div className="bg-[#0f111a] min-h-screen text-slate-200 font-sans p-4 md:p-8 overflow-y-auto relative">
      <style dangerouslySetInnerHTML={{__html: globalKeyframes}} />
      <div className="max-w-7xl mx-auto">
        <header className="mb-12 border-b border-slate-800/80 pb-8 text-center md:text-left relative">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-indigo-500/10 blur-3xl -z-10 rounded-full" />
          <h1 className="text-4xl md:text-6xl font-extrabold text-white mb-4 tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-indigo-400 to-purple-500">
            Frontend Button Library
          </h1>
          <p className="text-lg md:text-xl text-slate-400 mb-6 max-w-3xl">
            The Ultimate Collection of Button Types, Styles, States, and Actions.
            Hover over the buttons below to see physical interactions. Click <span className="text-pink-400 font-semibold">[Sandbox]</span> to edit live.
          </p>
        </header>

        {buttonLibraryData.map((category, catIdx) => (
          <section key={catIdx} className="mb-20 relative">
            <div className="absolute -left-4 top-0 w-1 h-8 bg-gradient-to-b from-indigo-500 to-purple-500 rounded-r-lg" />
            <h2 className="text-3xl font-extrabold text-slate-100 border-b border-slate-800/60 pb-4 mb-8 flex items-center tracking-tight">
              <span className="text-indigo-500 mr-4 font-mono text-2xl opacity-50">0{catIdx + 1}</span> {category.name}
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 2xl:grid-cols-3 gap-8 md:gap-10">
              {category.buttons.map((btn, btnIdx) => {
                const uniqueId = `${catIdx}-${btnIdx}`;
                
                // Safe CSS Scoping using a placeholder to avoid double-prefixing
                const scopedCss = btn.css
                  .replace(/(^|\n|\})\s*button([^{]*)\{/g, `$1 %%SCOPE%% button$2{`)
                  .replace(/(^|\n|\})\s*\.([a-zA-Z_-][a-zA-Z0-9_-]*)/g, `$1 %%SCOPE%% .$2`)
                  .replace(/%%SCOPE%%/g, `.btn-preview-${uniqueId}`);

                return (
                  <div key={btnIdx} className="bg-slate-900/40 border border-slate-800/80 hover:border-indigo-500/50 rounded-2xl overflow-hidden flex flex-col shadow-2xl transition-all duration-300 hover:shadow-indigo-500/10 hover:-translate-y-1 group">
                    
                    {/* Visual Preview Area - Upgraded Aesthetics */}
                    <div className="p-10 flex flex-col items-center justify-center min-h-[180px] border-b border-slate-800/80 relative overflow-hidden bg-[#0f111a]">
                       {/* Subtle Background Grid & Radial Glow for premium feel */}
                       <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGNpcmNsZSBjeD0iMiIgY3k9IjIiIHI9IjIiIGZpbGw9IiMzMzQxNTUiIGZpbGwtb3BhY2l0eT0iMC4yIi8+PC9zdmc+')] opacity-50" />
                       <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/5 via-transparent to-purple-500/5" />
                       
                       {/* Global Button CSS is injected here */}
                       <style dangerouslySetInnerHTML={{__html: scopedCss}} />
                       
                       {/* The actual rendered button inside a safe wrapper */}
                       <div className={`btn-preview-${uniqueId} relative z-10 flex items-center justify-center w-full h-full transform transition-transform duration-300 group-hover:scale-105`} dangerouslySetInnerHTML={{__html: btn.html}} />
                    </div>

                    {/* Meta & Code Area */}
                    <div className="p-6 flex-1 flex flex-col bg-[#161925]/80 backdrop-blur-md">
                      <div className="flex justify-between items-center mb-3">
                        <h3 className="font-bold text-lg text-indigo-300 truncate pr-2">{btn.name}</h3>
                        
                        <div className="flex space-x-2 shrink-0">
                          <button 
                            onClick={() => openSandbox(btn)}
                            className="flex items-center space-x-1.5 px-3 py-1.5 bg-pink-500/10 hover:bg-pink-500/20 text-pink-400 rounded-lg text-xs font-semibold transition-colors border border-pink-500/20"
                            title="Interactive Sandbox"
                          >
                            <Play className="w-4 h-4" />
                            <span>Sandbox</span>
                          </button>

                          <button 
                            onClick={() => toggleCode(uniqueId)}
                            className="flex items-center space-x-1.5 px-2 py-1.5 bg-slate-800 hover:bg-slate-700 text-slate-300 rounded-lg text-xs font-semibold transition-colors border border-slate-700"
                            title="Toggle Code View"
                          >
                            <Code2 className="w-4 h-4" />
                          </button>

                          <button 
                            onClick={() => handleCopy(btn.html, btn.css, uniqueId)}
                            className="flex items-center space-x-1.5 px-2 py-1.5 bg-indigo-500/10 hover:bg-indigo-500/20 text-indigo-400 rounded-lg text-xs font-semibold transition-colors border border-indigo-500/20"
                            title="Copy Code"
                          >
                            {copiedIndex === uniqueId ? <Check className="w-4 h-4 text-green-400" /> : <Copy className="w-4 h-4" />}
                          </button>
                        </div>
                      </div>

                      {/* Expandable Code Section */}
                      {expandedCode[uniqueId] && (
                        <div className="mt-2 space-y-3 pt-4 border-t border-slate-800 animate-in fade-in slide-in-from-top-2 duration-200">
                          <div className="bg-[#0f111a] rounded-lg border border-slate-800/80 p-3 overflow-x-auto custom-scrollbar">
                            <div className="text-[10px] font-bold text-slate-500 uppercase tracking-wider mb-2">HTML</div>
                            <pre className="text-xs text-orange-300 font-mono">
                              <code>{btn.html}</code>
                            </pre>
                          </div>
                          <div className="bg-[#0f111a] rounded-lg border border-slate-800/80 p-3 overflow-x-auto custom-scrollbar max-h-48">
                            <div className="text-[10px] font-bold text-slate-500 uppercase tracking-wider mb-2">CSS</div>
                            <pre className="text-xs text-blue-300 font-mono">
                              <code>{btn.css}</code>
                            </pre>
                          </div>
                        </div>
                      )}
                    </div>

                  </div>
                );
              })}
            </div>
          </section>
        ))}
      </div>

      {/* Interactive Sandbox Modal */}
      {sandboxData && (
        <InteractiveSandboxModal 
          sandboxData={sandboxData} 
          onClose={() => setSandboxData(null)} 
        />
      )}
    </div>
  );
}
