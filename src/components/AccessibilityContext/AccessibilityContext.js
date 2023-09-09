import React, { createContext, useContext, useState, useMemo, useEffect } from 'react';

const AccessibilityContext = createContext();

export const useAccessibility = () => {
  const context = useContext(AccessibilityContext);
  if (!context) {
    throw new Error('useAccessibility must be used within an AccessibilityProvider');
  }
  return context;
};

export const AccessibilityProvider = ({ children }) => {
  const [fontSize, setFontSize] = useState('medium'); // Pode ser 'small', 'medium' ou 'large'
  const [background, setBackground] = useState('white'); // Pode ser 'white' ou 'gray'

  const toggleFontSize = () => {
    setFontSize((prevSize) => (prevSize === 'small' ? 'medium' : 'small'));
  };

  const toggleBackground = () => {
    setBackground((prevBackground) => (prevBackground === 'white' ? 'gray' : 'white'));
  };

  useEffect(() => {
    // Aplicar a cor de fundo ao elemento de layout raiz do aplicativo (ou outro elemento de alto nível)
    document.body.style.backgroundColor = background;
  }, [background]);

  const accessibilityContextValue = useMemo(() => ({
    fontSize,
    background,
    toggleFontSize,
    toggleBackground,
  }), [fontSize, background]);

  return (
    <AccessibilityContext.Provider value={accessibilityContextValue}>
      {children}
    </AccessibilityContext.Provider>
  );
};
