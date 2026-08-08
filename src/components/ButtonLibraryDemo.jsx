import React, { useState } from 'react';
import { buttonCategories, globalKeyframes } from '../data/buttonLibraryData';
import InteractiveSandboxModal from './InteractiveSandboxModal';
import ButtonEditorCard from './ButtonEditorCard';
import { ChevronDown, ChevronRight, Layers, Sparkles } from 'lucide-react';

export default function ButtonLibraryDemo() {
  const [sandboxData, setSandboxData] = useState(null);
  
  // By default, ALL categories are SHRINKED (collapsed) for clean UI!
  const [expandedCat, setExpandedCat] = useState({});
  const [expandedSubCat, setExpandedSubCat] = useState({});

  const toggleCat = (id) => {
    setExpandedCat(prev => ({ ...prev, [id]: !prev[id] }));
  };

  const toggleSubCat = (name) => {
    setExpandedSubCat(prev => ({ ...prev, [name]: !prev[name] }));
  };

  const openSandbox = (btn) => {
    setSandboxData({ name: btn.name, html: btn.html, css: btn.css });
  };

  return (
    <div className="bg-[#0f111a] min-h-screen text-slate-200 font-sans p-4 md:p-8 overflow-y-auto relative">
      <style dangerouslySetInnerHTML={{__html: globalKeyframes}} />
      
      <div className="max-w-7xl mx-auto">
        <header className="mb-12 border-b border-slate-800/80 pb-8 text-center md:text-left relative">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 via-indigo-500/10 to-pink-500/10 blur-3xl -z-10 rounded-full" />
          <h1 className="text-4xl md:text-6xl font-extrabold text-white mb-4 tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-indigo-400 to-pink-500 flex items-center justify-center md:justify-start">
            <Sparkles className="w-10 h-10 mr-3 text-pink-500 inline" />
            Exhaustive Button Library
          </h1>
          <p className="text-lg md:text-xl text-slate-400 mb-6 max-w-3xl">
            Categorized Taxonomy of 30+ Button Types, Sub-types, Shapes, Design Systems, and Motion Effects.
            Click any category below to expand, use <span className="text-indigo-400 font-semibold">[Quick Edit]</span> for live CSS tweaks, or <span className="text-pink-400 font-semibold">[Full Sandbox]</span> for fullscreen IDE.
          </p>
        </header>

        {/* Categories SILO Hierarchy */}
        {buttonCategories.map((cat) => (
          <section key={cat.id} className="mb-8 bg-slate-900/30 border border-slate-800/80 rounded-2xl overflow-hidden shadow-xl">
            
            {/* Level 1: Category Header (Collapsible - Shrinked by Default) */}
            <button 
              onClick={() => toggleCat(cat.id)}
              className="w-full flex items-center justify-between p-5 bg-[#141724] hover:bg-[#1a1f30] transition-colors border-b border-slate-800 text-left font-bold text-xl text-slate-100"
            >
              <span className="flex items-center text-indigo-400">
                <Layers className="w-6 h-6 mr-3 text-indigo-500" />
                {cat.name}
              </span>
              <div className="flex items-center space-x-3">
                <span className="text-xs font-mono text-slate-400 bg-slate-800 px-3 py-1 rounded-full border border-slate-700">
                  {cat.subcategories.reduce((acc, sub) => acc + sub.buttons.length, 0)} Variants
                </span>
                {expandedCat[cat.id] ? <ChevronDown className="w-5 h-5 text-indigo-400" /> : <ChevronRight className="w-5 h-5 text-slate-400" />}
              </div>
            </button>

            {/* Category Body */}
            {expandedCat[cat.id] && (
              <div className="p-6 space-y-10">
                {cat.subcategories.map((sub, subIdx) => {
                  const isSubOpen = expandedSubCat[sub.name] !== false; // open by default when parent expanded
                  
                  return (
                    <div key={subIdx} className="space-y-6">
                      
                      {/* Level 2: Subcategory Header (Collapsible) */}
                      <button 
                        onClick={() => toggleSubCat(sub.name)}
                        className="w-full flex items-center justify-between text-lg font-bold text-slate-300 border-b border-slate-800/60 pb-3 hover:text-white transition-colors text-left"
                      >
                        <span className="flex items-center">
                          <span className="w-2 h-2 rounded-full bg-pink-500 mr-3"></span>
                          {sub.name}
                        </span>
                        {isSubOpen ? <ChevronDown className="w-4 h-4 text-slate-500" /> : <ChevronRight className="w-4 h-4 text-slate-500" />}
                      </button>

                      {/* Level 3: Grid of Button Cards */}
                      {isSubOpen && (
                        <div className="grid grid-cols-1 md:grid-cols-2 2xl:grid-cols-3 gap-6 pt-2">
                          {sub.buttons.map((btn, btnIdx) => (
                            <ButtonEditorCard 
                              key={btn.id}
                              btn={btn}
                              catIdx={cat.id}
                              btnIdx={btnIdx}
                              openSandbox={openSandbox}
                            />
                          ))}
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            )}

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
