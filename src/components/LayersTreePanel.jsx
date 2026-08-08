import React from 'react';
import { Layers, Eye, EyeOff, Lock, Unlock, Copy, Trash2, Type, Square, Move } from 'lucide-react';
import { useCanvas } from '../context/CanvasContext';

export default function LayersTreePanel() {
  const { elements, selectedElementId, setSelectedElementId, deleteElement, duplicateElement } = useCanvas();

  return (
    <div className="flex flex-col h-full bg-slate-950/40 select-none">
      <div className="p-3 border-b border-slate-900 flex items-center justify-between shrink-0">
        <span className="text-[10px] font-black text-slate-500 uppercase tracking-widest flex items-center gap-1.5">
          <Layers className="w-3.5 h-3.5 text-purple-400" />
          DOM Layers ({elements.length})
        </span>
      </div>

      <div className="flex-1 overflow-y-auto p-2 space-y-1">
        {elements.map((el, index) => {
          const isSelected = el.id === selectedElementId;
          const Icon = el.type === 'text' ? Type : Square;

          return (
            <div
              key={el.id}
              onClick={() => setSelectedElementId(el.id)}
              className={`p-2 rounded-xl text-xs flex items-center justify-between border transition cursor-pointer ${
                isSelected
                  ? 'bg-cyan-500/20 text-cyan-300 border-cyan-500/40 font-bold'
                  : 'bg-slate-900/60 text-slate-400 border-slate-800/80 hover:text-white hover:border-slate-700'
              }`}
            >
              <div className="flex items-center gap-2 truncate">
                <Icon className="w-3.5 h-3.5 shrink-0 text-slate-500" />
                <span className="truncate">{el.text || el.id}</span>
              </div>

              <div className="flex items-center gap-1 shrink-0" onClick={e => e.stopPropagation()}>
                <button
                  onClick={() => duplicateElement(el.id)}
                  title="Duplicate Layer"
                  className="p-1 hover:text-cyan-300 transition"
                >
                  <Copy className="w-3 h-3" />
                </button>
                <button
                  onClick={() => deleteElement(el.id)}
                  title="Delete Layer"
                  className="p-1 hover:text-red-400 transition"
                >
                  <Trash2 className="w-3 h-3" />
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
