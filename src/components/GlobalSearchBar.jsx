import React, { useState, useEffect, useRef } from 'react';
import Fuse from 'fuse.js';
import { Search, Command, X } from 'lucide-react';
import { frontendKnowledgeGraph } from '../data/frontendKnowledgeGraph';

export default function GlobalSearchBar({ onSelectTerm }) {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState([]);
  const [isOpen, setIsOpen] = useState(false);
  const searchRef = useRef(null);

  // Initialize Fuse
  const fuse = new Fuse(frontendKnowledgeGraph, {
    keys: ['term', 'definition', 'category', 'subcategory'],
    threshold: 0.3,
    includeMatches: true
  });

  useEffect(() => {
    if (query.length > 1) {
      const result = fuse.search(query);
      setResults(result.slice(0, 10)); // Top 10 results
      setIsOpen(true);
    } else {
      setResults([]);
      setIsOpen(false);
    }
  }, [query]);

  // Click outside to close
  useEffect(() => {
    function handleClickOutside(event) {
      if (searchRef.current && !searchRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [searchRef]);

  // Keyboard shortcut Ctrl+K to focus search
  useEffect(() => {
    const handleKeyDown = (e) => {
      if ((e.ctrlKey || e.metaKey) && e.key === 'k') {
        e.preventDefault();
        document.getElementById('global-search-input')?.focus();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  return (
    <div className="relative w-full max-w-2xl mx-auto" ref={searchRef}>
      <div className="relative group">
        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
          <Search className="h-5 w-5 text-slate-400 group-focus-within:text-indigo-400 transition-colors" />
        </div>
        <input
          id="global-search-input"
          type="text"
          className="block w-full pl-10 pr-12 py-3 bg-slate-800/50 border border-slate-700 rounded-xl leading-5 text-slate-200 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-indigo-500/50 focus:border-indigo-500 focus:bg-slate-800 transition-all sm:text-sm shadow-inner"
          placeholder="Search 10,000+ Frontend Terms..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          onFocus={() => query.length > 1 && setIsOpen(true)}
        />
        <div className="absolute inset-y-0 right-0 pr-3 flex items-center">
          {query ? (
            <button onClick={() => { setQuery(''); setIsOpen(false); }} className="text-slate-400 hover:text-slate-200 p-1">
              <X className="h-4 w-4" />
            </button>
          ) : (
            <div className="hidden sm:flex items-center space-x-1">
              <span className="text-xs text-slate-500 border border-slate-700 rounded px-1.5 py-0.5 bg-slate-800">Ctrl</span>
              <span className="text-xs text-slate-500 border border-slate-700 rounded px-1.5 py-0.5 bg-slate-800">K</span>
            </div>
          )}
        </div>
      </div>

      {/* Dropdown Results */}
      {isOpen && results.length > 0 && (
        <div className="absolute z-50 mt-2 w-full bg-slate-800 border border-slate-700 rounded-xl shadow-2xl overflow-hidden max-h-96 overflow-y-auto">
          <ul className="divide-y divide-slate-700/50">
            {results.map((res, index) => (
              <li 
                key={res.item.id} 
                className="px-4 py-3 hover:bg-slate-700/50 cursor-pointer transition-colors"
                onClick={() => {
                  onSelectTerm(res.item);
                  setIsOpen(false);
                  setQuery('');
                }}
              >
                <div className="flex justify-between items-start">
                  <div>
                    <h4 className="text-sm font-medium text-slate-200">{res.item.term}</h4>
                    <p className="text-xs text-slate-400 mt-0.5 line-clamp-1">{res.item.definition}</p>
                  </div>
                  <span className="inline-flex items-center px-2 py-0.5 rounded text-[10px] font-medium bg-indigo-500/10 text-indigo-400 border border-indigo-500/20 whitespace-nowrap ml-2">
                    {res.item.category}
                  </span>
                </div>
                <div className="text-[10px] text-slate-500 mt-1 uppercase tracking-wider">
                  {res.item.category} &gt; {res.item.subcategory}
                </div>
              </li>
            ))}
          </ul>
        </div>
      )}
      
      {isOpen && query.length > 1 && results.length === 0 && (
         <div className="absolute z-50 mt-2 w-full bg-slate-800 border border-slate-700 rounded-xl shadow-2xl p-6 text-center">
            <p className="text-slate-400 text-sm">No results found for "{query}".</p>
         </div>
      )}
    </div>
  );
}
