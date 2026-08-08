import React from 'react';
import FrontendKnowledgeHub from './components/FrontendKnowledgeHub';
import { CanvasProvider } from './context/CanvasContext';

export default function App() {
  return (
    <CanvasProvider>
      <FrontendKnowledgeHub />
    </CanvasProvider>
  );
}
