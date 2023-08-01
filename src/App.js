import React, { useState } from 'react';
import java from './assets/imagens/java_icon.png';
import tsIcon from './assets/imagens/ts_icon.png';

import './style.css';

export default function App() {
  // Definir o estado inicial para a cor do body
  const [bodyColor, setBodyColor] = useState('var(--azul-base)');

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
            onMouseEnter={() => handleBoxHover('var(--azul-base)')}
            onMouseLeave={() => handleBoxHover('var(--cinza)')}
          >
            <img src={tsIcon} alt="back"></img>
            <h3>Front end</h3>
          </div>

          <div
            className="col-5 box box_escuro"
            onMouseEnter={() => handleBoxHover('var(--preto-cinza)')}
            onMouseLeave={() => handleBoxHover('var(--cinza)')}
          >
            <img src={java} alt="back"></img>
            <h3>Back end</h3>
          </div>
        </div>
      </div>
    </body>
  );
}