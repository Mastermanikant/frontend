import React, { useState } from 'react';
import { Copy, Check, Code2, Palette, Sparkles, FileText, Layers, Eye } from 'lucide-react';
import { COMPONENTS } from '../data/componentLibrary';

export default function OutputPanel({ componentId, style }) {
  const [copiedKey, setCopiedKey] = useState(null);
  const [activeTab, setActiveTab] = useState('spec'); // 'spec' | 'deconstruct'
  const comp = COMPONENTS.find(c => c.id === componentId);

  const copy = (text, key) => {
    navigator.clipboard.writeText(text);
    setCopiedKey(key);
    setTimeout(() => setCopiedKey(null), 2000);
  };

  if (!comp) return (
    <div className="h-full flex flex-col items-center justify-center text-center px-8 select-none">
      <div className="text-4xl mb-3">📋</div>
      <p className="text-sm font-bold text-white mb-1">Developer Spec Panel</p>
      <p className="text-xs text-slate-500">Component चुनें — उसकी पूरी परतें (Layers), CSS &amp; AI Prompt यहाँ दिखेगा।</p>
    </div>
  );

  // Generate CSS tokens
  const r = style.borderRadius === 9999 ? '9999px' : `${style.borderRadius}px`;
  const bg = style.bgType === 'gradient'
    ? `linear-gradient(135deg, ${style.bgColor1}, ${style.bgColor2})`
    : style.bgType === 'solid' ? style.bgColor1
    : style.bgType === 'glass' ? 'rgba(255,255,255,0.08)' : 'transparent';

  const cssSnippet = `.component {
  border-radius: ${r};
  background: ${bg};
  color: ${style.textColor};${style.borderStyle !== 'none' ? `\n  border: ${style.borderWidth}px ${style.borderStyle === 'laserSpin' ? 'solid' : style.borderStyle} ${style.borderColor};` : ''}${style.bgType === 'glass' ? '\n  backdrop-filter: blur(16px);' : ''}${style.shadowType === 'neonGlow' ? `\n  box-shadow: 0 0 20px ${style.glowColor}66;` : ''}
}`;

  const fullSpec = `COMPONENT: ${comp.name}
CATEGORY: ${comp.category}

EFFECTS USED:
${comp.effects?.map(e => `  • ${e}`).join('\n')}

STYLE CONFIG:
  Border Radius: ${r}
  Background: ${bg}
  Text Color: ${style.textColor}${style.borderStyle !== 'none' ? `\n  Border: ${style.borderWidth}px ${style.borderStyle} ${style.borderColor}` : ''}${style.shadowType !== 'none' ? `\n  Shadow: ${style.shadowType}` : ''}${style.hoverEffect !== 'none' ? `\n  Hover: ${style.hoverEffect}` : ''}

AI PROMPT:
${comp.aiPrompt}`;

  return (
    <div className="flex flex-col h-full overflow-y-auto select-none">
      {/* Header Tabs */}
      <div className="p-3 border-b border-slate-800 shrink-0 bg-slate-950/60">
        <h3 className="text-xs font-black text-white truncate">{comp.name}</h3>
        <p className="text-[10px] text-slate-500 capitalize">{comp.category}</p>

        <div className="flex gap-1 mt-2 bg-slate-900 p-1 rounded-xl border border-slate-800">
          <button
            onClick={() => setActiveTab('spec')}
            className={`flex-1 py-1 text-[10px] font-bold rounded-lg transition flex items-center justify-center gap-1 ${
              activeTab === 'spec' ? 'bg-cyan-500/20 text-cyan-300 border border-cyan-500/40' : 'text-slate-500 hover:text-white'
            }`}
          >
            <FileText className="w-3 h-3" /> Spec
          </button>
          <button
            onClick={() => setActiveTab('deconstruct')}
            className={`flex-1 py-1 text-[10px] font-bold rounded-lg transition flex items-center justify-center gap-1 ${
              activeTab === 'deconstruct' ? 'bg-purple-500/20 text-purple-300 border border-purple-500/40' : 'text-slate-500 hover:text-white'
            }`}
          >
            <Layers className="w-3 h-3" /> Deconstruct
          </button>
        </div>
      </div>

      <div className="p-3 space-y-4 flex-1">

        {/* ── TAB 1: SPEC & EXPORT ── */}
        {activeTab === 'spec' && (
          <>
            {/* Effects Used */}
            <Section icon={<Sparkles className="w-3.5 h-3.5" />} label="इस्तेमाल हुए इफ़ेक्ट्स">
              <div className="flex flex-wrap gap-1.5">
                {comp.effects?.map((eff, i) => (
                  <span key={i} className="text-[10px] font-bold px-2 py-0.5 rounded-md bg-purple-500/20 text-purple-300 border border-purple-500/25">
                    ✨ {eff}
                  </span>
                ))}
              </div>
            </Section>

            {/* Color Tokens */}
            <Section icon={<Palette className="w-3.5 h-3.5" />} label="रंग टोकन्स (Tokens)">
              <div className="space-y-1 bg-slate-950 p-2.5 rounded-xl border border-slate-800">
                {[
                  { label: 'Primary', value: style.bgColor1 },
                  { label: 'Accent',  value: style.bgColor2 },
                  { label: 'Text',    value: style.textColor },
                  { label: 'Glow',   value: style.glowColor },
                ].map(({ label, value }) => (
                  <div key={label} className="flex items-center justify-between text-[11px]">
                    <span className="text-slate-500 font-medium">{label}</span>
                    <div className="flex items-center gap-1.5">
                      <div className="w-3.5 h-3.5 rounded border border-slate-700" style={{ backgroundColor: value }} />
                      <span className="font-mono text-slate-300 text-[10px]">{value}</span>
                    </div>
                  </div>
                ))}
              </div>
              <CopyBtn label="Copy Tokens" text={`--color-primary: ${style.bgColor1};\n--color-accent: ${style.bgColor2};\n--text: ${style.textColor};\n--glow: ${style.glowColor};`} copyKey="tokens" copiedKey={copiedKey} onCopy={copy} />
            </Section>

            {/* CSS Snippet */}
            <Section icon={<Code2 className="w-3.5 h-3.5" />} label="मुख्य CSS Code">
              <pre className="text-[10px] font-mono text-slate-300 bg-slate-950 border border-slate-800 rounded-xl p-2.5 whitespace-pre-wrap leading-relaxed">
                {cssSnippet}
              </pre>
              <CopyBtn label="Copy CSS" text={cssSnippet} copyKey="css" copiedKey={copiedKey} onCopy={copy} />
            </Section>

            {/* AI Prompt */}
            <Section icon={<Sparkles className="w-3.5 h-3.5" />} label="🤖 AI Prompt (Dev को दें)">
              <p className="text-[10px] text-slate-300 bg-slate-950 border border-purple-500/30 rounded-xl p-2.5 leading-relaxed">
                {comp.aiPrompt}
              </p>
              <CopyBtn label="Copy AI Prompt" text={comp.aiPrompt} copyKey="prompt" copiedKey={copiedKey} onCopy={copy} variant="purple" />
            </Section>

            {/* Copy All */}
            <CopyBtn label="📋 Copy Full Spec Sheet" text={fullSpec} copyKey="full" copiedKey={copiedKey} onCopy={copy} variant="green" />
          </>
        )}

        {/* ── TAB 2: DECONSTRUCT (यह किससे मिलकर बना है) ── */}
        {activeTab === 'deconstruct' && (
          <div className="space-y-3">
            <p className="text-[10px] text-slate-400 bg-purple-500/10 border border-purple-500/20 rounded-xl p-2.5 leading-relaxed">
              🔍 <strong>Component Layers Breakdown:</strong> इस component को 5 अलग-अलग परतों से मिलकर बनाया गया है:
            </p>

            <LayerCard
              num="1"
              title="Outer Frame & Position"
              tech="CSS Box-Sizing & Flex/Grid"
              detail={`border-radius: ${r}; overflow: hidden; position: relative;`}
            />
            <LayerCard
              num="2"
              title="Surface & Fill Layer"
              tech={style.bgType.toUpperCase()}
              detail={`background: ${bg}; ${style.bgType==='glass'?'backdrop-filter: blur(16px)':''}`}
            />
            <LayerCard
              num="3"
              title="Border & Glow Stroke"
              tech={style.borderStyle}
              detail={style.borderStyle !== 'none' ? `border: ${style.borderWidth}px ${style.borderStyle} ${style.borderColor}` : 'border: none;'}
            />
            <LayerCard
              num="4"
              title="Typography & Content"
              tech="Font & Color Tokens"
              detail={`color: ${style.textColor}; font-weight: 700; text-align: center;`}
            />
            <LayerCard
              num="5"
              title="Micro-interaction & Physics"
              tech={style.hoverEffect}
              detail={`Hover: ${style.hoverEffect}; Shadow: ${style.shadowType}; Entrance: ${style.entranceAnim}`}
            />
          </div>
        )}

      </div>
    </div>
  );
}

function LayerCard({ num, title, tech, detail }) {
  return (
    <div className="p-2.5 bg-slate-950 border border-slate-800 rounded-xl space-y-1">
      <div className="flex items-center justify-between">
        <span className="text-[10px] font-black px-1.5 py-0.5 rounded bg-cyan-500/20 text-cyan-300 border border-cyan-500/30">
          Layer {num}
        </span>
        <span className="text-[9px] font-mono text-purple-400 font-bold">{tech}</span>
      </div>
      <p className="text-[11px] font-bold text-slate-200">{title}</p>
      <p className="text-[9px] font-mono text-slate-500 break-all">{detail}</p>
    </div>
  );
}

function Section({ icon, label, children }) {
  return (
    <div className="space-y-2">
      <div className="flex items-center gap-1.5 text-[10px] font-black uppercase tracking-widest text-slate-500">
        {icon}
        <span>{label}</span>
      </div>
      {children}
    </div>
  );
}

function CopyBtn({ label, text, copyKey, copiedKey, onCopy, variant = 'cyan' }) {
  const isCopied = copiedKey === copyKey;
  const variants = {
    cyan:   'bg-cyan-500/10 text-cyan-300 border-cyan-500/30 hover:bg-cyan-500/20',
    purple: 'bg-purple-500/10 text-purple-300 border-purple-500/30 hover:bg-purple-500/20',
    green:  'bg-green-500/10 text-green-300 border-green-500/30 hover:bg-green-500/20',
  };
  return (
    <button
      onClick={() => onCopy(text, copyKey)}
      className={`w-full mt-1 py-2 rounded-xl border text-[11px] font-bold flex items-center justify-center gap-1.5 transition ${variants[variant]}`}
    >
      {isCopied ? <Check className="w-3.5 h-3.5" /> : <Copy className="w-3.5 h-3.5" />}
      {isCopied ? 'Copied!' : label}
    </button>
  );
}
