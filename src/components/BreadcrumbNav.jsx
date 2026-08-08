import React from 'react';
import { ChevronRight, Home } from 'lucide-react';

export default function BreadcrumbNav({ path = [] }) {
  // path is an array of strings e.g. ['HTML', 'Forms', 'Input Types']
  return (
    <nav className="flex" aria-label="Breadcrumb">
      <ol className="inline-flex items-center space-x-1 md:space-x-3">
        <li className="inline-flex items-center">
          <a href="#" className="inline-flex items-center text-sm font-medium text-slate-400 hover:text-white transition-colors">
            <Home className="w-4 h-4 mr-2" />
            Encyclopedia
          </a>
        </li>
        {path.map((item, index) => {
          const isLast = index === path.length - 1;
          return (
            <li key={index}>
              <div className="flex items-center">
                <ChevronRight className="w-4 h-4 text-slate-600" />
                <a 
                  href="#" 
                  className={`ml-1 text-sm font-medium md:ml-2 transition-colors ${
                    isLast ? 'text-indigo-400 hover:text-indigo-300' : 'text-slate-400 hover:text-white'
                  }`}
                  aria-current={isLast ? 'page' : undefined}
                >
                  {item}
                </a>
              </div>
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
