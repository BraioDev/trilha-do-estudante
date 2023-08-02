import { Link } from 'react-router-dom';
import React, { useState } from 'react';
import back from '../../assets/imagens/node_icon.png';
import front from '../../assets/imagens/ts_icon.png';
import mobile from '../../assets/imagens/android_icon.png';
import design from '../../assets/imagens/ux.png';
import banco from '../../assets/imagens/banco_icon.png';
import '../../style.css';
import './home.css';

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
          <div class="col-12">
            <img src={front} alt="back"></img>
          </div>
          <div class="col-12">
            <h3>Front end</h3>
          </div>
        </div>

        <div
          className="col-3 box box_escuro"
          onMouseEnter={() => handleBoxHover('var(--preto-cinza)')}
          onMouseLeave={() => handleBoxHover('var(--cinza)')}
          onClick={<Link to="/back" />}
        >
          <div class="col-12">
            <img src={back} alt="back"></img>
          </div>
          <div class="col-12">
            <h3>Back end</h3>
          </div>
        </div>

        <div
          className="col-3 box box_verde"
          onMouseEnter={() => handleBoxHover('var(--verde-claro)')}
          onMouseLeave={() => handleBoxHover('var(--cinza)')}
          onClick={<Link to="/mobile" />}
        >
          <div class="col-12">
            <img src={mobile} alt="mobile"></img>
          </div>
          <div class="col-12">
            <h3>Mobile</h3>
          </div>
        </div>

        <div
          className="col-3 box box_cinza"
          onMouseEnter={() => handleBoxHover('var(--cinza-escuro)')}
          onMouseLeave={() => handleBoxHover('var(--cinza)')}
          onClick={<Link to="/design" />}
        >
          <div class="col-12">
            <img src={banco} alt="Bd"></img>
          </div>
          <div class="col-12">
            <h3>Banco de dados</h3>
          </div>
        </div>

        <div
          className="col-3 box box_roxo"
          onMouseEnter={() => handleBoxHover('var(--azul-roxo)')}
          onMouseLeave={() => handleBoxHover('var(--cinza)')}
          onClick={<Link to="/design" />}
        >
          <div class="col-12">
            <img src={design} alt="ui/ux"></img>
          </div>
          <div class="col-12">
            <h3>Ui/Ux</h3>
          </div>
        </div>
      </div>
    </body>
  );
}