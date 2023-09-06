import React from 'react';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { BackgroundColorProvider } from './components/BackgroundColorContext/BackgroundColorContext';
import RoutesApp from './routes';

function App() {
  return (
    <div className="App">
      <ToastContainer autoClose={10} />
      <RoutesApp />
    </div>
  );
}

export default App;