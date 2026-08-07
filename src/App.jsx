import React, { useState } from 'react';
import { 
  Sparkles, Layers, Grid, MoveHorizontal, Type, Palette, Box, 
  Zap, MousePointer, Fingerprint, Code2, Wand2, Award, Search, 
  SlidersHorizontal, Play, Volume2, ShieldCheck, ExternalLink, HelpCircle
} from 'lucide-react';
import { categories, frontendTerms } from './data/frontendKnowledge';
import BackgroundCanvas from './components/BackgroundCanvas';
import ShrinkModal from './components/ShrinkModal';

export default function App() {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [activeTheme, setActiveTheme] = useState('aurora');
  const [selectedTerm, setSelectedTerm] = useState(null);
  const [isShrunk, setIsShrunk] = useState(false);

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

  return (
    <div className={`bg-theme-${activeTheme} text-slate-100 min-h-screen relative font-sans selection:bg-cyan-500 selection:text-black`}>
      {/* Background Interactive Particles Canvas */}
      <BackgroundCanvas theme={activeTheme} />

      {/* Main Wrapper with Shrink Canvas Effect */}
      <div className={`main-wrapper ${isShrunk ? 'is-shrunk' : ''} px-4 py-8 max-w-7xl mx-auto`}>
        
        {/* Header Navigation */}
        <header className="flex flex-col md:flex-row items-center justify-between gap-4 mb-10 glass-panel p-6 border-cyan-500/20">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-2xl bg-gradient-to-tr from-cyan-500 via-purple-500 to-pink-500 p-0.5 shadow-lg shadow-cyan-500/30">
              <div className="w-full h-full bg-slate-950 rounded-[14px] flex items-center justify-center">
                <Sparkles className="w-6 h-6 text-cyan-400 animate-pulse" />
              </div>
            </div>
            <div>
              <h1 className="text-2xl sm:text-3xl font-black font-heading gradient-text tracking-tight">
                Vibe Coding UI Hub
              </h1>
              <p className="text-xs text-slate-400 font-medium">
                गूगल एंटी ग्रेविटी और एआई द्वारा इमर्सिव फ्रंटएंड बनाने का हिंदी गाइड
              </p>
            </div>
          </div>

          {/* Theme Selector (Shrink Canvas Background Changer) */}
          <div className="flex items-center gap-2 bg-slate-900/80 p-2 rounded-2xl border border-slate-800">
            <span className="text-xs text-slate-400 font-bold px-2">थीम बदलें:</span>
            {[
              { id: 'aurora', label: 'Aurora' },
              { id: 'mesh', label: 'Mesh' },
              { id: 'cyberpunk', label: 'Cyber' },
              { id: 'bento', label: 'Bento' },
            ].map((t) => (
              <button
                key={t.id}
                onClick={() => setActiveTheme(t.id)}
                className={`px-3 py-1.5 rounded-xl text-xs font-bold transition ${
                  activeTheme === t.id
                    ? 'bg-gradient-to-r from-cyan-500 to-blue-500 text-slate-950 shadow-md shadow-cyan-500/20'
                    : 'text-slate-400 hover:text-white hover:bg-slate-800'
                }`}
              >
                {t.label}
              </button>
            ))}
          </div>
        </header>

        {/* Hero Section & Search Bar */}
        <section className="text-center max-w-3xl mx-auto mb-12">
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-cyan-500/10 text-cyan-400 border border-cyan-500/30 text-xs font-bold mb-4 animate-bounce">
            <Sparkles className="w-3.5 h-3.5" /> 100% SEO-Friendly Pure Code (No Heavy Videos)
          </span>
          <h2 className="text-3xl sm:text-5xl font-black font-heading tracking-tight mb-4 leading-tight">
            मनपसंद UI नहीं बन पा रहा? <br />
            <span className="gradient-text">एआई से क्या बोलना है, सब सीखें!</span>
          </h2>
          <p className="text-sm sm:text-base text-slate-300 mb-8 leading-relaxed font-normal">
            ग्लास मॉर्फिज़्म से लेकर एनिमेटेड बॉर्डर और बेन्टो ग्रिड तक — क्लिक करके लाइव महसूस करें, हिंदी में समझें और एआई (AntiGravity / ChatGPT) के लिए रेडी प्रोम्प्ट कॉपी करें!
          </p>

          {/* Search Box */}
          <div className="relative max-w-xl mx-auto">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
            <input
              type="text"
              placeholder="खोजें (जैसे: Glassmorphism, Bento, Neumorphism, Borders)..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-12 pr-4 py-4 rounded-2xl bg-slate-900/90 border border-cyan-500/30 focus:border-cyan-400 text-sm text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-cyan-500/20 shadow-xl transition"
            />
          </div>
        </section>

        {/* Category Pills Slider */}
        <section className="mb-10 overflow-x-auto pb-3 no-scrollbar">
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
        </section>

        {/* Main UI Cards Grid */}
        <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
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
                    देखें <Play className="w-3 h-3 fill-current" />
                  </span>
                </div>
                <h3 className="text-lg font-bold text-white mb-2 group-hover:text-cyan-300 transition font-heading">
                  {term.title}
                </h3>
                <p className="text-xs text-slate-400 line-clamp-2 mb-4 leading-relaxed">
                  {term.shortDesc}
                </p>
              </div>

              {/* Card Footer Vibe Tag */}
              <div className="pt-3 border-t border-slate-800/80 flex items-center justify-between text-[11px] text-slate-500">
                <span className="flex items-center gap-1 text-purple-400 font-medium">
                  <Sparkles className="w-3 h-3" /> Vibe Prompt Inside
                </span>
                <span className="group-hover:translate-x-1 transition text-slate-400 font-bold">
                  हिंदी व्याख्या &rarr;
                </span>
              </div>
            </div>
          ))}
        </section>

        {/* Q&A FAQ Section */}
        <section className="glass-panel p-8 max-w-4xl mx-auto mb-12 border-purple-500/20">
          <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-2 font-heading">
            <HelpCircle className="w-5 h-5 text-cyan-400" /> आपके मुख्य प्रश्नों के उत्तर (FAQ):
          </h3>
          <div className="space-y-4 text-xs sm:text-sm">
            <div className="p-4 rounded-xl bg-slate-900/60 border border-slate-800">
              <h4 className="font-bold text-cyan-300 mb-1">Q1: क्या यह वेबसाइट स्लो होगी या एसईओ खराब करेगी?</h4>
              <p className="text-slate-400">
                बिलकुल नहीं! हमने भारी वीडियो या फ्रेम्स की जगह केवल लाइटवेट CSS एनीमेशन और कैनवास का यूज़ किया है। यह सुपरफास्ट और 100% SEO Friendly है।
              </p>
            </div>
            <div className="p-4 rounded-xl bg-slate-900/60 border border-slate-800">
              <h4 className="font-bold text-purple-300 mb-1">Q2: डिप्लॉय करने के लिए क्या सबसे अच्छा रहेगा?</h4>
              <p className="text-slate-400">
                यह प्रोजेक्ट Cloudflare Pages पर मुफ़्त में आसानी से डिप्लॉय हो सकता है। यह एकदम स्पीड और ज़ीरो लेग्रेंसी देगा!
              </p>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="text-center text-xs text-slate-500 py-6 border-t border-slate-800/60">
          <p>© 2026 Vibe Coding UI Knowledge Hub | Created for Google AntiGravity & AI Pair-Programming</p>
        </footer>

      </div>

      {/* Interactive Shrink Modal Viewer */}
      {selectedTerm && (
        <ShrinkModal term={selectedTerm} onClose={handleCloseModal} />
      )}
    </div>
  );
}
