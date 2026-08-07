import React, { useState } from 'react';
import { 
  Sparkles, Layers, Grid, Type, Palette, MousePointer, Code2, Wand2, Search, Play, Check, Copy, Sliders, Zap, RefreshCw, Command, ChevronRight, Hammer
} from 'lucide-react';
import { categories, frontendTerms, popularFonts, buttonTypes, textEffects, backgroundThemes, animationGallery } from './data/frontendKnowledge';
import BackgroundCanvas from './components/BackgroundCanvas';
import SaaSInteractiveShowcase from './components/SaaSInteractiveShowcase';
import CustomButtonBuilder from './components/CustomButtonBuilder';

export default function App() {
  const [activeNav, setActiveNav] = useState('buttonBuilder'); // Default to Custom Button Builder Studio!
  const [selectedTerm, setSelectedTerm] = useState(frontendTerms[0]);
  const [activeTheme, setActiveTheme] = useState('aurora');
  const [searchQuery, setSearchQuery] = useState('');
  const [copiedId, setCopiedId] = useState(null);

  // Background Slider States
  const [bgSpeed, setBgSpeed] = useState(1);
  const [bgDensity, setBgDensity] = useState(50);
  const [bgGlow, setBgGlow] = useState(60);

  // Trigger Animation Counter
  const [animKey, setAnimKey] = useState(0);

  const handleCopyPrompt = (promptText, id) => {
    navigator.clipboard.writeText(promptText);
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 2500);
  };

  const filteredTerms = frontendTerms.filter(t => 
    t.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    t.shortDesc.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className={`bg-theme-${activeTheme} text-slate-100 min-h-screen relative font-sans selection:bg-cyan-500 selection:text-black flex flex-col`}>
      {/* Dynamic Background Canvas */}
      <BackgroundCanvas theme={activeTheme} speed={bgSpeed} density={bgDensity} glowIntensity={bgGlow} />

      {/* Top Header */}
      <header className="sticky top-0 z-40 bg-slate-950/80 backdrop-blur-md border-b border-slate-800 px-6 py-3 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-cyan-500 to-purple-600 flex items-center justify-center shadow-lg shadow-cyan-500/20">
            <Sparkles className="w-5 h-5 text-white" />
          </div>
          <div>
            <h1 className="text-base font-black font-heading gradient-text">
              Vibe UI Button Creator Studio
            </h1>
            <p className="text-[10px] text-slate-400">लेफ्ट साइड में मिक्स करें &rarr; राइट साइड में लाइव बटन और कोड पाएं!</p>
          </div>
        </div>

        {/* Global Controls: Theme Selector */}
        <div className="flex items-center gap-3">
          <div className="flex items-center gap-1.5 bg-slate-900/90 p-1.5 rounded-xl border border-slate-800 text-xs">
            <span className="text-slate-400 font-bold px-1">थीम:</span>
            {backgroundThemes.slice(0, 4).map((t) => (
              <button
                key={t.id}
                onClick={() => setActiveTheme(t.id)}
                className={`px-2.5 py-1 rounded-lg font-bold transition ${
                  activeTheme === t.id ? 'bg-cyan-500 text-black' : 'text-slate-400 hover:text-white'
                }`}
              >
                {t.name.split(' ')[1]}
              </button>
            ))}
          </div>
        </div>
      </header>

      {/* DUAL COLUMN SPLIT-PANE LAYOUT */}
      <div className="flex-1 flex flex-col md:flex-row overflow-hidden relative z-10">
        
        {/* LEFT PANEL: NAVIGATION & CONTROLS (35% Width) */}
        <aside className="w-full md:w-[360px] lg:w-[400px] border-r border-slate-800/80 bg-slate-950/70 backdrop-blur-xl flex flex-col h-[calc(100vh-57px)] overflow-y-auto">
          
          {/* Main Navigation Menu */}
          <div className="p-4 border-b border-slate-800 space-y-1">
            <span className="text-[10px] font-bold text-slate-500 uppercase tracking-widest px-2">टूल से चुनें (Studio Menu)</span>
            {[
              { id: 'buttonBuilder', label: '🎨 Custom Button Builder Studio', icon: Hammer },
              { id: 'buttons', label: '🔘 10+ बटन गैलरी (विस्तृत इफ़ेक्ट्स)', icon: MousePointer },
              { id: 'saasShowcase', label: '🚀 असली SaaS कॉम्पोनेंट्स', icon: Sparkles },
              { id: 'animations', label: '🎬 100% लाइव एनीमेशन गैलरी', icon: Zap },
              { id: 'textEffects', label: '✨ टेक्स्ट व नियॉन इफ़ेक्ट्स', icon: Wand2 },
              { id: 'fonts', label: '🔤 कैनवा स्टाइल फोंट्स', icon: Type },
              { id: 'terms', label: '🧠 30+ UI थ्योरी गाइड', icon: Layers },
            ].map((nav) => {
              const Icon = nav.icon;
              return (
                <button
                  key={nav.id}
                  onClick={() => setActiveNav(nav.id)}
                  className={`w-full flex items-center justify-between p-3 rounded-xl text-xs font-bold transition ${
                    activeNav === nav.id
                      ? 'bg-gradient-to-r from-cyan-500/20 to-purple-500/20 text-cyan-300 border border-cyan-500/40'
                      : 'text-slate-400 hover:bg-slate-900 hover:text-slate-200'
                  }`}
                >
                  <span className="flex items-center gap-2.5">
                    <Icon className="w-4 h-4 text-cyan-400" /> {nav.label}
                  </span>
                  <ChevronRight className="w-3.5 h-3.5 text-slate-600" />
                </button>
              );
            })}
          </div>

          {/* Interactive Background Sliders Panel */}
          <div className="p-4 border-b border-slate-800 bg-slate-900/40">
            <span className="text-[10px] font-bold text-cyan-400 uppercase tracking-widest flex items-center gap-1.5 mb-3">
              <Sliders className="w-3.5 h-3.5" /> बैकग्राउंड कंट्रोल स्लाइडर्स (Live)
            </span>
            <div className="space-y-3 text-xs">
              <div className="flex items-center justify-between">
                <span className="text-slate-400">गति (Speed):</span>
                <input
                  type="range"
                  min="0.2"
                  max="3"
                  step="0.1"
                  value={bgSpeed}
                  onChange={(e) => setBgSpeed(parseFloat(e.target.value))}
                  className="w-28 accent-cyan-400 cursor-pointer"
                />
                <span className="text-cyan-400 font-mono w-8 text-right">{bgSpeed}x</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-slate-400">घनत्व (Density):</span>
                <input
                  type="range"
                  min="10"
                  max="100"
                  value={bgDensity}
                  onChange={(e) => setBgDensity(parseInt(e.target.value))}
                  className="w-28 accent-purple-400 cursor-pointer"
                />
                <span className="text-purple-400 font-mono w-8 text-right">{bgDensity}%</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-slate-400">चमक (Glow):</span>
                <input
                  type="range"
                  min="10"
                  max="100"
                  value={bgGlow}
                  onChange={(e) => setBgGlow(parseInt(e.target.value))}
                  className="w-28 accent-pink-400 cursor-pointer"
                />
                <span className="text-pink-400 font-mono w-8 text-right">{bgGlow}%</span>
              </div>
            </div>
          </div>

          {/* Left Sub-list selection when 'terms' tab is active */}
          {activeNav === 'terms' && (
            <div className="p-4 space-y-2">
              <input
                type="text"
                placeholder="टर्म खोजें..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full px-3 py-2 rounded-xl bg-slate-900 border border-slate-800 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-cyan-500 mb-2"
              />
              <div className="space-y-1">
                {filteredTerms.map((t) => (
                  <button
                    key={t.id}
                    onClick={() => setSelectedTerm(t)}
                    className={`w-full text-left p-2.5 rounded-lg text-xs font-medium transition ${
                      selectedTerm?.id === t.id
                        ? 'bg-cyan-500/20 text-cyan-300 border border-cyan-500/40'
                        : 'text-slate-400 hover:bg-slate-900 hover:text-slate-200'
                    }`}
                  >
                    {t.title}
                  </button>
                ))}
              </div>
            </div>
          )}

        </aside>

        {/* RIGHT PANEL: REAL-TIME PREVIEW STAGE (65% Width) */}
        <main className="flex-1 p-6 md:p-8 h-[calc(100vh-57px)] overflow-y-auto">
          
          {/* TAB 1: CUSTOM BUTTON BUILDER STUDIO */}
          {activeNav === 'buttonBuilder' && (
            <CustomButtonBuilder />
          )}

          {/* TAB 2: BUTTONS GALLERY WITH EXPLICIT EFFECTS BREAKDOWN */}
          {activeNav === 'buttons' && (
            <div className="space-y-6">
              <div>
                <h2 className="text-2xl font-bold text-white font-heading">🔘 आधुनिक 10+ बटन्स की विस्तृत गैलरी</h2>
                <p className="text-xs text-slate-400 mt-1">हर बटन के नीचे उसमें इस्तेमाल हुए सभी इफ़ेक्ट्स और तकनीकों का नाम स्पष्ट दिया गया है!</p>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                {buttonTypes.map((btn) => (
                  <div key={btn.id} className="glass-panel p-6 flex flex-col justify-between border-slate-800">
                    <div>
                      <h3 className="text-base font-bold text-white mb-1 font-heading">{btn.name}</h3>
                      <p className="text-xs text-slate-400 mb-3">{btn.desc}</p>
                      
                      {/* Explicit Effects Tag List */}
                      <div className="flex flex-wrap gap-1.5 mb-4">
                        {btn.effects?.map((eff, i) => (
                          <span key={i} className="text-[10px] font-bold px-2 py-0.5 rounded bg-purple-500/20 text-purple-300 border border-purple-500/30">
                            ✨ {eff}
                          </span>
                        ))}
                      </div>

                      {/* Button Live Stage */}
                      <div className="p-8 rounded-xl bg-slate-950 border border-slate-800 flex items-center justify-center min-h-[110px] mb-4">
                        {btn.demoType === 'shiny' && <button className="shiny-btn">Shiny Hover ✨</button>}
                        {btn.demoType === 'animatedBorder' && (
                          <div className="animated-border-box">
                            <button className="px-5 py-2.5 bg-slate-900 text-white rounded-xl font-bold text-xs">Laser Border Button</button>
                          </div>
                        )}
                        {btn.demoType === 'neumorphic' && (
                          <button className="px-6 py-3 rounded-xl font-bold text-xs text-cyan-400 bg-[#1a1d24] shadow-[4px_4px_10px_#111318,-4px_-4px_10px_#232730]">Neumorphic 3D</button>
                        )}
                        {btn.demoType === 'magnetic' && (
                          <button className="px-6 py-3 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 font-bold text-xs text-white shadow-lg hover:scale-110 transition">Magnetic Spring 🧲</button>
                        )}
                        {btn.demoType === 'cyberpunk' && (
                          <button className="px-6 py-2.5 bg-cyan-400 text-black font-black text-xs uppercase tracking-widest border-2 border-yellow-300 shadow-[4px_4px_0px_#ff2a85]">Cyber Cyberpunk</button>
                        )}
                        {btn.demoType === 'glass' && (
                          <button className="glass-panel px-6 py-3 border-cyan-400/40 text-cyan-300 font-bold text-xs">Glass Frosted</button>
                        )}
                        {btn.demoType === 'toggleTab' && (
                          <div className="flex items-center bg-slate-900 p-1 rounded-xl border border-slate-800">
                            <button className="px-4 py-1.5 rounded-lg bg-cyan-500 text-black font-bold text-xs">Option A</button>
                            <button className="px-4 py-1.5 text-slate-400 text-xs font-medium">Option B</button>
                          </div>
                        )}
                        {btn.demoType === 'laserPill' && (
                          <div className="animated-border-box rounded-full p-[2px]">
                            <button className="px-6 py-2 bg-slate-950 text-cyan-300 font-bold text-xs rounded-full">Glowing Pill</button>
                          </div>
                        )}
                        {btn.demoType === 'rippleClick' && (
                          <button className="px-6 py-3 rounded-xl bg-purple-600 text-white font-bold text-xs shadow-lg active:scale-95 transition">Liquid Ripple Click 💧</button>
                        )}
                        {btn.demoType === 'glowingPulse' && (
                          <div className="relative">
                            <div className="absolute -inset-1 rounded-full bg-pink-500/50 blur-md animate-ping"></div>
                            <button className="px-6 py-3 rounded-full bg-gradient-to-r from-pink-500 to-purple-600 text-white font-bold text-xs relative">Heartbeat Pulse</button>
                          </div>
                        )}
                      </div>
                    </div>

                    <button
                      onClick={() => handleCopyPrompt(btn.prompt, btn.id)}
                      className="w-full py-2 rounded-xl bg-purple-500/10 text-purple-300 border border-purple-500/30 text-xs font-bold flex items-center justify-center gap-1.5 hover:bg-purple-500/20"
                    >
                      {copiedId === btn.id ? <Check className="w-3.5 h-3.5 text-green-400" /> : <Copy className="w-3.5 h-3.5" />} Vibe Prompt कॉपी करें
                    </button>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* TAB 3: REAL SAAS SHOWCASE */}
          {activeNav === 'saasShowcase' && (
            <SaaSInteractiveShowcase />
          )}

          {/* TAB 4: LIVE ANIMATIONS GALLERY */}
          {activeNav === 'animations' && (
            <div className="space-y-6">
              <div className="flex items-center justify-between">
                <div>
                  <h2 className="text-2xl font-bold text-white font-heading">🎬 100% लाइव एनीमेशन लैब</h2>
                  <p className="text-xs text-slate-400 mt-0.5">लेफ्ट साइड से चुने गए सभी एनीमेशन्स राइट साइड में लाइव चल रहे हैं।</p>
                </div>
                <button
                  onClick={() => setAnimKey(k => k + 1)}
                  className="px-3.5 py-2 rounded-xl bg-cyan-500/20 text-cyan-300 border border-cyan-500/40 hover:bg-cyan-500/30 text-xs font-bold flex items-center gap-2 transition"
                >
                  <RefreshCw className="w-3.5 h-3.5 animate-spin" /> री-ट्रिगर
                </button>
              </div>

              <div key={animKey} className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                {animationGallery.map((anim) => (
                  <div key={anim.id} className="glass-panel p-6 border-slate-800 flex flex-col justify-between">
                    <div>
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-purple-500/20 text-purple-300">{anim.category}</span>
                        <button
                          onClick={() => handleCopyPrompt(anim.prompt, anim.id)}
                          className="px-2.5 py-1 rounded bg-cyan-500/10 text-cyan-400 border border-cyan-500/30 text-[11px] font-bold flex items-center gap-1"
                        >
                          {copiedId === anim.id ? <Check className="w-3 h-3 text-green-400" /> : <Copy className="w-3 h-3" />} Prompt
                        </button>
                      </div>
                      <h3 className="text-base font-bold text-white mb-1 font-heading">{anim.name}</h3>
                      <p className="text-xs text-slate-400 mb-4">{anim.desc}</p>
                      
                      <div className="p-8 rounded-2xl bg-slate-950 border border-slate-800 flex items-center justify-center min-h-[130px]">
                        {anim.type === 'springBounce' && (
                          <div className="px-6 py-3 rounded-2xl bg-gradient-to-r from-cyan-500 to-purple-600 text-white font-bold text-xs shadow-xl animate-bounce">
                            Spring Bounce Physics 🏀
                          </div>
                        )}
                        {anim.type === 'staggerFade' && (
                          <div className="flex items-center gap-3">
                            <div className="w-9 h-9 rounded-xl bg-cyan-500/30 border border-cyan-400 flex items-center justify-center font-bold text-xs animate-pulse">1</div>
                            <div className="w-9 h-9 rounded-xl bg-purple-500/30 border border-purple-400 flex items-center justify-center font-bold text-xs animate-pulse delay-100">2</div>
                            <div className="w-9 h-9 rounded-xl bg-pink-500/30 border border-pink-400 flex items-center justify-center font-bold text-xs animate-pulse delay-200">3</div>
                          </div>
                        )}
                        {anim.type === 'magneticPulse' && (
                          <div className="relative">
                            <div className="w-14 h-14 rounded-full bg-pink-500/20 border-2 border-pink-500 animate-ping absolute inset-0"></div>
                            <div className="w-14 h-14 rounded-full bg-gradient-to-r from-pink-500 to-purple-600 flex items-center justify-center text-white font-bold text-[10px] relative z-10 shadow-lg shadow-pink-500/50">
                              PULSE
                            </div>
                          </div>
                        )}
                        {anim.type === 'laserBorderRotate' && (
                          <div className="animated-border-box w-full max-w-xs">
                            <div className="bg-slate-900 p-3 rounded-xl text-center">
                              <span className="text-xs font-bold text-cyan-300">Rotating Laser Border</span>
                            </div>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* TAB 5: TEXT EFFECTS */}
          {activeNav === 'textEffects' && (
            <div className="space-y-6">
              <h2 className="text-2xl font-bold text-white font-heading">✨ लाइव टेक्स्ट व नियॉन इफ़ेक्ट्स</h2>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                {textEffects.map((fx) => (
                  <div key={fx.id} className="glass-panel p-6 border-slate-800">
                    <div className="flex justify-between items-center mb-2">
                      <h3 className="text-base font-bold text-white">{fx.name}</h3>
                      <button
                        onClick={() => handleCopyPrompt(fx.prompt, fx.id)}
                        className="px-2.5 py-1 rounded bg-purple-500/10 text-purple-300 text-xs font-bold flex items-center gap-1"
                      >
                        {copiedId === fx.id ? <Check className="w-3 h-3 text-green-400" /> : <Copy className="w-3 h-3" />} Prompt
                      </button>
                    </div>
                    <p className="text-xs text-slate-400 mb-4">{fx.desc}</p>
                    <div className="p-8 rounded-xl bg-slate-950 border border-slate-800 text-center min-h-[120px] flex items-center justify-center">
                      {fx.type === 'neonTypewriter' && (
                        <div className="animated-border-box p-4 rounded-xl">
                          <span className="font-mono text-cyan-300 text-lg border-r-2 border-cyan-400 animate-pulse">Neon Typewriter Code...</span>
                        </div>
                      )}
                      {fx.type === 'gradientSweep' && (
                        <h2 className="text-2xl font-black gradient-text tracking-wider">Vibe Glowing Gradient</h2>
                      )}
                      {fx.type === 'glowingNeon' && (
                        <h2 className="text-2xl font-black text-pink-400 drop-shadow-[0_0_15px_rgba(255,42,133,0.8)] tracking-widest">CYBERPUNK NEON GLOW</h2>
                      )}
                      {fx.type === 'clipReveal' && (
                        <div className="overflow-hidden">
                          <span className="block text-xl font-bold text-cyan-300 animate-bounce">↑ Clip Path Mask Reveal</span>
                        </div>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* TAB 6: CANVA STYLE FONTS */}
          {activeNav === 'fonts' && (
            <div className="space-y-6">
              <h2 className="text-2xl font-bold text-white font-heading">🔤 आधुनिक फोंट्स (Canva Style)</h2>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                {popularFonts.map((font) => (
                  <div key={font.id} className="glass-panel p-6 border-slate-800">
                    <div className="flex justify-between items-start mb-3">
                      <div>
                        <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-purple-500/20 text-purple-300">{font.category}</span>
                        <h3 className="text-base font-bold text-white mt-1">{font.name}</h3>
                      </div>
                      <button
                        onClick={() => handleCopyPrompt(`font-family: ${font.family};`, font.id)}
                        className="px-2.5 py-1 rounded bg-cyan-500/10 text-cyan-400 border border-cyan-500/30 text-xs font-bold flex items-center gap-1"
                      >
                        {copiedId === font.id ? <Check className="w-3.5 h-3.5 text-green-400" /> : <Copy className="w-3.5 h-3.5" />} CSS Copy
                      </button>
                    </div>
                    <div className="p-5 rounded-xl bg-slate-950 border border-slate-800 text-center">
                      <p style={{ fontFamily: font.family }} className="text-2xl text-cyan-300 mb-1">{font.sampleText}</p>
                      <p style={{ fontFamily: font.family }} className="text-xs text-slate-400">The quick brown fox jumps over the lazy dog.</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* TAB 7: UI TERMS EXPLANATION */}
          {activeNav === 'terms' && selectedTerm && (
            <div className="glass-panel p-6 border-cyan-500/30 space-y-6">
              <div>
                <span className="text-[10px] font-bold px-2.5 py-1 rounded-full bg-cyan-500/10 text-cyan-400 border border-cyan-500/20 mb-2 inline-block">
                  {selectedTerm.badge || 'UI Term'}
                </span>
                <h2 className="text-2xl font-black text-white font-heading">{selectedTerm.title}</h2>
              </div>
              <div className="p-4 rounded-xl bg-slate-900 border border-slate-800">
                <h4 className="text-xs font-bold text-cyan-400 mb-1">💡 आसान हिंदी व्याख्या:</h4>
                <p className="text-xs text-slate-200 leading-relaxed">{selectedTerm.hindiExplanation}</p>
              </div>
              <div className="p-4 rounded-xl bg-slate-950 border border-purple-500/30">
                <div className="flex justify-between items-center mb-2">
                  <h4 className="text-xs font-bold text-purple-400 uppercase">AI Vibe-Prompt</h4>
                  <button
                    onClick={() => handleCopyPrompt(selectedTerm.vibePrompt, selectedTerm.id)}
                    className="px-2.5 py-1 rounded bg-purple-500/20 text-purple-300 text-xs font-bold flex items-center gap-1"
                  >
                    {copiedId === selectedTerm.id ? <Check className="w-3 h-3 text-green-400" /> : <Copy className="w-3 h-3" />} Copy
                  </button>
                </div>
                <pre className="text-xs font-mono text-slate-300 bg-slate-900 p-3 rounded-lg whitespace-pre-wrap">{selectedTerm.vibePrompt}</pre>
              </div>
            </div>
          )}

        </main>
      </div>
    </div>
  );
}
