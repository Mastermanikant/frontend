import React, { useState } from 'react';
import { X, Sparkles, Layout, Check, ArrowRight } from 'lucide-react';
import { TEMPLATES, TEMPLATE_CATEGORIES } from '../data/templatesLibrary';
import { useCanvas } from '../context/CanvasContext';

export default function TemplatePreviewModal({ isOpen, onClose }) {
  const [activeCategory, setActiveCategory] = useState('All');
  const [selectedTemplate, setSelectedTemplate] = useState(TEMPLATES[0]);
  const { loadTemplate } = useCanvas();

  if (!isOpen) return null;

  const filteredTemplates = activeCategory === 'All' 
    ? TEMPLATES 
    : TEMPLATES.filter(t => t.category === activeCategory);

  const handleUseTemplate = () => {
    if (selectedTemplate) {
      loadTemplate(selectedTemplate);
      onClose();
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-xl animate-fadeIn select-none">
      <div className="bg-slate-900 border border-slate-800 rounded-3xl w-full max-w-4xl h-[600px] flex flex-col overflow-hidden shadow-2xl">
        
        {/* Modal Header */}
        <div className="px-6 py-4 border-b border-slate-800 flex items-center justify-between bg-slate-950/60 shrink-0">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-xl bg-purple-500/20 text-purple-300 border border-purple-500/30 flex items-center justify-center">
              <Layout className="w-4 h-4" />
            </div>
            <div>
              <h3 className="text-sm font-black text-white font-heading">Template Library (Full A-Z Website Frontends)</h3>
              <p className="text-[10px] text-slate-400">Select any complete website template to load onto the stage.</p>
            </div>
          </div>
          <button onClick={onClose} className="p-2 rounded-xl text-slate-400 hover:text-white hover:bg-slate-800 transition">
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Category Tabs */}
        <div className="px-6 py-2 border-b border-slate-800/60 flex gap-2 overflow-x-auto shrink-0 bg-slate-950/30">
          {TEMPLATE_CATEGORIES.map(cat => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-3 py-1.5 rounded-xl text-xs font-bold transition shrink-0 ${
                activeCategory === cat
                  ? 'bg-cyan-500/20 text-cyan-300 border border-cyan-500/40'
                  : 'text-slate-400 hover:text-white hover:bg-slate-800'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Main Body (Split 2-Panel) */}
        <div className="flex-1 flex overflow-hidden">
          
          {/* Left Grid */}
          <div className="w-1/2 p-4 border-r border-slate-800 overflow-y-auto space-y-3">
            {filteredTemplates.map(tpl => (
              <div
                key={tpl.id}
                onClick={() => setSelectedTemplate(tpl)}
                className={`p-4 rounded-2xl border transition cursor-pointer flex flex-col justify-between h-32 relative overflow-hidden bg-gradient-to-br ${tpl.thumbnailBg} ${
                  selectedTemplate.id === tpl.id ? 'ring-2 ring-cyan-400 border-cyan-400 shadow-xl' : 'border-slate-800 hover:border-slate-700'
                }`}
              >
                <div>
                  <span className="text-[9px] font-mono px-2 py-0.5 rounded-full bg-slate-950/60 text-cyan-300 border border-cyan-500/30 inline-block mb-1">
                    {tpl.category}
                  </span>
                  <h4 className="text-sm font-bold text-white leading-tight">{tpl.name}</h4>
                  <p className="text-[10px] text-slate-300 line-clamp-2 mt-1">{tpl.description}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Right Live Preview & CTA */}
          <div className="w-1/2 p-6 flex flex-col justify-between bg-slate-950/50">
            <div>
              <div className={`w-full h-44 rounded-2xl bg-gradient-to-br ${selectedTemplate.thumbnailBg} p-6 border border-slate-800 shadow-2xl flex flex-col justify-center`}>
                <span className="text-xs font-mono text-cyan-300 font-bold mb-1">{selectedTemplate.category}</span>
                <h2 className="text-lg font-black text-white leading-snug">{selectedTemplate.name}</h2>
                <p className="text-xs text-slate-300 mt-2">{selectedTemplate.description}</p>
              </div>

              <div className="mt-6 space-y-2">
                <p className="text-xs font-bold text-slate-400 uppercase tracking-wider">Full Website Includes:</p>
                <div className="text-xs text-slate-300 space-y-1">
                  <div className="flex items-center gap-2"><Check className="w-3.5 h-3.5 text-green-400" /> Header / Navbar &amp; Logo Badge</div>
                  <div className="flex items-center gap-2"><Check className="w-3.5 h-3.5 text-green-400" /> Hero Section &amp; CTA Buttons</div>
                  <div className="flex items-center gap-2"><Check className="w-3.5 h-3.5 text-green-400" /> 3x Feature Cards Grid &amp; Pricing Tiers</div>
                  <div className="flex items-center gap-2"><Check className="w-3.5 h-3.5 text-green-400" /> Footer with Copyright &amp; Social Links</div>
                </div>
              </div>
            </div>

            <button
              onClick={handleUseTemplate}
              className="w-full py-3 rounded-2xl bg-gradient-to-r from-cyan-500 to-purple-600 text-white font-bold text-sm shadow-xl shadow-cyan-500/20 hover:opacity-90 transition flex items-center justify-center gap-2"
            >
              <span>Load Full Website On Stage</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

        </div>

      </div>
    </div>
  );
}
