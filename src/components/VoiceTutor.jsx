import React, { useState, useEffect } from 'react';
import { Volume2, VolumeX, Sparkles, Play, Square } from 'lucide-react';

export default function VoiceTutor({ activeTerm }) {
  const [isPlaying, setIsPlaying] = useState(false);
  const [speechSynth, setSpeechSynth] = useState(null);
  const [hindiVoice, setHindiVoice] = useState(null);
  const [speed, setSpeed] = useState(1);

  useEffect(() => {
    if (typeof window !== 'undefined' && 'speechSynthesis' in window) {
      const synth = window.speechSynthesis;
      setSpeechSynth(synth);

      const updateVoices = () => {
        const voices = synth.getVoices();
        // Look for Hindi voice or female natural voice fallback
        const hiVoice = voices.find(v => v.lang.includes('hi') || v.name.toLowerCase().includes('hindi')) ||
                       voices.find(v => v.name.toLowerCase().includes('female') || v.name.toLowerCase().includes('google'));
        setHindiVoice(hiVoice || voices[0]);
      };

      updateVoices();
      if (speechSynthesis.onvoiceschanged !== undefined) {
        speechSynthesis.onvoiceschanged = updateVoices;
      }
    }
  }, []);

  const speakText = (text) => {
    if (!speechSynth) return;
    
    // Stop any ongoing speech
    speechSynth.cancel();

    if (isPlaying) {
      setIsPlaying(false);
      return;
    }

    const utterance = new SpeechSynthesisUtterance(text);
    if (hindiVoice) {
      utterance.voice = hindiVoice;
    }
    utterance.rate = speed;
    utterance.pitch = 1.2; // Slightly sweeter/cheerful pitch tone

    utterance.onend = () => {
      setIsPlaying(false);
    };

    utterance.onerror = () => {
      setIsPlaying(false);
    };

    setIsPlaying(true);
    speechSynth.speak(utterance);
  };

  const handleTogglePlay = () => {
    if (!activeTerm) return;
    const textToSpeak = `${activeTerm.title}। ${activeTerm.aiVoiceSpeech || activeTerm.hindiExplanation}`;
    speakText(textToSpeak);
  };

  return (
    <div className="glass-panel p-4 flex flex-wrap items-center justify-between gap-4 border border-cyan-500/30 shadow-lg shadow-cyan-500/10">
      <div className="flex items-center gap-3">
        <div className="relative">
          <div className="w-10 h-10 rounded-full bg-gradient-to-r from-pink-500 to-purple-600 flex items-center justify-center shadow-md">
            <Sparkles className="w-5 h-5 text-white animate-pulse" />
          </div>
          {isPlaying && (
            <span className="absolute -top-1 -right-1 flex h-3 w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-cyan-500"></span>
            </span>
          )}
        </div>
        <div>
          <h4 className="font-bold text-sm text-white flex items-center gap-2">
            नैना AI - आपकी UI वॉइस गाइड
            <span className="text-[10px] px-2 py-0.5 rounded-full bg-pink-500/20 text-pink-300 border border-pink-500/30">
              Voice Assistant
            </span>
          </h4>
          <p className="text-xs text-slate-400">
            {isPlaying ? 'बोल रही हैं... (सुनिए और सीखिए)' : 'किसी भी UI टर्म को सुनने और समझने के लिए प्ले दबाएं'}
          </p>
        </div>
      </div>

      <div className="flex items-center gap-3">
        <div className="flex items-center gap-1 bg-slate-900/60 p-1 rounded-lg border border-slate-800">
          <span className="text-[10px] text-slate-400 px-1">स्पीड:</span>
          {[0.9, 1, 1.25].map((s) => (
            <button
              key={s}
              onClick={() => setSpeed(s)}
              className={`px-2 py-0.5 text-xs rounded transition ${
                speed === s ? 'bg-cyan-500 text-black font-bold' : 'text-slate-400 hover:text-white'
              }`}
            >
              {s}x
            </button>
          ))}
        </div>

        <button
          onClick={handleTogglePlay}
          className={`flex items-center gap-2 px-4 py-2 rounded-xl font-medium text-xs transition duration-300 ${
            isPlaying
              ? 'bg-red-500/20 text-red-300 border border-red-500/40 hover:bg-red-500/30'
              : 'bg-gradient-to-r from-cyan-500 to-blue-600 text-slate-950 font-bold hover:shadow-lg hover:shadow-cyan-500/25'
          }`}
        >
          {isPlaying ? (
            <>
              <Square className="w-4 h-4 fill-current" /> बंद करें
            </>
          ) : (
            <>
              <Play className="w-4 h-4 fill-current" /> हिंदी में सुनें
            </>
          )}
        </button>
      </div>
    </div>
  );
}
