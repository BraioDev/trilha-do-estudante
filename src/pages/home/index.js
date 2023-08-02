import {Link} from 'react-router-dom';
import React, { useState } from 'react';
import java from '../../assets/imagens/java_icon.png';
import tsIcon from '../../assets/imagens/ts_icon.png';
import android from '../../assets/imagens/android_icon.png';
import ux from '../../assets/imagens/ux.png';
import '../../style.css';

export default function Home() {
  // Definir o estado inicial para a cor do body
  const [bodyColor, setBodyColor] = useState('var(--cinza)');

  // Função para atualizar a cor do body com base na cor do box em destaque
  const handleBoxHover = (color) => {
    setBodyColor(color);
  };

  return (
    <body style={{ backgroundColor: bodyColor }}>
      <div className="row">
        <div
          className="col-3 box box_claro"
          onMouseEnter={() => handleBoxHover('var(--azul-base)')}
          onMouseLeave={() => handleBoxHover('var(--cinza)')}
          onClick={<Link to="/front" />}
        >
          <img src={tsIcon} alt="back"></img>
          <h3>Front end</h3>
        </div>

        <div
          className="col-3 box box_escuro"
          onMouseEnter={() => handleBoxHover('var(--preto-cinza)')}
          onMouseLeave={() => handleBoxHover('var(--cinza)')}
          onClick={<Link to="/back" />}
        >
          <img src={java} alt="back"></img>
          <h3>Back end</h3>
        </div>

        <div
          className="col-3 box box_verde"
          onMouseEnter={() => handleBoxHover('var(--verde-claro)')}
          onMouseLeave={() => handleBoxHover('var(--cinza)')}
          onClick={<Link to="/back" />}
        >
          <img src={android} alt="back"></img>
          <h3>Mobile</h3>
        </div>

        <div
          className="col-3 box box_roxo"
          onMouseEnter={() => handleBoxHover('var(--azul-roxo)')}
          onMouseLeave={() => handleBoxHover('var(--cinza)')}
          onClick={<Link to="/back" />}
        >
          <img src={ux} alt="back"></img>
          <h3>UI/UX</h3>
        </div>
      </div>
    </body>
  );
}