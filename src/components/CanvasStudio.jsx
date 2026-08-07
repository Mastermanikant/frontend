import React, { useState } from 'react';
import { RefreshCw, Layers } from 'lucide-react';
import ComponentLibrary from './ComponentLibrary';
import StyleControls from './StyleControls';
import LiveCanvas from './LiveCanvas';
import OutputPanel from './OutputPanel';
import BackgroundCanvas from './BackgroundCanvas';
import { DEFAULT_STYLE } from '../data/componentLibrary';
import { backgroundThemes } from '../data/frontendKnowledge';

export default function CanvasStudio() {
  const [selectedId, setSelectedId]   = useState(null);
  const [style, setStyle]             = useState(DEFAULT_STYLE);
  const [activeTheme, setActiveTheme] = useState('aurora');
  const [animKey, setAnimKey]         = useState(0);

  const resetStyle = () => setStyle(DEFAULT_STYLE);

  return (
    <div className={`bg-theme-${activeTheme} text-slate-100 min-h-screen flex flex-col font-sans selection:bg-cyan-500 selection:text-black relative`}>
      <BackgroundCanvas theme={activeTheme} speed={0.6} density={35} glowIntensity={40} />

      {/* ── TOP HEADER ────────────────────────────────────────────────────── */}
      <header className="sticky top-0 z-50 bg-slate-950/85 backdrop-blur-xl border-b border-slate-800 px-5 py-2.5 flex items-center justify-between shrink-0">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-xl bg-gradient-to-tr from-cyan-400 to-purple-600 flex items-center justify-center shadow-lg shadow-cyan-500/20 shrink-0">
            <Layers className="w-4 h-4 text-white" />
          </div>
          <div>
            <h1 className="text-sm font-black gradient-text font-heading leading-tight">
              Frontend Canvas Studio
            </h1>
            <p className="text-[10px] text-slate-500">
              Component चुनें → Style करें → Developer को भेजें
            </p>
          </div>
        </div>

        {/* Theme picker + Reset */}
        <div className="flex items-center gap-2">
          <div className="flex items-center gap-1 bg-slate-900/90 p-1 rounded-xl border border-slate-800 text-[10px]">
            {backgroundThemes.slice(0, 4).map(t => (
              <button
                key={t.id}
                onClick={() => setActiveTheme(t.id)}
                title={t.name}
                className={`px-2 py-1 rounded-lg font-bold transition ${activeTheme === t.id ? 'bg-cyan-500 text-black' : 'text-slate-500 hover:text-white'}`}
              >
                {t.name.split(' ')[0]}
              </button>
            ))}
          </div>

          <button
            onClick={() => { resetStyle(); setAnimKey(k => k + 1); }}
            title="Reset style"
            className="p-2 rounded-xl bg-slate-900 border border-slate-800 text-slate-500 hover:text-white hover:border-slate-600 transition"
          >
            <RefreshCw className="w-3.5 h-3.5" />
          </button>
        </div>
      </header>

      {/* ── 3-PANEL MAIN LAYOUT ───────────────────────────────────────────── */}
      <div className="flex-1 flex overflow-hidden relative z-10" style={{ height:'calc(100vh - 49px)' }}>

        {/* PANEL 1 — Component Library (Left, 260px) */}
        <aside className="w-[260px] shrink-0 border-r border-slate-800/80 bg-slate-950/75 backdrop-blur-xl flex flex-col overflow-hidden">
          <div className="px-3 pt-3 pb-1 shrink-0">
            <p className="text-[10px] font-black text-slate-500 uppercase tracking-widest">
              Step 1 — Component चुनें
            </p>
          </div>
          <div className="flex-1 overflow-hidden">
            <ComponentLibrary selectedId={selectedId} onSelect={setSelectedId} />
          </div>
        </aside>

        {/* PANEL 2 — Style Controls (Left-Center, 220px) */}
        <aside className="w-[220px] shrink-0 border-r border-slate-800/60 bg-slate-950/60 backdrop-blur-lg flex flex-col overflow-hidden">
          <div className="px-3 pt-3 pb-1 shrink-0">
            <p className="text-[10px] font-black text-slate-500 uppercase tracking-widest">
              Step 2 — Style करें
            </p>
          </div>
          <div className="flex-1 overflow-hidden">
            <StyleControls style={style} onChange={setStyle} />
          </div>
        </aside>

        {/* PANEL 3 — Live Canvas (Center, flex-1) */}
        <main className="flex-1 overflow-hidden bg-slate-950/30 backdrop-blur-sm relative flex flex-col">
          <div className="px-4 pt-3 pb-1 border-b border-slate-800/40 shrink-0 flex items-center justify-between">
            <p className="text-[10px] font-black text-slate-500 uppercase tracking-widest">
              Step 3 — Live Preview
            </p>
            {selectedId && (
              <button
                onClick={() => setAnimKey(k => k + 1)}
                className="text-[10px] text-slate-600 hover:text-cyan-400 flex items-center gap-1 transition"
              >
                <RefreshCw className="w-3 h-3" /> Re-trigger
              </button>
            )}
          </div>
          <div className="flex-1 overflow-hidden">
            <LiveCanvas componentId={selectedId} style={style} animKey={animKey} />
          </div>
        </main>

        {/* PANEL 4 — Output (Right, 240px) */}
        <aside className="w-[240px] shrink-0 border-l border-slate-800/80 bg-slate-950/75 backdrop-blur-xl flex flex-col overflow-hidden">
          <div className="px-3 pt-3 pb-1 shrink-0">
            <p className="text-[10px] font-black text-slate-500 uppercase tracking-widest">
              Step 4 — Developer को दें
            </p>
          </div>
          <div className="flex-1 overflow-hidden">
            <OutputPanel componentId={selectedId} style={style} />
          </div>
        </aside>

      </div>
    </div>
  );
}
