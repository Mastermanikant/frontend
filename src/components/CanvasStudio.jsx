import React, { useState } from 'react';
import { Layers as LayersIcon, BookOpen, ChevronDown, Palette, Layout, Undo2, Redo2, Sliders, Component, Layers, Smartphone, Tablet, Monitor, Download, Edit3, Eye } from 'lucide-react';
import ComponentLibrary from './ComponentLibrary';
import StyleControls from './StyleControls';
import LiveCanvas from './LiveCanvas';
import OutputPanel from './OutputPanel';
import BackgroundCanvas from './BackgroundCanvas';
import FrontendEncyclopediaModal from './FrontendEncyclopediaModal';
import TemplatePreviewModal from './TemplatePreviewModal';
import ExportModal from './ExportModal';
import LayersTreePanel from './LayersTreePanel';
import { DEFAULT_STYLE } from '../data/componentLibrary';
import { backgroundThemes } from '../data/frontendKnowledge';
import { useCanvas } from '../context/CanvasContext';

export default function CanvasStudio({ onViewHub }) {
  const {
    elements,
    selectedElementId,
    setSelectedElementId,
    selectedElement,
    updateElement,
    addElement,
    stageMode,
    setStageMode,
    undo,
    redo,
    canUndo,
    canRedo
  } = useCanvas();

  const [activeTab, setActiveTab]               = useState('elements'); // 'elements' | 'style' | 'layers'
  const [activeTheme, setActiveTheme]           = useState('aurora');
  const [animKey, setAnimKey]                   = useState(0);
  const [viewportWidth, setViewportWidth]       = useState('100%'); // '100%' | '768px' | '375px'
  const [isThemeOpen, setIsThemeOpen]           = useState(false);
  const [isEncyclopediaOpen, setIsEncyclopediaOpen] = useState(false);
  const [isTemplateModalOpen, setIsTemplateModalOpen] = useState(false);
  const [isExportModalOpen, setIsExportModalOpen] = useState(false);

  const currentThemeObj = backgroundThemes.find(t => t.id === activeTheme) || backgroundThemes[0];

  return (
    <div className={`bg-theme-${activeTheme} text-slate-100 h-screen max-h-screen flex flex-col font-sans selection:bg-cyan-500 selection:text-black relative overflow-hidden`}>
      <BackgroundCanvas theme={activeTheme} speed={0.6} density={40} glowIntensity={50} />

      {/* ── TOP CLEAN HEADER (CANVA DUAL MODE STYLE) ───────────────────────────────────────── */}
      <header className="sticky top-0 z-40 bg-slate-950/90 backdrop-blur-xl border-b border-slate-800 px-5 py-2 flex items-center justify-between shrink-0 h-[52px]">
        
        {/* Left Brand Identity */}
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-xl bg-gradient-to-tr from-cyan-400 via-purple-500 to-pink-500 flex items-center justify-center shadow-lg shadow-cyan-500/20 shrink-0 cursor-pointer" onClick={onViewHub}>
            <LayersIcon className="w-4 h-4 text-white" />
          </div>
          <div>
            <h1 className="text-sm font-black gradient-text font-heading leading-tight flex items-center gap-2 cursor-pointer" onClick={onViewHub}>
              Frontend Canvas Studio
              <span className="text-[9px] font-mono px-2 py-0.5 rounded-full bg-cyan-500/20 text-cyan-300 border border-cyan-500/30">
                Canva SaaS Edition
              </span>
            </h1>
            <p className="text-[10px] text-slate-400">
              Visual Component Studio ↔ Live React Code
            </p>
          </div>
        </div>

        {/* Center: Stage Mode Switcher (Edit vs Live) & Responsive Breakpoints */}
        <div className="flex items-center gap-3">
          
          {/* Dual Mode Switcher (Edit Mode vs Real Live Website Mode) */}
          <div className="flex items-center bg-slate-900/90 p-1 rounded-xl border border-slate-800 text-[10px]">
            <button
              onClick={() => setStageMode('edit')}
              className={`px-3 py-1 rounded-lg font-bold flex items-center gap-1.5 transition ${
                stageMode === 'edit'
                  ? 'bg-gradient-to-r from-cyan-500 to-blue-600 text-white shadow-md'
                  : 'text-slate-400 hover:text-white'
              }`}
              title="Edit Mode: Drag, Drop, Customize Elements"
            >
              <Edit3 className="w-3.5 h-3.5" />
              <span>Edit Mode</span>
            </button>
            
            <button
              onClick={() => setStageMode('live')}
              className={`px-3 py-1 rounded-lg font-bold flex items-center gap-1.5 transition ${
                stageMode === 'live'
                  ? 'bg-gradient-to-r from-emerald-500 to-teal-600 text-white shadow-md'
                  : 'text-slate-400 hover:text-white'
              }`}
              title="Live Mode: Real Working Production Website (No Overlays)"
            >
              <Eye className="w-3.5 h-3.5" />
              <span>Live Website</span>
              {stageMode === 'live' && <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-ping inline-block" />}
            </button>
          </div>

          {/* Responsive Breakpoints Switcher */}
          <div className="flex items-center bg-slate-900/90 p-1 rounded-xl border border-slate-800 text-[10px]">
            <button
              onClick={() => setViewportWidth('100%')}
              className={`px-2.5 py-1 rounded-lg font-bold flex items-center gap-1 transition ${viewportWidth === '100%' ? 'bg-cyan-500 text-black' : 'text-slate-400 hover:text-white'}`}
              title="Desktop View (100%)"
            >
              <Monitor className="w-3.5 h-3.5" />
              <span>Desktop</span>
            </button>
            <button
              onClick={() => setViewportWidth('768px')}
              className={`px-2.5 py-1 rounded-lg font-bold flex items-center gap-1 transition ${viewportWidth === '768px' ? 'bg-cyan-500 text-black' : 'text-slate-400 hover:text-white'}`}
              title="Tablet View (768px)"
            >
              <Tablet className="w-3.5 h-3.5" />
              <span>Tablet</span>
            </button>
            <button
              onClick={() => setViewportWidth('375px')}
              className={`px-2.5 py-1 rounded-lg font-bold flex items-center gap-1 transition ${viewportWidth === '375px' ? 'bg-cyan-500 text-black' : 'text-slate-400 hover:text-white'}`}
              title="Mobile View (375px)"
            >
              <Smartphone className="w-3.5 h-3.5" />
              <span>Mobile</span>
            </button>
          </div>

          {/* Undo / Redo */}
          <div className="flex items-center gap-1 bg-slate-900/90 p-1 rounded-xl border border-slate-800 text-[10px]">
            <button
              onClick={undo}
              disabled={!canUndo}
              title="Undo (Ctrl+Z)"
              className="p-1.5 rounded-lg text-slate-400 hover:text-white disabled:opacity-30 transition"
            >
              <Undo2 className="w-3.5 h-3.5" />
            </button>
            <button
              onClick={redo}
              disabled={!canRedo}
              title="Redo (Ctrl+Y)"
              className="p-1.5 rounded-lg text-slate-400 hover:text-white disabled:opacity-30 transition"
            >
              <Redo2 className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

        {/* Right Controls Header */}
        <div className="flex items-center gap-2">

          {/* Export Code Modal Button */}
          <button
            onClick={() => setIsExportModalOpen(true)}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-gradient-to-r from-cyan-500 to-purple-600 text-white shadow-lg shadow-cyan-500/20 hover:opacity-90 transition text-xs font-bold"
          >
            <Download className="w-3.5 h-3.5" />
            <span>Export Code &amp; AI</span>
          </button>

          {/* 30+ Templates Modal Button */}
          <button
            onClick={() => setIsTemplateModalOpen(true)}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-cyan-500/10 text-cyan-300 border border-cyan-500/30 hover:bg-cyan-500/20 transition text-xs font-bold"
          >
            <Layout className="w-3.5 h-3.5 text-cyan-400" />
            <span>30+ Templates</span>
          </button>

          {/* A-Z Guide */}
          <button
            onClick={() => setIsEncyclopediaOpen(true)}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-purple-500/10 text-purple-300 border border-purple-500/30 hover:bg-purple-500/20 transition text-xs font-bold"
          >
            <BookOpen className="w-3.5 h-3.5" />
            <span>A-Z Guide</span>
          </button>

          {/* 20 Background Themes Selector */}
          <div className="relative">
            <button
              onClick={() => setIsThemeOpen(!isThemeOpen)}
              className="flex items-center gap-2 px-3 py-1.5 rounded-xl bg-slate-900/90 border border-slate-800 text-xs font-bold text-slate-300 hover:text-white transition"
            >
              <Palette className="w-3.5 h-3.5 text-cyan-400" />
              <span>{currentThemeObj.name}</span>
              <ChevronDown className="w-3 h-3 text-slate-500" />
            </button>

            {isThemeOpen && (
              <div className="absolute right-0 mt-2 w-56 max-h-80 overflow-y-auto bg-slate-900 border border-slate-800 rounded-2xl shadow-2xl z-50 p-1.5 space-y-1">
                <p className="text-[9px] font-black text-slate-500 uppercase tracking-widest px-2 py-1">
                  20 Live Themes
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

        </div>
      </header>

      {/* ── CLEAN 2-COLUMN CANVA WORKSPACE ───────────────────────────────────────────── */}
      <div className="flex-1 flex overflow-hidden relative z-10 h-[calc(100vh-52px)]">

        {/* COLUMN 1: LEFT SIDEBAR DOCK (340px) - Hidden when in Live Website Mode */}
        {stageMode === 'edit' && (
          <aside className="w-[340px] shrink-0 border-r border-slate-800 bg-slate-950/80 backdrop-blur-xl flex flex-col h-full overflow-hidden shadow-2xl z-20">
            
            {/* Dock Navigation Tabs */}
            <div className="flex border-b border-slate-800 bg-slate-950/60 p-1.5 gap-1 shrink-0">
              <button
                onClick={() => setActiveTab('elements')}
                className={`flex-1 py-2 text-xs font-bold rounded-xl transition flex items-center justify-center gap-1.5 ${
                  activeTab === 'elements'
                    ? 'bg-cyan-500/20 text-cyan-300 border border-cyan-500/40'
                    : 'text-slate-400 hover:text-white hover:bg-slate-900'
                }`}
              >
                <Component className="w-3.5 h-3.5" />
                <span>Elements</span>
              </button>

              <button
                onClick={() => setActiveTab('style')}
                className={`flex-1 py-2 text-xs font-bold rounded-xl transition flex items-center justify-center gap-1.5 ${
                  activeTab === 'style'
                    ? 'bg-cyan-500/20 text-cyan-300 border border-cyan-500/40'
                    : 'text-slate-400 hover:text-white hover:bg-slate-900'
                }`}
              >
                <Sliders className="w-3.5 h-3.5" />
                <span>Style</span>
              </button>

              <button
                onClick={() => setActiveTab('layers')}
                className={`flex-1 py-2 text-xs font-bold rounded-xl transition flex items-center justify-center gap-1.5 ${
                  activeTab === 'layers'
                    ? 'bg-purple-500/20 text-purple-300 border border-purple-500/40'
                    : 'text-slate-400 hover:text-white hover:bg-slate-900'
                }`}
              >
                <Layers className="w-3.5 h-3.5" />
                <span>Layers</span>
              </button>
            </div>

            {/* Active Tab Panel Content */}
            <div className="flex-1 overflow-y-auto h-full">
              {activeTab === 'elements' && (
                <ComponentLibrary 
                  selectedId={selectedElement?.type === 'button' ? selectedElement.componentId : null} 
                  onSelect={(compId) => {
                    const newEl = {
                      id: `el-${Date.now()}`,
                      type: 'button',
                      componentId: compId,
                      style: { ...DEFAULT_STYLE },
                      text: 'Click Me →',
                      x: Math.random() * 100 + 50,
                      y: Math.random() * 100 + 50
                    };
                    addElement(newEl);
                  }} 
                />
              )}

              {activeTab === 'style' && (
                selectedElement ? (
                  <StyleControls 
                    style={selectedElement.style} 
                    onChange={(newStyle) => {
                      updateElement({ ...selectedElement, style: newStyle });
                    }} 
                  />
                ) : (
                  <div className="p-8 text-center text-xs text-slate-500">
                    <p className="text-3xl mb-2">🎨</p>
                    <p className="font-bold text-slate-300 mb-1">No Element Selected</p>
                    <p>Click any button or text box on the canvas to customize its colors, borders and animations.</p>
                  </div>
                )
              )}

              {activeTab === 'layers' && (
                <LayersTreePanel />
              )}
            </div>
          </aside>
        )}

        {/* COLUMN 2: MAIN LIVE STAGE (Flex-1, Clean Real Website Preview) */}
        <main className="flex-1 overflow-hidden bg-slate-950/20 backdrop-blur-sm relative flex flex-col h-full items-center justify-center p-4">
          <div 
            style={{ width: viewportWidth }} 
            className="h-full max-h-full transition-all duration-300 border border-slate-800/60 rounded-2xl overflow-hidden shadow-2xl bg-slate-950/40 relative flex flex-col"
          >
            <LiveCanvas animKey={animKey} />
          </div>
        </main>

      </div>

      {/* Modals */}
      <FrontendEncyclopediaModal
        isOpen={isEncyclopediaOpen}
        onClose={() => setIsEncyclopediaOpen(false)}
      />
      <TemplatePreviewModal
        isOpen={isTemplateModalOpen}
        onClose={() => setIsTemplateModalOpen(false)}
      />
      <ExportModal
        isOpen={isExportModalOpen}
        onClose={() => setIsExportModalOpen(false)}
      />
    </div>
  );
}
