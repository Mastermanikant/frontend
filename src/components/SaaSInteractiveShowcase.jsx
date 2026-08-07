import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Sparkles, Command, BarChart2, Shield, Zap, ArrowUpRight, Check, Bell } from 'lucide-react';
import confetti from 'canvas-confetti';

export default function SaaSInteractiveShowcase() {
  const [activeTab, setActiveTab] = useState('bento');
  const [commandOpen, setCommandOpen] = useState(false);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setMousePos({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  const triggerConfetti = () => {
    confetti({
      particleCount: 80,
      spread: 70,
      origin: { y: 0.6 }
    });
  };

  return (
    <div className="space-y-8 my-8">
      {/* Feature Intro */}
      <div className="text-center max-w-2xl mx-auto">
        <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 text-cyan-400 border border-cyan-500/30 text-xs font-bold mb-3">
          <Sparkles className="w-3.5 h-3.5" /> Powered by Framer Motion & Real-Time Physics
        </span>
        <h2 className="text-2xl sm:text-4xl font-black font-heading text-white tracking-tight">
          असली SaaS कॉम्पोनेंट्स (Stripe / Linear / Apple Quality)
        </h2>
        <p className="text-xs sm:text-sm text-slate-400 mt-2">
          नीचे दिए गए कॉम्पोनेंट्स में कर्सर ट्रैकिंग, स्प्रिंग फ़िजिक्स और लाइव कमांड बार को इंटरैक्ट करके अनुभव करें।
        </p>
      </div>

      {/* Control Switcher */}
      <div className="flex justify-center gap-3">
        <button
          onClick={() => setActiveTab('bento')}
          className={`px-4 py-2 rounded-xl text-xs font-bold transition ${
            activeTab === 'bento' ? 'bg-cyan-500 text-black font-black' : 'bg-slate-900 text-slate-400 hover:text-white'
          }`}
        >
          🍱 Bento Grid Dashboard
        </button>
        <button
          onClick={() => setActiveTab('spotlight')}
          className={`px-4 py-2 rounded-xl text-xs font-bold transition ${
            activeTab === 'spotlight' ? 'bg-purple-500 text-white font-black' : 'bg-slate-900 text-slate-400 hover:text-white'
          }`}
        >
          🔦 Cursor Spotlight Grid
        </button>
        <button
          onClick={() => setCommandOpen(true)}
          className="px-4 py-2 rounded-xl text-xs font-bold bg-pink-500/20 text-pink-300 border border-pink-500/40 hover:bg-pink-500/30 transition flex items-center gap-2"
        >
          <Command className="w-3.5 h-3.5" /> Open Cmd+K Palette
        </button>
      </div>

      {/* 1. REAL BENTO DASHBOARD SHOWCASE */}
      {activeTab === 'bento' && (
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-4"
        >
          {/* Card 1: Wide Metric */}
          <motion.div 
            whileHover={{ y: -4 }}
            className="md:col-span-2 glass-panel p-6 border-cyan-500/30 relative overflow-hidden"
          >
            <div className="flex justify-between items-start mb-4">
              <div>
                <span className="text-[10px] font-bold text-cyan-400 uppercase tracking-widest">Real-Time Revenue</span>
                <h3 className="text-3xl font-black text-white mt-1">$128,450.00</h3>
              </div>
              <span className="flex items-center gap-1 text-xs font-bold text-green-400 bg-green-500/10 px-2.5 py-1 rounded-full border border-green-500/20">
                +24.8% <ArrowUpRight className="w-3.5 h-3.5" />
              </span>
            </div>
            {/* Simulated Live Bar Chart */}
            <div className="flex items-end gap-2 h-24 pt-4">
              {[40, 65, 30, 85, 95, 60, 100, 75, 90].map((h, i) => (
                <motion.div
                  key={i}
                  initial={{ height: 0 }}
                  animate={{ height: `${h}%` }}
                  transition={{ delay: i * 0.05, type: 'spring' }}
                  className="flex-1 rounded-t-lg bg-gradient-to-t from-cyan-500 to-purple-600 hover:from-pink-500 transition"
                />
              ))}
            </div>
          </motion.div>

          {/* Card 2: Interactive Confetti Action */}
          <motion.div 
            whileHover={{ scale: 1.02 }}
            className="glass-panel p-6 border-purple-500/30 flex flex-col justify-between"
          >
            <div>
              <div className="w-10 h-10 rounded-xl bg-purple-500/20 border border-purple-500/30 flex items-center justify-center text-purple-400 mb-3">
                <Zap className="w-5 h-5" />
              </div>
              <h4 className="font-bold text-white text-base">Instant Micro-Trigger</h4>
              <p className="text-xs text-slate-400 mt-1">क्लिक करने पर लाइव Confetti एनीमेशन चलाएं!</p>
            </div>
            <button
              onClick={triggerConfetti}
              className="w-full py-2.5 rounded-xl bg-gradient-to-r from-purple-500 to-pink-500 text-white font-bold text-xs shadow-lg hover:shadow-purple-500/30 transition mt-4"
            >
              Trigger Celebration 🎉
            </button>
          </motion.div>
        </motion.div>
      )}

      {/* 2. REAL CURSOR SPOTLIGHT TRACKER */}
      {activeTab === 'spotlight' && (
        <div 
          onMouseMove={handleMouseMove}
          className="relative glass-panel p-8 rounded-3xl overflow-hidden border-cyan-500/30 min-h-[300px] flex items-center justify-center text-center cursor-crosshair"
        >
          {/* Dynamic Spotlight Glow Layer */}
          <div 
            className="pointer-events-none absolute -inset-px transition-opacity duration-300"
            style={{
              background: `radial-gradient(400px circle at ${mousePos.x}px ${mousePos.y}px, rgba(0, 242, 254, 0.15), transparent 80%)`
            }}
          />
          <div className="relative z-10 max-w-md">
            <h3 className="text-2xl font-bold text-white font-heading mb-2">
              कर्सर स्पॉटलाइट ट्रैकर (Light Follow Effect)
            </h3>
            <p className="text-xs text-slate-300 leading-relaxed mb-4">
              जैसे-जैसे आप माउस हिलाएंगे, कार्ड के बैकग्राउंड पर कर्सर की ठीक स्थिति पर लाइव स्यान रोशनी चमकेगी।
            </p>
            <div className="inline-block font-mono text-xs text-cyan-400 bg-slate-950 p-3 rounded-xl border border-cyan-500/30">
              Mouse Coordinates: X: {Math.round(mousePos.x)}px | Y: {Math.round(mousePos.y)}px
            </div>
          </div>
        </div>
      )}

      {/* 3. FLOATING CMD+K COMMAND PALETTE MODAL */}
      <AnimatePresence>
        {commandOpen && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setCommandOpen(false)}
            className="fixed inset-0 z-50 bg-black/80 backdrop-blur-md flex items-start justify-center pt-20 p-4"
          >
            <motion.div 
              initial={{ scale: 0.95, y: -20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.95, y: -20 }}
              onClick={(e) => e.stopPropagation()}
              className="w-full max-w-lg bg-slate-900 border border-slate-700 rounded-2xl p-4 shadow-2xl overflow-hidden"
            >
              <div className="flex items-center gap-3 pb-3 border-b border-slate-800">
                <Command className="w-5 h-5 text-cyan-400" />
                <input
                  type="text"
                  placeholder="कमांड टाइप करें या खोजें..."
                  autoFocus
                  className="w-full bg-transparent text-sm text-white placeholder-slate-500 focus:outline-none"
                />
                <span className="text-[10px] text-slate-500 bg-slate-800 px-2 py-1 rounded">ESC</span>
              </div>
              <div className="py-2 space-y-1 text-xs">
                <div className="p-2.5 rounded-lg hover:bg-slate-800 flex items-center justify-between text-slate-200 cursor-pointer">
                  <span className="flex items-center gap-2"><Zap className="w-4 h-4 text-yellow-400" /> Toggle Dark Mode</span>
                  <span className="text-slate-500 font-mono">⌘D</span>
                </div>
                <div className="p-2.5 rounded-lg hover:bg-slate-800 flex items-center justify-between text-slate-200 cursor-pointer">
                  <span className="flex items-center gap-2"><BarChart2 className="w-4 h-4 text-cyan-400" /> View Live Analytics</span>
                  <span className="text-slate-500 font-mono">⌘A</span>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
