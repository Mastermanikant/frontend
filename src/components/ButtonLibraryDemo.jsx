import React, { useState } from 'react';
import { buttonLibraryData } from '../data/buttonLibraryData';
import { Check, Copy } from 'lucide-react';

export default function ButtonLibraryDemo() {
  const [copiedIndex, setCopiedIndex] = useState(null);

  const handleCopy = (html, css, index) => {
    const fullCode = `<!-- HTML -->\n${html}\n\n/* CSS */\n${css}`;
    navigator.clipboard.writeText(fullCode);
    setCopiedIndex(index);
    setTimeout(() => setCopiedIndex(null), 2000);
  };

  return (
    <div className="bg-[#0f111a] min-h-screen text-slate-200 font-sans p-4 md:p-8 overflow-y-auto">
      <div className="max-w-7xl mx-auto">
        <header className="mb-12 border-b border-slate-800 pb-8 text-center md:text-left">
          <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-indigo-500">
            Frontend Button Library
          </h1>
          <p className="text-lg text-slate-400">
            The Ultimate Collection of Button Types, Styles, States, and Actions.
            Click the copy icon to instantly grab the HTML & CSS.
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
                return (
                  <div key={btnIdx} className="bg-[#161925] border border-slate-800 rounded-xl overflow-hidden flex flex-col shadow-xl">
                    
                    {/* Visual Preview Area */}
                    <div className="p-8 bg-slate-900/50 flex flex-col items-center justify-center min-h-[140px] border-b border-slate-800 relative group">
                       <style dangerouslySetInnerHTML={{__html: btn.css.replace(/button\s*\{/g, `.btn-preview-${uniqueId} button {`)
                                                                        .replace(/\.([a-zA-Z0-9_-]+)/g, `.btn-preview-${uniqueId} .$1`)}} />
                       <div className={`btn-preview-${uniqueId}`} dangerouslySetInnerHTML={{__html: btn.html}} />
                    </div>

                    {/* Meta & Code Area */}
                    <div className="p-5 flex-1 flex flex-col bg-[#12141c]">
                      <div className="flex justify-between items-center mb-4">
                        <h3 className="font-bold text-lg text-indigo-300">{btn.name}</h3>
                        <button 
                          onClick={() => handleCopy(btn.html, btn.css, uniqueId)}
                          className="flex items-center space-x-1.5 px-3 py-1.5 bg-indigo-500/10 hover:bg-indigo-500/20 text-indigo-400 rounded-lg text-xs font-semibold transition-colors border border-indigo-500/20"
                        >
                          {copiedIndex === uniqueId ? <Check className="w-4 h-4 text-green-400" /> : <Copy className="w-4 h-4" />}
                          <span className={copiedIndex === uniqueId ? 'text-green-400' : ''}>
                            {copiedIndex === uniqueId ? 'Copied!' : 'Copy Code'}
                          </span>
                        </button>
                      </div>

                      <div className="space-y-3">
                        <div className="bg-[#0f111a] rounded-lg border border-slate-800/80 p-3 overflow-x-auto custom-scrollbar">
                          <div className="text-[10px] font-bold text-slate-500 uppercase tracking-wider mb-2">HTML</div>
                          <pre className="text-xs text-orange-300 font-mono">
                            <code>{btn.html}</code>
                          </pre>
                        </div>
                        <div className="bg-[#0f111a] rounded-lg border border-slate-800/80 p-3 overflow-x-auto custom-scrollbar max-h-40">
                          <div className="text-[10px] font-bold text-slate-500 uppercase tracking-wider mb-2">CSS</div>
                          <pre className="text-xs text-blue-300 font-mono">
                            <code>{btn.css}</code>
                          </pre>
                        </div>
                      </div>
                    </div>

                  </div>
                );
              })}
            </div>
          </section>
        ))}

      </div>
    </div>
  );
}
