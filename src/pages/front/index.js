import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../../style.css';
import './front.css';

import angular from '../../assets/imagens/angular_icon.png';
import typeScript from '../../assets/imagens/ts_icon.png';
import html from '../../assets/imagens/html_icon.png';
import javaScript from '../../assets/imagens/js_icon.png';
import react from '../../assets/imagens/react.png';
import bootstrap from '../../assets/imagens/bootstrap_icon.png';

export default function Front() {

  // Definir o estado inicial para a cor do body
  const [bodyColor, setBodyColor] = useState('var(--cinza)');

  // Função para atualizar a cor do body com base na cor do box em destaque
  const handleBoxHover = (color) => {
    setBodyColor(color);
  };

  return (
    <body style={{ backgroundColor: 'var(--azul-base)' }}>
      <div className="container">
        <div className="row">

          {/* -------------------Inicio dos cards----------------------- */}
          <div
            className="col-3 box box_claro"
            onMouseEnter={() => handleBoxHover('var(--azul-base)')}
            onMouseLeave={() => handleBoxHover('var(--cinza)')}
          >
            <Link to="/typeScript" className='link-invisivel'>
              <div class="col-12">
                <img src={typeScript} alt="TypeScript"></img>
              </div>
              <div class="col-12">
                <h3>Front end</h3>
              </div>
            </Link>
          </div>


          <div
            className="col-3 box box_html"
            onMouseEnter={() => handleBoxHover('var(--preto-cinza)')}
            onMouseLeave={() => handleBoxHover('var(--cinza)')}
          >
            <Link to="/html" className="link-invisivel">
              <div className="col-12">
                <img src={html} alt="html"></img>
              </div>
              <div className="col-12">
                <h3>Html</h3>
              </div>
            </Link>
          </div>

          <div
            className="col-3 box box_js"
            onMouseEnter={() => handleBoxHover('var(--verde-claro)')}
            onMouseLeave={() => handleBoxHover('var(--cinza)')}
          >
            <Link to="/javaScript" className='link-invisivel'>
              <div class="col-12">
                <img src={javaScript} alt="javaScript"></img>
              </div>
              <div class="col-12">
                <h3>JavaScript</h3>
              </div>
            </Link>
          </div>
          {/* -------------------metade dos cards----------------------- */}
          <div
            className="col-3 box box_angular"
            onMouseEnter={() => handleBoxHover('var(--cinza-escuro)')}
            onMouseLeave={() => handleBoxHover('var(--cinza)')}
          >
            <Link to="/angular" className='link-invisivel'>
              <div class="col-12">
                <img src={angular} alt="angular"></img>
              </div>
              <div class="col-12">
                <h3>Angular</h3>
              </div>
            </Link>
          </div>

          <div
            className="col-3 box box_react"
            onMouseEnter={() => handleBoxHover('var(--azul-roxo)')}
            onMouseLeave={() => handleBoxHover('var(--cinza)')}
          >
            <Link to="/react" className='link-invisivel'>
              <div class="col-12">
                <img src={react} alt="react"></img>
              </div>
              <div class="col-12">
                <h3>React</h3>
              </div>
            </Link>
          </div>

          <div
            className="col-3 box box_roxo"
            onMouseEnter={() => handleBoxHover('var(--azul-roxo)')}
            onMouseLeave={() => handleBoxHover('var(--cinza)')}
          >
            <Link to="/bootstrap" className='link-invisivel'>
              <div class="col-12">
                <img src={bootstrap} alt="bootstrap"></img>
              </div>
              <div class="col-12">
                <h3>Bootstrap</h3>
              </div>
            </Link>
          </div>

          <div className="col-1 posicao-botao">
            <Link to="/" className='link-invisivel'>
              <button className='button-dark'>Voltar</button>
            </Link>
          </div>
          {/* -------------------Fim dos cards----------------------- */}
        </div>
      </div>
    </body>
  );
}