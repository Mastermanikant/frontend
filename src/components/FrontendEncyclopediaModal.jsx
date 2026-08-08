import React, { useState } from 'react';
import { X, BookOpen, Sparkles, Code, Cpu, Palette, Layout, Zap, Check } from 'lucide-react';
import { frontendAZCurriculum } from '../data/frontendKnowledge';

export default function FrontendEncyclopediaModal({ isOpen, onClose }) {
  const [copiedIndex, setCopiedIndex] = useState(null);

  if (!isOpen) return null;

  const copySnippet = (code, index) => {
    navigator.clipboard.writeText(code);
    setCopiedIndex(index);
    setTimeout(() => setCopiedIndex(null), 2000);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md animate-fadeIn">
      <div className="bg-slate-900 border border-slate-800 rounded-2xl w-full max-w-4xl max-h-[85vh] flex flex-col shadow-2xl overflow-hidden">
        
        {/* Header */}
        <div className="p-4 border-b border-slate-800 flex items-center justify-between bg-slate-950/60">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-cyan-500 to-purple-600 flex items-center justify-center text-white">
              <BookOpen className="w-5 h-5" />
            </div>
            <div>
              <h2 className="text-base font-black text-white font-heading flex items-center gap-2">
                Frontend Master Encyclopedia (A to Z Guide)
                <span className="text-[10px] px-2 py-0.5 rounded-full bg-cyan-500/20 text-cyan-300 border border-cyan-500/30">
                  $50K Standard
                </span>
              </h2>
              <p className="text-xs text-slate-400">
                फ्रंटएंड डेवलपमेंट में क्या-क्या सीखा जाता है — A to Z सम्पूर्ण जानकारी विद लाइव उदाहरण।
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded-xl text-slate-500 hover:text-white hover:bg-slate-800 transition"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Body Content */}
        <div className="flex-1 overflow-y-auto p-6 space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {frontendAZCurriculum.map((item, index) => (
              <div key={index} className="p-4 rounded-xl bg-slate-950 border border-slate-800 hover:border-cyan-500/40 transition flex flex-col justify-between space-y-3">
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="text-sm font-bold text-white flex items-center gap-2">
                      <Sparkles className="w-4 h-4 text-cyan-400" />
                      {item.topic}
                    </h3>
                  </div>
                  <p className="text-xs text-slate-400 leading-relaxed mb-3">
                    {item.description}
                  </p>
                  <div className="flex flex-wrap gap-1.5 mb-3">
                    {item.libs.map((lib, lIdx) => (
                      <span key={lIdx} className="text-[10px] font-mono px-2 py-0.5 rounded bg-purple-500/10 text-purple-300 border border-purple-500/20">
                        {lib}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="relative group">
                  <pre className="text-[10px] font-mono text-slate-300 bg-slate-900 border border-slate-800 rounded-lg p-2.5 overflow-x-auto">
                    {item.codeSnippet}
                  </pre>
                  <button
                    onClick={() => copySnippet(item.codeSnippet, index)}
                    className="absolute top-2 right-2 p-1.5 rounded-md bg-slate-800 hover:bg-slate-700 text-xs text-slate-300 opacity-80 group-hover:opacity-100 transition"
                  >
                    {copiedIndex === index ? <Check className="w-3 h-3 text-green-400" /> : 'Copy'}
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Footer */}
        <div className="p-4 border-t border-slate-800 bg-slate-950/60 flex items-center justify-between text-xs text-slate-500">
          <span>🎨 Frontend Canvas — Created for Designers, Owners &amp; Developers</span>
          <button
            onClick={onClose}
            className="px-4 py-2 rounded-xl bg-cyan-500 text-black font-bold hover:bg-cyan-400 transition"
          >
            Close Guide
          </button>
        </div>

      </div>
    </div>
  );
}
