import React, { useState } from 'react';
import { 
  Sparkles, Layers, Grid, Type, Palette, MousePointer, Code2, Wand2, Search, Play, Check, Copy, ExternalLink, ShieldCheck, Zap
} from 'lucide-react';
import { categories, frontendTerms, popularFonts, buttonTypes, textEffects, backgroundThemes } from './data/frontendKnowledge';
import BackgroundCanvas from './components/BackgroundCanvas';
import ShrinkModal from './components/ShrinkModal';

export default function App() {
  const [activeTab, setActiveTab] = useState('terms'); // 'terms', 'fonts', 'buttons', 'textEffects', 'themes'
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [activeTheme, setActiveTheme] = useState('aurora');
  const [selectedTerm, setSelectedTerm] = useState(null);
  const [isShrunk, setIsShrunk] = useState(false);
  const [copiedId, setCopiedId] = useState(null);

  // Filter terms based on category & search query
  const filteredTerms = frontendTerms.filter((term) => {
    const matchesCategory = selectedCategory === 'all' || term.category === selectedCategory;
    const matchesSearch =
      term.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      term.shortDesc.toLowerCase().includes(searchQuery.toLowerCase()) ||
      term.hindiExplanation.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const handleOpenTerm = (term) => {
    setSelectedTerm(term);
    setIsShrunk(true);
  };

  const handleCloseModal = () => {
    setSelectedTerm(null);
    setIsShrunk(false);
  };

  const handleCopyPrompt = (promptText, id) => {
    navigator.clipboard.writeText(promptText);
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 2500);
  };

  return (
    <div className={`bg-theme-${activeTheme} text-slate-100 min-h-screen relative font-sans selection:bg-cyan-500 selection:text-black`}>
      {/* Background Interactive Particles Canvas */}
      <BackgroundCanvas theme={activeTheme} />

      {/* Main Wrapper with Shrink Canvas Effect */}
      <div className={`main-wrapper ${isShrunk ? 'is-shrunk' : ''} px-4 py-8 max-w-7xl mx-auto`}>
        
        {/* Header Navigation */}
        <header className="flex flex-col md:flex-row items-center justify-between gap-4 mb-8 glass-panel p-6 border-cyan-500/20">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-2xl bg-gradient-to-tr from-cyan-500 via-purple-500 to-pink-500 p-0.5 shadow-lg shadow-cyan-500/30">
              <div className="w-full h-full bg-slate-950 rounded-[14px] flex items-center justify-center">
                <Sparkles className="w-6 h-6 text-cyan-400 animate-pulse" />
              </div>
            </div>
            <div>
              <h1 className="text-2xl sm:text-3xl font-black font-heading gradient-text tracking-tight">
                Vibe UI Interactive Encyclopedia
              </h1>
              <p className="text-xs text-slate-400 font-medium">
                फ्रंटएंड और यूआई का संपूर्ण खज़ाना — लाइव देखें, फील करें और एआई प्रोम्प्ट पाएँ!
              </p>
            </div>
          </div>

          {/* Theme Selector (Shrink Canvas Background Changer) */}
          <div className="flex items-center gap-1.5 bg-slate-900/80 p-2 rounded-2xl border border-slate-800 flex-wrap justify-center">
            <span className="text-xs text-slate-400 font-bold px-2">लाइव बैकग्राउंड थीम:</span>
            {backgroundThemes.map((t) => (
              <button
                key={t.id}
                onClick={() => setActiveTheme(t.id)}
                className={`px-3 py-1.5 rounded-xl text-xs font-bold transition ${
                  activeTheme === t.id
                    ? 'bg-gradient-to-r from-cyan-500 to-purple-600 text-white shadow-md shadow-cyan-500/20'
                    : 'text-slate-400 hover:text-white hover:bg-slate-800'
                }`}
              >
                {t.name}
              </button>
            ))}
          </div>
        </header>

        {/* Main Section Navigation Tabs */}
        <div className="flex items-center justify-center gap-2 mb-8 bg-slate-900/90 p-2 rounded-2xl border border-slate-800 overflow-x-auto no-scrollbar">
          {[
            { id: 'terms', label: '🧠 सभी UI कांसेप्ट्स (30+ Categories)', icon: Layers },
            { id: 'fonts', label: '🔤 पॉपुलर फोंट्स (Live Canva Style)', icon: Type },
            { id: 'buttons', label: '🔘 लाइव बटन कलेक्शन्स', icon: MousePointer },
            { id: 'textEffects', label: '✨ लाइव टेक्स्ट एनीमेशन व इफ़ेक्ट्स', icon: Wand2 },
          ].map((tab) => {
            const Icon = tab.icon;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`px-5 py-3 rounded-xl text-xs sm:text-sm font-bold transition flex items-center gap-2 whitespace-nowrap ${
                  activeTab === tab.id
                    ? 'bg-gradient-to-r from-cyan-500 via-blue-600 to-purple-600 text-white shadow-lg shadow-cyan-500/25 scale-105'
                    : 'text-slate-400 hover:text-white hover:bg-slate-800'
                }`}
              >
                <Icon className="w-4 h-4" /> {tab.label}
              </button>
            );
          })}
        </div>

        {/* TAB 1: FRONTEND TERMS & CONCEPTS */}
        {activeTab === 'terms' && (
          <>
            {/* Search Box */}
            <div className="relative max-w-xl mx-auto mb-8">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
              <input
                type="text"
                placeholder="खोजें (जैसे: Glassmorphism, Bento, Neumorphism, Neon Borders)..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-12 pr-4 py-3.5 rounded-2xl bg-slate-900/90 border border-cyan-500/30 focus:border-cyan-400 text-sm text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-cyan-500/20 shadow-xl transition"
              />
            </div>

            {/* Category Pills Slider */}
            <div className="mb-8 overflow-x-auto pb-2 no-scrollbar">
              <div className="flex items-center gap-2 min-w-max">
                {categories.map((cat) => (
                  <button
                    key={cat.id}
                    onClick={() => setSelectedCategory(cat.id)}
                    className={`px-4 py-2 rounded-xl text-xs font-bold transition flex items-center gap-2 border ${
                      selectedCategory === cat.id
                        ? 'bg-gradient-to-r from-cyan-500 to-purple-600 text-white border-cyan-400 shadow-lg shadow-cyan-500/20'
                        : 'bg-slate-900/60 text-slate-400 border-slate-800 hover:border-slate-700 hover:text-slate-200'
                    }`}
                  >
                    {cat.name}
                  </button>
                ))}
              </div>
            </div>

            {/* Terms Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
              {filteredTerms.map((term) => (
                <div
                  key={term.id}
                  onClick={() => handleOpenTerm(term)}
                  className="glass-panel p-6 cursor-pointer group flex flex-col justify-between relative overflow-hidden"
                >
                  <div>
                    <div className="flex items-center justify-between mb-3">
                      <span className="text-[10px] font-bold px-2.5 py-1 rounded-full bg-cyan-500/10 text-cyan-400 border border-cyan-500/20">
                        {term.badge || 'UI Feature'}
                      </span>
                      <span className="text-xs text-slate-500 group-hover:text-cyan-400 transition font-mono flex items-center gap-1">
                        लाइव देखें <Play className="w-3 h-3 fill-current" />
                      </span>
                    </div>
                    <h3 className="text-lg font-bold text-white mb-2 group-hover:text-cyan-300 transition font-heading">
                      {term.title}
                    </h3>
                    <p className="text-xs text-slate-400 line-clamp-2 mb-4 leading-relaxed">
                      {term.shortDesc}
                    </p>
                  </div>

                  <div className="pt-3 border-t border-slate-800/80 flex items-center justify-between text-[11px] text-slate-500">
                    <span className="flex items-center gap-1 text-purple-400 font-medium">
                      <Sparkles className="w-3 h-3" /> Vibe Prompt Inside
                    </span>
                    <span className="group-hover:translate-x-1 transition text-slate-400 font-bold">
                      विवरण &rarr;
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </>
        )}

        {/* TAB 2: POPULAR FONTS (CANVA STYLE LIVE PREVIEW) */}
        {activeTab === 'fonts' && (
          <div className="space-y-6 mb-16">
            <div className="text-center max-w-2xl mx-auto mb-8">
              <h2 className="text-2xl sm:text-3xl font-extrabold text-white font-heading">
                🔤 आधुनिक वेबसाइट्स के सर्वश्रेष्ठ फोंट्स (Canva Style)
              </h2>
              <p className="text-xs sm:text-sm text-slate-400 mt-2">
                नीचे हर फोंट का नाम, उसकी शैली और वह वास्तविक फोंट फैमिली में लाइव दिख रहा है। एआई को प्रोम्प्ट देने के लिए कोड कॉपी करें!
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {popularFonts.map((font) => (
                <div key={font.id} className="glass-panel p-6 border-slate-700/60 relative overflow-hidden">
                  <div className="flex items-center justify-between mb-4">
                    <div>
                      <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-purple-500/20 text-purple-300 border border-purple-500/30">
                        {font.category}
                      </span>
                      <h3 className="text-lg font-bold text-white mt-1">{font.name}</h3>
                      <p className="text-xs text-slate-400">{font.bestFor}</p>
                    </div>
                    <button
                      onClick={() => handleCopyPrompt(`font-family: ${font.family};`, font.id)}
                      className="px-3 py-1.5 rounded-lg bg-cyan-500/10 text-cyan-400 border border-cyan-500/30 hover:bg-cyan-500/20 text-xs font-bold transition flex items-center gap-1"
                    >
                      {copiedId === font.id ? <Check className="w-3.5 h-3.5 text-green-400" /> : <Copy className="w-3.5 h-3.5" />}
                      CSS Copy
                    </button>
                  </div>

                  {/* Canva Style Font Specimen */}
                  <div className="p-5 rounded-xl bg-slate-950/80 border border-slate-800 text-center">
                    <p style={{ fontFamily: font.family }} className="text-2xl sm:text-3xl text-cyan-300 mb-2 leading-tight">
                      {font.sampleText}
                    </p>
                    <p style={{ fontFamily: font.family }} className="text-xs text-slate-400">
                      The quick brown fox jumps over the lazy dog. 1234567890
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* TAB 3: LIVE BUTTON COLLECTIONS */}
        {activeTab === 'buttons' && (
          <div className="space-y-6 mb-16">
            <div className="text-center max-w-2xl mx-auto mb-8">
              <h2 className="text-2xl sm:text-3xl font-extrabold text-white font-heading">
                🔘 मॉडर्न फ्रंटएंड बटन्स की लाइव गैलरी
              </h2>
              <p className="text-xs sm:text-sm text-slate-400 mt-2">
                हर प्रकार के बटन को लाइव टेस्ट करें, होवर/क्लिक फील लें और एआई को बोलने के लिए प्रोम्प्ट कॉपी करें!
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {buttonTypes.map((btn) => (
                <div key={btn.id} className="glass-panel p-6 flex flex-col justify-between border-slate-700/60">
                  <div>
                    <h3 className="text-base font-bold text-white mb-1 font-heading">{btn.name}</h3>
                    <p className="text-xs text-slate-400 mb-4">{btn.desc}</p>

                    {/* Button Live Demo Area */}
                    <div className="p-8 rounded-xl bg-slate-950/90 border border-slate-800 flex items-center justify-center min-h-[110px] mb-4">
                      {btn.demoType === 'shiny' && <button className="shiny-btn">Shiny Hover ✨</button>}
                      {btn.demoType === 'animatedBorder' && (
                        <div className="animated-border-box">
                          <button className="px-5 py-2.5 bg-slate-900 text-white rounded-xl font-bold text-xs">
                            Laser Border Button
                          </button>
                        </div>
                      )}
                      {btn.demoType === 'neumorphic' && (
                        <button className="px-6 py-3 rounded-xl font-bold text-xs text-cyan-400 bg-[#1a1d24] shadow-[4px_4px_10px_#111318,-4px_-4px_10px_#232730] hover:shadow-none transition">
                          Neumorphic 3D
                        </button>
                      )}
                      {btn.demoType === 'magnetic' && (
                        <button className="px-6 py-3 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 font-bold text-xs text-white shadow-lg hover:scale-110 transition duration-300">
                          Magnetic Spring 🧲
                        </button>
                      )}
                      {btn.demoType === 'cyberpunk' && (
                        <button className="px-6 py-2.5 bg-cyan-400 text-black font-black text-xs uppercase tracking-widest border-2 border-yellow-300 shadow-[4px_4px_0px_#ff2a85] hover:translate-x-1 hover:translate-y-1 transition">
                          Cyber Cyberpunk
                        </button>
                      )}
                      {btn.demoType === 'glass' && (
                        <button className="glass-panel px-6 py-3 border-cyan-400/40 text-cyan-300 font-bold text-xs hover:bg-cyan-500/20">
                          Glass Frosted
                        </button>
                      )}
                    </div>
                  </div>

                  {/* AI Prompt Button */}
                  <button
                    onClick={() => handleCopyPrompt(btn.prompt, btn.id)}
                    className="w-full py-2 rounded-xl bg-purple-500/10 text-purple-300 border border-purple-500/30 hover:bg-purple-500/20 text-xs font-bold transition flex items-center justify-center gap-2"
                  >
                    {copiedId === btn.id ? <Check className="w-3.5 h-3.5 text-green-400" /> : <Copy className="w-3.5 h-3.5" />}
                    AI Vibe-Prompt कॉपी करें
                  </button>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* TAB 4: LIVE TEXT ANIMATIONS & NEON EFFECTS */}
        {activeTab === 'textEffects' && (
          <div className="space-y-6 mb-16">
            <div className="text-center max-w-2xl mx-auto mb-8">
              <h2 className="text-2xl sm:text-3xl font-extrabold text-white font-heading">
                ✨ लाइव टेक्स्ट एनीमेशन व नियॉन इफ़ेक्ट्स
              </h2>
              <p className="text-xs sm:text-sm text-slate-400 mt-2">
                टाइपराइटर नियॉन लाइट, ग्रेडिएंट स्वैप, और एनिमेटेड शैडो इफ़ेक्ट्स का लाइव प्रदर्शन।
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {textEffects.map((fx) => (
                <div key={fx.id} className="glass-panel p-6 border-slate-700/60">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="text-base font-bold text-white font-heading">{fx.name}</h3>
                    <button
                      onClick={() => handleCopyPrompt(fx.prompt, fx.id)}
                      className="px-3 py-1 rounded-lg bg-purple-500/10 text-purple-300 border border-purple-500/30 text-xs font-bold flex items-center gap-1 hover:bg-purple-500/20"
                    >
                      {copiedId === fx.id ? <Check className="w-3 h-3 text-green-400" /> : <Copy className="w-3 h-3" />}
                      Prompt
                    </button>
                  </div>
                  <p className="text-xs text-slate-400 mb-4">{fx.desc}</p>

                  {/* Live Render Output */}
                  <div className="p-8 rounded-xl bg-slate-950/90 border border-slate-800 text-center min-h-[120px] flex items-center justify-center">
                    {fx.type === 'neonTypewriter' && (
                      <div className="relative inline-block p-4 rounded-xl border border-cyan-400/50 shadow-[0_0_20px_rgba(0,242,254,0.4)]">
                        <span className="font-mono text-cyan-300 text-lg sm:text-xl border-r-2 border-cyan-400 animate-pulse">
                          Neon Typewriter Code...
                        </span>
                      </div>
                    )}
                    {fx.type === 'gradientSweep' && (
                      <h2 className="text-2xl sm:text-3xl font-black gradient-text tracking-wider">
                        Vibe Coding Glowing Gradient
                      </h2>
                    )}
                    {fx.type === 'glowingNeon' && (
                      <h2 className="text-2xl font-black text-pink-400 drop-shadow-[0_0_15px_rgba(255,42,133,0.8)] tracking-widest">
                        CYBERPUNK NEON GLOW
                      </h2>
                    )}
                    {fx.type === 'clipReveal' && (
                      <div className="overflow-hidden">
                        <span className="block text-xl font-bold text-cyan-300 animate-bounce">
                          ↑ Clip Path Text Reveal
                        </span>
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Footer */}
        <footer className="text-center text-xs text-slate-500 py-6 border-t border-slate-800/60">
          <p>© 2026 Vibe Coding UI Knowledge Encyclopedia | Created for Google AntiGravity & Vibe Developers</p>
        </footer>

      </div>

      {/* Interactive Shrink Modal Viewer */}
      {selectedTerm && (
        <ShrinkModal term={selectedTerm} onClose={handleCloseModal} />
      )}
    </div>
  );
}
