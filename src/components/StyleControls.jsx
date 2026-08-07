import React, { useState } from 'react';
import { Sliders, Palette, Zap } from 'lucide-react';

const BORDER_STYLES = [
  { id: 'none',      label: 'None' },
  { id: 'solid',     label: 'Solid' },
  { id: 'dashed',    label: 'Dashed' },
  { id: 'laserSpin', label: '⚡ Laser Spin' },
  { id: 'glowRing',  label: '🌟 Glow Ring' },
  { id: 'gradient',  label: '🌈 Gradient' },
];

const SHADOW_TYPES = [
  { id: 'none',     label: 'None' },
  { id: 'soft',     label: 'Soft' },
  { id: 'dramatic', label: 'Dramatic' },
  { id: 'neonGlow', label: '✨ Neon Glow' },
];

const HOVER_EFFECTS = [
  { id: 'none',     label: 'None' },
  { id: 'shimmer',  label: '✨ Shimmer Sweep' },
  { id: 'scale',    label: '⬆ Scale Up' },
  { id: 'ripple',   label: '💧 Liquid Ripple' },
  { id: 'glow',     label: '🌟 Glow Intensify' },
  { id: 'lift',     label: '🔼 Shadow Lift' },
];

const ENTRANCE_ANIMS = [
  { id: 'none',    label: 'None' },
  { id: 'fadeUp',  label: '⬆ Fade Up' },
  { id: 'bounce',  label: '🏀 Spring Bounce' },
  { id: 'slideIn', label: '→ Slide In' },
  { id: 'zoomIn',  label: '🔍 Zoom In' },
];

const BG_TYPES = [
  { id: 'gradient', label: '🌈 Gradient' },
  { id: 'solid',    label: '■ Solid' },
  { id: 'glass',    label: '🍷 Frosted Glass' },
  { id: 'none',     label: 'Transparent' },
];

export default function StyleControls({ style, onChange }) {
  const [activeTab, setActiveTab] = useState('border');

  const set = (key, value) => onChange({ ...style, [key]: value });

  return (
    <div className="flex flex-col h-full bg-slate-950/40">
      {/* Tab Bar */}
      <div className="flex border-b border-slate-800 shrink-0">
        {[
          { id: 'border', label: 'Border & Shape', icon: Sliders },
          { id: 'color',  label: 'Colors',          icon: Palette },
          { id: 'motion', label: 'Motion',           icon: Zap },
        ].map(tab => {
          const Icon = tab.icon;
          return (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`flex-1 flex items-center justify-center gap-1.5 py-3 text-[11px] font-bold transition border-b-2 ${
                activeTab === tab.id
                  ? 'border-cyan-400 text-cyan-300'
                  : 'border-transparent text-slate-500 hover:text-slate-300'
              }`}
            >
              <Icon className="w-3.5 h-3.5" />
              {tab.label}
            </button>
          );
        })}
      </div>

      <div className="flex-1 overflow-y-auto p-4 space-y-5 text-xs">

        {/* ── BORDER & SHAPE TAB ── */}
        {activeTab === 'border' && (
          <>
            <Section label="Border Style">
              <div className="grid grid-cols-2 gap-1.5">
                {BORDER_STYLES.map(b => (
                  <button
                    key={b.id}
                    onClick={() => set('borderStyle', b.id)}
                    className={`py-2 rounded-lg text-center font-bold border transition ${
                      style.borderStyle === b.id
                        ? 'border-cyan-400 bg-cyan-500/20 text-cyan-300'
                        : 'border-slate-800 bg-slate-900 text-slate-400 hover:text-white hover:border-slate-600'
                    }`}
                  >
                    {b.label}
                  </button>
                ))}
              </div>
            </Section>

            <Section label={`Border Radius: ${style.borderRadius}px`}>
              <input type="range" min="0" max="32" value={style.borderRadius}
                onChange={e => set('borderRadius', +e.target.value)}
                className="w-full accent-cyan-400 cursor-pointer" />
              <div className="flex justify-between text-[10px] text-slate-600 mt-0.5">
                <span>Square 0px</span><span>Pill 9999→</span>
              </div>
              <button
                onClick={() => set('borderRadius', 9999)}
                className={`mt-2 w-full py-1.5 rounded-lg border text-[11px] font-bold transition ${
                  style.borderRadius === 9999
                    ? 'border-cyan-400 bg-cyan-500/20 text-cyan-300'
                    : 'border-slate-700 text-slate-500 hover:text-white'
                }`}
              >
                Full Pill Shape
              </button>
            </Section>

            {style.borderStyle !== 'none' && (
              <>
                <Section label={`Border Width: ${style.borderWidth}px`}>
                  <input type="range" min="1" max="6" value={style.borderWidth}
                    onChange={e => set('borderWidth', +e.target.value)}
                    className="w-full accent-purple-400 cursor-pointer" />
                </Section>

                <Section label="Border Color">
                  <div className="flex items-center gap-3">
                    <input type="color" value={style.borderColor}
                      onChange={e => set('borderColor', e.target.value)}
                      className="w-10 h-10 rounded-lg cursor-pointer border-0 bg-transparent" />
                    <span className="font-mono text-slate-300">{style.borderColor}</span>
                  </div>
                  <ColorPresets colors={['#00f2fe','#9333ea','#ff2a85','#22c55e','#f59e0b','#ffffff']}
                    active={style.borderColor} onPick={c => set('borderColor', c)} />
                </Section>
              </>
            )}

            <Section label="Shadow">
              <div className="grid grid-cols-2 gap-1.5">
                {SHADOW_TYPES.map(s => (
                  <button key={s.id} onClick={() => set('shadowType', s.id)}
                    className={`py-2 rounded-lg font-bold border transition ${
                      style.shadowType === s.id
                        ? 'border-pink-400 bg-pink-500/20 text-pink-300'
                        : 'border-slate-800 bg-slate-900 text-slate-400 hover:text-white'
                    }`}
                  >{s.label}</button>
                ))}
              </div>
            </Section>
          </>
        )}

        {/* ── COLOR TAB ── */}
        {activeTab === 'color' && (
          <>
            <Section label="Background Type">
              <div className="grid grid-cols-2 gap-1.5">
                {BG_TYPES.map(b => (
                  <button key={b.id} onClick={() => set('bgType', b.id)}
                    className={`py-2 rounded-lg font-bold border transition ${
                      style.bgType === b.id
                        ? 'border-cyan-400 bg-cyan-500/20 text-cyan-300'
                        : 'border-slate-800 bg-slate-900 text-slate-400 hover:text-white'
                    }`}
                  >{b.label}</button>
                ))}
              </div>
            </Section>

            {(style.bgType === 'solid' || style.bgType === 'gradient') && (
              <Section label="Background Color 1">
                <div className="flex items-center gap-3">
                  <input type="color" value={style.bgColor1}
                    onChange={e => set('bgColor1', e.target.value)}
                    className="w-10 h-10 rounded-lg cursor-pointer" />
                  <span className="font-mono text-slate-300">{style.bgColor1}</span>
                </div>
                <ColorPresets colors={['#06b6d4','#9333ea','#ff2a85','#1d4ed8','#059669','#dc2626']}
                  active={style.bgColor1} onPick={c => set('bgColor1', c)} />
              </Section>
            )}

            {style.bgType === 'gradient' && (
              <Section label="Background Color 2">
                <div className="flex items-center gap-3">
                  <input type="color" value={style.bgColor2}
                    onChange={e => set('bgColor2', e.target.value)}
                    className="w-10 h-10 rounded-lg cursor-pointer" />
                  <span className="font-mono text-slate-300">{style.bgColor2}</span>
                </div>
                <ColorPresets colors={['#9333ea','#ec4899','#7c3aed','#0ea5e9','#10b981','#f59e0b']}
                  active={style.bgColor2} onPick={c => set('bgColor2', c)} />
              </Section>
            )}

            <Section label="Text Color">
              <div className="flex items-center gap-3">
                <input type="color" value={style.textColor}
                  onChange={e => set('textColor', e.target.value)}
                  className="w-10 h-10 rounded-lg cursor-pointer" />
                <span className="font-mono text-slate-300">{style.textColor}</span>
              </div>
              <ColorPresets colors={['#ffffff','#000000','#00f2fe','#c4b5fd','#f9fafb','#94a3b8']}
                active={style.textColor} onPick={c => set('textColor', c)} />
            </Section>

            <Section label="Glow Color">
              <div className="flex items-center gap-3">
                <input type="color" value={style.glowColor}
                  onChange={e => set('glowColor', e.target.value)}
                  className="w-10 h-10 rounded-lg cursor-pointer" />
                <span className="font-mono text-slate-300">{style.glowColor}</span>
              </div>
            </Section>

            <Section label={`Glow Intensity: ${style.glowIntensity}%`}>
              <input type="range" min="0" max="100" value={style.glowIntensity}
                onChange={e => set('glowIntensity', +e.target.value)}
                className="w-full accent-pink-400 cursor-pointer" />
            </Section>
          </>
        )}

        {/* ── MOTION TAB ── */}
        {activeTab === 'motion' && (
          <>
            <Section label="Hover Effect">
              <div className="grid grid-cols-1 gap-1.5">
                {HOVER_EFFECTS.map(h => (
                  <button key={h.id} onClick={() => set('hoverEffect', h.id)}
                    className={`py-2 px-3 text-left rounded-lg font-bold border transition ${
                      style.hoverEffect === h.id
                        ? 'border-cyan-400 bg-cyan-500/20 text-cyan-300'
                        : 'border-slate-800 bg-slate-900 text-slate-400 hover:text-white'
                    }`}
                  >{h.label}</button>
                ))}
              </div>
            </Section>

            <Section label="Entrance Animation">
              <div className="grid grid-cols-1 gap-1.5">
                {ENTRANCE_ANIMS.map(a => (
                  <button key={a.id} onClick={() => set('entranceAnim', a.id)}
                    className={`py-2 px-3 text-left rounded-lg font-bold border transition ${
                      style.entranceAnim === a.id
                        ? 'border-purple-400 bg-purple-500/20 text-purple-300'
                        : 'border-slate-800 bg-slate-900 text-slate-400 hover:text-white'
                    }`}
                  >{a.label}</button>
                ))}
              </div>
            </Section>
          </>
        )}

      </div>
    </div>
  );
}

function Section({ label, children }) {
  return (
    <div>
      <p className="text-[10px] uppercase tracking-widest text-slate-500 font-bold mb-2">{label}</p>
      <div className="space-y-2">{children}</div>
    </div>
  );
}

function ColorPresets({ colors, active, onPick }) {
  return (
    <div className="flex gap-2 mt-2 flex-wrap">
      {colors.map(c => (
        <button
          key={c}
          onClick={() => onPick(c)}
          title={c}
          style={{ backgroundColor: c }}
          className={`w-6 h-6 rounded-lg border-2 transition ${
            active === c ? 'border-white scale-110' : 'border-slate-700 hover:scale-105'
          }`}
        />
      ))}
    </div>
  );
}
