import React, { useMemo } from 'react';
import { COMPONENTS } from '../data/componentLibrary';

// ── Build inline style from style config ──────────────────────────────────────
function buildButtonStyle(style) {
  const r = style.borderRadius === 9999 ? '9999px' : `${style.borderRadius}px`;
  let bg = '';
  if (style.bgType === 'gradient') bg = `linear-gradient(135deg, ${style.bgColor1}, ${style.bgColor2})`;
  else if (style.bgType === 'solid') bg = style.bgColor1;
  else if (style.bgType === 'glass') bg = 'rgba(255,255,255,0.08)';
  else bg = 'transparent';

  let shadow = '';
  const g = style.glowColor;
  const gi = style.glowIntensity / 100;
  if (style.shadowType === 'soft')     shadow = `0 4px 20px rgba(0,0,0,0.4)`;
  if (style.shadowType === 'dramatic') shadow = `0 8px 40px rgba(0,0,0,0.7)`;
  if (style.shadowType === 'neonGlow') shadow = `0 0 20px ${g}${Math.round(gi*255).toString(16).padStart(2,'0')}, 0 0 40px ${g}44`;

  let border = '';
  if (style.borderStyle === 'solid')   border = `${style.borderWidth}px solid ${style.borderColor}`;
  if (style.borderStyle === 'dashed')  border = `${style.borderWidth}px dashed ${style.borderColor}`;
  if (style.borderStyle === 'gradient') border = `${style.borderWidth}px solid transparent`;

  const backdrop = style.bgType === 'glass' ? 'blur(16px)' : '';

  return {
    borderRadius: r,
    background: bg,
    color: style.textColor,
    boxShadow: shadow || undefined,
    border: border || undefined,
    backdropFilter: backdrop || undefined,
    WebkitBackdropFilter: backdrop || undefined,
  };
}

// ── Individual Demo Renderers ─────────────────────────────────────────────────
function ButtonDemo({ style, label = 'Click Me' }) {
  const s = buildButtonStyle(style);
  const hoverCls = style.hoverEffect === 'scale'  ? 'hover:scale-105'
                 : style.hoverEffect === 'lift'   ? 'hover:-translate-y-1 hover:shadow-2xl'
                 : style.hoverEffect === 'shimmer' ? 'shiny-btn'
                 : '';
  return (
    <button style={s} className={`px-7 py-3 font-bold text-sm transition-all duration-200 cursor-pointer select-none ${hoverCls}`}>
      {label}
    </button>
  );
}

export default function LiveCanvas({ componentId, style, animKey }) {
  const comp = COMPONENTS.find(c => c.id === componentId);

  const r = style.borderRadius === 9999 ? '9999px' : `${style.borderRadius}px`;

  // get bg for card-like things
  let bg = '';
  if (style.bgType === 'gradient') bg = `linear-gradient(135deg, ${style.bgColor1}, ${style.bgColor2})`;
  else if (style.bgType === 'solid') bg = style.bgColor1;
  else if (style.bgType === 'glass') bg = 'rgba(255,255,255,0.08)';
  else bg = 'rgba(255,255,255,0.04)';

  const glowShadow = style.shadowType === 'neonGlow'
    ? `0 0 30px ${style.glowColor}66, 0 0 60px ${style.glowColor}33`
    : style.shadowType === 'soft' ? '0 4px 24px rgba(0,0,0,0.5)'
    : style.shadowType === 'dramatic' ? '0 12px 48px rgba(0,0,0,0.8)'
    : undefined;

  const borderVal = style.borderStyle === 'solid'  ? `${style.borderWidth}px solid ${style.borderColor}`
                  : style.borderStyle === 'dashed' ? `${style.borderWidth}px dashed ${style.borderColor}`
                  : style.borderStyle === 'gradient' ? `${style.borderWidth}px solid transparent`
                  : undefined;

  if (!comp) {
    return (
      <div className="h-full flex flex-col items-center justify-center text-center px-12 select-none">
        <div className="text-5xl mb-4">🎨</div>
        <h3 className="text-xl font-black text-white font-heading mb-2">Frontend Canvas</h3>
        <p className="text-sm text-slate-500 leading-relaxed">
          लेफ्ट पैनल से कोई भी component चुनें।<br />
          वो यहाँ live दिखेगा — hover, click, animation सब!
        </p>
      </div>
    );
  }

  const renderComponent = () => {
    const id = comp.demoType;

    // ── BUTTONS ──────────────────────────────────────────────────────────────
    if (id === 'btn-primary') return (
      <ButtonDemo style={style} label="Get Started →" />
    );
    if (id === 'btn-secondary') return (
      <button style={{ borderRadius: r, border: `2px solid ${style.bgColor1}`, color: style.bgColor1, background:'transparent', boxShadow: glowShadow }}
        className="px-7 py-3 font-bold text-sm hover:opacity-80 transition-all duration-200">
        Learn More
      </button>
    );
    if (id === 'btn-ghost') return (
      <button style={{ borderRadius: r, color: style.textColor, background:'transparent', border:'none' }}
        className="px-7 py-3 font-bold text-sm hover:bg-white/10 transition-all duration-200">
        Cancel
      </button>
    );
    if (id === 'btn-glass') return (
      <button style={{ borderRadius: r, background:'rgba(255,255,255,0.08)', backdropFilter:'blur(16px)', WebkitBackdropFilter:'blur(16px)', border:`1px solid rgba(255,255,255,0.2)`, color: style.textColor, boxShadow: glowShadow }}
        className="px-7 py-3 font-bold text-sm hover:bg-white/15 transition-all duration-200">
        Frosted Glass
      </button>
    );
    if (id === 'btn-gradient') return (
      <button style={{ borderRadius: r, background: `linear-gradient(135deg,${style.bgColor1},${style.bgColor2})`, color: style.textColor, boxShadow: glowShadow, border: borderVal }}
        className="px-7 py-3 font-bold text-sm shiny-btn transition-all duration-200">
        Gradient Button ✨
      </button>
    );
    if (id === 'btn-conic-laser') return (
      <div className="animated-border-box" style={{ borderRadius: r }}>
        <button style={{ borderRadius: `calc(${r} - 2px)`, background:'#080c14', color: style.textColor }}
          className="px-7 py-3 font-bold text-sm">
          Laser Border ⚡
        </button>
      </div>
    );
    if (id === 'btn-neumorphic') return (
      <button style={{ borderRadius: r, background:'#1a1d24', color: style.bgColor1, boxShadow:`6px 6px 16px #111318, -6px -6px 16px #232730` }}
        className="px-7 py-3 font-bold text-sm transition-all active:shadow-[inset_4px_4px_8px_#111318,inset_-4px_-4px_8px_#232730]">
        Neumorphic 3D
      </button>
    );
    if (id === 'btn-cyberpunk') return (
      <button style={{ borderRadius: 0, background: style.bgColor1, color:'#000', border:`2px solid ${style.bgColor2 || '#fde047'}`, boxShadow:`4px 4px 0px ${style.borderColor || '#ff2a85'}` }}
        className="px-7 py-3 font-black text-xs uppercase tracking-widest">
        CYBERPUNK
      </button>
    );
    if (id === 'btn-magnetic') return (
      <button style={{ borderRadius: r, background:`linear-gradient(135deg,${style.bgColor1},${style.bgColor2})`, color: style.textColor, boxShadow: glowShadow }}
        className="px-7 py-3 font-bold text-sm hover:scale-110 transition-all duration-200">
        🧲 Magnetic
      </button>
    );
    if (id === 'btn-shiny') return (
      <button style={{ borderRadius: r, background:`linear-gradient(135deg,${style.bgColor1},${style.bgColor2})`, color: style.textColor, boxShadow: glowShadow }}
        className="px-7 py-3 font-bold text-sm shiny-btn">
        Shiny Hover ✨
      </button>
    );
    if (id === 'btn-glow-pulse') return (
      <div className="relative">
        <div style={{ backgroundColor: style.glowColor }} className="absolute -inset-2 rounded-full opacity-40 blur-md animate-ping" />
        <button style={{ borderRadius: r, background:`linear-gradient(135deg,${style.bgColor1},${style.bgColor2})`, color: style.textColor, position:'relative', zIndex:1 }}
          className="px-7 py-3 font-bold text-sm">
          💓 Heartbeat
        </button>
      </div>
    );
    if (id === 'btn-pill') return (
      <button style={{ borderRadius:'9999px', background:`linear-gradient(135deg,${style.bgColor1},${style.bgColor2})`, color: style.textColor, boxShadow: glowShadow }}
        className="px-8 py-2.5 font-bold text-sm shiny-btn">
        Pill Badge ✦
      </button>
    );
    if (id === 'btn-toggle-tab') return (
      <div className="flex bg-slate-900 p-1 rounded-xl border border-slate-800">
        <button style={{ borderRadius:`${Math.max(style.borderRadius-4,4)}px`, background:`linear-gradient(135deg,${style.bgColor1},${style.bgColor2})`, color: style.textColor }}
          className="px-5 py-2 font-bold text-xs">Option A</button>
        <button className="px-5 py-2 text-slate-400 text-xs font-medium">Option B</button>
        <button className="px-5 py-2 text-slate-400 text-xs font-medium">Option C</button>
      </div>
    );
    if (id === 'btn-ripple') return (
      <button style={{ borderRadius: r, background:`linear-gradient(135deg,${style.bgColor1},${style.bgColor2})`, color: style.textColor, boxShadow: glowShadow }}
        className="px-7 py-3 font-bold text-sm active:scale-95 transition-all duration-150">
        💧 Click for Ripple
      </button>
    );
    if (id === 'btn-fab') return (
      <button style={{ borderRadius:'9999px', background:`linear-gradient(135deg,${style.bgColor1},${style.bgColor2})`, color: style.textColor, boxShadow:`0 8px 32px ${style.bgColor1}66` }}
        className="w-16 h-16 font-black text-2xl hover:scale-110 transition-all duration-200 hover:shadow-2xl">
        +
      </button>
    );
    if (id === 'btn-loading') return (
      <button style={{ borderRadius: r, background:`linear-gradient(135deg,${style.bgColor1},${style.bgColor2})`, color: style.textColor, opacity:0.7 }}
        className="px-7 py-3 font-bold text-sm flex items-center gap-3 cursor-not-allowed">
        <svg className="animate-spin w-4 h-4" fill="none" viewBox="0 0 24 24">
          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"/>
          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"/>
        </svg>
        Loading…
      </button>
    );
    if (id === 'btn-social-google') return (
      <button style={{ borderRadius: r }} className="px-6 py-3 bg-white text-gray-700 font-bold text-sm flex items-center gap-3 border border-gray-300 hover:bg-gray-50 transition shadow">
        <svg className="w-5 h-5" viewBox="0 0 24 24"><path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/><path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/><path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/><path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/></svg>
        Continue with Google
      </button>
    );
    if (id === 'btn-social-github') return (
      <button style={{ borderRadius: r }} className="px-6 py-3 bg-[#24292f] text-white font-bold text-sm flex items-center gap-3 hover:bg-[#32383f] transition">
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/></svg>
        Continue with GitHub
      </button>
    );
    if (id === 'btn-danger') return (
      <button style={{ borderRadius: r, background:'linear-gradient(135deg,#dc2626,#991b1b)', color:'#fff', boxShadow: glowShadow }}
        className="px-7 py-3 font-bold text-sm flex items-center gap-2 hover:opacity-90 hover:scale-105 transition-all duration-200">
        🗑️ Delete Item
      </button>
    );
    if (id === 'btn-success') return (
      <button style={{ borderRadius: r, background:'linear-gradient(135deg,#059669,#047857)', color:'#fff', boxShadow: glowShadow }}
        className="px-7 py-3 font-bold text-sm flex items-center gap-2 hover:scale-105 transition-all duration-200">
        ✅ Confirm
      </button>
    );
    if (id === 'btn-3d-push') return (
      <button style={{ borderRadius: r, background:`linear-gradient(135deg,${style.bgColor1},${style.bgColor2})`, color: style.textColor, borderBottom:`5px solid ${style.borderColor || style.bgColor2}` }}
        className="px-7 py-3 font-bold text-sm active:translate-y-1 active:border-b-[2px] transition-all duration-100">
        3D Push ↓
      </button>
    );
    if (id === 'btn-icon-only') return (
      <div className="relative">
        <div style={{ backgroundColor: style.glowColor }} className="absolute -inset-1 rounded-full blur-md opacity-40 hover:opacity-60 transition" />
        <button style={{ borderRadius:'9999px', background:`linear-gradient(135deg,${style.bgColor1},${style.bgColor2})`, color: style.textColor, width:56, height:56, position:'relative' }}
          className="font-bold text-xl flex items-center justify-center hover:scale-110 transition-all duration-200">
          ⚡
        </button>
      </div>
    );
    if (id === 'btn-apple') return (
      <button style={{ borderRadius: r, background:'#000', color:'#fff', border:'1px solid #333' }}
        className="px-7 py-3 font-semibold text-sm hover:bg-gray-900 transition-all duration-200">
        Continue
      </button>
    );
    if (id === 'btn-stripe') return (
      <button style={{ borderRadius: r, background:'#5850EC', color:'#fff' }}
        className="px-7 py-3 font-semibold text-sm hover:bg-indigo-700 transition-all duration-200">
        Pay Now →
      </button>
    );
    if (id === 'btn-elastic') return (
      <button style={{ borderRadius: r, background:`linear-gradient(135deg,${style.bgColor1},${style.bgColor2})`, color: style.textColor }}
        className="px-7 py-3 font-bold text-sm transition-all duration-300 hover:scale-110" style2={{ transitionTimingFunction:'cubic-bezier(0.34,1.56,0.64,1)' }}>
        🏀 Elastic Spring
      </button>
    );
    if (id === 'btn-neon-text') return (
      <button style={{ borderRadius: r, background:'transparent', color: style.bgColor1, border:'none', textShadow:`0 0 10px ${style.bgColor1}, 0 0 30px ${style.bgColor1}88, 0 0 60px ${style.bgColor1}44` }}
        className="px-7 py-3 font-black text-lg tracking-widest hover:opacity-80 transition-all">
        NEON GLOW
      </button>
    );
    if (id === 'btn-gradient-border') return (
      <div style={{ borderRadius: r, background:`linear-gradient(135deg,${style.bgColor1},${style.bgColor2})`, padding:'2px', display:'inline-block' }}>
        <button style={{ borderRadius:`calc(${r} - 2px)`, background:'#080c14', color: style.textColor }}
          className="px-7 py-3 font-bold text-sm hover:bg-slate-900 transition-all duration-200">
          Gradient Border
        </button>
      </div>
    );
    if (id === 'btn-disabled') return (
      <button style={{ borderRadius: r, background: style.bgColor1, color:'#fff', opacity:0.38 }}
        className="px-7 py-3 font-bold text-sm cursor-not-allowed" disabled>
        Disabled State
      </button>
    );
    if (id === 'btn-text-link') return (
      <button style={{ color: style.bgColor1, background:'transparent', borderBottom:`1px solid ${style.bgColor1}`, borderRadius:0 }}
        className="px-2 py-1 font-bold text-sm hover:opacity-70 transition-all duration-200">
        Text Link Button →
      </button>
    );
    if (id === 'btn-expand-cta') return (
      <button style={{ borderRadius: r, background:`linear-gradient(135deg,${style.bgColor1},${style.bgColor2})`, color: style.textColor, overflow:'hidden' }}
        className="px-7 py-3 font-bold text-sm flex items-center gap-0 hover:gap-3 transition-all duration-300 group">
        Get Started
        <span className="max-w-0 overflow-hidden group-hover:max-w-[80px] transition-all duration-300 whitespace-nowrap">→ Now</span>
      </button>
    );
    if (id === 'btn-glitch') return (
      <button style={{ borderRadius: r, background:`linear-gradient(135deg,${style.bgColor1},${style.bgColor2})`, color: style.textColor }}
        className="px-7 py-3 font-black text-sm uppercase tracking-widest hover:animate-pulse transition-all duration-200">
        GLITCH ▓▒░
      </button>
    );
    if (id === 'btn-morphing') return (
      <button style={{ background:`linear-gradient(135deg,${style.bgColor1},${style.bgColor2})`, color: style.textColor, borderRadius:'12px' }}
        className="px-7 py-3 font-bold text-sm hover:rounded-full transition-all duration-500">
        Morphing Shape
      </button>
    );
    if (id === 'btn-clay') return (
      <button style={{ borderRadius: r, background:`linear-gradient(135deg,#a78bfa,#c084fc)`, color:'#fff', border:'3px solid rgba(255,255,255,0.4)', boxShadow:'0 8px 0 rgba(0,0,0,0.2), 0 10px 20px rgba(139,92,246,0.4), inset 0 2px 4px rgba(255,255,255,0.3)' }}
        className="px-7 py-3 font-black text-sm hover:-translate-y-1 transition-all duration-200">
        Clay Button 🧸
      </button>
    );
    if (id === 'btn-outline-glow') return (
      <button style={{ borderRadius: r, border:`2px solid ${style.bgColor1}`, color: style.bgColor1, background:'transparent', boxShadow:`0 0 ${style.glowIntensity/3}px ${style.bgColor1}55` }}
        className="px-7 py-3 font-bold text-sm hover:shadow-[0_0_30px_currentColor] transition-all duration-300">
        Outline Glow
      </button>
    );
    if (id === 'btn-dark-minimal') return (
      <button style={{ borderRadius: r, background:'#1e293b', color:'#94a3b8', border:'1px solid #334155' }}
        className="px-7 py-3 font-medium text-sm hover:bg-slate-700 hover:text-white transition-all duration-200">
        Minimal Dark
      </button>
    );
    if (id === 'btn-aurora') return (
      <button style={{ borderRadius: r, color: style.textColor, boxShadow:`0 0 30px ${style.bgColor1}55, 0 0 60px ${style.bgColor2}33` }}
        className="px-7 py-3 font-bold text-sm animate-gradient bg-[length:200%] bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500">
        Aurora ✨
      </button>
    );
    if (id === 'btn-icon-left') return (
      <button style={{ borderRadius: r, background:`linear-gradient(135deg,${style.bgColor1},${style.bgColor2})`, color: style.textColor, boxShadow: glowShadow }}
        className="px-6 py-3 font-bold text-sm flex items-center gap-2.5 hover:gap-4 transition-all duration-200">
        ⚡ Get Started
      </button>
    );
    if (id === 'btn-icon-right') return (
      <button style={{ borderRadius: r, background:`linear-gradient(135deg,${style.bgColor1},${style.bgColor2})`, color: style.textColor, boxShadow: glowShadow }}
        className="px-6 py-3 font-bold text-sm flex items-center gap-2.5 group hover:gap-4 transition-all duration-200">
        Learn More <span className="group-hover:translate-x-1 transition-transform">→</span>
      </button>
    );
    if (id === 'btn-split') return (
      <div className="flex" style={{ borderRadius: r, overflow:'hidden', border: borderVal || `1px solid ${style.bgColor1}` }}>
        <button style={{ background:`linear-gradient(135deg,${style.bgColor1},${style.bgColor2})`, color: style.textColor }}
          className="px-6 py-3 font-bold text-sm hover:opacity-90 transition-all duration-200">
          Send
        </button>
        <div style={{ width:1, background:'rgba(255,255,255,0.2)' }} />
        <button style={{ background:`linear-gradient(135deg,${style.bgColor1},${style.bgColor2})`, color: style.textColor }}
          className="px-3 py-3 font-bold hover:opacity-90 transition-all duration-200">
          ▾
        </button>
      </div>
    );
    if (id === 'btn-payment') return (
      <button style={{ borderRadius: r, background:'linear-gradient(135deg,#16a34a,#15803d)', color:'#fff', boxShadow:'0 4px 20px rgba(22,163,74,0.4)' }}
        className="px-7 py-3 font-bold text-sm flex items-center gap-2.5 hover:scale-105 transition-all duration-200">
        🔒 Pay Securely — ₹2,499
      </button>
    );

    // ── CARDS ──────────────────────────────────────────────────────────────────
    if (id === 'card-profile') return (
      <div style={{ borderRadius: r, background: bg, border: borderVal, boxShadow: glowShadow, backdropFilter: style.bgType==='glass'?'blur(16px)':undefined }}
        className="p-6 text-center w-64">
        <div className="w-16 h-16 rounded-full mx-auto mb-3 flex items-center justify-center text-3xl" style={{ background:`linear-gradient(135deg,${style.bgColor1},${style.bgColor2})` }}>👤</div>
        <p style={{ color: style.textColor }} className="font-bold text-base">Alex Johnson</p>
        <p className="text-slate-400 text-xs mt-0.5">Senior Designer @ Figma</p>
        <div className="flex justify-center gap-3 mt-3">
          {['𝕏','in','gh'].map(s => (
            <button key={s} style={{ color: style.bgColor1 }} className="text-sm font-bold hover:scale-110 transition">{s}</button>
          ))}
        </div>
      </div>
    );
    if (id === 'card-pricing') return (
      <div style={{ borderRadius: r, background: bg, border: borderVal || `2px solid ${style.bgColor1}66`, boxShadow: glowShadow }}
        className="p-6 w-64">
        <p style={{ color: style.bgColor1 }} className="text-xs font-black uppercase tracking-widest">Pro Plan</p>
        <p style={{ color: style.textColor }} className="text-4xl font-black mt-1">$49<span className="text-lg text-slate-400">/mo</span></p>
        <ul className="mt-4 space-y-2 text-xs text-slate-400">
          {['✓ Unlimited projects','✓ Priority support','✓ Custom domain'].map(f => (
            <li key={f} style={{ color: style.textColor + 'cc' }}>{f}</li>
          ))}
        </ul>
        <button style={{ borderRadius:`${Math.max(style.borderRadius-4,4)}px`, background:`linear-gradient(135deg,${style.bgColor1},${style.bgColor2})`, color:'#fff' }}
          className="w-full mt-4 py-2.5 font-bold text-xs">
          Get Pro →
        </button>
      </div>
    );
    if (id === 'card-glass') return (
      <div style={{ borderRadius: r, background:'rgba(255,255,255,0.06)', backdropFilter:'blur(20px)', WebkitBackdropFilter:'blur(20px)', border:`1px solid rgba(255,255,255,0.15)`, boxShadow:`0 8px 40px rgba(0,0,0,0.3), ${glowShadow || ''}` }}
        className="p-6 w-64">
        <div style={{ color: style.bgColor1 }} className="text-3xl mb-3">🌟</div>
        <p style={{ color: style.textColor }} className="font-bold text-base">Frosted Glass Card</p>
        <p className="text-slate-400 text-xs mt-1.5 leading-relaxed">Beautiful glassmorphism effect with backdrop blur filter.</p>
      </div>
    );
    if (id === 'card-stats') return (
      <div style={{ borderRadius: r, background: bg, border: borderVal, boxShadow: glowShadow }}
        className="p-5 w-56">
        <p className="text-slate-400 text-xs font-bold">Total Revenue</p>
        <p style={{ color: style.textColor }} className="text-3xl font-black mt-1">$84,210</p>
        <p style={{ color:'#22c55e' }} className="text-xs font-bold mt-1">▲ 12.5% this month</p>
      </div>
    );
    if (id === 'card-bento') return (
      <div style={{ borderRadius: r, background:`linear-gradient(135deg,${style.bgColor1}22,${style.bgColor2}22)`, border:`1px solid ${style.bgColor1}44`, boxShadow: glowShadow }}
        className="p-5 w-64">
        <div style={{ background:`linear-gradient(135deg,${style.bgColor1},${style.bgColor2})` }}
          className="w-10 h-10 rounded-xl flex items-center justify-center text-white text-xl mb-3">⚡</div>
        <p style={{ color: style.textColor }} className="font-bold text-base">Feature Block</p>
        <p className="text-slate-400 text-xs mt-1.5">Bento-style feature card for showcasing product highlights.</p>
      </div>
    );
    if (id === 'card-3d-tilt') return (
      <div style={{ borderRadius: r, background: bg, border: borderVal, boxShadow: glowShadow, transform:'perspective(500px) rotateY(-8deg) rotateX(4deg)', transition:'transform 0.3s ease' }}
        className="p-6 w-56 hover:rotate-0">
        <div style={{ color: style.bgColor1 }} className="text-3xl mb-3">🎮</div>
        <p style={{ color: style.textColor }} className="font-bold">3D Tilt Card</p>
        <p className="text-slate-400 text-xs mt-1">Hover to reset tilt</p>
      </div>
    );
    if (id === 'card-flip') return (
      <div className="relative w-56 h-36" style={{ perspective:'600px' }}>
        <div className="absolute inset-0 rounded-xl flex items-center justify-center font-bold text-white"
          style={{ background:`linear-gradient(135deg,${style.bgColor1},${style.bgColor2})`, borderRadius: r, backfaceVisibility:'hidden', boxShadow: glowShadow }}>
          🃏 Front Side
        </div>
        <p className="absolute bottom-2 w-full text-center text-[10px] text-slate-500">Hover to flip</p>
      </div>
    );
    if (id === 'card-feature') return (
      <div style={{ borderRadius: r, background: bg, border: borderVal, boxShadow: glowShadow }}
        className="p-5 w-64 hover:-translate-y-1 transition-all duration-200">
        <div style={{ background:`linear-gradient(135deg,${style.bgColor1},${style.bgColor2})` }}
          className="w-12 h-12 rounded-2xl flex items-center justify-center text-white text-2xl mb-4">🚀</div>
        <p style={{ color: style.textColor }} className="font-bold text-base">Fast Deployment</p>
        <p className="text-slate-400 text-xs mt-2 leading-relaxed">Deploy to production in seconds with zero configuration needed.</p>
      </div>
    );
    if (id === 'card-product') return (
      <div style={{ borderRadius: r, background: bg, border: borderVal, boxShadow: glowShadow, overflow:'hidden' }}
        className="w-52 hover:-translate-y-1 transition-all duration-200">
        <div style={{ height:120, background:`linear-gradient(135deg,${style.bgColor1}44,${style.bgColor2}44)` }}
          className="flex items-center justify-center text-4xl">📦</div>
        <div className="p-4">
          <p style={{ color: style.textColor }} className="font-bold text-sm">Premium Widget</p>
          <p style={{ color: style.bgColor1 }} className="font-black text-lg mt-1">$29.99</p>
          <button style={{ background:`linear-gradient(135deg,${style.bgColor1},${style.bgColor2})`, borderRadius:`${Math.max(style.borderRadius-4,4)}px` }}
            className="w-full mt-3 py-2 text-white font-bold text-xs">Add to Cart</button>
        </div>
      </div>
    );
    if (id === 'card-blog') return (
      <div style={{ borderRadius: r, background: bg, border: borderVal, boxShadow: glowShadow }}
        className="p-5 w-64">
        <span style={{ color: style.bgColor1, borderColor: style.bgColor1 }} className="text-[10px] font-black uppercase tracking-widest border rounded px-2 py-0.5">Design</span>
        <p style={{ color: style.textColor }} className="font-bold text-sm mt-2">How to build premium UI components</p>
        <div className="flex items-center gap-2 mt-3">
          <div className="w-6 h-6 rounded-full bg-gradient-to-r from-cyan-500 to-purple-600" />
          <p className="text-slate-400 text-xs">Alex · Aug 7 · 5 min</p>
        </div>
      </div>
    );

    // ── INPUTS ──────────────────────────────────────────────────────────────
    if (id === 'input-text') return (
      <div className="w-64">
        <div className="relative">
          <input type="text" placeholder="Your name"
            style={{ borderRadius: r, border: borderVal || `1px solid #334155`, background:`rgba(15,23,42,0.8)`, color: style.textColor }}
            className="w-full px-4 py-3 text-sm outline-none focus:border-cyan-400 transition-all placeholder:text-slate-600" />
        </div>
        <p className="text-[10px] text-slate-600 mt-1.5 px-1">Floating label text input</p>
      </div>
    );
    if (id === 'input-search') return (
      <div className="w-72 relative">
        <span className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-500 text-sm">🔍</span>
        <input type="text" placeholder="Search anything…"
          style={{ borderRadius: r, border: borderVal || `1px solid #334155`, background:'rgba(15,23,42,0.8)', color: style.textColor }}
          className="w-full pl-9 pr-16 py-3 text-sm outline-none focus:border-cyan-400 transition-all placeholder:text-slate-600" />
        <kbd style={{ color: style.bgColor1 }} className="absolute right-3 top-1/2 -translate-y-1/2 text-[10px] font-mono border border-slate-700 rounded px-1.5 py-0.5">⌘K</kbd>
      </div>
    );
    if (id === 'input-otp') return (
      <div className="flex gap-2">
        {[1,2,3,4,5,6].map(i => (
          <input key={i} type="text" maxLength={1} placeholder="·"
            style={{ borderRadius:`${Math.min(style.borderRadius,12)}px`, border: i===3 ? `2px solid ${style.bgColor1}` : borderVal || `1px solid #334155`, background:'rgba(15,23,42,0.9)', color: style.textColor, boxShadow: i===3 ? `0 0 0 3px ${style.bgColor1}33` : undefined }}
            className="w-10 h-12 text-center text-lg font-bold outline-none transition-all placeholder:text-slate-800" />
        ))}
      </div>
    );
    if (id === 'input-password') return (
      <div className="w-64">
        <div className="relative">
          <input type="password" placeholder="Enter password" defaultValue="mypassword"
            style={{ borderRadius: r, border: borderVal || `1px solid #334155`, background:'rgba(15,23,42,0.8)', color: style.textColor }}
            className="w-full px-4 py-3 pr-10 text-sm outline-none placeholder:text-slate-600" />
          <span className="absolute right-3 top-1/2 -translate-y-1/2 cursor-pointer text-slate-500 hover:text-white">👁</span>
        </div>
        <div className="mt-2 h-1.5 rounded-full bg-slate-800 overflow-hidden">
          <div style={{ width:'66%', background:`linear-gradient(90deg,${style.bgColor1},${style.bgColor2})` }} className="h-full rounded-full" />
        </div>
        <p className="text-[10px] text-slate-500 mt-1">Strength: Good</p>
      </div>
    );
    if (id === 'input-switch') return (
      <div className="flex items-center gap-4">
        <button style={{ background:`linear-gradient(135deg,${style.bgColor1},${style.bgColor2})`, borderRadius:'9999px', width:52, height:28, position:'relative' }}
          className="transition-all duration-200 shadow-md">
          <div className="absolute right-1 top-1 w-6 h-6 rounded-full bg-white shadow transition-all duration-200" />
        </button>
        <span style={{ color: style.textColor }} className="text-sm font-bold">Notifications On</span>
      </div>
    );
    if (id === 'input-range') return (
      <div className="w-64">
        <div className="flex justify-between text-xs mb-2">
          <span style={{ color: style.textColor }} className="font-bold">Brightness</span>
          <span style={{ color: style.bgColor1 }} className="font-mono font-bold">68%</span>
        </div>
        <input type="range" defaultValue="68"
          style={{ accentColor: style.bgColor1 }}
          className="w-full cursor-pointer" />
      </div>
    );
    if (id === 'input-checkbox') return (
      <div className="flex items-center gap-3">
        <div style={{ background:`linear-gradient(135deg,${style.bgColor1},${style.bgColor2})`, borderRadius:`${Math.min(style.borderRadius,8)}px`, width:22, height:22 }}
          className="flex items-center justify-center text-white font-bold text-sm">✓</div>
        <span style={{ color: style.textColor }} className="text-sm">Accept terms &amp; conditions</span>
      </div>
    );
    if (id === 'input-tag') return (
      <div style={{ borderRadius: r, border: borderVal || '1px solid #334155', background:'rgba(15,23,42,0.8)' }}
        className="flex flex-wrap gap-1.5 p-2.5 w-72 min-h-[44px]">
        {['Design','React','Vibe'].map(tag => (
          <span key={tag} style={{ background:`${style.bgColor1}33`, color: style.bgColor1, borderRadius:`${Math.min(style.borderRadius,8)}px` }}
            className="flex items-center gap-1 px-2 py-0.5 text-xs font-bold">
            {tag} <span className="cursor-pointer hover:opacity-60">✕</span>
          </span>
        ))}
        <input type="text" placeholder="Add tag…" className="outline-none bg-transparent text-xs text-slate-400 min-w-[60px] flex-1 placeholder:text-slate-700" />
      </div>
    );

    // ── NAVIGATION ────────────────────────────────────────────────────────────
    if (id === 'nav-sticky-blur') return (
      <div style={{ borderRadius: r, background:'rgba(8,12,20,0.7)', backdropFilter:'blur(20px)', border:`1px solid rgba(255,255,255,0.08)`, boxShadow: glowShadow }}
        className="flex items-center justify-between px-5 py-3 w-80">
        <span style={{ color: style.bgColor1 }} className="font-black text-base">● Brand</span>
        <div className="flex gap-4 text-xs">
          {['Docs','Pricing','Blog'].map(l => (
            <span key={l} style={{ color: style.textColor }} className="font-medium hover:opacity-70 cursor-pointer">{l}</span>
          ))}
        </div>
        <button style={{ borderRadius:`${Math.min(style.borderRadius,8)}px`, background:`linear-gradient(135deg,${style.bgColor1},${style.bgColor2})`, color:'#fff' }}
          className="px-3 py-1.5 text-xs font-bold">Sign Up</button>
      </div>
    );
    if (id === 'nav-command') return (
      <div style={{ borderRadius: r, background:'rgba(8,12,20,0.95)', border:`1px solid ${style.bgColor1}44`, backdropFilter:'blur(20px)', boxShadow: glowShadow || `0 20px 60px rgba(0,0,0,0.8)` }}
        className="w-80 overflow-hidden">
        <div className="flex items-center gap-2 px-4 py-3 border-b border-slate-800">
          <span className="text-slate-500">🔍</span>
          <span className="text-slate-400 text-sm flex-1">Type a command or search…</span>
          <kbd className="text-[10px] border border-slate-700 rounded px-1.5 py-0.5 text-slate-600">ESC</kbd>
        </div>
        {['New file','Open settings','Deploy to prod'].map((item,i) => (
          <div key={item} style={{ background: i===0 ? `${style.bgColor1}22` : 'transparent', color: i===0 ? style.bgColor1 : '#94a3b8' }}
            className="flex items-center gap-3 px-4 py-2.5 text-xs cursor-pointer hover:bg-white/5">
            <span>{['📄','⚙️','🚀'][i]}</span> {item}
          </div>
        ))}
      </div>
    );
    if (id === 'nav-tabs') return (
      <div style={{ borderBottom:`2px solid #1e293b` }} className="flex gap-1 w-72">
        {['Overview','Analytics','Settings'].map((tab,i) => (
          <button key={tab}
            style={{ color: i===0 ? style.bgColor1 : '#64748b', borderBottom: i===0 ? `2px solid ${style.bgColor1}` : '2px solid transparent', marginBottom:'-2px' }}
            className="px-4 py-2.5 text-xs font-bold transition-all duration-200 hover:text-white">
            {tab}
          </button>
        ))}
      </div>
    );
    if (id === 'nav-dock') return (
      <div style={{ borderRadius:'9999px', background:'rgba(15,23,42,0.8)', backdropFilter:'blur(20px)', border:`1px solid rgba(255,255,255,0.1)`, boxShadow: glowShadow }}
        className="flex items-end gap-3 px-6 py-3">
        {['🏠','📁','⚙️','📊','💬'].map((icon,i) => (
          <button key={i} style={{ background: i===0 ? `linear-gradient(135deg,${style.bgColor1},${style.bgColor2})` : 'rgba(255,255,255,0.08)' }}
            className={`rounded-xl flex items-center justify-center text-xl transition-all duration-200 hover:scale-125 ${i===0?'w-12 h-12':'w-9 h-9'}`}>
            {icon}
          </button>
        ))}
      </div>
    );
    if (id === 'nav-bottom') return (
      <div style={{ borderRadius: r, background:'rgba(8,12,20,0.9)', border:`1px solid rgba(255,255,255,0.08)`, backdropFilter:'blur(20px)' }}
        className="flex items-center justify-around px-4 py-3 w-72">
        {[['🏠','Home'],['🔍','Search'],['✚','Add'],['🔔','Alerts'],['👤','Profile']].map(([icon,label],i) => (
          <div key={label} className="flex flex-col items-center gap-0.5">
            <div style={{ background: i===2 ? `linear-gradient(135deg,${style.bgColor1},${style.bgColor2})` : 'transparent', borderRadius:'50%', width:36, height:36 }}
              className="flex items-center justify-center text-lg">
              {icon}
            </div>
            <span style={{ color: i===0 ? style.bgColor1 : '#64748b' }} className="text-[9px] font-bold">{label}</span>
          </div>
        ))}
      </div>
    );
    if (id === 'nav-breadcrumb') return (
      <div className="flex items-center gap-1.5 text-xs">
        {['Home','Products','Electronics'].map((crumb,i,arr) => (
          <React.Fragment key={crumb}>
            <span style={{ color: i===arr.length-1 ? style.textColor : '#64748b' }}
              className={i===arr.length-1 ? 'font-bold' : 'hover:text-white cursor-pointer'}>
              {crumb}
            </span>
            {i < arr.length-1 && <span style={{ color: style.bgColor1 }}>/</span>}
          </React.Fragment>
        ))}
      </div>
    );
    if (id === 'nav-sidebar') return (
      <div style={{ borderRadius: r, background:'rgba(8,12,20,0.9)', border: borderVal || `1px solid #1e293b`, boxShadow: glowShadow }}
        className="w-52 p-3 space-y-1">
        {[['🏠','Dashboard',true],['📊','Analytics',false],['👥','Users',false],['⚙️','Settings',false]].map(([icon,label,active]) => (
          <div key={label}
            style={{ background: active ? `${style.bgColor1}22` : 'transparent', color: active ? style.bgColor1 : '#64748b', borderRadius:`${Math.min(style.borderRadius,8)}px` }}
            className="flex items-center gap-3 px-3 py-2.5 cursor-pointer hover:bg-white/5 text-xs font-bold">
            <span>{icon}</span>{label}
          </div>
        ))}
      </div>
    );

    // ── TEXT EFFECTS ──────────────────────────────────────────────────────────
    if (id === 'text-gradient') return (
      <h2 className="text-4xl font-black gradient-text tracking-wider text-center">
        Gradient Flow
      </h2>
    );
    if (id === 'text-typewriter') return (
      <div className="animated-border-box p-4" style={{ borderRadius: r }}>
        <span className="font-mono text-cyan-300 text-base border-r-2 border-cyan-400 pr-0.5 animate-pulse">
          const ui = () =&gt; 'beautiful';
        </span>
      </div>
    );
    if (id === 'text-neon-glow') return (
      <h2 style={{ color: style.bgColor1, textShadow:`0 0 10px ${style.bgColor1}, 0 0 30px ${style.bgColor1}99, 0 0 70px ${style.bgColor1}55` }}
        className="text-4xl font-black tracking-widest text-center">
        NEON GLOW
      </h2>
    );
    if (id === 'text-clip-reveal') return (
      <div className="overflow-hidden">
        <h2 style={{ color: style.textColor }} className="text-3xl font-black animate-bounce">
          ↑ Mask Reveal
        </h2>
      </div>
    );
    if (id === 'text-scramble') return (
      <h2 style={{ color: style.bgColor1, fontFamily:'monospace' }} className="text-2xl font-black tracking-wider">
        Sc█amble Fx▓
      </h2>
    );
    if (id === 'text-split') return (
      <div className="flex gap-2 flex-wrap justify-center">
        {['Split','Word','Entry','Effect'].map((w,i) => (
          <span key={w} style={{ color: style.textColor, animationDelay:`${i*0.1}s` }}
            className="text-2xl font-black animate-bounce">
            {w}
          </span>
        ))}
      </div>
    );

    // ── BACKGROUNDS ───────────────────────────────────────────────────────────
    if (id === 'bg-aurora') return (
      <div style={{ borderRadius: r, width:280, height:160, position:'relative', overflow:'hidden', background:'#080c14' }}>
        <div style={{ position:'absolute', top:'10%', left:'20%', width:120, height:120, borderRadius:'50%', background:style.bgColor1, filter:'blur(40px)', opacity:0.5 }} />
        <div style={{ position:'absolute', top:'30%', right:'15%', width:100, height:100, borderRadius:'50%', background:style.bgColor2, filter:'blur(35px)', opacity:0.4 }} />
        <div style={{ position:'absolute', bottom:'10%', left:'10%', width:80, height:80, borderRadius:'50%', background:style.glowColor, filter:'blur(30px)', opacity:0.3 }} />
        <div style={{ position:'absolute', inset:0, display:'flex', alignItems:'center', justifyContent:'center' }}>
          <span style={{ color:'#fff', fontWeight:900, fontSize:14 }}>Aurora Background</span>
        </div>
      </div>
    );
    if (id === 'bg-mesh') return (
      <div style={{ borderRadius: r, width:280, height:160, position:'relative', overflow:'hidden',
        background:`radial-gradient(at 40% 20%, ${style.bgColor1}88 0px, transparent 50%), radial-gradient(at 80% 0%, ${style.bgColor2}77 0px, transparent 50%), radial-gradient(at 0% 50%, ${style.glowColor}66 0px, transparent 50%), #080c14` }}>
        <div style={{ position:'absolute', inset:0, display:'flex', alignItems:'center', justifyContent:'center' }}>
          <span style={{ color:'#fff', fontWeight:900, fontSize:14 }}>Mesh Gradient</span>
        </div>
      </div>
    );
    if (id === 'bg-particles') return (
      <div style={{ borderRadius: r, width:280, height:160, background:'#080c14', border: borderVal || `1px solid #1e293b`, position:'relative', overflow:'hidden' }}>
        {[...Array(12)].map((_,i) => (
          <div key={i} style={{ position:'absolute', width:3, height:3, borderRadius:'50%', background:style.bgColor1, opacity:0.6,
            left:`${Math.random()*90+5}%`, top:`${Math.random()*90+5}%`, animation:`pulse ${1+Math.random()*2}s infinite` }} />
        ))}
        <div style={{ position:'absolute', inset:0, display:'flex', alignItems:'center', justifyContent:'center' }}>
          <span style={{ color:'#fff', fontWeight:900, fontSize:14 }}>Particle Canvas</span>
        </div>
      </div>
    );
    if (id === 'bg-grid-dot') return (
      <div style={{ borderRadius: r, width:280, height:160, position:'relative', overflow:'hidden',
        backgroundImage:`radial-gradient(${style.bgColor1}44 1px, transparent 1px)`, backgroundSize:'20px 20px', background:`radial-gradient(${style.bgColor1}44 1px, transparent 1px), #080c14` }}>
        <div style={{ position:'absolute', inset:0, background:'radial-gradient(ellipse at center, transparent 50%, #080c14 100%)' }} />
        <div style={{ position:'absolute', inset:0, display:'flex', alignItems:'center', justifyContent:'center' }}>
          <span style={{ color:'#fff', fontWeight:900, fontSize:14 }}>Dot Grid Pattern</span>
        </div>
      </div>
    );
    if (id === 'bg-cyberpunk') return (
      <div style={{ borderRadius: r, width:280, height:160, background:'#000', position:'relative', overflow:'hidden', border:`1px solid ${style.bgColor1}66` }}>
        {[...Array(8)].map((_,i) => (
          <div key={i} style={{ position:'absolute', left:0, right:0, height:1, background:style.bgColor1, opacity:0.1, top:`${i*20+10}px` }} />
        ))}
        <div style={{ position:'absolute', inset:0, display:'flex', alignItems:'center', justifyContent:'center' }}>
          <span style={{ color: style.bgColor1, fontWeight:900, fontSize:14, textShadow:`0 0 10px ${style.bgColor1}` }}>CYBERPUNK SCAN</span>
        </div>
      </div>
    );

    // ── ANIMATIONS ────────────────────────────────────────────────────────────
    if (id === 'anim-spring') return (
      <div key={animKey} style={{ background:`linear-gradient(135deg,${style.bgColor1},${style.bgColor2})`, borderRadius: r, color:'#fff', boxShadow: glowShadow }}
        className="px-8 py-4 font-bold text-sm animate-bounce">
        🏀 Spring Bounce!
      </div>
    );
    if (id === 'anim-stagger') return (
      <div key={animKey} className="flex items-center gap-3">
        {[1,2,3].map((n,i) => (
          <div key={n} style={{ background:`linear-gradient(135deg,${style.bgColor1},${style.bgColor2})`, borderRadius: r, animationDelay:`${i*0.15}s`, boxShadow: glowShadow }}
            className="w-16 h-16 flex items-center justify-center font-black text-white text-xl animate-pulse">
            {n}
          </div>
        ))}
      </div>
    );
    if (id === 'anim-morph') return (
      <div style={{ background:`linear-gradient(135deg,${style.bgColor1},${style.bgColor2})`, color:'#fff', width:80, height:80, boxShadow: glowShadow }}
        className="flex items-center justify-center font-black text-xl hover:rounded-full transition-all duration-700"
        style2={{ borderRadius:'12px' }}>
        🔷
      </div>
    );
    if (id === 'anim-parallax') return (
      <div style={{ borderRadius: r, width:280, height:140, overflow:'hidden', background:'#080c14', border: borderVal || `1px solid #1e293b` }}>
        <div style={{ background:`linear-gradient(180deg,${style.bgColor1}22,transparent)`, height:60, position:'relative' }}>
          <div style={{ background:style.bgColor1, width:40, height:2, position:'absolute', bottom:0, left:20, borderRadius:2 }} />
        </div>
        <div className="p-3">
          <div style={{ color: style.textColor }} className="text-xs font-bold">Scroll → Parallax Effect</div>
          <div className="text-[10px] text-slate-500 mt-1">Layers move at different speeds</div>
        </div>
      </div>
    );
    if (id === 'anim-confetti') return (
      <div className="text-center">
        <button style={{ borderRadius: r, background:`linear-gradient(135deg,${style.bgColor1},${style.bgColor2})`, color:'#fff', boxShadow: glowShadow }}
          className="px-7 py-3 font-bold text-sm hover:scale-105 transition-all duration-200">
          🎉 Click for Confetti!
        </button>
        <p className="text-[10px] text-slate-500 mt-2">canvas-confetti library</p>
      </div>
    );

    // ── LAYOUTS ───────────────────────────────────────────────────────────────
    if (id === 'layout-hero') return (
      <div style={{ borderRadius: r, background:`linear-gradient(135deg,${style.bgColor1}22,${style.bgColor2}11)`, border: borderVal || `1px solid ${style.bgColor1}33`, boxShadow: glowShadow }}
        className="p-8 w-72 text-center">
        <p style={{ color: style.bgColor1 }} className="text-[10px] font-black uppercase tracking-widest">New Feature →</p>
        <h2 style={{ color: style.textColor }} className="text-2xl font-black mt-2 leading-tight">Build Faster<br/>Ship Better</h2>
        <p className="text-slate-500 text-xs mt-2">The all-in-one platform for modern teams.</p>
        <button style={{ borderRadius:`${Math.max(style.borderRadius-4,4)}px`, background:`linear-gradient(135deg,${style.bgColor1},${style.bgColor2})`, color:'#fff' }}
          className="mt-4 px-6 py-2.5 font-bold text-xs shiny-btn">
          Get Started Free →
        </button>
      </div>
    );
    if (id === 'layout-bento') return (
      <div style={{ display:'grid', gridTemplateColumns:'repeat(3,1fr)', gridTemplateRows:'repeat(2,1fr)', gap:8, width:280, height:160 }}>
        {[[2,1,'⚡','Feature'],[1,2,'📊','Stats'],[1,1,'🎨','Design'],[1,1,'🚀','Deploy']].map(([cSpan,rSpan,icon,label],i) => (
          <div key={i} style={{ gridColumn:`span ${cSpan}`, gridRow:`span ${rSpan}`, background:`${style.bgColor1}${i===0?'33':'1a'}`, border:`1px solid ${style.bgColor1}44`, borderRadius:8, display:'flex', flexDirection:'column', alignItems:'center', justifyContent:'center' }}>
            <span className="text-xl">{icon}</span>
            <span style={{ color: style.textColor }} className="text-[10px] font-bold mt-1">{label}</span>
          </div>
        ))}
      </div>
    );

    // ── FEEDBACK ──────────────────────────────────────────────────────────────
    if (id === 'fb-toast') return (
      <div style={{ borderRadius: r, background:'rgba(15,23,42,0.95)', border:`1px solid ${style.bgColor1}44`, boxShadow: glowShadow || `0 8px 32px rgba(0,0,0,0.6)`, backdropFilter:'blur(16px)' }}
        className="w-72 p-4 flex gap-3 items-start">
        <span className="text-2xl">✅</span>
        <div className="flex-1">
          <p style={{ color: style.textColor }} className="text-xs font-bold">Deployed successfully!</p>
          <p className="text-slate-500 text-[10px] mt-0.5">Your changes are now live.</p>
          <div style={{ background:`linear-gradient(90deg,${style.bgColor1},${style.bgColor2})` }} className="h-1 rounded-full mt-2 w-1/3" />
        </div>
        <span className="text-slate-600 cursor-pointer hover:text-white text-xs">✕</span>
      </div>
    );
    if (id === 'fb-modal') return (
      <div style={{ borderRadius: r, background:'rgba(8,12,20,0.97)', border:`1px solid ${style.bgColor1}33`, boxShadow: glowShadow || `0 20px 80px rgba(0,0,0,0.8)`, backdropFilter:'blur(20px)' }}
        className="w-72 p-6">
        <h3 style={{ color: style.textColor }} className="font-bold text-base mb-1">Confirm Action</h3>
        <p className="text-slate-500 text-xs mb-5">Are you sure you want to proceed with this action?</p>
        <div className="flex gap-2">
          <button className="flex-1 py-2 rounded-lg border border-slate-700 text-slate-400 text-xs font-bold hover:bg-slate-800 transition">Cancel</button>
          <button style={{ background:`linear-gradient(135deg,${style.bgColor1},${style.bgColor2})`, borderRadius:`${Math.min(style.borderRadius,8)}px` }}
            className="flex-1 py-2 text-white text-xs font-bold">Confirm</button>
        </div>
      </div>
    );
    if (id === 'fb-tooltip') return (
      <div className="relative inline-block">
        <button style={{ borderRadius: r, background:`linear-gradient(135deg,${style.bgColor1},${style.bgColor2})`, color:'#fff' }}
          className="px-5 py-2.5 font-bold text-sm">
          Hover Me
        </button>
        <div style={{ background:'rgba(15,23,42,0.95)', border:`1px solid ${style.bgColor1}55`, borderRadius:8 }}
          className="absolute -top-10 left-1/2 -translate-x-1/2 px-3 py-1.5 text-[10px] font-bold whitespace-nowrap text-white">
          Tooltip text here!
          <div style={{ background:`${style.bgColor1}55` }} className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-2 h-2 rotate-45" />
        </div>
      </div>
    );
    if (id === 'fb-skeleton') return (
      <div style={{ borderRadius: r, background:'rgba(15,23,42,0.8)', border: borderVal || `1px solid #1e293b` }} className="w-64 p-4 space-y-3">
        <div className="flex items-center gap-3">
          <div style={{ borderRadius:'50%' }} className="w-10 h-10 bg-slate-800 animate-pulse" />
          <div className="space-y-1.5 flex-1">
            <div className="h-2.5 bg-slate-800 rounded animate-pulse w-3/4" />
            <div className="h-2 bg-slate-800 rounded animate-pulse w-1/2" />
          </div>
        </div>
        <div className="h-2.5 bg-slate-800 rounded animate-pulse" />
        <div className="h-2.5 bg-slate-800 rounded animate-pulse w-5/6" />
        <div className="h-6 bg-slate-800 rounded animate-pulse w-1/3" />
      </div>
    );

    // ── REMAINING LAYOUTS ─────────────────────────────────────────────────────
    if (id === 'layout-split') return (
      <div style={{ display:'grid', gridTemplateColumns:'1fr 1fr', gap:8, width:280, height:140, borderRadius: r, overflow:'hidden', border: borderVal || `1px solid #1e293b` }}>
        <div style={{ background:`${style.bgColor1}22` }} className="flex items-center justify-center">
          <span style={{ color: style.bgColor1 }} className="text-xs font-bold">Left Panel</span>
        </div>
        <div style={{ background:`${style.bgColor2}22` }} className="flex items-center justify-center">
          <span style={{ color: style.bgColor2 }} className="text-xs font-bold">Right Panel</span>
        </div>
      </div>
    );
    if (id === 'layout-sidebar') return (
      <div style={{ display:'grid', gridTemplateColumns:'60px 1fr', height:140, width:280, borderRadius: r, overflow:'hidden', border: borderVal || `1px solid #1e293b` }}>
        <div style={{ background:'rgba(8,12,20,0.95)', borderRight:`1px solid #1e293b` }} className="flex flex-col items-center gap-2 pt-3">
          {['🏠','📊','⚙️'].map(i => <span key={i} className="text-lg">{i}</span>)}
        </div>
        <div style={{ background:`${style.bgColor1}11` }} className="p-3">
          <div className="h-2 bg-slate-800 rounded w-2/3 mb-2 animate-pulse" />
          <div className="h-2 bg-slate-800 rounded w-full mb-2 animate-pulse" />
          <div className="h-2 bg-slate-800 rounded w-3/4 animate-pulse" />
        </div>
      </div>
    );

    // Fallback for anything not yet explicitly handled
    return (
      <div style={{ borderRadius: r, background: bg, border: borderVal, boxShadow: glowShadow }}
        className="px-8 py-5 font-bold text-sm" style2={{ color: style.textColor }}>
        <span style={{ color: style.textColor }}>{comp.name}</span>
      </div>
    );
  };

  return (
    <div className="h-full flex flex-col items-center justify-center relative select-none gap-4">
      {/* Stage label */}
      <div className="absolute top-4 left-4">
        <span className="text-[10px] text-slate-600 font-mono flex items-center gap-1.5">
          <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse inline-block" />
          LIVE STAGE — {comp.name}
        </span>
      </div>

      {/* Live Component */}
      <div className="transition-all duration-300 ease-out">
        {renderComponent()}
      </div>

      {/* Effect tags below stage */}
      <div className="flex flex-wrap gap-1.5 justify-center px-8">
        {comp.effects?.map((eff, i) => (
          <span key={i} className="text-[10px] font-bold px-2 py-0.5 rounded bg-slate-800 text-slate-400 border border-slate-700">
            {eff}
          </span>
        ))}
      </div>
    </div>
  );
}
