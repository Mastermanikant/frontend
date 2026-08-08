import React, { useState, useEffect } from 'react';
import { Search, X } from 'lucide-react';
import { FONT_CATEGORIES, ALL_FONTS, loadFont } from '../data/fontsLibrary';

export default function FontSelectorDrawer({ isOpen, onClose, onSelectFont, currentFont }) {
  const [searchTerm, setSearchTerm] = useState('');

  // Auto-load fonts as they are rendered (simple lazy load for preview)
  useEffect(() => {
    if (isOpen) {
      ALL_FONTS.slice(0, 15).forEach(loadFont); // Load first few to avoid completely blank lists
    }
  }, [isOpen]);

  if (!isOpen) return null;

  const handleFontHover = (fontName) => {
    loadFont(fontName);
  };

  return (
    <div className="absolute top-4 left-4 w-72 bg-slate-900 border border-slate-700 rounded-2xl shadow-2xl z-50 flex flex-col h-[calc(100%-32px)] max-h-[600px] overflow-hidden animate-fadeIn">
      {/* Header */}
      <div className="p-4 border-b border-slate-800 flex items-center justify-between bg-slate-950/50">
        <h3 className="text-sm font-bold text-white">Select Font</h3>
        <button onClick={onClose} className="text-slate-400 hover:text-white">
          <X className="w-4 h-4" />
        </button>
      </div>

      {/* Search */}
      <div className="p-3 border-b border-slate-800">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-3.5 h-3.5 text-slate-500" />
          <input
            type="text"
            placeholder="Search fonts..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full bg-slate-950 border border-slate-800 rounded-xl pl-9 pr-3 py-2 text-xs text-white focus:outline-none focus:border-cyan-500"
          />
        </div>
      </div>

      {/* Font List */}
      <div className="flex-1 overflow-y-auto p-2 space-y-4">
        {searchTerm ? (
          <div className="space-y-1">
            <p className="text-[10px] font-bold text-slate-500 uppercase tracking-wider px-2 pt-2">Search Results</p>
            {ALL_FONTS.filter(f => f.toLowerCase().includes(searchTerm.toLowerCase())).map(font => (
              <FontOption
                key={font}
                font={font}
                isActive={currentFont === font}
                onSelect={() => { loadFont(font); onSelectFont(font); }}
                onHover={() => handleFontHover(font)}
              />
            ))}
          </div>
        ) : (
          FONT_CATEGORIES.map(category => (
            <div key={category.name} className="space-y-1">
              <p className="text-[10px] font-bold text-slate-500 uppercase tracking-wider px-2 pt-2">{category.name}</p>
              {category.fonts.map(font => (
                <FontOption
                  key={font}
                  font={font}
                  isActive={currentFont === font}
                  onSelect={() => { loadFont(font); onSelectFont(font); }}
                  onHover={() => handleFontHover(font)}
                />
              ))}
            </div>
          ))
        )}
      </div>
    </div>
  );
}

function FontOption({ font, isActive, onSelect, onHover }) {
  return (
    <button
      onMouseEnter={onHover}
      onClick={onSelect}
      className={`w-full text-left px-3 py-2.5 rounded-xl transition flex items-center justify-between ${
        isActive ? 'bg-cyan-500/20 text-cyan-300' : 'text-slate-300 hover:bg-slate-800 hover:text-white'
      }`}
    >
      <span style={{ fontFamily: font }} className="text-sm">{font}</span>
      {isActive && <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />}
    </button>
  );
}
