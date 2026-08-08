import React, { useState } from 'react';
import { RefreshCw, Layers, BookOpen, ChevronDown, Palette } from 'lucide-react';
import ComponentLibrary from './ComponentLibrary';
import StyleControls from './StyleControls';
import LiveCanvas from './LiveCanvas';
import OutputPanel from './OutputPanel';
import BackgroundCanvas from './BackgroundCanvas';
import FrontendEncyclopediaModal from './FrontendEncyclopediaModal';
import { DEFAULT_STYLE } from '../data/componentLibrary';
import { backgroundThemes } from '../data/frontendKnowledge';

export default function CanvasStudio() {
  const [selectedId, setSelectedId]       = useState('btn-conic-laser'); // default select conic laser button
  const [style, setStyle]                 = useState(DEFAULT_STYLE);
  const [activeTheme, setActiveTheme]     = useState('aurora');
  const [animKey, setAnimKey]             = useState(0);
  const [isThemeOpen, setIsThemeOpen]     = useState(false);
  const [isEncyclopediaOpen, setIsEncyclopediaOpen] = useState(false);

  const resetStyle = () => setStyle(DEFAULT_STYLE);

  const currentThemeObj = backgroundThemes.find(t => t.id === activeTheme) || backgroundThemes[0];

  return (
    <div className={`bg-theme-${activeTheme} text-slate-100 min-h-screen flex flex-col font-sans selection:bg-cyan-500 selection:text-black relative overflow-hidden`}>
      <BackgroundCanvas theme={activeTheme} speed={0.6} density={40} glowIntensity={50} />

      {/* ── TOP HEADER ────────────────────────────────────────────────────── */}
      <header className="sticky top-0 z-40 bg-slate-950/85 backdrop-blur-xl border-b border-slate-800/80 px-5 py-2.5 flex items-center justify-between shrink-0">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-xl bg-gradient-to-tr from-cyan-400 via-purple-500 to-pink-500 flex items-center justify-center shadow-lg shadow-cyan-500/20 shrink-0">
            <Layers className="w-4 h-4 text-white" />
          </div>
          <div>
            <h1 className="text-sm font-black gradient-text font-heading leading-tight flex items-center gap-2">
              Frontend Canvas Studio
              <span className="text-[9px] font-mono px-2 py-0.5 rounded-full bg-cyan-500/20 text-cyan-300 border border-cyan-500/30">
                $50K SaaS Edition
              </span>
            </h1>
            <p className="text-[10px] text-slate-500">
              Pick Component → Customize Layers &amp; Style → Send Visual Spec to Developer
            </p>
          </div>
        </div>

        {/* Action Controls Header */}
        <div className="flex items-center gap-2">
          
          {/* A-Z Frontend Encyclopedia Guide Button */}
          <button
            onClick={() => setIsEncyclopediaOpen(true)}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-purple-500/10 text-purple-300 border border-purple-500/30 hover:bg-purple-500/20 transition text-xs font-bold"
          >
            <BookOpen className="w-3.5 h-3.5" />
            <span>A-Z Guide</span>
          </button>

          {/* 20 Background Themes Selector Dropdown */}
          <div className="relative">
            <button
              onClick={() => setIsThemeOpen(!isThemeOpen)}
              className="flex items-center gap-2 px-3 py-1.5 rounded-xl bg-slate-900/90 border border-slate-800 text-xs font-bold text-slate-300 hover:text-white hover:border-slate-700 transition"
            >
              <Palette className="w-3.5 h-3.5 text-cyan-400" />
              <span>{currentThemeObj.name}</span>
              <ChevronDown className="w-3 h-3 text-slate-500" />
            </button>

            {isThemeOpen && (
              <div className="absolute right-0 mt-2 w-56 max-h-80 overflow-y-auto bg-slate-900 border border-slate-800 rounded-2xl shadow-2xl z-50 p-1.5 space-y-1">
                <p className="text-[9px] font-black text-slate-500 uppercase tracking-widest px-2 py-1">
                  20 Live Themes (पूरा साइट बदलें)
                </p>
                {backgroundThemes.map(t => (
                  <button
                    key={t.id}
                    onClick={() => { setActiveTheme(t.id); setIsThemeOpen(false); }}
                    className={`w-full text-left px-3 py-2 rounded-xl text-xs font-bold flex items-center justify-between transition ${
                      activeTheme === t.id
                        ? 'bg-cyan-500/20 text-cyan-300 border border-cyan-500/30'
                        : 'text-slate-400 hover:text-white hover:bg-slate-800'
                    }`}
                  >
                    <span>{t.name}</span>
                    {activeTheme === t.id && <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />}
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Reset Style Button */}
          <button
            onClick={() => { resetStyle(); setAnimKey(k => k + 1); }}
            title="Reset style"
            className="p-2 rounded-xl bg-slate-900 border border-slate-800 text-slate-500 hover:text-white hover:border-slate-600 transition"
          >
            <RefreshCw className="w-3.5 h-3.5" />
          </button>
        </div>
      </header>

      {/* ── 4-PANEL MAIN LAYOUT ───────────────────────────────────────────── */}
      <div className="flex-1 flex overflow-hidden relative z-10" style={{ height:'calc(100vh - 49px)' }}>

        {/* PANEL 1 — Component Library (Left, 250px) */}
        <aside className="w-[250px] shrink-0 border-r border-slate-800/80 bg-slate-950/75 backdrop-blur-xl flex flex-col overflow-hidden">
          <div className="px-3 pt-2.5 pb-1 shrink-0 flex items-center justify-between border-b border-slate-900">
            <p className="text-[10px] font-black text-slate-500 uppercase tracking-widest">
              Step 1 — Component (50+)
            </p>
          </div>
          <div className="flex-1 overflow-hidden">
            <ComponentLibrary selectedId={selectedId} onSelect={setSelectedId} />
          </div>
        </aside>

        {/* PANEL 2 — Style Controls (Left-Center, 220px) */}
        <aside className="w-[220px] shrink-0 border-r border-slate-800/60 bg-slate-950/60 backdrop-blur-lg flex flex-col overflow-hidden">
          <div className="px-3 pt-2.5 pb-1 shrink-0 flex items-center justify-between border-b border-slate-900">
            <p className="text-[10px] font-black text-slate-500 uppercase tracking-widest">
              Step 2 — Style Controls
            </p>
          </div>
          <div className="flex-1 overflow-hidden">
            <StyleControls style={style} onChange={setStyle} />
          </div>
        </aside>

        {/* PANEL 3 — Live Canvas (Center, flex-1) */}
        <main className="flex-1 overflow-hidden bg-slate-950/30 backdrop-blur-sm relative flex flex-col">
          <div className="px-4 pt-2.5 pb-1 border-b border-slate-800/40 shrink-0 flex items-center justify-between">
            <p className="text-[10px] font-black text-slate-500 uppercase tracking-widest">
              Step 3 — Live Interactive Canvas
            </p>
            {selectedId && (
              <button
                onClick={() => setAnimKey(k => k + 1)}
                className="text-[10px] text-slate-500 hover:text-cyan-400 flex items-center gap-1 transition"
              >
                <RefreshCw className="w-3 h-3" /> Re-trigger Animation
              </button>
            )}
          </div>
          <div className="flex-1 overflow-hidden">
            <LiveCanvas componentId={selectedId} style={style} animKey={animKey} />
          </div>
        </main>

        {/* PANEL 4 — Output & Deconstruct (Right, 250px) */}
        <aside className="w-[250px] shrink-0 border-l border-slate-800/80 bg-slate-950/75 backdrop-blur-xl flex flex-col overflow-hidden">
          <div className="px-3 pt-2.5 pb-1 shrink-0 flex items-center justify-between border-b border-slate-900">
            <p className="text-[10px] font-black text-slate-500 uppercase tracking-widest">
              Step 4 — Dev Output &amp; Layers
            </p>
          </div>
          <div className="flex-1 overflow-hidden">
            <OutputPanel componentId={selectedId} style={style} />
          </div>
        </aside>

      </div>

      {/* A-Z Frontend Encyclopedia Modal */}
      <FrontendEncyclopediaModal
        isOpen={isEncyclopediaOpen}
        onClose={() => setIsEncyclopediaOpen(false)}
      />
    </div>
  );
}
