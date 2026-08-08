import React, { useState } from 'react';
import { Copy, Check, Code2, Palette, Sparkles, FileText, Layers, Eye } from 'lucide-react';
import { COMPONENTS } from '../data/componentLibrary';

export default function OutputPanel({ elements, selectedElementId }) {
  const [copiedKey, setCopiedKey] = useState(null);
  const [activeTab, setActiveTab] = useState('spec'); // 'spec' | 'deconstruct'

  const copy = (text, key) => {
    navigator.clipboard.writeText(text);
    setCopiedKey(key);
    setTimeout(() => setCopiedKey(null), 2000);
  };

  const selectedElement = elements.find(el => el.id === selectedElementId);
  const isCanvasMode = !selectedElement;

  // Generate combined canvas code
  const generateCanvasCode = () => {
    let jsx = '<div className="relative w-full h-full">\n';
    
    elements.forEach(el => {
      if (el.type === 'text') {
        jsx += `  <div style={{ position: 'absolute', left: ${el.x}, top: ${el.y}, color: '${el.style.color}', fontSize: '${el.style.fontSize}', fontFamily: '${el.style.fontFamily}', fontWeight: '${el.style.fontWeight}' }}>\n`;
        jsx += `    ${el.text}\n`;
        jsx += `  </div>\n`;
      } else if (el.type === 'button') {
        const bg = el.style.bgType === 'gradient' ? `linear-gradient(135deg, ${el.style.bgColor1}, ${el.style.bgColor2})` : el.style.bgColor1;
        jsx += `  <button style={{ position: 'absolute', left: ${el.x}, top: ${el.y}, borderRadius: '${el.style.borderRadius}px', background: '${bg}', color: '${el.style.textColor}' }} className="px-8 py-3.5 font-bold">\n`;
        jsx += `    ${el.text}\n`;
        jsx += `  </button>\n`;
      }
    });

    jsx += '</div>';
    return jsx;
  };

  if (isCanvasMode || elements.length === 0) {
    return (
      <div className="flex flex-col h-full overflow-y-auto select-none">
        <div className="p-4 border-b border-slate-800 shrink-0 bg-slate-950/60">
          <h3 className="text-xs font-black text-white truncate">Full Canvas Export</h3>
          <p className="text-[10px] text-slate-500">Export the entire composition.</p>
        </div>
        <div className="p-4 space-y-4">
          <Section icon={<Code2 className="w-3.5 h-3.5" />} label="Combined React Canvas Code">
            <pre className="text-[10px] font-mono text-cyan-300 bg-slate-950 border border-slate-800 rounded-xl p-3 overflow-x-auto whitespace-pre-wrap leading-relaxed max-h-80">
              {generateCanvasCode()}
            </pre>
            <CopyBtn label="Copy Full Canvas Code" text={generateCanvasCode()} copyKey="canvas" copiedKey={copiedKey} onCopy={copy} />
          </Section>
        </div>
      </div>
    );
  }

  // ELEMENT SPECIFIC RENDER
  const style = selectedElement.style;
  const comp = selectedElement.type === 'button' ? COMPONENTS.find(c => c.id === selectedElement.componentId) : null;
  const name = comp ? comp.name : 'Text Box';
  const category = selectedElement.type;

  // Generate CSS tokens
  const r = style.borderRadius === 9999 ? '9999px' : `${style.borderRadius}px`;
  const bg = style.bgType === 'gradient'
    ? `linear-gradient(135deg, ${style.bgColor1}, ${style.bgColor2})`
    : style.bgType === 'solid' ? style.bgColor1
    : style.bgType === 'glass' ? 'rgba(255,255,255,0.08)' : 'transparent';

  const cssSnippet = selectedElement.type === 'text' ? `.text-element {\n  color: ${style.color};\n  font-size: ${style.fontSize};\n  font-family: '${style.fontFamily}';\n}` : `.component {
  border-radius: ${r};
  background: ${bg};
  color: ${style.textColor};${style.borderStyle && style.borderStyle !== 'none' ? `\n  border: ${style.borderWidth}px ${style.borderStyle === 'laserSpin' ? 'solid' : style.borderStyle} ${style.borderColor};` : ''}${style.bgType === 'glass' ? '\n  backdrop-filter: blur(16px);' : ''}
}`;

  return (
    <div className="flex flex-col h-full overflow-y-auto select-none">
      {/* Header Tabs */}
      <div className="p-3 border-b border-slate-800 shrink-0 bg-slate-950/60">
        <h3 className="text-xs font-black text-white truncate">{name}</h3>
        <p className="text-[10px] text-slate-500 capitalize">{category}</p>

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
            {/* CSS Snippet */}
            <Section icon={<Code2 className="w-3.5 h-3.5" />} label="मुख्य CSS Code">
              <pre className="text-[10px] font-mono text-slate-300 bg-slate-950 border border-slate-800 rounded-xl p-2.5 whitespace-pre-wrap leading-relaxed">
                {cssSnippet}
              </pre>
              <CopyBtn label="Copy CSS" text={cssSnippet} copyKey="css" copiedKey={copiedKey} onCopy={copy} />
            </Section>

            {/* AI Prompt */}
            {comp && (
              <Section icon={<Sparkles className="w-3.5 h-3.5" />} label="🤖 AI Prompt (Dev को दें)">
                <p className="text-[10px] text-slate-300 bg-slate-950 border border-purple-500/30 rounded-xl p-2.5 leading-relaxed">
                  {comp.aiPrompt}
                </p>
                <CopyBtn label="Copy AI Prompt" text={comp.aiPrompt} copyKey="prompt" copiedKey={copiedKey} onCopy={copy} variant="purple" />
              </Section>
            )}
          </>
        )}

        {/* ── TAB 2: DECONSTRUCT (यह किससे मिलकर बना है) ── */}
        {activeTab === 'deconstruct' && selectedElement.type === 'button' && (
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
              tech={style.bgType?.toUpperCase() || 'SOLID'}
              detail={`background: ${bg};`}
            />
            <LayerCard
              num="3"
              title="Border & Glow Stroke"
              tech={style.borderStyle || 'none'}
              detail={style.borderStyle && style.borderStyle !== 'none' ? `border: ${style.borderWidth}px ${style.borderStyle} ${style.borderColor}` : 'border: none;'}
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
