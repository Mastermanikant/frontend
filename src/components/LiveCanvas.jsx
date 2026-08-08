import React, { useState, useRef } from 'react';
import { RefreshCw, Zap, Palette, Type, Code2, Sparkles, Check, MousePointer2, ShieldCheck, ArrowRight, Star, Trash2, Plus } from 'lucide-react';
import { COMPONENTS } from '../data/componentLibrary';
import ContextualToolbar from './ContextualToolbar';
import FontSelectorDrawer from './FontSelectorDrawer';
import { useCanvas } from '../context/CanvasContext';

export default function LiveCanvas({ animKey }) {
  const {
    elements,
    activeFullPageTemplate,
    setActiveFullPageTemplate,
    selectedElementId,
    setSelectedElementId,
    selectedElement,
    updateElement,
    deleteElement,
    addElement,
    stageMode
  } = useCanvas();

  const [isFontSelectorOpen, setIsFontSelectorOpen] = useState(false);
  const [showCodeDrawer, setShowCodeDrawer]  = useState(false);
  const canvasRef = useRef(null);

  // Dragging state for freeform elements
  const [isDragging, setIsDragging] = useState(false);
  const [dragOffset, setDragOffset] = useState({ x: 0, y: 0 });

  const isEditMode = stageMode === 'edit';

  const handlePointerDown = (e, element) => {
    if (!isEditMode) return;
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
    if (!isEditMode || !isDragging || !selectedElementId || !canvasRef.current) return;
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
      text: 'New Editable Text',
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
    if (isEditMode) {
      setSelectedElementId(null);
      setIsFontSelectorOpen(false);
    }
  };

  const handleDeleteFeatureCard = (index) => {
    if (!activeFullPageTemplate) return;
    const updatedFeatures = activeFullPageTemplate.features.filter((_, i) => i !== index);
    setActiveFullPageTemplate({ ...activeFullPageTemplate, features: updatedFeatures });
  };

  const handleDeletePricingCard = (index) => {
    if (!activeFullPageTemplate) return;
    const updatedPricing = activeFullPageTemplate.pricing.filter((_, i) => i !== index);
    setActiveFullPageTemplate({ ...activeFullPageTemplate, pricing: updatedPricing });
  };

  const renderFreeformElement = (el) => {
    const isSelected = el.id === selectedElementId && isEditMode;
    
    if (el.type === 'text') {
      return (
        <div
          key={el.id}
          onPointerDown={(e) => handlePointerDown(e, el)}
          className={`absolute select-none ${isEditMode ? 'cursor-move' : ''} ${isSelected ? 'ring-2 ring-cyan-500 rounded-md ring-offset-4 ring-offset-slate-900' : ''}`}
          style={{ 
            left: el.x, 
            top: el.y, 
            fontSize: el.style?.fontSize || '24px', 
            color: el.style?.color || '#ffffff', 
            fontFamily: el.style?.fontFamily || 'Inter',
            fontWeight: el.style?.fontWeight || 'bold',
            lineHeight: el.style?.lineHeight || '1.2'
          }}
        >
          {isEditMode ? (
            <input
              type="text"
              value={el.text}
              onChange={(e) => updateElement({ ...el, text: e.target.value })}
              className="bg-transparent outline-none border-none pointer-events-auto"
              style={{ width: `${Math.max(el.text.length, 1)}ch` }}
              onPointerDown={(e) => e.stopPropagation()}
              onFocus={() => setSelectedElementId(el.id)}
            />
          ) : (
            <span>{el.text}</span>
          )}
        </div>
      );
    }

    if (el.type === 'button') {
      const style = el.style || {};
      const r = style.borderRadius === 9999 ? '9999px' : `${style.borderRadius || 8}px`;
      let bg = '';
      if (style.bgType === 'gradient') bg = `linear-gradient(135deg, ${style.bgColor1 || '#06b6d4'}, ${style.bgColor2 || '#9333ea'})`;
      else if (style.bgType === 'solid') bg = style.bgColor1 || '#06b6d4';
      else bg = 'linear-gradient(135deg, #06b6d4, #9333ea)';

      return (
        <div
          key={el.id}
          onPointerDown={(e) => handlePointerDown(e, el)}
          className={`absolute inline-block ${isEditMode ? 'cursor-move' : ''} ${isSelected ? 'ring-2 ring-cyan-500 rounded-md ring-offset-4 ring-offset-slate-900' : ''}`}
          style={{ left: el.x, top: el.y, zIndex: isSelected ? 10 : 1 }}
        >
          <button
            style={{ borderRadius: r, background: bg, color: style.textColor || '#ffffff' }}
            className="px-8 py-3.5 font-bold text-sm select-none transition-all duration-200 hover:scale-105 cursor-pointer"
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
      className="h-full w-full flex flex-col relative select-none overflow-y-auto"
      onPointerMove={handlePointerMove}
      onPointerUp={handlePointerUp}
      onPointerLeave={handlePointerUp}
    >
      
      {/* Top Action Bar (ONLY SHOWN IN EDIT MODE) */}
      {isEditMode && (
        <div className="w-full flex items-center justify-between px-4 py-2 bg-slate-900/80 border-b border-slate-800 shrink-0 z-20 sticky top-0 left-0 backdrop-blur-xl">
          <button
            onClick={handleAddText}
            className="flex items-center gap-1.5 px-3 py-1.5 bg-cyan-500/20 text-cyan-300 border border-cyan-500/30 hover:bg-cyan-500/30 rounded-xl text-xs font-bold transition"
          >
            <Plus className="w-3.5 h-3.5" />
            <span>Add Custom Text Element</span>
          </button>
          
          <div className="text-[11px] font-bold text-slate-400 flex items-center gap-2 font-mono">
            <MousePointer2 className="w-3.5 h-3.5 text-cyan-400" />
            ✏️ EDIT MODE (Click Text/Button To Customise)
          </div>

          <button
            onClick={() => setShowCodeDrawer(!showCodeDrawer)}
            className="text-[10px] font-bold px-2.5 py-1 rounded-lg bg-slate-800 text-slate-300 hover:text-white border border-slate-700 transition flex items-center gap-1"
          >
            <Code2 className="w-3 h-3 text-cyan-400" />
            <span>Inspect State</span>
          </button>
        </div>
      )}

      {/* Floating Contextual Toolbar (ONLY IN EDIT MODE) */}
      {isEditMode && selectedElement && (
        <ContextualToolbar 
          element={selectedElement} 
          onUpdate={updateElement}
          onDelete={() => deleteElement(selectedElementId)}
          onOpenFontSelector={() => setIsFontSelectorOpen(true)}
        />
      )}

      {/* Font Selector Drawer (ONLY IN EDIT MODE) */}
      {isEditMode && (
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
      )}

      {/* RENDER FULL PAGE WEBSITE TEMPLATE IF ACTIVE */}
      {activeFullPageTemplate ? (
        <div className="flex-1 w-full bg-slate-950 text-white p-6 space-y-12 overflow-y-auto relative">
          
          {/* Render extra freeform elements on top of template */}
          <div className="absolute inset-0 pointer-events-none z-10">
            {elements.map(el => (
              <div key={el.id} className="pointer-events-auto">
                {renderFreeformElement(el)}
              </div>
            ))}
          </div>

          {/* SECTION 1: NAVBAR */}
          <nav className="w-full flex items-center justify-between px-6 py-4 bg-slate-900/60 border border-slate-800/80 rounded-2xl backdrop-blur-xl">
            {isEditMode ? (
              <input
                type="text"
                value={activeFullPageTemplate.navbar?.logo || ''}
                onChange={(e) => setActiveFullPageTemplate({
                  ...activeFullPageTemplate,
                  navbar: { ...activeFullPageTemplate.navbar, logo: e.target.value }
                })}
                className="bg-transparent border-none outline-none font-black text-base text-white font-heading"
                style={{ width: `${Math.max((activeFullPageTemplate.navbar?.logo || '').length, 1)}ch` }}
              />
            ) : (
              <span className="font-black text-base text-white font-heading">{activeFullPageTemplate.navbar?.logo}</span>
            )}

            <div className="flex items-center gap-6 text-xs text-slate-300 font-medium">
              {activeFullPageTemplate.navbar?.links.map((link, i) => (
                isEditMode ? (
                  <input
                    key={i}
                    type="text"
                    value={link}
                    onChange={(e) => {
                      const newLinks = [...activeFullPageTemplate.navbar.links];
                      newLinks[i] = e.target.value;
                      setActiveFullPageTemplate({
                        ...activeFullPageTemplate,
                        navbar: { ...activeFullPageTemplate.navbar, links: newLinks }
                      });
                    }}
                    className="bg-transparent border-none outline-none text-slate-300 hover:text-cyan-400 transition cursor-pointer"
                    style={{ width: `${Math.max(link.length, 1)}ch` }}
                  />
                ) : (
                  <a key={i} href={`#${link.toLowerCase()}`} className="hover:text-cyan-400 transition cursor-pointer">{link}</a>
                )
              ))}
            </div>

            {isEditMode ? (
              <input
                type="text"
                value={activeFullPageTemplate.navbar?.cta || ''}
                onChange={(e) => setActiveFullPageTemplate({
                  ...activeFullPageTemplate,
                  navbar: { ...activeFullPageTemplate.navbar, cta: e.target.value }
                })}
                className="px-5 py-2 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-xl text-xs font-bold text-white shadow-lg shadow-cyan-500/20 text-center outline-none"
                style={{ width: `${Math.max((activeFullPageTemplate.navbar?.cta || '').length + 2, 8)}ch` }}
              />
            ) : (
              <button className="px-5 py-2 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-xl text-xs font-bold text-white shadow-lg shadow-cyan-500/20 hover:scale-105 transition cursor-pointer">
                {activeFullPageTemplate.navbar?.cta}
              </button>
            )}
          </nav>

          {/* SECTION 2: HERO BANNER */}
          <section className="text-center py-12 px-4 space-y-6 max-w-4xl mx-auto">
            {isEditMode ? (
              <input
                type="text"
                value={activeFullPageTemplate.hero?.badge || ''}
                onChange={(e) => setActiveFullPageTemplate({
                  ...activeFullPageTemplate,
                  hero: { ...activeFullPageTemplate.hero, badge: e.target.value }
                })}
                className="px-3 py-1 rounded-full bg-cyan-500/10 text-cyan-300 border border-cyan-500/30 text-xs font-bold font-mono text-center outline-none"
                style={{ width: `${Math.max((activeFullPageTemplate.hero?.badge || '').length + 2, 10)}ch` }}
              />
            ) : (
              <span className="px-3 py-1 rounded-full bg-cyan-500/10 text-cyan-300 border border-cyan-500/30 text-xs font-bold font-mono inline-block">
                {activeFullPageTemplate.hero?.badge}
              </span>
            )}

            {isEditMode ? (
              <textarea
                value={activeFullPageTemplate.hero?.headline || ''}
                onChange={(e) => setActiveFullPageTemplate({
                  ...activeFullPageTemplate,
                  hero: { ...activeFullPageTemplate.hero, headline: e.target.value }
                })}
                className="w-full bg-transparent border-none outline-none text-4xl md:text-5xl font-black text-white leading-tight font-heading text-center resize-none gradient-text"
                rows={2}
              />
            ) : (
              <h1 className="text-4xl md:text-5xl font-black text-white leading-tight font-heading gradient-text">
                {activeFullPageTemplate.hero?.headline}
              </h1>
            )}

            {isEditMode ? (
              <textarea
                value={activeFullPageTemplate.hero?.subheadline || ''}
                onChange={(e) => setActiveFullPageTemplate({
                  ...activeFullPageTemplate,
                  hero: { ...activeFullPageTemplate.hero, subheadline: e.target.value }
                })}
                className="w-full bg-transparent border-none outline-none text-sm md:text-base text-slate-400 text-center resize-none max-w-2xl mx-auto"
                rows={2}
              />
            ) : (
              <p className="text-sm md:text-base text-slate-400 max-w-2xl mx-auto leading-relaxed">
                {activeFullPageTemplate.hero?.subheadline}
              </p>
            )}

            <div className="flex flex-wrap items-center justify-center gap-3 pt-4">
              {isEditMode ? (
                <>
                  <input
                    type="text"
                    value={activeFullPageTemplate.hero?.primaryBtn || ''}
                    onChange={(e) => setActiveFullPageTemplate({
                      ...activeFullPageTemplate,
                      hero: { ...activeFullPageTemplate.hero, primaryBtn: e.target.value }
                    })}
                    className="px-8 py-3.5 rounded-2xl bg-gradient-to-r from-cyan-500 to-purple-600 text-white font-bold text-sm shadow-xl text-center outline-none"
                    style={{ width: `${Math.max((activeFullPageTemplate.hero?.primaryBtn || '').length + 4, 12)}ch` }}
                  />
                  <input
                    type="text"
                    value={activeFullPageTemplate.hero?.secondaryBtn || ''}
                    onChange={(e) => setActiveFullPageTemplate({
                      ...activeFullPageTemplate,
                      hero: { ...activeFullPageTemplate.hero, secondaryBtn: e.target.value }
                    })}
                    className="px-7 py-3.5 rounded-2xl bg-slate-900 border border-slate-800 text-slate-300 text-sm font-bold text-center outline-none"
                    style={{ width: `${Math.max((activeFullPageTemplate.hero?.secondaryBtn || '').length + 4, 12)}ch` }}
                  />
                </>
              ) : (
                <>
                  <button className="px-8 py-3.5 rounded-2xl bg-gradient-to-r from-cyan-500 to-purple-600 text-white font-bold text-sm shadow-xl shadow-cyan-500/25 hover:scale-105 transition flex items-center gap-2 cursor-pointer">
                    <span>{activeFullPageTemplate.hero?.primaryBtn}</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                  <button className="px-7 py-3.5 rounded-2xl bg-slate-900 border border-slate-800 text-slate-300 hover:text-white hover:border-slate-700 text-sm font-bold transition cursor-pointer">
                    {activeFullPageTemplate.hero?.secondaryBtn}
                  </button>
                </>
              )}
            </div>
          </section>

          {/* SECTION 3: FEATURES BENTO GRID */}
          <section className="space-y-6">
            <div className="text-center">
              <h2 className="text-xs font-mono font-bold text-cyan-400 uppercase tracking-widest">Everything Included</h2>
              <h3 className="text-2xl font-bold text-white mt-1">Built For High Performance</h3>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-5xl mx-auto">
              {activeFullPageTemplate.features?.map((feat, i) => (
                <div key={i} className="p-6 bg-slate-900/60 border border-slate-800/80 rounded-2xl space-y-3 relative group">
                  
                  {isEditMode && (
                    <button
                      onClick={() => handleDeleteFeatureCard(i)}
                      className="absolute top-3 right-3 p-1 text-slate-500 hover:text-red-400 opacity-0 group-hover:opacity-100 transition"
                      title="Remove Card"
                    >
                      <Trash2 className="w-3.5 h-3.5" />
                    </button>
                  )}

                  <div className="text-3xl">{feat.icon}</div>

                  {isEditMode ? (
                    <>
                      <input
                        type="text"
                        value={feat.title}
                        onChange={(e) => {
                          const newFeats = [...activeFullPageTemplate.features];
                          newFeats[i].title = e.target.value;
                          setActiveFullPageTemplate({ ...activeFullPageTemplate, features: newFeats });
                        }}
                        className="text-base font-bold text-white bg-transparent outline-none border-none w-full"
                      />
                      <textarea
                        value={feat.desc}
                        onChange={(e) => {
                          const newFeats = [...activeFullPageTemplate.features];
                          newFeats[i].desc = e.target.value;
                          setActiveFullPageTemplate({ ...activeFullPageTemplate, features: newFeats });
                        }}
                        className="text-xs text-slate-400 leading-relaxed bg-transparent outline-none border-none w-full resize-none"
                        rows={2}
                      />
                    </>
                  ) : (
                    <>
                      <h4 className="text-base font-bold text-white">{feat.title}</h4>
                      <p className="text-xs text-slate-400 leading-relaxed">{feat.desc}</p>
                    </>
                  )}
                </div>
              ))}
            </div>
          </section>

          {/* SECTION 4: PRICING TIERS */}
          {activeFullPageTemplate.pricing && (
            <section className="space-y-6 pt-6 border-t border-slate-900">
              <div className="text-center">
                <h2 className="text-xs font-mono font-bold text-purple-400 uppercase tracking-widest">Transparent Pricing</h2>
                <h3 className="text-2xl font-bold text-white mt-1">Simple Plans For Every Scale</h3>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
                {activeFullPageTemplate.pricing.map((plan, i) => (
                  <div 
                    key={i} 
                    className={`p-6 rounded-3xl border flex flex-col justify-between space-y-4 relative group ${
                      plan.highlight 
                        ? 'bg-gradient-to-b from-cyan-950/40 to-slate-900 border-cyan-500/50 shadow-2xl ring-1 ring-cyan-500/30' 
                        : 'bg-slate-900/60 border-slate-800'
                    }`}
                  >
                    {isEditMode && (
                      <button
                        onClick={() => handleDeletePricingCard(i)}
                        className="absolute top-4 right-4 p-1 text-slate-500 hover:text-red-400 opacity-0 group-hover:opacity-100 transition"
                        title="Remove Pricing Card"
                      >
                        <Trash2 className="w-3.5 h-3.5" />
                      </button>
                    )}

                    <div>
                      {plan.highlight && (
                        <span className="text-[10px] font-bold uppercase tracking-wider px-2.5 py-0.5 rounded-full bg-cyan-500/20 text-cyan-300 border border-cyan-500/30 inline-block mb-2">
                          Most Popular
                        </span>
                      )}
                      
                      {isEditMode ? (
                        <>
                          <input
                            type="text"
                            value={plan.plan}
                            onChange={(e) => {
                              const newPricing = [...activeFullPageTemplate.pricing];
                              newPricing[i].plan = e.target.value;
                              setActiveFullPageTemplate({ ...activeFullPageTemplate, pricing: newPricing });
                            }}
                            className="text-lg font-bold text-white bg-transparent outline-none border-none w-full"
                          />
                          <input
                            type="text"
                            value={plan.desc}
                            onChange={(e) => {
                              const newPricing = [...activeFullPageTemplate.pricing];
                              newPricing[i].desc = e.target.value;
                              setActiveFullPageTemplate({ ...activeFullPageTemplate, pricing: newPricing });
                            }}
                            className="text-xs text-slate-400 mt-1 bg-transparent outline-none border-none w-full"
                          />
                          <input
                            type="text"
                            value={plan.price}
                            onChange={(e) => {
                              const newPricing = [...activeFullPageTemplate.pricing];
                              newPricing[i].price = e.target.value;
                              setActiveFullPageTemplate({ ...activeFullPageTemplate, pricing: newPricing });
                            }}
                            className="text-3xl font-black text-white mt-4 bg-transparent outline-none border-none w-full"
                          />
                        </>
                      ) : (
                        <>
                          <h4 className="text-lg font-bold text-white">{plan.plan}</h4>
                          <p className="text-xs text-slate-400 mt-1">{plan.desc}</p>
                          <div className="text-3xl font-black text-white mt-4">{plan.price}</div>
                        </>
                      )}
                    </div>

                    <button className={`w-full py-3 rounded-2xl font-bold text-xs transition cursor-pointer ${
                      plan.highlight 
                        ? 'bg-gradient-to-r from-cyan-500 to-purple-600 text-white shadow-lg shadow-cyan-500/20 hover:opacity-90' 
                        : 'bg-slate-800 hover:bg-slate-700 text-white'
                    }`}>
                      {plan.cta}
                    </button>
                  </div>
                ))}
              </div>
            </section>
          )}

          {/* SECTION 5: FOOTER */}
          <footer className="pt-8 border-t border-slate-900 flex flex-col md:flex-row items-center justify-between text-xs text-slate-500 gap-4">
            <p>{activeFullPageTemplate.footer?.copyright}</p>
            <div className="flex items-center gap-4">
              {activeFullPageTemplate.footer?.links.map((link, i) => (
                <span key={i} className="hover:text-slate-300 transition cursor-pointer">{link}</span>
              ))}
            </div>
          </footer>

        </div>
      ) : (
        /* FREEFORM CANVAS AREA FOR SINGLE COMPONENTS */
        <div 
          ref={canvasRef}
          className="flex-1 w-full relative overflow-hidden mt-12 bg-transparent min-h-[400px]"
          onClick={handleCanvasClick}
        >
          <div key={animKey} className="absolute inset-0">
            {elements.map(renderFreeformElement)}
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
              <pre className="text-[11px] font-mono text-cyan-300 bg-slate-950 border border-slate-800 rounded-xl p-3 overflow-x-auto whitespace-pre-wrap max-h-60">
                {JSON.stringify(activeFullPageTemplate || elements, null, 2)}
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
