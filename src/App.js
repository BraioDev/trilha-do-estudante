import React, { useState } from 'react';
import './style.css';

export default function App() {
  // Definir o estado inicial para a cor do body
  const [bodyColor, setBodyColor] = useState('');

  // Função para atualizar a cor do body com base na cor do box em destaque
  const handleBoxHover = (color) => {
    setBodyColor(color);
  };

  return (
    <body style={{ backgroundColor: bodyColor }}>
      <div className="container">
        <div className="row">
          <div
            className="col-5 box box_claro"
            onMouseEnter={() => handleBoxHover('var(--branco-amarelado)')}
            onMouseLeave={() => handleBoxHover('var(--azul-base)')}
          ></div>
          
          <div
            className="col-5 box box_escuro"
            onMouseEnter={() => handleBoxHover('var(--preto-cinza)')}
            onMouseLeave={() => handleBoxHover('var(--azul-base)')}
          ></div>
        </div>
      </div>
    </body>
  );
}