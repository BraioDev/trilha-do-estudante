import React from 'react';
import { Link } from 'react-router-dom';
import '../../style.css';
import './front.css';

import angular from '../../assets/imagens/angular_icon.png';
import bootstrap from '../../assets/imagens/bootstrap_icon.png';
import html from '../../assets/imagens/html_icon.png';
import javaScript from '../../assets/imagens/js_icon.png';
import react from '../../assets/imagens/react.png';
import typeScript from '../../assets/imagens/ts_icon.png';
import BackButton from "../../components/backButton";
import LoginButton from "../../components/loginButton";
import { Tooltip } from 'react-tippy';
import 'react-tippy/dist/tippy.css';
import { FaCalendar } from "react-icons/fa6";

export default function Front() {

  return (
    <body style={{ backgroundColor: 'var(--azul-base)' }}>
      <div className="container">
        <div className="row">
          <div className="w-100 alinhar-fim">
            <BackButton />
            <Tooltip
              title="Calendário"
              position="bottom"
              trigger="mouseenter"
              className="tool"
            >
              <Link to="/historico" className='link-invisivel'>
                <button className="botao button-dark espacamento">
                  <FaCalendar size={20} className="icon" />
                </button>
              </Link>
            </Tooltip>
            <LoginButton />
          </div>
          {/* -------------------Inicio dos cards----------------------- */}
          <div
            className="col-3 box box_claro"
          >
            <Link to="/typeScript" className='link-invisivel'>
              <div className="col-12">
                <img src={typeScript} alt="TypeScript"></img>
              </div>
              <div className="col-12">
                <h3>TypeScript</h3>
              </div>
            </Link>
          </div>


          <div
            className="col-3 box box_html"
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
          >
            <Link to="/javaScript" className='link-invisivel'>
              <div className="col-12">
                <img src={javaScript} alt="javaScript"></img>
              </div>
              <div className="col-12">
                <h3>JavaScript</h3>
              </div>
            </Link>
          </div>
          {/* -------------------metade dos cards----------------------- */}
          <div
            className="col-3 box box_angular"
          >
            <Link to="/angular" className='link-invisivel'>
              <div className="col-12">
                <img src={angular} alt="angular"></img>
              </div>
              <div className="col-12">
                <h3>Angular</h3>
              </div>
            </Link>
          </div>

          <div
            className="col-3 box box_react"
          >
            <Link to="/react" className='link-invisivel'>
              <div className="col-12">
                <img src={react} alt="react"></img>
              </div>
              <div className="col-12">
                <h3>React</h3>
              </div>
            </Link>
          </div>

          <div
            className="col-3 box box_roxo"
          >
            <Link to="/bootstrap" className='link-invisivel'>
              <div className="col-12">
                <img src={bootstrap} alt="bootstrap"></img>
              </div>
              <div className="col-12">
                <h3>Bootstrap</h3>
              </div>
            </Link>
          </div>
          {/* -------------------Fim dos cards----------------------- */}
        </div>
      </div>
    </body>
  );
}