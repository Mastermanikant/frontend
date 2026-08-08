import React, { useState, useEffect } from 'react';
import { buttonLibraryData } from '../data/buttonLibraryData';
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
      <div className="max-w-7xl mx-auto">
        <header className="mb-12 border-b border-slate-800 pb-8 text-center md:text-left">
          <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-indigo-500">
            Frontend Button Library
          </h1>
          <p className="text-lg text-slate-400 mb-6">
            The Ultimate Collection of Button Types, Styles, States, and Actions.
            Click the copy icon to instantly grab the HTML & CSS, or click Sandbox to edit live.
          </p>
        </header>

        {buttonLibraryData.map((category, catIdx) => (
          <section key={catIdx} className="mb-16">
            <h2 className="text-2xl font-bold text-slate-100 border-b border-slate-800/60 pb-3 mb-8 flex items-center">
              <span className="text-indigo-500 mr-3">{catIdx + 1}.</span> {category.name}
            </h2>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 2xl:grid-cols-3 gap-8">
              {category.buttons.map((btn, btnIdx) => {
                const uniqueId = `${catIdx}-${btnIdx}`;
                
                // Safe CSS Scoping using a placeholder to avoid double-prefixing
                const scopedCss = btn.css
                  .replace(/(^|\n|\})\s*button([^{]*)\{/g, `$1 %%SCOPE%% button$2{`)
                  .replace(/(^|\n|\})\s*\.([a-zA-Z_-][a-zA-Z0-9_-]*)/g, `$1 %%SCOPE%% .$2`)
                  .replace(/%%SCOPE%%/g, `.btn-preview-${uniqueId}`);

                return (
                  <div key={btnIdx} className="bg-[#161925] border border-slate-800 rounded-xl overflow-hidden flex flex-col shadow-xl">
                    
                    {/* Visual Preview Area */}
                    <div className="p-8 bg-slate-900/50 flex flex-col items-center justify-center min-h-[160px] border-b border-slate-800 relative group">
                       <style dangerouslySetInnerHTML={{__html: scopedCss}} />
                       <div className={`btn-preview-${uniqueId}`} dangerouslySetInnerHTML={{__html: btn.html}} />
                    </div>

                    {/* Meta & Code Area */}
                    <div className="p-5 flex-1 flex flex-col bg-[#12141c]">
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
