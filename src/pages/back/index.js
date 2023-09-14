import React from 'react';
import { Link } from 'react-router-dom';
import '../../style.css';
import './back.css';

import postman from '../../assets/imagens/postman.png';
import spring from '../../assets/imagens/spring.png';
import swagger from '../../assets/imagens/swagger.png';
import java from '../../assets/imagens/java.png';
import python from '../../assets/imagens/python.png';
import csharp from '../../assets/imagens/csharp.png';
import BackButton from "../../components/backButton";
import LoginButton from "../../components/loginButton";
import { Tooltip } from 'react-tippy';
import 'react-tippy/dist/tippy.css';
import { FaCalendar } from "react-icons/fa6";

export default function Back() {

  return (
    <body style={{ backgroundColor: 'var(--preto-cinza)' }}>
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
            className="col-3 box box_java"
          >
            <Link to="/java" className='link-invisivel'>
              <div class="col-12">
                <img src={java} alt="java"></img>
              </div>
              <div class="col-12">
                <h3>Java</h3>
              </div>
            </Link>
          </div>


          <div
            className="col-3 box box_python"
          >
            <Link to="/python" className="link-invisivel">
              <div className="col-12">
                <img src={python} alt="python"></img>
              </div>
              <div className="col-12">
                <h3>Python</h3>
              </div>
            </Link>
          </div>

          <div
            className="col-3 box box_roxo"
          >
            <Link to="/csharp" className='link-invisivel'>
              <div class="col-12">
                <img src={csharp} alt="c#"></img>
              </div>
              <div class="col-12">
                <h3>C#</h3>
              </div>
            </Link>
          </div>
          {/* -------------------metade dos cards----------------------- */}
          <div
            className="col-3 box box_postman"
          >
            <Link to="/postman" className='link-invisivel'>
              <div class="col-12">
                <img src={postman} alt="postman"></img>
              </div>
              <div class="col-12">
                <h3>Postman</h3>
              </div>
            </Link>
          </div>

          <div
            className="col-3 box box_verde"
          >
            <Link to="/spring" className='link-invisivel'>
              <div class="col-12">
                <img src={spring} alt="spring"></img>
              </div>
              <div class="col-12">
                <h3>Spring</h3>
              </div>
            </Link>
          </div>

          <div
            className="col-3 box box_verde"
          >
            <Link to="/swagger" className='link-invisivel'>
              <div class="col-12">
                <img src={swagger} alt="swagger"></img>
              </div>
              <div class="col-12">
                <h3>Swagger</h3>
              </div>
            </Link>
          </div>
          {/* -------------------Fim dos cards----------------------- */}
        </div>
      </div>
    </body>
  );
}