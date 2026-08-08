import React from 'react';
import CanvasStudio from './components/CanvasStudio';
import { CanvasProvider } from './context/CanvasContext';

export default function App() {
  return (
    <CanvasProvider>
      <CanvasStudio />
    </CanvasProvider>
  );
}
