import React, { createContext, useContext, useState, useCallback } from 'react';
import { TEMPLATES } from '../data/templatesLibrary';
import { DEFAULT_STYLE } from '../data/componentLibrary';

const CanvasContext = createContext();

const INITIAL_ELEMENTS = [
  {
    id: 'el-hero-text',
    type: 'text',
    text: 'Build Canva-Style Frontends Visually',
    x: 60,
    y: 60,
    style: {
      fontSize: '36px',
      color: '#ffffff',
      fontFamily: 'Inter',
      fontWeight: 'bold',
      lineHeight: '1.2'
    }
  },
  {
    id: 'el-hero-btn',
    type: 'button',
    componentId: 'btn-conic-laser',
    text: 'Explore Templates →',
    x: 60,
    y: 130,
    style: { ...DEFAULT_STYLE }
  }
];

export function CanvasProvider({ children }) {
  const [elements, setElementsState] = useState([]);
  // DEFAULT LOAD FULL READYMADE AI SAAS WEBSITE TEMPLATE SO THE STAGE NEVER LOOKS BLANK OR WIDGET-LIKE!
  const [activeFullPageTemplate, setActiveFullPageTemplate] = useState(TEMPLATES[0].pageData);
  const [selectedElementId, setSelectedElementId] = useState(null);
  const [stageMode, setStageMode] = useState('edit'); // 'edit' | 'live'
  const [history, setHistory] = useState([[]]);
  const [historyIndex, setHistoryIndex] = useState(0);

  // Helper to update elements with undo/redo stack support
  const setElements = useCallback((newElementsOrFn) => {
    setElementsState((prev) => {
      const nextElements = typeof newElementsOrFn === 'function' ? newElementsOrFn(prev) : newElementsOrFn;
      
      // Push to history stack
      setHistory(hPrev => {
        const sliced = hPrev.slice(0, historyIndex + 1);
        return [...sliced, nextElements];
      });
      setHistoryIndex(iPrev => iPrev + 1);

      return nextElements;
    });
  }, [historyIndex]);

  const undo = () => {
    if (historyIndex > 0) {
      setHistoryIndex(i => i - 1);
      setElementsState(history[historyIndex - 1]);
    }
  };

  const redo = () => {
    if (historyIndex < history.length - 1) {
      setHistoryIndex(i => i + 1);
      setElementsState(history[historyIndex + 1]);
    }
  };

  const addElement = (newEl) => {
    setElements(prev => [...prev, newEl]);
    setSelectedElementId(newEl.id);
  };

  const updateElement = (updatedEl) => {
    setElements(prev => prev.map(el => el.id === updatedEl.id ? updatedEl : el));
  };

  const deleteElement = (id) => {
    const targetId = id || selectedElementId;
    if (!targetId) return;
    setElements(prev => prev.filter(el => el.id !== targetId));
    if (selectedElementId === targetId) {
      setSelectedElementId(null);
    }
  };

  const duplicateElement = (id) => {
    const targetId = id || selectedElementId;
    const target = elements.find(el => el.id === targetId);
    if (!target) return;
    
    const dup = {
      ...target,
      id: `${target.type}-${Date.now()}`,
      x: target.x + 20,
      y: target.y + 20,
      text: `${target.text} (Copy)`
    };
    addElement(dup);
  };

  const loadTemplate = (templateObj) => {
    if (templateObj.isFullPage && templateObj.pageData) {
      setActiveFullPageTemplate(templateObj.pageData);
      setElements([]); // Clear freeform elements so full page renders
    } else if (templateObj.elements) {
      setActiveFullPageTemplate(null);
      setElements(templateObj.elements);
      setSelectedElementId(templateObj.elements[0]?.id || null);
    } else if (Array.isArray(templateObj)) {
      setActiveFullPageTemplate(null);
      setElements(templateObj);
    }
  };

  const selectedElement = elements.find(el => el.id === selectedElementId) || null;

  return (
    <CanvasContext.Provider
      value={{
        elements,
        setElements,
        activeFullPageTemplate,
        setActiveFullPageTemplate,
        selectedElementId,
        setSelectedElementId,
        selectedElement,
        stageMode,
        setStageMode,
        addElement,
        updateElement,
        deleteElement,
        duplicateElement,
        loadTemplate,
        undo,
        redo,
        canUndo: historyIndex > 0,
        canRedo: historyIndex < history.length - 1
      }}
    >
      {children}
    </CanvasContext.Provider>
  );
}

export const useCanvas = () => useContext(CanvasContext);
