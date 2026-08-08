import React, { useState, useRef } from 'react';
import { RefreshCw, Zap, Palette, Type, Code2, Sparkles, Check, MousePointer2 } from 'lucide-react';
import { COMPONENTS } from '../data/componentLibrary';
import ContextualToolbar from './ContextualToolbar';
import FontSelectorDrawer from './FontSelectorDrawer';
import { useCanvas } from '../context/CanvasContext';

export default function LiveCanvas({ animKey }) {
  const {
    elements,
    selectedElementId,
    setSelectedElementId,
    selectedElement,
    updateElement,
    deleteElement,
    addElement
  } = useCanvas();

  const [isFontSelectorOpen, setIsFontSelectorOpen] = useState(false);
  const [showCodeDrawer, setShowCodeDrawer]  = useState(false);
  const canvasRef = useRef(null);

  // Dragging state
  const [isDragging, setIsDragging] = useState(false);
  const [dragOffset, setDragOffset] = useState({ x: 0, y: 0 });

  const handlePointerDown = (e, element) => {
    e.stopPropagation();
    setSelectedElementId(element.id);
    setIsDragging(true);
    const rect = e.currentTarget.getBoundingClientRect();
    setDragOffset({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top
    });
  };

  const handlePointerMove = (e) => {
    if (!isDragging || !selectedElementId || !canvasRef.current) return;
    const canvasRect = canvasRef.current.getBoundingClientRect();
    
    const newX = e.clientX - canvasRect.left - dragOffset.x;
    const newY = e.clientY - canvasRect.top - dragOffset.y;

    updateElement({
      ...selectedElement,
      x: Math.max(0, newX),
      y: Math.max(0, newY)
    });
  };

  const handlePointerUp = () => {
    setIsDragging(false);
  };

  const handleAddText = () => {
    const newEl = {
      id: `text-${Date.now()}`,
      type: 'text',
      text: 'Double click to edit text',
      x: 100,
      y: 100,
      style: {
        fontSize: '28px',
        color: '#ffffff',
        fontFamily: 'Inter',
        fontWeight: 'bold'
      }
    };
    addElement(newEl);
  };

  const handleCanvasClick = () => {
    setSelectedElementId(null);
    setIsFontSelectorOpen(false);
  };

  const renderElement = (el) => {
    const isSelected = el.id === selectedElementId;
    
    if (el.type === 'text') {
      return (
        <div
          key={el.id}
          onPointerDown={(e) => handlePointerDown(e, el)}
          className={`absolute cursor-move select-none ${isSelected ? 'ring-2 ring-cyan-500 rounded-md ring-offset-4 ring-offset-slate-900' : ''}`}
          style={{ 
            left: el.x, 
            top: el.y, 
            fontSize: el.style.fontSize, 
            color: el.style.color, 
            fontFamily: el.style.fontFamily,
            fontWeight: el.style.fontWeight,
            lineHeight: el.style.lineHeight || '1.2'
          }}
        >
          <input
            type="text"
            value={el.text}
            onChange={(e) => updateElement({ ...el, text: e.target.value })}
            className="bg-transparent outline-none border-none pointer-events-auto"
            style={{ width: `${Math.max(el.text.length, 1)}ch` }}
            onPointerDown={(e) => e.stopPropagation()}
            onFocus={() => setSelectedElementId(el.id)}
          />
        </div>
      );
    }

    if (el.type === 'button') {
      const comp = COMPONENTS.find(c => c.id === el.componentId);
      if (!comp) return null;
      
      const style = el.style;
      const r = style.borderRadius === 9999 ? '9999px' : `${style.borderRadius}px`;
      let bg = '';
      if (style.bgType === 'gradient') bg = `linear-gradient(135deg, ${style.bgColor1}, ${style.bgColor2})`;
      else if (style.bgType === 'solid') bg = style.bgColor1;
      else if (style.bgType === 'glass') bg = 'rgba(255,255,255,0.08)';
      else bg = 'rgba(255,255,255,0.04)';

      const glowShadow = style.shadowType === 'neonGlow'
        ? `0 0 30px ${style.glowColor}88, 0 0 60px ${style.glowColor}44`
        : style.shadowType === 'soft' ? '0 6px 30px rgba(0,0,0,0.5)'
        : style.shadowType === 'dramatic' ? '0 12px 50px rgba(0,0,0,0.8)'
        : undefined;

      const borderVal = style.borderStyle === 'solid'  ? `${style.borderWidth}px solid ${style.borderColor}`
                      : style.borderStyle === 'dashed' ? `${style.borderWidth}px dashed ${style.borderColor}`
                      : style.borderStyle === 'gradient' ? `${style.borderWidth}px solid transparent`
                      : undefined;

      const hoverCls = style.hoverEffect === 'scale'  ? 'hover:scale-105'
                     : style.hoverEffect === 'lift'   ? 'hover:-translate-y-1.5 hover:shadow-2xl'
                     : style.hoverEffect === 'shimmer' ? 'shiny-btn'
                     : style.hoverEffect === 'glow'   ? 'hover:shadow-[0_0_35px_currentColor]'
                     : style.hoverEffect === 'ripple' ? 'active:scale-95'
                     : style.hoverEffect === 'magnetic'? 'hover:scale-110'
                     : '';

      return (
        <div
          key={el.id}
          onPointerDown={(e) => handlePointerDown(e, el)}
          className={`absolute cursor-move inline-block ${isSelected ? 'ring-2 ring-cyan-500 rounded-md ring-offset-4 ring-offset-slate-900' : ''}`}
          style={{ left: el.x, top: el.y, zIndex: isSelected ? 10 : 1 }}
        >
          <button
            style={{
              borderRadius: r,
              background: bg,
              color: style.textColor,
              border: borderVal,
              boxShadow: glowShadow,
              backdropFilter: style.bgType === 'glass' ? 'blur(16px)' : undefined,
            }}
            className={`px-8 py-3.5 font-bold text-sm select-none transition-all duration-200 pointer-events-none ${hoverCls}`}
          >
            {el.text}
          </button>
        </div>
      );
    }
    return null;
  };

  return (
    <div 
      className="h-full w-full flex flex-col relative select-none"
      onPointerMove={handlePointerMove}
      onPointerUp={handlePointerUp}
      onPointerLeave={handlePointerUp}
    >
      
      {/* Top Action Bar */}
      <div className="w-full flex items-center justify-between px-4 py-2 bg-slate-900/60 border-b border-slate-800 shrink-0 z-20 absolute top-0 left-0">
        <button
          onClick={handleAddText}
          className="flex items-center gap-1.5 px-3 py-1.5 bg-cyan-500/20 text-cyan-300 border border-cyan-500/30 hover:bg-cyan-500/30 rounded-xl text-xs font-bold transition"
        >
          <Type className="w-3.5 h-3.5" />
          <span>Add Text Box</span>
        </button>
        
        <div className="text-[11px] font-bold text-slate-400 flex items-center gap-2 font-mono">
          <MousePointer2 className="w-3.5 h-3.5 text-cyan-400" /> Freeform Drag Stage ({elements.length} Nodes)
        </div>

        <button
          onClick={() => setShowCodeDrawer(!showCodeDrawer)}
          className="text-[10px] font-bold px-2.5 py-1 rounded-lg bg-slate-800 text-slate-300 hover:text-white border border-slate-700 transition flex items-center gap-1"
        >
          <Code2 className="w-3 h-3 text-cyan-400" />
          <span>Inspect Canvas State</span>
        </button>
      </div>

      {/* Floating Contextual Toolbar */}
      {selectedElement && (
        <ContextualToolbar 
          element={selectedElement} 
          onUpdate={updateElement}
          onDelete={() => deleteElement(selectedElementId)}
          onOpenFontSelector={() => setIsFontSelectorOpen(true)}
        />
      )}

      {/* Font Selector Drawer */}
      <FontSelectorDrawer 
        isOpen={isFontSelectorOpen} 
        onClose={() => setIsFontSelectorOpen(false)}
        currentFont={selectedElement?.style?.fontFamily}
        onSelectFont={(font) => {
          if (selectedElement) {
            updateElement({
              ...selectedElement,
              style: { ...selectedElement.style, fontFamily: font }
            });
          }
        }}
      />

      {/* FREEFORM CANVAS AREA */}
      <div 
        ref={canvasRef}
        className="flex-1 w-full relative overflow-hidden mt-12 bg-transparent"
        onClick={handleCanvasClick}
      >
        <div key={animKey} className="absolute inset-0">
          {elements.map(renderElement)}
        </div>
      </div>

      {/* QUICK CONTROL BAR */}
      {selectedElement && (
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 w-[90%] max-w-md bg-slate-950/90 border border-slate-800/80 rounded-2xl p-3 shrink-0 backdrop-blur-xl z-20">
          <div className="flex items-center gap-2">
            <div className="flex-1 relative">
              <Type className="w-3.5 h-3.5 absolute left-3 top-1/2 -translate-y-1/2 text-slate-500" />
              <input
                type="text"
                placeholder="Edit Text..."
                value={selectedElement.text}
                onChange={(e) => updateElement({ ...selectedElement, text: e.target.value })}
                className="w-full pl-9 pr-3 py-1.5 bg-slate-900 border border-slate-800 rounded-xl text-xs text-white placeholder:text-slate-600 focus:outline-none focus:border-cyan-500 font-medium"
              />
            </div>
          </div>
        </div>
      )}

      {/* CODE INSPECTOR DRAWER / MODAL */}
      {showCodeDrawer && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md">
          <div className="bg-slate-900 border border-slate-800 rounded-2xl w-full max-w-lg p-5 space-y-4 shadow-2xl">
            <div className="flex items-center justify-between border-b border-slate-800 pb-3">
              <h3 className="text-sm font-bold text-white flex items-center gap-2">
                <Code2 className="w-4 h-4 text-cyan-400" />
                Live Canvas State Tree (AST)
              </h3>
              <button onClick={() => setShowCodeDrawer(false)} className="text-slate-400 hover:text-white text-sm font-bold">✕</button>
            </div>

            <div className="space-y-2">
              <p className="text-xs text-slate-400">Total Elements: {elements.length}</p>
              <pre className="text-[11px] font-mono text-cyan-300 bg-slate-950 border border-slate-800 rounded-xl p-3 overflow-x-auto whitespace-pre-wrap max-h-60">
                {JSON.stringify(elements, null, 2)}
              </pre>
            </div>

            <div className="flex justify-end pt-2">
              <button
                onClick={() => setShowCodeDrawer(false)}
                className="px-4 py-2 rounded-xl bg-slate-800 text-slate-300 text-xs font-bold hover:bg-slate-700 transition"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}

    </div>
  );
}
