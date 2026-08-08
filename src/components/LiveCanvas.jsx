import React, { useState } from 'react';
import { RefreshCw, Zap, Palette, Type, Sliders, Code2, Sparkles, Check, ChevronRight } from 'lucide-react';
import { COMPONENTS } from '../data/componentLibrary';

// Quick Preset Color Palettes for 1-click swapping
const PALETTES = [
  { name: 'Cyan-Purple', c1: '#06b6d4', c2: '#9333ea', glow: '#00f2fe' },
  { name: 'Neon Pink',   c1: '#ec4899', c2: '#f43f5e', glow: '#ff2a85' },
  { name: 'Emerald',     c1: '#10b981', c2: '#047857', glow: '#34d399' },
  { name: 'Gold VIP',    c1: '#eab308', c2: '#ca8a04', glow: '#fef08a' },
  { name: 'Cyberpunk',   c1: '#facc15', c2: '#ec4899', glow: '#00f2fe' },
  { name: 'Dark Velvet', c1: '#1e293b', c2: '#0f172a', glow: '#38bdf8' },
];

// Quick Swap Hover Effects
const ANIMATIONS = [
  { id: 'shimmer',  label: '✨ Shimmer Light Sweep' },
  { id: 'scale',    label: '⬆ Scale Up 1.05' },
  { id: 'lift',     label: '🔼 Shadow Lift' },
  { id: 'glow',     label: '🌟 Glow Intensify' },
  { id: 'ripple',   label: '💧 Liquid Ripple' },
  { id: 'magnetic', label: '🧲 Magnetic Attraction' },
];

export default function LiveCanvas({ componentId, style, onChangeStyle, animKey }) {
  const [customText, setCustomText]   = useState('');
  const [activeEffectTag, setActiveEffectTag] = useState(null);
  const [showCodeDrawer, setShowCodeDrawer]  = useState(false);
  const [copied, setCopied] = useState(false);

  const comp = COMPONENTS.find(c => c.id === componentId);

  const setStyleVal = (key, val) => {
    if (onChangeStyle) {
      onChangeStyle({ ...style, [key]: val });
    }
  };

  const setPalette = (p) => {
    if (onChangeStyle) {
      onChangeStyle({
        ...style,
        bgColor1: p.c1,
        bgColor2: p.c2,
        glowColor: p.glow
      });
    }
  };

  if (!comp) {
    return (
      <div className="h-full flex flex-col items-center justify-center text-center p-8 select-none">
        <div className="text-5xl mb-4 animate-bounce">🎨</div>
        <h3 className="text-lg font-black text-white font-heading mb-2">Frontend Canvas Stage</h3>
        <p className="text-xs text-slate-400 max-w-sm leading-relaxed">
          बाईं ओर से कोई भी component चुनिए।<br />
          यहाँ स्टेज पर लाइव दिखेगा — hover, click, text, animation सब आसानी से बदलिए!
        </p>
      </div>
    );
  }

  const r = style.borderRadius === 9999 ? '9999px' : `${style.borderRadius}px`;
  const displayText = customText.trim() || 'Click Me →';

  // Dynamic bg for container cards
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

  // Hover effect class mapping
  const hoverCls = style.hoverEffect === 'scale'  ? 'hover:scale-105'
                 : style.hoverEffect === 'lift'   ? 'hover:-translate-y-1.5 hover:shadow-2xl'
                 : style.hoverEffect === 'shimmer' ? 'shiny-btn'
                 : style.hoverEffect === 'glow'   ? 'hover:shadow-[0_0_35px_currentColor]'
                 : style.hoverEffect === 'ripple' ? 'active:scale-95'
                 : style.hoverEffect === 'magnetic'? 'hover:scale-110'
                 : '';

  // Render component logic
  const renderComponent = () => {
    const id = comp.demoType;

    // Default button rendering for all 52 button types with dynamic style application
    if (comp.category === 'buttons') {
      if (id === 'btn-conic-laser' || style.borderStyle === 'laserSpin') {
        return (
          <div className="animated-border-box" style={{ borderRadius: r }}>
            <button
              style={{
                borderRadius: `calc(${r} - 2px)`,
                background: '#080c14',
                color: style.textColor,
              }}
              className={`px-8 py-3.5 font-black text-sm cursor-pointer select-none transition-all duration-200 ${hoverCls}`}
            >
              {displayText}
            </button>
          </div>
        );
      }

      if (id === 'btn-neumorphic') {
        return (
          <button
            style={{
              borderRadius: r,
              background: '#1a1d24',
              color: style.bgColor1,
              boxShadow: '8px 8px 20px #111318, -8px -8px 20px #232730'
            }}
            className="px-8 py-3.5 font-black text-sm cursor-pointer select-none active:shadow-[inset_4px_4px_8px_#111318,inset_-4px_-4px_8px_#232730] transition-all"
          >
            {displayText}
          </button>
        );
      }

      if (id === 'btn-cyberpunk') {
        return (
          <button
            style={{
              borderRadius: 0,
              background: style.bgColor1,
              color: '#000',
              border: `2px solid ${style.bgColor2 || '#fde047'}`,
              boxShadow: `4px 4px 0px ${style.borderColor || '#ff2a85'}`
            }}
            className="px-8 py-3.5 font-black text-xs uppercase tracking-widest cursor-pointer select-none active:translate-x-1 active:translate-y-1 transition-all"
          >
            {displayText}
          </button>
        );
      }

      if (id === 'btn-glow-pulse') {
        return (
          <div className="relative">
            <div style={{ backgroundColor: style.glowColor }} className="absolute -inset-3 rounded-full opacity-40 blur-md animate-ping" />
            <button
              style={{
                borderRadius: r,
                background: bg,
                color: style.textColor,
                border: borderVal,
                boxShadow: glowShadow,
                position: 'relative',
                zIndex: 1
              }}
              className={`px-8 py-3.5 font-bold text-sm cursor-pointer select-none ${hoverCls}`}
            >
              {displayText}
            </button>
          </div>
        );
      }

      if (id === 'btn-3d-push' || id === 'btn-3d-arcade') {
        return (
          <button
            style={{
              borderRadius: r,
              background: bg,
              color: style.textColor,
              borderBottom: `6px solid ${style.borderColor || style.bgColor2}`,
              boxShadow: glowShadow
            }}
            className="px-8 py-3.5 font-black text-sm cursor-pointer select-none active:translate-y-1 active:border-b-[2px] transition-all duration-100"
          >
            {displayText}
          </button>
        );
      }

      if (id === 'btn-social-google') {
        return (
          <button style={{ borderRadius: r }} className="px-7 py-3 bg-white text-gray-800 font-bold text-sm flex items-center gap-3 border border-gray-300 hover:bg-gray-50 transition shadow-lg cursor-pointer">
            <svg className="w-5 h-5" viewBox="0 0 24 24"><path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/><path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/><path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/><path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/></svg>
            Continue with Google
          </button>
        );
      }

      if (id === 'btn-social-github') {
        return (
          <button style={{ borderRadius: r }} className="px-7 py-3 bg-[#24292f] text-white font-bold text-sm flex items-center gap-3 hover:bg-[#32383f] transition shadow-lg cursor-pointer">
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/></svg>
            Continue with GitHub
          </button>
        );
      }

      // Default Standard Button for all other 45+ button variants with full style bindings
      return (
        <button
          style={{
            borderRadius: r,
            background: bg,
            color: style.textColor,
            border: borderVal,
            boxShadow: glowShadow,
            backdropFilter: style.bgType === 'glass' ? 'blur(16px)' : undefined,
          }}
          className={`px-8 py-3.5 font-bold text-sm cursor-pointer select-none transition-all duration-200 ${hoverCls}`}
        >
          {displayText}
        </button>
      );
    }

    // ── NON-BUTTON COMPONENTS (CARDS, INPUTS, NAV, ETC.) ──────────────────────
    if (comp.category === 'cards') {
      return (
        <div style={{ borderRadius: r, background: bg, border: borderVal, boxShadow: glowShadow }} className="p-6 text-center w-72">
          <div className="w-16 h-16 rounded-2xl mx-auto mb-3 flex items-center justify-center text-white text-2xl" style={{ background: `linear-gradient(135deg,${style.bgColor1},${style.bgColor2})` }}>
            🃏
          </div>
          <p style={{ color: style.textColor }} className="font-bold text-base">{comp.name}</p>
          <p className="text-slate-400 text-xs mt-1">Live interactive card preview</p>
          <button style={{ borderRadius: `${Math.max(style.borderRadius - 4, 4)}px`, background: `linear-gradient(135deg,${style.bgColor1},${style.bgColor2})`, color: '#fff' }} className="w-full mt-4 py-2 font-bold text-xs">
            {displayText}
          </button>
        </div>
      );
    }

    // Fallback for remaining components
    return (
      <div style={{ borderRadius: r, background: bg, border: borderVal, boxShadow: glowShadow }} className="p-6 text-center">
        <p style={{ color: style.textColor }} className="font-bold text-sm">{comp.name}</p>
      </div>
    );
  };

  const copyCodeSnippet = () => {
    const code = `<button style={{ borderRadius: '${r}', background: '${bg}', color: '${style.textColor}' }} className="${hoverCls}">\n  ${displayText}\n</button>`;
    navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="h-full w-full flex flex-col items-center justify-between p-4 overflow-y-auto select-none gap-3 relative">
      
      {/* Top Bar: Component Name & Re-trigger */}
      <div className="w-full flex items-center justify-between px-3 py-1.5 bg-slate-900/60 rounded-xl border border-slate-800 shrink-0">
        <span className="text-[11px] font-bold text-cyan-300 flex items-center gap-1.5 font-mono">
          <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse inline-block" />
          LIVE STAGE — {comp.name}
        </span>
        <button
          onClick={() => setShowCodeDrawer(!showCodeDrawer)}
          className="text-[10px] font-bold px-2.5 py-1 rounded-lg bg-slate-800 text-slate-300 hover:text-white border border-slate-700 transition flex items-center gap-1"
        >
          <Code2 className="w-3 h-3 text-cyan-400" />
          <span>Inspect Code &amp; Layers</span>
        </button>
      </div>

      {/* CENTER STAGE: Illuminated Component Display Card */}
      <div className="flex-1 w-full flex items-center justify-center my-auto min-h-[220px]">
        <div className="p-10 rounded-2xl bg-slate-950/60 border border-slate-800/80 backdrop-blur-xl shadow-2xl flex flex-col items-center justify-center min-w-[320px] transition-all duration-300 relative group">
          
          {/* Ambient Glow behind component */}
          <div
            style={{ backgroundColor: style.bgColor1 }}
            className="absolute inset-0 rounded-2xl opacity-15 blur-2xl pointer-events-none group-hover:opacity-25 transition-opacity"
          />

          {/* Render component */}
          <div key={animKey} className="relative z-10 transition-all duration-200">
            {renderComponent()}
          </div>
        </div>
      </div>

      {/* QUICK CONTROL BAR (Live Edit Ingredients & Swap Animations) */}
      <div className="w-full bg-slate-950/80 border border-slate-800/80 rounded-2xl p-3 shrink-0 space-y-2.5 backdrop-blur-xl">
        
        {/* Row 1: Live Text Input + Animation Swapper */}
        <div className="flex flex-wrap items-center gap-2">
          {/* Live Text Editing Input */}
          <div className="flex-1 min-w-[150px] relative">
            <Type className="w-3.5 h-3.5 absolute left-3 top-1/2 -translate-y-1/2 text-slate-500" />
            <input
              type="text"
              placeholder="Button Text बदलें…"
              value={customText}
              onChange={(e) => setCustomText(e.target.value)}
              className="w-full pl-9 pr-3 py-1.5 bg-slate-900 border border-slate-800 rounded-xl text-xs text-white placeholder:text-slate-600 focus:outline-none focus:border-cyan-500 font-medium"
            />
          </div>

          {/* Animation Swapper Dropdown */}
          <div className="flex items-center gap-1">
            <Zap className="w-3.5 h-3.5 text-purple-400" />
            <select
              value={style.hoverEffect}
              onChange={(e) => setStyleVal('hoverEffect', e.target.value)}
              className="bg-slate-900 border border-slate-800 rounded-xl px-2.5 py-1.5 text-xs text-cyan-300 font-bold outline-none cursor-pointer focus:border-purple-500"
            >
              <option value="none">Animation: None</option>
              {ANIMATIONS.map(a => (
                <option key={a.id} value={a.id}>{a.label}</option>
              ))}
            </select>
          </div>
        </div>

        {/* Row 2: 1-Click Color Preset Palette Swapper */}
        <div className="flex items-center justify-between gap-2 overflow-x-auto scrollbar-none pt-1 border-t border-slate-900">
          <span className="text-[10px] font-black text-slate-500 uppercase tracking-widest shrink-0 flex items-center gap-1">
            <Palette className="w-3 h-3 text-pink-400" /> Quick Palette:
          </span>
          <div className="flex gap-1.5 shrink-0">
            {PALETTES.map((p, i) => (
              <button
                key={i}
                onClick={() => setPalette(p)}
                title={p.name}
                className="px-2 py-1 rounded-lg border border-slate-800 text-[10px] font-bold text-slate-300 hover:text-white flex items-center gap-1.5 transition hover:scale-105 bg-slate-900"
              >
                <span className="w-2.5 h-2.5 rounded-full" style={{ background: `linear-gradient(135deg, ${p.c1}, ${p.c2})` }} />
                <span>{p.name}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Row 3: Effect Tags — Clickable "यह किससे मिलकर बना है" */}
        <div className="flex flex-wrap items-center justify-center gap-1.5 pt-1">
          <span className="text-[9px] font-bold text-slate-600 uppercase tracking-wider mr-1">Ingredients:</span>
          {comp.effects?.map((eff, i) => (
            <button
              key={i}
              onClick={() => setActiveEffectTag(activeEffectTag === eff ? null : eff)}
              className={`text-[10px] font-bold px-2 py-0.5 rounded-md border transition cursor-pointer ${
                activeEffectTag === eff
                  ? 'bg-cyan-500 text-black border-cyan-400 font-black'
                  : 'bg-slate-900 text-slate-400 border-slate-800 hover:border-slate-700 hover:text-white'
              }`}
            >
              {eff}
            </button>
          ))}
        </div>

        {/* Effect Tag Explainer Box when clicked */}
        {activeEffectTag && (
          <div className="p-2.5 bg-cyan-500/10 border border-cyan-500/30 rounded-xl text-xs text-cyan-200 animate-fadeIn flex items-center justify-between">
            <div>
              <span className="font-bold text-white">✨ {activeEffectTag}:</span>{' '}
              <span className="text-[11px] text-slate-300">यह इफ़ेक्ट CSS {activeEffectTag.includes('Gradient') ? 'linear-gradient' : activeEffectTag.includes('Border') ? 'border' : 'transform/animation'} प्रपोज़ल से बनाया गया है।</span>
            </div>
            <button onClick={() => setActiveEffectTag(null)} className="text-slate-400 hover:text-white text-xs px-2 font-bold">✕</button>
          </div>
        )}
      </div>

      {/* CODE INSPECTOR DRAWER / MODAL */}
      {showCodeDrawer && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md">
          <div className="bg-slate-900 border border-slate-800 rounded-2xl w-full max-w-lg p-5 space-y-4 shadow-2xl">
            <div className="flex items-center justify-between border-b border-slate-800 pb-3">
              <h3 className="text-sm font-bold text-white flex items-center gap-2">
                <Code2 className="w-4 h-4 text-cyan-400" />
                Live Component Code &amp; Layers Inspector
              </h3>
              <button onClick={() => setShowCodeDrawer(false)} className="text-slate-400 hover:text-white text-sm font-bold">✕</button>
            </div>

            <div className="space-y-2">
              <p className="text-xs text-slate-400">यह Component इन CSS / React प्रॉपर्टीज से मिलकर बना है:</p>
              <pre className="text-[11px] font-mono text-cyan-300 bg-slate-950 border border-slate-800 rounded-xl p-3 overflow-x-auto whitespace-pre-wrap">
{`<button
  style={{
    borderRadius: '${r}',
    background: '${bg}',
    color: '${style.textColor}',
    border: '${borderVal || 'none'}'
  }}
  className="${hoverCls}"
>
  ${displayText}
</button>`}
              </pre>
            </div>

            <div className="flex justify-between items-center pt-2">
              <button
                onClick={copyCodeSnippet}
                className="px-4 py-2 rounded-xl bg-cyan-500/20 text-cyan-300 border border-cyan-500/40 text-xs font-bold hover:bg-cyan-500/30 transition flex items-center gap-1.5"
              >
                {copied ? <Check className="w-3.5 h-3.5" /> : <Code2 className="w-3.5 h-3.5" />}
                {copied ? 'Copied Code!' : 'Copy React Component Code'}
              </button>
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
