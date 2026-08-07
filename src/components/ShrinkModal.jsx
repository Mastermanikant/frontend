import React, { useState } from 'react';
import { X, Copy, Check, Sparkles, Code, Play } from 'lucide-react';
import VoiceTutor from './VoiceTutor';

export default function ShrinkModal({ term, onClose }) {
  const [copied, setCopied] = useState(false);

  if (!term) return null;

  const handleCopyPrompt = () => {
    navigator.clipboard.writeText(term.vibePrompt);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-md animate-fade-in">
      <div className="relative w-full max-w-3xl bg-slate-900/95 border border-cyan-500/30 rounded-3xl p-6 sm:p-8 shadow-2xl shadow-cyan-500/20 overflow-hidden max-h-[90vh] overflow-y-auto">
        
        {/* Top Header */}
        <div className="flex items-start justify-between gap-4 mb-6">
          <div>
            <span className="inline-block text-xs font-semibold px-3 py-1 rounded-full bg-cyan-500/10 text-cyan-400 border border-cyan-500/20 mb-2">
              {term.badge || 'UI Term Feature'}
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white font-heading">
              {term.title}
            </h2>
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded-full bg-slate-800 text-slate-400 hover:text-white hover:bg-slate-700 transition"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* AI Voice Assistant Tutor Banner */}
        <div className="mb-6">
          <VoiceTutor activeTerm={term} />
        </div>

        {/* Live Visual Demo Render Box */}
        <div className="mb-6 p-6 rounded-2xl bg-slate-950/80 border border-slate-800 min-h-[160px] flex items-center justify-center relative overflow-hidden">
          <span className="absolute top-3 left-3 text-[10px] text-slate-500 font-mono flex items-center gap-1">
            <Play className="w-3 h-3 text-cyan-400" /> LIVE UI PREVIEW
          </span>

          {term.demoType === 'glass' && (
            <div className="glass-panel p-6 max-w-sm text-center border-cyan-400/40">
              <h3 className="font-bold text-lg text-white mb-1">Frosted Glass Effect</h3>
              <p className="text-xs text-slate-300">यह रियल-टाइम Backdrop Blur & Transparency कार्ड का उदाहरण है।</p>
            </div>
          )}

          {term.demoType === 'aurora' && (
            <div className="w-full h-32 rounded-xl bg-theme-aurora flex items-center justify-center p-4">
              <span className="text-sm font-bold text-white tracking-widest uppercase bg-black/40 px-4 py-2 rounded-lg border border-white/20">
                Aurora Light Flow
              </span>
            </div>
          )}

          {term.demoType === 'bento' && (
            <div className="grid grid-cols-3 gap-3 w-full">
              <div className="col-span-2 bg-slate-800/80 p-4 rounded-xl border border-slate-700">
                <span className="text-xs font-bold text-cyan-400">Card 1 (Wide)</span>
                <p className="text-[11px] text-slate-400">Large Feature Banner</p>
              </div>
              <div className="bg-slate-800/80 p-4 rounded-xl border border-slate-700">
                <span className="text-xs font-bold text-purple-400">Card 2</span>
                <p className="text-[11px] text-slate-400">KPI Stat</p>
              </div>
            </div>
          )}

          {term.demoType === 'neumorph' && (
            <div className="neumorph-box p-6 px-10 text-center">
              <button className="px-6 py-2.5 rounded-xl font-bold text-sm text-cyan-400 bg-[#1a1d24] shadow-[4px_4px_10px_#111318,-4px_-4px_10px_#232730]">
                Soft 3D Button
              </button>
            </div>
          )}

          {term.demoType === 'magnetic' && (
            <button className="shiny-btn">
              Hover & Click Me! ✨
            </button>
          )}

          {term.demoType === 'animatedBorder' && (
            <div className="animated-border-box">
              <div className="bg-slate-900 p-4 rounded-xl text-center">
                <span className="text-xs font-bold text-pink-400">Laser Border Animation</span>
              </div>
            </div>
          )}

          {!['glass', 'aurora', 'bento', 'neumorph', 'magnetic', 'animatedBorder'].includes(term.demoType) && (
            <div className="glass-panel p-6 text-center">
              <p className="text-sm font-medium text-cyan-300">{term.shortDesc}</p>
            </div>
          )}
        </div>

        {/* Hindi Detailed Explanation */}
        <div className="mb-6 p-5 rounded-2xl bg-slate-800/40 border border-slate-700/60">
          <h4 className="text-sm font-bold text-cyan-400 mb-2 flex items-center gap-2">
            💡 आसान हिंदी में समझें (What & Why):
          </h4>
          <p className="text-sm text-slate-200 leading-relaxed font-sans">
            {term.hindiExplanation}
          </p>
        </div>

        {/* AI Vibe-Coding Prompt Section */}
        <div className="p-5 rounded-2xl bg-slate-950 border border-purple-500/30">
          <div className="flex items-center justify-between gap-2 mb-2">
            <h4 className="text-xs font-bold text-purple-400 uppercase tracking-wider flex items-center gap-2">
              <Code className="w-4 h-4" /> AI को क्या बोलें? (Copy Vibe-Prompt)
            </h4>
            <button
              onClick={handleCopyPrompt}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-purple-500/20 text-purple-300 hover:bg-purple-500/30 text-xs font-bold transition border border-purple-500/30"
            >
              {copied ? (
                <>
                  <Check className="w-3.5 h-3.5 text-green-400" /> कॉपी हो गया!
                </>
              ) : (
                <>
                  <Copy className="w-3.5 h-3.5" /> Prompt Copy करें
                </>
              )}
            </button>
          </div>
          <pre className="text-xs font-mono text-slate-300 bg-slate-900/90 p-3.5 rounded-xl whitespace-pre-wrap border border-slate-800 select-all">
            {term.vibePrompt}
          </pre>
          <p className="text-[11px] text-slate-500 mt-2">
            👉 इस प्रोम्प्ट को कॉपी करके ChatGPT, Gemini या Google AntiGravity में पेस्ट करें। AI तुरंत आपके लिए ऐसा ही UI कोड लिखकर दे देगा!
          </p>
        </div>

      </div>
    </div>
  );
}
