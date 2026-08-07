import React, { useState } from 'react';
import { Search, ChevronDown } from 'lucide-react';
import { CATEGORIES, COMPONENTS } from '../data/componentLibrary';

export default function ComponentLibrary({ selectedId, onSelect }) {
  const [activeCategory, setActiveCategory] = useState('buttons');
  const [searchQuery, setSearchQuery] = useState('');
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const filtered = COMPONENTS.filter(c => {
    const matchCat = c.category === activeCategory;
    const matchQ   = searchQuery === '' ||
      c.name.toLowerCase().includes(searchQuery.toLowerCase());
    return matchCat && matchQ;
  });

  const selectedComp = COMPONENTS.find(c => c.id === selectedId);

  return (
    <div className="flex flex-col h-full">
      {/* Category Tabs (scrollable) */}
      <div className="flex gap-1 p-3 overflow-x-auto border-b border-slate-800 shrink-0 scrollbar-none">
        {CATEGORIES.map(cat => (
          <button
            key={cat.id}
            onClick={() => { setActiveCategory(cat.id); setSearchQuery(''); setIsDropdownOpen(false); }}
            title={cat.label}
            className={`flex flex-col items-center px-2.5 py-1.5 rounded-xl text-[10px] font-bold whitespace-nowrap transition shrink-0 ${
              activeCategory === cat.id
                ? 'bg-cyan-500/20 text-cyan-300 border border-cyan-500/40'
                : 'text-slate-500 hover:text-slate-300 hover:bg-slate-800'
            }`}
          >
            <span className="text-base leading-none">{cat.emoji}</span>
            <span className="mt-0.5 leading-none">{cat.label}</span>
          </button>
        ))}
      </div>

      {/* Search */}
      <div className="p-3 border-b border-slate-800 shrink-0">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-3.5 h-3.5 text-slate-500" />
          <input
            type="text"
            placeholder={`Search ${activeCategory}…`}
            value={searchQuery}
            onChange={e => setSearchQuery(e.target.value)}
            className="w-full pl-9 pr-3 py-2 bg-slate-900 border border-slate-800 rounded-xl text-xs text-white placeholder-slate-600 focus:outline-none focus:border-cyan-500"
          />
        </div>
      </div>

      {/* Component List */}
      <div className="flex-1 overflow-y-auto p-2 space-y-0.5">
        <p className="text-[10px] text-slate-600 uppercase tracking-widest px-2 py-1 font-bold">
          {filtered.length} components
        </p>
        {filtered.map(comp => (
          <button
            key={comp.id}
            onClick={() => onSelect(comp.id)}
            className={`w-full text-left px-3 py-2.5 rounded-xl transition flex items-center gap-3 group ${
              selectedId === comp.id
                ? 'bg-gradient-to-r from-cyan-500/20 to-purple-500/10 border border-cyan-500/40 text-white'
                : 'hover:bg-slate-800/60 text-slate-400 hover:text-white border border-transparent'
            }`}
          >
            {/* Mini visual badge */}
            <div className={`w-8 h-8 rounded-lg shrink-0 flex items-center justify-center text-[10px] font-black border ${
              selectedId === comp.id
                ? 'border-cyan-500/60 bg-cyan-500/20 text-cyan-300'
                : 'border-slate-700 bg-slate-900 text-slate-500 group-hover:border-slate-600'
            }`}>
              {CATEGORIES.find(c => c.id === comp.category)?.emoji || '✦'}
            </div>

            <div className="min-w-0">
              <p className="text-xs font-bold truncate">{comp.name}</p>
              <p className="text-[10px] text-slate-600 truncate">
                {comp.effects?.slice(0,2).join(' · ')}
              </p>
            </div>
          </button>
        ))}
      </div>

      {/* Selected Footer */}
      {selectedComp && (
        <div className="p-3 border-t border-slate-800 bg-slate-900/60 shrink-0">
          <p className="text-[10px] text-slate-500 uppercase tracking-wider font-bold mb-1">Selected</p>
          <p className="text-xs font-bold text-cyan-300 truncate">{selectedComp.name}</p>
          <div className="flex flex-wrap gap-1 mt-1.5">
            {selectedComp.effects?.slice(0, 3).map((e, i) => (
              <span key={i} className="text-[9px] px-1.5 py-0.5 rounded bg-purple-500/20 text-purple-300 border border-purple-500/20">
                {e}
              </span>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
