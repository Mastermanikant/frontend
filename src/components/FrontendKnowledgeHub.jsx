import React, { useState, useMemo } from 'react';
import GlobalSearchBar from './GlobalSearchBar';
import BreadcrumbNav from './BreadcrumbNav';
import InteractiveSandboxModal from './InteractiveSandboxModal';
import { frontendKnowledgeGraph } from '../data/frontendKnowledgeGraph';
import { BookOpen, Code, Lightbulb, Terminal, Zap, Compass, ChevronDown, ChevronRight, Layers, Layout, Palette, Code2, PanelLeftClose, PanelLeftOpen, Play } from 'lucide-react';
import { useCanvas } from '../context/CanvasContext';

// Import Canvas Studio components to preserve & integrate them
import ComponentLibrary from './ComponentLibrary';
import StyleControls from './StyleControls';
import LiveCanvas from './LiveCanvas';
import OutputPanel from './OutputPanel';
import BackgroundCanvas from './BackgroundCanvas';
import ButtonLibraryDemo from './ButtonLibraryDemo';

export default function FrontendKnowledgeHub() {
  const { stageMode, setStageMode } = useCanvas();

  // Hub States
  const [activeCategory, setActiveCategory] = useState('HTML');
  const [activeSubcategory, setActiveSubcategory] = useState(null);
  const [sandboxData, setSandboxData] = useState(null);
  const [expandedCategories, setExpandedCategories] = useState({ HTML: true });
  
  // View State: 'encyclopedia' | 'canvas'
  const [mainView, setMainView] = useState('encyclopedia');

  // Accordion States for Canvas Studio Tools
  const [expandedCanvasPanels, setExpandedCanvasPanels] = useState({ components: true, styles: false, layers: false });

  // Sidebar Shrink/Expand state
  const [isSidebarExpanded, setIsSidebarExpanded] = useState(true);

  // Generate Tree structure from flat graph
  const tree = useMemo(() => {
    const struct = {};
    frontendKnowledgeGraph.forEach(item => {
      if (!struct[item.category]) struct[item.category] = {};
      if (!struct[item.category][item.subcategory]) struct[item.category][item.subcategory] = [];
      struct[item.category][item.subcategory].push(item);
    });
    return struct;
  }, []);

  const categories = Object.keys(tree);

  const toggleCategory = (cat) => {
    setActiveCategory(cat);
    setExpandedCategories(prev => ({ ...prev, [cat]: true }));
  };

  const toggleCanvasPanel = (panel) => {
    setExpandedCanvasPanels(prev => ({ ...prev, [panel]: !prev[panel] }));
  };

  const selectTerm = (termItem) => {
    setMainView('encyclopedia');
    setActiveCategory(termItem.category);
    setActiveSubcategory(termItem.subcategory);
    setExpandedCategories(prev => ({ ...prev, [termItem.category]: true }));
    
    // Auto-open Sandbox for the selected term!
    const templates = getSandboxTemplates(termItem);
    setSandboxData({
      name: termItem.term,
      html: templates.html,
      css: templates.css,
      js: templates.js
    });
  };

  // Helper to generate sandbox templates based on category
  const getSandboxTemplates = (term) => {
    if (!term) return {};
    let html = `<h1>${term.term}</h1>\n<p>${term.definition}</p>`;
    let css = `body {\n  font-family: sans-serif;\n  padding: 2rem;\n}\n\nh1 {\n  color: #6366f1;\n}`;
    let js = `// Explore ${term.term}\nconsole.log("Loaded!");`;

    if (term.category === 'HTML') html = `<!-- Example of ${term.term} -->\n<div class="example">\n  Hello HTML!\n</div>`;
    else if (term.category === 'CSS') {
      html = `<div class="box">\n  ${term.term}\n</div>`;
      css = `.box {\n  width: 200px;\n  height: 200px;\n  background: #3b82f6;\n  color: white;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-weight: bold;\n  border-radius: 8px;\n  /* Apply ${term.term} here */\n}`;
    } else if (term.category === 'JavaScript') {
      html = `<button id="btn">Run JS</button>\n<div id="output" style="margin-top:1rem;"></div>`;
      js = `// ${term.term}\ndocument.getElementById('btn').addEventListener('click', () => {\n  document.getElementById('output').innerText = "Executed!";\n});`;
    } else if (term.category === 'Animations') {
       html = `<div class="animate-me">Hover me</div>`;
       css = `.animate-me {\n  background: #ec4899;\n  color: white;\n  padding: 1rem 2rem;\n  display: inline-block;\n  border-radius: 8px;\n  cursor: pointer;\n  transition: all 0.3s ease;\n}\n\n.animate-me:hover {\n  /* Apply hover effect */\n  transform: scale(1.1);\n}`;
    }
    return { html, css, js };
  };

  return (
    <div className="flex flex-col h-screen bg-[#0f111a] text-slate-300 font-sans overflow-hidden">
      
      {/* Top Navigation & Search Bar */}
      <header className="h-16 bg-[#161925] border-b border-slate-800 flex items-center px-4 shrink-0 shadow-lg relative z-20 justify-between">
        <div className="flex items-center space-x-3">
          <button onClick={() => setIsSidebarExpanded(!isSidebarExpanded)} className="p-2 hover:bg-slate-800 rounded-lg text-slate-400 hover:text-white transition-colors">
            {isSidebarExpanded ? <PanelLeftClose className="w-5 h-5" /> : <PanelLeftOpen className="w-5 h-5" />}
          </button>
          <div className="bg-gradient-to-br from-indigo-500 to-purple-600 p-1.5 rounded-lg shadow-lg shadow-indigo-500/20">
            <BookOpen className="w-5 h-5 text-white" />
          </div>
          <div>
            <h1 className="text-lg font-bold text-white tracking-tight leading-none">Frontend<span className="text-indigo-400">Hub</span></h1>
          </div>
        </div>
        
        <div className="flex-1 max-w-2xl mx-4">
          <GlobalSearchBar onSelectTerm={selectTerm} />
        </div>
        
        <div className="flex items-center space-x-2 bg-slate-900 rounded-lg p-1 border border-slate-800">
           <button 
             onClick={() => setMainView('encyclopedia')}
             className={`px-3 py-1.5 text-sm font-bold rounded-md transition-all ${mainView === 'encyclopedia' ? 'bg-indigo-600 text-white shadow-md' : 'text-slate-400 hover:text-white'}`}
           >
             <BookOpen className="w-4 h-4 inline mr-2" />
             Encyclopedia
           </button>
           <button 
             onClick={() => setMainView('buttons')}
             className={`px-3 py-1.5 text-sm font-bold rounded-md transition-all ${mainView === 'buttons' ? 'bg-pink-600 text-white shadow-md' : 'text-slate-400 hover:text-white'}`}
           >
             <Layers className="w-4 h-4 inline mr-2" />
             Button Library
           </button>
           <button 
             onClick={() => setMainView('canvas')}
             className={`px-3 py-1.5 text-sm font-bold rounded-md transition-all ${mainView === 'canvas' ? 'bg-cyan-600 text-white shadow-md' : 'text-slate-400 hover:text-white'}`}
           >
             <Layout className="w-4 h-4 inline mr-2" />
             Visual Canvas
           </button>
        </div>
      </header>

      {/* Main 2-Column Layout */}
      <div className="flex flex-1 overflow-hidden relative">
        
        {/* Left Sidebar: SILO Taxonomy Tree & Canvas Accordions */}
        <aside className={`${isSidebarExpanded ? 'w-80' : 'w-0 opacity-0'} transition-all duration-300 ease-in-out bg-[#12141c] border-r border-slate-800 overflow-y-auto custom-scrollbar flex flex-col relative z-10 shrink-0`}>
          
          {mainView === 'encyclopedia' ? (
            <div className="p-3">
              <div className="px-3 py-2 text-xs font-bold text-slate-500 uppercase tracking-widest flex items-center mb-2">
                <Compass className="w-4 h-4 mr-2" /> Taxonomy Directory
              </div>
              {categories.map(cat => (
                <div key={cat} className="mb-2">
                  <button 
                    onClick={() => toggleCategory(cat)}
                    className={`w-full flex items-center justify-between px-3 py-2 rounded-lg font-medium transition-colors ${activeCategory === cat ? 'bg-indigo-500/10 text-indigo-400' : 'text-slate-300 hover:bg-slate-800'}`}
                  >
                    <span className="flex items-center">
                      {cat === 'HTML' && <Code className="w-4 h-4 mr-2" />}
                      {cat === 'CSS' && <Lightbulb className="w-4 h-4 mr-2" />}
                      {cat === 'JavaScript' && <Terminal className="w-4 h-4 mr-2" />}
                      {cat === 'Animations' && <Zap className="w-4 h-4 mr-2" />}
                      {['UI Components', 'Ecosystem'].includes(cat) && <Layers className="w-4 h-4 mr-2" />}
                      {cat}
                    </span>
                    {expandedCategories[cat] ? <ChevronDown className="w-4 h-4" /> : <ChevronRight className="w-4 h-4" />}
                  </button>
                  
                  {expandedCategories[cat] && tree[cat] && (
                    <div className="ml-5 mt-1 border-l-2 border-slate-800 pl-2 space-y-1">
                      {Object.keys(tree[cat]).map(subCat => (
                        <div key={subCat}>
                          <div className="px-3 py-1.5 text-[10px] font-bold text-slate-500 uppercase tracking-wider mt-2 mb-1">{subCat}</div>
                          <ul className="space-y-0.5">
                            {tree[cat][subCat].map(item => (
                              <li key={item.id}>
                                <button 
                                  onClick={() => selectTerm(item)}
                                  className={`w-full text-left px-3 py-1.5 rounded-md text-sm transition-all truncate text-slate-400 hover:text-slate-200 hover:bg-slate-800 border-l-2 border-transparent`}
                                >
                                  {item.term}
                                </button>
                              </li>
                            ))}
                          </ul>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
          ) : (
            <div className="p-3">
               <div className="px-3 py-2 text-xs font-bold text-slate-500 uppercase tracking-widest flex items-center mb-2">
                <Layout className="w-4 h-4 mr-2" /> Visual Studio Tools
              </div>
              
              {/* Accordion: 52+ Components */}
              <div className="mb-2 bg-slate-900 rounded-lg overflow-hidden border border-slate-800">
                <button onClick={() => toggleCanvasPanel('components')} className="w-full flex items-center justify-between p-3 bg-slate-800 hover:bg-slate-700 transition-colors font-bold text-slate-200">
                  <span className="flex items-center"><Layers className="w-4 h-4 mr-2 text-cyan-400"/> UI Components Library</span>
                  {expandedCanvasPanels.components ? <ChevronDown className="w-4 h-4" /> : <ChevronRight className="w-4 h-4" />}
                </button>
                {expandedCanvasPanels.components && (
                  <div className="p-3 max-h-[400px] overflow-y-auto custom-scrollbar">
                    <ComponentLibrary />
                  </div>
                )}
              </div>

              {/* Accordion: Themes & Styles */}
              <div className="mb-2 bg-slate-900 rounded-lg overflow-hidden border border-slate-800">
                <button onClick={() => toggleCanvasPanel('styles')} className="w-full flex items-center justify-between p-3 bg-slate-800 hover:bg-slate-700 transition-colors font-bold text-slate-200">
                  <span className="flex items-center"><Palette className="w-4 h-4 mr-2 text-pink-400"/> Theme & Style Controls</span>
                  {expandedCanvasPanels.styles ? <ChevronDown className="w-4 h-4" /> : <ChevronRight className="w-4 h-4" />}
                </button>
                {expandedCanvasPanels.styles && (
                  <div className="p-3">
                    <StyleControls />
                  </div>
                )}
              </div>
              
            </div>
          )}
        </aside>

        {/* Right Content Area */}
        <main className="flex-1 bg-[#0f111a] flex flex-col relative overflow-hidden">
          
          {mainView === 'buttons' ? (
            <ButtonLibraryDemo />
          ) : mainView === 'encyclopedia' ? (
              <div className="h-full flex flex-col p-6 lg:p-10 overflow-y-auto custom-scrollbar relative">
                <div className="mb-10 shrink-0">
                  <h1 className="text-4xl font-extrabold text-white mb-3 flex items-center">
                    {activeCategory === 'HTML' && <Code className="w-8 h-8 mr-3 text-orange-500" />}
                    {activeCategory === 'CSS' && <Lightbulb className="w-8 h-8 mr-3 text-blue-500" />}
                    {activeCategory === 'JavaScript' && <Terminal className="w-8 h-8 mr-3 text-yellow-400" />}
                    {activeCategory === 'Animations' && <Zap className="w-8 h-8 mr-3 text-pink-500" />}
                    {['UI Components', 'Ecosystem'].includes(activeCategory) && <Layers className="w-8 h-8 mr-3 text-indigo-500" />}
                    {activeCategory} Encyclopedia
                  </h1>
                  <p className="text-slate-400 text-lg">Browse {tree[activeCategory] ? Object.values(tree[activeCategory]).flat().length : 0} verified concepts, terms, and components.</p>
                </div>
                
                {tree[activeCategory] ? Object.keys(tree[activeCategory]).map(subCat => (
                  <div key={subCat} className="mb-12 shrink-0">
                    <h2 className="text-2xl font-bold text-slate-200 border-b border-slate-700/60 pb-3 mb-6 flex items-center">
                      {subCat}
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
                      {tree[activeCategory][subCat].map(term => (
                        <div 
                          key={term.id} 
                          className="bg-slate-800/40 border border-slate-700 hover:border-indigo-500/50 rounded-xl p-5 transition-all flex flex-col shadow-lg"
                        >
                          <div className="flex justify-between items-start mb-3">
                            <h3 className="text-xl font-bold text-indigo-300">{term.term}</h3>
                            <span className="text-[10px] font-mono text-slate-500 bg-slate-900 px-2 py-1 rounded shrink-0 ml-2 border border-slate-700/50">ID:{term.id}</span>
                          </div>
                          
                          <p className="text-sm text-slate-400 mb-6 flex-1">
                            {term.definition}
                          </p>

                          <div className="mt-auto pt-4 border-t border-slate-700/50 flex justify-end">
                            <button 
                              onClick={() => selectTerm(term)}
                              className="flex items-center space-x-1.5 px-4 py-2 bg-pink-500/10 hover:bg-pink-500/20 text-pink-400 rounded-lg text-sm font-semibold transition-colors border border-pink-500/20"
                            >
                              <Play className="w-4 h-4" />
                              <span>Interactive Sandbox</span>
                            </button>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )) : (
                  <div className="text-slate-500 text-center mt-20">No data available for this category yet.</div>
                )}
              </div>
          ) : (
            /* Visual Canvas Studio Stage */
            <div className="flex flex-1 overflow-hidden relative bg-slate-950">
              <BackgroundCanvas theme="aurora" speed={0.6} density={40} glowIntensity={50} />
              
              <div className="flex flex-col flex-1 relative z-10 p-4">
                <div className="flex justify-between items-center mb-4 bg-slate-900/80 p-2 rounded-xl border border-slate-800 backdrop-blur-md">
                   <div className="text-sm font-bold text-slate-300 flex items-center px-2">
                      <Layout className="w-4 h-4 mr-2 text-cyan-400"/> Live Visual Builder Stage
                   </div>
                   <div className="flex space-x-2">
                     <button onClick={() => setStageMode('edit')} className={`px-3 py-1 rounded-md text-xs font-bold ${stageMode === 'edit' ? 'bg-cyan-600 text-white' : 'text-slate-400 hover:text-white'}`}>Edit Mode</button>
                     <button onClick={() => setStageMode('live')} className={`px-3 py-1 rounded-md text-xs font-bold ${stageMode === 'live' ? 'bg-emerald-600 text-white' : 'text-slate-400 hover:text-white'}`}>Live Mode</button>
                   </div>
                </div>
                
                <div className="flex-1 flex space-x-4 min-h-0">
                  <div className="flex-1 relative rounded-2xl overflow-hidden border border-slate-700 shadow-2xl">
                    <LiveCanvas viewportWidth="100%" />
                  </div>
                  <div className="w-96 flex flex-col space-y-4 shrink-0">
                    <div className="flex-1 bg-slate-900/90 rounded-2xl border border-slate-800 overflow-hidden flex flex-col shadow-xl">
                      <div className="p-3 border-b border-slate-800 bg-slate-950 flex items-center">
                        <Code2 className="w-4 h-4 text-pink-400 mr-2" />
                        <h3 className="text-xs font-bold uppercase tracking-wider text-slate-300">Live Code Output</h3>
                      </div>
                      <div className="flex-1 overflow-hidden">
                        <OutputPanel />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </main>
      </div>
      
      <style dangerouslySetInnerHTML={{__html: `
        .custom-scrollbar::-webkit-scrollbar { width: 6px; }
        .custom-scrollbar::-webkit-scrollbar-track { background: transparent; }
        .custom-scrollbar::-webkit-scrollbar-thumb { background-color: #334155; border-radius: 20px; }
        .checkerboard-bg {
          background-color: #f8fafc;
          background-image: linear-gradient(45deg, #e2e8f0 25%, transparent 25%), 
                            linear-gradient(-45deg, #e2e8f0 25%, transparent 25%), 
                            linear-gradient(45deg, transparent 75%, #e2e8f0 75%), 
                            linear-gradient(-45deg, transparent 75%, #e2e8f0 75%);
          background-size: 20px 20px;
          background-position: 0 0, 0 10px, 10px -10px, -10px 0px;
        }
      `}} />
    </div>
  );
}
