import React from 'react';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { BackgroundColorProvider } from './components/BackgroundColorContext/BackgroundColorContext';
import RoutesApp from './routes';
import Counter from './components/counter/counter'

function App() {
  return (
    <div className="App">
      <ToastContainer autoClose={10} />
      <RoutesApp />
      <Counter />
    </div>
  );
}

export default App;