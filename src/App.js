import React from 'react';
import RoutesApp from './routes';
import { AccessibilityProvider } from './components/AccessibilityContext/AccessibilityContext';

function App() {
  return (
    <AccessibilityProvider>
      <div>
        <RoutesApp />
      </div>
    </AccessibilityProvider>
  );
}

export default App;
