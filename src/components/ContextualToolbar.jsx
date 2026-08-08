import React from 'react';
import { Type, Palette, Type as TypeIcon, Square, Trash2, Zap } from 'lucide-react';

export default function ContextualToolbar({ element, onUpdate, onDelete, onOpenFontSelector }) {
  if (!element) return null;

  // Calculate dynamic floating position directly above the selected element
  const posX = Math.max(20, element.x || 40);
  const posY = Math.max(10, (element.y || 40) - 50);

  return (
    <div 
      style={{ left: `${posX}px`, top: `${posY}px` }}
      className="absolute bg-slate-900 border border-slate-700 rounded-2xl shadow-2xl z-40 px-4 py-2 flex items-center gap-3 animate-fadeIn backdrop-blur-xl shrink-0"
    >
      {element.type === 'text' && (
        <>
          <button
            onClick={onOpenFontSelector}
            className="flex items-center gap-1.5 px-3 py-1.5 bg-slate-800 hover:bg-slate-700 rounded-xl text-xs font-bold text-white transition"
          >
            <TypeIcon className="w-3.5 h-3.5 text-cyan-400" />
            <span className="truncate max-w-[100px]">{element.style?.fontFamily || 'Select Font'}</span>
          </button>
          
          <div className="h-5 w-px bg-slate-700" />

          <div className="flex items-center gap-2">
            <span className="text-[10px] font-bold text-slate-400">Size</span>
            <input
              type="number"
              value={parseInt(element.style?.fontSize) || 16}
              onChange={(e) => onUpdate({ ...element, style: { ...element.style, fontSize: `${e.target.value}px` } })}
              className="w-14 bg-slate-950 border border-slate-700 rounded-lg px-2 py-1 text-xs text-white focus:outline-none font-mono"
            />
          </div>

          <div className="flex items-center gap-2">
            <span className="text-[10px] font-bold text-slate-400">Color</span>
            <input
              type="color"
              value={element.style?.color || '#ffffff'}
              onChange={(e) => onUpdate({ ...element, style: { ...element.style, color: e.target.value } })}
              className="w-6 h-6 rounded-lg cursor-pointer border-0 bg-transparent"
            />
          </div>
        </>
      )}

      {element.type === 'button' && (
        <>
          <div className="flex items-center gap-2">
            <Palette className="w-3.5 h-3.5 text-pink-400" />
            <input
              type="color"
              value={element.style?.bgColor1 || '#06b6d4'}
              onChange={(e) => onUpdate({ ...element, style: { ...element.style, bgColor1: e.target.value } })}
              className="w-6 h-6 rounded-lg cursor-pointer border-0 bg-transparent"
              title="Primary Color"
            />
            <input
              type="color"
              value={element.style?.bgColor2 || '#9333ea'}
              onChange={(e) => onUpdate({ ...element, style: { ...element.style, bgColor2: e.target.value } })}
              className="w-6 h-6 rounded-lg cursor-pointer border-0 bg-transparent"
              title="Secondary Color"
            />
          </div>

          <div className="h-5 w-px bg-slate-700" />

          <div className="flex items-center gap-2">
            <Square className="w-3.5 h-3.5 text-green-400" />
            <input
              type="number"
              value={element.style?.borderRadius || 8}
              onChange={(e) => onUpdate({ ...element, style: { ...element.style, borderRadius: parseInt(e.target.value) } })}
              className="w-12 bg-slate-950 border border-slate-700 rounded-lg px-2 py-1 text-xs text-white focus:outline-none font-mono"
              title="Border Radius (px)"
            />
          </div>

          <div className="h-5 w-px bg-slate-700" />

          <div className="flex items-center gap-2">
            <Zap className="w-3.5 h-3.5 text-purple-400" />
            <select
              value={element.style?.hoverEffect || 'none'}
              onChange={(e) => onUpdate({ ...element, style: { ...element.style, hoverEffect: e.target.value } })}
              className="bg-slate-950 border border-slate-700 rounded-lg px-2 py-1 text-xs text-white focus:outline-none max-w-[100px]"
            >
              <option value="none">No Anim</option>
              <option value="shimmer">Shimmer</option>
              <option value="scale">Scale</option>
              <option value="glow">Glow</option>
              <option value="lift">Lift</option>
            </select>
          </div>
        </>
      )}

      <div className="h-5 w-px bg-slate-700 ml-1" />

      <button
        onClick={onDelete}
        className="p-1.5 text-slate-400 hover:text-red-400 hover:bg-slate-800 rounded-lg transition"
        title="Delete Element"
      >
        <Trash2 className="w-4 h-4" />
      </button>
    </div>
  );
}
