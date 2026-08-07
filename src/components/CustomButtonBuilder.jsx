import React, { useState } from 'react';
import { Sparkles, Copy, Check, Sliders, Zap, Layers, RefreshCw, Wand2 } from 'lucide-react';

export default function CustomButtonBuilder() {
  const [btnText, setBtnText] = useState('Custom Vibe Button');
  const [btnStyle, setBtnStyle] = useState('gradient'); // 'gradient', 'glass', 'neumorphic', 'cyberpunk', 'laserBorder'
  const [borderEffect, setBorderEffect] = useState('laser'); // 'none', 'laser', 'glowRing', 'dashed'
  const [hoverAnimation, setHoverAnimation] = useState('shimmer'); // 'none', 'shimmer', 'bounce', 'magnetic'
  const [borderRadius, setBorderRadius] = useState(16);
  const [glowIntensity, setGlowIntensity] = useState(50);
  const [copied, setCopied] = useState(false);

  // Generate CSS Class Specs based on controls
  const getButtonClass = () => {
    let classes = 'px-6 py-3 font-bold text-sm transition-all duration-300 relative overflow-hidden inline-flex items-center gap-2 ';
    
    if (btnStyle === 'gradient') classes += 'bg-gradient-to-r from-cyan-500 via-purple-600 to-pink-500 text-white ';
    if (btnStyle === 'glass') classes += 'glass-panel border-cyan-400/50 text-cyan-300 backdrop-blur-md ';
    if (btnStyle === 'neumorphic') classes += 'bg-[#1a1d24] text-cyan-400 shadow-[6px_6px_14px_#111318,-6px_-6px_14px_#232730] ';
    if (btnStyle === 'cyberpunk') classes += 'bg-cyan-400 text-black font-black uppercase tracking-widest border-2 border-yellow-300 shadow-[4px_4px_0px_#ff2a85] ';

    if (hoverAnimation === 'shimmer') classes += 'shiny-btn ';
    if (hoverAnimation === 'bounce') classes += 'hover:-translate-y-1 hover:scale-105 ';

    return classes;
  };

  const getVibePrompt = () => {
    return `Create a custom ${btnStyle} button with text "${btnText}", border radius ${borderRadius}px, ${borderEffect} border glow effect, and ${hoverAnimation} hover animation. Tech Stack: React + Tailwind CSS.`;
  };

  const handleCopyCode = () => {
    const textToCopy = `/* Button Configuration */\nStyle: ${btnStyle}\nEffects Used: ${borderEffect} border, ${hoverAnimation} animation, ${glowIntensity}% glow\nAI Vibe Prompt:\n${getVibePrompt()}`;
    navigator.clipboard.writeText(textToCopy);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <div className="glass-panel p-6 border-purple-500/30 space-y-6">
      <div className="flex items-center justify-between border-b border-slate-800 pb-4">
        <div>
          <span className="text-[10px] font-bold text-cyan-400 uppercase tracking-widest bg-cyan-500/10 px-2.5 py-1 rounded-full border border-cyan-500/20">
            Interactive Studio Tool
          </span>
          <h2 className="text-xl sm:text-2xl font-black text-white font-heading mt-1">
            🎨 Custom Button Builder Studio (मिक्स एंड मैच)
          </h2>
          <p className="text-xs text-slate-400 mt-0.5">
            लेफ्ट पैनल से अलग-अलग इफ़ेक्ट्स चुनें और अपना मनपसंद मिक्स बटन तैयार करके कोड/प्रोम्प्ट कॉपी करें!
          </p>
        </div>

        <button
          onClick={handleCopyCode}
          className="px-4 py-2 rounded-xl bg-gradient-to-r from-purple-500 to-pink-500 text-white font-bold text-xs flex items-center gap-1.5 shadow-lg shadow-purple-500/25"
        >
          {copied ? <Check className="w-4 h-4 text-green-300" /> : <Copy className="w-4 h-4" />}
          कस्टम बटन कोड कॉपी करें
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Left Builder Controls */}
        <div className="space-y-4 bg-slate-950/60 p-5 rounded-2xl border border-slate-800 text-xs">
          
          {/* Button Text */}
          <div>
            <label className="text-slate-300 font-bold block mb-1">1. बटन टेक्स्ट (Button Label):</label>
            <input
              type="text"
              value={btnText}
              onChange={(e) => setBtnText(e.target.value)}
              className="w-full px-3 py-2 rounded-xl bg-slate-900 border border-slate-700 text-white text-xs focus:border-cyan-400 focus:outline-none"
            />
          </div>

          {/* Base Style Option */}
          <div>
            <label className="text-slate-300 font-bold block mb-1">2. बेस यूआई स्टाइल (Base Theme Style):</label>
            <div className="grid grid-cols-2 gap-2">
              {[
                { id: 'gradient', name: 'Gradient Color' },
                { id: 'glass', name: 'Frosted Glass' },
                { id: 'neumorphic', name: '3D Neumorphic' },
                { id: 'cyberpunk', name: 'Cyberpunk Neon' },
              ].map((s) => (
                <button
                  key={s.id}
                  onClick={() => setBtnStyle(s.id)}
                  className={`p-2 rounded-xl text-left border transition ${
                    btnStyle === s.id
                      ? 'bg-cyan-500/20 text-cyan-300 border-cyan-400 font-bold'
                      : 'bg-slate-900 text-slate-400 border-slate-800 hover:text-white'
                  }`}
                >
                  {s.name}
                </button>
              ))}
            </div>
          </div>

          {/* Border Effects Option */}
          <div>
            <label className="text-slate-300 font-bold block mb-1">3. सीमा इफ़ेक्ट (Border Effects):</label>
            <div className="grid grid-cols-3 gap-2">
              {[
                { id: 'none', name: 'Normal Border' },
                { id: 'laser', name: 'Rotating Laser' },
                { id: 'glowRing', name: 'Pulse Glow Ring' },
              ].map((b) => (
                <button
                  key={b.id}
                  onClick={() => setBorderEffect(b.id)}
                  className={`p-2 rounded-xl text-center border transition ${
                    borderEffect === b.id
                      ? 'bg-purple-500/20 text-purple-300 border-purple-400 font-bold'
                      : 'bg-slate-900 text-slate-400 border-slate-800 hover:text-white'
                  }`}
                >
                  {b.name}
                </button>
              ))}
            </div>
          </div>

          {/* Hover Animation Option */}
          <div>
            <label className="text-slate-300 font-bold block mb-1">4. होवर एनीमेशन (Hover Motion):</label>
            <div className="grid grid-cols-3 gap-2">
              {[
                { id: 'shimmer', name: 'Light Shimmer' },
                { id: 'bounce', name: 'Spring Scale' },
                { id: 'none', name: 'Static Hover' },
              ].map((h) => (
                <button
                  key={h.id}
                  onClick={() => setHoverAnimation(h.id)}
                  className={`p-2 rounded-xl text-center border transition ${
                    hoverAnimation === h.id
                      ? 'bg-pink-500/20 text-pink-300 border-pink-400 font-bold'
                      : 'bg-slate-900 text-slate-400 border-slate-800 hover:text-white'
                  }`}
                >
                  {h.name}
                </button>
              ))}
            </div>
          </div>

          {/* Border Radius Slider */}
          <div>
            <div className="flex justify-between text-slate-300 font-bold mb-1">
              <span>5. कोने की गोलाई (Border Radius):</span>
              <span className="text-cyan-400 font-mono">{borderRadius}px</span>
            </div>
            <input
              type="range"
              min="4"
              max="32"
              value={borderRadius}
              onChange={(e) => setBorderRadius(parseInt(e.target.value))}
              className="w-full accent-cyan-400 cursor-pointer"
            />
          </div>

        </div>

        {/* Right Live Stage & Code Inspection */}
        <div className="flex flex-col justify-between space-y-4">
          <div className="p-8 rounded-2xl bg-slate-950 border border-slate-800 min-h-[180px] flex items-center justify-center relative overflow-hidden">
            <span className="absolute top-3 left-3 text-[10px] text-slate-500 font-mono flex items-center gap-1">
              <Sparkles className="w-3 h-3 text-cyan-400" /> LIVE STAGE PREVIEW
            </span>

            {/* Custom Button Render Output */}
            {borderEffect === 'laser' ? (
              <div className="animated-border-box" style={{ borderRadius: `${borderRadius}px` }}>
                <button
                  className={getButtonClass()}
                  style={{ borderRadius: `${borderRadius - 2}px` }}
                >
                  {btnText} ✨
                </button>
              </div>
            ) : borderEffect === 'glowRing' ? (
              <div className="relative">
                <div className="absolute -inset-1 rounded-full bg-cyan-400/40 blur-md animate-pulse"></div>
                <button className={getButtonClass()} style={{ borderRadius: `${borderRadius}px` }}>
                  {btnText} ⚡
                </button>
              </div>
            ) : (
              <button className={getButtonClass()} style={{ borderRadius: `${borderRadius}px` }}>
                {btnText}
              </button>
            )}
          </div>

          {/* Applied Effects Breakdown */}
          <div className="p-4 rounded-xl bg-slate-900/80 border border-slate-800 text-xs space-y-2">
            <span className="font-bold text-cyan-400 flex items-center gap-1">
              🛠️ इस्तेमाल किए गए इफ़ेक्ट्स (Effects Breakdown):
            </span>
            <div className="flex flex-wrap gap-2 pt-1">
              <span className="px-2 py-1 rounded bg-slate-800 text-slate-300 border border-slate-700">Style: {btnStyle}</span>
              <span className="px-2 py-1 rounded bg-purple-500/20 text-purple-300 border border-purple-500/30">Border: {borderEffect}</span>
              <span className="px-2 py-1 rounded bg-pink-500/20 text-pink-300 border border-pink-500/30">Motion: {hoverAnimation}</span>
              <span className="px-2 py-1 rounded bg-cyan-500/20 text-cyan-300 border border-cyan-500/30">Radius: {borderRadius}px</span>
            </div>
          </div>

          {/* Generated AI Vibe Prompt */}
          <div className="p-4 rounded-xl bg-slate-950 border border-purple-500/30 text-xs">
            <span className="font-bold text-purple-400 block mb-1">🤖 AI को क्या बोलकर कोड करवाएं (Generated Prompt):</span>
            <pre className="font-mono text-[11px] text-slate-300 whitespace-pre-wrap bg-slate-900 p-2.5 rounded-lg border border-slate-800">
              {getVibePrompt()}
            </pre>
          </div>
        </div>
      </div>
    </div>
  );
}
