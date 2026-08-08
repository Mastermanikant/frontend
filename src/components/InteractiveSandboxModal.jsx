import React, { useState, useEffect } from 'react';
import { Play, X } from 'lucide-react';

export default function InteractiveSandboxModal({ sandboxData, onClose }) {
  const [htmlCode, setHtmlCode] = useState(sandboxData.html || '');
  const [cssCode, setCssCode] = useState(sandboxData.css || '');
  const [jsCode, setJsCode] = useState(sandboxData.js || '');
  const [previewUrl, setPreviewUrl] = useState('');

  // Auto-update iframe preview when code changes
  useEffect(() => {
    const srcDoc = `
      <!DOCTYPE html>
      <html>
        <head>
          <style>
            body { 
              margin: 0; 
              display: flex; 
              align-items: center; 
              justify-content: center; 
              min-height: 100vh; 
              background: #0f111a; 
              color: white; 
              font-family: sans-serif;
            }
            ${cssCode}
          </style>
        </head>
        <body>
          ${htmlCode}
          <script>
            try {
              ${jsCode}
            } catch (err) {
              console.error(err);
            }
          </script>
        </body>
      </html>
    `;
    const blob = new Blob([srcDoc], { type: 'text/html' });
    const url = URL.createObjectURL(blob);
    setPreviewUrl(url);
    
    return () => URL.revokeObjectURL(url);
  }, [htmlCode, cssCode, jsCode]);

  return (
    <div className="fixed inset-0 z-[100] bg-black/80 backdrop-blur-sm flex items-center justify-center p-4">
      <div className="bg-[#12141c] w-full max-w-7xl h-[90vh] rounded-2xl border border-slate-700 shadow-2xl flex flex-col overflow-hidden animate-in zoom-in-95 duration-200">
        
        {/* Modal Header */}
        <div className="flex justify-between items-center p-4 border-b border-slate-800 bg-[#0f111a] shrink-0">
          <h2 className="text-xl font-bold flex items-center text-white">
            <Play className="w-5 h-5 mr-3 text-pink-500" /> 
            Interactive Sandbox: <span className="text-indigo-400 ml-2">{sandboxData.name}</span>
          </h2>
          <button 
            onClick={onClose}
            className="p-2 hover:bg-slate-800 rounded-full transition-colors"
          >
            <X className="w-6 h-6 text-slate-400 hover:text-white" />
          </button>
        </div>

        {/* Modal Body (Split Pane) */}
        <div className="flex-1 flex flex-col lg:flex-row overflow-hidden">
          
          {/* Left Pane: Code Editors (3-way split if JS is present, else 2-way) */}
          <div className="w-full lg:w-1/2 flex flex-col border-r border-slate-800 overflow-y-auto custom-scrollbar">
            
            {/* HTML Editor */}
            <div className="flex-1 flex flex-col p-4 min-h-[200px]">
              <label className="text-xs font-bold text-slate-400 mb-2 uppercase tracking-wide">HTML (Editable)</label>
              <textarea 
                className="flex-1 w-full bg-[#0a0b10] border border-slate-800 rounded-lg p-4 text-sm font-mono text-orange-300 focus:outline-none focus:border-indigo-500 custom-scrollbar resize-none"
                value={htmlCode}
                onChange={(e) => setHtmlCode(e.target.value)}
                spellCheck="false"
              />
            </div>
            
            {/* CSS Editor */}
            <div className="flex-1 flex flex-col p-4 border-t border-slate-800 min-h-[200px]">
              <label className="text-xs font-bold text-slate-400 mb-2 uppercase tracking-wide">CSS (Editable)</label>
              <textarea 
                className="flex-1 w-full bg-[#0a0b10] border border-slate-800 rounded-lg p-4 text-sm font-mono text-blue-300 focus:outline-none focus:border-indigo-500 custom-scrollbar resize-none"
                value={cssCode}
                onChange={(e) => setCssCode(e.target.value)}
                spellCheck="false"
              />
            </div>

            {/* JS Editor (Only show if JS code is passed in or user is in JS category) */}
            {sandboxData.js !== undefined && (
              <div className="flex-1 flex flex-col p-4 border-t border-slate-800 min-h-[200px]">
                <label className="text-xs font-bold text-slate-400 mb-2 uppercase tracking-wide">JavaScript (Editable)</label>
                <textarea 
                  className="flex-1 w-full bg-[#0a0b10] border border-slate-800 rounded-lg p-4 text-sm font-mono text-yellow-300 focus:outline-none focus:border-indigo-500 custom-scrollbar resize-none"
                  value={jsCode}
                  onChange={(e) => setJsCode(e.target.value)}
                  spellCheck="false"
                />
              </div>
            )}
            
          </div>

          {/* Right Pane: Live Preview */}
          <div className="w-full lg:w-1/2 bg-[#0f111a] flex flex-col relative">
            <div className="p-3 border-b border-slate-800 bg-[#161925] shrink-0">
              <span className="text-xs font-bold text-green-400 uppercase tracking-wide flex items-center">
                <span className="w-2 h-2 rounded-full bg-green-500 mr-2 animate-pulse"></span>
                Live Output
              </span>
            </div>
            <iframe 
              src={previewUrl}
              className="flex-1 w-full border-none bg-white"
              title="Live Preview"
              sandbox="allow-scripts allow-same-origin"
            />
          </div>

        </div>
      </div>
    </div>
  );
}
