import React, { useState } from 'react';
import CanvasStudio from './components/CanvasStudio';
import FrontendKnowledgeHub from './components/FrontendKnowledgeHub';
import { CanvasProvider } from './context/CanvasContext';

export default function App() {
  const [view, setView] = useState('hub'); // 'hub' or 'studio'

  return (
    <CanvasProvider>
      {view === 'hub' ? (
        <FrontendKnowledgeHub onViewStudio={() => setView('studio')} />
      ) : (
        <CanvasStudio onViewHub={() => setView('hub')} />
      )}
    </CanvasProvider>
  );
}
