import React, { useState } from 'react';
import { X, Code2, Download, Copy, Check, Sparkles, FileCode, Globe } from 'lucide-react';
import { useCanvas } from '../context/CanvasContext';
import { generateReactCode, generateHTMLCode, generateAIPrompt, downloadFile } from '../utils/exportEngine';

export default function ExportModal({ isOpen, onClose }) {
  const { elements } = useCanvas();
  const [activeTab, setActiveTab] = useState('react'); // 'react' | 'html' | 'ai'
  const [copied, setCopied] = useState(false);

  if (!isOpen) return null;

  const reactCode = generateReactCode(elements);
  const htmlCode = generateHTMLCode(elements);
  const aiPrompt = generateAIPrompt(elements);

  const getActiveCode = () => {
    if (activeTab === 'react') return reactCode;
    if (activeTab === 'html') return htmlCode;
    return aiPrompt;
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(getActiveCode());
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleDownload = () => {
    if (activeTab === 'react') {
      downloadFile('ExportedCanvas.jsx', reactCode, 'text/javascript');
    } else if (activeTab === 'html') {
      downloadFile('index.html', htmlCode, 'text/html');
    } else {
      downloadFile('ai_developer_prompt.txt', aiPrompt, 'text/plain');
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-xl animate-fadeIn select-none">
      <div className="bg-slate-900 border border-slate-800 rounded-3xl w-full max-w-3xl h-[560px] flex flex-col overflow-hidden shadow-2xl">
        
        {/* Modal Header */}
        <div className="px-6 py-4 border-b border-slate-800 flex items-center justify-between bg-slate-950/60 shrink-0">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-xl bg-cyan-500/20 text-cyan-300 border border-cyan-500/30 flex items-center justify-center">
              <Code2 className="w-4 h-4" />
            </div>
            <div>
              <h3 className="text-sm font-black text-white font-heading">Export Code &amp; AI Prompt</h3>
              <p className="text-[10px] text-slate-400">Export your visual design into production-ready frontend code.</p>
            </div>
          </div>
          <button onClick={onClose} className="p-2 rounded-xl text-slate-400 hover:text-white hover:bg-slate-800 transition">
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Export Options Tabs */}
        <div className="px-6 py-2 border-b border-slate-800 flex gap-2 bg-slate-950/30 shrink-0">
          <button
            onClick={() => setActiveTab('react')}
            className={`px-4 py-2 rounded-xl text-xs font-bold transition flex items-center gap-1.5 ${
              activeTab === 'react'
                ? 'bg-cyan-500/20 text-cyan-300 border border-cyan-500/40'
                : 'text-slate-400 hover:text-white hover:bg-slate-800'
            }`}
          >
            <FileCode className="w-3.5 h-3.5" />
            <span>React + Tailwind JSX</span>
          </button>

          <button
            onClick={() => setActiveTab('html')}
            className={`px-4 py-2 rounded-xl text-xs font-bold transition flex items-center gap-1.5 ${
              activeTab === 'html'
                ? 'bg-cyan-500/20 text-cyan-300 border border-cyan-500/40'
                : 'text-slate-400 hover:text-white hover:bg-slate-800'
            }`}
          >
            <Globe className="w-3.5 h-3.5" />
            <span>HTML5 Standalone</span>
          </button>

          <button
            onClick={() => setActiveTab('ai')}
            className={`px-4 py-2 rounded-xl text-xs font-bold transition flex items-center gap-1.5 ${
              activeTab === 'ai'
                ? 'bg-purple-500/20 text-purple-300 border border-purple-500/40'
                : 'text-slate-400 hover:text-white hover:bg-slate-800'
            }`}
          >
            <Sparkles className="w-3.5 h-3.5 text-purple-400" />
            <span>🤖 AI Developer Prompt</span>
          </button>
        </div>

        {/* Code Content Window */}
        <div className="flex-1 p-6 overflow-hidden flex flex-col bg-slate-950/60">
          <pre className="flex-1 font-mono text-xs text-cyan-300 bg-slate-950 border border-slate-800 rounded-2xl p-4 overflow-y-auto whitespace-pre-wrap leading-relaxed">
            {getActiveCode()}
          </pre>
        </div>

        {/* Action Buttons Footer */}
        <div className="px-6 py-4 border-t border-slate-800 bg-slate-950/80 flex items-center justify-between shrink-0">
          <button
            onClick={handleCopy}
            className="px-4 py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-white text-xs font-bold transition flex items-center gap-2"
          >
            {copied ? <Check className="w-4 h-4 text-green-400" /> : <Copy className="w-4 h-4" />}
            <span>{copied ? 'Copied To Clipboard!' : 'Copy Code'}</span>
          </button>

          <button
            onClick={handleDownload}
            className="px-5 py-2.5 rounded-xl bg-gradient-to-r from-cyan-500 to-purple-600 hover:opacity-90 text-white text-xs font-bold transition flex items-center gap-2 shadow-lg shadow-cyan-500/20"
          >
            <Download className="w-4 h-4" />
            <span>Download File</span>
          </button>
        </div>

      </div>
    </div>
  );
}
