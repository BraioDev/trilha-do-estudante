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
import { FaCalendar, FaCircleCheck, FaRegCircle } from "react-icons/fa6";
import { connect } from 'react-redux';

function Back(props) {

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
            {props.languages.includes('JAVA') &&
              <div className='iconCheck'><FaCircleCheck /></div>
            }
            {!props.languages.includes('JAVA') &&
              <div className='iconDontCheck'><FaRegCircle /></div>
            }
            <Link to="/java" className='link-invisivel' onClick={props.java}>
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
            {props.languages.includes('PYTHON') &&
              <div className='iconCheck'><FaCircleCheck /></div>
            }
            {!props.languages.includes('PYTHON') &&
              <div className='iconDontCheck'><FaRegCircle /></div>
            }
            <Link to="/python" className="link-invisivel" onClick={props.python}>
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
            {props.languages.includes('CSHARP') &&
              <div className='iconCheck'><FaCircleCheck /></div>
            }
            {!props.languages.includes('CSHARP') &&
              <div className='iconDontCheck'><FaRegCircle /></div>
            }
            <Link to="/csharp" className='link-invisivel' onClick={props.csharp}>
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
            {props.languages.includes('POSTMAN') &&
              <div className='iconCheck'><FaCircleCheck /></div>
            }
            {!props.languages.includes('POSTMAN') &&
              <div className='iconDontCheck'><FaRegCircle /></div>
            }
            <Link to="/postman" className='link-invisivel' onClick={props.postman}>
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
            {props.languages.includes('SPRING') &&
              <div className='iconCheck'><FaCircleCheck /></div>
            }
            {!props.languages.includes('SPRING') &&
              <div className='iconDontCheck'><FaRegCircle /></div>
            }
            <Link to="/spring" className='link-invisivel' onClick={props.spring}>
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
            {props.languages.includes('SWAGGER') &&
              <div className='iconCheck'><FaCircleCheck /></div>
            }
            {!props.languages.includes('SWAGGER') &&
              <div className='iconDontCheck'><FaRegCircle /></div>
            }
            <Link to="/swagger" className='link-invisivel' onClick={props.swagger}>
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

const mapState = (state) => {
  return {
    languages: state.languages,
  };
}

const mapAssociate = (dispatch) => {
  return {
    java: () => dispatch({ type: 'JAVA' }),
    python: () => dispatch({ type: 'PYTHON' }),
    csharp: () => dispatch({ type: 'CSHARP' }),
    postman: () => dispatch({ type: 'POSTMAN' }),
    spring: () => dispatch({ type: 'SPRING' }),
    swagger: () => dispatch({ type: 'SWAGGER' }),
  };
}
export default connect(mapState, mapAssociate)(Back)