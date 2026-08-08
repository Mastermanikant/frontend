import React, { useState, useEffect } from 'react';
import Editor from '@monaco-editor/react';

export default function TryItCodeSandbox({ 
  initialHtml = "<h1>Hello World</h1>\n<p>Try editing this code!</p>", 
  initialCss = "h1 { color: #3b82f6; }", 
  initialJs = "console.log('Ready!');" 
}) {
  const [htmlCode, setHtmlCode] = useState(initialHtml);
  const [cssCode, setCssCode] = useState(initialCss);
  const [jsCode, setJsCode] = useState(initialJs);
  const [activeTab, setActiveTab] = useState('html');
  const [srcDoc, setSrcDoc] = useState('');

  // Update states if props change
  useEffect(() => {
    setHtmlCode(initialHtml);
    setCssCode(initialCss);
    setJsCode(initialJs);
  }, [initialHtml, initialCss, initialJs]);

  const runCode = () => {
    const documentTemplate = `
      <!DOCTYPE html>
      <html lang="en">
      <head>
        <meta charset="UTF-8">
        <style>
          body { font-family: system-ui, sans-serif; margin: 16px; color: #333; }
          ${cssCode}
        </style>
      </head>
      <body>
        ${htmlCode}
        <script>
          ${jsCode}
        </script>
      </body>
      </html>
    `;
    setSrcDoc(documentTemplate);
  };

  useEffect(() => {
    runCode();
  }, [htmlCode, cssCode, jsCode]); // Auto-run on change for true live preview, or we can just trigger on run button. Let's do auto-run for now!

  return (
    <div className="flex flex-col h-[500px] w-full bg-slate-900 rounded-xl border border-slate-700 overflow-hidden shadow-2xl">
      {/* Header Tabs */}
      <div className="flex bg-slate-800 border-b border-slate-700">
        <button onClick={() => setActiveTab('html')} className={`px-4 py-2 text-sm font-medium transition-colors ${activeTab === 'html' ? 'bg-slate-700 text-blue-400 border-t-2 border-blue-400' : 'text-slate-400 hover:text-slate-200 hover:bg-slate-700/50 border-t-2 border-transparent'}`}>HTML</button>
        <button onClick={() => setActiveTab('css')} className={`px-4 py-2 text-sm font-medium transition-colors ${activeTab === 'css' ? 'bg-slate-700 text-pink-400 border-t-2 border-pink-400' : 'text-slate-400 hover:text-slate-200 hover:bg-slate-700/50 border-t-2 border-transparent'}`}>CSS</button>
        <button onClick={() => setActiveTab('js')} className={`px-4 py-2 text-sm font-medium transition-colors ${activeTab === 'js' ? 'bg-slate-700 text-yellow-400 border-t-2 border-yellow-400' : 'text-slate-400 hover:text-slate-200 hover:bg-slate-700/50 border-t-2 border-transparent'}`}>JS</button>
        <div className="flex-1 flex items-center justify-center text-xs text-slate-500 font-mono">W3Schools Style Sandbox</div>
        <button onClick={runCode} className="px-6 py-2 bg-emerald-500 hover:bg-emerald-400 text-white font-bold text-sm transition-colors shadow-[0_0_15px_rgba(16,185,129,0.3)]">▶ RUN</button>
      </div>
      
      {/* Split Editor and Preview */}
      <div className="flex flex-1 overflow-hidden">
        {/* Editor */}
        <div className="w-1/2 h-full border-r border-slate-700 relative pt-2 bg-[#1e1e1e]">
          {activeTab === 'html' && (
            <Editor defaultLanguage="html" theme="vs-dark" value={htmlCode} onChange={setHtmlCode} options={{ minimap: { enabled: false }, fontSize: 14, tabSize: 2 }} />
          )}
          {activeTab === 'css' && (
             <Editor defaultLanguage="css" theme="vs-dark" value={cssCode} onChange={setCssCode} options={{ minimap: { enabled: false }, fontSize: 14, tabSize: 2 }} />
          )}
          {activeTab === 'js' && (
             <Editor defaultLanguage="javascript" theme="vs-dark" value={jsCode} onChange={setJsCode} options={{ minimap: { enabled: false }, fontSize: 14, tabSize: 2 }} />
          )}
        </div>
        {/* Output */}
        <div className="w-1/2 h-full bg-white relative checkerboard-bg">
          <iframe
            srcDoc={srcDoc}
            title="output"
            sandbox="allow-scripts"
            className="w-full h-full border-none"
          />
        </div>
      </div>
    </div>
  );
}
