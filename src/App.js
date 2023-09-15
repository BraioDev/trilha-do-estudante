import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import AuthProvider from './pages/contexts/auth'; // Importe o seu AuthProvider
import RoutesApp from './routes';

function App() {
  return (
    <Router>
      <AuthProvider>
        <div>
          <RoutesApp />
        </div>
      </AuthProvider>
    </Router>
  );
}

export default App;