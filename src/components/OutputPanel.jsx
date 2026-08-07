import React, { useState } from 'react';
import { Copy, Check, Code2, Palette, Sparkles, FileText } from 'lucide-react';
import { COMPONENTS } from '../data/componentLibrary';

export default function OutputPanel({ componentId, style }) {
  const [copiedKey, setCopiedKey] = useState(null);
  const comp = COMPONENTS.find(c => c.id === componentId);

  const copy = (text, key) => {
    navigator.clipboard.writeText(text);
    setCopiedKey(key);
    setTimeout(() => setCopiedKey(null), 2000);
  };

  if (!comp) return (
    <div className="h-full flex flex-col items-center justify-center text-center px-8">
      <div className="text-4xl mb-3">📋</div>
      <p className="text-sm text-slate-500">Component चुनने के बाद यहाँ आपका output दिखेगा।</p>
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
    <div className="flex flex-col h-full overflow-y-auto">
      {/* Header */}
      <div className="p-4 border-b border-slate-800 shrink-0">
        <h3 className="text-sm font-black text-white">{comp.name}</h3>
        <p className="text-[10px] text-slate-500 mt-0.5 capitalize">{comp.category}</p>
      </div>

      <div className="p-4 space-y-4 flex-1">

        {/* Effects Used */}
        <Section icon={<Sparkles className="w-3.5 h-3.5" />} label="इस्तेमाल हुए इफ़ेक्ट्स (Effects Used)">
          <div className="flex flex-wrap gap-1.5">
            {comp.effects?.map((eff, i) => (
              <span key={i} className="text-[10px] font-bold px-2 py-1 rounded-lg bg-purple-500/20 text-purple-300 border border-purple-500/25">
                ✨ {eff}
              </span>
            ))}
          </div>
        </Section>

        {/* Color Tokens */}
        <Section icon={<Palette className="w-3.5 h-3.5" />} label="रंग टोकन्स (Color Tokens)">
          <div className="space-y-1.5">
            {[
              { label: 'Color 1', value: style.bgColor1 },
              { label: 'Color 2', value: style.bgColor2 },
              { label: 'Text',    value: style.textColor },
              { label: 'Glow',   value: style.glowColor },
              { label: 'Border', value: style.borderStyle !== 'none' ? style.borderColor : 'none' },
            ].map(({ label, value }) => value !== 'none' && (
              <div key={label} className="flex items-center justify-between text-xs">
                <span className="text-slate-500 font-medium">{label}</span>
                <div className="flex items-center gap-2">
                  <div className="w-4 h-4 rounded border border-slate-700" style={{ backgroundColor: value }} />
                  <span className="font-mono text-slate-300">{value}</span>
                </div>
              </div>
            ))}
            <CopyBtn label="Copy Tokens" text={`--color-1: ${style.bgColor1};\n--color-2: ${style.bgColor2};\n--text: ${style.textColor};\n--glow: ${style.glowColor};`} copyKey="tokens" copiedKey={copiedKey} onCopy={copy} />
          </div>
        </Section>

        {/* CSS Snippet */}
        <Section icon={<Code2 className="w-3.5 h-3.5" />} label="मुख्य CSS (Key Properties)">
          <pre className="text-[10px] font-mono text-slate-300 bg-slate-950 border border-slate-800 rounded-xl p-3 whitespace-pre-wrap leading-relaxed">
            {cssSnippet}
          </pre>
          <CopyBtn label="Copy CSS" text={cssSnippet} copyKey="css" copiedKey={copiedKey} onCopy={copy} />
        </Section>

        {/* AI Prompt */}
        <Section icon={<Sparkles className="w-3.5 h-3.5" />} label="🤖 AI Vibe-Prompt (Developer को दें)">
          <p className="text-[11px] text-slate-300 bg-slate-950 border border-purple-500/30 rounded-xl p-3 leading-relaxed">
            {comp.aiPrompt}
          </p>
          <CopyBtn label="Copy AI Prompt" text={comp.aiPrompt} copyKey="prompt" copiedKey={copiedKey} onCopy={copy} variant="purple" />
        </Section>

        {/* Full Spec — Copy All */}
        <Section icon={<FileText className="w-3.5 h-3.5" />} label="📋 पूरा Spec (Developer के लिए)">
          <p className="text-[10px] text-slate-500">
            Component नाम, इफ़ेक्ट्स लिस्ट, CSS tokens, और AI prompt — सब एक साथ।
          </p>
          <CopyBtn label="📋 Copy Full Spec" text={fullSpec} copyKey="full" copiedKey={copiedKey} onCopy={copy} variant="green" />
        </Section>

      </div>
    </div>
  );
}

function Section({ icon, label, children }) {
  return (
    <div className="space-y-2.5">
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
